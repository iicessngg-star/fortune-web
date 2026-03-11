import React from 'react';
import { useTranslation } from 'react-i18next';

const RadarElementalChart = ({ distribution }) => {
  const { t } = useTranslation();

  // Create standard mapping to match mockup if possible.
  // Using Fire, Earth, Metal, Water, Wood.
  
  // Radar SVG constants
  const size = 200;
  const center = size / 2;
  const radius = 80;
  const numPoints = 5;
  const angleStep = (Math.PI * 2) / numPoints;

  // Calculate coordinates for a polygon based on percentage (0-100)
  const getCoordinates = (values) => {
    return values.map((val, i) => {
      // Normalize value assuming max 100% (but in reality elements sum to 100, max around 40%)
      // Let's cap visual radius scaling at max 40% = radius edge.
      const normalizedPercent = Math.min((val / 40), 1); 
      const r = radius * normalizedPercent;
      
      // Start at top (offset by -PI/2)
      const angle = i * angleStep - Math.PI / 2;
      return {
        x: center + r * Math.cos(angle),
        y: center + r * Math.sin(angle)
      };
    });
  };

  // The base polygon points (100% radius)
  const basePoints = getCoordinates([40, 40, 40, 40, 40]);
  
  // Extract values from the distribution in a fixed order: Fire, Earth, Metal, Water, Wood
  const order = ['fire', 'earth', 'metal', 'water', 'wood'];
  const orderedData = order.map(elementKey => {
    const item = distribution.find(d => d.name === elementKey);
    return item ? item.percent : 10;
  });

  const dataPoints = getCoordinates(orderedData);
  const polygonPointsString = dataPoints.map(p => `${p.x},${p.y}`).join(' ');
  const basePolygonString = basePoints.map(p => `${p.x},${p.y}`).join(' ');

  // Midpoint polygons for concentric rings
  const ring1 = getCoordinates([30, 30, 30, 30, 30]).map(p => `${p.x},${p.y}`).join(' ');
  const ring2 = getCoordinates([20, 20, 20, 20, 20]).map(p => `${p.x},${p.y}`).join(' ');
  const ring3 = getCoordinates([10, 10, 10, 10, 10]).map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="mystic-card h-full flex flex-col items-center justify-between">
      <h3 className="text-xl font-bold text-gray-100 font-prompt mb-4 tracking-wide w-full text-left">
        {t('element_balance')}
      </h3>
      
      <div className="relative w-full flex justify-center items-center py-4 flex-1">
        
        {/* SVG Radar Chart */}
        <svg width="100%" height="200" viewBox="0 0 200 200" className="overflow-visible">
          {/* Base Rings */}
          <polygon points={basePolygonString} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <polygon points={ring1} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <polygon points={ring2} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <polygon points={ring3} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          
          {/* Axis lines */}
          {basePoints.map((p, i) => (
            <line key={`line-${i}`} x1={center} y1={center} x2={p.x} y2={p.y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
          ))}
          
          {/* Data Polygon */}
          <polygon 
            points={polygonPointsString} 
            fill="rgba(56, 189, 248, 0.2)" 
            stroke="rgba(56, 189, 248, 0.8)" 
            strokeWidth="2"
            className="transition-all duration-1000 ease-out"
          />
          
          {/* Data Points */}
          {dataPoints.map((p, i) => (
            <circle key={`point-${i}`} cx={p.x} cy={p.y} r="4" fill="#38bdf8" />
          ))}
        </svg>

        {/* Labels positioned absolutely over the SVG container */}
        <div className="absolute inset-0 pointer-events-none">
          {/* We position labels based on the fixed order: Fire(Top), Earth(RightTop), Metal(RightBot), Water(LeftBot), Wood(LeftTop) */}
          <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 text-center">
             <div className="text-xl drop-shadow-md">🔥</div>
             <div className="text-[10px] text-gray-300 font-sarabun mt-1">{t('element_fire')}</div>
             <div className="text-[11px] font-bold text-gray-100 uppercase">{orderedData[0]}%</div>
          </div>
          
          <div className="absolute top-[35%] right-0 translate-x-[20%] -translate-y-1/2 text-center">
             <div className="text-xl drop-shadow-md">⛰️</div>
             <div className="text-[10px] text-gray-300 font-sarabun mt-1">{t('element_earth')}</div>
             <div className="text-[11px] font-bold text-gray-100 uppercase">{orderedData[1]}%</div>
          </div>

          <div className="absolute bottom-[5%] right-[15%] translate-x-1/2 text-center">
             <div className="text-xl drop-shadow-md">⚙️</div>
             <div className="text-[10px] text-gray-300 font-sarabun mt-1">{t('element_metal')}</div>
             <div className="text-[11px] font-bold text-gray-100 uppercase">{orderedData[2]}%</div>
          </div>

          <div className="absolute bottom-[5%] left-[15%] -translate-x-1/2 text-center">
             <div className="text-xl drop-shadow-md">💧</div>
             <div className="text-[10px] text-gray-300 font-sarabun mt-1">{t('element_water')}</div>
             <div className="text-[11px] font-bold text-gray-100 uppercase">{orderedData[3]}%</div>
          </div>

          <div className="absolute top-[35%] left-0 -translate-x-[20%] -translate-y-1/2 text-center">
             <div className="text-xl drop-shadow-md">🌳</div>
             <div className="text-[10px] text-gray-300 font-sarabun mt-1">{t('element_wood')}</div>
             <div className="text-[11px] font-bold text-gray-100 uppercase">{orderedData[4]}%</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RadarElementalChart;
