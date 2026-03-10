import React, { useState } from 'react';

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
    <div className="mystic-card max-w-lg mx-auto w-full relative z-10">
      <h2 className="text-3xl text-center text-gold-400 mb-6 font-bold">วิเคราะห์ดวงจากวันเกิด</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-mystic-400 mb-1 text-sm">วันที่ (1-31)</label>
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
            <label className="block text-mystic-400 mb-1 text-sm">เดือน</label>
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
          <label className="block text-mystic-400 mb-1 text-sm">ปีเกิด (พ.ศ.)</label>
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
          <label className="block text-mystic-400 mb-1 text-sm">เวลาเกิด</label>
          <input 
            type="time" 
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mystic-input"
            required
          />
        </div>

        <button type="submit" className="mystic-btn w-full mt-6 text-lg">
          วิเคราะห์ดวง
        </button>
      </form>
    </div>
  );
};

export default BirthForm;
