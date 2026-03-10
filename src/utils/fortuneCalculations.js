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

export const generateLuckyThings = (elementName) => {
  // Mapping based on Element (ธาตุ)
  const luckyMap = {
    'ธาตุไม้': {
      colors: 'เขียว อ่อน น้ำตาล',
      numbers: '3 4 8',
      days: 'พุธ พฤหัสบดี'
    },
    'ธาตุไฟ': {
      colors: 'แดง ชมพู ส้ม',
      numbers: '2 7 9',
      days: 'อังคาร อาทิตย์'
    },
    'ธาตุดิน': {
      colors: 'เหลือง น้ำตาล ครีม',
      numbers: '5 0 8',
      days: 'เสาร์ พุธกลางคืน'
    },
    'ธาตุทอง': {
      colors: 'ขาว ขาวนวล ทอง',
      numbers: '1 4 9',
      days: 'ศุกร์ จันทร์'
    },
    'ธาตุน้ำ': {
      colors: 'ดำ น้ำเงิน ฟ้า',
      numbers: '1 6 7',
      days: 'พุธ เสาร์'
    }
  };
  
  return luckyMap[elementName] || luckyMap['ธาตุดิน'];
};

export const getRecommendedCrystals = (elementName) => {
  const crystalMap = {
    'ธาตุไฟ': [
      { name: 'Carnelian', benefit: 'เพิ่มความกล้าหาญและความมั่นใจ', price: '450', image: 'https://images.unsplash.com/photo-1598516091010-095ea81335c9?w=400&h=400&fit=crop' },
      { name: 'Sunstone', benefit: 'นำพาความสุขและความสำเร็จ', price: '590', image: 'https://images.unsplash.com/photo-1620808076043-3e0d8cc8fbc2?w=400&h=400&fit=crop' },
      { name: 'Garnet', benefit: 'กระตุ้นพลังชีวิตและความปรารถนา', price: '490', image: 'https://images.unsplash.com/photo-1615114814213-a245ffc79e9a?w=400&h=400&fit=crop' }
    ],
    'ธาตุน้ำ': [
      { name: 'Amethyst', benefit: 'ขจัดความเครียดและเพิ่มปัญญา', price: '390', image: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=400&h=400&fit=crop' },
      { name: 'Aquamarine', benefit: 'นำความสงบและการสื่อสารที่ดี', price: '650', image: 'https://images.unsplash.com/photo-1574007693994-6d8b39d1b0d2?w=400&h=400&fit=crop' },
      { name: 'Moonstone', benefit: 'เสริมเสน่ห์และความอ่อนโยน', price: '550', image: 'https://images.unsplash.com/photo-1596401057404-58ebf4b1d64c?w=400&h=400&fit=crop' }
    ],
    'ธาตุไม้': [
      { name: 'Green Aventurine', benefit: 'ดึงดูดโชคลาภและโอกาส', price: '350', image: 'https://images.unsplash.com/photo-1606708688484-93046bc0fcc7?w=400&h=400&fit=crop' },
      { name: 'Jade', benefit: 'นำพาความมั่งคั่งและสุขภาพดี', price: '890', image: 'https://images.unsplash.com/photo-1601614741369-02600ff502b4?w=400&h=400&fit=crop' },
      { name: 'Malachite', benefit: 'ปกป้องคุ้มครองและเสริมอำนาจ', price: '750', image: 'https://images.unsplash.com/photo-1598515082161-597af532057d?w=400&h=400&fit=crop' }
    ],
    'ธาตุดิน': [
      { name: 'Tiger Eye', benefit: 'ปกป้องคุ้มครองและดึงดูดความมั่งคั่ง', price: '390', image: 'https://images.unsplash.com/photo-1544473335-9cd7c9360563?w=400&h=400&fit=crop' },
      { name: 'Smoky Quartz', benefit: 'สลายพลังลบและเพิ่มความมั่นคง', price: '450', image: 'https://images.unsplash.com/photo-1532034789544-7f139fbfb6ed?w=400&h=400&fit=crop' },
      { name: 'Obsidian', benefit: 'ปกป้องจากอุบัติเหตุและสิ่งไม่ดี', price: '350', image: 'https://images.unsplash.com/photo-1615114814213-a245ffc79e9a?w=400&h=400&fit=crop' }
    ],
    'ธาตุทอง': [
      { name: 'Citrine', benefit: 'นำพาความมั่งคั่งและปัญญา', price: '590', image: 'https://images.unsplash.com/photo-1614917466540-3dcbeec4bfa1?w=400&h=400&fit=crop' },
      { name: 'Pyrite', benefit: 'ดึงดูดเงินทองและขจัดพลังลบ', price: '490', image: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=400&h=400&fit=crop' },
      { name: 'Clear Quartz', benefit: 'เพิ่มพลังงานบวกและความชัดเจน', price: '390', image: 'https://images.unsplash.com/photo-1596401057404-58ebf4b1d64c?w=400&h=400&fit=crop' }
    ]
  };
  
  return crystalMap[elementName] || crystalMap['ธาตุดิน'];
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

  const luckyThings = generateLuckyThings(element.name);
  const recommendedCrystals = getRecommendedCrystals(element.name);

  return {
    element,
    zodiac,
    planet,
    aiReading,
    luckyColor: luckyThings.colors,
    luckyNumber: luckyThings.numbers,
    luckyDay: luckyThings.days,
    recommendedCrystals,
    dateInfo: { day, month, beYear, time }
  };
};
