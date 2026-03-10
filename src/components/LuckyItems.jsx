import React from 'react';

const LuckySection = ({ color, number, day }) => {
  return (
    <div className="mystic-card col-span-1 md:col-span-2 mt-2">
      <h3 className="text-xl text-mystic-400 mb-4 text-center">✨ พลังแห่งความโชคดี ✨</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-purple-900/40 border border-purple-500/20 rounded-xl hover:bg-purple-800/50 transition-colors">
          <p className="text-sm text-mystic-300 mb-2">🍀 สีมงคล</p>
          <p className="text-lg font-bold text-gray-100">{color}</p>
        </div>
        
        <div className="p-4 bg-purple-900/40 border border-purple-500/20 rounded-xl hover:bg-purple-800/50 transition-colors">
          <p className="text-sm text-mystic-300 mb-2">🍀 เลขมงคล</p>
          <p className="text-lg font-bold text-gold-400">{number}</p>
        </div>
        
        <div className="p-4 bg-purple-900/40 border border-purple-500/20 rounded-xl hover:bg-purple-800/50 transition-colors">
          <p className="text-sm text-mystic-300 mb-2">🍀 วันมงคล</p>
          <p className="text-lg font-bold text-purple-300">{day}</p>
        </div>
      </div>
    </div>
  );
};

export default LuckySection;
