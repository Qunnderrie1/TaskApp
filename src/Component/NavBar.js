import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar container">
      <Link to="/">Home</Link>
      <Link to="/tasks/completed">Completed Tasks</Link>
    </div>
  );
};

export default NavBar;
