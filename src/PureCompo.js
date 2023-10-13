import React, {PureComponent} from "react";
import './style.css';

class PureCompo extends PureComponent{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    render(){
        console.log('render method');
        return(
            <>
            <h4>Pure Components are the components that do not re-render when the value of props and state has been updated with the same values. 
                Since these components do not cause re-rendering when the same values are passes thus they improve performance.

                Higher order Components are the components ,it is a function that takes a component as an argument and returns a new component that wraps the original component.
                


            </h4>
            <h3>Count value : {this.state.count}</h3>
            
            <button onClick={() => this.setState({count : 5})}>change</button>
            </>
        )
    }
}
export default PureCompo;