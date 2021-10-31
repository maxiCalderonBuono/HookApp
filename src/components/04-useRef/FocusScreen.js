import React, { useRef } from "react";
import "../02-useEffect/effect.css";

export const FocusScreen = () => {

  const inputRef = useRef();
  

  const handleClick = () => {
    console.log(inputRef.current)
    inputRef.current.select();
  };


  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input ref = {inputRef} className="form-control" placeholder="Your Name" />

      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
