import React from 'react';
import './Person.css';
const Person = ( props ) => {



const style={
  '@media (min-width : 500px)':{

    width: '450px'
  }
};
    return(
  <div className = "persons" style={style}>
      <p onClick= {props.click}> My name is {props.name} and i am {props.age} year old</p>
      <p> {props.children}</p>
      <input type= "text" onChange = {props.changed} value = {props.name}/>  
  </div>
         
    )
    
}

export default Person;