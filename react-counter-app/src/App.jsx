/* import { useState } from 'react'
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
export default App;


  */

import UserProfile from "./UserProfile";

function App() {
        const users = [
                  { id: 1, name: 'Bona S', job: 'Lead Developer', avatar: 'https://i.pravatar.cc/150?img=1' },
                  { id: 2, name: 'Alice Smith', job: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/150?img=2' },
                  { id: 3, name: 'Charlie Brown', job: 'Project Manager', avatar: 'https://i.pravatar.cc/150?img=3' }
];


return (
  <div>
    <h1 style={{ textAlign: 'center' }}>User Profiles</h1>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {users.map(user => (
        <UserProfile
          key={user.id} 
          name={user.name}
          job={user.job}
          avatar={user.avatar}
        />
      ))}
    </div>
  </div>
);
};
export default App;