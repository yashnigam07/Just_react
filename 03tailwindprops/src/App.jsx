import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const myObj = {
    username: "Yash Nigam",
    age: 19
  };

  const newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-white text-black p-5 rounded-xl">Tailwind Test</h1>
      {/* Passing username prop to the Card component */}
      <Card username={myObj.username} btnText="click me" />
      <Card username={myObj.username} btnText="Visit Me" />
      {/* If you want to pass other props, update the Card component accordingly */}
    </>
  );
}

export default App;
