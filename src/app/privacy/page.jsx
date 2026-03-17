'use client';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-10">
          <span className="text-5xl block mb-4">🔒</span>
          <h1 className="text-3xl font-cinzel font-bold text-white mb-3">
            นโยบาย<span className="text-gradient-gold">ความเป็นส่วนตัว</span>
          </h1>
          <p className="text-midnight-300 font-sarabun">อัพเดทล่าสุด: มีนาคม 2569</p>
        </div>

        <div className="mystic-divider" />

        <div className="glass-card p-8 mt-8 space-y-8 font-sarabun text-midnight-200 leading-relaxed">

          <section>
            <h2 className="text-lg font-cinzel font-bold text-gold-400 mb-3">1. ข้อมูลที่เราเก็บ</h2>
            <p>Mystic Crystal Fortune เก็บข้อมูลต่อไปนี้บนอุปกรณ์ของคุณ (Local Storage) เท่านั้น:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-midnight-300">
              <li>วันเกิด เดือนเกิด ปีเกิด และเวลาเกิด (สำหรับคำนวณดวง)</li>
              <li>จำนวน Crystal และฟีเจอร์ที่ปลดล็อก</li>
              <li>ประวัติการเช็กอินประจำวัน</li>
            </ul>
            <div className="mt-3 p-3 rounded-lg border border-gold-400/20 bg-gold-400/5">
              <p className="text-gold-300 text-sm">
                ✦ ข้อมูลทั้งหมดถูกเก็บเฉพาะบนอุปกรณ์ของคุณ ไม่มีการส่งข้อมูลไปยังเซิร์ฟเวอร์ภายนอก
              </p>
            </div>
          </section>

          <div className="mystic-divider" />

          <section>
            <h2 className="text-lg font-cinzel font-bold text-gold-400 mb-3">2. วัตถุประสงค์การใช้ข้อมูล</h2>
            <ul className="list-disc list-inside space-y-1 text-midnight-300">
              <li>คำนวณดวงชะตา ราศี และตำแหน่งดาว</li>
              <li>จดจำการตั้งค่าและ Crystal balance ของคุณ</li>
              <li>มอบ Daily Reward ประจำวัน</li>
            </ul>
          </section>

          <div className="mystic-divider" />

          <section>
            <h2 className="text-lg font-cinzel font-bold text-gold-400 mb-3">3. การแบ่งปันข้อมูล</h2>
            <p>
              เราไม่ขาย ไม่แบ่งปัน และไม่เปิดเผยข้อมูลดวงชะตาของคุณให้แก่บุคคลที่สาม
              ข้อมูลของคุณเป็นความลับและปลอดภัยอย่างยิ่ง
            </p>
          </section>

          <div className="mystic-divider" />

          <section>
            <h2 className="text-lg font-cinzel font-bold text-gold-400 mb-3">4. สิทธิ์ของคุณ</h2>
            <p>คุณมีสิทธิ์ลบข้อมูลทั้งหมดออกจากอุปกรณ์ได้ตลอดเวลา โดยล้าง Local Storage ของ browser</p>
          </section>

          <div className="mystic-divider" />

          <section>
            <h2 className="text-lg font-cinzel font-bold text-gold-400 mb-3">5. การติดต่อ</h2>
            <p>หากมีคำถามเกี่ยวกับนโยบายนี้ กรุณาติดต่อเราผ่าน Crystal Chatbot หรือส่งข้อความในหน้าร้านค้า</p>
          </section>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="btn-mystic inline-flex items-center gap-2 px-6 py-3">
            ← กลับหน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  );
}
