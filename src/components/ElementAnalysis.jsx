import React from 'react';

const ElementAnalysis = ({ element }) => {
  return (
    <div className="mystic-card text-center">
      <h3 className="text-xl text-mystic-400 mb-2">ธาตุประจำตัว</h3>
      <div className={`text-5xl my-4 ${element.color || 'text-gold-400'}`}>
        {element.icon}
      </div>
      <div className="text-2xl font-bold text-gray-100 my-2">
        {element.name}
      </div>
    </div>
  );
};

export default ElementAnalysis;
