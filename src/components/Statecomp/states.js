import React, { useState } from "react";

const State = () => {
  const [data, modifyData] = useState("All");
  const change = () => {
    modifyData("Divya");
  };
  return (
    <>
      <h4>
        Welcome <span style={{ color: "darkmagenta" }}>{data}</span>
      </h4>
      <button onClick={change}>click here</button>
    </>
  );
};

export default State;
