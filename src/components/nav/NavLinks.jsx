import React from "react";
import NavLink from "./NavLink.jsx";

const NavLinks = () => {
  return (
    <ul className="nav__links">
      <NavLink link="/blog" text="Blog" />
      <NavLink link="/about-me" text="About" />
    </ul>
  );
};

export default NavLinks;
