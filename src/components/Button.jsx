import React from "react";

const Button = ({ className, name }) => {
  return (
    <>
      <a href="#" target="_blank" className={className}>
        {name}
      </a>
    </>
  );
};

export default Button;
