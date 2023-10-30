import React, { useEffect, useState } from 'react'

const Timer = () => {

     const [time , setTime]= useState(60);

     useEffect(()=>{
        if(time>0){
            setTimeout(()=>{
                setTime(time-1)
            },1000)
        }
     },[time])

  return (

   

    <div>
        time left : {time}
    </div>

  )
}

export default Timer;