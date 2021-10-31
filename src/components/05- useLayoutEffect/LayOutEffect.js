import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "animate.css";
import "../02-useEffect/effect.css";


export const LayOutEffect = () => {

  const {counter, increment, reset} = useCounter(1)

  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { data } = state;

  const { quote} = !!data && data[0]

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />
     
        <blockquote className="blockquote text-end">
          <p>{quote}</p>
        </blockquote>
      

      <button className= 'btn btn-primary' onClick= {increment}>
          Next Quote
      </button>
      <button className= 'btn btn-primary' onClick= {reset}>
          Reset
      </button>
    </div>
  );
};
