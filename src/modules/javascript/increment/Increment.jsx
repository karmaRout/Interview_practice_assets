import React, {useState,useRef} from "react";

const Increment = () =>{
  const [count,setCount] = useState(0);
  const pauseRef = useRef(false);
  // console.log("PAGE RENDER");
  const calculate = () =>{
    let i = 0;
    let delay = 0;
    while(i < 10){
      const timeOutFun = setTimeout(()=>{
        if(!pauseRef.current){
          setCount(prevState => prevState +1);
        }
      },delay)
      delay += 1000;
      i++;
    }
  }
  const pause =()=>{
    pauseRef.current = true;
  }
  const resume=()=>{
    pauseRef.current = false;
  }
  return(
    <div>
      <h1 className="text-3xl font-bold">Count: {count}</h1>
      <button onClick={()=>calculate()}>Increment</button>
      <button onClick={()=>pause()}>Pause</button>
      <button onClick={()=>resume()}>Resume</button>
    </div>
  )
}
export default Increment;