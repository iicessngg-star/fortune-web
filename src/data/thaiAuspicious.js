// Thai Auspicious Timing Data
// ตารางฤกษ์มงคลรายวัน ตามโหราศาสตร์ไทย

// ดาวประจำวัน (Planetary Rulers)
export const dayPlanets = {
  0: { planet: 'อาทิตย์', symbol: '☀️', color: '#FF6B00', nameTh: 'วันอาทิตย์' },
  1: { planet: 'จันทร์',  symbol: '🌙', color: '#C0C0C0', nameTh: 'วันจันทร์'  },
  2: { planet: 'อังคาร', symbol: '♂',  color: '#FF4444', nameTh: 'วันอังคาร'  },
  3: { planet: 'พุธ',    symbol: '☿',  color: '#00CC44', nameTh: 'วันพุธ'     },
  4: { planet: 'พฤหัส',  symbol: '♃',  color: '#FF8800', nameTh: 'วันพฤหัส'   },
  5: { planet: 'ศุกร์',  symbol: '♀',  color: '#FF69B4', nameTh: 'วันศุกร์'   },
  6: { planet: 'เสาร์',  symbol: '♄',  color: '#8B008B', nameTh: 'วันเสาร์'   },
};

// ฤกษ์รายชั่วโมง (ชั่วโมงมงคล 8 ช่วง)
export const auspiciousHours = {
  0: [ // อาทิตย์
    { start: '06:00', end: '07:30', quality: 'ดีมาก', activity: 'เริ่มต้นสิ่งใหม่ การค้า', color: 'gold'   },
    { start: '07:30', end: '09:00', quality: 'พอใช้', activity: 'ประชุม การเดินทาง',       color: 'yellow' },
    { start: '09:00', end: '10:30', quality: 'ดี',    activity: 'การเงิน ลงนามสัญญา',     color: 'green'  },
    { start: '10:30', end: '12:00', quality: 'เลี่ยง',activity: 'หลีกเลี่ยงการเซ็น',      color: 'red'    },
    { start: '12:00', end: '13:30', quality: 'ดี',    activity: 'พบปะสังสรรค์ ความรัก',   color: 'green'  },
    { start: '13:30', end: '15:00', quality: 'พอใช้', activity: 'การเรียนรู้ ท่องเที่ยว', color: 'yellow' },
    { start: '15:00', end: '16:30', quality: 'ดีมาก', activity: 'วางแผน ตัดสินใจสำคัญ',  color: 'gold'   },
    { start: '16:30', end: '18:00', quality: 'เลี่ยง',activity: 'หลีกเลี่ยงการทะเลาะ',   color: 'red'    },
  ],
  1: [ // จันทร์
    { start: '06:00', end: '07:30', quality: 'ดีมาก', activity: 'ความรัก ครอบครัว',       color: 'gold'   },
    { start: '07:30', end: '09:00', quality: 'ดี',    activity: 'การค้า ติดต่อธุรกิจ',    color: 'green'  },
    { start: '09:00', end: '10:30', quality: 'เลี่ยง',activity: 'หลีกเลี่ยงการเดินทาง',  color: 'red'    },
    { start: '10:30', end: '12:00', quality: 'พอใช้', activity: 'ประชุม อบรม',            color: 'yellow' },
    { start: '12:00', end: '13:30', quality: 'ดีมาก', activity: 'ลงทุน การเงิน',          color: 'gold'   },
    { start: '13:30', end: '15:00', quality: 'ดี',    activity: 'สร้างสรรค์ ศิลปะ',       color: 'green'  },
    { start: '15:00', end: '16:30', quality: 'พอใช้', activity: 'ทั่วไป',                 color: 'yellow' },
    { start: '16:30', end: '18:00', quality: 'ดีมาก', activity: 'เจรจา สัมภาษณ์งาน',     color: 'gold'   },
  ],
  2: [ // อังคาร
    { start: '06:00', end: '07:30', quality: 'เลี่ยง',activity: 'หลีกเลี่ยงการขอเงิน',   color: 'red'    },
    { start: '07:30', end: '09:00', quality: 'ดีมาก', activity: 'กีฬา ออกกำลังกาย',       color: 'gold'   },
    { start: '09:00', end: '10:30', quality: 'ดี',    activity: 'การทหาร ความกล้า',       color: 'green'  },
    { start: '10:30', end: '12:00', quality: 'ดีมาก', activity: 'เจรจาธุรกิจ',           color: 'gold'   },
    { start: '12:00', end: '13:30', quality: 'พอใช้', activity: 'ทั่วไป',                 color: 'yellow' },
    { start: '13:30', end: '15:00', quality: 'เลี่ยง',activity: 'หลีกเลี่ยงการทะเลาะ',   color: 'red'    },
    { start: '15:00', end: '16:30', quality: 'ดี',    activity: 'การค้า ลงนาม',           color: 'green'  },
    { start: '16:30', end: '18:00', quality: 'ดีมาก', activity: 'ครอบครัว ความรัก',       color: 'gold'   },
  ],
  3: [ // พุธ
    { start: '06:00', end: '07:30', quality: 'ดีมาก', activity: 'การเรียน ติดต่อสื่อสาร', color: 'gold'   },
    { start: '07:30', end: '09:00', quality: 'ดีมาก', activity: 'ท่องเที่ยว การค้าขาย',  color: 'gold'   },
    { start: '09:00', end: '10:30', quality: 'ดี',    activity: 'ประชุม นำเสนองาน',       color: 'green'  },
    { start: '10:30', end: '12:00', quality: 'พอใช้', activity: 'สร้างสรรค์ งานศิลปะ',   color: 'yellow' },
    { start: '12:00', end: '13:30', quality: 'เลี่ยง',activity: 'หลีกเลี่ยงการกู้เงิน',  color: 'red'    },
    { start: '13:30', end: '15:00', quality: 'ดีมาก', activity: 'ลงทุน ตัดสินใจ',        color: 'gold'   },
    { start: '15:00', end: '16:30', quality: 'ดี',    activity: 'สัมภาษณ์ เจรจา',        color: 'green'  },
    { start: '16:30', end: '18:00', quality: 'พอใช้', activity: 'ทั่วไป',                 color: 'yellow' },
  ],
  4: [ // พฤหัส
    { start: '06:00', end: '07:30', quality: 'ดีมาก', activity: 'บูชาสิ่งศักดิ์สิทธิ์',  color: 'gold'   },
    { start: '07:30', end: '09:00', quality: 'ดี',    activity: 'การศึกษา กฎหมาย',        color: 'green'  },
    { start: '09:00', end: '10:30', quality: 'ดีมาก', activity: 'ลงทุน ธุรกิจใหญ่',      color: 'gold'   },
    { start: '10:30', end: '12:00', quality: 'ดี',    activity: 'เจรจา สัญญา',           color: 'green'  },
    { start: '12:00', end: '13:30', quality: 'เลี่ยง',activity: 'หลีกเลี่ยงการเริ่มงาน', color: 'red'    },
    { start: '13:30', end: '15:00', quality: 'ดีมาก', activity: 'ขอพร ทำบุญ',            color: 'gold'   },
    { start: '15:00', end: '16:30', quality: 'พอใช้', activity: 'ครอบครัว ท่องเที่ยว',   color: 'yellow' },
    { start: '16:30', end: '18:00', quality: 'ดี',    activity: 'การค้า ความรัก',         color: 'green'  },
  ],
  5: [ // ศุกร์
    { start: '06:00', end: '07:30', quality: 'ดีมาก', activity: 'ความรัก แต่งงาน',         color: 'gold'   },
    { start: '07:30', end: '09:00', quality: 'ดีมาก', activity: 'ความงาม ศิลปะ ดนตรี',     color: 'gold'   },
    { start: '09:00', end: '10:30', quality: 'ดี',    activity: 'การค้า ท่องเที่ยว',       color: 'green'  },
    { start: '10:30', end: '12:00', quality: 'เลี่ยง',activity: 'หลีกเลี่ยงการทะเลาะ',    color: 'red'    },
    { start: '12:00', end: '13:30', quality: 'ดีมาก', activity: 'พบปะเพื่อน สังสรรค์',    color: 'gold'   },
    { start: '13:30', end: '15:00', quality: 'ดี',    activity: 'การลงทุน การเงิน',        color: 'green'  },
    { start: '15:00', end: '16:30', quality: 'พอใช้', activity: 'ทั่วไป',                  color: 'yellow' },
    { start: '16:30', end: '18:00', quality: 'ดีมาก', activity: 'ครอบครัว ความรัก',        color: 'gold'   },
  ],
  6: [ // เสาร์
    { start: '06:00', end: '07:30', quality: 'เลี่ยง',activity: 'หลีกเลี่ยงการเริ่มต้น',  color: 'red'    },
    { start: '07:30', end: '09:00', quality: 'พอใช้', activity: 'งานหนัก ขุดดิน ก่อสร้าง',color: 'yellow' },
    { start: '09:00', end: '10:30', quality: 'ดี',    activity: 'การค้าเก่า ต่ออายุสัญญา', color: 'green'  },
    { start: '10:30', end: '12:00', quality: 'เลี่ยง',activity: 'หลีกเลี่ยงการลงทุนใหม่', color: 'red'    },
    { start: '12:00', end: '13:30', quality: 'พอใช้', activity: 'ทั่วไป',                  color: 'yellow' },
    { start: '13:30', end: '15:00', quality: 'ดีมาก', activity: 'ทำบุญ บริจาค สวดมนต์',   color: 'gold'   },
    { start: '15:00', end: '16:30', quality: 'ดี',    activity: 'การเรียน วิจัย',          color: 'green'  },
    { start: '16:30', end: '18:00', quality: 'ดีมาก', activity: 'สมาธิ จิตวิญญาณ',        color: 'gold'   },
  ],
};

// ราศีไทย (นักษัตร 12 ปี)
export const thaiZodiac = [
  { year: 'ชวด', animal: 'หนู',   emoji: '🐭', element: 'น้ำ', trait: 'ฉลาด ขยัน ปรับตัวเก่ง',      lucky: 'สีน้ำเงิน, ทองคำ'     },
  { year: 'ฉลู',  animal: 'วัว',  emoji: '🐮', element: 'ดิน', trait: 'อดทน มั่นคง น่าเชื่อถือ',     lucky: 'สีเหลือง ขาว'          },
  { year: 'ขาล',  animal: 'เสือ', emoji: '🐯', element: 'ไม้', trait: 'กล้าหาญ ทรงพลัง เด็ดขาด',    lucky: 'สีส้ม น้ำเงิน'         },
  { year: 'เถาะ', animal: 'กระต่าย',emoji:'🐰',element:'ไม้', trait: 'ใจดี อ่อนโยน โชคดี',          lucky: 'สีชมพู ม่วง'           },
  { year: 'มะโรง',animal: 'มังกร', emoji:'🐉', element: 'ดิน', trait: 'ยิ่งใหญ่ ทรงอำนาจ โชคลาภ',   lucky: 'สีทอง เงิน'            },
  { year: 'มะเส็ง',animal:'งู',   emoji: '🐍', element: 'ไฟ', trait: 'ฉลาด ลุ่มลึก มีเสน่ห์',      lucky: 'สีดำ เขียว'            },
  { year: 'มะเมีย',animal:'ม้า',  emoji: '🐎', element: 'ไฟ', trait: 'คล่องแคล่ว สดใส ผูกมิตรเก่ง', lucky: 'สีเหลือง ม่วง'         },
  { year: 'มะแม', animal: 'แพะ',  emoji: '🐐', element: 'ดิน', trait: 'อ่อนโยน มีศิลปะ เห็นอกเห็นใจ',lucky:'สีชมพู ขาว'           },
  { year: 'วอก',  animal: 'ลิง',  emoji: '🐒', element: 'ทอง', trait: 'ฉลาด คิดเร็ว ปรับตัวเก่ง',   lucky: 'สีทอง น้ำเงิน'         },
  { year: 'ระกา', animal: 'ไก่',  emoji: '🐓', element: 'ทอง', trait: 'ขยัน ตรงต่อเวลา มีระเบียบ',   lucky: 'สีทอง เหลือง น้ำตาล'  },
  { year: 'จอ',   animal: 'หมา',  emoji: '🐕', element: 'ดิน', trait: 'ซื่อสัตย์ จงรัก กล้า',       lucky: 'สีเขียว น้ำตาล แดง'  },
  { year: 'กุน',  animal: 'หมู',  emoji: '🐷', element: 'น้ำ', trait: 'เอื้อเฟื้อ สุภาพ ใจดี',       lucky: 'สีเหลือง เทา น้ำตาล'  },
];

export function getThaiZodiacYear(year) {
  // Reference: 1900 = ชวด (rat)
  const index = (year - 1900) % 12;
  return thaiZodiac[(index + 12) % 12];
}

export function getTodayAuspiciousHours() {
  const dayOfWeek = new Date().getDay(); // 0=Sun
  return auspiciousHours[dayOfWeek] || [];
}

export function getTodayPlanet() {
  const dayOfWeek = new Date().getDay();
  return dayPlanets[dayOfWeek];
}

// Weekly fortune summary (shifts by week number)
export function getWeeklyFortune() {
  const weekNum = Math.ceil(new Date().getDate() / 7);
  const arr = [
    { title: 'การเงิน', desc: 'โอกาสทองมาถึง',      score: 82, trend: '↑' },
    { title: 'การงาน',  desc: 'ผลงานโดดเด่น',       score: 77, trend: '→' },
    { title: 'ความรัก', desc: 'ความสัมพันธ์อบอุ่น', score: 88, trend: '↑' },
    { title: 'สุขภาพ',  desc: 'พักผ่อนให้เพียงพอ', score: 70, trend: '↓' },
  ];
  return arr;
}
