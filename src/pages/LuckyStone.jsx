import { useState } from 'react';
import { Gem } from 'lucide-react';
import StoneCard from '../components/StoneCard';
import stonesData from '../data/stones.json';
import zodiacData from '../data/zodiac.json';

export default function LuckyStone() {
  const [selectedSign, setSelectedSign] = useState('');
  const signs = Object.keys(zodiacData);

  return (
    <div className="w-full max-w-xl mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <Gem className="w-12 h-12 text-mystic-400 mx-auto mb-4 animate-glow" />
        <h1 className="text-4xl font-bold font-cinzel mb-3">Lucky Stones</h1>
        <p className="text-gray-400 font-playfair italic text-lg">Discover the crystals that align with your aura.</p>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-300 mb-2 font-poppins text-center">
          Select Your Zodiac Sign
        </label>
        <div className="relative max-w-md mx-auto">
          <select 
            value={selectedSign}
            onChange={(e) => setSelectedSign(e.target.value)}
            className="w-full bg-mystic-900/70 border border-mystic-500/50 rounded-xl px-4 py-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-mystic-400 font-cinzel text-lg shadow-inner transition-all hover:bg-mystic-800 cursor-pointer text-center"
          >
            <option value="" disabled>-- Choose a sign --</option>
            {signs.map(sign => (
              <option key={sign} value={sign} className="bg-mystic-900">
                {zodiacData[sign].symbol} {sign}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-mystic-400">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>

      {selectedSign && stonesData[selectedSign] && (
        <StoneCard 
          sign={selectedSign}
          stoneData={stonesData[selectedSign]}
        />
      )}
    </div>
  );
}
