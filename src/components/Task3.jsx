
import React, { useState } from 'react'

function Task3() {
    const  myObj = [
        {
          id:1,
            name:'suraj',
            age : 22
        },
        {   id:2,
            name:'varun',
            age : 22
        },
        {
          id:3,
            name:'ak',
            age : 22
        },
]
  const [ items,setItems]=useState(myObj);
      const removeIt =(items)=>{
        console.log('click');
         const newItem = items.filter((ele)=>{
            return ele.id !== id;
            setItems(newItem)
         })
      }
      
  return (
   <> 
     {
        items.map((ele)=>{
          return   <h1> id:{ele.id} name:{ele.name}  <button onClick={ ()=>removeIt(ele.id)}> remove  </button></h1>
        })
     }
   

   </>
  )
}

export default Task3