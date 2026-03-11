import React from 'react';
import { useTranslation } from 'react-i18next';

const CrystalRecommendation = ({ crystals }) => {
  const { t } = useTranslation();
  if (!crystals || crystals.length === 0) return null;

  return (
    <div className="mystic-card col-span-1 md:col-span-2 mt-4 flex flex-col items-center p-8">
      <h3 className="text-2xl text-gray-100 mb-8 text-center font-prompt font-bold">{t('crystal_recommendation')}</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {crystals.map((crystal, idx) => {
          const badges = [`🔥 ${t('popular')}`, `✨ ${t('recommended')}`, `🧿 ${t('best_energy')}`];
          const badge = badges[idx % badges.length];

          return (
          <div key={idx} className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:scale-105 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 shadow-xl group relative">
            <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] px-3 py-1.5 rounded-full text-gold-400 font-bold uppercase tracking-wider">
              {badge}
            </div>
            <div className="h-48 overflow-hidden relative">
              <img 
                src={crystal.image} 
                alt={crystal.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a10] via-black/40 to-transparent opacity-90"></div>
              <h4 className="absolute bottom-4 left-0 w-full text-center text-lg font-bold text-gray-100 font-prompt tracking-wide">
                {crystal.name}
              </h4>
            </div>
            
            <div className="p-5 text-center flex flex-col justify-between h-[180px]">
              <div>
                <p className="text-sm text-gray-400 line-clamp-2 mb-4 font-sarabun leading-relaxed">
                  {t(crystal.benefitKey)}
                </p>
                <div className="font-semibold text-gray-200 mb-6 font-prompt text-lg">
                  {t('price')} {crystal.price} {t('baht')}
                </div>
              </div>
              <button className="w-full font-prompt px-4 py-3 rounded-xl bg-white text-black hover:bg-gray-100 transition-colors tracking-wide font-medium shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-[0.98]">
                {t('buy_now')}
              </button>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
};

export default CrystalRecommendation;
