import React from "react";

const NavbarItem = () => {
  const navbarItemName = ["Home", "Company", "Marketplace", "Features", "Team", "Contact"]
  return (
    <>
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {navbarItemName.map((item, index) =>{
          return (
            <li key={index}>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
            aria-current="page"
          >
            {item}
          </a>
        </li>
          )
        })}
      </ul>
    </>
  );
};

export default NavbarItem;
