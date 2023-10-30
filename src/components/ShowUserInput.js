import React, { useState } from 'react'

const ShowUserInput = () => {

    const [input, setInput]= useState("");

    function changeHandler(event){
       setInput( [event.target.value] );
    }

  return (

    <div>

        <form action="">

            <input type="text"   onChange={changeHandler} value={input}/>
            <p>User input :  {input}</p>
        </form>

    </div>
  )
}

export default ShowUserInput;