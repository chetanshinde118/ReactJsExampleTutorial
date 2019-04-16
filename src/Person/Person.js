import React from 'react';
import './Person.css'; 

const Person = (props) => {

return(
<div className="Person">
     <p> Hello my name is {props.name} and i am {props.age}  year old </p>
     <p> {props.children}</p>
     <input type="text"  onChange= {props.change} value={props.name} />
     
 </div>
);
}

export default Person;