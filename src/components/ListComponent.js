import React from 'react'

const ListComponent = () => {

       const items =["item1", "item2", "item3", "item4", "item5"]

  return (

    <div>

        <ul>
            {items.map((item, index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>

    </div>

  )
}

export default ListComponent;