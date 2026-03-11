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
    <div id="birth-form" className="mystic-card max-w-2xl mx-auto w-full relative z-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 font-prompt tracking-wide drop-shadow-sm">
        {t('birth_form_title')}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name row */}
        <div>
          <label className="block text-purple-200/80 mb-2 text-sm font-medium tracking-wide">{t('name')}</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mystic-input text-center md:text-left"
            placeholder={t('name_placeholder')}
            required
          />
        </div>

        {/* Date Row */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          <div>
            <label className="block text-purple-200/80 mb-2 text-sm font-medium tracking-wide text-center md:text-left">{t('day')}</label>
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
            <label className="block text-purple-200/80 mb-2 text-sm font-medium tracking-wide text-center md:text-left">{t('month')}</label>
            <select 
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="mystic-input text-center appearance-none"
            >
              {months.map(m => (
                <option key={m.value} value={m.value} className="bg-[#0b0512]">{m.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-purple-200/80 mb-2 text-sm font-medium tracking-wide text-center md:text-left">{t('year')}</label>
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
          <label className="block text-purple-200/80 mb-2 text-sm font-medium tracking-wide">{t('birth_time')}</label>
          <input 
            type="time" 
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mystic-input text-center md:text-left"
            required
          />
        </div>

        <button type="submit" className="mystic-btn w-full mt-4">
          {t('submit_fortune')}
        </button>
      </form>
    </div>
  );
};

export default BirthForm;
