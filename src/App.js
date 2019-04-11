import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello welcome to react js tutorial</h1>
    <p> this is really working!!!!!</p>
     <Person/>
       </div>
      
    );

// return React.createElement("div", {className: 'App'} ,null, React.createElement ("h1", null, "welcome to react first tutoriL"));
 
  }
}

export default App;

