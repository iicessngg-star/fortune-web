'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { Gem, Menu, X, Star, Volume2, VolumeX } from 'lucide-react';
import { useCrystal } from '@/utils/crystalContext';
import { toggleMute, isMuted } from '@/utils/soundEffects';

const navLinks = [
  { href: '/',                label: 'หน้าหลัก',  icon: '🏠' },
  { href: '/astrology',       label: 'ดูดวง',     icon: '🔮' },
  { href: '/tarot',           label: 'ไพ่ยิปซี', icon: '🃏' },
  { href: '/numerology',      label: 'เลขศาสตร์',icon: '🔢' },
  { href: '/thai-auspicious', label: 'ฤกษ์มงคล', icon: '🕐' },
  { href: '/shop',            label: 'ร้านค้า',   icon: '🛍️' },
];

export default function Navbar() {
  const pathname    = usePathname();
  const { balance } = useCrystal();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMuted]     = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleMute = useCallback(() => {
    const nowMuted = toggleMute();
    setMuted(nowMuted);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Star className="w-6 h-6 text-gold-400 fill-gold-400 animate-pulse-gold" />
            <div className="absolute inset-0 blur-sm bg-gold-400 opacity-40 rounded-full" />
          </div>
          <span
            className="font-display text-lg font-bold text-gradient-gold tracking-widest hidden sm:block"
            style={{ fontFamily: 'Cinzel Decorative, serif' }}
          >
            Mystic Crystal
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 font-sarabun ${
                  active
                    ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40'
                    : 'text-midnight-200 hover:text-gold-300 hover:bg-white/5'
                }`}
              >
                <span>{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: Mute + Crystal Balance + Mobile Hamburger */}
        <div className="flex items-center gap-2">
          {/* 🔇 Mute button */}
          <button
            onClick={handleMute}
            title={muted ? 'เปิดเสียง' : 'ปิดเสียง'}
            className="p-1.5 rounded-full glass-button text-midnight-300 hover:text-gold-300 transition-colors"
            aria-label={muted ? 'เปิดเสียง' : 'ปิดเสียง'}
          >
            {muted
              ? <VolumeX className="w-4 h-4 text-midnight-400" />
              : <Volume2 className="w-4 h-4" />
            }
          </button>

          {/* Crystal Balance */}
          <div className="crystal-badge">
            <Gem className="w-3.5 h-3.5" />
            <span>{balance.toLocaleString()}</span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg glass-button text-gold-300"
            onClick={() => setOpen(o => !o)}
            aria-label="เมนู"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-nav px-4 py-4 flex flex-col gap-2 mx-4 mt-2 rounded-2xl">
          {navLinks.map(link => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all font-sarabun ${
                  active
                    ? 'bg-gold-500/20 text-gold-300 border border-gold-500/30'
                    : 'text-midnight-200 hover:text-gold-300 hover:bg-white/5'
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
