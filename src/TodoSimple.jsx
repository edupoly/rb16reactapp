import React, { PureComponent } from 'react'

export class TodoSimple extends PureComponent {

    render() {
        console.log(this.props.t,"rendered")
        return (
        <div>
            <h3>
                {this.props.t}
                <button onClick={()=>{this.props.delTask(this.props.i)}}>Delete</button>
            </h3>
        </div>
        )
    }
}

export default TodoSimple