import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <header className="bg-blue-600 text-white p-4 text-2xl font-bold relative">
      <div className="flex justify-between items-center">
      
      <Link
  to="/"
  className="cursor-pointer hover:text-blue-300 transition-colors duration-200"
>
  CraftByteHQ
</Link>



        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-white text-blue-600 text-sm font-semibold px-4 py-2 rounded hover:bg-blue-100"
          >
            Tutorials
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-lg z-10">
              <ul className="py-2 text-base">
                <li>
                  <Link to="/ai" className="block px-4 py-2 hover:bg-gray-200">
                    Learn AI
                  </Link>
                </li>
                <li>
                  <Link to="/ml" className="block px-4 py-2 hover:bg-gray-200">
                    Learn ML
                  </Link>
                </li>
                <li>
                  <Link to="/dl" className="block px-4 py-2 hover:bg-gray-200">
                    Learn DL
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mlops"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Learn MLOps
                  </Link>
                </li>
                <li>
                  <Link to="/dsa" className="block px-4 py-2 hover:bg-gray-200">
                    Learn DSA
                  </Link>
                </li>
                <li>
                  <Link to="/oops" className="block px-4 py-2 hover:bg-gray-200">
                    Learn OOPs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/computer-network"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Learn Computer Network
                  </Link>
                </li>
                <li>
                  <Link to="/os" className="block px-4 py-2 hover:bg-gray-200">
                    Learn Operating System
                  </Link>
                </li>
                <li>
                  <Link to="/dbms" className="block px-4 py-2 hover:bg-gray-200">
                    Learn DBMS
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
