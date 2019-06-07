import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    
     
    render() { 
        return ( 
         <div>
             <button onClick={this.props.onReset}className="btn btn-primary m-2">Reset</button><br />
             {this.props.counters.map(counter=>(
                <Counter key={counter.id}
                counter={counter}
                onIncrement={this.props.onIncrement}
                
                ondecrement={this.props.ondecrement}


                delcounters={this.props.delcounters}
               
            
            /> )

             )}
         </div>
         );
    }
}
 
export default Counters;