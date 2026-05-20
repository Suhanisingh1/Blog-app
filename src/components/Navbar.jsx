import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
     <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={"/"}>
             <div className="text-2xl font-bold text-blue-600">BlogStack</div>
          </Link>
        {/* desktop menu*/}
         <div className="hidden md:flex items-center space-x-6">
            <Link className="hover:text-blue-600">Home</Link>
            <Link className="hover:text-blue-600">Blogs</Link>
            <Link className="hover:text-blue-600">About</Link>
           
          </div>
          {/*Admin login*/}
          <div className="hidden md:flex items-center space-x-3">
            <button className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-indigo-500 px-10 py-2 text-white">Admin Login</button>
          </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
