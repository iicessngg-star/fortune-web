import MysticCard from './MysticCard';

export default function ZodiacCard({ sign, data, onClick, isSelected }) {
  return (
    <div onClick={() => onClick && onClick(sign)} className="cursor-pointer group">
      <MysticCard 
        glow={isSelected}
        className={`h-full flex flex-col items-center text-center p-4 transition-all duration-300 ${isSelected ? 'bg-mystic-700/60 ring-2 ring-mystic-400' : 'hover:bg-mystic-700/40'}`}
      >
        <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-mystic-300">
          {data.symbol}
        </span>
        <h3 className="text-lg font-cinzel font-bold text-white mb-1">{sign}</h3>
        <p className="text-xs text-gray-400 uppercase tracking-wider">{data.dateRange}</p>
        
        {/* Decorative divider */}
        <div className="w-8 h-px bg-mystic-500/50 my-3"></div>
        
        <p className="text-sm font-medium" style={{ color: getElementColor(data.element) }}>
          {data.element}
        </p>
      </MysticCard>
    </div>
  );
}

function getElementColor(element) {
  switch (element) {
    case 'Fire': return '#ef4444'; // red-500
    case 'Water': return '#3b82f6'; // blue-500
    case 'Earth': return '#22c55e'; // green-500
    case 'Air': return '#eab308'; // yellow-500
    default: return '#a855f7'; // purple-500
  }
}
