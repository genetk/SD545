import { useState } from "react";

import Parent from "./communication ";

function App() {
  const [num,setNumber]=useState([1,2,3,4,5])
  const [sum,setSum]= useState(0)

  const sumOfNumbers=()=>{
    const total = num.reduce((accum,current)=>accum+current,0)
   setSum(total)
   
  
  }
  const average=(num:number[])=>{
    const total = num.reduce((accum,current)=>accum+current,0)
    const avg=total/num.length
     setSum(avg)
  }

 
  return (
   
    <div>
      <Parent/>
      
      {num.map((item,index)=>(
      <h1 key={index}>num:<h2>{item}</h2></h1>))}
     <h1>
        sum={sum}
      </h1>
      <button onClick={sumOfNumbers} >sum</button>
      {/* <button onClick={()=>average(num)}>average</button> */}
      <button onClick={()=>average(num)}>average</button>
      
    </div>
  )

}
interface User{
  name:string,
  age:number

}

const MyComponent = () => {
    const [name, setname] = useState({name:'geni'});
    const [user, setUser] = useState<User>();
   const handlename=()=>{
    setname({...name})
   }
    return (
        <div>
           
            <input type="text"  onChange={handlename}></input>
            <div>newvalue=</div>
            <button> new</button>
        </div>
    );
}



export default App;
