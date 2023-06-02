import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";

const Layout = ({ child }) => {
  return (
    <div className="Main-container">
      <div className="nav-container">
        <div className="nav-bar">
          <NavBar />
        </div>
      </div>
      <div className="body-part">{child}</div>
    </div>
  );
};

export default Layout;
