
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { mockMatches } from '@/data/mockData';

const Matches = () => {
  const [filter, setFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  // Get unique dates from matches
  const dates = [...new Set(mockMatches.map(match => match.date))];

  // Filter matches based on current filters
  const filteredMatches = mockMatches.filter(match => {
    const passesGroupFilter = filter === 'all' || match.group === filter;
    const passesDateFilter = dateFilter === 'all' || match.date === dateFilter;
    return passesGroupFilter && passesDateFilter;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-fifa-navy">
        FIFA World Cup 2026 Matches
      </h1>

      <Tabs defaultValue="matches" className="mb-8">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-2">
          <TabsTrigger value="matches">Matches</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        
        <TabsContent value="matches" className="animate-fade-in">
          <div className="mb-6 flex flex-wrap gap-2 justify-center">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-fifa-blue' : ''}
            >
              All Groups
            </Button>
            {Array.from({ length: 12 }, (_, i) => String.fromCharCode(65 + i)).map(group => (
              <Button
                key={group}
                variant={filter === `Group ${group}` ? 'default' : 'outline'}
                onClick={() => setFilter(`Group ${group}`)}
                className={filter === `Group ${group}` ? 'bg-fifa-blue' : ''}
              >
                Group {group}
              </Button>
            ))}
          </div>

          <div className="mb-6 flex flex-wrap gap-2 justify-center">
            <Button
              variant={dateFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setDateFilter('all')}
              className={dateFilter === 'all' ? 'bg-fifa-blue' : ''}
            >
              All Dates
            </Button>
            {dates.map(date => (
              <Button
                key={date}
                variant={dateFilter === date ? 'default' : 'outline'}
                onClick={() => setDateFilter(date)}
                className={dateFilter === date ? 'bg-fifa-blue' : ''}
              >
                {date}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMatches.length > 0 ? (
              filteredMatches.map((match, index) => (
                <MatchCard key={index} match={match} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-gray-500">No matches found with the selected filters.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {setFilter('all'); setDateFilter('all');}}
                  className="mt-4"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="calendar" className="animate-fade-in">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {dates.map(date => (
              <div key={date} className="mb-6">
                <div className="bg-fifa-navy text-white py-3 px-4 font-semibold">
                  {date}
                </div>
                <div className="divide-y">
                  {mockMatches
                    .filter(match => match.date === date)
                    .map((match, index) => (
                      <div key={index} className="p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-500">{match.time}</div>
                          <div className="text-sm font-medium text-fifa-blue">{match.group}</div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="font-medium">{match.homeTeam}</div>
                          <div className="text-sm bg-gray-100 px-2 py-1 rounded mx-2">
                            {match.result || 'vs'}
                          </div>
                          <div className="font-medium">{match.awayTeam}</div>
                        </div>
                        <div className="text-sm text-gray-500 mt-2">{match.venue}</div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const MatchCard = ({ match }: { match: any }) => {
  const [prediction, setPrediction] = useState<any>(match.result ? match.prediction : null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handlePredict = async () => {
    if (prediction) {
      setShow((s) => !s);
      return;
    }
    setLoading(true);
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
      setPrediction(data);
      setShow(true);
    } catch (e: any) {
      const msg = e?.message || 'Failed to get prediction';
      if (msg.includes('429')) toast('Rate limit reached, try again shortly.');
      else if (msg.includes('402')) toast('AI credits exhausted. Please add funds.');
      else toast(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <div className="bg-fifa-navy text-white p-3 flex justify-between items-center">
        <div className="font-medium">{match.group}</div>
        <div className="text-sm">{match.date} • {match.time}</div>
      </div>
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <span className="font-medium">{match.homeTeam}</span>
            </div>
            <div className="text-lg font-bold">
              {match.result ? match.result.split('-')[0] : ''}
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <span className="font-medium">{match.awayTeam}</span>
            </div>
            <div className="text-lg font-bold">
              {match.result ? match.result.split('-')[1] : ''}
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-2">{match.venue}</div>
        </div>

        <div className="border-t p-4">
          <Button
            variant="outline"
            onClick={handlePredict}
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Generating AI Prediction...</>
            ) : prediction ? (
              show ? 'Hide AI Prediction' : 'Show AI Prediction'
            ) : (
              'Get AI Prediction'
            )}
          </Button>

          {show && prediction && (
            <div className="mt-4 animate-fade-in">
              <h4 className="font-medium text-center mb-2">AI Match Prediction</h4>
              {prediction.predictedScore && (
                <div className="text-center text-sm text-gray-600 mb-2">
                  Predicted: <span className="font-semibold">{prediction.predictedScore}</span>
                </div>
              )}
              <div className="flex justify-between text-sm mb-1">
                <span>{match.homeTeam}</span>
                <span>Draw</span>
                <span>{match.awayTeam}</span>
              </div>
              <div className="flex h-4 rounded-full overflow-hidden">
                <div className="bg-green-500" style={{ width: `${prediction.home ?? 33}%` }} />
                <div className="bg-gray-400" style={{ width: `${prediction.draw ?? 34}%` }} />
                <div className="bg-blue-500" style={{ width: `${prediction.away ?? 33}%` }} />
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>{prediction.home ?? 33}%</span>
                <span>{prediction.draw ?? 34}%</span>
                <span>{prediction.away ?? 33}%</span>
              </div>
              {(prediction.analysis || prediction.comment) && (
                <div className="mt-3 text-sm bg-gray-50 p-3 rounded">
                  <p>{prediction.analysis || prediction.comment}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Matches;
