import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-gray-300 text-center py-4 mt-10">
      <p className="text-sm">
        <span className="text-blue-400 font-medium">Naveenkumar</span> © {new Date().getFullYear()} Copyright, All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
