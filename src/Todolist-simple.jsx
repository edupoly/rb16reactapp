import React, { Component } from 'react'
import TodoSimple from './TodoSimple';

export class TodolistSimple extends Component {
    constructor(){
        super();
        this.state={
            todos:['carwash','bed book','project notes']
        }
    }
    delTask = (i)=>{
        var temp = [...this.state.todos]
        temp.splice(i,1)
        this.setState({todos:[...temp]})
    }
  render() {
    return (
        <div className='betterview'>
            {
                this.state.todos.map((t,i)=>{
                    return(<TodoSimple t={t} i={i} key={i} delTask={this.delTask}></TodoSimple>)
                })
            }
        </div>
    )
  }
}

export default TodolistSimple