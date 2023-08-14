import React, { useState } from 'react'

const Counter = () => {
    
    const [number,setNumber]=useState(0);
    function handleClick(e)
    {
        e.stopPropagation();
        setTimeout(()=>{
           // setNumber(number+1);
           setNumber(number=>number+1)
        },2000)
        
        console.log(number);
    }
  return (
    <div>
      <h1 style={{color:'white'}}>{number}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Counter
