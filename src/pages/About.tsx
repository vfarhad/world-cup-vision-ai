
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Facebook, Linkedin, Share2, Twitter } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { ThreadsIcon } from './icons/ThreadsIcon';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-fifa-navy mb-8">About FIFA World Cup Vision</h1>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Mission Statement */}
        <section>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-fifa-blue mb-4">Our Mission</h2>
            <p className="text-gray-700">
              FIFA World Cup Vision is dedicated to providing fans with comprehensive, insightful, and engaging coverage of the 2026 FIFA World Cup. 
              Our platform offers detailed information about teams, matches, venues, and tournament progression, enhanced by intuitive visualizations 
              and up-to-date statistics. We aim to be the ultimate guide for football enthusiasts looking to follow every moment of the world's most 
              prestigious football tournament.
            </p>
          </Card>
        </section>

        {/* Team / Features Tabs */}
        <section className="mt-12">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="team">Our Team</TabsTrigger>
            </TabsList>
            
            <TabsContent value="features" className="mt-6 space-y-4">
              <FeatureCard 
                title="Complete Tournament Coverage"
                description="Follow every stage of the tournament from the group phase through to the final, with detailed match information, team statistics, and live updates."
              />
              <FeatureCard 
                title="Interactive Group Standings"
                description="View dynamic group standings that update as matches are played, providing a clear picture of each team's progress."
              />
              <FeatureCard 
                title="Knockout Stage Visualization"
                description="Explore the tournament's knockout stages with interactive brackets that help you visualize the path to the final."
              />
              <FeatureCard 
                title="Venue Information"
                description="Learn about the 16 stadiums across the USA, Canada, and Mexico that will host the World Cup matches."
              />
            </TabsContent>
            
            <TabsContent value="team" className="mt-6 space-y-6">
              <TeamMember
                name="Alex Rodriguez"
                role="Founder & Lead Developer"
                bio="Alex has been developing sports-related web applications for over a decade and is passionate about creating accessible, data-driven platforms for sports fans."
              />
              <TeamMember
                name="Sophia Chen"
                role="Sports Analyst"
                bio="With a background in sports journalism, Sophia brings expert analysis and insights to our coverage of the World Cup."
              />
              <TeamMember
                name="Marcus Johnson"
                role="UI/UX Designer"
                bio="Marcus specializes in creating intuitive, engaging user experiences that make complex sports data accessible and enjoyable."
              />
              <TeamMember
                name="Priya Patel"
                role="Data Engineer"
                bio="Priya ensures our platform delivers accurate, real-time statistics and visualizations throughout the tournament."
              />
            </TabsContent>
          </Tabs>
        </section>

        {/* Contact Section */}
        <section className="mt-12">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-fifa-blue mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              Have questions, suggestions, or feedback? We'd love to hear from you! Reach out to us at:
            </p>
            <p className="text-fifa-blue font-medium">contact@fifaworldcupvision.com</p>
          </Card>
        </section>

        {/* Share Section */}
        <section className="mt-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Share FIFA World Cup Vision</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <SocialButton network="Twitter" icon={<Twitter size={20} />} color="bg-[#1DA1F2] hover:bg-[#1a94e0]" />
              <SocialButton network="LinkedIn" icon={<Linkedin size={20} />} color="bg-[#0077B5] hover:bg-[#006da7]" />
              <SocialButton network="Facebook" icon={<Facebook size={20} />} color="bg-[#1877F2] hover:bg-[#166fe5]" />
              <SocialButton network="Instagram" icon={<InstagramIcon />} color="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90" />
              <SocialButton network="Threads" icon={<ThreadsIcon />} color="bg-black hover:bg-gray-900" />
              <SocialButton network="Share" icon={<Share2 size={20} />} color="bg-gray-700 hover:bg-gray-800" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card className="p-5 hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-fifa-navy mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

const TeamMember = ({ name, role, bio }: { name: string; role: string; bio: string }) => {
  return (
    <Card className="p-5 hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-fifa-navy">{name}</h3>
      <p className="text-fifa-blue font-medium text-sm mb-2">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </Card>
  );
};

const SocialButton = ({ 
  network, 
  icon, 
  color 
}: { 
  network: string; 
  icon: React.ReactNode; 
  color: string;
}) => {
  const handleShare = () => {
    const url = window.location.href;
    const text = "Check out FIFA World Cup Vision - Your ultimate guide to the 2026 FIFA World Cup!";
    
    let shareUrl = "";
    
    switch (network) {
      case "Twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case "LinkedIn":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "Facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "Instagram":
        // Instagram doesn't have a direct sharing URL, typically open the app
        alert("Instagram sharing is limited. Consider taking a screenshot to share there.");
        return;
      case "Threads":
        // Threads doesn't have a web share API yet
        alert("To share on Threads, copy the link and paste it in the Threads app.");
        return;
      case "Share":
        if (navigator.share) {
          navigator.share({
            title: "FIFA World Cup Vision",
            text: text,
            url: url,
          }).catch(console.error);
          return;
        } else {
          // Fallback if Web Share API is not available
          navigator.clipboard.writeText(url);
          alert("Link copied to clipboard!");
          return;
        }
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button 
      onClick={handleShare}
      className={`${color} text-white p-2 rounded-full h-10 w-10 flex items-center justify-center`}
      size="icon"
      aria-label={`Share to ${network}`}
    >
      {icon}
    </Button>
  );
};

export default About;
