// Mock data for FIFA World Cup 2026

// Mock Groups
export const mockGroups = [
  {
    name: "Group A",
    teams: [
      {
        name: "USA",
        played: 3,
        won: 2,
        drawn: 1,
        lost: 0,
        goalsFor: 5,
        goalsAgainst: 1,
        goalDifference: 4,
        points: 7,
        coach: "Gregg Berhalter",
        rank: 13,
        lastFive: ["W", "W", "D", "W", "L"],
        keyPlayers: ["Christian Pulisic", "Weston McKennie", "Tyler Adams"]
      },
      {
        name: "Mexico",
        played: 3,
        won: 2,
        drawn: 0,
        lost: 1,
        goalsFor: 4,
        goalsAgainst: 2,
        goalDifference: 2,
        points: 6,
        coach: "Javier Aguirre",
        rank: 15,
        lastFive: ["W", "L", "W", "D", "W"],
        keyPlayers: ["Hirving Lozano", "Edson Alvarez", "Raúl Jiménez"]
      },
      {
        name: "Senegal",
        played: 3,
        won: 1,
        drawn: 0,
        lost: 2,
        goalsFor: 2,
        goalsAgainst: 3,
        goalDifference: -1,
        points: 3,
        coach: "Aliou Cissé",
        rank: 18,
        lastFive: ["L", "W", "W", "L", "D"],
        keyPlayers: ["Sadio Mané", "Kalidou Koulibaly", "Édouard Mendy"]
      },
      {
        name: "Qatar",
        played: 3,
        won: 0,
        drawn: 1,
        lost: 2,
        goalsFor: 1,
        goalsAgainst: 6,
        goalDifference: -5,
        points: 1,
        coach: "Félix Sánchez",
        rank: 58,
        lastFive: ["L", "L", "D", "L", "L"],
        keyPlayers: ["Akram Afif", "Hassan Al-Haydos", "Almoez Ali"]
      }
    ],
    matches: [
      {
        date: "June 12, 2026",
        time: "20:00",
        homeTeam: "USA",
        awayTeam: "Qatar",
        venue: "MetLife Stadium, New York",
        result: "2-0"
      },
      {
        date: "June 13, 2026",
        time: "17:00",
        homeTeam: "Mexico",
        awayTeam: "Senegal",
        venue: "Estadio Azteca, Mexico City",
        result: "2-1"
      },
      {
        date: "June 16, 2026",
        time: "14:00",
        homeTeam: "Qatar",
        awayTeam: "Mexico",
        venue: "AT&T Stadium, Dallas",
        result: "0-2"
      },
      {
        date: "June 16, 2026",
        time: "17:00",
        homeTeam: "USA",
        awayTeam: "Senegal",
        venue: "SoFi Stadium, Los Angeles",
        result: "1-1"
      },
      {
        date: "June 19, 2026",
        time: "20:00",
        homeTeam: "Senegal",
        awayTeam: "Qatar",
        venue: "MetLife Stadium, New York",
        result: "1-0"
      },
      {
        date: "June 19, 2026",
        time: "20:00",
        homeTeam: "Mexico",
        awayTeam: "USA",
        venue: "Estadio Azteca, Mexico City",
        result: "0-2"
      }
    ]
  },
  {
    name: "Group B",
    teams: [
      {
        name: "Brazil",
        played: 3,
        won: 3,
        drawn: 0,
        lost: 0,
        goalsFor: 7,
        goalsAgainst: 1,
        goalDifference: 6,
        points: 9,
        coach: "Dorival Júnior",
        rank: 5,
        lastFive: ["W", "W", "W", "D", "W"],
        keyPlayers: ["Vinicius Jr.", "Rodrygo", "Marquinhos"]
      },
      {
        name: "England",
        played: 3,
        won: 2,
        drawn: 0,
        lost: 1,
        goalsFor: 5,
        goalsAgainst: 2,
        goalDifference: 3,
        points: 6,
        coach: "Thomas Tuchel",
        rank: 4,
        lastFive: ["W", "L", "W", "W", "W"],
        keyPlayers: ["Jude Bellingham", "Phil Foden", "Bukayo Saka"]
      },
      {
        name: "Japan",
        played: 3,
        won: 1,
        drawn: 0,
        lost: 2,
        goalsFor: 3,
        goalsAgainst: 5,
        goalDifference: -2,
        points: 3,
        coach: "Hajime Moriyasu",
        rank: 20,
        lastFive: ["L", "W", "L", "W", "D"],
        keyPlayers: ["Takefusa Kubo", "Daichi Kamada", "Takehiro Tomiyasu"]
      },
      {
        name: "Canada",
        played: 3,
        won: 0,
        drawn: 0,
        lost: 3,
        goalsFor: 1,
        goalsAgainst: 8,
        goalDifference: -7,
        points: 0,
        coach: "Jesse Marsch",
        rank: 49,
        lastFive: ["L", "L", "L", "D", "L"],
        keyPlayers: ["Alphonso Davies", "Jonathan David", "Stephen Eustáquio"]
      }
    ],
    matches: [
      {
        date: "June 13, 2026",
        time: "14:00",
        homeTeam: "Brazil",
        awayTeam: "Canada",
        venue: "Rose Bowl, Los Angeles",
        result: "3-0"
      },
      {
        date: "June 13, 2026",
        time: "20:00",
        homeTeam: "England",
        awayTeam: "Japan",
        venue: "Lincoln Financial Field, Philadelphia",
        result: "2-1"
      },
      {
        date: "June 16, 2026",
        time: "20:00",
        homeTeam: "Canada",
        awayTeam: "England",
        venue: "BMO Field, Toronto",
        result: "0-3"
      },
      {
        date: "June 17, 2026",
        time: "17:00",
        homeTeam: "Brazil",
        awayTeam: "Japan",
        venue: "Hard Rock Stadium, Miami",
        result: "2-1"
      },
      {
        date: "June 20, 2026",
        time: "17:00",
        homeTeam: "Japan",
        awayTeam: "Canada",
        venue: "BC Place, Vancouver",
        result: "2-1"
      },
      {
        date: "June 20, 2026",
        time: "17:00",
        homeTeam: "England",
        awayTeam: "Brazil",
        venue: "AT&T Stadium, Dallas",
        result: "0-2"
      }
    ]
  },
  {
    name: "Group C",
    teams: [
      {
        name: "Argentina",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Netherlands",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Serbia",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Egypt",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      }
    ],
    matches: [
      {
        date: "June 14, 2026",
        time: "14:00",
        homeTeam: "Argentina",
        awayTeam: "Egypt",
        venue: "MetLife Stadium, New York",
        result: ""
      },
      {
        date: "June 14, 2026",
        time: "17:00",
        homeTeam: "Netherlands",
        awayTeam: "Serbia",
        venue: "SoFi Stadium, Los Angeles",
        result: ""
      },
      {
        date: "June 17, 2026",
        time: "14:00",
        homeTeam: "Egypt",
        awayTeam: "Netherlands",
        venue: "Lincoln Financial Field, Philadelphia",
        result: ""
      },
      {
        date: "June 17, 2026",
        time: "20:00",
        homeTeam: "Argentina",
        awayTeam: "Serbia",
        venue: "Hard Rock Stadium, Miami",
        result: ""
      },
      {
        date: "June 20, 2026",
        time: "14:00",
        homeTeam: "Serbia",
        awayTeam: "Egypt",
        venue: "Rose Bowl, Los Angeles",
        result: ""
      },
      {
        date: "June 20, 2026",
        time: "14:00",
        homeTeam: "Netherlands",
        awayTeam: "Argentina",
        venue: "Lincoln Financial Field, Philadelphia",
        result: ""
      }
    ]
  },
  {
    name: "Group D",
    teams: [
      {
        name: "France",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Portugal",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Morocco",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Australia",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      }
    ],
    matches: [
      {
        date: "June 14, 2026",
        time: "20:00",
        homeTeam: "France",
        awayTeam: "Australia",
        venue: "Levi's Stadium, San Francisco",
        result: ""
      },
      {
        date: "June 15, 2026",
        time: "14:00",
        homeTeam: "Portugal",
        awayTeam: "Morocco",
        venue: "Gillette Stadium, Boston",
        result: ""
      },
      {
        date: "June 18, 2026",
        time: "17:00",
        homeTeam: "Australia",
        awayTeam: "Portugal",
        venue: "AT&T Stadium, Dallas",
        result: ""
      },
      {
        date: "June 18, 2026",
        time: "20:00",
        homeTeam: "France",
        awayTeam: "Morocco",
        venue: "MetLife Stadium, New York",
        result: ""
      },
      {
        date: "June 21, 2026",
        time: "17:00",
        homeTeam: "Morocco",
        awayTeam: "Australia",
        venue: "Hard Rock Stadium, Miami",
        result: ""
      },
      {
        date: "June 21, 2026",
        time: "17:00",
        homeTeam: "Portugal",
        awayTeam: "France",
        venue: "SoFi Stadium, Los Angeles",
        result: ""
      }
    ]
  },
  {
    name: "Group E",
    teams: [
      {
        name: "Spain",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Germany",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Croatia",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "South Korea",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      }
    ],
    matches: []
  },
  {
    name: "Group F",
    teams: [
      {
        name: "Italy",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Belgium",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Denmark",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Saudi Arabia",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      }
    ],
    matches: []
  },
  {
    name: "Group G",
    teams: [
      {
        name: "Uruguay",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Switzerland",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Ghana",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Iran",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      }
    ],
    matches: []
  },
  {
    name: "Group H",
    teams: [
      {
        name: "Colombia",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Poland",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Sweden",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Cameroon",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      }
    ],
    matches: []
  },
  {
    name: "Group I",
    teams: [
      {
        name: "Ecuador",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Ukraine",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Costa Rica",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Ivory Coast",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      }
    ],
    matches: []
  },
  {
    name: "Group J",
    teams: [
      {
        name: "Chile",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Nigeria",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Algeria",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "New Zealand",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      }
    ],
    matches: []
  },
  {
    name: "Group K",
    teams: [
      {
        name: "Peru",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Wales",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Tunisia",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "China",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      }
    ],
    matches: []
  },
  {
    name: "Group L",
    teams: [
      {
        name: "Paraguay",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Ireland",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "Jamaica",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      },
      {
        name: "United Arab Emirates",
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      }
    ],
    matches: []
  }
];

// Mock Matches
export const mockMatches = [
  // Group A Matches
  {
    group: "Group A",
    date: "June 12, 2026",
    time: "20:00",
    homeTeam: "USA",
    awayTeam: "Qatar",
    venue: "MetLife Stadium, New York",
    result: "2-0",
    prediction: {
      home: 65,
      draw: 25,
      away: 10,
      comment: "Strong home advantage for the USA, especially in the opening match of the tournament."
    }
  },
  {
    group: "Group A",
    date: "June 13, 2026",
    time: "17:00",
    homeTeam: "Mexico",
    awayTeam: "Senegal",
    venue: "Estadio Azteca, Mexico City",
    result: "2-1",
    prediction: {
      home: 55,
      draw: 30,
      away: 15,
      comment: "Mexico's home advantage at Azteca gives them a slight edge against a strong Senegal side."
    }
  },
  {
    group: "Group A",
    date: "June 16, 2026",
    time: "14:00",
    homeTeam: "Qatar",
    awayTeam: "Mexico",
    venue: "AT&T Stadium, Dallas",
    result: "0-2",
    prediction: {
      home: 20,
      draw: 25,
      away: 55,
      comment: "Mexico's experience and technical ability should overcome Qatar on neutral ground."
    }
  },
  {
    group: "Group A",
    date: "June 16, 2026",
    time: "17:00",
    homeTeam: "USA",
    awayTeam: "Senegal",
    venue: "SoFi Stadium, Los Angeles",
    result: "1-1",
    prediction: {
      home: 40,
      draw: 35,
      away: 25,
      comment: "A tight match between two evenly matched teams with different styles of play."
    }
  },
  {
    group: "Group A",
    date: "June 19, 2026",
    time: "20:00",
    homeTeam: "Senegal",
    awayTeam: "Qatar",
    venue: "MetLife Stadium, New York",
    result: "1-0",
    prediction: {
      home: 60,
      draw: 30,
      away: 10,
      comment: "Senegal's physicality and experience gives them the edge in this match."
    }
  },
  {
    group: "Group A",
    date: "June 19, 2026",
    time: "20:00",
    homeTeam: "Mexico",
    awayTeam: "USA",
    venue: "Estadio Azteca, Mexico City",
    result: "0-2",
    prediction: {
      home: 45,
      draw: 30,
      away: 25,
      comment: "A classic rivalry match that could go either way, with home advantage for Mexico."
    }
  },

  // Group B Matches
  {
    group: "Group B",
    date: "June 13, 2026",
    time: "14:00",
    homeTeam: "Brazil",
    awayTeam: "Canada",
    venue: "Rose Bowl, Los Angeles",
    result: "3-0",
    prediction: {
      home: 75,
      draw: 15,
      away: 10,
      comment: "Brazil's technical superiority should give them a comfortable win."
    }
  },
  {
    group: "Group B",
    date: "June 13, 2026",
    time: "20:00",
    homeTeam: "England",
    awayTeam: "Japan",
    venue: "Lincoln Financial Field, Philadelphia",
    result: "2-1",
    prediction: {
      home: 60,
      draw: 25,
      away: 15,
      comment: "England's strength in depth should overcome Japan's tactical discipline."
    }
  },
  {
    group: "Group B",
    date: "June 16, 2026",
    time: "20:00",
    homeTeam: "Canada",
    awayTeam: "England",
    venue: "BMO Field, Toronto",
    result: "0-3",
    prediction: {
      home: 20,
      draw: 25,
      away: 55,
      comment: "Despite playing at home, Canada face a tough challenge against England's quality."
    }
  },
  {
    group: "Group B",
    date: "June 17, 2026",
    time: "17:00",
    homeTeam: "Brazil",
    awayTeam: "Japan",
    venue: "Hard Rock Stadium, Miami",
    result: "2-1",
    prediction: {
      home: 65,
      draw: 20,
      away: 15,
      comment: "Brazil's flair against Japan's organization, with Brazil's individual quality likely to be decisive."
    }
  },
  {
    group: "Group B",
    date: "June 20, 2026",
    time: "17:00",
    homeTeam: "Japan",
    awayTeam: "Canada",
    venue: "BC Place, Vancouver",
    result: "2-1",
    prediction: {
      home: 45,
      draw: 30,
      away: 25,
      comment: "A competitive match with Japan's experience giving them a slight edge."
    }
  },
  {
    group: "Group B",
    date: "June 20, 2026",
    time: "17:00",
    homeTeam: "England",
    awayTeam: "Brazil",
    venue: "AT&T Stadium, Dallas",
    result: "0-2",
    prediction: {
      home: 40,
      draw: 25,
      away: 35,
      comment: "A clash of footballing giants that could define the group winner."
    }
  },

  // Group C Matches
  {
    group: "Group C",
    date: "June 14, 2026",
    time: "14:00",
    homeTeam: "Argentina",
    awayTeam: "Egypt",
    venue: "MetLife Stadium, New York",
    result: "",
    prediction: {
      home: 70,
      draw: 20,
      away: 10,
      comment: "Argentina should have too much quality for Egypt, even without Messi."
    }
  },
  {
    group: "Group C",
    date: "June 14, 2026",
    time: "17:00",
    homeTeam: "Netherlands",
    awayTeam: "Serbia",
    venue: "SoFi Stadium, Los Angeles",
    result: "",
    prediction: {
      home: 55,
      draw: 30,
      away: 15,
      comment: "Netherlands' tactical approach should give them the edge against a physical Serbia."
    }
  }
];

// Mock Round of 32
export const mockRoundOf32 = [
  {
    matchNumber: 1,
    date: "June 26, 2026",
    time: "17:00",
    homeTeam: "USA",
    homeQualification: "Winner Group A",
    awayTeam: "Japan",
    awayQualification: "3rd Place Group B",
    venue: "MetLife Stadium, New York",
    result: "",
    winnerAdvancesTo: "Round of 16 - Match 1",
    prediction: {
      home: 60,
      draw: 25,
      away: 15,
      projectedWinner: "USA",
      comment: "USA's home advantage and strong group performance make them favorites."
    }
  },
  {
    matchNumber: 2,
    date: "June 26, 2026",
    time: "20:00",
    homeTeam: "Brazil",
    homeQualification: "Winner Group B",
    awayTeam: "Senegal",
    awayQualification: "3rd Place Group A",
    venue: "Rose Bowl, Los Angeles",
    result: "",
    winnerAdvancesTo: "Round of 16 - Match 1",
    prediction: {
      home: 70,
      draw: 20,
      away: 10,
      projectedWinner: "Brazil",
      comment: "Brazil's superior technical ability should overcome Senegal's physicality."
    }
  },
  {
    matchNumber: 3,
    date: "June 27, 2026",
    time: "17:00",
    homeTeam: "England",
    homeQualification: "Runner-up Group B",
    awayTeam: "Qatar",
    awayQualification: "3rd Place Group J",
