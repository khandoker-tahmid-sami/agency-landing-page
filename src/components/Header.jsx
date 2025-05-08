import React from "react";
import Button from "./Button";
import NavbarItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";

const Header = () => {
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <NavbarLogo className={"flex items-center"} />
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <NavbarItem />
          </div>
          <div className="flex items-center lg:order-2">
            <Button
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
              name={"Download"}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
