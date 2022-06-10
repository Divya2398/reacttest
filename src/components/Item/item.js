import React from "react";
import Itemdetail from "./Itemdetail/itemdetail";

const Itemlist = (props) => {
  return (
    <div>
      <h1>Item list(parent)</h1>
      <h4>{props.list}</h4>
      <Itemdetail name="product1" />
    </div>
  );
};

export default Itemlist;
