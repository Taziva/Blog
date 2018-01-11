import React from "react";
import NavBrand from "./NavBrand.jsx";
import NavLinks from "./NavLinks.jsx";

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
          &#9776;
        </a>
      </div>
      <NavLinks />
    </nav>
  );
};
const renderResponsiveMenu = () => {
  const x = document.getElementById("navBar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
};
export default Nav;
