import React, { useState } from "react";

function Task2() {
  const [arry, setArry] = useState({ name: "suraj", age: 22 });
  const click = () => {
    setArry({ ...arry, name: "sonya" });
  };
  return (
    <>
      {" "}
      <h1> name: {arry.name} </h1>
      <button onClick={click}> click</button>
    </>
  );
}

export default Task2;
