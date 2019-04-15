import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
 state={
   Person:[
   {name:"chetan", age:20},
   {name:"harshal", age:22},
   {name:"rakesh", age:25},
   {name: "rahul", age:26},
   {name: "rahul", age:26},
   {name: "rahul", age:26}
    
  
  ]
 }

 eventHandler(){

console.log("clicked");

//  alert("click by user");

 }

  render() {
    return (
      <div className="App">
        <h1>Hello welcome to react js tutorial</h1>
    <p> this is really working!!!!!</p>
   

  <button onClick={this.eventHandler}> Switch Button </button>
  <Person name={this.state.Person[0].name} age={this.state.Person[0].age}> </Person>
  <Person name={ this.state.Person[1].name} age={this.state.Person[1].age}></Person>
  <Person name={this.state.Person[2].name} age={ this.state.Person[2].age}></Person>
<Person name={this.state.Person[3].name } age={this.state.Person[3].age}></Person>
 
    {/* <Person name="chetan" age="20"/> 
    <Person name="rahul" age="22"/>
    <Person name="harshal" age="24">my Hobbies: racing </Person>
    <Person name="rakesh" age="26"/> */}
    
       </div>
      
    );

// return React.createElement("div", {className: 'App'} ,null, React.createElement ("h1", null, "welcome to react first tutoriL"));
 
  }
}

export default App;