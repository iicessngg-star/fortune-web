import { Link, useNavigate } from 'react-router-dom';
import { Star, Sparkles } from 'lucide-react';
import ZodiacCard from '../components/ZodiacCard';
import zodiacData from '../data/zodiac.json';

export default function Home() {
  const navigate = useNavigate();
  
  const handleZodiacClick = (sign) => {
    // Navigate to horoscope page with the selected sign as context
    navigate('/daily', { state: { selectedSign: sign } });
  };

  return (
    <div className="space-y-16 py-8 animate-in fade-in duration-700 flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6 px-4">
        <div className="inline-flex items-center justify-center space-x-2 px-4 py-1.5 rounded-full bg-mystic-800/50 border border-mystic-600/30 text-mystic-300 text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Your Cosmic Guide</span>
          <Sparkles className="w-4 h-4" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-cinzel tracking-tight text-white drop-shadow-lg">
          Unveil Your <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-mystic-300 via-mystic-400 to-mystic-200">
            Cosmic Path
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 font-playfair italic leading-relaxed max-w-2xl mx-auto">
          Let the stars guide you to self-discovery, fortune, and clarity. Explore your daily horoscope, lucky stones, and deep birth traits.
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/fortune" className="mystic-btn flex items-center space-x-2 text-lg w-full sm:w-auto justify-center">
            <Sparkles className="w-5 h-5" />
            <span>Consult the Oracle</span>
          </Link>
          <Link to="/chart" className="px-6 py-3 rounded-xl bg-mystic-800/50 hover:bg-mystic-700 border border-mystic-600/50 text-white transition-all duration-300 w-full sm:w-auto justify-center flex items-center space-x-2">
            <Star className="w-5 h-5 opacity-70" />
            <span>Read Birth Chart</span>
          </Link>
        </div>
      </section>

      {/* Zodiac Grid Section */}
      <section className="w-full px-4 pt-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-white mb-3">Choose Your Sign</h2>
          <p className="text-gray-400 font-poppins">Select your zodiac to view today's horoscope</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 md:gap-6">
          {Object.entries(zodiacData).map(([sign, data]) => (
            <ZodiacCard 
              key={sign} 
              sign={sign} 
              data={data} 
              onClick={handleZodiacClick} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}
