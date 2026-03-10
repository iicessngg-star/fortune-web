import React from 'react';

const BaziAnalysis = ({ zodiac }) => {
  return (
    <div className="mystic-card">
      <h3 className="text-xl text-mystic-400 mb-4 text-center">นักษัตรประจำปีเกิด</h3>
      <div className="text-center mb-6">
        <p className="text-2xl font-bold text-gray-100">ปี{zodiac}</p>
      </div>
      
      <div className="bg-mystic-900/50 rounded-xl p-4 text-center">
        <p className="text-sm text-gray-300">
          นักษัตรประจำปีเกิดตามปฏิทินจีน (ค.ศ. {new Date().getFullYear()})
        </p>
      </div>
    </div>
  );
};

export default BaziAnalysis;
