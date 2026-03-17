'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Sparkles, Shield, Users, Moon, Sun, Zap, ChevronDown } from 'lucide-react';
import { useCrystal } from '@/utils/crystalContext';

const services = [
  {
    href:    '/astrology',
    icon:    '🔮',
    title:   'โหราศาสตร์ตะวันตก',
    titleEn: 'Western Astrology',
    desc:    'คำนวณดวงดาวจากวันเกิด เผยลัคนาราศี ดวงอาทิตย์ พระจันทร์ และดัชนีความโชคดีรายวัน',
    color:   'from-purple-600/30 to-indigo-800/30',
    border:  'border-purple-500/30',
    glow:    'rgba(139,92,246,0.3)',
    badge:   'HOT 🔥',
  },
  {
    href:    '/tarot',
    icon:    '🃏',
    title:   'ไพ่ยิปซี',
    titleEn: 'Tarot Reading',
    desc:    'สุ่มไพ่ Major Arcana 3 ใบ ด้วยพิธีตั้งจิตอธิษฐาน พร้อม AI วิเคราะห์ความหมายแบบเจาะลึก',
    color:   'from-rose-600/30 to-pink-800/30',
    border:  'border-rose-500/30',
    glow:    'rgba(244,63,94,0.3)',
    badge:   'ยอดนิยม ⭐',
  },
  {
    href:    '/numerology',
    icon:    '🔢',
    title:   'เลขศาสตร์',
    titleEn: 'Numerology',
    desc:    'วิเคราะห์เบอร์โทรศัพท์ เลขทะเบียนรถ และเลขชีวิต (Life Path) ครบทุกมิติ',
    color:   'from-cyan-600/30 to-blue-800/30',
    border:  'border-cyan-500/30',
    glow:    'rgba(6,182,212,0.3)',
    badge:   'แม่นยำ ✨',
  },
  {
    href:    '/thai-auspicious',
    icon:    '🕐',
    title:   'ฤกษ์มงคลไทย',
    titleEn: 'Thai Auspicious',
    desc:    'ตรวจฤกษ์ดีรายวัน ชั่วโมงมงคล ดาวประจำวัน และนักษัตรประจำปีเกิด',
    color:   'from-amber-600/30 to-orange-800/30',
    border:  'border-amber-500/30',
    glow:    'rgba(245,158,11,0.3)',
    badge:   'ไทยแท้ 🇹🇭',
  },
];

const testimonials = [
  {
    name:   'คุณมินตรา',
    sign:   'ราศีกันย์',
    text:   'ทำนายเรื่องงานแม่นมาก! ได้เลื่อนตำแหน่งภายใน 2 เดือนหลังจากที่ Crystal บอกจริงๆ ค่ะ',
    stars:  5,
    avatar: '👩‍💼',
  },
  {
    name:   'คุณณัฐ',
    sign:   'ราศีสิงห์',
    text:   'ไพ่ยิปซีแม่นเกินคาด บอกว่าจะพบรักใหม่ในที่ทำงาน แล้วก็เป็นแบบนั้นจริงๆ ครับ',
    stars:  5,
    avatar: '👨‍💻',
  },
  {
    name:   'คุณพิมพ์ใจ',
    sign:   'ราศีมีน',
    text:   'เลขศาสตร์บอกว่าเบอร์โทรเดิมไม่เป็นมงคล พอเปลี่ยนแล้วโชคดีขึ้นเลยค่ะ เชื่อแล้ว!',
    stars:  5,
    avatar: '👩‍🎨',
  },
];

const stats = [
  { num: '120,000+', label: 'ผู้ใช้บริการ',    icon: '👥' },
  { num: '98%',      label: 'ความพึงพอใจ',      icon: '⭐' },
  { num: '1.2M+',   label: 'คำทำนายที่ส่งมอบ', icon: '🔮' },
  { num: '5 ปี',     label: 'ประสบการณ์',        icon: '🏆' },
];

export default function HomePage() {
  const { addCrystals, balance } = useCrystal();
  const [welcomed, setWelcomed]  = useState(false);
  const [time, setTime]          = useState('');

  useEffect(() => {
    // Welcome bonus (once per day)
    const today = new Date().toDateString();
    const last  = localStorage.getItem('mystic_last_bonus');
    if (last !== today) {
      addCrystals(20, 'daily-bonus');
      localStorage.setItem('mystic_last_bonus', today);
      setWelcomed(true);
      setTimeout(() => setWelcomed(false), 4000);
    }

    // Live clock
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const dayTh = new Date().toLocaleDateString('th-TH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="relative overflow-x-hidden">

      {/* ─── Welcome Bonus Toast ─────────────────────────────────────── */}
      <div
        className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          welcomed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="glass-card px-6 py-3 flex items-center gap-3 border border-gold-400/40">
          <span className="text-2xl">💎</span>
          <span className="text-gold-300 font-sarabun font-semibold text-sm">
            ยินดีต้อนรับ! +20 Crystal โบนัสประจำวัน
          </span>
        </div>
      </div>

      {/* ════════════════════════════════════════
          HERO SECTION
      ═════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
        {/* Glow blob */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,53,224,0.2) 0%, transparent 70%)' }}
        />

        {/* Live date & clock */}
        <div className="glass-card inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm text-midnight-200 font-sarabun">
          <Moon className="w-4 h-4 text-gold-400" />
          <span>{dayTh}</span>
          <span className="text-gold-400 font-mono">{time}</span>
        </div>

        {/* Main Headline */}
        <h1
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight animate-fade-in"
          style={{ fontFamily: 'Cinzel Decorative, serif' }}
        >
          <span className="text-gradient-gold">Mystic</span>
          <br />
          <span className="text-white">Crystal</span>
          <br />
          <span className="text-gradient-mystic text-3xl sm:text-5xl lg:text-6xl">Fortune</span>
        </h1>

        <p className="text-lg sm:text-xl text-midnight-200 mb-3 font-sarabun max-w-xl leading-relaxed animate-slide-up">
          ดูดวงระดับพรีเมียม ด้วยโหราศาสตร์ตะวันตก ไพ่ยิปซี เลขศาสตร์
          <br />
          และฤกษ์มงคลไทย ในที่เดียว
        </p>

        <p className="text-sm text-gold-400/80 mb-10 font-sarabun animate-slide-up">
          ✦ ดูดวงฟรีทุกวัน · ปลดล็อกคำทำนายลึกด้วย Crystal ✦
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center animate-slide-up">
          <Link href="/astrology">
            <button className="btn-gold text-base px-8 py-4 flex items-center gap-2 text-lg shadow-gold-glow-lg animate-pulse-gold">
              <Sparkles className="w-5 h-5" />
              เช็กดวงรายวัน
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <Link href="/tarot">
            <button className="btn-mystic text-base px-8 py-4 flex items-center gap-2">
              <span>🃏</span>
              ดึงไพ่ยิปซี
            </button>
          </Link>
        </div>

        {/* Crystal Balance */}
        <div className="mt-8 flex items-center gap-2 text-sm text-midnight-300 font-sarabun">
          <span>💎 Crystal ของคุณ:</span>
          <span className="text-gold-300 font-bold text-base">{balance}</span>
          <span>เหรียญ</span>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-gentle">
          <ChevronDown className="w-6 h-6 text-gold-400/60" />
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS
      ═════════════════════════════════════════ */}
      <section className="relative py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(s => (
            <div key={s.label} className="glass-card p-5 text-center glass-card-hover">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-2xl font-cinzel font-bold text-gradient-gold">{s.num}</div>
              <div className="text-sm text-midnight-300 font-sarabun mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          4 SERVICES
      ═════════════════════════════════════════ */}
      <section className="relative py-20 px-4" id="services">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-gold-400 font-cinzel text-sm tracking-widest mb-3 uppercase">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-white mb-4">
              บริการดูดวง <span className="text-gradient-gold">4 ศาสตร์</span>
            </h2>
            <p className="text-midnight-300 font-sarabun">เลือกศาสตร์ที่คุณต้องการ หรือสำรวจทุกอย่างในที่เดียว</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map(svc => (
              <Link key={svc.href} href={svc.href} className="group block">
                <div
                  className={`glass-card glass-card-hover h-full p-6 bg-gradient-to-b ${svc.color} ${svc.border} border flex flex-col`}
                  style={{ '--glow': svc.glow }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{svc.icon}</span>
                    <span className="text-xs bg-gold-400/20 text-gold-300 border border-gold-400/30 rounded-full px-2 py-0.5 font-sarabun">
                      {svc.badge}
                    </span>
                  </div>
                  <h3 className="font-cinzel font-bold text-lg text-white mb-1">{svc.title}</h3>
                  <p className="text-xs text-midnight-400 font-cinzel mb-3">{svc.titleEn}</p>
                  <p className="text-sm text-midnight-200 font-sarabun leading-relaxed flex-1">{svc.desc}</p>
                  <div className="mt-5 flex items-center text-gold-400 text-sm font-sarabun group-hover:gap-3 gap-2 transition-all">
                    <span>เริ่มต้น</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HOW IT WORKS
      ═════════════════════════════════════════ */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-cinzel font-bold text-white mb-2">
            ใช้งานง่าย <span className="text-gradient-gold">3 ขั้นตอน</span>
          </h2>
          <p className="text-midnight-300 font-sarabun mb-12">เริ่มต้นดูดวงได้ทันที ไม่ต้องสมัครสมาชิก</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: '✏️', title: 'กรอกข้อมูล',      desc: 'กรอกวันเดือนปีเกิดและเวลาเกิด เพื่อให้ดาวคำนวณดวงของคุณ' },
              { step: '02', icon: '🔮', title: 'Crystal วิเคราะห์', desc: 'ระบบ AI วิเคราะห์ดวงจากดาวเคราะห์ ตัวเลข และพลังงานจักรวาล' },
              { step: '03', icon: '✨', title: 'รับคำทำนาย',        desc: 'รับคำทำนายและคำแนะนำเพื่อพัฒนาชีวิตใน 4 มิติ' },
            ].map(item => (
              <div key={item.step} className="glass-card p-8 relative glass-card-hover">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 flex items-center justify-center text-midnight-950 text-xs font-bold font-cinzel shadow-gold-glow">
                  {item.step}
                </div>
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-cinzel font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-midnight-300 font-sarabun text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS
      ═════════════════════════════════════════ */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-cinzel font-bold text-white mb-3">
              เสียงจาก <span className="text-gradient-gold">ผู้ใช้จริง</span>
            </h2>
            <p className="text-midnight-300 font-sarabun">ประสบการณ์จริงจากผู้ที่ไว้วางใจ Mystic Crystal</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card p-6 glass-card-hover">
                <div className="flex mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="text-midnight-200 font-sarabun text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{t.avatar}</span>
                  <div>
                    <p className="text-white font-semibold text-sm font-sarabun">{t.name}</p>
                    <p className="text-gold-400 text-xs font-cinzel">{t.sign}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA BANNER
      ═════════════════════════════════════════ */}
      <section className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto text-center glass-card p-12 border border-gold-400/20"
          style={{ background: 'linear-gradient(135deg, rgba(139,53,224,0.15), rgba(240,168,0,0.1))' }}
        >
          <div className="text-5xl mb-4">💎</div>
          <h2 className="text-3xl font-cinzel font-bold text-white mb-4">
            เริ่มต้นฟรีวันนี้
          </h2>
          <p className="text-midnight-200 font-sarabun mb-8 leading-relaxed">
            รับ <strong className="text-gold-400">100 Crystal</strong> ทันทีเมื่อเข้าใช้งานครั้งแรก
            <br />
            และ <strong className="text-gold-400">20 Crystal</strong> ฟรีทุกวัน
          </p>
          <Link href="/astrology">
            <button className="btn-gold text-lg px-10 py-4 flex items-center gap-3 mx-auto">
              <Sparkles className="w-5 h-5" />
              เริ่มดูดวงฟรี
            </button>
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
      ═════════════════════════════════════════ */}
      <footer className="relative py-12 px-4 border-t border-midnight-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-display text-xl text-gradient-gold font-bold" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
                ✦ Mystic Crystal Fortune
              </p>
              <p className="text-midnight-400 text-sm font-sarabun mt-1">
                ดูดวงระดับพรีเมียม · ทุกคำทำนายเพื่อการพัฒนาชีวิต
              </p>
            </div>
            <div className="flex gap-6 text-sm text-midnight-400 font-sarabun">
              <Link href="/astrology" className="hover:text-gold-400 transition-colors">ดูดวง</Link>
              <Link href="/tarot" className="hover:text-gold-400 transition-colors">ไพ่ยิปซี</Link>
              <Link href="/numerology" className="hover:text-gold-400 transition-colors">เลขศาสตร์</Link>
              <Link href="/shop" className="hover:text-gold-400 transition-colors">ร้านค้า</Link>
            </div>
          </div>
          <div className="mystic-divider mt-8" />
          <p className="text-center text-midnight-500 text-xs font-sarabun">
            © 2026 Mystic Crystal Fortune · เว็บไซต์นี้จัดทำเพื่อความบันเทิงและแรงบันดาลใจ ไม่ใช่การรับประกันผล
          </p>
        </div>
      </footer>
    </div>
  );
}
