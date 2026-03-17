/**
 * soundEffects.js — Procedural Web Audio API sounds
 * ไม่ต้องโหลดไฟล์เสียง สร้างเสียงจาก oscillators โดยตรง
 */

let audioCtx = null;
let muted = false;

function getCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  // Resume if suspended (browser autoplay policy)
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

export function isMuted() { return muted; }
export function setMuted(val) { muted = val; }
export function toggleMute() { muted = !muted; return muted; }

/** เสียง Crystal chime — ตอน unlock หรือรับ Crystal */
export function playCrystalChime() {
  if (muted) return;
  try {
    const ctx = getCtx();
    const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.12;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
      osc.start(t);
      osc.stop(t + 0.6);
    });
  } catch (e) { /* silently ignore */ }
}

/** เสียงไพ่กรีด — ตอนพลิกไพ่ tarot */
export function playCardFlip() {
  if (muted) return;
  try {
    const ctx = getCtx();
    const bufferSize = ctx.sampleRate * 0.15;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize) * 0.3;
    }
    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2000;
    filter.Q.value = 0.5;
    source.buffer = buffer;
    source.connect(filter);
    filter.connect(ctx.destination);
    source.start();
  } catch (e) { }
}

/** เสียง Ritual hum — ตอน hold button tarot */
export function playRitualHum() {
  if (muted) return;
  try {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sawtooth';
    osc.frequency.value = 80;
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.5);
    gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 2.5);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 3.1);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 3.2);
    return osc;
  } catch (e) { }
}

/** เสียงดาวระยิบ — ตอน result แสดง */
export function playStarSparkle() {
  if (muted) return;
  try {
    const ctx = getCtx();
    [880, 1108, 1318].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'triangle';
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.08;
      gain.gain.setValueAtTime(0.1, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
      osc.start(t);
      osc.stop(t + 0.4);
    });
  } catch (e) { }
}
