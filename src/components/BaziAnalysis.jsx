import React from 'react';

const BaziAnalysis = ({ bazi, birthChart }) => {
  return (
    <div className="mystic-card">
      <h3 className="text-xl text-mystic-400 mb-4 text-center">วิเคราะห์ดวงจีน BaZi</h3>
      <div className="text-center mb-6">
        <p className="text-2xl font-bold text-gray-100">คุณเป็น{bazi}</p>
      </div>
      
      <div className="bg-mystic-900/50 rounded-xl p-4">
        <h4 className="text-lg text-gold-400 mb-3 text-center border-b border-mystic-600/50 pb-2">Birth Chart</h4>
        <div className="space-y-2 text-sm text-gray-200">
          <div className="flex justify-between">
            <span className="text-mystic-400">ลัคนา:</span>
            <span>{birthChart.ascendant}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-mystic-400">ธาตุหลัก:</span>
            <span>{birthChart.mainElement}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-mystic-400">สมดุลธาตุ:</span>
            <span>{birthChart.balance}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaziAnalysis;
