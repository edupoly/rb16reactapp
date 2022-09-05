import React from "react";
class Counter extends React.Component{
    constructor(props){
        super();
        console.log(props)
        this.state={
            count:props.start,
        }
    }
    inc=()=>{
        this.setState({count:this.state.count+this.props.step})
    }
    dec=()=>{
        this.setState({count:this.state.count-this.props.step})
    }
    render(){
        return(
            <div className="betterview">
                <h1>{this.props.gender} Students </h1>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.inc}>Inc</button>
                <button onClick={this.dec}>Dec</button>
            </div>
        )
    }
}
export default Counter