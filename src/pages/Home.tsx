
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-fifa-navy to-fifa-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              FIFA World Cup 2026
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
              The ultimate guide to matches, teams, and predictions for the world's biggest football tournament
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
              <Link to="/groups">
                <Button className="bg-fifa-gold hover:bg-yellow-500 text-fifa-navy text-lg px-8 py-6">
                  View Groups
                </Button>
              </Link>
              <Link to="/matches">
                <Button className="bg-fifa-gold hover:bg-yellow-500 text-fifa-navy text-lg px-8 py-6">
                  View Matches
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-fifa-navy">
            Tournament Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard 
              title="Format" 
              description="48 teams will compete in 12 groups of 4 teams each, with the top two from each group and 8 best third-placed teams advancing to the round of 32."
            />
            <InfoCard 
              title="Hosts" 
              description="For the first time, the tournament will be hosted by three countries: United States, Canada, and Mexico across 16 host cities."
            />
            <InfoCard 
              title="Dates" 
              description="The tournament is scheduled to take place from June to July 2026, bringing a month of exciting football action."
            />
          </div>
        </div>
      </section>

      {/* Host Venues */}
      <section className="py-16 bg-fifa-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-fifa-navy">
            Host Venues
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <VenueCard 
              name="MetLife Stadium" 
              location="New York/New Jersey, USA" 
              capacity="82,500"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Metlife_stadium_%28Aerial_view%29.jpg/1920px-Metlife_stadium_%28Aerial_view%29.jpg"
            />
            <VenueCard 
              name="SoFi Stadium" 
              location="Los Angeles, USA" 
              capacity="70,240"
              imageUrl="/lovable-uploads/2258819d-fc17-4599-83d9-5aad3016e4d2.png"
            />
            <VenueCard 
              name="AT&T Stadium" 
              location="Dallas, USA" 
              capacity="80,000"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg/1920px-Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg"
            />
            <VenueCard 
              name="Mercedes-Benz Stadium" 
              location="Atlanta, USA" 
              capacity="71,000"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mercedes-Benz_Stadium_December_2017.jpg/1920px-Mercedes-Benz_Stadium_December_2017.jpg"
            />
            <VenueCard 
              name="NRG Stadium" 
              location="Houston, USA" 
              capacity="72,220"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/NRG_Stadium_inside.jpg/1920px-NRG_Stadium_inside.jpg"
            />
            <VenueCard 
              name="Arrowhead Stadium" 
              location="Kansas City, USA" 
              capacity="76,416"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Arrowhead_Stadium_aerial_view_2023.jpg/1920px-Arrowhead_Stadium_aerial_view_2023.jpg"
            />
            <VenueCard 
              name="Hard Rock Stadium" 
              location="Miami, USA" 
              capacity="65,326"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Hard_Rock_Stadium_logo_unveil.jpg/1920px-Hard_Rock_Stadium_logo_unveil.jpg"
            />
            <VenueCard 
              name="Lincoln Financial Field" 
              location="Philadelphia, USA" 
              capacity="69,328"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Lincoln_Financial_Field_July_2018_pano.jpg/1920px-Lincoln_Financial_Field_July_2018_pano.jpg"
            />
            <VenueCard 
              name="Levi's Stadium" 
              location="San Francisco Bay Area, USA" 
              capacity="68,500"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Levi%27s_Stadium_-_pre-game_view_from_section_239.jpg/1920px-Levi%27s_Stadium_-_pre-game_view_from_section_239.jpg"
            />
            <VenueCard 
              name="Lumen Field" 
              location="Seattle, USA" 
              capacity="68,740"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lumen_Field_2021.jpg/1920px-Lumen_Field_2021.jpg"
            />
            <VenueCard 
              name="Gillette Stadium" 
              location="Boston, USA" 
              capacity="65,878"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gillette_Stadium_July_2022.jpg/1920px-Gillette_Stadium_July_2022.jpg"
            />
            <VenueCard 
              name="BMO Field" 
              location="Toronto, Canada" 
              capacity="45,000"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d2/BMO_Field_in_2016.png"
            />
            <VenueCard 
              name="BC Place" 
              location="Vancouver, Canada" 
              capacity="54,500"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BC_Place_2015_Women%27s_FIFA_World_Cup.jpg/1920px-BC_Place_2015_Women%27s_FIFA_World_Cup.jpg"
            />
            <VenueCard 
              name="Estadio Azteca" 
              location="Mexico City, Mexico" 
              capacity="87,523"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Estadio_Azteca_2015.jpg/1920px-Estadio_Azteca_2015.jpg"
            />
            <VenueCard 
              name="Estadio Akron" 
              location="Guadalajara, Mexico" 
              capacity="48,071"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Estadio_Akron_2.jpg/1920px-Estadio_Akron_2.jpg"
            />
            <VenueCard 
              name="Estadio BBVA" 
              location="Monterrey, Mexico" 
              capacity="53,500"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Estadio_BBVA_Bancomer.jpg/1920px-Estadio_BBVA_Bancomer.jpg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-fifa-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore the World Cup?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dive into match details, team information, and the most accurate predictions for the FIFA 2026 World Cup.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/groups">
              <Button className="bg-fifa-gold hover:bg-yellow-500 text-fifa-navy text-lg px-8 py-6">
                View Groups
              </Button>
            </Link>
            <Link to="/matches">
              <Button className="bg-fifa-gold hover:bg-yellow-500 text-fifa-navy text-lg px-8 py-6">
                View Matches
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const InfoCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card className="p-6 flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <h3 className="text-xl font-bold mb-3 text-fifa-blue">{title}</h3>
      <p className="text-gray-700 flex-grow">{description}</p>
    </Card>
  );
};

const VenueCard = ({ 
  name, 
  location, 
  capacity, 
  imageUrl 
}: { 
  name: string;
  location: string;
  capacity: string;
  imageUrl: string;
}) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in group">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-fifa-navy">{name}</h3>
        <p className="text-gray-600">{location}</p>
        <p className="text-sm text-gray-500">Capacity: {capacity}</p>
      </div>
    </Card>
  );
};

export default Home;
