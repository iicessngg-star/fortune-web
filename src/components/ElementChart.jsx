import React from 'react';

const ElementChart = ({ distribution }) => {
  return (
    <div className="mystic-card col-span-1 md:col-span-2 mb-6">
      <h3 className="text-xl text-mystic-400 mb-6 text-center font-prompt">
        ⚖️ ความสมดุลแห่งธาตุ (Element Balance)
      </h3>
      
      <div className="space-y-4">
        {distribution.map((elem, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="w-24 text-sm font-semibold text-gray-200 flex items-center gap-2">
              <span>{elem.icon}</span> {elem.name}
            </div>
            
            <div className="flex-1 bg-mystic-900/50 rounded-full h-4 overflow-hidden border border-mystic-600/30">
              <div 
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${elem.percent}%`, backgroundColor: elem.color }}
              ></div>
            </div>
            
            <div className="w-12 text-sm text-right text-gold-400 font-bold">
              {elem.percent}%
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-300 font-sarabun">
          *การเสริมธาตุที่อ่อนแอที่สุดจะช่วยปรับสมดุลและดึงดูดพลังงานที่ดีเข้ามาในชีวิต*
        </p>
      </div>
    </div>
  );
};

export default ElementChart;
