import React, { useState, useEffect } from 'react';

const power = (val, pow) => {
  if (pow === 1) return val;
  return val * power(val, pow - 1);
};

const Task = () => {
  const [value, setValue] = useState(2);
  const [pow, setPow] = useState(2);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(
      +pow > 0
        ? power(+value, +pow)
        : 'Pow must be greater then 0',
    );
  }, [value, pow]);

  const handleChangeValue = (e) => setValue(e.target.value);
  const handleChangePow = (e) => setPow(e.target.value);

  return (
    <div>
      <input type="number" id="num" defaultValue={2} placeholder="Число" onChange={handleChangeValue} style={{ marginRight: 10 }} />
      <input type="number" defaultValue={2} placeholder="Степень" onChange={handleChangePow} style={{ marginRight: 10 }} />
      <span>{ result }</span>
    </div>
  );
};

export default Task;
