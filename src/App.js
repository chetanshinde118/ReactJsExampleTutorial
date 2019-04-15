import React ,{ useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app=props=>{
const [personsState, setPersonsState] =useState({
Person:[
{name:"chetan", age:25},
{name:"rahul", age:25},
{name:"vishal", age:25}
],
otherState:'some other value'
});

const switchNameHandler=()=>{

  setPersonsState ({
    Person:[
    {name:"chetan shinde", age:25},
    {name:"rahul", age:25},
    {name:"vishal", age:25}
    ],
   });
};

return(
<div className="App">
<h1> Hi I am react application</h1>
<p>this is really working</p>
<button onClick={switchNameHandler}>SwitchButton</button>

<Person 
name={personsState.Person[0].name} 
age={personsState.Person[0].age} >
</Person>

<Person
name={personsState.Person[1].name} 
age={personsState.Person[1].age} >
My Hobbies: Racing
</Person>

<Person 
name={personsState.Person[2].name} 
age={personsState.Person[2].age} 
/>
</div>
);
};

export default app;


