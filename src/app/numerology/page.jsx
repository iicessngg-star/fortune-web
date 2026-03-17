'use client';
import { useState } from 'react';
import { analyzePhoneNumber } from '@/data/numerologyData';
import numerologyData from '@/data/numerologyData';
import { getLifePathNumber } from '@/utils/astrologyEngine';

const tabs = [
  { id: 'phone',    label: '📱 เบอร์โทรศัพท์', placeholder: 'เช่น 0812345678' },
  { id: 'plate',    label: '🚗 ทะเบียนรถ',     placeholder: 'เช่น กข 1234' },
  { id: 'lifepath', label: '🔢 เลขชีวิต',      placeholder: 'วันเกิด เช่น 15/04/1995' },
];

function ScoreMeter({ score }) {
  const color = score >= 85 ? '#FCC419' : score >= 70 ? '#51CF66' : score >= 55 ? '#74C0FC' : '#FF6B6B';
  const label = score >= 85 ? 'มงคลมาก ⭐' : score >= 70 ? 'ดี ✨' : score >= 55 ? 'กลางๆ 💫' : 'ควรระวัง 🌙';
  return (
    <div className="text-center">
      <div className="relative inline-flex items-center justify-center w-32 h-32 mb-3">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
          <circle
            cx="50" cy="50" r="40"
            stroke={color} strokeWidth="10" strokeLinecap="round"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 * (1 - score / 100)}
            style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-cinzel font-black" style={{ color }}>{score}</span>
          <span className="text-xs text-midnight-300 font-sarabun">คะแนน</span>
        </div>
      </div>
      <p className="text-sm font-sarabun" style={{ color }}>{label}</p>
    </div>
  );
}

export default function NumerologyPage() {
  const [activeTab, setActiveTab] = useState('phone');
  const [input, setInput]   = useState('');
  const [result, setResult] = useState(null);
  const [error, setError]   = useState('');

  function handleAnalyze() {
    setError(''); setResult(null);
    const val = input.trim();
    if (!val) { setError('กรุณากรอกข้อมูล'); return; }

    if (activeTab === 'phone') {
      const digits = val.replace(/\D/g, '');
      if (digits.length < 9) { setError('กรุณากรอกเบอร์โทรให้ครบ (อย่างน้อย 9 หลัก)'); return; }
      setResult({ type: 'phone', data: analyzePhoneNumber(val) });

    } else if (activeTab === 'plate') {
      const digits = val.replace(/\D/g, '');
      if (!digits) { setError('กรุณากรอกตัวเลขในทะเบียนรถ'); return; }
      const res = analyzePhoneNumber(digits.padEnd(9, '1'));
      setResult({ type: 'plate', data: { ...res, rawInput: val } });

    } else if (activeTab === 'lifepath') {
      const parts = val.split(/[\/\-\.]/).map(p => parseInt(p));
      if (parts.length < 3 || parts.some(isNaN)) {
        setError('กรุณากรอกวันเกิดในรูปแบบ DD/MM/YYYY'); return;
      }
      const num  = getLifePathNumber(val);
      const data = numerologyData[num] || numerologyData[9];
      setResult({ type: 'lifepath', num, data });
    }
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-6xl block mb-4">🔢</span>
          <h1 className="text-4xl font-cinzel font-bold text-white mb-3">
            เลข<span className="text-gradient-gold">ศาสตร์</span>
          </h1>
          <p className="text-midnight-300 font-sarabun">วิเคราะห์เบอร์โทร · ทะเบียนรถ · เลขชีวิต</p>
        </div>

        <div className="mystic-divider mb-8" />

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap justify-center">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => { setActiveTab(t.id); setResult(null); setInput(''); setError(''); }}
              className={`px-4 py-2 rounded-full text-sm font-sarabun font-semibold transition-all duration-300 ${
                activeTab === t.id
                  ? 'btn-gold text-midnight-950'
                  : 'glass-button text-midnight-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Input Card */}
        <div className="glass-card p-8 mb-8">
          <label className="mystic-label text-base mb-3">
            {tabs.find(t => t.id === activeTab)?.label}
          </label>
          <div className="flex gap-3">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={tabs.find(t => t.id === activeTab)?.placeholder}
              className="mystic-input flex-1 text-lg"
              onKeyDown={e => e.key === 'Enter' && handleAnalyze()}
            />
            <button onClick={handleAnalyze} className="btn-gold px-6">
              วิเคราะห์
            </button>
          </div>
          {error && <p className="text-red-400 text-sm mt-3 font-sarabun">{error}</p>}
          <p className="text-midnight-500 text-xs mt-3 font-sarabun text-center">
            ✦ วิเคราะห์ดวงจากตัวเลขตามหลักพีทาโกรัส (Pythagorean Numerology) ✦
          </p>
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-6 animate-slide-up">

            {(result.type === 'phone' || result.type === 'plate') && result.data && (
              <>
                {/* Score + Headline */}
                <div className="glass-card p-8 flex flex-col sm:flex-row items-center gap-8">
                  <ScoreMeter score={result.data.luckyScore} />
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-xl font-cinzel font-bold text-white mb-1">
                      {result.data.data.name}
                    </h2>
                    <p className="text-gold-400 font-sarabun text-sm mb-3">{result.data.data.energy}</p>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {result.data.data.keywords.map(k => (
                        <span key={k} className="text-xs px-3 py-1 rounded-full bg-mystic-800/50 text-midnight-200 font-sarabun border border-mystic-600/30">
                          {k}
                        </span>
                      ))}
                    </div>
                    <p className="text-midnight-200 font-sarabun text-sm mt-4 leading-relaxed">
                      {result.data.data.positive}
                    </p>
                  </div>
                </div>

                {/* Digit breakdown */}
                {result.data.digitBreakdown && (
                  <div className="glass-card p-6">
                    <h3 className="font-cinzel font-bold text-white mb-4 text-center">
                      🔍 ความหมายแต่ละหลัก
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {result.data.digitBreakdown.map((d, i) => d && (
                        <div key={i} className="text-center glass-card px-3 py-2 min-w-[60px]">
                          <p className="text-2xl font-cinzel font-bold text-gold-400">{input.replace(/\D/g,'')[i]}</p>
                          <p className="text-xs text-midnight-300 font-sarabun mt-1">{d.nameTh.split(' — ')[1]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Special sequences */}
                {result.data.specialSeqs?.length > 0 && (
                  <div className="glass-card p-6 border border-gold-400/30"
                    style={{ background: 'linear-gradient(135deg, rgba(240,168,0,0.08), rgba(139,53,224,0.08))' }}
                  >
                    <h3 className="font-cinzel font-bold text-gold-400 mb-3 text-center">
                      ✨ ลำดับพิเศษที่พบ
                    </h3>
                    {result.data.specialSeqs.map((s, i) => (
                      <p key={i} className="text-center font-sarabun text-midnight-200 text-sm">{s}</p>
                    ))}
                  </div>
                )}

                {/* Challenge */}
                <div className="glass-card p-6 border border-gold-400/20">
                  <h3 className="font-cinzel font-bold text-white mb-2">⚠️ ข้อควรระวัง</h3>
                  <p className="text-midnight-200 font-sarabun text-sm leading-relaxed">
                    {result.data.data.challenge}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <div>
                      <p className="text-xs text-midnight-400 font-sarabun">หินมงคลที่เหมาะ</p>
                      <p className="text-gold-400 font-sarabun font-semibold">{result.data.data.lucky.stone}</p>
                    </div>
                    <div>
                      <p className="text-xs text-midnight-400 font-sarabun">วันมงคล</p>
                      <p className="text-gold-400 font-sarabun font-semibold">วัน{result.data.data.lucky.day}</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {result.type === 'lifepath' && (
              <div className="glass-card p-8">
                <div className="text-center mb-6">
                  <div
                    className="text-7xl font-cinzel font-black text-gradient-gold mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #ffd84e, #f0a800)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {result.num}
                  </div>
                  <h2 className="text-xl font-cinzel font-bold text-white">{result.data.name}</h2>
                  <p className="text-gold-400 font-sarabun text-sm mt-1">{result.data.energy}</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {result.data.keywords.map(k => (
                    <span key={k} className="text-xs px-3 py-1 rounded-full bg-mystic-800/50 text-midnight-200 font-sarabun border border-mystic-600/30">
                      {k}
                    </span>
                  ))}
                </div>
                <p className="text-midnight-200 font-sarabun leading-relaxed mb-4">{result.data.positive}</p>
                <div className="mystic-divider" />
                <p className="text-midnight-300 font-sarabun text-sm leading-relaxed mt-4">{result.data.challenge}</p>
                <div className="mt-6 flex gap-6 justify-center flex-wrap">
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full mx-auto mb-1" style={{ background: result.data.lucky.color }} />
                    <p className="text-xs text-midnight-400 font-sarabun">สีมงคล</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl mb-1">💎</p>
                    <p className="text-xs text-gold-400 font-sarabun font-semibold">{result.data.lucky.stone}</p>
                    <p className="text-xs text-midnight-400 font-sarabun">หินมงคล</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl mb-1">📅</p>
                    <p className="text-xs text-gold-400 font-sarabun font-semibold">วัน{result.data.lucky.day}</p>
                    <p className="text-xs text-midnight-400 font-sarabun">วันมงคล</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
