import React, { useState } from 'react';

function EvenOddChecker() {
 
  const [number, setNumber] = useState(4);

  
  const isEven = number % 2 === 0;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Even or Odd Checker</h2>
      <p>Current Number: <strong>{number}</strong></p>
      
      {}
      <p>
        This number is: <span style={{ color: isEven ? 'green' : 'blue' }}>{isEven ? 'Even' : 'Odd'}</span>
      </p>

      {}
      <button onClick={() => setNumber(number + 1)}>Increment (+1)</button>
      <button onClick={() => setNumber(number - 1)} style={{ marginLeft: '10px' }}>Decrement (-1)</button>
    </div>
  );
}

export default EvenOddChecker;