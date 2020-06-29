import React from 'react'
import ValueContext from './ValueContext'

export default function Child() {
   const context = React.useContext(ValueContext)
   let val=context[0]
   let updateVal=context[1]
    return (
        <div>
            number is {val}
            <button onClick={()=>{updateVal(++val)}}>update</button>
        </div>
    )
}
