import React from "react";
import Logo from "../assets/logo.svg";
import Slogan from "../assets/slogan.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", to: "/" },
    { name: "Solutions", to: "/solutions" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center pt-10 px-6  lg:px-36 lg:pt-6">
      <div>
        <img src={Logo} />
        <img src={Slogan} />
      </div>
      <div className="hidden  space-x-10 items-center lg:flex">
        {navItems.map((navItem, idx) => (
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "text-grey" : isActive ? "text-primaryOrange" : "text-grey"
            }
            to={navItem.to}
          >
            {navItem.name}
          </NavLink>
        ))}
        <Link
          to="/login"
          className="bg-primaryOrange hover:opacity-90 px-16 py-4 rounded-full text-white"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
