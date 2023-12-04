import React, { useState } from 'react'

function Task1() {
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
  const [ myArr,setMyArr]=useState(myObj);
 
  let clear = ()=>{
    setMyArr([])
    console.log('click');
  }
   let update =()=>{
    setMyArr( myArr )
   }
   const remove =(vall)=>{
    const myNewArry = myArr.filter((ele)=>{
      return ele.id !==vall
      setMyArr(myNewArry)
      console.log('click');
    })
    // const handleDelete = (itemId) => {
    //   const updatedItems = items.filter(item => item.id !== itemId);
    //   setItems(updatedItems);
    // };
   }
  return (
    <>
     {
        myArr.map((ele)=>{
           return ( <h1> id {ele.id} name : {ele.name} & age : {ele.age} <button onClick={()=>remove(ele.age)}> remove </button></h1>
           )
        })


        
     }
      <h1>
        hello
      </h1>
     <button onClick={()=>clear()} className='bg-slate-800 #f8fafc'> clear </button> <br></br>
     <button onClick={()=>update()} className='bg-slate-800 #f8fafc'> update </button>
    </>
  )
}

export default Task1