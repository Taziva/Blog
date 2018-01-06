import React from "react";
import NavBrand from "./NavBrand.jsx";
import NavLinks from "./NavLinks.jsx";

const Nav = () => {
  return (
    <nav className="nav">
      <NavBrand />
      <NavLinks />
    </nav>
  );
};

export default Nav;
