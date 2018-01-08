import React from "react";
import { Link } from "react-router-dom";

const NavBrand = () => {
  return (
    <div className="nav__brand">
      <Link to={`/`} className="nav__brand-link">
        <h1 className="nav__brand-logo">OBM</h1>
      </Link>
    </div>
  );
};

export default NavBrand;
