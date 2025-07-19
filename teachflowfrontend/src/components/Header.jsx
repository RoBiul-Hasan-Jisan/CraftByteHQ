import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <header className="bg-blue-600 text-white p-4 text-2xl font-bold fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo / Site Title */}
        <Link
          to="/"
          className="cursor-pointer hover:text-blue-300 transition-colors duration-200"
        >
          CraftByteHQ
        </Link>

        {/* Dropdown Button */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-white text-blue-600 text-sm font-semibold px-4 py-2 rounded hover:bg-blue-100"
          >
            Tutorials
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-lg z-10">
              <ul className="py-2 text-base">
                <li>
                  <Link to="/ai" className="block px-4 py-2 hover:bg-gray-200">
                    Learn AI
                  </Link>
                </li>
                <li>
                  <Link to="/ml/introduction" className="block px-4 py-2 hover:bg-gray-200">
                    Learn ML
                  </Link>
                </li>
                <li>
                  <Link to="/dl/introduction" className="block px-4 py-2 hover:bg-gray-200">
                    Learn DL
                  </Link>
                </li>
                <li>
                  <Link to="/mlops/introduction" className="block px-4 py-2 hover:bg-gray-200">
                    Learn MLOps
                  </Link>
                </li>
                <li>
                  <Link to="/dsa/arrays" className="block px-4 py-2 hover:bg-gray-200">
                    Learn DSA
                  </Link>
                </li>
                <li>
                  <Link to="/oops/introduction" className="block px-4 py-2 hover:bg-gray-200">
                    Learn OOPs
                  </Link>
                </li>
                <li>
                  <Link to="/computer-network/introduction" className="block px-4 py-2 hover:bg-gray-200">
                    Learn Computer Network
                  </Link>
                </li>
                <li>
                  <Link to="/os/introduction" className="block px-4 py-2 hover:bg-gray-200">
                    Learn Operating System
                  </Link>
                </li>
                <li>
                  <Link to="/dbms/introduction" className="block px-4 py-2 hover:bg-gray-200">
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
