import React from "react";

const UseCount = (props) => {
  let name = "json roy";

  props.data(name);

  return (
    <>
      <h1>this is</h1>
      <button>click me</button>
    </>
  );
};

export default UseCount;
