import { useState } from 'react';
import { Sparkles, MessageCircleQuestion } from 'lucide-react';
import FortuneBox from '../components/FortuneBox';

export default function AIFortune() {
  const [question, setQuestion] = useState('');
  const [fortune, setFortune] = useState(null);
  const [isReading, setIsReading] = useState(false);

  const fortunes = [
    "A new opportunity is approaching.",
    "Patience will bring long-lasting success.",
    "Today is an excellent day to deeply trust your intuition.",
    "An unexpected connection will bring joy to your heart.",
    "Let go of what no longer serves you to make room for abundance.",
    "The stars suggest you take a bold step forward today.",
    "Your creativity holds the key to the solution you seek."
  ];

  const handleSeek = (e) => {
    e?.preventDefault();
    if (!question.trim()) return;
    
    setIsReading(true);
    setFortune(null);
    
    // Simulate AI thinking time
    setTimeout(() => {
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      setFortune(randomFortune);
      setIsReading(false);
    }, 1800);
  };

  const handleReset = () => {
    setFortune(null);
    setQuestion('');
  };

  return (
    <div className="w-full max-w-xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <Sparkles className="w-12 h-12 text-mystic-400 mx-auto mb-4 animate-glow" />
        <h1 className="text-4xl font-bold font-cinzel mb-3">Mystic Oracle</h1>
        <p className="text-gray-400 font-playfair italic text-lg">Consult the digital spirits for a profound reading.</p>
      </div>

      {!fortune && !isReading ? (
        <div className="animate-in fade-in duration-500 w-full max-w-md mx-auto">
          <form onSubmit={handleSeek} className="space-y-6 flex flex-col items-center">
            <div className="w-full">
              <label className="block text-sm font-medium text-mystic-300 mb-3 font-poppins text-center">
                What question burdens your spirit?
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="e.g. Will I find success soon?"
                  className="w-full bg-mystic-900/60 border-2 border-mystic-600/50 rounded-xl px-5 py-4 text-white placeholder-mystic-300/40 focus:outline-none focus:border-mystic-400 focus:ring-4 focus:ring-mystic-400/20 font-poppins transition-all drop-shadow-lg"
                  required
                />
                <MessageCircleQuestion className="absolute right-4 top-4 text-mystic-500/50 w-6 h-6 pointer-events-none" />
              </div>
            </div>
            <button type="submit" className="mystic-btn px-8 py-3 w-full max-w-xs text-lg shadow-glow">
              Seek Wisdom
            </button>
          </form>
        </div>
      ) : (
        <FortuneBox 
          fortune={fortune} 
          isReading={isReading} 
          onSeek={handleReset} 
        />
      )}
    </div>
  );
}
