import React, { useState, useEffect } from "react";
import axios from "axios";

const search = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search" />
        <button className="btn p-0" type="button">
          <i className="bx bx-search bx-tada mt-2" id="searchicon"></i>
        </button>
      </form>
    </>
  );
};

export default search;
