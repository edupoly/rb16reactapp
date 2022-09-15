import React from 'react';

function FunCounter({start,step}){
    var [count,setcount] = React.useState(start)
    function inc(){
        setcount(count+step)
    }
    function dec(){
        setcount(count-step)
    }
    return(
        <div className="betterview">
            <h1>Fun Counter:{count}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}
export default FunCounter;