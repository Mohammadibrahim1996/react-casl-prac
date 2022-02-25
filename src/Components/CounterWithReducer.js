import React, { useReducer } from 'react';

export const initailState = {
  countOne: 0,
  countTwo: 10,
};

export const reducer = (state, action) => {
  if (action.type === 'incrementOne') {
    return { ...state, countOne: state.countOne + action.data };
  }
  if (action.type === 'decrementOne') {
    return { ...state, countOne: state.countOne + action.data };
  }
  if (action.type === 'increamentTwo') {
    return { ...state, countTwo: state.countTwo + action.data };
  }
  if (action.type === 'decreamentTwo') {
    return { ...state, countTwo: state.countTwo + action.data };
  }
};
export const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initailState);
  return (
    <div>
      <h1>count1:{count.countOne}</h1>
      <button onClick={() => dispatch({ type: 'incrementOne', data: 5 })}>
        increament1
      </button>

      <button onClick={() => dispatch({ type: 'decrementOne', data: 5 })}>
        decrement1
      </button>
      <h1>count2:{count.countTwo}</h1>
      <button onClick={() => dispatch({ type: 'incrementOne', data: 5 })}>
        increament2
      </button>

      <button onClick={() => dispatch({ type: 'decrementOne', data: 5 })}>
        decrement
      </button>
    </div>
  );
};
