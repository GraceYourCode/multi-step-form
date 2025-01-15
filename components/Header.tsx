import React from "react";

const Header = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <header>
      <legend className="text-marine-blue text-2xl sm:text-4xl font-bold sm:mb-2">{title}</legend>
      <p className="text-cool-gray">{desc}</p>
    </header>
  );
};

export default Header;
