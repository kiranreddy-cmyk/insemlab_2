import React, { useState } from 'react';
import './App.css';

// React Functional Component
function App() {
  // Requirement 2: Create a variable named number with an initial value of 7
  // Using useState to allow dynamic input updates
  const [number, setNumber] = useState(7);

  return (
    <div className="container">
      {/* Design Requirement: Heading */}
      <h2>Even or Odd Number Checker</h2>

      {/* Requirement 10: Simple input field to enter a different number dynamically */}
      <div className="input-section">
        <label htmlFor="num-input">Enter a Number: </label>
        <input
          id="num-input"
          type="number"
          value={number}
          onChange={(e) =>
            setNumber(e.target.value === '' ? '' : Number(e.target.value))
          }
          placeholder="Enter number"
        />
      </div>

      {/* Requirement 9: Display the entered number clearly */}
      <p className="number-display">
        Entered Number: <strong>{number !== '' ? number : 'None'}</strong>
      </p>

      {/* Requirements 3, 4, 5, 6, 8 & Design: Result in a separate box using ternary operator (? :) and modulus (%) */}
      <div className="result-container">
        <h3>Result:</h3>
        <div className="result-box">
          {number === '' ? (
            <span className="info-text">Please enter a number</span>
          ) : number % 2 === 0 ? (
            <span className="even">Even Number</span>
          ) : (
            <span className="odd">Odd Number</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
