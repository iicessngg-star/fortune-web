'use client';
import { useEffect, useState } from 'react';
import { Sparkles, X } from 'lucide-react';

const DAILY_GREETINGS = [
  { msg: 'ดวงดาวยิ้มให้คุณวันนี้ ✨', sub: 'พลังงานจักรวาลอยู่เคียงข้าง' },
  { msg: 'วันใหม่ พลังใหม่ โชคใหม่ 🌟', sub: 'เปิดรับสิ่งดีๆ ที่กำลังจะมา' },
  { msg: 'จักรวาลส่งพลังงานบวกมาให้ 💫', sub: 'วันนี้เป็นวันมงคลของคุณ' },
  { msg: 'ดาวนำทางกลับมาแล้ว 🔮', sub: 'ทุกก้าวที่เดิน มีดวงดาวคุ้มครอง' },
  { msg: 'สวรรค์เปิดประตูให้คุณวันนี้ 🌙', sub: 'ใช้พลังคริสตัลให้เกิดประโยชน์สูงสุด' },
];

export default function DailyRewardModal({ crystals, onClose }) {
  const [visible, setVisible] = useState(false);
  const greeting = DAILY_GREETINGS[new Date().getDay() % DAILY_GREETINGS.length];

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 300);
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(3,1,24,0.85)', backdropFilter: 'blur(6px)' }}
      onClick={handleClose}
    >
      <div
        className={`glass-card p-8 max-w-sm w-full text-center relative transition-all duration-300 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
        style={{ border: '1px solid rgba(240,168,0,0.5)', boxShadow: '0 0 60px rgba(240,168,0,0.2)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-midnight-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Crystal animation */}
        <div className="relative mb-6">
          <div className="text-7xl animate-bounce-gentle mx-auto block">💎</div>
          {/* Sparkle rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: i % 2 === 0 ? '#ffd84e' : '#b975f8',
                  top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                  left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                  animation: `twinkle ${1 + i * 0.2}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Label */}
        <p className="text-xs text-gold-400 font-cinzel tracking-widest uppercase mb-2">
          ✦ รางวัลประจำวัน ✦
        </p>

        {/* Crystals earned */}
        <div
          className="text-5xl font-cinzel font-black mb-2 text-gradient-gold"
          style={{ lineHeight: 1.2 }}
        >
          +{crystals}
        </div>
        <p className="text-gold-300 font-cinzel text-lg mb-4">Crystal</p>

        {/* Greeting */}
        <div className="mystic-divider my-4" />
        <p className="text-white font-sarabun font-semibold text-base mb-1">{greeting.msg}</p>
        <p className="text-midnight-300 font-sarabun text-sm">{greeting.sub}</p>

        {/* CTA */}
        <button
          onClick={handleClose}
          className="btn-gold mt-6 w-full flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          รับพลังงานวันนี้
        </button>
      </div>
    </div>
  );
}
