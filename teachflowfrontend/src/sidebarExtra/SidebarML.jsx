import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarML() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-200 p-4 min-h-screen">
      <nav className="flex flex-col space-y-1">
        <h2 className="font-bold mb-4 text-xl">Learn ML</h2>
        <Link
          to="/ml/introduction"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/ml/introduction" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Introduction
        </Link>
        <Link
          to="/ml/supervised"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/ml/supervised" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Supervised Learning
        </Link>
        <Link
          to="/ml/unsupervised"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/ml/unsupervised" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Unsupervised Learning
        </Link>
        <Link
          to="/ml/reinforcement"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/ml/reinforcement" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Reinforcement Learning
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
