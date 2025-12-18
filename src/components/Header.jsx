// src/components/Header.jsx
import { Dumbbell, User } from 'lucide-react';
import HeroSection from './HeroSection';

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-blue-600" />
            <span className="text-gray-900 font-semibold text-lg">FitCoach Pro</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>

          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <User className="w-5 h-5" />
            <span>My Profile</span>
          </button>
        </div>
      </div>
      
    </header>
  );
}
