import React from "react";
import NavLink from "./NavLink.jsx";

const NavLinks = () => {
  return (
    <ul className="nav__links">
      <NavLink link="/" text="Portfolio" />
      <NavLink link="/blog" text="Blog" />
    </ul>
  );
};

export default NavLinks;
