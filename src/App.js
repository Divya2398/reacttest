// import logo from "./logo.svg";
import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./App.css";
// import IndexComponents from "./components/Comp1/index";
// import SampleComponents from "./components/Item/sample";
// import StateFunc from "./components/Statecomp/states";
// import Paper1 from "./components/Newpapertask/paper1";
// import Paper2 from "./components/Newpapertask/paper2";
//import Itemlist from "./components/Item/item";
import Login from "./components/User/login";
import Home from "./components/Home/home";
import Signup from "./components/User/register";
import Navbar from "./components/Navbar/nav";
import Category from "./components/Category/category";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Link to="/navbar">Navbar</Link> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>
      {/* <Signup /> */}
    </>
    // <div className="App">
    // {/* <IndexComponents title="Ecommerce" />
    // <SampleComponents email="divya@gmail.com" />
    // <StateFunc /> */}
    // {/* <Paper1 />
    // <br></br>
    // <Paper2 />
    // <br></br> */}
    // {/* <Itemlist list="Clothing" /> */}
    // </div>
  );
}

export default App;
