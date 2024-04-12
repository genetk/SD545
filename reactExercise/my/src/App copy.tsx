import React, { ChangeEvent, } from "react";
import { useState ,useEffect} from "react"

function Appc(){
  const [num,setNum]=useState(0);
  const [sum,setSum]=useState(0);
  
  const sumnumber=()=>{
const updated=
    setNum(num+num)
  } 
 
  return (
    <>
    </>
  )



//   const [count, setCounter] = useState(1);
//   const [time, setTime] = useState(1);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//        setTime(time*count)
//     }, 1000);

//     return () => clearTimeout(timeoutId);
//   }, [count]); // Add timer to the dependency array

//   return (
//     <div>
//       <p>Timer: {count} seconds</p>
//       <button onClick={()=>setCounter(count+1)}></button>
//       <p>time={time}</p>
//     </div>
//   );
// }
  }
export default Appc;
