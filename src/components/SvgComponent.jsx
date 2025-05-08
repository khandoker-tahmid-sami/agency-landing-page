import React from "react";

const SvgComponent = ({ path, className, viewBox }) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path fill-rule="evenodd" d={path} clip-rule="evenodd"></path>
    </svg>
  );
};

export default SvgComponent;
