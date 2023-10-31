import React, { useState } from 'react'

const ChangeBG = () => {

   const [background, setBackground]= useState('yellow');

   function changeHandler(){
      const change = background === 'yellow' ? 'pink' : 'yellow';

      setBackground(change);
   }



  return (

    <div  onClick={changeHandler}
    style={{
      height:'200px' ,
       width:'200px',
        cursor:'pointer'
       }} 
      > 
       
       Click me to ChangeBG </div>

  )
}

export default ChangeBG;