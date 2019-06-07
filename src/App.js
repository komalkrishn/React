import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Products from './components/products';
//import Counter from './components/counter';
import Counters from './components/counters';
import Navbar from './components/nav';

class  App extends React.Component {
  state = { 
    counters:[
        {id:1,value:2},
        {id:2,value:3},
        {id:3,value:24},
        {id:4,value:21},
        {id:5,value:2}
    ]
}
handleIncrement=(counter)=>{
   const counters=[...this.state.counters];
   const index=counters.indexOf(counter);
   counters[index].value++;
   this.setState({counters})
}

handleDecrement=(counter)=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index].value--;
    this.setState({counters});

    
    
}

handleDelete=(id)=>{
    const filteredCounters=this.state.counters.filter(counter => counter.id!==id);
    this.setState({counters:filteredCounters});
}

handleReset=()=>{
    const filteredReset=this.state.counters.map(counter=>{counter.value=0;
         return counter;})
    
    this.setState({counters:filteredReset});
}

getTotalCount(){
  return this.state.counters.reduce((a,c)=>a+c.value,0);
}


   

       
  render() { 
    return ( 
      <main className="container"> 
       
       <Navbar totalcount={this.getTotalCount()}/> 
      <Counters 
                counters={this.state.counters}
                onIncrement={this.handleIncrement}
                
                ondecrement={this.handleDecrement}
                onReset={this.handleReset}


                delcounters={this.handleDelete}
               
            
              />
  
       
      </main>
     );
  }
}
 
export default App ;

/*<Counter  value={1}/><br />
      <Counter value={2}/>
      <Counter value={5}/>*/