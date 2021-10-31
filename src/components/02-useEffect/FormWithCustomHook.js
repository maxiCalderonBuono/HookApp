import React from "react";
import { useForm } from "../../hooks/useForm";
import "./effect.css";

export const FormWithCustomHook = () => {
  const [formData, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          autoComplete="off"
          placeholder="Your name"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          autoComplete="off"
          placeholder="email@email.com"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*******"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button type='submit' className= 'btn btn-primary'>Guardar</button>
    </form>
  );
};
