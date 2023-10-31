import React, { useState } from 'react'

const Uploadimg = () => {

   const [file, setfile]= useState(null);

   function hnadleChange(event){
      const upl= event.target.files[0]

      setfile(upl)
   }

  return (

    <>

    <input type="file" accept='image' onChange={hnadleChange}/>
     
     {file && <img src={URL.createObjectURL(file)}></img> }
   
   </>


    
  )
}

export default Uploadimg