import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getRandomTarotCard } from '../utils/fortuneEngine';

const DailyTarotWidget = () => {
  const { t } = useTranslation();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Generate two cards automatically for the dashboard view
    setCards([getRandomTarotCard(), getRandomTarotCard()]);
  }, []);

  if (cards.length < 2) return null;

  return (
    <div className="mystic-card h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-100 font-prompt tracking-wide drop-shadow-sm">
          {t('daily_fortune_tarot')}
        </h3>
        <span className="text-gray-400 tracking-widest text-xl">•••</span>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex justify-center items-center gap-[-20px] mb-8 relative w-full h-40">
           {/* Card 1 */}
           <div className="absolute left-1/2 -ml-[70px] transform -rotate-12 w-28 h-40 rounded-lg overflow-hidden border-2 border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-10 hover:-translate-y-2 hover:-rotate-6 transition-all">
             <img src={cards[0].image} alt={cards[0].name} className="w-full h-full object-cover" />
           </div>
           
           {/* Card 2 */}
           <div className="absolute left-1/2 -ml-[20px] transform rotate-12 w-28 h-40 rounded-lg overflow-hidden border-2 border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 hover:-translate-y-2 hover:rotate-6 transition-all">
             <img src={cards[1].image} alt={cards[1].name} className="w-full h-full object-cover" />
           </div>
        </div>
        
        <div className="text-left w-full mt-auto">
          <h4 className="text-gray-100 font-bold font-prompt text-lg border-b border-white/10 pb-2 mb-2">
            {t('todays_message')}
          </h4>
          <p className="text-sm text-gray-300 font-sarabun leading-relaxed">
            {t(`${cards[0].key}_meaning`)} {t(`${cards[1].key}_meaning`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyTarotWidget;
