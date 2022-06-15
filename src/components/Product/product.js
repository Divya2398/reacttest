import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/nav";

const Product = () => {
  const { state } = useLocation();
  // console.log("state update:", state);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getproduct();
  }, []);

  const getproduct = async () => {
    let details = await axios
      .get("http://localhost:5000/v2/productapi/get-productcat", {
        params: { cat_uuid: state.value.uuid },
      })
      .then((Response) => {
        console.log("data", Response.data);
        setProduct(Response.data.result);
        // const data = Response.data.result;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (product) {
    return (
      <>
        <Navbar></Navbar>
        <h1 className="text-center  mt-4">Select your fav product</h1>
        <div className="container-fluid mx-2">
          <div className="col-md-12">
            <div className="row">
              {product.map((value) => {
                return (
                  <>
                    <div className="col-md-4 mb-4 mt-5">
                      <div className="card">
                        <img
                          src="./images/pro1.jpg"
                          className="card-img-top w-25 h-25 mx-auto d-block mt-4 "
                          alt="dress"
                        />
                        <div className="card-body">
                          <p className="card-title">{value.productName}</p>
                          <p>
                            price : &nbsp;
                            <i className="fa fa-inr" aria-hidden="true"></i>
                            &nbsp;{value.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar></Navbar>
        <div className="container mt-5 p-5">
          <h4 className="d-flex justify-content-center">
            oops! No Products found..
          </h4>
          <img
            src="./images/empty.jpg"
            className="w-25 h-25 mx-auto d-block mt-5"
          />
        </div>
      </>
    );
  }
};

export default Product;
