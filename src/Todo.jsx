import React, { Component } from 'react'

export class Todo extends Component {
  componentDidMount(a,b){
    console.log(this.props.t.title,"Todo Compoenent Mounted")
  }
  componentWillUnmount(){
    console.log(this.props.t.title,"Todo Component UnMounted")
  }
  componentDidUpdate(){
    console.log(this.props.t.title,"Todo Component Updated")
  }
  render() {
    console.log(this.props.t.title,"Todo Component rendered")
    var {t:{title,status},i,done,undo,deleteTodo} = this.props;
    return (
        <div className='betterview'>
            <li className={status?'bg-success p-2 m-2':'bg-danger p-2 m-2'}>
                {title}---{status?'completed':'not completed'}
                <button onClick={()=>{deleteTodo(i)}}>Delete</button>
                {status?(<button onClick={()=>{undo(i)}}>Undo</button>):(<button onClick={()=>{done(i)}}>Done</button>)}
            </li>
        </div>
    )
  }
}

export default Todo