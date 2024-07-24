import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(counter * 6000);
  }, [counter]);

  const addValue = () => {
    if (counter < 10) {
      console.log("Clicked", counter);
      setCounter(counter + 1);
    } else {
      alert('Aukaat mein !!!');
    }
  };

  const subValue = () => {
    if (counter > 0) {
      console.log("Clicked", counter);
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Just_React</h1>
      <h2>Russian: {counter}</h2>
      <h3>Bill (+GST): {amount}</h3>
      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button onClick={subValue}>Remove Value</button>
    </>
  );
}

export default App;
