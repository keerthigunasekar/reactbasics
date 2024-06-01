import React, { useState } from 'react'

const Vote = () => {
    const [age,setAge]=useState("")

    const [message,setMessage]=useState("")

    const handleCheck = () =>{
        // if(age>=18){
            // setMessage("you are eligible to vote")
        // }else{
            // setMessage("you are not eligible to vote")
        // }
        switch(true){
            case age>100 : setMessage("age should be below 100")
            break;
            case age>=18 : setMessage("you are eligible to vote")
            break
            case age<0 : setMessage("age should not be in negative value")
            break   
            case age<18 : setMessage("you are not eligible to vote")
            break
        }
    }

  return (
    <div>
      <h2>Vote Calculator</h2>
      <input  type='number' onChange={(e)=>setAge(e.target.value)} placeholder='Enter your age' />
      <h1>Entered Age is :  {age}</h1>
      <h1>Message :  {message}</h1>
      <button onClick={handleCheck}>Check</button>
    </div>
  )
}

export default Vote
