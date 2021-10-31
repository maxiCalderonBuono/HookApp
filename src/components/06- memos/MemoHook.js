import React, { useMemo, useState } from "react";
import { HeavyProcess } from "../../helpers/HeavyProcess";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effect.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(3000);
  const [show, setshow] = useState(false);

  const memoHeavyProcess = useMemo(() => HeavyProcess	(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoHeavyProcess}</p>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setshow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
