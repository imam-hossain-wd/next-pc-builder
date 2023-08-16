import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="mb-20 container mx-auto">
      <h1 className="text-2xl text-gray-900 font-bold mb-2 text-center">
        {title}
      </h1>
      <h1 className="text-sm text-gray-600 text-center">{subtitle}</h1>
    </div>
  );
};

export default Header;