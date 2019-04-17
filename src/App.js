import React ,{ Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

state={
Person:[
{name:"chetan", age:25},
{name:"rahul", age:25},
{name:"vishal", age:25}
],
otherState:'some other value'
}

switchNameHandler = (newName)=> {

  this.setState ({
    Person:[
    {name:newName, age:25},
    {name:"rahul", age:25},
    {name:"vishal", age:25}
    ]
   })
}

  nameChangeHandler=(event)=>{
  this.setState ( {
    Person:[
    {name:"chetan shinde", age:25},
    {name:"rahul", age:25},
    {name:"vishal", age:25}
    ]
   })
}


render() {

return (
<div className="App">
<i></i><h1> Hi I A'm React Application</h1>
<i><p>This is Really Working</p></i>

<button onClick={()=> this.switchNameHandler('chetanpatil')}> Switch Button</button>

<Person 
name={this.state.Person[0].name} 
age={this.state.Person[0].age} >
</Person>

<Person
name={this.state.Person[1].name} 
age={this.state.Person[1].age} 
change={this.nameChangeHandler}> My Hobbies: Racing
</Person>

<Person 
name={this.state.Person[2].name} 
age={this.state.Person[2].age}></Person> 

</div>
);
}
}
export default App;


