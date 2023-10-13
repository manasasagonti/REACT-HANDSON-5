import { useState } from "react";
import './style.css';

function HOC (){
    const [count , setCount] = useState(0)
    return(
        <>
        <h3>Count : {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}
export default HOC;