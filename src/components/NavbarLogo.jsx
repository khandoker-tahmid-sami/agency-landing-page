import React from "react";
// import logo from "../assets/logo.svg";
import logo from "/logo.svg"

const NavbarLogo = ({className}) => {
  return (
    <>
      <a href="#" className={className}>
        <img src={logo} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Learn with Sumit
        </span>
      </a>
    </>
  );
};

export default NavbarLogo;
