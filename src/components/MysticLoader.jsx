'use client';

/** Mystic skeleton loader — animation คริสตัลเรืองแสงและดาวเรียงตัว */
export default function MysticLoader({ text = 'กำลังอ่านดวงดาว...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-6">
      {/* Crystal constellation */}
      <div className="relative w-24 h-24">
        {/* Center crystal */}
        <div
          className="absolute inset-0 flex items-center justify-center text-4xl"
          style={{ animation: 'float 3s ease-in-out infinite' }}
        >
          🔮
        </div>
        {/* Orbiting stars */}
        {[...Array(5)].map((_, i) => {
          const angle = (i * 360) / 5;
          const delay = i * 0.2;
          return (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: i % 2 === 0 ? '#ffd84e' : '#b975f8',
                top: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                transform: 'translate(-50%, -50%)',
                animation: `twinkle 1.5s ease-in-out ${delay}s infinite`,
                boxShadow: i % 2 === 0
                  ? '0 0 8px rgba(255,216,78,0.8)'
                  : '0 0 8px rgba(185,117,248,0.8)',
              }}
            />
          );
        })}
        {/* Outer ring */}
        <div
          className="absolute inset-[-8px] rounded-full border border-gold-400/20"
          style={{ animation: 'spin 8s linear infinite' }}
        />
        <div
          className="absolute inset-[-18px] rounded-full border border-mystic-600/20"
          style={{ animation: 'spin 12s linear infinite reverse' }}
        />
      </div>

      {/* Shimmer bars (skeleton) */}
      <div className="w-full max-w-xs space-y-3">
        {[80, 60, 70, 50].map((w, i) => (
          <div
            key={i}
            className="h-3 rounded-full"
            style={{
              width: `${w}%`,
              margin: '0 auto',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(240,168,0,0.12) 50%, rgba(255,255,255,0.04) 100%)',
              backgroundSize: '200% 100%',
              animation: `shimmer 2s linear ${i * 0.15}s infinite`,
            }}
          />
        ))}
      </div>

      <p className="text-midnight-300 font-sarabun text-sm tracking-wider"
         style={{ animation: 'glowPulse 2s ease-in-out infinite' }}>
        ✦ {text} ✦
      </p>
    </div>
  );
}
