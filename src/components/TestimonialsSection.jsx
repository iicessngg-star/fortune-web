import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'คุณแพรวา ส.',
      review: 'หลังจากใช้หิน Amethyst รู้สึกสมาธิดีขึ้นมาก การงานราบรื่นขึ้นอย่างเห็นได้ชัด',
      rating: 5,
      crystal: 'Amethyst'
    },
    {
      name: 'คุณนนท์ธวัช ก.',
      review: 'คำทำนายแม่นยำมากครับ หิน Citrine สวยมาก ใส่แล้วรู้สึกมั่นใจในการคุยงานลูกค้ายิ่งขึ้น',
      rating: 5,
      crystal: 'Citrine'
    },
    {
      name: 'คุณมิ้นท์ ว.',
      review: 'เว็บสวยมาก วิเคราะห์ดวงละเอียด ซื้อ Rose Quartz มาใส่แล้วรู้สึกพลังงานบวกรอบตัวดีขึ้น!',
      rating: 5,
      crystal: 'Rose Quartz'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-24 mb-12 z-10 relative">
      <h2 className="text-3xl text-center text-gold-400 mb-8 font-bold font-prompt">
        ✨ รีวิวจากผู้ศรัทธาพลังหินมงคล ✨
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="backdrop-blur-xl bg-purple-900/40 border border-purple-500/30 rounded-3xl p-6 shadow-xl relative overflow-hidden group hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300">
            <div className="flex gap-1 mb-3 text-gold-400">
              {[...Array(t.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            
            <p className="text-sm text-gray-200 font-sarabun italic leading-relaxed mb-4">
              "{t.review}"
            </p>
            
            <div className="flex items-center justify-between border-t border-purple-500/20 pt-4">
              <span className="text-xs text-mystic-300 font-bold">{t.name}</span>
              <span className="text-xs text-purple-400 font-semibold px-2 py-1 bg-mystic-900/60 rounded-lg">
                {t.crystal}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
