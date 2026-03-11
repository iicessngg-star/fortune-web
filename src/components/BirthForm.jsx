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
    <div id="birth-form" className="mystic-card max-w-2xl mx-auto w-full relative z-10 p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-100 mb-8 font-prompt">
        {t('birth_form_title')}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 mb-2 text-sm font-medium">{t('day')} (1-31)</label>
            <input 
              type="number" 
              name="day"
              min="1" max="31"
              value={formData.day}
              onChange={handleChange}
              className="mystic-input"
              placeholder="เช่น 15"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2 text-sm font-medium">{t('month')}</label>
            <select 
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="mystic-input text-gray-100 bg-mystic-900"
            >
              {months.map(m => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-400 mb-2 text-sm font-medium">{t('year')}</label>
          <input 
            type="number" 
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="mystic-input"
            placeholder="เช่น 2540"
            required
          />
        </div>

        <div>
          <label className="block text-gray-400 mb-2 text-sm font-medium">{t('birth_time')}</label>
          <input 
            type="time" 
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mystic-input text-gray-100"
            required
          />
        </div>

        <button type="submit" className="w-full mt-8 text-lg md:text-xl font-prompt font-semibold px-6 py-4 rounded-xl bg-white text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.01] hover:bg-gray-100 focus:outline-none active:scale-[0.98]">
          {t('submit_fortune')}
        </button>
      </form>
    </div>
  );
};

export default BirthForm;
