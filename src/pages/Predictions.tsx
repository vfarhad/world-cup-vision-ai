import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Sparkles } from 'lucide-react';
import { mockMatches } from '@/data/mockData';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

type Prediction = {
  home_win: number;
  draw: number;
  away_win: number;
  predicted_score: string;
  analysis: string;
};

const Predictions = () => {
  const [matchIdx, setMatchIdx] = useState<string>('0');
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<Prediction | null>(null);

  const match = useMemo(() => mockMatches[Number(matchIdx)], [matchIdx]);

  const handlePredict = async () => {
    if (!match) return;
    setLoading(true);
    setPrediction(null);
    try {
      const { data, error } = await supabase.functions.invoke('predict-match', {
        body: {
          homeTeam: match.homeTeam,
          awayTeam: match.awayTeam,
          group: match.group,
          venue: match.venue,
        },
      });
      if (error) throw error;
      if ((data as any)?.error) throw new Error((data as any).error);
      setPrediction(data as Prediction);
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || 'Failed to generate prediction');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-fifa-navy">
        AI Match Predictions
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Powered by AI — pick a fixture and get a real-time forecast.
      </p>

      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader className="bg-fifa-navy text-white">
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-fifa-gold" /> Choose a Match
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <Select value={matchIdx} onValueChange={setMatchIdx}>
            <SelectTrigger>
              <SelectValue placeholder="Select a match" />
            </SelectTrigger>
            <SelectContent className="max-h-80">
              {mockMatches.map((m, i) => (
                <SelectItem key={i} value={String(i)}>
                  {m.group} — {m.homeTeam} vs {m.awayTeam} ({m.date})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {match && (
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div className="text-center flex-1">
                  <div className="font-bold text-lg text-fifa-navy">{match.homeTeam}</div>
                  <div className="text-xs text-gray-500">Home</div>
                </div>
                <div className="text-gray-400 font-bold">vs</div>
                <div className="text-center flex-1">
                  <div className="font-bold text-lg text-fifa-navy">{match.awayTeam}</div>
                  <div className="text-xs text-gray-500">Away</div>
                </div>
              </div>
              <div className="text-center text-sm text-gray-500 mt-2">
                {match.venue} · {match.date} · {match.time}
              </div>
            </div>
          )}

          <Button
            onClick={handlePredict}
            disabled={loading}
            className="w-full bg-fifa-gold hover:bg-yellow-500 text-fifa-navy text-lg py-6"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Predicting…
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" /> Generate AI Prediction
              </>
            )}
          </Button>

          {prediction && (
            <div className="space-y-4 animate-fade-in">
              <div className="text-center">
                <div className="text-sm text-gray-500">Predicted Score</div>
                <div className="text-4xl font-bold text-fifa-navy">
                  {match.homeTeam} <span className="text-fifa-gold">{prediction.predicted_score}</span> {match.awayTeam}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{match.homeTeam}</span>
                  <span>Draw</span>
                  <span>{match.awayTeam}</span>
                </div>
                <div className="flex h-5 rounded-full overflow-hidden">
                  <div className="bg-green-500 flex items-center justify-center text-xs text-white font-bold" style={{ width: `${prediction.home_win}%` }}>
                    {prediction.home_win}%
                  </div>
                  <div className="bg-gray-400 flex items-center justify-center text-xs text-white font-bold" style={{ width: `${prediction.draw}%` }}>
                    {prediction.draw}%
                  </div>
                  <div className="bg-blue-500 flex items-center justify-center text-xs text-white font-bold" style={{ width: `${prediction.away_win}%` }}>
                    {prediction.away_win}%
                  </div>
                </div>
              </div>

              <div className="bg-fifa-light rounded-lg p-4 border-l-4 border-fifa-gold">
                <div className="text-sm font-bold text-fifa-navy mb-1">AI Analysis</div>
                <p className="text-gray-700 text-sm leading-relaxed">{prediction.analysis}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Predictions;
