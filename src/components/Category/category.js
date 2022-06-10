import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/nav";

const Category = () => {
  axios
    .get("http://localhost:5000/v3/categoryapi/get-category")
    .then((Response) => {
      console.log(Response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-center text-info mt-4">let's Shop</h1>
      <div className="container-fluid mx-2"></div>
      <div className="row mt-5 mx-5">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          {/* <button className="btn btn-info w-100 mb-4">All</button>
          <button className="btn btn-info w-100 mb-4">MEN's Collection</button>
          <button className="btn btn-info w-100 mb-4">
            WOMEN's Collection
          </button>
          <button className="btn btn-info w-100 mb-4">KID's Collection</button> */}
        </div>
      </div>
    </div>
  );
};
export default Category;
