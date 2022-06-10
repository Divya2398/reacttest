import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [UserName, setUserName] = useState();
  const [emailid, setemailid] = useState();
  const [Mobilenumber, setMobilenumber] = useState();
  const [password, setpassword] = useState();

  const savedetails = () => {
    axios
      .post("http://localhost:5000/v1/usermangement/user-signup", {
        UserName,
        FirstName,
        LastName,
        emailid,
        Mobilenumber,
        password,
      })
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mb-3 mt-4">
      <div
        className=" col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 p-4"
        id="box"
      >
        <h2 className="text-center">Signup</h2>
        <p className="text-start mt-3">
          Please fill in this form to create an account. or
          <a href="" onClick={() => navigate("/login")}>
            Login
          </a>
        </p>
        <form>
          <div className="mb-3 mt-3">
            <label htmlFor="FirstName" className="form-label">
              FirstName:
            </label>
            <input
              type="text"
              className="form-control"
              id="FirstName"
              placeholder="FirstName"
              name="FirstName"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="LastName" className="form-label">
              LastName:
            </label>
            <input
              type="text"
              className="form-control"
              id="LastName"
              name="LastName"
              placeholder="Lastname"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="UserName" className="form-label">
              UserName:
            </label>
            <input
              type="text"
              className="form-control"
              id="UserName"
              name="UserName"
              placeholder="UserName"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailid" className="form-label">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="emailid"
              placeholder="Email"
              name="emailid"
              onChange={(e) => setemailid(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Mobilenumber" className="form-label">
              PhoneNumber:
            </label>
            <input
              type="text"
              className="form-control"
              id="Mobilenumber"
              placeholder="Enter PhoneNumber"
              name="Mobilenumber"
              onChange={(e) => setMobilenumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <p>
            By creating an account you agree to our &nbsp;
            <a href="#">Terms &amp; Privacy</a>.
          </p>
          <div className="text-center">
            <button
              type="submit"
              name="sign-up"
              className="btn btn-outline-info w-100"
              onClick={savedetails}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
