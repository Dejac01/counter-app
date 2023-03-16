import { createContext, useState } from "react";
const CounterContext = createContext();
// 1. Create a new Provider
export const Provider = ({ children }) => {
  // Create a variable state
  const [counter, setCounter] = useState(0);
  // Create fn to increment and decrement
  const increment = () => {
    setCounter(counter + 5);
  };
  // Create fn to increment and decrement
  const decrement = () => {
    setCounter(counter-5);
  };
  //create an object to share with the rest of the app
  const obj = {
    counter: counter,
    increment: increment,
    decrement: decrement,
  };
  // Return the provider
  return (
    <CounterContext.Provider value={obj}>{children}</CounterContext.Provider>
  );
};
export default CounterContext;