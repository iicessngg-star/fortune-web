// src/utils/astrology.js

export const zodiacSigns = [
  { name: 'Aquarius', symbol: '♒', start: '01-20', end: '02-18', element: 'Air', rulingPlanet: 'Uranus' },
  { name: 'Pisces', symbol: '♓', start: '02-19', end: '03-20', element: 'Water', rulingPlanet: 'Neptune' },
  { name: 'Aries', symbol: '♈', start: '03-21', end: '04-19', element: 'Fire', rulingPlanet: 'Mars' },
  { name: 'Taurus', symbol: '♉', start: '04-20', end: '05-20', element: 'Earth', rulingPlanet: 'Venus' },
  { name: 'Gemini', symbol: '♊', start: '05-21', end: '06-20', element: 'Air', rulingPlanet: 'Mercury' },
  { name: 'Cancer', symbol: '♋', start: '06-21', end: '07-22', element: 'Water', rulingPlanet: 'Moon' },
  { name: 'Leo', symbol: '♌', start: '07-23', end: '08-22', element: 'Fire', rulingPlanet: 'Sun' },
  { name: 'Virgo', symbol: '♍', start: '08-23', end: '09-22', element: 'Earth', rulingPlanet: 'Mercury' },
  { name: 'Libra', symbol: '♎', start: '09-23', end: '10-22', element: 'Air', rulingPlanet: 'Venus' },
  { name: 'Scorpio', symbol: '♏', start: '10-23', end: '11-21', element: 'Water', rulingPlanet: 'Pluto' },
  { name: 'Sagittarius', symbol: '♐', start: '11-22', end: '12-21', element: 'Fire', rulingPlanet: 'Jupiter' },
  { name: 'Capricorn', symbol: '♑', start: '12-22', end: '01-19', element: 'Earth', rulingPlanet: 'Saturn' }
];

export const getZodiacSign = (dateString) => {
  if (!dateString) return null;
  
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  const formattedDate = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  
  // Handle Capricorn wrapping around the year
  if (
    (month === 12 && day >= 22) ||
    (month === 1 && day <= 19)
  ) {
    return zodiacSigns.find(s => s.name === 'Capricorn');
  }
  
  return zodiacSigns.find(s => {
    return formattedDate >= s.start && formattedDate <= s.end;
  }) || zodiacSigns[2]; // Default to Aries if something goes wrong
};

export const getLuckyAttributes = (signName) => {
  const attributes = {
    Aries: { colors: ['Red', 'Orange'], stones: ['Diamond', 'Bloodstone'], numbers: [1, 9] },
    Taurus: { colors: ['Green', 'Pink'], stones: ['Emerald', 'Rose Quartz'], numbers: [2, 6] },
    Gemini: { colors: ['Yellow', 'Light Green'], stones: ['Agate', 'Pearl'], numbers: [3, 5] },
    Cancer: { colors: ['White', 'Silver'], stones: ['Moonstone', 'Ruby'], numbers: [2, 7] },
    Leo: { colors: ['Gold', 'Orange'], stones: ['Peridot', 'Onyx'], numbers: [1, 4] },
    Virgo: { colors: ['Navy Blue', 'Grey'], stones: ['Sapphire', 'Carnelian'], numbers: [5, 14] },
    Libra: { colors: ['Pastel Pink', 'Light Blue'], stones: ['Opal', 'Lapis Lazuli'], numbers: [6, 15] },
    Scorpio: { colors: ['Deep Red', 'Black'], stones: ['Topaz', 'Turquoise'], numbers: [8, 11] },
    Sagittarius: { colors: ['Purple', 'Indigo'], stones: ['Amethyst', 'Topaz'], numbers: [3, 9] },
    Capricorn: { colors: ['Brown', 'Dark Green'], stones: ['Garnet', 'Lapis Lazuli'], numbers: [4, 8] },
    Aquarius: { colors: ['Electric Blue', 'Cyan'], stones: ['Amethyst', 'Garnet'], numbers: [4, 7] },
    Pisces: { colors: ['Sea Green', 'Aquamarine'], stones: ['Aquamarine', 'Amethyst'], numbers: [3, 9] }
  };
  return attributes[signName] || attributes['Aries'];
};

export const getRandomFortune = () => {
  const fortunes = [
    "The stars align in your favor today. A pleasant surprise awaits you.",
    "Your intuition is particularly strong right now. Trust your inner voice.",
    "A new opportunity is on the horizon. Be ready to embrace change.",
    "Focus on finding balance in your life today. Take time for yourself.",
    "Your creative energy is peaking. Use it to solve a lingering problem.",
    "An unexpected connection will bring joy to your day.",
    "Patience is your ally. The results you seek are just around the corner.",
    "The universe encourages you to let go of what no longer serves you."
  ];
  return fortunes[Math.floor(Math.random() * fortunes.length)];
};

export const getRandomDailyHoroscope = (sign) => {
  const horoscopes = [
    `As a ${sign}, your natural charm is highlighted today. Use it to build bridges.`,
    `Challenges may arise, but your ${sign} determination will see you through.`,
    `The planetary alignment suggests a time of reflection for ${sign}s.`,
    `A burst of energy will help you tackle your to-do list with ease today.`,
    `Pay attention to your dreams tonight, they hold important messages for your sign.`,
    `Financial matters look promising. It's a good day for planning and budgeting.`
  ];
  return horoscopes[Math.floor(Math.random() * horoscopes.length)];
};
