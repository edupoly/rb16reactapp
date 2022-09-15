import React, { Component } from 'react'

export class Counter2 extends Component {
    count=0;
    inc=()=>{
        this.count++;
        console.log(this.forceUpdate())

    }
    dec=()=>{
        this.count--;
        console.log(this.count)
    }
    render() {
        return (
        <div className='betterview'>
            <h1>Another Counter:{this.count}</h1>
            <button onClick={this.inc}>inc</button>
            <button onClick={this.dec}>dec</button>
        </div>
        )
    }
}

export default Counter2