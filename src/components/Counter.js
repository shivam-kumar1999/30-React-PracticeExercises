import React, { useState } from 'react'

const Counter = () => {

    const [no , setNo]= useState(0);



  return (
    <div>
        
              <button onClick={()=>setNo(no+1)}>increment</button>   <br />
     <br />   <div>{no}</div>               <br />
              <button onClick={()=> no>0 ?   setNo(no-1) : setNo(0)}>decrement</button>

    </div>
  )
}

export default Counter