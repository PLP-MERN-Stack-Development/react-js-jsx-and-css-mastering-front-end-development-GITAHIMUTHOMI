import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 dark:bg-gray-800 p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">Assignment App</h1>
      <ul className="flex gap-4">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Posts</li>
      </ul>
    </nav>
  );
};

export default Navbar;