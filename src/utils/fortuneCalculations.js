export const convertBEtoCE = (beYear) => {
  return beYear - 543;
};

export const getElement = (ceYear) => {
  const elements = [
    { name: 'ธาตุไม้', icon: '🌳', color: 'text-green-500' },
    { name: 'ธาตุไฟ', icon: '🔥', color: 'text-red-500' },
    { name: 'ธาตุดิน', icon: '⛰️', color: 'text-yellow-700' },
    { name: 'ธาตุทอง', icon: '⚙️', color: 'text-yellow-400' },
    { name: 'ธาตุน้ำ', icon: '💧', color: 'text-blue-500' }
  ];
  return elements[ceYear % 5];
};

export const getPlanet = (dateString) => {
  // dateString should be in 'YYYY-MM-DD' format
  const date = new Date(dateString);
  const dayIndex = date.getDay(); // 0 (Sunday) to 6 (Saturday)
  
  const planets = [
    { name: 'อาทิตย์', icon: '☀️', color: 'text-red-500', meaning: 'มั่นใจ เป็นผู้นำ มีความโดดเด่น' },
    { name: 'จันทร์', icon: '🌙', color: 'text-yellow-200', meaning: 'อ่อนโยน มีเสน่ห์ ช่างฝัน' },
    { name: 'อังคาร', icon: '♂️', color: 'text-pink-500', meaning: 'กล้าหาญ แอคทีฟ ชอบแข่งขัน' },
    { name: 'พุธ', icon: '☿️', color: 'text-green-500', meaning: 'ฉลาด เจรจาเก่ง ปรับตัวไว' },
    { name: 'พฤหัสบดี', icon: '♃', color: 'text-orange-500', meaning: 'มีเหตุผล รักความยุติธรรม ใฝ่รู้' },
    { name: 'ศุกร์', icon: '♀️', color: 'text-blue-400', meaning: 'รักสวยรักงาม โรแมนติก ศิลปิน' },
    { name: 'เสาร์', icon: '♄', color: 'text-purple-500', meaning: 'จริงจัง อดทน มีความรับผิดชอบสูง' }
  ];
  return planets[dayIndex];
};

export const getChineseZodiac = (ceYear) => {
  const animals = [
    'ชวด', 'ฉลู', 'ขาล', 'เถาะ', 'มะโรง', 'มะเส็ง',
    'มะเมีย', 'มะแม', 'วอก', 'ระกา', 'จอ', 'กุน'
  ];
  const index = (ceYear - 4) % 12;
  // Handle negative modulo correctly
  const animalIndex = index < 0 ? index + 12 : index;
  return animals[animalIndex];
};

export const generateAIReading = (element, zodiac, planet) => {
  return `คุณเป็นคน${element.name} เกิดปี${zodiac} และมีดาว${planet.name}เป็นดาวประจำวันเกิด บุคลิกของคุณเป็นคน${planet.meaning} หากใช้ความสามารถด้านการสื่อสารหรือจุดเด่นของคุณจะมีโอกาสประสบความสำเร็จสูง`;
};

export const calculateFortune = (day, month, beYear, time) => {
  const ceYear = convertBEtoCE(parseInt(beYear, 10));
  const element = getElement(ceYear);
  const zodiac = getChineseZodiac(ceYear);
  
  // Create a valid date string (YYYY-MM-DD format)
  // Ensure month and day are 2 digits
  const paddedMonth = String(month).padStart(2, '0');
  const paddedDay = String(day).padStart(2, '0');
  const dateString = `${ceYear}-${paddedMonth}-${paddedDay}`;
  
  const planet = getPlanet(dateString);
  const aiReading = generateAIReading(element, zodiac, planet);

  // Pro Level: Generate pseudo-random deterministic lucky items based on ceYear and day
  const colors = ['ม่วง', 'ทอง', 'แดง', 'เขียว', 'น้ำเงิน', 'ส้ม', 'ชมพู', 'ขาว'];
  const crystals = ['Amethyst', 'Gold', 'Ruby', 'Emerald', 'Sapphire', 'Topaz', 'Rose Quartz', 'Clear Quartz'];
  
  const seed = ceYear + dayIndex;
  const luckyColor = colors[seed % colors.length] + ' ' + colors[(seed + 1) % colors.length];
  const luckyCrystal = crystals[seed % crystals.length];
  const luckyNumbers = `${seed % 10} ${(seed + 3) % 10} ${(seed + 7) % 10}`;

  return {
    element,
    zodiac,
    planet,
    aiReading,
    luckyColor,
    luckyNumber: luckyNumbers,
    luckyCrystal,
    dateInfo: { day, month, beYear, time }
  };
};
