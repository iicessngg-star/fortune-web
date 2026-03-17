'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { getRandomCards } from '@/data/tarotData';
import { useCrystal } from '@/utils/crystalContext';
import { Lock, Gem, RotateCcw, Sparkles } from 'lucide-react';
import { playRitualHum, playCardFlip, playStarSparkle, playCrystalChime } from '@/utils/soundEffects';

const UNLOCK_COST = 30;
const FEATURE_KEY = 'tarot_deep';

// ── Ritual Hold Button ────────────────────────────────────────────────────────
function RitualButton({ onComplete }) {
  const [progress,  setProgress]  = useState(0);
  const [holding,   setHolding]   = useState(false);
  const [done,      setDone]      = useState(false);
  const intervalRef = useRef(null);

  // เรียก onComplete หลัง render เสร็จ (ไม่เรียกใน updater function)
  useEffect(() => {
    if (done) {
      playCrystalChime();
      onComplete();
    }
  }, [done]); // eslint-disable-line react-hooks/exhaustive-deps

  const startHold = useCallback(() => {
    if (done) return;
    setHolding(true);
    playRitualHum();
    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        const next = prev + (100 / 30); // 3s = 30 × 100ms
        if (next >= 100) {
          clearInterval(intervalRef.current);
          // ไม่เรียก onComplete ที่นี่ — ใช้ useEffect แทน
          return 100;
        }
        return next;
      });
    }, 100);
  }, [done]);

  // เมื่อ progress ถึง 100 ให้ set done
  useEffect(() => {
    if (progress >= 100) {
      setDone(true);
      setHolding(false);
    }
  }, [progress]);

  const stopHold = useCallback(() => {
    if (done) return;
    clearInterval(intervalRef.current);
    setHolding(false);
    setProgress(0);
  }, [done]);

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-midnight-300 font-sarabun text-center max-w-sm leading-relaxed">
        ก่อนดึงไพ่ กรุณา<strong className="text-gold-400">ตั้งจิตอธิษฐาน</strong>
        <br />
        กดค้างปุ่มด้านล่างไว้ 3 วินาที พร้อมนึกถึงสิ่งที่ต้องการรู้
      </p>

      {/* Ritual Circle SVG */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className={`ritual-circle-svg absolute inset-0 w-full h-full ${holding ? 'ritual-filling' : ''}`}
          viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45"
            stroke="rgba(240,168,0,0.2)" strokeWidth="4" />
          <circle cx="50" cy="50" r="45"
            stroke="url(#goldGrad)" strokeWidth="4" strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * progress) / 100}
            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', transition: 'stroke-dashoffset 0.1s' }}
          />
          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffd84e" />
              <stop offset="100%" stopColor="#f0a800" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-4xl z-10 animate-float">{done ? '✨' : '🌙'}</span>
      </div>

      <button
        onMouseDown={startHold}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        onTouchStart={startHold}
        onTouchEnd={stopHold}
        disabled={done}
        className={`btn-gold px-8 py-4 text-lg select-none font-sarabun transition-all ${
          done ? 'opacity-60 cursor-not-allowed' : holding ? 'scale-95 shadow-gold-glow-lg' : ''
        }`}
      >
        {done ? '✨ จิตอธิษฐานสำเร็จแล้ว' : holding ? '🙏 กำลังตั้งจิต...' : '🙏 กดค้างเพื่อตั้งจิต (3 วินาที)'}
      </button>

      {!done && (
        <p className="text-xs text-midnight-500 font-sarabun">* กดค้างอย่างน้อย 3 วินาทีจนครบวงกลม</p>
      )}
    </div>
  );
}

// ── Tarot Card Component ───────────────────────────────────────────────────────
function TarotCard({ card, index, selected, onClick, flipped }) {
  return (
    <div
      className="card-3d-wrapper cursor-pointer"
      style={{ width: '140px', height: '210px' }}
      onClick={onClick}
    >
      <div className={`card-3d-inner w-full h-full ${flipped ? 'flipped' : ''}`}>
        {/* Card Back */}
        <div className="card-3d-front w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #1a0a3a, #0f0733)',
            border: selected ? '2px solid #ffd84e' : '1px solid rgba(255,216,78,0.2)',
            borderRadius: '12px',
            boxShadow: selected ? '0 0 20px rgba(240,168,0,0.5)' : '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-3">
            <div className="text-4xl">⭐</div>
            <div className="w-16 h-16 rounded-full border border-gold-400/30 flex items-center justify-center">
              <span className="text-2xl">🔮</span>
            </div>
            <p className="text-gold-400/60 text-xs font-cinzel">ไพ่ที่ {index + 1}</p>
          </div>
        </div>

        {/* Card Front (after flip) */}
        <div className="card-3d-back w-full h-full"
          style={{
            background: `linear-gradient(135deg, ${card?.color?.includes('from-') ? '' : '#1a0a3a'}, #0f0733)`,
            borderRadius: '12px',
            border: '1px solid rgba(255,216,78,0.3)',
            overflow: 'hidden',
          }}
        >
          {card && (
            <div
              className={`w-full h-full flex flex-col items-center justify-between p-4 bg-gradient-to-b ${card.color}`}
            >
              <p className="text-xs text-white/60 font-cinzel">{card.isReversed ? '↕ กลับ' : '↑ ตรง'}</p>
              <div className="text-center">
                <span className="text-5xl block mb-2"
                  style={{ transform: card.isReversed ? 'rotate(180deg)' : 'none' }}
                >{card.symbol}</span>
                <p className="text-white font-cinzel font-bold text-sm leading-tight">{card.nameTh}</p>
                <p className="text-white/50 text-xs mt-1 font-cinzel">{card.name}</p>
              </div>
              <p className="text-white/70 text-xs font-sarabun text-center leading-tight">
                {card.isReversed ? card.reversed.shortDesc : card.upright.shortDesc}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function TarotPage() {
  const { unlockFeature, isUnlocked, balance } = useCrystal();
  const unlocked = isUnlocked(FEATURE_KEY);

  const [phase, setPhase]     = useState('ritual'); // ritual | shuffle | draw | result
  const [cards, setCards]     = useState([]);
  const [flipped, setFlipped] = useState([false, false, false]);
  const [unlockMsg, setUnlockMsg] = useState('');
  const [shuffleStep, setShuffleStep] = useState(0); // 0-3 animation frames

  function handleRitualComplete() {
    setPhase('shuffle');
    // Animate shuffle: 3 quick "deal" steps then reveal draw
    let step = 0;
    const iv = setInterval(() => {
      step++;
      setShuffleStep(step);
      if (step >= 3) {
        clearInterval(iv);
        setCards(getRandomCards(3));
        setTimeout(() => setPhase('draw'), 400);
      }
    }, 350);
  }

  function flipCard(i) {
    if (flipped[i]) return;
    playCardFlip();
    const next = [...flipped];
    next[i] = true;
    setFlipped(next);
    if (next.every(Boolean) && phase !== 'result') {
      setTimeout(() => { setPhase('result'); playStarSparkle(); }, 600);
    }
  }

  function reset() {
    setPhase('ritual');
    setCards([]);
    setFlipped([false, false, false]);
  }

  function handleUnlock() {
    if (balance < UNLOCK_COST) {
      setUnlockMsg(`Crystal ไม่พอ (ต้องการ ${UNLOCK_COST} 💎)`);
      setTimeout(() => setUnlockMsg(''), 3000);
      return;
    }
    unlockFeature(FEATURE_KEY, UNLOCK_COST);
    setUnlockMsg('ปลดล็อกสำเร็จ! 🎉');
    setTimeout(() => setUnlockMsg(''), 2000);
  }

  const cardTitles = ['อดีต', 'ปัจจุบัน', 'อนาคต'];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-6xl block mb-4">🃏</span>
          <h1 className="text-4xl font-cinzel font-bold text-white mb-3">
            ไพ่ <span className="text-gradient-gold">ยิปซี</span>
          </h1>
          <p className="text-midnight-300 font-sarabun">Major Arcana · 3 ใบ · อดีต ปัจจุบัน อนาคต</p>
        </div>

        <div className="mystic-divider" />

        {/* ── Phase: Ritual ────────────────────────── */}
        {phase === 'ritual' && (
          <div className="glass-card p-10 text-center mt-8 animate-fade-in">
            <h2 className="text-2xl font-cinzel font-bold text-white mb-8">
              ✦ พิธีตั้งจิตอธิษฐาน ✦
            </h2>
            <RitualButton onComplete={handleRitualComplete} />
          </div>
        )}

        {/* ── Phase: Shuffle ───────────────────────── */}
        {phase === 'shuffle' && (
          <div className="glass-card p-10 text-center mt-8 animate-fade-in">
            <h2 className="text-2xl font-cinzel font-bold text-white mb-8">✦ กำลังสับไพ่ ✦</h2>
            <div className="flex justify-center gap-3 mb-6">
              {[0,1,2].map(i => (
                <div
                  key={i}
                  className="w-20 h-32 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, #1a0a3a, #0f0733)',
                    border: '1px solid rgba(255,216,78,0.3)',
                    transform: shuffleStep > i ? `translateY(-${(shuffleStep - i) * 12}px) rotate(${(i-1)*8}deg)` : 'none',
                    transition: 'transform 0.3s ease',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2rem',
                  }}
                >🔮</div>
              ))}
            </div>
            <p className="text-gold-400 font-sarabun animate-pulse">จักรวาลกำลังเลือกไพ่ให้คุณ...</p>
          </div>
        )}

        {/* ── Phase: Draw ──────────────────────────── */}
        {phase === 'draw' && (
          <div className="mt-8 animate-slide-up">
            <div className="glass-card p-8 text-center mb-8">
              <p className="text-gold-400 font-cinzel mb-2">คลิกที่ไพ่เพื่อเปิด</p>
              <p className="text-midnight-400 text-sm font-sarabun">เปิดทีละใบ หรือเปิดทั้งหมด</p>
            </div>

            {/* Cards */}
            <div className="flex justify-center gap-6 flex-wrap">
              {cards.map((card, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <p className="text-gold-400 text-xs font-cinzel uppercase tracking-widest">{cardTitles[i]}</p>
                  <TarotCard
                    card={card} index={i}
                    selected={false} flipped={flipped[i]}
                    onClick={() => flipCard(i)}
                  />
                </div>
              ))}
            </div>

            {/* Flip All */}
            {!flipped.every(Boolean) && (
              <div className="text-center mt-8">
                <button onClick={() => setFlipped([true, true, true])} className="btn-mystic px-8 py-3">
                  เปิดทั้ง 3 ใบพร้อมกัน
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── Phase: Result ────────────────────────── */}
        {phase === 'result' && (
          <div className="mt-8 space-y-6 animate-slide-up">
            {/* Cards row (visible, no more flipping) */}
            <div className="flex justify-center gap-6 flex-wrap mb-4">
              {cards.map((card, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <p className="text-gold-400 text-xs font-cinzel uppercase tracking-widest">{cardTitles[i]}</p>
                  <TarotCard card={card} index={i} selected={false} flipped={true} onClick={() => {}} />
                </div>
              ))}
            </div>

            {/* Basic Interpretations */}
            <div className="glass-card p-8 space-y-6">
              <h2 className="text-xl font-cinzel font-bold text-white text-center mb-6">
                ✦ ความหมายพื้นฐาน ✦
              </h2>
              {cards.map((card, i) => (
                <div key={i} className="pb-6 border-b border-midnight-700/50 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{card.symbol}</span>
                    <div>
                      <p className="font-cinzel font-bold text-white">
                        {cardTitles[i]}: {card.nameTh}
                        {card.isReversed && <span className="text-red-400 ml-2 text-sm"> (กลับด้าน)</span>}
                      </p>
                      <div className="flex gap-1 mt-1">
                        {(card.isReversed ? card.reversed.keywords : card.upright.keywords).map((kw, j) => (
                          <span key={j} className="text-xs px-2 py-0.5 rounded-full bg-mystic-800/50 text-midnight-200 font-sarabun border border-mystic-600/30">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-midnight-200 font-sarabun text-sm leading-relaxed">
                    {card.isReversed ? card.reversed.shortDesc : card.upright.shortDesc}
                  </p>
                </div>
              ))}
            </div>

            {/* Deep Analysis Freemium Gate */}
            <div className="glass-card p-8 relative overflow-hidden">
              <h2 className="text-xl font-cinzel font-bold text-white text-center mb-6">
                🔮 การวิเคราะห์ AI เชิงลึก
              </h2>

              {unlocked ? (
                <div className="space-y-4 font-sarabun text-midnight-200 leading-relaxed">
                  {cards.map((card, i) => (
                    <div key={i} className="glass-card p-4 border border-gold-400/20">
                      <p className="text-gold-400 font-semibold mb-2">
                        {cardTitles[i]}: {card.nameTh} {card.isReversed ? '(กลับด้าน)' : ''}
                      </p>
                      <p className="text-sm leading-relaxed">
                        {card.isReversed ? card.reversed.fullDesc : card.upright.fullDesc}
                      </p>
                    </div>
                  ))}
                  <div className="glass-card p-4 border border-gold-400/30 mt-4">
                    <p className="text-gold-300 font-semibold text-center mb-2">🌟 สรุปภาพรวม</p>
                    <p className="text-center text-sm">
                      ไพ่ทั้ง 3 ใบบอกว่า เส้นทางชีวิตของคุณกำลังผ่านช่วงการ
                      {cards[0].upright.keywords[0]}สู่{cards[2].upright.keywords[0]}
                      จักรวาลแนะนำให้คุณ{cards[1].upright.keywords[1]} ในช่วงเวลานี้
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <div className="locked-overlay">
                    <div className="space-y-3 text-midnight-200 font-sarabun opacity-50 select-none pointer-events-none text-sm">
                      <p>ไพ่ใบแรก ({cards[0]?.nameTh}) บ่งชี้ว่าในอดีตคุณได้ผ่านประสบการณ์...</p>
                      <p>ไพ่ใบที่สอง ({cards[1]?.nameTh}) สะท้อนสถานการณ์ปัจจุบันของคุณว่า...</p>
                      <p>ไพ่ใบที่สาม ({cards[2]?.nameTh}) เผยชะตาในอนาคตว่าจะมีการ...</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20">
                    <Lock className="w-8 h-8 text-gold-400" />
                    <p className="font-cinzel font-bold text-white text-lg text-center">
                      ปลดล็อกคำวิเคราะห์ AI เชิงลึก
                    </p>
                    {unlockMsg ? (
                      <p className="text-gold-400 font-sarabun text-sm">{unlockMsg}</p>
                    ) : (
                      <button onClick={handleUnlock} className="btn-gold flex items-center gap-2">
                        <Gem className="w-4 h-4" />
                        ปลดล็อก {UNLOCK_COST} Crystal
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Reset */}
            <div className="text-center">
              <button onClick={reset} className="btn-mystic flex items-center gap-2 mx-auto">
                <RotateCcw className="w-4 h-4" />
                ดึงไพ่ใหม่
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
