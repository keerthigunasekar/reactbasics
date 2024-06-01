// // function component : 

// //  const HomePage = ()=>{
// //     return(
// //         <>
// //         <h1>Hello Homepage</h1>
// //         </>
// //     )
// // }

// // export default HomePage

// // rfc : 
// // import React from 'react'

// // export default function HomePage() {
// //   return (
// //     <>
// //     <div>
// //         <h2>HomePage</h2>
// //     </div>
// //     </>
// //   )
// // }

// //rfce

// // import React from 'react'
// // 
// // function HomePage() {
// //   return (
//     // <>
//     /* <h3>HomePage</h3> */
//     /* </> */
// //   )
// // }
// // 
// // export default HomePage

// // rafce

// // import React from 'react'
// // 
// // const HomePage = (props) => {
// //   return (
//     // <>
//     /* <h2>My name is {props.name}, my age is {props.age}</h2> */
//     /* </> */
// //   )
// // }
// // 
// // export default HomePage
// // 

// // import React from 'react'
// // 
// // const HomePage = ({name,age}) => {
// //   return (
//     // <>
//     /* <h2>My name is {name} , my age is {age} </h2> */
//     /* </> */
// //   )
// // }
// // 
// // export default HomePage
// // 

// // class component : 

// // import React, { Component } from 'react'

// //  class HomePage extends Component {
// //   render() {
//     // return (
//         // <>
//         /* <h2>My name is {this.props.name},my age is{this.props.age}</h2> */
//         /* </> */
//     // )
// //   }
// // }

// // export default HomePage

// import React, { Component } from 'react'
//  class HomePage extends Component {

//     state ={
//         count : 0
//     }  

//       addCount = () =>{
//         this.setState({
//             count : this.state.count + 1
//         })
//       }
//      removeCount = () =>{
//         if(this.state.count>0){
//             this.setState({
//                 count : this.state.count -1
//             })
//         }
//       }
//   render() {
//     return (
//         <>
//         <div>
//             <h2>Count : {this.state.count}</h2>
//             <button onClick={this.addCount}>Add</button>
//             <button onClick={this.removeCount}>Remove</button>
//         </div>
//         </>
//     )
//   }
// }

 
// export default HomePage


import React, { useEffect, useState } from 'react'
import { FaGooglePay } from "react-icons/fa";


const HomePage = ({name,age}) => {
    const [increment,setincrement]=useState(0)
    const [decrement,setDecrement]=useState(10)


    const handleAdd =() =>{
        setincrement(increment+1)
    }

    const handleRemove = () =>{
        if(decrement>0){
            setDecrement(decrement-1)
        }
    }

    // useEffect(()=>{
        // console.log("use effect calling");
    // })

    // useEffect(()=>{
        // console.log("use effect calling");
    // },[])

    useEffect(()=>{
        console.log("use effect calling");
    },[decrement])

    console.log("re-render");
        
    
  return (
    <div>
        <h1>Home Page</h1>
        <ul>
            <li>Class - State</li>
            <li>Function State - use state Hooks</li>
            <li>use Effect Hooks</li>
            <li>React Router Dom</li>
        </ul>
      <h1>increment : {increment}</h1>
      {/* <button onClick={()=>setcount(count+1)}>Add</button> */}
      {/* <button onClick={()=> (count>0)? setcount (count-1): ""}>remove</button> */}
      <button onClick={handleAdd}>Add</button>
      <h1>decrement : {decrement}</h1>
        <button onClick={handleRemove}>remove</button>

        <h2> <FaGooglePay style={{color:"green",fontSize:"55px"}} /> My name is {name}, My age is {age}</h2>
    </div> 
  )
}

export default HomePage



// // lifeCycle -
