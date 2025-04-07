
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-fifa-navy text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-fifa-gold flex items-center gap-2">
            <div className="bg-fifa-gold rounded-full p-1">
              <span className="text-fifa-navy text-sm font-bold">26</span>
            </div>
            FIFA World Cup Vision
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/groups">Groups</NavLink>
            <NavLink to="/matches">Matches</NavLink>
            <NavLink to="/round-of-32">Round of 32</NavLink>
            <NavLink to="/round-of-16">Round of 16</NavLink>
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="text-white hover:text-fifa-gold transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-16 right-4 bg-fifa-navy p-4 rounded-md shadow-lg z-50">
          <div className="flex flex-col space-y-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/groups">Groups</NavLink>
            <NavLink to="/matches">Matches</NavLink>
            <NavLink to="/round-of-32">Round of 32</NavLink>
            <NavLink to="/round-of-16">Round of 16</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
