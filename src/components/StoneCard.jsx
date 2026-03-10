import { Gem } from 'lucide-react';
import MysticCard from './MysticCard';

export default function StoneCard({ sign, stoneData }) {
  if (!stoneData) return null;

  return (
    <MysticCard className="animate-in fade-in zoom-in duration-500">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-mystic-900/50 rounded-full border border-mystic-500/30 shadow-lg shadow-mystic-400/40 mb-2">
          <Gem className="w-10 h-10 text-mystic-400" />
        </div>
        
        <div>
          <h2 className="text-xs text-mystic-400 uppercase tracking-widest font-semibold mb-1">
            Power Crystal for {sign}
          </h2>
          <h3 className="text-3xl font-cinzel font-bold text-white">
            {stoneData.stone}
          </h3>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-mystic-500/50 to-transparent my-4"></div>
        
        <div className="px-4">
          <p className="text-gray-300 font-poppins text-sm leading-relaxed">
            {stoneData.meaning}
          </p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-mystic-700 w-full">
          <p className="text-xs text-gray-400">
            <span className="uppercase tracking-wider mr-2">Alternative:</span> 
            <span className="text-mystic-300 font-medium">{stoneData.alternative}</span>
          </p>
        </div>
      </div>
    </MysticCard>
  );
}
