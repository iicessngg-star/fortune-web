import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Star, Sparkles, Gem } from 'lucide-react';
import { cn } from '../utils/cn'; // Assuming we move cn from Layout to a utils file

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <Sun className="w-5 h-5" /> },
    { name: 'Birth Chart', path: '/chart', icon: <Star className="w-5 h-5" /> },
    { name: 'Horoscope', path: '/daily', icon: <Moon className="w-5 h-5" /> },
    { name: 'Lucky Stone', path: '/stone', icon: <Gem className="w-5 h-5" /> },
    { name: 'AI Fortune', path: '/fortune', icon: <Sparkles className="w-5 h-5" /> },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-mystic-900/80 backdrop-blur-md border-b border-mystic-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className="w-6 h-6 text-mystic-400 group-hover:animate-glow transition-all" />
            <span className="font-cinzel font-bold text-xl tracking-wider text-white">Mystic Fortune</span>
          </Link>
          
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  location.pathname === item.path
                    ? "bg-mystic-700/50 text-mystic-400"
                    : "text-gray-300 hover:bg-mystic-800/50 hover:text-white"
                )}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>
      
      {/* Mobile nav spacing */}
      <div className="h-16 md:h-16"></div>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-mystic-900/95 backdrop-blur-md border-t border-mystic-700/50 px-2 py-3 z-50">
        <div className="flex justify-around items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex flex-col items-center p-2 rounded-lg transition-colors",
                location.pathname === item.path
                  ? "text-mystic-400"
                  : "text-gray-400 hover:text-white"
              )}
            >
              {item.icon}
              <span className="text-[10px] mt-1 font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
      {/* Spacer for mobile nav at bottom */}
      <div className="h-20 md:hidden"></div>
    </>
  );
}
