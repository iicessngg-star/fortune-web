import React from 'react';

const ElementAnalysis = ({ element }) => {
  return (
    <div className="mystic-card text-center">
      <h3 className="text-xl text-mystic-400 mb-2">ธาตุประจำตัว</h3>
      <div className="text-3xl font-bold text-gold-400 my-4">
        {element}
      </div>
      <p className="text-sm text-gray-300">
        ธาตุหลักที่สะท้อนตัวตนและพลังงานพื้นฐานของคุณ
      </p>
    </div>
  );
};

export default ElementAnalysis;
