
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockRoundOf32 } from '@/data/mockData';

const RoundOf32 = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-fifa-navy">
        FIFA World Cup 2026 - Round of 32
      </h1>
      
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <p className="text-lg text-gray-700">
          The Round of 32 is the first knockout stage of the FIFA World Cup 2026, featuring the top 2 teams from each group and the 8 best third-placed teams.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRoundOf32.map((match, index) => (
          <KnockoutMatchCard key={index} match={match} stageType="Round of 32" />
        ))}
      </div>
    </div>
  );
};

export const KnockoutMatchCard = ({ 
  match, 
  stageType 
}: { 
  match: any; 
  stageType: string;
}) => {
  const [showPrediction, setShowPrediction] = useState(false);
  
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <div className="bg-fifa-blue text-white p-3 flex justify-between items-center">
        <div className="font-medium">{stageType}</div>
        <div className="text-sm">{match.date} • {match.time}</div>
      </div>
      <CardContent className="p-0">
        <div className="p-4">
          <div className="text-sm font-medium text-center text-gray-500 mb-2">Match {match.matchNumber}</div>
          
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div>
                <span className="font-medium">{match.homeTeam}</span>
                {match.homeQualification && (
                  <div className="text-xs text-gray-500">{match.homeQualification}</div>
                )}
              </div>
            </div>
            <div className="text-lg font-bold">
              {match.result ? match.result.split('-')[0] : ''}
            </div>
          </div>
          
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div>
                <span className="font-medium">{match.awayTeam}</span>
                {match.awayQualification && (
                  <div className="text-xs text-gray-500">{match.awayQualification}</div>
                )}
              </div>
            </div>
            <div className="text-lg font-bold">
              {match.result ? match.result.split('-')[1] : ''}
            </div>
          </div>
          
          <div className="text-sm text-gray-500 mt-2">{match.venue}</div>
          
          {match.winnerAdvancesTo && (
            <div className="text-sm text-fifa-blue mt-3">
              Winner advances to: {match.winnerAdvancesTo}
            </div>
          )}
        </div>
        
        <div className="border-t p-4">
          <Button
            variant="outline"
            onClick={() => setShowPrediction(!showPrediction)}
            className="w-full"
          >
            {showPrediction ? 'Hide Prediction' : 'Show Prediction'}
          </Button>
          
          {showPrediction && (
            <div className="mt-4 animate-fade-in">
              <h4 className="font-medium text-center mb-2">Match Prediction</h4>
              <div className="flex justify-between text-sm mb-1">
                <span>{match.homeTeam}</span>
                <span>Draw</span>
                <span>{match.awayTeam}</span>
              </div>
              <div className="flex h-4 rounded-full overflow-hidden">
                <div 
                  className="bg-green-500" 
                  style={{ width: `${match.prediction?.home || 40}%` }}
                ></div>
                <div 
                  className="bg-gray-400" 
                  style={{ width: `${match.prediction?.draw || 20}%` }}
                ></div>
                <div 
                  className="bg-blue-500" 
                  style={{ width: `${match.prediction?.away || 40}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>{match.prediction?.home || 40}%</span>
                <span>{match.prediction?.draw || 20}%</span>
                <span>{match.prediction?.away || 40}%</span>
              </div>
              
              <div className="mt-4 text-sm">
                <div className="font-medium">Projected Winner</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <span>{match.prediction?.projectedWinner || 'To be determined'}</span>
                </div>
              </div>
              
              {match.prediction?.comment && (
                <div className="mt-3 text-sm bg-gray-50 p-3 rounded">
                  <p>{match.prediction.comment}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RoundOf32;
