import React from 'react';
const Person = (props) => {

//    return <p> Hello my name chetan and i am {Math.floor(Math.random() * 30 ) } year old </p>


return(
<div>
     <p> Hello my name is {props.name} and i am {props.age}  year old </p>
     <p> {props.children}</p>
 
 </div>
);
}

export default Person;