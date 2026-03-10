import React from 'react';

const CrystalRecommendation = ({ crystals }) => {
  if (!crystals || crystals.length === 0) return null;

  return (
    <div className="mystic-card col-span-1 md:col-span-2 mt-4">
      <h3 className="text-xl text-mystic-400 mb-6 text-center">💎 หินมงคลที่แนะนำสำหรับคุณ 💎</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {crystals.map((crystal, idx) => (
          <div key={idx} className="bg-mystic-900/50 rounded-2xl overflow-hidden border border-mystic-600/30 hover:border-purple-400/50 transition-colors shadow-lg group">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={crystal.image} 
                alt={crystal.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mystic-900 to-transparent opacity-80"></div>
              <h4 className="absolute bottom-3 left-0 w-full text-center text-lg font-bold text-gray-100 font-prompt drop-shadow-md">
                {crystal.name}
              </h4>
            </div>
            
            <div className="p-4 text-center">
              <p className="text-sm text-gray-300 h-10 line-clamp-2 mb-3">
                {crystal.benefit}
              </p>
              <div className="font-semibold text-gold-400 mb-3">
                {crystal.price} บาท
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrystalRecommendation;
