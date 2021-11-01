import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { UserContext } from "./UserContext";

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);

  const [{name,email}, handleInputChange, reset] = useForm({
      name: '',
      email: ''
  });

  console.log(name,email)

  const handleSubmit = (e) => {
      console.log(e)
      e.preventDefault();  
  }

  const handleClick= () => {
    setUser({ name: name, email: email });
    reset();
  }
  return (
    <div>
      <h1>LoginPage</h1>
      <hr />

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-control"
          name="name"
          type="text"
          placeholder="Your name"
          autoComplete="on"
          value={name}
          onChange={handleInputChange}
        />

        <input
          className="form-control"
          name="email"
          type="text"
          placeholder="Your email"
          autoComplete="on"
          value={email}
          onChange={handleInputChange}
        />

        <button
          className="btn btn-success mt-2"
          type= "button"
          onClick={handleClick}
        >
          Login
        </button>
      </form>
    </div>
  );
};
