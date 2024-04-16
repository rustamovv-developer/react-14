import React, { memo } from "react";
import { useSelector } from "react-redux";

function Result() {
  let count = useSelector((state) => state.counter.value);
  return (
    <section className="result">
      <h2 className="result__title">{count}</h2>
    </section>
  );
}

export default memo(Result);
