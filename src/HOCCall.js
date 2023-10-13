import React from "react";
import HOC from "./HOC";
import './style.css';

function HOCCall(props){
    console.log(props);
    return(
        <>
         <h2>These are higher order components</h2> 
        <h1><props.value /></h1>
        
        </>
    )
}
export default HOCCall;