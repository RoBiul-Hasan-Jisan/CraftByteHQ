import React from "react";
import { Link, useLocation } from "react-router-dom";

import SidebarML from "../sidebarExtra/SidebarML";
import SidebarDL from "../sidebarExtra/SidebarDL";
import SidebarAI from "../sidebarExtra/SidebarAI";
import SidebarDSA from "../sidebarExtra/SidebarDSA";

export default function Sidebar() {
  const location = useLocation();
  const path = location.pathname;

  if (path.startsWith("/ml")) {
    return <SidebarML />;
  }
  if (path.startsWith("/dl")) {
    return <SidebarDL />;
  }
  if (path.startsWith("/ai")) {
    return <SidebarAI />;
  }
  if (path.startsWith("/dsa")) {
    return <SidebarDSA />;
  }

  // Default: main topics list
  return (
    <aside className="w-64 bg-gray-200 p-4 min-h-screen">
      <nav className="flex flex-col space-y-1">
        <h2 className="font-bold mb-4 text-xl">Tutorial Topics</h2>

        <Link
          to="/ai"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            path === "/ai" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Learn AI
        </Link>

        <Link
          to="/ml"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            path === "/ml" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Learn ML
        </Link>

        <Link
          to="/dl"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            path === "/dl" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Learn DL
        </Link>

        <Link
          to="/mlops"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            path === "/mlops" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Learn MLOps
        </Link>

        <Link
          to="/dsa"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            path === "/dsa" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Learn DSA
        </Link>

        <Link
          to="/oops"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            path === "/oops" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Learn OOPs
        </Link>

        <Link
          to="/computer-network"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            path === "/computer-network" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Learn Computer Network
        </Link>

        <Link
          to="/os"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            path === "/os" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Learn Operating System
        </Link>

        <Link
          to="/dbms"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            path === "/dbms" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Learn DBMS
        </Link>
      </nav>
    </aside>
  );
}
