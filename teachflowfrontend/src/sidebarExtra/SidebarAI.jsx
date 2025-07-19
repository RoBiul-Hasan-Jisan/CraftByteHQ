import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarAI() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-200 p-4 pt-16 h-full fixed top-0 left-0 overflow-y-auto md:relative z-40">
      <nav className="flex flex-col space-y-1">
        <h2 className="font-bold mb-4 mt-8 md:mt-0 text-xl">Learn AI</h2>

        <Link
          to="/ai/introduction"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/ai/introduction" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Introduction
        </Link>

        <Link
          to="/ai/search"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/ai/search" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Search Algorithms
        </Link>

        <Link
          to="/ai/logic"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/ai/logic" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Logic & Reasoning
        </Link>

        <hr className="my-4" />

        <Link
          to="/"
          className="block py-2 px-3 rounded hover:bg-gray-300 text-sm font-semibold"
        >
          ← Back to All Topics
        </Link>
      </nav>
    </aside>
  );
}
