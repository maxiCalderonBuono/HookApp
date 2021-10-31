import React, { useState, useEffect } from "react";
import "./effect.css";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

useEffect(() => {
  console.log('hey')
}, [])


  const handleInputChange = ({target}) => {
      
      
      setFormState ({
          ...formState,
          [target.name]: target.value,
      })
      
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className= "form-group">
          <input 
          type= 'text'
          name= "name"
          className= 'form-control'
          autoComplete = 'off'
          placeholder= 'Your name'
          value= {name}
          onChange= {handleInputChange}
          />
      </div>

      <div className= "form-group">
          <input 
          type= 'text'
          name= "email"
          className= 'form-control'
          autoComplete = 'off'
          placeholder= 'email@email.com'
          value= {email}
          onChange= {handleInputChange}
          />
      </div>

{name === '123' && <Message />}

    </>
  );
};
