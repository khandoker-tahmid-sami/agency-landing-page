import React from "react";

const FooterData = ({ title, data }) => {
  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h3>
      <ul className="text-gray-500 dark:text-gray-400">
        {data.map((link, index) => {
          return (
            <li key={index} className="mb-4">
              <a href="#" className=" hover:underline">
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterData;
