import React from 'react';
import './Person.css';
const Person = ( props ) => {

    return(
  <div className = "persons">
      <p onClick= {props.click}> My name is {props.name} and i am {props.age} year old</p>
      <p> {props.children}</p>
      <input type= "text"onChange= {props.changed} value={props.value}/>  
  </div>
         
    )
    
}

export default Person;