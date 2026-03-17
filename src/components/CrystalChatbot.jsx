'use client';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Gem, Sparkles } from 'lucide-react';
import { useCrystal } from '@/utils/crystalContext';

const COST_PER_QUESTION = 10;

// Mock AI fortune responses
const QUESTION_PATTERNS = [
  {
    keywords: ['รัก', 'ความรัก', 'แฟน', 'คบ', 'ชอบ', 'หัวใจ'],
    responses: [
      'ดาวศุกร์กำลังส่องสู่ราศีของคุณ 💕 ช่วงนี้เป็นช่วงเวลาดีสำหรับความรัก จักรวาลเตรียมพบปะที่มีความหมายกำลังมา ให้เปิดใจและส่งพลังงานบวกออกไป',
      'ไพ่แห่งหัวใจบอกว่าคนที่คุณคิดถึงก็กำลังคิดถึงคุณเช่นกัน 🌹 ถึงเวลาแล้วที่จะก้าวแรก อย่าปล่อยให้ความกลัวมาขวางเส้นทางของความรัก',
      'ดาวพฤหัสอยู่ในตำแหน่งที่เป็นมงคลสำหรับความสัมพันธ์ใหม่ ✨ แวดล้อมตัวเองด้วยพลังงานบวก ความรักที่แท้จริงกำลังเดินทางมาหาคุณ',
    ],
  },
  {
    keywords: ['เงิน', 'การเงิน', 'ลงทุน', 'ธุรกิจ', 'รวย', 'โชค', 'หวย'],
    responses: [
      'ดาวพฤหัสซึ่งเป็นดาวแห่งความมั่งคั่งกำลังเดินทางผ่านบ้านที่ 2 ของคุณ 💰 โอกาสทางการเงินกำลังมาถึง แต่จงใช้สติในการตัดสินใจ อย่าใจร้อนเกินไป',
      'คริสตัลชี้ว่าช่วงนี้เหมาะสำหรับการวางแผนระยะยาวมากกว่าการเก็งกำไรระยะสั้น 🔮 ความอดทนคือกุญแจสู่ความสำเร็จทางการเงินของคุณ',
      'พลังงานของดาวเสาร์สนับสนุนการทำงานหนักและการออม ⭐ ผลตอบแทนจะมาถึงในเวลาที่เหมาะสม จงอดทนและวางรากฐานที่มั่นคง',
    ],
  },
  {
    keywords: ['งาน', 'อาชีพ', 'เจ้านาย', 'สมัครงาน', 'เลื่อนขั้น', 'ธุรกิจ'],
    responses: [
      'ดาวอังคารซึ่งเป็นดาวแห่งความมุ่งมั่นอยู่ในตำแหน่งที่แข็งแกร่ง 🚀 ความพยายามของคุณกำลังจะได้รับการมองเห็น ถึงเวลาแสดงศักยภาพอย่างเต็มที่แล้ว',
      'คริสตัลมองเห็นโอกาสใหม่ทางอาชีพที่กำลังจะเข้ามาในชีวิตคุณ ✨ เตรียมตัวให้พร้อมและอย่าปฏิเสธคำเชิญที่ดูแปลกใหม่',
      'จักรวาลบอกว่าทักษะที่คุณมีนั้นมีค่ามากกว่าที่คุณคิด 💫 ถึงเวลาแล้วที่จะเรียกร้องสิ่งที่คุณสมควรได้รับ',
    ],
  },
  {
    keywords: ['สุขภาพ', 'เจ็บ', 'ป่วย', 'ร่างกาย', 'กิน', 'นอน'],
    responses: [
      'ดาวจันทร์ควบคุมสุขภาพจิตและอารมณ์ 🌙 ช่วงนี้ให้ความสำคัญกับการพักผ่อนและการดูแลตัวเองให้มากขึ้น จักรวาลบอกให้ฟังสัญญาณจากร่างกาย',
      'พลังงานอยู่ในช่วงฟื้นฟู 🌿 ลองเพิ่มการทำสมาธิ ออกกำลังกายเบาๆ และลดความเครียดในชีวิตประจำวัน',
    ],
  },
];

function getAIResponse(question) {
  const q = question.toLowerCase();
  for (const p of QUESTION_PATTERNS) {
    if (p.keywords.some(k => q.includes(k))) {
      const responses = p.responses;
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  // Default
  const defaults = [
    'คริสตัลรับรู้พลังงานของคุณ 🔮 จักรวาลกำลังทำงานเพื่อให้สิ่งที่ดีที่สุดเกิดขึ้นในชีวิตคุณ จงเชื่อมั่นในกระบวนการและก้าวต่อไปข้างหน้าด้วยความมั่นใจ',
    'ดาวส่องสว่างอยู่เหนือคุณเสมอ ✨ สิ่งที่คุณต้องการจะมาถึงในเวลาที่เหมาะสม ความอดทนและการวางใจคือพลังที่แข็งแกร่งที่สุด',
    'แสงสว่างของจักรวาลกำลังนำทางคุณ 🌟 ไว้วางใจในเส้นทางชีวิตของคุณ บทที่ดีที่สุดกำลังจะมาถึงในไม่ช้า',
  ];
  return defaults[Math.floor(Math.random() * defaults.length)];
}

export default function CrystalChatbot() {
  const { balance, spendCrystals, canSpend } = useCrystal();
  const [open, setOpen]           = useState(false);
  const [messages, setMessages]   = useState([
    {
      id: 0, role: 'assistant',
      text: 'สวัสดีค่ะ ฉันคือ Crystal AI 💎 แม่หมอดิจิทัลของคุณ\n\nพิมพ์คำถามเกี่ยวกับดวงชะตาได้เลย ราคาเพียง 10 Crystal ต่อคำถาม ✨',
    },
  ]);
  const [input, setInput]         = useState('');
  const [typing, setTyping]       = useState(false);
  const [insufficient, setInsuf]  = useState(false);
  const bottomRef                 = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  async function handleSend() {
    const q = input.trim();
    if (!q) return;
    if (!canSpend(COST_PER_QUESTION)) {
      setInsuf(true);
      setTimeout(() => setInsuf(false), 3000);
      return;
    }

    spendCrystals(COST_PER_QUESTION);

    const userMsg = { id: Date.now(), role: 'user', text: q };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    // Simulate typing delay (1.5–3s)
    const delay = 1500 + Math.random() * 1500;
    await new Promise(r => setTimeout(r, delay));

    const response = getAIResponse(q);
    setTyping(false);
    setMessages(prev => [
      ...prev,
      { id: Date.now() + 1, role: 'assistant', text: response },
    ]);
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 animate-bounce-gentle"
        style={{
          background: 'linear-gradient(135deg, #8b35e0, #f0a800)',
          boxShadow: '0 0 30px rgba(139,53,224,0.5), 0 0 60px rgba(240,168,0,0.3)',
        }}
        aria-label="เปิด Crystal AI"
      >
        {open
          ? <X className="w-6 h-6 text-white" />
          : <MessageCircle className="w-6 h-6 text-white" />
        }
      </button>

      {/* Chat Drawer */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 transition-all duration-400 origin-bottom-right ${
          open ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'
        }`}
      >
        <div className="glass-card flex flex-col overflow-hidden" style={{ height: '480px' }}>
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center gap-3 border-b border-gold-500/20"
            style={{ background: 'linear-gradient(135deg, rgba(139,53,224,0.3), rgba(240,168,0,0.15))' }}
          >
            <div className="relative">
              <span className="text-2xl">🔮</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-midnight-900 animate-pulse" />
            </div>
            <div className="flex-1">
              <p className="text-gold-300 font-cinzel font-bold text-sm">Crystal AI</p>
              <p className="text-midnight-300 text-xs font-sarabun">แม่หมอดิจิทัล · ออนไลน์</p>
            </div>
            <div className="crystal-badge text-xs">
              <Gem className="w-3 h-3" />
              {balance}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <span className="text-lg mr-2 mt-1">🔮</span>
                )}
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm font-sarabun whitespace-pre-line leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-mystic-700/60 text-white rounded-br-none border border-mystic-500/30'
                      : 'bg-midnight-800/60 text-midnight-100 rounded-bl-none border border-gold-500/20'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === 'user' && (
                  <span className="text-lg ml-2 mt-1">👤</span>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex items-center gap-2">
                <span className="text-lg">🔮</span>
                <div className="glass-card px-4 py-3 rounded-2xl rounded-bl-none border border-gold-500/20">
                  <div className="typing-dots flex gap-1.5">
                    <span /><span /><span />
                  </div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Insufficient balance warning */}
          {insufficient && (
            <div className="mx-4 mb-2 px-3 py-2 rounded-xl text-xs text-center font-sarabun"
              style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.4)', color: '#fca5a5' }}
            >
              Crystal ไม่พอ! ต้องการ {COST_PER_QUESTION} Crystal 💎
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-3 border-t border-gold-500/15">
            <div className="flex gap-2 items-end">
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="ถามคำถามเรื่องดวงชะตา... (10 💎)"
                rows={2}
                className="mystic-input resize-none flex-1 text-sm"
                style={{ borderRadius: '12px' }}
              />
              <button
                onClick={handleSend}
                disabled={typing || !input.trim()}
                className="btn-gold px-3 py-2 flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ borderRadius: '10px', padding: '10px' }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-center text-xs text-midnight-400 mt-1 font-sarabun">
              <Sparkles className="inline w-3 h-3 mr-1" />
              คำถามละ 10 Crystal
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
