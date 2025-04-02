
import React from 'react';
import { KnockoutMatchCard } from './RoundOf32';
import { mockRoundOf16 } from '@/data/mockData';

const RoundOf16 = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-fifa-navy">
        FIFA World Cup 2026 - Round of 16
      </h1>
      
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <p className="text-lg text-gray-700">
          The Round of 16 features the winners from the Round of 32 matches. These teams compete for a place in the quarter-finals.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockRoundOf16.map((match, index) => (
          <KnockoutMatchCard key={index} match={match} stageType="Round of 16" />
        ))}
      </div>
    </div>
  );
};

export default RoundOf16;
