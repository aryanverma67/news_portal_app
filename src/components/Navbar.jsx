import React, { useState } from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [query, setquery] = useState("")





  const handleSearch = (e) => {
    setquery(e.target.value)
    console.log(query)
  }

  return (
    <header className="relative w-full">
      <nav className="flex  items-center   justify-between bg-transparent border w-full h-[60px] shadow-md ">
        <Link>
          <div className="flex gap-1  items-center ml-2">
            <FaRegNewspaper className="w-8 text-gray-800 font-bold h-7 " />
            <h1 className="text-blue-700 ml-1 text-md lg:text-2xl  font-bold ">
              News <span className="text-black  font-semibold">Portal</span>
            </h1>
          </div>
        </Link>
        <div className=" lg:flex   w-1/4   flex   items-center lg:w-full  max-w-sm border  rounded-full">
          <input
            type="text"
            placeholder=" serach for trending News"
            onChange={handleSearch}
            className="px-3  py-2 w-full outline-none focus-within: pl-2 text-black rounded-l-full"
          />
          <div className="min-w-[50px]  bg-blue-600 px-4 py-3 rounded-r-full text-white">
            <FaSearch className="w-5 h-5 " />
          </div>
        </div>

        <div className="lg:flex ml-2 text-[1.1rem]  font-medium items-center gap-6">
          <Link className="mr-10" to="/newspage">
            {" "}
            News
          </Link>
          <Link to="/about" className="mr-3">
            About
          </Link>
        </div>

        <div>
          <Link
            to="/login"
            className=" hidden px-6 md:flex mr-8 items-center py-2 rounded-3xl text-white bg-blue-600 border shadow-md font-semibold active:bg-blue-800"
          >
            {" "}
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
