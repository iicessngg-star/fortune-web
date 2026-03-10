import React from 'react';

const LuckyItems = ({ color, number, crystal }) => {
  return (
    <div className="mystic-card col-span-1 md:col-span-2">
      <h3 className="text-xl text-mystic-400 mb-4 text-center">✨ พลังแห่งความโชคดี ✨</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-mystic-900/50 rounded-xl">
          <p className="text-sm text-mystic-300 mb-2">Lucky Color</p>
          <p className="text-lg font-bold text-gray-100">{color}</p>
        </div>
        
        <div className="p-4 bg-mystic-900/50 rounded-xl">
          <p className="text-sm text-mystic-300 mb-2">Lucky Number</p>
          <p className="text-lg font-bold text-gold-400">{number}</p>
        </div>
        
        <div className="p-4 bg-mystic-900/50 rounded-xl">
          <p className="text-sm text-mystic-300 mb-2">Lucky Crystal</p>
          <p className="text-lg font-bold text-purple-300">{crystal}</p>
        </div>
      </div>
    </div>
  );
};

export default LuckyItems;
