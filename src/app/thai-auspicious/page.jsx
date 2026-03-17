'use client';
import { useState, useEffect } from 'react';
import {
  getTodayAuspiciousHours, getTodayPlanet, getWeeklyFortune,
  getThaiZodiacYear, thaiZodiac, dayPlanets,
} from '@/data/thaiAuspicious';

const qualityColors = {
  'ดีมาก': '#FCC419',
  'ดี':    '#51CF66',
  'พอใช้': '#74C0FC',
  'เลี่ยง': '#FF6B6B',
};

const qualityBg = {
  'ดีมาก': 'rgba(252,196,25,0.1)',
  'ดี':    'rgba(81,207,102,0.1)',
  'พอใช้': 'rgba(116,192,252,0.1)',
  'เลี่ยง': 'rgba(255,107,107,0.08)',
};

export default function ThaiAuspiciousPage() {
  const [todayHours]   = useState(getTodayAuspiciousHours());
  const [todayPlanet]  = useState(getTodayPlanet());
  const [weeklyFort]   = useState(getWeeklyFortune());
  const [birthYear, setBirthYear]   = useState('');
  const [zodiacResult, setZodiacResult] = useState(null);
  const [currentTime, setCurrentTime]   = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }));
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  // Find currently active auspicious slot
  const currentSlot = todayHours.find(slot => {
    if (!currentTime) return false;
    const [cH, cM] = currentTime.split(':').map(Number);
    const [sH, sM] = slot.start.split(':').map(Number);
    const [eH, eM] = slot.end.split(':').map(Number);
    const cur = cH * 60 + cM;
    return cur >= sH * 60 + sM && cur < eH * 60 + eM;
  });

  function handleZodiac() {
    const y = parseInt(birthYear);
    if (isNaN(y) || y < 1924 || y > 2024) return;
    setZodiacResult(getThaiZodiacYear(y));
  }

  const today = new Date();
  const dayTh = today.toLocaleDateString('th-TH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-6xl block mb-4">🕐</span>
          <h1 className="text-4xl font-cinzel font-bold text-white mb-3">
            ฤกษ์มงคล<span className="text-gradient-gold">ไทย</span>
          </h1>
          <p className="text-midnight-300 font-sarabun">ฤกษ์รายวัน · ชั่วโมงมงคล · นักษัตรประจำปี</p>
        </div>

        <div className="mystic-divider mb-8" />

        {/* Today Overview */}
        <div className="glass-card p-6 mb-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="text-center sm:text-left flex-1">
            <p className="text-xs text-midnight-400 font-cinzel uppercase tracking-widest mb-1">วันนี้</p>
            <h2 className="text-xl font-cinzel font-bold text-white mb-2">{dayTh}</h2>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{todayPlanet?.symbol}</span>
              <div>
                <p className="text-gold-400 font-cinzel font-bold">{todayPlanet?.nameTh}</p>
                <p className="text-midnight-400 text-sm font-sarabun">ดาว{todayPlanet?.planet} ปกครอง</p>
              </div>
            </div>
          </div>
          {currentSlot && (
            <div className="glass-card p-4 text-center min-w-[160px]"
              style={{ borderColor: qualityColors[currentSlot.quality] + '60', background: qualityBg[currentSlot.quality] }}
            >
              <p className="text-xs text-midnight-400 font-sarabun mb-1">ช่วงเวลาตอนนี้</p>
              <p className="font-cinzel font-bold text-lg" style={{ color: qualityColors[currentSlot.quality] }}>
                {currentSlot.quality}
              </p>
              <p className="text-xs text-midnight-300 font-sarabun mt-1">{currentSlot.activity}</p>
              <p className="text-xs text-midnight-500 font-mono mt-1">
                {currentSlot.start} – {currentSlot.end}
              </p>
            </div>
          )}
        </div>

        {/* Hourly Grid */}
        <div className="glass-card p-6 mb-8">
          <h2 className="text-xl font-cinzel font-bold text-white mb-6 text-center">
            ⏰ ตารางฤกษ์มงคลประจำวันนี้
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {todayHours.map((slot, i) => {
              const isNow = slot === currentSlot;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    isNow ? 'ring-2' : ''
                  }`}
                  style={{
                    background: qualityBg[slot.quality],
                    borderColor: qualityColors[slot.quality] + '40',
                    boxShadow:   isNow ? `0 0 20px ${qualityColors[slot.quality]}40` : 'none',
                    ringColor:   qualityColors[slot.quality],
                  }}
                >
                  <div className="text-center min-w-[70px]">
                    <p className="font-mono text-sm font-bold" style={{ color: qualityColors[slot.quality] }}>
                      {slot.start}
                    </p>
                    <p className="text-midnight-500 text-xs font-mono">– {slot.end}</p>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-sarabun font-semibold"
                        style={{
                          color:       qualityColors[slot.quality],
                          background: qualityBg[slot.quality],
                          border:     `1px solid ${qualityColors[slot.quality]}40`,
                        }}
                      >
                        {slot.quality}
                      </span>
                      {isNow && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gold-400/20 text-gold-400 border border-gold-400/30 font-sarabun animate-pulse">
                          ตอนนี้
                        </span>
                      )}
                    </div>
                    <p className="text-midnight-300 text-xs font-sarabun">{slot.activity}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly Fortune */}
        <div className="glass-card p-6 mb-8">
          <h2 className="text-xl font-cinzel font-bold text-white mb-6 text-center">
            📅 ดวงประจำสัปดาห์นี้
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {weeklyFort.map((item, i) => (
              <div key={i} className="glass-card p-4 text-center glass-card-hover">
                <p className="text-midnight-400 text-xs font-sarabun mb-2">{item.title}</p>
                <p className="text-2xl font-cinzel font-bold text-gradient-gold mb-1">{item.score}</p>
                <p className="text-lg">{item.trend === '↑' ? '🔥' : item.trend === '→' ? '✨' : '🌙'}</p>
                <p className="text-midnight-300 text-xs font-sarabun mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7-Day Planet */}
        <div className="glass-card p-6 mb-8">
          <h2 className="text-xl font-cinzel font-bold text-white mb-6 text-center">🪐 ดาวประจำวัน 7 วัน</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.entries(dayPlanets).map(([d, p]) => {
              const isToday = parseInt(d) === new Date().getDay();
              return (
                <div
                  key={d}
                  className={`text-center px-4 py-3 rounded-xl border transition-all ${
                    isToday ? 'ring-2' : 'opacity-70'
                  }`}
                  style={{
                    borderColor: p.color + '50',
                    background: isToday ? p.color + '15' : 'transparent',
                    boxShadow:  isToday ? `0 0 20px ${p.color}30` : 'none',
                  }}
                >
                  <p className="text-xl mb-1">{p.symbol}</p>
                  <p className="text-xs font-cinzel font-bold" style={{ color: p.color }}>{p.nameTh.replace('วัน','')}</p>
                  <p className="text-xs text-midnight-400 font-sarabun">{p.planet}</p>
                  {isToday && <p className="text-xs text-gold-400 font-sarabun mt-1">วันนี้</p>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Thai Zodiac Lookup */}
        <div className="glass-card p-8">
          <h2 className="text-xl font-cinzel font-bold text-white mb-2 text-center">🐉 นักษัตรประจำปีเกิด</h2>
          <p className="text-center text-midnight-400 font-sarabun text-sm mb-6">กรอกปีเกิด (พ.ศ.) เพื่อดูนักษัตรของคุณ</p>
          <div className="flex gap-3 max-w-sm mx-auto mb-6">
            <input
              value={birthYear}
              onChange={e => setBirthYear(e.target.value)}
              placeholder="เช่น 2538"
              className="mystic-input flex-1"
              type="number" min="1924" max="2024"
              onKeyDown={e => e.key === 'Enter' && handleZodiac()}
            />
            <button onClick={handleZodiac} className="btn-gold px-5">ดู</button>
          </div>

          {zodiacResult && (
            <div className="glass-card p-6 text-center animate-slide-up border border-gold-400/20">
              <span className="text-6xl block mb-3">{zodiacResult.emoji}</span>
              <h3 className="font-cinzel font-bold text-white text-2xl mb-1">
                ปี{zodiacResult.year} ({zodiacResult.animal})
              </h3>
              <p className="text-gold-400 font-sarabun mb-2">ธาตุ{zodiacResult.element}</p>
              <p className="text-midnight-200 font-sarabun text-sm leading-relaxed max-w-xs mx-auto mb-4">{zodiacResult.trait}</p>
              <p className="text-xs text-midnight-400 font-sarabun">สีมงคล: {zodiacResult.lucky}</p>
            </div>
          )}

          {/* Zodiac Grid */}
          <div className="mt-8">
            <p className="text-center text-midnight-400 font-sarabun text-sm mb-4">นักษัตรทั้ง 12</p>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {thaiZodiac.map((z, i) => (
                <div key={i} className="glass-card p-2 text-center glass-card-hover cursor-default">
                  <span className="text-2xl">{z.emoji}</span>
                  <p className="text-xs text-midnight-300 font-sarabun mt-1">ปี{z.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
