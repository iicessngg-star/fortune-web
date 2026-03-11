'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const months = [
  { value: '01', label: 'มกราคม' },
  { value: '02', label: 'กุมภาพันธ์' },
  { value: '03', label: 'มีนาคม' },
  { value: '04', label: 'เมษายน' },
  { value: '05', label: 'พฤษภาคม' },
  { value: '06', label: 'มิถุนายน' },
  { value: '07', label: 'กรกฎาคม' },
  { value: '08', label: 'สิงหาคม' },
  { value: '09', label: 'กันยายน' },
  { value: '10', label: 'ตุลาคม' },
  { value: '11', label: 'พฤศจิกายน' },
  { value: '12', label: 'ธันวาคม' },
];

const BirthForm = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    day: '',
    month: '01',
    year: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.day || formData.day < 1 || formData.day > 31) {
      alert('กรุณากรอกวันที่ให้ถูกต้อง (1-31)');
      return;
    }
    if (!formData.year || formData.year.length !== 4) {
      alert('กรุณากรอกปี พ.ศ. ให้ถูกต้อง');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div id="birth-form" className="max-w-3xl mx-auto w-full relative z-10 px-4 mt-8 pb-12">
      {/* Decorative crystals (using emojis for now as SVGs aren't available locally, but styled cleanly) */}
      <div className="absolute top-12 right-0 text-5xl md:text-6xl drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] opacity-80 rotate-12 -z-10">🔮</div>
      <div className="absolute bottom-8 left-4 text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] opacity-70 -rotate-12 -z-10">💎</div>
      <div className="absolute bottom-16 right-4 text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] opacity-60 rotate-45 -z-10">✨</div>

      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#e1d5c5] mb-12 font-playfair tracking-wider drop-shadow-lg flex items-center justify-center gap-3">
        <span className="text-3xl">🔮</span> {t('birth_form_title')}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative">
        
        {/* Name row */}
        <div className="relative">
          <label className="block text-gray-300/80 mb-2 pl-4 text-[11px] uppercase font-semibold tracking-widest">{t('name')}</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mystic-input text-left px-8"
            placeholder={t('name_placeholder')}
            required
          />
        </div>

        {/* Date Row */}
        <div className="grid grid-cols-3 gap-3 md:gap-5">
          <div className="relative">
            <label className="block text-gray-300/80 mb-2 pl-4 text-[11px] uppercase font-semibold tracking-widest text-left">{t('day')}</label>
            <input 
              type="number" 
              name="day"
              min="1" max="31"
              value={formData.day}
              onChange={handleChange}
              className="mystic-input text-center"
              placeholder="DD"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-gray-300/80 mb-2 pl-4 text-[11px] uppercase font-semibold tracking-widest text-left">{t('month')}</label>
            <select 
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="mystic-input text-center appearance-none cursor-pointer"
            >
              {months.map(m => (
                <option key={m.value} value={m.value} className="bg-[#0b0512]">{m.label}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <label className="block text-gray-300/80 mb-2 pl-4 text-[11px] uppercase font-semibold tracking-widest text-left">{t('year')}</label>
            <input 
              type="number" 
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="mystic-input text-center"
              placeholder="YYYY"
              required
            />
          </div>
        </div>

        {/* Time row */}
        <div className="relative">
          <label className="block text-gray-300/80 mb-2 pl-4 text-[11px] uppercase font-semibold tracking-widest">{t('birth_time')}</label>
          <input 
            type="time" 
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mystic-input text-left px-8 cursor-text"
            required
          />
        </div>

        <div className="pt-6 relative z-10 w-full flex justify-center">
          <button type="submit" className="mystic-btn w-full md:w-3/4 max-w-sm">
            {t('submit_fortune')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BirthForm;
