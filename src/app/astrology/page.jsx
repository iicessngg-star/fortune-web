'use client';
import { useState, useRef, useEffect } from 'react';
import { getSunSign, getMoonSign, getRisingSign, getLuckIndex, SIGNS } from '@/utils/astrologyEngine';
import { useCrystal } from '@/utils/crystalContext';
import { Lock, Gem, Sparkles, ArrowRight } from 'lucide-react';

const MONTHS = [
  'มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
  'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม',
];

const UNLOCK_COST = 50;
const FEATURE_KEY = 'astro_deep';

function LuckBar({ label, score, color }) {
  const [fill, setFill] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setFill(score), 300);
    return () => clearTimeout(t);
  }, [score]);

  const emoji = score >= 70 ? '🔥' : score >= 50 ? '✨' : '💧';
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-sarabun text-midnight-200 font-semibold">{label}</span>
        <span className="text-sm font-cinzel" style={{ color }}>{score}% {emoji}</span>
      </div>
      <div className="luck-bar-track">
        <div
          className="luck-bar-fill"
          style={{
            width: `${fill}%`,
            background: `linear-gradient(90deg, #8b35e0, ${color})`,
          }}
        />
      </div>
    </div>
  );
}

function SignCard({ title, sign, emoji }) {
  if (!sign) return null;
  const elementColors = { fire: '#FF6B6B', earth: '#A9E34B', air: '#74C0FC', water: '#9775FA' };
  const color = elementColors[sign.element] || '#ffd84e';
  return (
    <div className="glass-card p-5 text-center flex flex-col items-center gap-2 glass-card-hover">
      <p className="text-xs text-midnight-400 font-cinzel uppercase tracking-widest mb-1">{title}</p>
      <span className="text-4xl">{sign.symbol}</span>
      <p className="font-cinzel font-bold text-white text-lg">{sign.nameTh}</p>
      <p className="text-xs font-sarabun" style={{ color }}>
        ธาตุ{SIGNS[sign.name?.toLowerCase().replace(' ','')] ? '' : ''} {
          { fire: '🔥 ไฟ', earth: '🌱 ดิน', air: '💨 ลม', water: '💧 น้ำ' }[sign.element]
        }
      </p>
      <p className="text-xs font-sarabun text-midnight-300">{sign.trait}</p>
    </div>
  );
}

export default function AstrologyPage() {
  const { unlockFeature, isUnlocked, balance } = useCrystal();
  const unlocked = isUnlocked(FEATURE_KEY);

  const [form, setForm] = useState({ day: '', month: '', year: '', hour: '12', minute: '0' });
  const [result, setResult] = useState(null);
  const [error, setError]   = useState('');
  const [unlockMsg, setUnlockMsg] = useState('');

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { day, month, year, hour, minute } = form;
    if (!day || !month || !year) { setError('กรุณากรอกวันเกิดให้ครบ'); return; }
    const d = parseInt(day), m = parseInt(month), y = parseInt(year), h = parseInt(hour);
    if (y < 1900 || y > 2025 || d < 1 || d > 31 || m < 1 || m > 12) {
      setError('วันเกิดไม่ถูกต้อง'); return;
    }
    setError('');
    const dateObj = new Date(y, m - 1, d);
    const sun     = getSunSign(dateObj);
    const moon    = getMoonSign(dateObj);
    const rising  = getRisingSign(dateObj, h);
    const luck    = getLuckIndex(`${d}/${m}/${y}`);
    setResult({ sun, moon, rising, luck, dateStr: `${d} ${MONTHS[m-1]} ${y + 543}` });
    // Save to crystal context profile
  }

  function handleUnlock() {
    if (balance < UNLOCK_COST) {
      setUnlockMsg(`Crystal ไม่พอ (ต้องการ ${UNLOCK_COST} 💎)`);
      setTimeout(() => setUnlockMsg(''), 3000);
      return;
    }
    const ok = unlockFeature(FEATURE_KEY, UNLOCK_COST);
    if (ok) setUnlockMsg('ปลดล็อกสำเร็จ! 🎉');
    setTimeout(() => setUnlockMsg(''), 2000);
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-6xl block mb-4">🔮</span>
          <h1 className="text-4xl font-cinzel font-bold text-white mb-3">
            โหราศาสตร์ <span className="text-gradient-gold">ตะวันตก</span>
          </h1>
          <p className="text-midnight-300 font-sarabun">ระบบ Tropical Zodiac · คำนวณดาว Sun · Moon · Rising</p>
        </div>

        {/* Divider */}
        <div className="mystic-divider" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass-card p-8 mb-10">
          <h2 className="text-xl font-cinzel font-bold text-white mb-6 text-center">
            ✦ กรอกข้อมูลวันเกิด ✦
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="mystic-label">วันเกิด</label>
              <input
                name="day" type="number" min="1" max="31"
                placeholder="เช่น 15" value={form.day}
                onChange={handleChange} className="mystic-input"
              />
            </div>
            <div>
              <label className="mystic-label">เดือนเกิด</label>
              <select name="month" value={form.month} onChange={handleChange} className="mystic-input">
                <option value="">เลือกเดือน</option>
                {MONTHS.map((m, i) => (
                  <option key={i} value={i + 1}>{m}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mystic-label">ปีเกิด (ค.ศ.)</label>
              <input
                name="year" type="number" min="1900" max="2025"
                placeholder="เช่น 1995" value={form.year}
                onChange={handleChange} className="mystic-input"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 col-span-2 sm:col-span-1">
              <div>
                <label className="mystic-label">ชั่วโมง</label>
                <input
                  name="hour" type="number" min="0" max="23"
                  placeholder="0-23" value={form.hour}
                  onChange={handleChange} className="mystic-input"
                />
              </div>
              <div>
                <label className="mystic-label">นาที</label>
                <input
                  name="minute" type="number" min="0" max="59"
                  placeholder="0-59" value={form.minute}
                  onChange={handleChange} className="mystic-input"
                />
              </div>
            </div>
            <div className="sm:col-span-2 flex items-end">
              <button type="submit" className="btn-gold w-full py-3 text-base flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                คำนวณดวงดาว
              </button>
            </div>
          </div>
          {error && (
            <p className="text-red-400 text-sm text-center font-sarabun mt-2">{error}</p>
          )}
          <p className="text-center text-xs text-midnight-400 font-sarabun mt-3">
            ✦ ระบบ Tropical (Western) แบบสากล · ข้อมูลพื้นฐาน ฟรี 100% ✦
          </p>
        </form>

        {/* Results */}
        {result && (
          <div className="space-y-8 animate-slide-up">
            {/* Signs Row */}
            <div>
              <h2 className="text-xl font-cinzel font-bold text-center text-white mb-6">
                ✦ ดวงดาวของคุณ ✦
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <SignCard title="☀️ ดวงอาทิตย์ (ราศี)" sign={result.sun} />
                <SignCard title="🌙 ดวงจันทร์ (อารมณ์)" sign={result.moon} />
                <SignCard title="⬆️ ลัคนาราศี (บุคลิก)" sign={result.rising} />
              </div>
            </div>

            {/* Luck Index */}
            <div className="glass-card p-8">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <h2 className="text-xl font-cinzel font-bold text-white">
                  📊 ดัชนีความโชคดีวันนี้
                </h2>
                <div
                  className="text-3xl font-cinzel font-black"
                  style={{
                    background: 'linear-gradient(135deg, #ffd84e, #f0a800)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {result.luck.overall}%
                </div>
              </div>
              <div className="space-y-5">
                <LuckBar label="💰 การเงิน"  score={result.luck.finance} color="#FCC419" />
                <LuckBar label="💼 การงาน"  score={result.luck.work}    color="#74C0FC" />
                <LuckBar label="❤️ ความรัก" score={result.luck.love}    color="#F783AC" />
              </div>
              <div className="mystic-divider mt-6" />
              <p className="text-sm text-center font-sarabun text-midnight-300">
                เลขชีวิต (Life Path) ของคุณ:{' '}
                <strong className="text-gold-400 text-lg font-cinzel">{result.luck.lifePathNumber}</strong>
              </p>
            </div>

            {/* Freemium Gate — Deep Analysis */}
            <div className="glass-card p-8 relative overflow-hidden">
              <h2 className="text-xl font-cinzel font-bold text-white mb-4 text-center">
                🌟 บทวิเคราะห์เชิงลึก
              </h2>

              {unlocked ? (
                <div className="space-y-4 font-sarabun text-midnight-200 leading-relaxed">
                  <p>
                    <strong className="text-gold-400">ดวงอาทิตย์ ({result.sun.nameTh}):</strong>{' '}
                    บ่งบอกถึงตัวตนหลักของคุณ คุณเป็นคนที่มี{result.sun.trait} ดาวปกครองราศีของคุณคือ <strong className="text-gold-300">{result.sun.ruling}</strong> ซึ่งส่งผลต่อบุคลิกและพลังงานหลักในชีวิต
                  </p>
                  <p>
                    <strong className="text-gold-400">ดวงจันทร์ ({result.moon.nameTh}):</strong>{' '}
                    เผยให้เห็นด้านอารมณ์และจิตใต้สำนึก คุณมีแนวโน้มที่จะ{result.moon.trait} ในช่วงที่อารมณ์ล้นเกิน
                  </p>
                  <p>
                    <strong className="text-gold-400">ลัคนาราศี ({result.rising.nameTh}):</strong>{' '}
                    คือภาพลักษณ์ที่คนอื่นมองเห็นเมื่อพบเจอคุณเป็นครั้งแรก คุณดูเป็นคนที่{result.rising.trait}
                  </p>
                  <div className="glass-card p-4 mt-4 border border-gold-400/20">
                    <p className="text-gold-300 font-semibold text-center">
                      🔮 คำแนะนำจากดวงดาว
                    </p>
                    <p className="text-center mt-2 text-midnight-200">
                      ช่วงนี้เป็นช่วงที่เหมาะสำหรับการ
                      {result.luck.finance > 65 ? 'ลงทุนและวางแผนทางการเงิน' : 'ออมเงินและลดความเสี่ยง'}
                      {result.luck.love > 65 ? ' รวมถึงการแสดงความรู้สึกต่อคนสำคัญ' : ''}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  {/* Preview (blurred) */}
                  <div className="locked-overlay">
                    <div className="space-y-3 font-sarabun text-midnight-200 opacity-60 select-none pointer-events-none">
                      <p>ดวงอาทิตย์ของคุณอยู่ใน{result.sun.nameTh} ซึ่งบ่งบอกว่า...</p>
                      <p>ดวงจันทร์ส่งผลต่ออารมณ์ของคุณโดยตรง ทำให้คุณมีแนวโน้ม...</p>
                      <p>ลัคนาราศีของคุณเผยให้เห็นว่าคนอื่นมองคุณว่าเป็น...</p>
                    </div>
                  </div>
                  {/* Unlock button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-4">
                    <Lock className="w-8 h-8 text-gold-400" />
                    <p className="text-white font-cinzel font-bold text-lg text-center">
                      ปลดล็อกบทวิเคราะห์เชิงลึก
                    </p>
                    <p className="text-midnight-300 font-sarabun text-sm text-center max-w-xs">
                      ดูคำอธิบายดวงดาวแบบละเอียด คำแนะนำชีวิต และมุมมองเชิงลึก
                    </p>
                    {unlockMsg ? (
                      <p className="text-gold-400 font-sarabun font-semibold text-sm">{unlockMsg}</p>
                    ) : (
                      <button onClick={handleUnlock} className="btn-gold flex items-center gap-2 px-6">
                        <Gem className="w-4 h-4" />
                        ปลดล็อก {UNLOCK_COST} Crystal
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
