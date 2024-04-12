
import { useState } from "react"
// type Data={
//     data:{
//        name:string,
//         age:number
//     }
// }
type Data={
 
    onget:()=>void
}


function Communication ({onget}:Data) {
   return(

    <div>
    
<button onClick={onget}>pcom</button>
    </div>
   
  )
}




function Parent(){
//     const data={name:'GENI',
// age:30}
const data=[1,2,3,4]
const [num,setNum]=useState(data)
const[isappear,setIsappear]=useState(true)
const onget=()=>{
    setIsappear(!isappear)
}



 
    return(
       
        <div>
            <p>isappear:{isappear?'yes':'no'}</p>   
            <Communication  onget={onget}/>
        </div>
    )
}
export default Parent