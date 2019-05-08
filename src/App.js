import React ,{ Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';
class App extends Component {
  
  state = {
   persons: [ 
     {id :'abc  ' , name : 'max', age: 29},
     {id :'abd  ' , name: 'david', age: 26},
     {id :'acb' , name :' danny', age : 30}
   ],

   otherState: 'some other value',
   showPersons: false
  
  }
nameChangedHandler = (event, id) => {
 const personIndex = this.state.persons.findIndex(p => {
  return p.id === id;
});

const person = Object.assign({}, this.state.persons[personIndex] );

person.name=event.target.value;

const persons = [...this.state.persons];
persons[personIndex] = person;

this.setState({ persons: persons } )
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
    backgroundColor: 'green',
    color: 'white',
    font:'inherit',
    border : '1 px solid blue',
    padding : '8px',
    cursor: 'pointer',
  ':hover' : {
    backgroundColor: 'salmon',
    color:'black'
  }
  };

let persons = null;

if(this.state.showPersons ){

  persons = (
    <div>
    {this.state.persons.map((person, index) => {
  return <Person 
  click={()=> this.deletePersonHandler(index)}
  name= {person.name}
  age=  {person.age}
  key=  { person.id}
  
  changed ={(event)=> this.nameChangedHandler(event, person.id)}/>
    })}   
    </div>
 
 );
  style.backgroundColor='red';
  style[':hover'] = {
  backgroundColor: 'lightgreen',
  color:'black'
}
}

const classes=[];
if(this.state.persons.length<=2){

  classes.push('red');
}
if(this.state.persons.length<=1){
  classes.push('bold');
}



return(

  <StyleRoot>
  <div className='App'>
  <h1> Hi this is react JS</h1>
  <p className={ classes.join(' ') }> Its reallly working</p>
  <button
  style={style}            
  onClick={this.togglePersonsHandler}>  Toggle Person
  </button>
 {persons}
  </div>
  </StyleRoot>
);
}
}
export default Radium(App);