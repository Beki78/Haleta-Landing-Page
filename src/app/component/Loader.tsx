// src/component/Loader.tsx
import React from "react";
import "../globals.css"; // Assuming you have your CSS in this file

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader:before"></div>
      <div className="loader:after"></div>
    </div>
  );
};

export default Loader;
