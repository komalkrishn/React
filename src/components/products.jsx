import React, { Component } from 'react';
import {getProducts} from "../services/fakeProducts"
class Products extends Component {
    state = { 
        count:0,
        products:getProducts,
        cartProducts:[],
        imgUrl:"https://picsum.photos/200"

     }
     styles={
        fontsize:40,
        backgroundcolor:"black"
    }
     
   
    render() { 
        return ( 
            <React.Fragment>
        {this.counter()}
                     <button className="btn btn-primary m-2"> add to cart</button>
                     <span className="btn btn-primary m-2">zero</span>
                     <img style ={{height:40,width:40}} src={this.state.imgUrl} alt="alternate image"></img>

            </React.Fragment>

         );
        
    }
    counter(){
        const {count}=this.state
       return count === 0?"zero":this.state.count;
    }
}
 
export default Products;