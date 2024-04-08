import React, { useState } from 'react';

const Counter= () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={decrementCount}>decrement Count</button>
    </div>
   
  );
};
// Create a temperature converter component that allows users to enter a temperature in Celsius and converts it to Fahrenheit
// when a button is clicked. Use useState to manage the temperature input and output.
function Temperature() {
  const [temp, setTemp] = useState(0);

  const celsiusToFahrenheit = () => {
    const Fahrenheit = temp * 9/5 + 32;
    setTemp(Fahrenheit);
  }

  const fahrenheitToCelsius = () => {
    const celsius = (temp - 32) * 5/9;
    setTemp(celsius);
  }

  return (
    <div>
      <h1>{temp}</h1>
      <button onClick={celsiusToFahrenheit}>Convert to Fahrenheit</button>
      <button onClick={fahrenheitToCelsius}>Convert to Celsius</button>
    </div>
  );
  }


function RandomNumberGenerator() {
 const [randomNumber, setRandomNumber] = useState<number|null>(null);

  const generateRandomNumber = () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randomNum);
  };

  return (
    <div>
      <h2>Random Number Generator</h2>
      <Counter/>
      <Temperature/>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber && <p>Generated Number: {randomNumber}</p>}
    </div>
  );
}

export default RandomNumberGenerator
