'use client';
import { useEffect, useRef } from 'react';

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let stars = [];
    let shootingStars = [];

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    }

    function initStars() {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 3000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x:       Math.random() * canvas.width,
          y:       Math.random() * canvas.height,
          r:       Math.random() * 1.5 + 0.2,
          alpha:   Math.random(),
          speed:   Math.random() * 0.005 + 0.002,
          phase:   Math.random() * Math.PI * 2,
          color:   Math.random() > 0.85
                   ? `hsl(${270 + Math.random() * 60}, 80%, 80%)`  // purple-ish
                   : Math.random() > 0.5
                     ? '#ffd84e'                                    // gold
                     : '#ffffff',                                   // white
        });
      }
    }

    function spawnShootingStar() {
      shootingStars.push({
        x:     Math.random() * canvas.width * 0.8,
        y:     Math.random() * canvas.height * 0.4,
        len:   Math.random() * 100 + 60,
        speed: Math.random() * 6 + 4,
        alpha: 1,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
      });
    }

    function draw(ts) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── Nebula gradients ───────────────────────────────────────────────
      const g1 = ctx.createRadialGradient(
        canvas.width * 0.25, canvas.height * 0.3, 0,
        canvas.width * 0.25, canvas.height * 0.3, canvas.width * 0.4,
      );
      g1.addColorStop(0,   'rgba(90, 30, 160, 0.18)');
      g1.addColorStop(0.5, 'rgba(40, 10, 100, 0.08)');
      g1.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const g2 = ctx.createRadialGradient(
        canvas.width * 0.75, canvas.height * 0.6, 0,
        canvas.width * 0.75, canvas.height * 0.6, canvas.width * 0.35,
      );
      g2.addColorStop(0,   'rgba(20, 50, 120, 0.15)');
      g2.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ── Stars ──────────────────────────────────────────────────────────
      stars.forEach(s => {
        const a = (Math.sin(ts * s.speed + s.phase) + 1) / 2;
        ctx.globalAlpha = 0.3 + a * 0.7;
        ctx.fillStyle   = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;

      // ── Shooting stars ────────────────────────────────────────────────
      shootingStars = shootingStars.filter(ss => ss.alpha > 0);
      shootingStars.forEach(ss => {
        const dx = Math.cos(ss.angle) * ss.len;
        const dy = Math.sin(ss.angle) * ss.len;
        const grad = ctx.createLinearGradient(ss.x, ss.y, ss.x + dx, ss.y + dy);
        grad.addColorStop(0,    `rgba(255,216,78,${ss.alpha})`);
        grad.addColorStop(0.5,  `rgba(255,255,255,${ss.alpha * 0.6})`);
        grad.addColorStop(1,    'rgba(255,255,255,0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth   = 1.5;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x + dx, ss.y + dy);
        ctx.stroke();
        ss.x     += Math.cos(ss.angle) * ss.speed;
        ss.y     += Math.sin(ss.angle) * ss.speed;
        ss.alpha -= 0.015;
      });

      animId = requestAnimationFrame(draw);
    }

    // Spawn shooting star every 5-12s
    const spawnInterval = setInterval(spawnShootingStar, Math.random() * 7000 + 5000);

    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(spawnInterval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, background: 'linear-gradient(180deg, #000008 0%, #030118 40%, #0f0530 100%)' }}
      aria-hidden="true"
    />
  );
}
