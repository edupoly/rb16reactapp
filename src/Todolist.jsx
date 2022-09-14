import React, { Component } from 'react'
import Todo from './Todo';

export class Todolist extends Component {
    constructor(){
        super();
        this.state={
            task:'',
            todos:[
                {title:'compassbox',status:false},
                {title:'manu fee',status:false},
                {title:'moksha school',status:true},
                {title:'cypress',status:false},
                {title:'puppeteer',status:true},
            ],
            filterKey:'notcompleted'
        }
    }
    deleteTodo = (ind)=>{
        var temp = [...this.state.todos]
        temp.splice(ind,1);
        this.setState({todos:[...temp]})
    }
    undo = (ind)=>{
        var temp = [...this.state.todos]
        temp[ind].status=false;
        this.setState({todos:[...temp]})
    }
    done = (ind)=>{
        var temp = [...this.state.todos]
        temp[ind].status=true;
        this.setState({todos:[...temp]})
    }
    updateFilterKey=(k)=>{
        this.setState({filterKey:k})
    }
    addTask=()=>{
        var newtask = {title:this.state.task,status:false}
        console.log(newtask)
        this.setState({todos:[...this.state.todos,newtask]})
    }
    componentDidMount(){
        console.log("Todolist Component mounted")
    }
  render() {
    return (
        <div className='betterview'>
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{this.setState({task:e.target.value})}}/>
            <button onClick={this.addTask}>Add Task</button>
            <br />
            <input type="radio" name="filt" id="" checked={this.state.filterKey==='all'} onChange={()=>{this.updateFilterKey('all')}}/>:All &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="filt" id="" checked={this.state.filterKey==='completed'} onChange={()=>{this.updateFilterKey('completed')}} />:Completed &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="filt" id="" checked={this.state.filterKey==='notcompleted'} onChange={()=>{this.updateFilterKey('notcompleted')}} />:Not Completed&nbsp;&nbsp;&nbsp;&nbsp;
            {
                this.state.todos.map((t,i)=>{
                    if(this.state.filterKey==='completed'){
                        return t.status?(
                            <Todo t={t} i={i} deleteTodo={this.deleteTodo} undo={this.undo} done={this.done}></Todo>
                        ):''
                    }
                    if(this.state.filterKey==='notcompleted'){
                        return !t.status?(
                            <Todo t={t} i={i} deleteTodo={this.deleteTodo} undo={this.undo} done={this.done}></Todo>
                        ):''
                    }
                    return (<Todo t={t} i={i} deleteTodo={this.deleteTodo} undo={this.undo} done={this.done}></Todo>)
                })
            }
        </div>
    )
  }
}

export default Todolist