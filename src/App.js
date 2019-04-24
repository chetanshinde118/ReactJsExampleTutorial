import React ,{ Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

state = {
persons: [
{name:"Max ", age:25},
{name:"Sam", age:25},
{name:"Andrew", age:25}
],
otherState:'some other value',
showPersons: false
}

switchNameHandler = (newName)=> {

  this.setState ({
    persons:[
    {name:newName, age:25},
    {name:"Sam", age:25},
    {name:"Andrew", age:25}
    ]
   })
}

  nameChangeHandler=(event)=>{
  this.setState ( {
    persons:[
    {name:"Max", age:25},
    {name:"Sam", age:25},
    {name:"Andrew", age:25}
    ]
   })
}

togglePersonsHandler = () => {

  const doesShow = this.state.showPersons;
this.setState=({showPersons: !doesShow});
}


render(props) {

  const style = {
backgroundColor: 'white',
font:'inherit',
border:'1 px solid blue',
padding: '8px',
cursor:'pointer'
};

let persons = null

if( this.state.showPersons ) {

  persons=(
  <div>
  <Person   
    name={this.state.Person[0].name} 
    age={this.state.Person[0].age} />
 

  <Person
    name={this.state.Person[1].name} 
    age={this.state.Person[1].age} 
    click={this.switchNameHandler.bind(this, 'max!!!!')}
    change={this.nameChangeHandler} > My Hobbies: Racing
    </Person>
<Person 
name={this.state.Person[2].name } 
age={this.state.Person[2].age } >
</Person>

</div> 
 );
}


return(
<>
  <div className='App'>
  <h1>  HI this is react JS</h1>
  <p> Its reallly working</p>
  <button
  style={style}
  onClick={this.togglePersonsHandler}> Switch Button
  </button>
 {persons}
  </div>

</>
);
}
}

export default App