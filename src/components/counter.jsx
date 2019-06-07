import React, { Component } from 'react';
class Counter extends Component {
   




    render() { 
        return (
            <React.Fragment>

                 <span className="btn btn-secondary btn-lg active ">{this.props.counter.value}</span>

                <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary active m-1">increment</button>
                     
                <button onClick={()=>this.props.ondecrement(this.props.counter)}className="btn btn-secondary active m-1">decrement </button>
                <button onClick={()=>this.props.delcounters(this.props.id)}className="btn btn-secondary active m-1">delete </button>
<br/>

            </React.Fragment>
          );
    }

}
 
export default Counter;