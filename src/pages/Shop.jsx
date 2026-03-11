'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const products = [
  { 
    name: 'Amethyst', 
    benefit: 'ช่วยเพิ่มสมาธิและพลังจิตใจ ขจัดความเครียด', 
    price: '399', 
    image: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=400&h=400&fit=crop' 
  },
  { 
    name: 'Rose Quartz', 
    benefit: 'ดึงดูดความรัก เสริมเสน่ห์และความเมตตา', 
    price: '450', 
    image: 'https://images.unsplash.com/photo-1596401057404-58ebf4b1d64c?w=400&h=400&fit=crop' 
  },
  { 
    name: 'Citrine', 
    benefit: 'เรียกทรัพย์ ดึงดูดความมั่งคั่งและปัญญา', 
    price: '590', 
    image: 'https://images.unsplash.com/photo-1614917466540-3dcbeec4bfa1?w=400&h=400&fit=crop' 
  },
  { 
    name: 'Tiger Eye', 
    benefit: 'ปกป้องคุ้มครองและเสริมความกล้าหาญ', 
    price: '390', 
    image: 'https://images.unsplash.com/photo-1544473335-9cd7c9360563?w=400&h=400&fit=crop' 
  },
  { 
    name: 'Moonstone', 
    benefit: 'สัมผัสที่หก นำพาสันติสุขและความเยือกเย็น', 
    price: '550', 
    image: 'https://images.unsplash.com/photo-1596401057404-58ebf4b1d64c?w=400&h=400&fit=crop' 
  },
  {
    name: 'Labradorite',
    benefit: 'ปกป้องออร่า ดึงดูดความมหัศจรรย์และการตื่นรู้',
    price: '690',
    image: 'https://images.unsplash.com/photo-1574315042827-048035ed88c0?w=400&h=400&fit=crop'
  }
];

const Shop = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto z-10 relative">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300 mb-4 font-prompt">
          ✨ {t('crystal_shop_title')} ✨
        </h1>
        <p className="text-mystic-300 font-sarabun text-lg">
          {t('crystal_shop_desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div key={idx} className="backdrop-blur-xl bg-purple-900/40 border border-purple-500/30 rounded-3xl overflow-hidden hover:shadow-purple-500/40 hover:-translate-y-2 transition-all duration-300 shadow-xl group">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mystic-900 to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-100 font-prompt mb-2">
                {product.name}
              </h3>
              <p className="text-gray-300 text-sm h-10 mb-4">
                {product.benefit}
              </p>
              <div className="text-xl font-bold text-gold-400 mb-6">
                {t('price')} {product.price} {t('baht')}
              </div>
              <button className="w-full font-prompt font-semibold px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/40 hover:scale-105 active:scale-95">
                {t('buy_now').replace('🛒 ', '')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
