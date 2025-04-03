
import React from 'react';
import { KnockoutMatchCard } from './RoundOf32';
import { mockSemiFinals } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SemiFinals = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-fifa-navy">
        FIFA World Cup 2026 - Semi Finals
      </h1>
      
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <p className="text-lg text-gray-700">
          The Semi Finals feature the 4 winners from the Quarter Finals. These teams compete for a place in the Final.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {mockSemiFinals.map((match, index) => (
          <KnockoutMatchCard 
            key={index} 
            match={match} 
            stageType="Semi Final"
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

export default SemiFinals;
