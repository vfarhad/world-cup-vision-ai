
import React from 'react';
import { KnockoutMatchCard } from './RoundOf32';
import { mockFinal } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Finals = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-fifa-navy">
        FIFA World Cup 2026 - Finals
      </h1>
      
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <p className="text-lg text-gray-700">
          The culmination of the tournament features the final to crown the World Champions and the third-place match.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
        <div className="p-6 bg-gradient-to-r from-fifa-blue to-fifa-navy rounded-lg text-white text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">World Cup Final</h2>
          <p>The pinnacle of international football - the two best teams compete for the ultimate prize.</p>
        </div>
        
        <KnockoutMatchCard 
          match={mockFinal[0]} 
          stageType="Final"
          renderButton={(matchId) => (
            <Link to={`/matches/${matchId}`}>
              <Button 
                className="w-full bg-fifa-gold hover:bg-yellow-600 text-fifa-navy font-bold"
              >
                View Final details
              </Button>
            </Link>
          )}
        />
        
        <div className="p-6 bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg text-white text-center my-6">
          <h2 className="text-xl font-bold mb-2">Third Place Match</h2>
          <p>The battle for bronze between the two semi-final losers.</p>
        </div>
        
        <KnockoutMatchCard 
          match={mockFinal[1]} 
          stageType="Third Place Match"
          renderButton={(matchId) => (
            <Link to={`/matches/${matchId}`}>
              <Button 
                className="w-full bg-fifa-blue hover:bg-fifa-navy text-white"
              >
                View match details
              </Button>
            </Link>
          )}
        />
      </div>
    </div>
  );
};

export default Finals;
