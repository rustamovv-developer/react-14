import React, { memo, useState } from "react";
import { inc } from "../../context/counter";
import { useDispatch } from "react-redux";

function Increment() {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  return (
    <section className="inc">
      <input
        onChange={(e) => setNumber(e.target.value)}
        type="number"
        className="inc__input"
      />
      <button onClick={() => dispatch(inc(+number))} className="inc__btn">
        Inc
      </button>
    </section>
  );
}

export default memo(Increment);
