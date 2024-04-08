function sum(arr){
    return arr.filter(element=>element>20)
   .reduce((accum,currntvalue)=>
      accum+currntvalue,0)
      
}

const getNewArray=(str)=>{
    return str.filter((ele=>ele.length>=5&& ele.includes('a')))
}


const concat=(str,...arr)=>{
    let result =[...str,...arr];
    return result 
}
console.log(concat('hi', [1, 2, 3], ['Hello', 'world']));