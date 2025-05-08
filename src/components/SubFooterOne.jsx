import React from "react";
import FooterData from "./FooterData";

const SubfooterOne = () => {
  const footerData = [
    {
      title: "Company",
      links: ["About", "Careers", "Brand Center", "Blog"],
    },
    {
      title: "Help center",
      links: ["Discord Server", "Twitter", "Facebook", "Contact Us"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Licensing", "Terms"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Brand Center", "Blog"],
    },
    {
      title: "Download",
      links: ["iOS", "Android", "Windows", "MacOS"],
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
      {footerData.map((data, index) => {
        return <FooterData key={index} title={data.title} data={data.links} />;
      })}
    </div>
  );
};

export default SubfooterOne;
