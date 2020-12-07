import React,{useState} from 'react';
import Tweet from './Tweet';

function App(){

  const [isRed, setRed]=useState(false);
  const [count, setCount]=useState(0);
  
  const increment = () =>{
    setCount (count + 1);
    setRed(!isRed);
  }

  return(
    <div className="app">
      <h1 className={isRed ? "red" : ""}>Chang my colour!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <Tweet name="John" message="This is a random Tweet"/>
      <Tweet name="Kev" message="This is a second random Tweet"/>
      <Tweet name="Smith" message="This is a third Tweet"/>
    </div>
  );
}

export default App;