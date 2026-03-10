import { Sparkles, Loader2 } from 'lucide-react';
import MysticCard from './MysticCard';

export default function FortuneBox({ fortune, isReading, onSeek }) {
  return (
    <MysticCard glow={fortune !== null} className="w-full">
      {isReading ? (
        <div className="text-center py-16 flex flex-col items-center space-y-6">
          <Loader2 className="w-14 h-14 text-mystic-400 animate-spin" />
          <p className="text-mystic-300 font-cinzel animate-pulse text-xl tracking-widest uppercase">
            Consulting the cosmic web...
          </p>
        </div>
      ) : (
        <div className="text-center space-y-8 py-8 animate-in zoom-in duration-700">
          <Sparkles className="w-12 h-12 text-mystic-500 mx-auto opacity-70 animate-glow" />
          
          <div className="relative max-w-md mx-auto">
            <span className="absolute top-0 left-0 text-6xl text-mystic-600/20 transform -translate-x-4 -translate-y-6 font-serif leading-none">"</span>
            <p className="text-3xl font-playfair italic text-white leading-relaxed px-6 drop-shadow-md">
              {fortune}
            </p>
            <span className="absolute bottom-0 right-0 text-6xl text-mystic-600/20 transform translate-x-4 translate-y-8 font-serif leading-none">"</span>
          </div>
          
          <div className="pt-10">
            <button onClick={onSeek} className="mystic-btn text-sm px-6 py-2 opacity-80 hover:opacity-100 flex items-center space-x-2 mx-auto">
              <Sparkles className="w-4 h-4" />
              <span>Ask Another Question</span>
            </button>
          </div>
        </div>
      )}
    </MysticCard>
  );
}
