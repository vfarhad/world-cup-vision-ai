
import React from 'react';
import { KnockoutMatchCard } from './RoundOf32';
import { mockQuarterFinals } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const QuarterFinals = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-fifa-navy">
        FIFA World Cup 2026 - Quarter Finals
      </h1>
      
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <p className="text-lg text-gray-700">
          The Quarter Finals feature the 8 winners from the Round of 16. These teams compete for a place in the Semi Finals.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockQuarterFinals.map((match, index) => (
          <KnockoutMatchCard 
            key={index} 
            match={match} 
            stageType="Quarter Final"
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
        ))}
      </div>
    </div>
  );
};

export default QuarterFinals;
