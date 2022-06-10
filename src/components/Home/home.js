import React from "react";
import Navbar from "../Navbar/nav";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
        </div>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                // src="process.env.PUBLIC_URL + ../Images/hero-1.png"
                alt="Chicago"
                className="d-block image"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(31).webp"
                alt="Camera"
                className="d-block image"
              />
              <div className="carousel-caption mb-3">
                <h3>Upto 60% OFF</h3>
                <p>Deals on Clothing, Footwear and more</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
