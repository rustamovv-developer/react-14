import React, { memo } from "react";
import { res } from "../../context/counter";
import { useDispatch } from "react-redux";

function Reset() {
  let dispatch = useDispatch();
  return (
    <section className="reset">
      <button onClick={() => dispatch(res())} className="reset__btn">
        Reset
      </button>
    </section>
  );
}

export default memo(Reset);
