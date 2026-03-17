// ══════════════════════════════════════════════════════════
// Astrology Engine — Tropical (Western) System
// ══════════════════════════════════════════════════════════

/**
 * Get Sun Sign from date of birth (Tropical/Western)
 * @param {Date} date
 * @returns {{ name: string, nameTh: string, symbol: string, element: string, ruling: string }}
 */
export function getSunSign(date) {
  const m = date.getMonth() + 1; // 1-12
  const d = date.getDate();

  if ((m === 3  && d >= 21) || (m === 4  && d <= 19)) return SIGNS['aries'];
  if ((m === 4  && d >= 20) || (m === 5  && d <= 20)) return SIGNS['taurus'];
  if ((m === 5  && d >= 21) || (m === 6  && d <= 20)) return SIGNS['gemini'];
  if ((m === 6  && d >= 21) || (m === 7  && d <= 22)) return SIGNS['cancer'];
  if ((m === 7  && d >= 23) || (m === 8  && d <= 22)) return SIGNS['leo'];
  if ((m === 8  && d >= 23) || (m === 9  && d <= 22)) return SIGNS['virgo'];
  if ((m === 9  && d >= 23) || (m === 10 && d <= 22)) return SIGNS['libra'];
  if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return SIGNS['scorpio'];
  if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) return SIGNS['sagittarius'];
  if ((m === 12 && d >= 22) || (m === 1  && d <= 19)) return SIGNS['capricorn'];
  if ((m === 1  && d >= 20) || (m === 2  && d <= 18)) return SIGNS['aquarius'];
  return SIGNS['pisces'];
}

/**
 * Approximate Moon Sign (simplified cycle: ~29.5 day orbit)
 * Uses a reference new moon + cycling through signs
 */
export function getMoonSign(date) {
  // Reference: New Moon in Aries on 2000-01-06
  const referenceDate = new Date('2000-01-06');
  const daysDiff = Math.floor((date - referenceDate) / (1000 * 60 * 60 * 24));
  const moonCycleDays = 29.5306;
  const daysPerSign   = moonCycleDays / 12;
  const dayInCycle    = ((daysDiff % moonCycleDays) + moonCycleDays) % moonCycleDays;
  const signIndex     = Math.floor(dayInCycle / daysPerSign);
  const signKeys      = Object.keys(SIGNS);
  return SIGNS[signKeys[signIndex % 12]];
}

/**
 * Approximate Rising Sign (Tropical) from date + local time
 * Ascendant changes every ~2 hours
 * @param {Date} date - full datetime (local)
 * @param {number} hourOfDay - 0-23
 */
export function getRisingSign(date, hourOfDay) {
  const sunSign    = getSunSign(date);
  const signKeys   = Object.keys(SIGNS);
  const sunIndex   = signKeys.indexOf(Object.keys(SIGNS).find(k => SIGNS[k].name === sunSign.name));
  // Each sign is "on the horizon" for 2hrs; shift based on hour
  const risingOffset = Math.floor(hourOfDay / 2);
  const risingIndex  = (sunIndex + risingOffset) % 12;
  return SIGNS[signKeys[risingIndex]];
}

/**
 * Calculate Luck Index scores (0-100) for Finance, Work, Love
 * Based on: birth day, month, year numerology + zodiac element compatibility
 */
export function getLuckIndex(birthdate) {
  const date  = new Date(birthdate);
  const day   = date.getDate();
  const month = date.getMonth() + 1;
  const year  = date.getFullYear();

  // Life path number
  const lifePathNum = getLifePathNumber(`${day}/${month}/${year}`);

  // Today's energies
  const today      = new Date();
  const todayDay   = today.getDate();
  const todayMonth = today.getMonth() + 1;

  // Seed-based but deterministic per day + birthdate
  const seed = (day * 7 + month * 13 + year % 100 * 3 + todayDay * 11 + todayMonth * 5) % 100;

  const sunSign = getSunSign(date);

  // Element modifiers
  const elementMod = { fire: 8, earth: 3, air: 6, water: 4 };
  const mod = elementMod[sunSign.element] || 0;

  const finance = clamp(40 + seed % 35 + mod + (lifePathNum === 8 ? 10 : 0),         20, 95);
  const work    = clamp(35 + ((seed * 3) % 40) + mod + (lifePathNum === 1 ? 12 : 0), 20, 95);
  const love    = clamp(30 + ((seed * 7) % 45) + mod - (lifePathNum === 4 ? 5 : 0),  20, 95);

  return {
    finance,
    work,
    love,
    overall: Math.round((finance + work + love) / 3),
    lifePathNumber: lifePathNum,
  };
}

/**
 * Today's daily fortune (changes each day)
 */
export function getDailyFortune(birthdate) {
  const { finance, work, love, overall } = getLuckIndex(birthdate);

  const messages = {
    high:   ['วันนี้ดาวส่องสว่างให้คุณเป็นพิเศษ', 'จักรวาลเปิดทางให้คุณก้าวหน้า', 'พลังงานบวกโอบล้อมคุณอยู่'],
    medium: ['วันนี้เดินหน้าด้วยความระมัดระวัง', 'โอกาสซ่อนอยู่ใกล้ๆ หากคุณตั้งใจมอง', 'ใจเย็นไว้ สิ่งดีกำลังมา'],
    low:    ['วันนี้เหมาะกับการพักผ่อนและทบทวนตัวเอง', 'ดาวแนะนำให้รักษาพลังไว้สำหรับโอกาสหน้า'],
  };

  const tier = overall >= 70 ? 'high' : overall >= 45 ? 'medium' : 'low';
  const msg  = messages[tier][Math.floor(Math.random() * messages[tier].length)];

  return { finance, work, love, overall, message: msg };
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function clamp(val, min, max) {
  return Math.min(max, Math.max(min, val));
}

export function getLifePathNumber(dateString) {
  // dateString: "DD/MM/YYYY" or "YYYY-MM-DD"
  const digits = dateString.replace(/\D/g, '');
  let sum = digits.split('').reduce((acc, d) => acc + parseInt(d), 0);
  while (sum > 9 && sum !== 11 && sum !== 22) {
    sum = String(sum).split('').reduce((acc, d) => acc + parseInt(d), 0);
  }
  return sum;
}

export function analyzeNumber(numStr) {
  const digits = numStr.replace(/\D/g, '');
  let sum = digits.split('').reduce((acc, d) => acc + parseInt(d), 0);
  while (sum > 9 && sum !== 11 && sum !== 22) {
    sum = String(sum).split('').reduce((acc, d) => acc + parseInt(d), 0);
  }
  return sum;
}

// ── Sign Data ────────────────────────────────────────────────────────────────

export const SIGNS = {
  aries:       { name: 'Aries',       nameTh: 'เมษ (Aries)',       symbol: '♈', element: 'fire',  ruling: 'Mars',    color: '#FF6B6B', dates: '21 มี.ค. – 19 เม.ย.', trait: 'กล้าหาญ ริเริ่ม มีพลังงาน' },
  taurus:      { name: 'Taurus',      nameTh: 'พฤษภ (Taurus)',     symbol: '♉', element: 'earth', ruling: 'Venus',   color: '#51CF66', dates: '20 เม.ย. – 20 พ.ค.', trait: 'มั่นคง อดทน รักความสวยงาม' },
  gemini:      { name: 'Gemini',      nameTh: 'เมถุน (Gemini)',    symbol: '♊', element: 'air',   ruling: 'Mercury', color: '#74C0FC', dates: '21 พ.ค. – 20 มิ.ย.', trait: 'ฉลาด ช่างพูด ปรับตัวเก่ง' },
  cancer:      { name: 'Cancer',      nameTh: 'กรกฎ (Cancer)',     symbol: '♋', element: 'water', ruling: 'Moon',    color: '#9775FA', dates: '21 มิ.ย. – 22 ก.ค.', trait: 'อ่อนไหว เอาใจใส่ ผูกพันครอบครัว' },
  leo:         { name: 'Leo',         nameTh: 'สิงห์ (Leo)',       symbol: '♌', element: 'fire',  ruling: 'Sun',     color: '#FCC419', dates: '23 ก.ค. – 22 ส.ค.', trait: 'มั่นใจ ผู้นำ เอื้อเฟื้อ' },
  virgo:       { name: 'Virgo',       nameTh: 'กันย์ (Virgo)',     symbol: '♍', element: 'earth', ruling: 'Mercury', color: '#A9E34B', dates: '23 ส.ค. – 22 ก.ย.', trait: 'ละเอียดรอบคอบ วิเคราะห์เก่ง ขยัน' },
  libra:       { name: 'Libra',       nameTh: 'ตุลย์ (Libra)',     symbol: '♎', element: 'air',   ruling: 'Venus',   color: '#F783AC', dates: '23 ก.ย. – 22 ต.ค.', trait: 'ยุติธรรม มีเสน่ห์ รักความสมดุล' },
  scorpio:     { name: 'Scorpio',     nameTh: 'พิจิก (Scorpio)',   symbol: '♏', element: 'water', ruling: 'Pluto',   color: '#CC5DE8', dates: '23 ต.ค. – 21 พ.ย.', trait: 'เข้มแข็ง ลึกซึ้ง หลงใหลได้ง่าย' },
  sagittarius: { name: 'Sagittarius', nameTh: 'ธนู (Sagittarius)', symbol: '♐', element: 'fire',  ruling: 'Jupiter', color: '#FF922B', dates: '22 พ.ย. – 21 ธ.ค.', trait: 'อิสระ มองโลกกว้าง กระตือรือร้น' },
  capricorn:   { name: 'Capricorn',   nameTh: 'มังกร (Capricorn)', symbol: '♑', element: 'earth', ruling: 'Saturn',  color: '#868E96', dates: '22 ธ.ค. – 19 ม.ค.', trait: 'มุ่งมั่น ทะเยอทะยาน รับผิดชอบสูง' },
  aquarius:    { name: 'Aquarius',    nameTh: 'กุมภ์ (Aquarius)',  symbol: '♒', element: 'air',   ruling: 'Uranus',  color: '#4DABF7', dates: '20 ม.ค. – 18 ก.พ.', trait: 'นวัตกรรม อิสระทางความคิด เป็นมนุษยธรรม' },
  pisces:      { name: 'Pisces',      nameTh: 'มีน (Pisces)',      symbol: '♓', element: 'water', ruling: 'Neptune', color: '#63E6BE', dates: '19 ก.พ. – 20 มี.ค.', trait: 'ใจดี มีจินตนาการ เชื่อมต่อจิตวิญญาณ' },
};

export const ELEMENTS = {
  fire:  { nameTh: 'ไฟ', desc: 'พลังงาน ความกล้า ความหลงใหล', color: '#FF6B6B' },
  earth: { nameTh: 'ดิน', desc: 'มั่นคง ปฏิบัติ อดทน',          color: '#A9E34B' },
  air:   { nameTh: 'ลม', desc: 'ปัญญา การสื่อสาร ความคิดสร้างสรรค์', color: '#74C0FC' },
  water: { nameTh: 'น้ำ', desc: 'อารมณ์ ความรู้สึก การรักษา',    color: '#9775FA' },
};
