import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Leaf className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">Carbon Credits</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-green-700 px-3 py-2 rounded">Home</Link>
            <Link to="/about" className="hover:bg-green-700 px-3 py-2 rounded">About</Link>
            <Link to="/contact" className="hover:bg-green-700 px-3 py-2 rounded">Contact</Link>
            <Link to="/articles" className="hover:bg-green-700 px-3 py-2 rounded">Articles</Link>
            <Link to="/calculator" className="hover:bg-green-700 px-3 py-2 rounded">Calculator</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;