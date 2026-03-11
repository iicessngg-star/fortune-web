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
    <div id="birth-form" className="mystic-card max-w-2xl mx-auto w-full relative z-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 font-prompt tracking-wide drop-shadow-sm">
        {t('birth_form_title')}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-purple-200/80 mb-2 text-sm font-medium tracking-wide">{t('day')} (1-31)</label>
            <input 
              type="number" 
              name="day"
              min="1" max="31"
              value={formData.day}
              onChange={handleChange}
              className="mystic-input"
              placeholder="1-31"
              required
            />
          </div>
          <div>
            <label className="block text-purple-200/80 mb-2 text-sm font-medium tracking-wide">{t('month')}</label>
            <select 
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="mystic-input"
            >
              {months.map(m => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-purple-200/80 mb-2 text-sm font-medium tracking-wide">{t('year')}</label>
          <input 
            type="number" 
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="mystic-input"
            placeholder="e.g. 2540"
            required
          />
        </div>

        <div>
          <label className="block text-purple-200/80 mb-2 text-sm font-medium tracking-wide">{t('birth_time')}</label>
          <input 
            type="time" 
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mystic-input"
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
