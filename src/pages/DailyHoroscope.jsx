import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Moon } from 'lucide-react';
import HoroscopeCard from '../components/HoroscopeCard';
import zodiacData from '../data/zodiac.json';
import horoscopeData from '../data/horoscope.json';

export default function DailyHoroscope() {
  const location = useLocation();
  const [selectedSign, setSelectedSign] = useState(location.state?.selectedSign || '');
  const [horoscope, setHoroscope] = useState(null);

  useEffect(() => {
    if (selectedSign && zodiacData[selectedSign] && horoscopeData[selectedSign]) {
      setHoroscope({
        text: horoscopeData[selectedSign],
        number: zodiacData[selectedSign].luckyNumber,
        color: zodiacData[selectedSign].luckyColor
      });
    } else {
      setHoroscope(null);
    }
  }, [selectedSign]);

  const signs = Object.keys(zodiacData);

  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <Moon className="w-12 h-12 text-mystic-400 mx-auto mb-4 animate-pulse opacity-80" />
        <h1 className="text-4xl font-bold font-cinzel mb-3">Daily Horoscope</h1>
        <p className="text-gray-400 font-playfair italic text-lg">What do the heavens have in store for you today?</p>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-300 mb-2 font-poppins">
          Select Your Zodiac Sign
        </label>
        <div className="relative">
          <select 
            value={selectedSign}
            onChange={(e) => setSelectedSign(e.target.value)}
            className="w-full bg-mystic-900/70 border border-mystic-500/50 rounded-xl px-4 py-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-mystic-400 font-cinzel text-lg shadow-inner transition-all hover:bg-mystic-800 cursor-pointer"
          >
            <option value="" disabled>-- Choose a sign --</option>
            {signs.map(sign => (
              <option key={sign} value={sign} className="bg-mystic-900">
                {zodiacData[sign].symbol} {sign}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-mystic-400">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>

      {selectedSign && zodiacData[selectedSign] && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-mystic-800/60 backdrop-blur-md border border-mystic-500/30 rounded-2xl p-8 shadow-lg shadow-mystic-500/20 max-w-md mx-auto relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-24 h-24 bg-mystic-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-3xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-mystic-300 via-white to-mystic-300 tracking-wider">
              {selectedSign}
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-mystic-500/50 to-transparent mt-3"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between p-4 bg-mystic-900/50 rounded-xl border border-mystic-700/50 hover:bg-mystic-900/70 transition-colors">
              <span className="text-sm font-poppins text-gray-400 uppercase tracking-widest">Element</span>
              <span className="text-lg font-semibold text-white font-cinzel">{zodiacData[selectedSign].element}</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-mystic-900/50 rounded-xl border border-mystic-700/50 hover:bg-mystic-900/70 transition-colors">
              <span className="text-sm font-poppins text-gray-400 uppercase tracking-widest">Lucky Color</span>
              <span className="text-lg font-semibold text-white capitalize">{zodiacData[selectedSign].luckyColor}</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-mystic-900/50 rounded-xl border border-mystic-700/50 hover:bg-mystic-900/70 transition-colors">
              <span className="text-sm font-poppins text-gray-400 uppercase tracking-widest">Lucky Number</span>
              <span className="text-2xl font-bold font-cinzel text-mystic-300">{zodiacData[selectedSign].luckyNumber}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
