import React from "react";

function Navbar() {
  return (
    <div className="w-full lg:h-40">
      <div className="flex justify-center items-center text-white border-b-2 border-b-white pb-2">
        <ul className="flex justify-between items-center space-x-6">
          <li className="nav-list-item-style">Home</li>
          <li className="nav-list-item-style">Blood Bank</li>
          <li className="nav-list-item-style">Plasma Bank</li>
          <li className="nav-list-item-style">Events</li>
          <li className="nav-list-item-style">Videos</li>
          <li className="px-8 font-medium  cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
