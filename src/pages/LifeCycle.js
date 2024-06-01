import React from 'react'

class Lifecycle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
        console.log("Component being Construct");
    }
    componentDidMount(){
        console.log("Component mounted");
    }

    componentDidUpdate(){
        console.log("Component update & Re-rendered");
    }

    // componentWillUnmount(){
    //     console.log("Component Unmount");
    // }

        increment = ()=>{
        this.setState((val)=>({
            count : val.count + 1
        }))
    }

    reset = () =>{
        this.setState({
            count : 0
        })
    }

    render(){
        
        console.log("Component rendered ");

        return(
            <> 
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={this.increment}>ADD</button>
                <button onClick={this.reset}>RESET</button>
            </div>
            </>
        )
    }
}

export default Lifecycle