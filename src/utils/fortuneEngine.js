export const convertBEtoCE = (beYear) => {
  return parseInt(beYear, 10) - 543;
};

export const calculateElement = (ceYear) => {
  const elements = [
    { name: 'wood', icon: '🌳', color: 'text-green-500' },
    { name: 'fire', icon: '🔥', color: 'text-red-500' },
    { name: 'earth', icon: '⛰️', color: 'text-yellow-700' },
    { name: 'metal', icon: '⚙️', color: 'text-yellow-400' },
    { name: 'water', icon: '💧', color: 'text-blue-500' }
  ];
  return elements[ceYear % 5];
};

export const calculateChineseZodiac = (ceYear) => {
  const animals = [
    'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
    'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'
  ];
  const index = (ceYear - 4) % 12;
  const animalIndex = index < 0 ? index + 12 : index;
  return animals[animalIndex];
};

export const calculateWesternZodiac = (day, month) => {
  const d = parseInt(day, 10);
  const m = parseInt(month, 10);
  
  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return { key: 'aries', icon: '♈' };
  if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return { key: 'taurus', icon: '♉' };
  if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) return { key: 'gemini', icon: '♊' };
  if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) return { key: 'cancer', icon: '♋' };
  if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return { key: 'leo', icon: '♌' };
  if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return { key: 'virgo', icon: '♍' };
  if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) return { key: 'libra', icon: '♎' };
  if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return { key: 'scorpio', icon: '♏' };
  if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) return { key: 'sagittarius', icon: '♐' };
  if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return { key: 'capricorn', icon: '♑' };
  if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return { key: 'aquarius', icon: '♒' };
  return { key: 'pisces', icon: '♓' };
};

export const calculatePlanet = (day, month, year) => {
  const paddedMonth = String(month).padStart(2, '0');
  const paddedDay = String(day).padStart(2, '0');
  const dateString = `${year}-${paddedMonth}-${paddedDay}`;
  
  const date = new Date(dateString);
  const dayIndex = date.getDay(); // 0 (Sunday) to 6 (Saturday)
  
  const planets = [
    { name: 'sun', icon: '☀️', color: 'text-red-500' },
    { name: 'moon', icon: '🌙', color: 'text-white' },
    { name: 'mars', icon: '♂️', color: 'text-pink-500' },
    { name: 'mercury', icon: '☿️', color: 'text-green-500' },
    { name: 'jupiter', icon: '♃', color: 'text-orange-500' },
    { name: 'venus', icon: '♀️', color: 'text-blue-400' },
    { name: 'saturn', icon: '♄', color: 'text-purple-500' }
  ];
  return planets[dayIndex];
};

export const calculateElementBalance = (ceYear, month, day) => {
  const seed = ceYear + parseInt(month, 10) + parseInt(day, 10);
  
  let fire = 10 + (seed % 35);
  let water = 10 + ((seed + 5) % 30);
  let wood = 10 + ((seed + 10) % 25);
  let earth = 10 + ((seed + 15) % 20);
  let metal = 100 - (fire + water + wood + earth);

  if (metal < 5) {
      metal = 5;
      fire = fire - 5;
  }

  return {
    distribution: [
      { name: 'fire', icon: '🔥', percent: fire, color: '#ef4444' },
      { name: 'water', icon: '💧', percent: water, color: '#3b82f6' },
      { name: 'wood', icon: '🌳', percent: wood, color: '#22c55e' },
      { name: 'earth', icon: '⛰️', percent: earth, color: '#a16207' },
      { name: 'metal', icon: '⚙️', percent: metal, color: '#facc15' }
    ],
    weakest: getWeakestElement(fire, water, wood, earth, metal)
  };
};

const getWeakestElement = (fire, water, wood, earth, metal) => {
  const elements = [
    { name: 'fire', val: fire },
    { name: 'water', val: water },
    { name: 'wood', val: wood },
    { name: 'earth', val: earth },
    { name: 'metal', val: metal }
  ];
  elements.sort((a, b) => a.val - b.val);
  return elements[0].name;
};

export const generateLuckyThings = (elementName) => {
  return {
    colors: `lucky_colors_${elementName}`,
    numbers: `lucky_numbers_${elementName}`,
    days: `lucky_days_${elementName}`
  };
};

export const getRecommendedCrystalsByWeakness = (weakElementName) => {
  const crystalMap = {
    'fire': [
      { name: 'Carnelian', benefitKey: 'crystal_benefit_carnelian', price: '450', image: 'https://images.unsplash.com/photo-1598516091010-095ea81335c9?w=400&h=400&fit=crop' },
      { name: 'Sunstone', benefitKey: 'crystal_benefit_sunstone', price: '590', image: 'https://images.unsplash.com/photo-1620808076043-3e0d8cc8fbc2?w=400&h=400&fit=crop' }
    ],
    'water': [
      { name: 'Amethyst', benefitKey: 'crystal_benefit_amethyst', price: '390', image: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=400&h=400&fit=crop' },
      { name: 'Aquamarine', benefitKey: 'crystal_benefit_aquamarine', price: '650', image: 'https://images.unsplash.com/photo-1574007693994-6d8b39d1b0d2?w=400&h=400&fit=crop' }
    ],
    'wood': [
      { name: 'Green Aventurine', benefitKey: 'crystal_benefit_green_aventurine', price: '350', image: 'https://images.unsplash.com/photo-1606708688484-93046bc0fcc7?w=400&h=400&fit=crop' },
      { name: 'Jade', benefitKey: 'crystal_benefit_jade', price: '890', image: 'https://images.unsplash.com/photo-1601614741369-02600ff502b4?w=400&h=400&fit=crop' }
    ],
    'earth': [
      { name: 'Tiger Eye', benefitKey: 'crystal_benefit_tiger_eye', price: '390', image: 'https://images.unsplash.com/photo-1544473335-9cd7c9360563?w=400&h=400&fit=crop' },
      { name: 'Smoky Quartz', benefitKey: 'crystal_benefit_smoky_quartz', price: '450', image: 'https://images.unsplash.com/photo-1532034789544-7f139fbfb6ed?w=400&h=400&fit=crop' }
    ],
    'metal': [
      { name: 'Citrine', benefitKey: 'crystal_benefit_citrine', price: '590', image: 'https://images.unsplash.com/photo-1614917466540-3dcbeec4bfa1?w=400&h=400&fit=crop' },
      { name: 'Pyrite', benefitKey: 'crystal_benefit_pyrite', price: '490', image: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=400&h=400&fit=crop' }
    ]
  };
  
  return crystalMap[weakElementName] || crystalMap['earth'];
};

export const getRandomTarotCard = () => {
  const tarotDeck = [
    { key: 'tarot_fool', name: 'The Fool', image: 'https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg' },
    { key: 'tarot_magician', name: 'The Magician', image: 'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg' },
    { key: 'tarot_high_priestess', name: 'The High Priestess', image: 'https://upload.wikimedia.org/wikipedia/en/8/88/RWS_Tarot_02_High_Priestess.jpg' },
    { key: 'tarot_empress', name: 'The Empress', image: 'https://upload.wikimedia.org/wikipedia/en/c/ce/RWS_Tarot_03_Empress.jpg' },
    { key: 'tarot_emperor', name: 'The Emperor', image: 'https://upload.wikimedia.org/wikipedia/en/c/c3/RWS_Tarot_04_Emperor.jpg' },
    { key: 'tarot_star', name: 'The Star', image: 'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_17_Star.jpg' },
    { key: 'tarot_sun', name: 'The Sun', image: 'https://upload.wikimedia.org/wikipedia/en/1/17/RWS_Tarot_19_Sun.jpg' },
    { key: 'tarot_moon', name: 'The Moon', image: 'https://upload.wikimedia.org/wikipedia/en/7/7f/RWS_Tarot_18_Moon.jpg' },
    { key: 'tarot_wheel_of_fortune', name: 'Wheel of Fortune', image: 'https://upload.wikimedia.org/wikipedia/en/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg' }
  ];
  const randomIndex = Math.floor(Math.random() * tarotDeck.length);
  return tarotDeck[randomIndex];
};

export const getBirthChartPositions = (seed) => {
  // Deterministic positions based on a seed (e.g. ceYear + month + day)
  // Angles represent degrees on the wheel (0-360)
  return [
    { name: 'Sun', icon: '☀️', angle: (seed * 15) % 360, color: 'text-yellow-400' },
    { name: 'Moon', icon: '🌙', angle: (seed * 45 + 30) % 360, color: 'text-gray-200' },
    { name: 'Mercury', icon: '☿️', angle: (seed * 85 + 60) % 360, color: 'text-green-400' },
    { name: 'Venus', icon: '♀️', angle: (seed * 115 + 90) % 360, color: 'text-pink-400' },
    { name: 'Mars', icon: '♂️', angle: (seed * 195 + 120) % 360, color: 'text-red-500' }
  ];
};

export const calculateLifeAreas = (seed) => {
  // Use today's date added to user seed to make it daily-dynamic
  const today = new Date();
  const dailySeed = seed + today.getDate() + today.getMonth() * 31;
  
  return {
    career: 45 + (dailySeed * 13) % 45, // 45-90%
    love: 40 + (dailySeed * 17) % 55,   // 40-95%
    wellness: 50 + (dailySeed * 7) % 45, // 50-95%
    finance: 35 + (dailySeed * 23) % 60  // 35-95%
  };
};

export const calculateFortune = (day, month, beYear, time) => {
  const ceYear = convertBEtoCE(beYear);
  const element = calculateElement(ceYear);
  const zodiac = calculateChineseZodiac(ceYear);
  const sunSign = calculateWesternZodiac(day, month);
  const planet = calculatePlanet(day, month, ceYear);
  
  const luckyThings = generateLuckyThings(element.name);
  const elementBalance = calculateElementBalance(ceYear, month, day);
  const recommendedCrystals = getRecommendedCrystalsByWeakness(elementBalance.weakest);
  
  const seed = ceYear + parseInt(month, 10) + parseInt(day, 10);
  const birthChart = getBirthChartPositions(seed);
  const lifeAreas = calculateLifeAreas(seed);

  return {
    element,
    zodiac,
    sunSign,
    planet,
    elementBalance,
    birthChart,
    lifeAreas,
    luckyColor: luckyThings.colors,
    luckyNumber: luckyThings.numbers,
    luckyDay: luckyThings.days,
    recommendedCrystals,
    dateInfo: { day, month, beYear, time }
  };
};
