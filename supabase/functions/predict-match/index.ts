import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { homeTeam, awayTeam, group, venue } = await req.json();

    if (!homeTeam || !awayTeam) {
      return new Response(
        JSON.stringify({ error: "homeTeam and awayTeam are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt =
      "You are an expert football (soccer) analyst for the FIFA World Cup 2026. " +
      "Given a fixture, return realistic win/draw/loss probabilities (integers summing to 100), " +
      "a likely scoreline, and a concise 2-3 sentence analysis grounded in current form, " +
      "FIFA rankings, head-to-head history and venue context.";

    const userPrompt =
      `Predict the outcome of this FIFA World Cup 2026 group stage match:\n` +
      `Home: ${homeTeam}\nAway: ${awayTeam}\n` +
      (group ? `Group: ${group}\n` : "") +
      (venue ? `Venue: ${venue}\n` : "");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          tools: [
            {
              type: "function",
              function: {
                name: "submit_prediction",
                description: "Submit a structured match prediction.",
                parameters: {
                  type: "object",
                  properties: {
                    home_win: { type: "integer", description: "Probability home wins (0-100)" },
                    draw: { type: "integer", description: "Probability of draw (0-100)" },
                    away_win: { type: "integer", description: "Probability away wins (0-100)" },
                    predicted_score: {
                      type: "string",
                      description: "Most likely scoreline, e.g. '2-1'",
                    },
                    analysis: {
                      type: "string",
                      description: "2-3 sentence rationale for the prediction.",
                    },
                  },
                  required: ["home_win", "draw", "away_win", "predicted_score", "analysis"],
                  additionalProperties: false,
                },
              },
            },
          ],
          tool_choice: {
            type: "function",
            function: { name: "submit_prediction" },
          },
        }),
      },
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("AI gateway error", response.status, text);
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Add funds in Lovable settings." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const toolCall = data?.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      console.error("No tool call returned", JSON.stringify(data));
      return new Response(JSON.stringify({ error: "Model did not return a prediction" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const args = JSON.parse(toolCall.function.arguments);
    return new Response(JSON.stringify(args), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("predict-match error", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
