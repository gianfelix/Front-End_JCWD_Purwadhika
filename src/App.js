import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }
    return (
    <>
    <div className="App" align="center" >
      {/* <image width={"200px"} height={"200px"} src="/logo192.png" /> */}
      <p>Create PWA Example</p>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <p>edit baru</p>
    </div>
    </>
  );
}

export default App;
