import React, { useState, useEffect } from 'react';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const Task = () => {
  const [varA, setVarA] = useState(getRandomInt(-15, 15));
  const [varB, setVarB] = useState(getRandomInt(-15, 15));
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (varA >= 0 && varB >= 0) {
      setResult(varA - varB);
    } else if (varA < 0 && varB < 0) {
      setResult(varA * varB);
    } else {
      setResult(varA + varB);
    }
  }, [varA, varB]);

  const handleVarA = (e) => {
    valSetter(e.target.value, setVarA);
  };

  const handleVarB = (e) => {
    valSetter(e.target.value, setVarB);
  };

  const valSetter = (value, setter) => {
    const v = parseInt(value, 10);
    setter(isNaN(v) ? value : v);
  };

  return (
    <>
      <input
        type="number"
        defaultValue=""
        style={{ maxWidth: 100, marginRight: 10 }}
        placeholder="A variable"
        value={varA}
        onChange={handleVarA}
      />
      <input
        type="number"
        defaultValue=""
        style={{ maxWidth: 100, marginRight: 10 }}
        placeholder="B variable"
        value={varB}
        onChange={handleVarB}
      />
      { result }
    </>
  );
};

export default Task;
