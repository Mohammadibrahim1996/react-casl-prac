import React, { useState } from 'react';

export default function Child(props) {
  const [inputData, setInputData] = useState('');
  const inputDataHandle = () => {
    props.handleDisp(inputData);
  };
  const [isEnable, setIsEnable] = useState(false);
  return (
    <div>
      <input onChange={(e) => setInputData(e.target.value)} />
      <button onClick={(e) => inputDataHandle()}> Click</button>
      <h1> hi: {isEnable ? 'Hello' : 'Bye'} </h1>
    </div>
  );
}
