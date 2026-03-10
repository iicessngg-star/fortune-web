export const convertBEtoCE = (beYear) => {
  return parseInt(beYear, 10) - 543;
};

export const calculateElement = (ceYear) => {
  const elements = [
    { name: 'ธาตุไม้', icon: '🌳', color: 'text-green-500', nameEn: 'Wood' },
    { name: 'ธาตุไฟ', icon: '🔥', color: 'text-red-500', nameEn: 'Fire' },
    { name: 'ธาตุดิน', icon: '⛰️', color: 'text-yellow-700', nameEn: 'Earth' },
    { name: 'ธาตุทอง', icon: '⚙️', color: 'text-yellow-400', nameEn: 'Metal' },
    { name: 'ธาตุน้ำ', icon: '💧', color: 'text-blue-500', nameEn: 'Water' }
  ];
  return elements[ceYear % 5];
};

export const calculateChineseZodiac = (ceYear) => {
  const animals = [
    'ชวด', 'ฉลู', 'ขาล', 'เถาะ', 'มะโรง', 'มะเส็ง',
    'มะเมีย', 'มะแม', 'วอก', 'ระกา', 'จอ', 'กุน'
  ];
  const index = (ceYear - 4) % 12;
  const animalIndex = index < 0 ? index + 12 : index;
  return animals[animalIndex];
};

export const calculatePlanet = (day, month, year) => {
  const paddedMonth = String(month).padStart(2, '0');
  const paddedDay = String(day).padStart(2, '0');
  const dateString = `${year}-${paddedMonth}-${paddedDay}`;
  
  const date = new Date(dateString);
  const dayIndex = date.getDay(); // 0 (Sunday) to 6 (Saturday)
  
  const planets = [
    { name: 'อาทิตย์', icon: '☀️', color: 'text-red-500', meaning: 'มั่นใจ เป็นผู้นำ มีความโดดเด่น' },
    { name: 'จันทร์', icon: '🌙', color: 'text-white', meaning: 'อ่อนโยน มีเสน่ห์ ช่างฝัน' },
    { name: 'อังคาร', icon: '♂️', color: 'text-pink-500', meaning: 'กล้าหาญ แอคทีฟ ชอบแข่งขัน' },
    { name: 'พุธ', icon: '☿️', color: 'text-green-500', meaning: 'ฉลาด เจรจาเก่ง ปรับตัวไว' },
    { name: 'พฤหัสบดี', icon: '♃', color: 'text-orange-500', meaning: 'มีเหตุผล รักความยุติธรรม ใฝ่รู้' },
    { name: 'ศุกร์', icon: '♀️', color: 'text-blue-400', meaning: 'รักสวยรักงาม โรแมนติก ศิลปิน' },
    { name: 'เสาร์', icon: '♄', color: 'text-purple-500', meaning: 'จริงจัง อดทน มีความรับผิดชอบสู' }
  ];
  return planets[dayIndex];
};

export const calculateElementBalance = (ceYear, month, day) => {
  // Mock element distribution based on birth data seed to ensure consistent return
  const seed = ceYear + parseInt(month, 10) + parseInt(day, 10);
  
  // Base percentages ensuring they sum to 100
  let fire = 10 + (seed % 35);
  let water = 10 + ((seed + 5) % 30);
  let wood = 10 + ((seed + 10) % 25);
  let earth = 10 + ((seed + 15) % 20);
  let metal = 100 - (fire + water + wood + earth);

  // Fallback to prevent negative if the random distribution causes an issue
  if (metal < 5) {
      metal = 5;
      fire = fire - 5;
  }

  return {
    distribution: [
      { name: 'Fire', icon: '🔥', percent: fire, color: '#ef4444' },
      { name: 'Water', icon: '💧', percent: water, color: '#3b82f6' },
      { name: 'Wood', icon: '🌳', percent: wood, color: '#22c55e' },
      { name: 'Earth', icon: '⛰️', percent: earth, color: '#a16207' },
      { name: 'Metal', icon: '⚙️', percent: metal, color: '#facc15' }
    ],
    weakest: getWeakestElement(fire, water, wood, earth, metal)
  };
};

const getWeakestElement = (fire, water, wood, earth, metal) => {
  const elements = [
    { name: 'Fire', val: fire },
    { name: 'Water', val: water },
    { name: 'Wood', val: wood },
    { name: 'Earth', val: earth },
    { name: 'Metal', val: metal }
  ];
  elements.sort((a, b) => a.val - b.val);
  return elements[0].name; // Return the lowest element percent (String: "Fire", "Water" etc)
};

export const generateLuckyThings = (elementName) => {
  const luckyMap = {
    'ธาตุไม้': { colors: 'เขียว อ่อน น้ำตาล', numbers: '3 4 8', days: 'พุธ พฤหัสบดี' },
    'ธาตุไฟ': { colors: 'แดง ชมพู ส้ม', numbers: '2 7 9', days: 'อังคาร อาทิตย์' },
    'ธาตุดิน': { colors: 'เหลือง น้ำตาล ครีม', numbers: '5 0 8', days: 'เสาร์ พุธกลางคืน' },
    'ธาตุทอง': { colors: 'ขาว ขาวนวล ทอง', numbers: '1 4 9', days: 'ศุกร์ จันทร์' },
    'ธาตุน้ำ': { colors: 'ดำ น้ำเงิน ฟ้า', numbers: '1 6 7', days: 'พุธ เสาร์' }
  };
  return luckyMap[elementName] || luckyMap['ธาตุดิน'];
};

export const getRecommendedCrystalsByWeakness = (weakElementName) => {
  const crystalMap = {
    'Fire': [
      { name: 'Carnelian', benefit: 'เพิ่มความกล้าหาญและความมั่นใจ', price: '450', image: 'https://images.unsplash.com/photo-1598516091010-095ea81335c9?w=400&h=400&fit=crop' },
      { name: 'Sunstone', benefit: 'นำพาความสุขและความสำเร็จ', price: '590', image: 'https://images.unsplash.com/photo-1620808076043-3e0d8cc8fbc2?w=400&h=400&fit=crop' }
    ],
    'Water': [
      { name: 'Amethyst', benefit: 'ขจัดความเครียดและเพิ่มปัญญา', price: '390', image: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=400&h=400&fit=crop' },
      { name: 'Aquamarine', benefit: 'นำความสงบและการสื่อสารที่ดี', price: '650', image: 'https://images.unsplash.com/photo-1574007693994-6d8b39d1b0d2?w=400&h=400&fit=crop' }
    ],
    'Wood': [
      { name: 'Green Aventurine', benefit: 'ดึงดูดโชคลาภและโอกาส', price: '350', image: 'https://images.unsplash.com/photo-1606708688484-93046bc0fcc7?w=400&h=400&fit=crop' },
      { name: 'Jade', benefit: 'นำพาความมั่งคั่งและสุขภาพดี', price: '890', image: 'https://images.unsplash.com/photo-1601614741369-02600ff502b4?w=400&h=400&fit=crop' }
    ],
    'Earth': [
      { name: 'Tiger Eye', benefit: 'ปกป้องคุ้มครองและดึงดูดความมั่งคั่ง', price: '390', image: 'https://images.unsplash.com/photo-1544473335-9cd7c9360563?w=400&h=400&fit=crop' },
      { name: 'Smoky Quartz', benefit: 'สลายพลังลบและเพิ่มความมั่นคง', price: '450', image: 'https://images.unsplash.com/photo-1532034789544-7f139fbfb6ed?w=400&h=400&fit=crop' }
    ],
    'Metal': [
      { name: 'Citrine', benefit: 'นำพาความมั่งคั่งและปัญญา', price: '590', image: 'https://images.unsplash.com/photo-1614917466540-3dcbeec4bfa1?w=400&h=400&fit=crop' },
      { name: 'Pyrite', benefit: 'ดึงดูดเงินทองและขจัดพลังลบ', price: '490', image: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=400&h=400&fit=crop' }
    ]
  };
  
  return crystalMap[weakElementName] || crystalMap['Earth'];
};

export const generateAIReading = (element, zodiac, planet) => {
  return `คุณเกิดปี${zodiac} ธาตุ${element.name.replace('ธาตุ', '')} มีดาว${planet.name}เป็นดาวประจำวันเกิด พลังแห่ง${planet.name}สะท้อนบุคลิกที่${planet.meaning} โดดเด่นเป็นพิเศษ`;
};

export const calculateFortune = (day, month, beYear, time) => {
  const ceYear = convertBEtoCE(beYear);
  const element = calculateElement(ceYear);
  const zodiac = calculateChineseZodiac(ceYear);
  const planet = calculatePlanet(day, month, ceYear);
  
  const aiReading = generateAIReading(element, zodiac, planet);
  const luckyThings = generateLuckyThings(element.name);
  const elementBalance = calculateElementBalance(ceYear, month, day);
  const recommendedCrystals = getRecommendedCrystalsByWeakness(elementBalance.weakest);

  return {
    element,
    zodiac,
    planet,
    aiReading,
    elementBalance,
    luckyColor: luckyThings.colors,
    luckyNumber: luckyThings.numbers,
    luckyDay: luckyThings.days,
    recommendedCrystals,
    dateInfo: { day, month, beYear, time }
  };
};
