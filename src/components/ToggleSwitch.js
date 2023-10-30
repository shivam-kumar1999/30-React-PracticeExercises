import React, { useState } from 'react'

const ToggleSwitch = () => {


    const [toggle, setToggle]= useState(false);

    function changeHandler(){
        setToggle(!toggle)
    }
    
  return (

    <>

     <input type="checkbox"  onChange={changeHandler}/>
     <p>{ toggle ? " oN" : "OF" }</p>

    </>
   

  )
}

export default ToggleSwitch;