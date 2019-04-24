import React from 'react';

const Person=(props)=>{

    return(
  <div>
      <p>i am {props.name} and i am {props.age} year old</p>
   <p> {props.children}</p>
  
  </div>
         
    )
    
}

export default Person;