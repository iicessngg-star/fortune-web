import { Moon, Hash, Palette } from 'lucide-react';
import MysticCard from './MysticCard';

export default function HoroscopeCard({ sign, horoscope, luckyNumber, luckyColor }) {
  if (!horoscope) return null;

  return (
    <MysticCard className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-center space-x-3 mb-6">
        <Moon className="w-8 h-8 text-mystic-400" />
        <h2 className="text-2xl font-cinzel font-bold text-white tracking-widest uppercase">
          {sign} Horoscope
        </h2>
      </div>
      
      <div className="relative p-6 bg-mystic-900/50 rounded-xl border border-mystic-600/30 mb-6">
        <p className="text-lg font-playfair italic text-gray-200 leading-relaxed text-center">
          "{horoscope}"
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center p-4 bg-mystic-800/40 rounded-xl border border-mystic-700">
          <Hash className="w-5 h-5 text-mystic-400 mb-2" />
          <p className="text-xs text-gray-400 uppercase tracking-widest">Lucky Number</p>
          <p className="text-xl font-bold text-white font-cinzel mt-1">{luckyNumber}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-mystic-800/40 rounded-xl border border-mystic-700">
          <Palette className="w-5 h-5 text-mystic-400 mb-2" />
          <p className="text-xs text-gray-400 uppercase tracking-widest">Lucky Color</p>
          <p className="text-lg font-bold text-white mt-1 capitalize">{luckyColor}</p>
        </div>
      </div>
    </MysticCard>
  );
}
