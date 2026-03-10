import React from 'react';
import { useTranslation } from 'react-i18next';

const CrystalRecommendation = ({ crystals }) => {
  const { t } = useTranslation();
  if (!crystals || crystals.length === 0) return null;

  return (
    <div className="mystic-card col-span-1 md:col-span-2 mt-4">
      <h3 className="text-xl text-mystic-400 mb-6 text-center">💎 {t('crystal_recommendation')} 💎</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {crystals.map((crystal, idx) => {
          const badges = [`🔥 ${t('popular')}`, `✨ ${t('recommended')}`, `🧿 ${t('best_energy')}`];
          const badge = badges[idx % badges.length];

          return (
          <div key={idx} className="bg-mystic-900/50 rounded-2xl overflow-hidden border border-mystic-600/30 hover:border-purple-400/50 transition-all shadow-lg group relative hover:-translate-y-1">
            <div className="absolute top-2 right-2 z-10 bg-mystic-900/80 backdrop-blur-sm border border-purple-500/50 text-xs px-3 py-1 rounded-full text-gold-400 font-bold shadow-md">
              {badge}
            </div>
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
              <div className="font-semibold text-gold-400 mb-4 font-prompt text-lg">
                {t('price')} {crystal.price} {t('baht')}
              </div>
              <button className="w-full font-prompt px-4 py-2 rounded-xl bg-mystic-600 hover:bg-mystic-500 text-white transition-colors border border-purple-500/30 group-hover:border-pink-500/50 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                🛒 {t('buy_now')}
              </button>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
};

export default CrystalRecommendation;
