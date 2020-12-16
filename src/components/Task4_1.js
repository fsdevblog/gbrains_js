import React, { useState } from 'react';

const intObj = (int) => {
  if (int > 999 || int < 0) {
    throw new Error('Accept number in range 0..999');
  }

  const hundreds = Math.floor(int / 100);
  const tens = Math.floor((int - (hundreds * 100)) / 10);
  const units = Math.floor(int - ((hundreds * 100) + (tens * 10)));

  return {
    hundreds, tens, units,
  };
};

export default function () {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    try {
      const r = intObj(parseInt(e.target.value, 10));
      setValue(r);
    } catch (err) {
      setValue(err.message);
    }
  };

  return (
    <>
      <input type="number" onChange={handleChange} />
      <span>{ typeof value === 'string' ? value : JSON.stringify(value)}</span>
    </>
  );
}
