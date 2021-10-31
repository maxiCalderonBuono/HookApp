import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "animate.css";
import "../02-useEffect/effect.css";


export const MultipleCustomHooks = () => {

  const {counter, increment, reset} = useCounter(1)

  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { loading, data, error } = state;

  const {author, quote} = !!data && data[0]

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center animate__flash">
          Loading...
        </div>
      ) : (
        <blockquote className="blockquote text-end">
          <p>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className= 'btn btn-primary' onClick= {increment}>
          Next Quote
      </button>
      <button className= 'btn btn-primary' onClick= {reset}>
          Reset
      </button>
    </div>
  );
};
