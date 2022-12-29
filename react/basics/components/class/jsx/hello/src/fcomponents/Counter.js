import React,{useState} from 'react'

function Counter() {
    const [count , setcount] = useState(0);
    const plus = () => {
        setcount(count+1);
        
    }
    const minus = () => {
        setcount(count-1);
        
    }
    const reset = () => {
        setcount(0);

    }
  return (
    <div>
        <h1> Count : {count}</h1>
        <button onClick={plus}>Plus</button>
        <button onClick={minus}>Minus</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter