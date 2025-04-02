
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-fifa-navy text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-fifa-gold">FIFA World Cup Vision</h3>
            <p className="text-sm mt-1">Your ultimate guide to the FIFA 2026 World Cup</p>
          </div>
          <div className="flex space-x-6">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} FIFA World Cup Vision. All rights reserved.</p>
          <p className="mt-2 text-gray-400">This is an unofficial fan site not affiliated with FIFA.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      className="text-gray-300 hover:text-fifa-gold transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export default Footer;
