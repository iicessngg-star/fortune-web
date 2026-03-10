import { useState } from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import MysticCard from '../components/MysticCard';
import zodiacData from '../data/zodiac.json';

// Simple utility to find sign from date
const getSignFromDate = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  const m = date.getMonth() + 1;
  const d = date.getDate();
  
  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return 'Aries';
  if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return 'Taurus';
  if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) return 'Gemini';
  if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) return 'Cancer';
  if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return 'Leo';
  if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return 'Virgo';
  if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) return 'Libra';
  if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return 'Scorpio';
  if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) return 'Sagittarius';
  if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return 'Capricorn';
  if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return 'Aquarius';
  return 'Pisces';
};

export default function BirthChart() {
  const [dob, setDob] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);

  const handleReveal = (e) => {
    e.preventDefault();
    if (!dob || !time) return;
    
    const signName = getSignFromDate(dob);
    setResult({
      sign: signName,
      data: zodiacData[signName]
    });
  };

  return (
    <div className="w-full max-w-xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <Star className="w-12 h-12 text-mystic-400 mx-auto mb-4 animate-glow" />
        <h1 className="text-4xl font-bold font-cinzel mb-2">Birth Chart</h1>
        <p className="text-gray-400 font-playfair italic">Reveal the primary forces that shape your spirit.</p>
      </div>

      <MysticCard>
        {!result ? (
          <form onSubmit={handleReveal} className="space-y-6 flex flex-col">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-poppins">Date of Birth</label>
                <div className="relative">
                  <input 
                    type="date" 
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full bg-mystic-900/50 border border-mystic-600/50 rounded-xl px-4 py-3 text-white placeholder-mystic-300/50 focus:outline-none focus:border-mystic-400 focus:ring-1 focus:ring-mystic-400 font-poppins transition-colors"
                    required
                  />
                </div>
              </div>
            </div>
            
            <button type="submit" className="mystic-btn w-full mt-4">
              Calculate Zodiac
            </button>
          </form>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-mystic-800/60 backdrop-blur-md border border-mystic-500/30 rounded-2xl p-8 shadow-lg shadow-mystic-500/20 max-w-md mx-auto relative overflow-hidden group mt-4">
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-mystic-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-3xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-mystic-300 via-white to-mystic-300 tracking-wider">
                {result.sign}
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-mystic-500/50 to-transparent mt-3"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between p-4 bg-mystic-900/50 rounded-xl border border-mystic-700/50 hover:bg-mystic-900/70 transition-colors">
                <span className="text-sm font-poppins text-gray-400 uppercase tracking-widest">Element</span>
                <span className="text-lg font-semibold text-white font-cinzel">{result.data.element}</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-mystic-900/50 rounded-xl border border-mystic-700/50 hover:bg-mystic-900/70 transition-colors">
                <span className="text-sm font-poppins text-gray-400 uppercase tracking-widest">Lucky Color</span>
                <span className="text-lg font-semibold text-white capitalize">{result.data.luckyColor}</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-mystic-900/50 rounded-xl border border-mystic-700/50 hover:bg-mystic-900/70 transition-colors">
                <span className="text-sm font-poppins text-gray-400 uppercase tracking-widest">Lucky Number</span>
                <span className="text-2xl font-bold font-cinzel text-mystic-300">{result.data.luckyNumber}</span>
              </div>
            </div>
            
            <div className="pt-8 text-center">
              <button onClick={() => setResult(null)} className="mystic-btn text-sm px-6 py-2 opacity-80 hover:opacity-100 bg-mystic-800 border border-mystic-600 hover:bg-mystic-700">
                Calculate another date
              </button>
            </div>
          </div>
        )}
      </MysticCard>
    </div>
  );
}
