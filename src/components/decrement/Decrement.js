import React, { memo, useState } from "react";
import { dec } from "../../context/counter";
import { useDispatch } from "react-redux";

function Decrement() {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  return (
    <section className="dec">
      <input
        onChange={(e) => setNumber(e.target.value)}
        type="number"
        className="inc__input"
      />
      <button onClick={() => dispatch(dec(+number))} className="inc__btn">
        Dec
      </button>
    </section>
  );
}

export default memo(Decrement);
