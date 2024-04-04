import React, { useState } from 'react';

const Counter= () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};




function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randomNumber);
  };

  return (
    <div>
      <h2>Random Number Generator</h2>
      <Counter/>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber && <p>Generated Number: {randomNumber}</p>}
    </div>
  );
}

export default RandomNumberGenerator
