
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <Link
        to="/dashboard"
        onClick={() => handleItemClick("dashboard")}
        className={`block p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 ${
          activeItem === "dashboard" ? "bg-gray-700" : ""
        }`}
      >
        Dashboard
      </Link>
      <Link
        to="/profile"
        onClick={() => handleItemClick("profile")}
        className={`block p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 ${
          activeItem === "profile" ? "bg-gray-700" : ""
        }`}
      >
        Profile
      </Link>
      <Link
        to="/login"
        onClick={() => handleItemClick("login")}
        className={`block p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 ${
          activeItem === "profile" ? "bg-gray-700" : ""
        }`}
      >
        Login
      </Link>
      
    </nav>
  );
};

export default Sidebar;
