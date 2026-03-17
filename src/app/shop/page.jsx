'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Gem, Check, Star, ShoppingCart, Lock } from 'lucide-react';
import { useCrystal } from '@/utils/crystalContext';

const wallpapers = [
  { id: 'wp1', title: 'มังกรทองแห่งโชคลาภ',  emoji: '🐉', desc: 'เสริมดวงการเงิน',   price: 'ฟรี',  crystalCost: 0,  category: 'ดวงการเงิน',  color: 'from-yellow-600/30 to-amber-900/30'  },
  { id: 'wp2', title: 'พระจันทร์เต็มดวง',      emoji: '🌕', desc: 'เสริมพลังจิตใจ',   price: 'ฟรี',  crystalCost: 0,  category: 'พลังจิตใจ',   color: 'from-blue-600/30 to-indigo-900/30'  },
  { id: 'wp3', title: 'คริสตัลอเมทิสต์',       emoji: '💜', desc: 'เสริมก้าวหน้า',    price: '20 💎', crystalCost: 20, category: 'ก้าวหน้า',    color: 'from-purple-600/30 to-violet-900/30' },
  { id: 'wp4', title: 'ดอกบัวทอง',             emoji: '🪷', desc: 'เสริมความรัก',    price: '20 💎', crystalCost: 20, category: 'ความรัก',     color: 'from-pink-600/30 to-rose-900/30'    },
  { id: 'wp5', title: 'ดาวเหนือนำทาง',         emoji: '⭐', desc: 'เสริมโชค',        price: '35 💎', crystalCost: 35, category: 'โชคลาภ',      color: 'from-cyan-600/30 to-blue-900/30'    },
  { id: 'wp6', title: 'เต่าทองทอง',            emoji: '🐢', desc: 'เสริมความมั่งคั่ง',price:'35 💎', crystalCost: 35, category: 'ความมั่งคั่ง',color: 'from-emerald-600/30 to-green-900/30'},
];

const crystals = [
  { id: 'c1', name: 'โรสควอตซ์', emoji: '💗', element: 'ความรัก',   desc: 'ดึงดูดความรักและความสัมพันธ์ที่ดี',  price: '50 💎',  crystalCost: 50  },
  { id: 'c2', name: 'อเมทิสต์',  emoji: '💜', element: 'สงบใจ',    desc: 'เสริมสมาธิ ลดความเครียด นอนหลับดี',  price: '50 💎',  crystalCost: 50  },
  { id: 'c3', name: 'ซิทรีน',    emoji: '💛', element: 'ความมั่งคั่ง', desc: 'เรียกทรัพย์ เพิ่มพลังงานบวก',        price: '75 💎',  crystalCost: 75  },
  { id: 'c4', name: 'ลาพิส',     emoji: '💙', element: 'ปัญญา',     desc: 'เสริมความฉลาด การตัดสินใจ',          price: '75 💎',  crystalCost: 75  },
  { id: 'c5', name: 'โอบซิเดียน',emoji: '🖤', element: 'คุ้มครอง',  desc: 'ป้องกันพลังงานลบ ดูดซับความเป็นลบ',  price: '100 💎', crystalCost: 100 },
  { id: 'c6', name: 'ไพลิน',     emoji: '💎', element: 'ความสำเร็จ', desc: 'อัญมณีแห่งความสำเร็จและราชาภัย',      price: '150 💎', crystalCost: 150 },
];

const plans = [
  {
    name:    'ฟรี',
    nameTh:  'มิถุน',
    price:   '0',
    period:  'ตลอดไป',
    color:   'border-midnight-600',
    features: [
      'ดูดวงพื้นฐาน',
      'ดึงไพ่ยิปซี (ความหมายสั้น)',
      'ฤกษ์มงคลรายวัน',
      '100 Crystal แรกเข้า',
      '20 Crystal โบนัสรายวัน',
    ],
    noFeatures: ['บทวิเคราะห์เชิงลึก', 'AI Chatbot', 'รูปภาพแชร์'],
    cta:     'ใช้งานฟรี',
    href:    '/astrology',
  },
  {
    name:    'Crystal Basic',
    nameTh:  'คริสตัล',
    price:   '149',
    period:  '/เดือน',
    color:   'border-gold-500/50',
    popular: true,
    features: [
      'ทุกอย่างในแพ็กฟรี',
      'Crystal 500 ต่อเดือน',
      'บทวิเคราะห์เชิงลึก ทุกหน้า',
      'Crystal AI แบบไม่จำกัด',
      'ดาวน์โหลดวอลเปเปอร์ทุกชิ้น',
      'รูปภาพแชร์ผลทำนายสวยๆ',
    ],
    noFeatures: [],
    cta:     'เริ่ม 7 วันฟรี',
    href:    '#',
  },
  {
    name:    'Crystal Premium',
    nameTh:  'พรีเมียม',
    price:   '349',
    period:  '/เดือน',
    color:   'border-purple-500/50',
    features: [
      'ทุกอย่างใน Crystal Basic',
      'Crystal 2,000 ต่อเดือน',
      'Reading ส่วนตัวกับผู้เชี่ยวชาญ',
      'รายงานดวงรายปีเต็มรูปแบบ',
      'Priority Support 24/7',
      'คำทำนายวัตถุมงคลพรีเมียม',
    ],
    noFeatures: [],
    cta:     'เริ่มต้นพรีเมียม',
    href:    '#',
  },
];

export default function ShopPage() {
  const { balance, spendCrystals, canSpend } = useCrystal();
  const [purchased, setPurchased] = useState({});
  const [toast, setToast]         = useState('');
  const [activeSection, setActiveSection] = useState('wallpapers');

  function buyItem(id, cost, name) {
    if (purchased[id]) return;
    if (cost === 0) {
      setPurchased(p => ({ ...p, [id]: true }));
      showToast(`ดาวน์โหลด "${name}" สำเร็จ! ✅`);
      return;
    }
    if (!canSpend(cost)) {
      showToast(`Crystal ไม่พอ! ต้องการ ${cost} 💎 คุณมี ${balance} 💎`);
      return;
    }
    spendCrystals(cost);
    setPurchased(p => ({ ...p, [id]: true }));
    showToast(`ซื้อ "${name}" สำเร็จ! ✅`);
  }

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative">

      {/* Toast */}
      <div className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        toast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="glass-card px-6 py-3 text-gold-300 font-sarabun text-sm border border-gold-400/30">
          {toast}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-6xl block mb-4">🛍️</span>
          <h1 className="text-4xl font-cinzel font-bold text-white mb-3">
            ร้านค้า <span className="text-gradient-gold">Crystal</span>
          </h1>
          <p className="text-midnight-300 font-sarabun">วอลเปเปอร์เสริมดวง · หินมงคล · Crystal Subscription</p>
          <div className="mt-4 crystal-badge inline-flex text-base px-4 py-2">
            <Gem className="w-4 h-4" />
            Crystal คงเหลือ: {balance}
          </div>
        </div>

        <div className="mystic-divider mb-8" />

        {/* Section Tabs */}
        <div className="flex gap-3 justify-center mb-10 flex-wrap">
          {['wallpapers', 'crystals', 'plans'].map(s => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className={`px-5 py-2 rounded-full font-sarabun font-semibold text-sm transition-all ${
                activeSection === s ? 'btn-gold' : 'glass-button text-midnight-200'
              }`}
            >
              {{ wallpapers: '🖼️ วอลเปเปอร์', crystals: '💎 หินมงคล', plans: '👑 แพ็กเกจ' }[s]}
            </button>
          ))}
        </div>

        {/* ── Wallpapers ── */}
        {activeSection === 'wallpapers' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wallpapers.map(wp => (
              <div key={wp.id} className={`glass-card p-6 glass-card-hover bg-gradient-to-b ${wp.color}`}>
                <div className="text-5xl mb-4 text-center">{wp.emoji}</div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-cinzel font-bold text-white text-sm">{wp.title}</h3>
                  <span className="text-xs bg-gold-400/10 text-gold-400 border border-gold-400/20 rounded-full px-2 py-0.5 font-sarabun ml-2">
                    {wp.category}
                  </span>
                </div>
                <p className="text-midnight-300 text-xs font-sarabun mb-5">{wp.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold-400 font-cinzel font-bold">{wp.price}</span>
                  <button
                    onClick={() => buyItem(wp.id, wp.crystalCost, wp.title)}
                    disabled={purchased[wp.id]}
                    className={`text-sm font-sarabun px-4 py-2 rounded-full transition-all ${
                      purchased[wp.id]
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30 cursor-not-allowed'
                        : wp.crystalCost === 0 ? 'btn-gold' : 'btn-mystic'
                    }`}
                  >
                    {purchased[wp.id] ? '✅ ดาวน์โหลดแล้ว' : wp.crystalCost === 0 ? 'ฟรี' : `ซื้อ ${wp.price}`}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Crystals ── */}
        {activeSection === 'crystals' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {crystals.map(c => (
              <div key={c.id} className="glass-card p-6 glass-card-hover">
                <div className="text-5xl mb-4 text-center animate-float">{c.emoji}</div>
                <div className="text-center mb-4">
                  <h3 className="font-cinzel font-bold text-white text-lg mb-1">{c.name}</h3>
                  <span className="text-xs text-gold-400 border border-gold-400/30 rounded-full px-2 py-0.5 font-sarabun">
                    {c.element}
                  </span>
                </div>
                <p className="text-midnight-300 text-sm font-sarabun text-center mb-5 leading-relaxed">{c.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold-400 font-cinzel font-bold">{c.price}</span>
                  <button
                    onClick={() => buyItem(c.id, c.crystalCost, c.name)}
                    disabled={purchased[c.id]}
                    className={`text-sm font-sarabun px-4 py-2 rounded-full transition-all ${
                      purchased[c.id]
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30 cursor-not-allowed'
                        : 'btn-gold'
                    }`}
                  >
                    {purchased[c.id] ? '✅ ซื้อแล้ว' : 'ซื้อเลย'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Plans / Pricing ── */}
        {activeSection === 'plans' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`glass-card p-8 border-2 ${plan.color} relative flex flex-col ${
                  plan.popular ? 'ring-2 ring-gold-400/50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-midnight-950 text-xs font-cinzel font-bold px-4 py-1 rounded-full shadow-gold-glow">
                    ยอดนิยม ⭐
                  </div>
                )}
                <div className="text-center mb-6">
                  <p className="text-gold-400 font-cinzel text-sm tracking-widest uppercase mb-2">{plan.nameTh}</p>
                  <h3 className="font-cinzel font-bold text-white text-2xl mb-1">{plan.name}</h3>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-cinzel font-black text-gradient-gold"
                      style={{
                        background: 'linear-gradient(135deg, #ffd84e, #f0a800)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                      }}
                    >
                      ฿{plan.price}
                    </span>
                    <span className="text-midnight-400 font-sarabun text-sm pb-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-midnight-200 font-sarabun">{f}</span>
                    </li>
                  ))}
                  {plan.noFeatures?.map(f => (
                    <li key={f} className="flex items-center gap-2 opacity-40">
                      <Lock className="w-4 h-4 text-midnight-500 flex-shrink-0" />
                      <span className="text-sm text-midnight-400 font-sarabun line-through">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.href}>
                  <button className={`w-full py-3 rounded-full font-cinzel font-bold text-sm transition-all ${
                    plan.popular ? 'btn-gold' : 'btn-mystic'
                  }`}>
                    {plan.cta}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Buy Crystal CTA */}
        <div className="mt-16 glass-card p-8 text-center border border-gold-400/20"
          style={{ background: 'linear-gradient(135deg, rgba(139,53,224,0.1), rgba(240,168,0,0.08))' }}
        >
          <div className="text-4xl mb-4">💎</div>
          <h2 className="text-2xl font-cinzel font-bold text-white mb-3">ซื้อ Crystal เพิ่ม</h2>
          <p className="text-midnight-300 font-sarabun mb-8">ใช้ Crystal เพื่อปลดล็อกคำทำนายเชิงลึก ถามแม่หมอ Crystal AI และซื้อสินค้า</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { amount: 100, price: '29',  bonus: '' },
              { amount: 300, price: '79',  bonus: '+50 โบนัส!' },
              { amount: 1000, price: '199', bonus: '+200 โบนัส! 🔥' },
            ].map(pkg => (
              <div key={pkg.amount} className="glass-card p-5 text-center glass-card-hover min-w-[140px]">
                <div className="text-2xl mb-1 font-cinzel font-bold text-gold-400">💎 {pkg.amount}</div>
                {pkg.bonus && (
                  <div className="text-xs text-green-400 font-sarabun mb-2 border border-green-400/30 rounded-full px-2 py-0.5">
                    {pkg.bonus}
                  </div>
                )}
                <div className="text-midnight-300 text-sm font-sarabun mb-3">฿{pkg.price}</div>
                <button className="btn-gold w-full text-sm py-2">ซื้อเลย</button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
