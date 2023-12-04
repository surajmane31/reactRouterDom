import React, { useState } from "react";

function First() {
  const [count, setCount] = useState(1);
  const add = () => {
    setCount(count + 1);
    if (count < 20) {
      setCount(count + 1);
    } else {
      alert("You have reached the maximum number of characters");
    }
  };
  const remove = () => {
    setCount(count - 1);
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("not allowed");
    }
  };

  return (
    <>
      <h1> counter : {count}</h1>
      <p> {count} </p>
      <button onClick={() => add()}> add</button>
      <button onClick={() => remove()}> remove</button>
    </>
  );
}

export default First;
