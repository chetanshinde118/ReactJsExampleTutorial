import React ,{ Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  
  state = {
   persons: [

     {name : 'max', age: 29},
     {name: 'david', age: 26},
     {name :' danny', age : 30}
   ],

   otherState: 'some other value',
   showPersons: false
  
  }
nameChangedHandler = (event) => {
  this.setState({

        persons: [
          {name:'max', age:29},
          {name:event.target.value, age:26},
          {name:'danny', age:30}          
        ]
  })
}


deletePersonHandler = (personIndex) => {
const persons =  this.state.persons;
persons.splice(personIndex, 1);
this.setState({persons: persons})

}

togglePersonsHandler = () => {
  const doesShow= this.state.showPersons;
  this.setState({ showPersons: !doesShow });
}

render(){

  const style={
    backgroundColor: 'white',
    font:'inherit',
    border : '1 px solid blue',
    padding : '8px',
    cursor: 'pointer'
  };

let persons = null;

if(this.state.showPersons ){

  persons = (
    <div>
    {this.state.persons.map((person, index) => {
  return <Person 
  click={()=> this.deletePersonHandler(index)}
  name= {person.name}
  age= {person.age}
  />
    })}
    
    
    
    </div>
  )
}
return(

  <div className='App'>
  <h1>  HI this is react JS</h1>
  <p> Its reallly working</p>
  <button
  style={style}
  onClick={this.togglePersonsHandler}>  Toggle Person..
  </button>
 {persons}
  </div>
);
}
}
export default App