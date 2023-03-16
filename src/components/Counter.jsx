import React, { useContext } from "react";
import CounterContext from "../contexts/CounterContext";
const Counter = () => {
  // Retrieve your context from the provider
  const { counter, increment, decrement } = useContext(CounterContext);
  return (
    <div>
      <h1>{counter}</h1>
      <div className="button-container">
        <button
          onClick={() => {
            return decrement();
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            return increment();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default Counter;