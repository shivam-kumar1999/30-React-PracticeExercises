import React, { useEffect, useState } from 'react'

const ApiCall = () => {


    const [data, setData]=useState("")

    useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(( response)=>response.json())
          .then((getData)=>setData(getData))
    }, [])

  return (

    <div>
         {
         data ? (
               <div>
                   <h1>Title : {data.title}</h1>
                   <h1>Body : {data.body}</h1>
               </div>
         ):
         (
            <div>Loading...</div>
         )


         }


    </div>

  )
}

export default ApiCall;