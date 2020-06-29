import React from 'react'
import numReducer from './numReducer'

export default function Child2() {
    const [state, dispatch] = React.useReducer(numReducer, 12)
    return (
        <div>
            <h1>The number is {state}</h1>
            <button onClick={()=>{dispatch({type:'INCREMENT'})}}>Increment</button>
            <button onClick={()=>{dispatch({type:'DECREMENT'})}}>Decrement</button>
            <button onClick={()=>{dispatch({type:'RESET'})}}>Reset</button>
        </div>
    )
}
