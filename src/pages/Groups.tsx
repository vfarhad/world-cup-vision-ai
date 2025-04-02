
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockGroups } from '@/data/mockData';

const Groups = () => {
  const [activeTab, setActiveTab] = useState('A');
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-fifa-navy">
        FIFA World Cup 2026 Groups
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-8">
        {mockGroups.map(group => (
          <button
            key={group.name}
            className={`py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
              activeTab === group.name.split(' ')[1] 
                ? 'bg-fifa-blue text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveTab(group.name.split(' ')[1])}
          >
            Group {group.name.split(' ')[1]}
          </button>
        ))}
      </div>
      
      <div className="mb-12">
        {mockGroups.map(group => (
          <div 
            key={group.name} 
            className={activeTab === group.name.split(' ')[1] ? 'block animate-fade-in' : 'hidden'}
          >
            <Card className="mb-8 shadow-md">
              <CardHeader className="bg-fifa-navy text-white">
                <CardTitle>{group.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 text-left font-medium">Team</th>
                        <th className="p-3 text-center font-medium">P</th>
                        <th className="p-3 text-center font-medium">W</th>
                        <th className="p-3 text-center font-medium">D</th>
                        <th className="p-3 text-center font-medium">L</th>
                        <th className="p-3 text-center font-medium">GF</th>
                        <th className="p-3 text-center font-medium">GA</th>
                        <th className="p-3 text-center font-medium">GD</th>
                        <th className="p-3 text-center font-medium">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.teams.map((team, index) => (
                        <tr 
                          key={team.name} 
                          className={`
                            border-b
                            ${index < 2 ? 'bg-green-50' : ''} 
                            ${index === 2 ? 'bg-yellow-50' : ''}
                          `}
                        >
                          <td className="p-3 font-medium flex items-center gap-2">
                            <span className="inline-block w-6 h-6 bg-gray-200 rounded-full flex-shrink-0"></span>
                            {team.name}
                          </td>
                          <td className="p-3 text-center">{team.played}</td>
                          <td className="p-3 text-center">{team.won}</td>
                          <td className="p-3 text-center">{team.drawn}</td>
                          <td className="p-3 text-center">{team.lost}</td>
                          <td className="p-3 text-center">{team.goalsFor}</td>
                          <td className="p-3 text-center">{team.goalsAgainst}</td>
                          <td className="p-3 text-center">{team.goalDifference}</td>
                          <td className="p-3 text-center font-bold">{team.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-md">
                <CardHeader className="bg-fifa-blue text-white">
                  <CardTitle className="text-lg">Group Matches</CardTitle>
                </CardHeader>
                <CardContent className="divide-y">
                  {group.matches.map((match, index) => (
                    <div key={index} className="py-3">
                      <div className="text-sm text-gray-500 mb-1">{match.date} - {match.time}</div>
                      <div className="flex justify-between items-center">
                        <div className="font-medium">{match.homeTeam}</div>
                        <div className="text-sm bg-gray-100 px-2 py-1 rounded">
                          {match.result || 'vs'}
                        </div>
                        <div className="font-medium">{match.awayTeam}</div>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{match.venue}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardHeader className="bg-fifa-gold text-fifa-navy">
                  <CardTitle className="text-lg">Team Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue={group.teams[0].name.toLowerCase().replace(/\s+/g, '-')}>
                    <TabsList className="w-full flex mb-4 overflow-x-auto space-x-1">
                      {group.teams.map(team => (
                        <TabsTrigger 
                          key={team.name} 
                          value={team.name.toLowerCase().replace(/\s+/g, '-')}
                          className="flex-grow"
                        >
                          {team.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {group.teams.map(team => (
                      <TabsContent 
                        key={team.name} 
                        value={team.name.toLowerCase().replace(/\s+/g, '-')}
                      >
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-fifa-navy">Coach</h4>
                            <p>{team.coach || 'TBA'}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-fifa-navy">FIFA Rank</h4>
                            <p>{team.rank || 'TBA'}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-fifa-navy">Last 5 Matches</h4>
                            <div className="flex space-x-1 mt-1">
                              {(team.lastFive || ['U', 'U', 'U', 'U', 'U']).map((result, i) => (
                                <span 
                                  key={i} 
                                  className={`
                                    inline-block w-6 h-6 rounded-full text-xs flex items-center justify-center font-medium
                                    ${result === 'W' ? 'bg-green-500 text-white' : 
                                      result === 'D' ? 'bg-yellow-500 text-white' : 
                                      result === 'L' ? 'bg-red-500 text-white' : 'bg-gray-200'}
                                  `}
                                >
                                  {result}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-fifa-navy">Key Players</h4>
                            <ul className="list-disc pl-5 mt-1">
                              {(team.keyPlayers || ['TBA']).map((player, i) => (
                                <li key={i}>{player}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
