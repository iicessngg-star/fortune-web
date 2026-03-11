import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getRandomTarotCard } from '../utils/fortuneEngine';

const TarotDraw = () => {
  const { t } = useTranslation();
  const [card, setCard] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleDraw = () => {
    setIsDrawing(true);
    setCard(null);
    
    setTimeout(() => {
      setCard(getRandomTarotCard());
      setIsDrawing(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 mb-12 z-10 relative px-4 md:px-8">
      <div className="mystic-card text-center p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 font-prompt mb-4 tracking-wide">
          {t('tarot_title')}
        </h2>
        <p className="text-gray-400 font-sarabun mb-10 max-w-xl mx-auto text-lg">
          {t('tarot_desc')}
        </p>
        
        {!card && !isDrawing && (
          <button 
            onClick={handleDraw}
            className="mystic-btn px-10 py-4 text-lg bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto mt-4"
          >
            {t('draw_card')}
          </button>
        )}
        
        {isDrawing && (
          <div className="flex justify-center items-center h-64">
             <div className="w-24 h-36 bg-white/5 border border-white/20 rounded-xl animate-[spin_2s_linear_infinite] shadow-[0_0_30px_rgba(255,255,255,0.05)]"></div>
          </div>
        )}
        
        {card && !isDrawing && (
          <div className="mt-12 animate-fade-in flex flex-col md:flex-row items-center gap-10 bg-white/[0.02] p-8 rounded-3xl border border-white/5">
            <div className="w-48 h-72 rounded-xl overflow-hidden shadow-2xl relative group shrink-0 border border-white/10">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <img src={card.image} alt={card.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            
            <div className="max-w-sm text-left">
              <h3 className="text-2xl font-bold text-gray-100 font-prompt mb-4 px-5 py-2 bg-white/5 inline-block rounded-lg border border-white/10 tracking-widest text-sm uppercase">
                {t(`${card.key}_name`)}
              </h3>
              <p className="text-base md:text-lg text-gray-300 font-sarabun leading-relaxed">
                {t(`${card.key}_meaning`)}
              </p>
              
              <button 
                onClick={handleDraw}
                className="mt-8 text-sm text-gray-500 hover:text-white underline font-sarabun transition-colors"
              >
                {t('draw_card_again')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TarotDraw;
