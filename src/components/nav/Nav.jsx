import React from "react";
import NavBrand from "./NavBrand.jsx";
import NavLinks from "./NavLinks.jsx";
import { FaBars } from "react-icons/lib/fa";

const Nav = () => {
  return (
    <nav className="nav" id="navBar">
      <div className="nav__collapse">
        <NavBrand />
        <a
          href="javascript:void(0);"
          className="nav__collapse-button"
          onClick={() => {
            renderResponsiveMenu();
          }}
        >
          <FaBars />
        </a>
      </div>
      <NavLinks />
    </nav>
  );
};

export const renderResponsiveMenu = () => {
  const x = document.getElementById("navBar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
};
export default Nav;
