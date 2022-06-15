import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/nav";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getcat = async () => {
    let detail = await axios.get(
      "http://localhost:5000/v3/categoryapi/get-category"
    );
    const product = detail.data.result;
    setData(product);
  };
  useEffect(() => {
    getcat();
  }, []);

  console.warn(data);

  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-center  mt-4">Let's Shop</h1>
      <div className="container-fluid mx-2">
        <div className="col-md-12 mt-5">
          <div className="row">
            {data.map((value, ind) => {
              return (
                <>
                  <div
                    className="col-md-4 mb-4"
                    key={ind}
                    onClick={() => navigate("/product", { state: { value } })}
                  >
                    <div className="card">
                      <img
                        src="./images/cat_1.jpg"
                        className="card-img-top"
                        alt="dress"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{value.categoryName}</h5>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* /{" "}
      <ul key={value}>
        // <li>{index + 1}</li>
        // <li>{value.categoryName}</li>
        //{" "}
      </ul> */}
    </>
  );
};
export default Category;
