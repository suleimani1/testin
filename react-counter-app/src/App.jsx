import { useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
      <div style={{textAlign:'center', marginTop: '50px'}}>
      <h1>React counter</h1>
      <p style={{fontSize: '50px'}}>{count}</p>

      <div>
      <button onClick={handleIncrement} style={{marginRight: '15px', fontSize: '25px'}}>increment</button>
      <button onClick={handleDecrement} style={{fontSize: '25px'}}>Decrement</button>
      
      </div>
      </div>


    
  );
}

export default App
