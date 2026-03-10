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
    <div className="w-full max-w-4xl mx-auto mt-12 mb-12 z-10 relative px-4">
      <div className="mystic-card text-center p-8">
        <h2 className="text-3xl font-bold text-pink-400 font-prompt mb-4">
          {t('tarot_title')}
        </h2>
        <p className="text-mystic-300 font-sarabun mb-8">
          {t('tarot_desc')}
        </p>
        
        {!card && !isDrawing && (
          <button 
            onClick={handleDraw}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl shadow-xl hover:scale-105 transition-all font-prompt font-semibold text-lg"
          >
            {t('draw_card')}
          </button>
        )}
        
        {isDrawing && (
          <div className="flex justify-center items-center h-64">
             <div className="w-24 h-36 bg-mystic-900 border-2 border-dashed border-pink-400/50 rounded-xl animate-[spin_2s_linear_infinite] shadow-[0_0_20px_rgba(236,72,153,0.4)]"></div>
          </div>
        )}
        
        {card && !isDrawing && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-in mt-6">
            <div className="w-48 h-72 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.4)] border border-pink-500/50">
              <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="max-w-sm text-left">
              <h3 className="text-2xl font-bold text-gold-400 font-prompt mb-2 px-4 py-1 bg-mystic-900/60 inline-block rounded-lg shadow-inner">
                {card.name}
              </h3>
              <p className="text-lg text-gray-200 font-sarabun mt-4 leading-relaxed bg-mystic-900/40 p-4 rounded-xl border border-purple-500/20">
                {card.meaning}
              </p>
              
              <button 
                onClick={handleDraw}
                className="mt-6 px-6 py-2 bg-mystic-900/80 border border-pink-500 text-pink-300 hover:bg-pink-900/50 rounded-xl transition-all font-prompt text-sm"
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
