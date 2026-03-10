export const calculateFortune = (day, month, beYear, time) => {
  // Convert BE to CE
  const ceYear = parseInt(beYear) - 543;
  const dateStr = `${ceYear}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T${time || '00:00'}:00`;
  const date = new Date(dateStr);
  const dayOfWeekIndex = date.getDay();

  // 1. Element & Heavenly Stem (Year % 10)
  const stems = [
    { element: 'ธาตุทอง', polarity: 'หยาง', meaning: 'แข็งแกร่ง เด็ดเดี่ยว' },
    { element: 'ธาตุทอง', polarity: 'หยิน', meaning: 'ละเอียดอ่อน มีเสน่ห์' },
    { element: 'ธาตุน้ำ', polarity: 'หยาง', meaning: 'ปราดเปรื่อง คล่องตัว' },
    { element: 'ธาตุน้ำ', polarity: 'หยิน', meaning: 'เยือกเย็น ลึกล้ำ' },
    { element: 'ธาตุไม้', polarity: 'หยาง', meaning: 'หนักแน่น เติบโต' },
    { element: 'ธาตุไม้', polarity: 'หยิน', meaning: 'ยืดหยุ่น ปรับตัวเก่ง' },
    { element: 'ธาตุไฟ', polarity: 'หยาง', meaning: 'ร้อนแรง ตรงไปตรงมา' },
    { element: 'ธาตุไฟ', polarity: 'หยิน', meaning: 'อบอุ่น สร้างสรรค์' },
    { element: 'ธาตุดิน', polarity: 'หยาง', meaning: 'มั่นคง พึ่งพาได้' },
    { element: 'ธาตุดิน', polarity: 'หยิน', meaning: 'อุดมสมบูรณ์ เลี้ยงดู' },
  ];
  const stemIndex = ceYear % 10;
  const stem = stems[stemIndex];

  // 2. Earthly Branch (Zodiac) (Year % 12)
  const branches = [
    'วอก', 'ระกา', 'จอ', 'กุน', 'ชวด', 'ฉลู',
    'ขาล', 'เถาะ', 'มะโรง', 'มะเส็ง', 'มะเมีย', 'มะแม'
  ];
  const branchIndex = ceYear % 12;
  const branch = branches[branchIndex];

  // 3. Planet (Day of week)
  const planets = [
    { name: 'พระอาทิตย์', meaning: 'มีภาวะผู้นำ ซื่อสัตย์ รักศักดิ์ศรี', color: 'ลึกลับสีแดง (Ruby)' },
    { name: 'พระจันทร์', meaning: 'อ่อนโยน มีเสน่ห์ ช่างจินตนาการ', color: 'ลึกลับสีเหลืองนวล (Moonstone)' },
    { name: 'พระอังคาร', meaning: 'กล้าหาญ เด็ดเดี่ยว นักสู้', color: 'ลึกลับสีชมพูเข้ม (Garnet)' },
    { name: 'พระพุธ', meaning: 'ฉลาด เจรจาเก่ง ปรับตัวดี', color: 'ลึกลับสีเขียว (Emerald)' },
    { name: 'พระพฤหัสบดี', meaning: 'มีสติปัญญา ใฝ่รู้ มีคุณธรรม', color: 'ลึกลับสีส้ม (Topaz)' },
    { name: 'พระศุกร์', meaning: 'รักสวยรักงาม โรแมนติก มีศิลปะในหัวใจ', color: 'ลึกลับสีฟ้า (Sapphire)' },
    { name: 'พระเสาร์', meaning: 'อดทน จริงจัง รอบคอบ', color: 'ลึกลับสีม่วง (Amethyst)' },
  ];
  const planet = planets[dayOfWeekIndex];

  // AI Reading Logic
  const aiReading = `คุณเกิดในวันที่มีพลังของ${planet.name} ทำให้คุณเป็นคน${planet.meaning} ลัคนาจีนระบุว่าคุณเกิดปี${branch} ซึ่งมีพลังของ${stem.element}${stem.polarity} ส่งผลให้คุณมีนิสัย${stem.meaning} คุณควรใช้จุดเด่นด้านนี้ในการดำเนินชีวิต และเสริมพลังสมดุลด้วยการทำสมาธิ หรืออยู่ใกล้ชิดธรรมชาติเพื่อให้จิตใจสงบและมีพลังรับมือกับทุกปัญหา`;

  return {
    element: stem.element,
    bazi: `${stem.element}${stem.polarity} ปี${branch}`,
    planet,
    aiReading,
    birthChart: {
      ascendant: planet.name,
      mainElement: stem.element,
      balance: stem.polarity === 'หยาง' ? 'พลังงานขับเคลื่อน (Active)' : 'พลังงานเก็บตัว (Passive)'
    }
  };
};
