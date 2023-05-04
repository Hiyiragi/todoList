import { useState } from "react";
import { useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    console.log("setup");

    return ()=> {
        console.log("cleanup");
    }
  }, [])
  

  return(
    <div>
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <h2>{counter}</h2>
      <button onClick={()=>setCounter(counter-1)}>-</button>
    </div>
  )
}


export default Counter;