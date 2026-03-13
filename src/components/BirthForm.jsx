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
    <div id="birth-form" className="max-w-2xl mx-auto w-full relative z-10 px-4 mt-4 pb-12">
      
      {/* Glassmorphic Card Container */}
      <div
        className="relative rounded-3xl px-8 py-10 overflow-hidden"
        style={{
          background: 'rgba(20, 10, 40, 0.5)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '1px solid rgba(147, 51, 234, 0.25)',
          boxShadow: '0 0 60px rgba(114, 9, 183, 0.15), 0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
        }}
      >
        {/* Decorative corner crystals */}
        <div className="absolute top-6 right-6 text-4xl drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] opacity-80" style={{filter: 'drop-shadow(0 0 15px rgba(168,85,247,0.8))'}}>💎</div>
        <div className="absolute bottom-8 left-4 text-3xl opacity-70" style={{filter: 'drop-shadow(0 0 12px rgba(168,85,247,0.7))'}}>💎</div>

        {/* Form Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-cinzel tracking-wider"
          style={{
            background: 'linear-gradient(135deg, #eaddcf, #f7ebd4, #cba365)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: 'none',
            filter: 'drop-shadow(0 0 20px rgba(203,163,101,0.4))'
          }}
        >
          🔮 {t('birth_form_title')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name row */}
          <div>
            <label className="block text-gray-300/70 mb-1.5 text-xs font-sarabun tracking-widest uppercase">{t('name')}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mystic-input"
              placeholder={t('name_placeholder')}
              required
            />
          </div>

          {/* Date Row */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-gray-300/70 mb-1.5 text-xs font-sarabun tracking-widest uppercase">{t('day')}</label>
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
            <div>
              <label className="block text-gray-300/70 mb-1.5 text-xs font-sarabun tracking-widest uppercase">{t('month')}</label>
              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
                className="mystic-input text-center appearance-none cursor-pointer"
              >
                {months.map(m => (
                  <option key={m.value} value={m.value} style={{background: '#1a0a2e', color: '#f7ebd4'}}>{m.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-300/70 mb-1.5 text-xs font-sarabun tracking-widest uppercase">{t('year')}</label>
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
          <div>
            <label className="block text-gray-300/70 mb-1.5 text-xs font-sarabun tracking-widest uppercase">{t('birth_time')}</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mystic-input cursor-text"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button type="submit" className="mystic-btn w-full tracking-[0.2em]">
              {t('submit_fortune')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BirthForm;
