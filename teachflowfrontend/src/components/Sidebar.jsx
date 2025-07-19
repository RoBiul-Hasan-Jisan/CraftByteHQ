import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import SidebarML from "../sidebarExtra/SidebarML";
import SidebarDL from "../sidebarExtra/SidebarDL";
import SidebarAI from "../sidebarExtra/SidebarAI";
import SidebarDSA from "../sidebarExtra/SidebarDSA";

export default function Sidebar() {
  const location = useLocation();
  const path = location.pathname;

  const [isOpen, setIsOpen] = useState(false);

  // Specialized sidebar logic
  if (path.startsWith("/ml")) return <SidebarML />;
  if (path.startsWith("/dl")) return <SidebarDL />;
  if (path.startsWith("/ai")) return <SidebarAI />;
  if (path.startsWith("/dsa")) return <SidebarDSA />;

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-gray-200 p-4 pt-16 w-64
          transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:block z-40
        `}
      >
        <nav className="flex flex-col space-y-2">
          <h2 className="font-bold text-xl mb-4">Tutorial Topics</h2>

          <Link
            to="/ai"
            className={`block py-2 px-3 rounded hover:bg-gray-300 ${
              path === "/ai" ? "bg-blue-400 text-white" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Learn AI
          </Link>

          <Link
            to="/ml"
            className={`block py-2 px-3 rounded hover:bg-gray-300 ${
              path === "/ml" ? "bg-blue-400 text-white" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Learn ML
          </Link>

          <Link
            to="/dl"
            className={`block py-2 px-3 rounded hover:bg-gray-300 ${
              path === "/dl" ? "bg-blue-400 text-white" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Learn DL
          </Link>

          <Link
            to="/mlops"
            className={`block py-2 px-3 rounded hover:bg-gray-300 ${
              path === "/mlops" ? "bg-blue-400 text-white" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Learn MLOps
          </Link>

          <Link
            to="/dsa"
            className={`block py-2 px-3 rounded hover:bg-gray-300 ${
              path === "/dsa" ? "bg-blue-400 text-white" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Learn DSA
          </Link>

          <Link
            to="/oops"
            className={`block py-2 px-3 rounded hover:bg-gray-300 ${
              path === "/oops" ? "bg-blue-400 text-white" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Learn OOPs
          </Link>

          <Link
            to="/computer-network"
            className={`block py-2 px-3 rounded hover:bg-gray-300 ${
              path === "/computer-network" ? "bg-blue-400 text-white" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Learn Computer Network
          </Link>

          <Link
            to="/os"
            className={`block py-2 px-3 rounded hover:bg-gray-300 ${
              path === "/os" ? "bg-blue-400 text-white" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Learn Operating System
          </Link>

          <Link
            to="/dbms"
            className={`block py-2 px-3 rounded hover:bg-gray-300 ${
              path === "/dbms" ? "bg-blue-400 text-white" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Learn DBMS
          </Link>
        </nav>
      </aside>
    </>
  );
}
