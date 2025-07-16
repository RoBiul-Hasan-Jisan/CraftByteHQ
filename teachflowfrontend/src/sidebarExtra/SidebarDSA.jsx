import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarDSA() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-200 p-4 min-h-screen">
      <nav className="flex flex-col space-y-1">
        <h2 className="font-bold mb-4 text-xl">Learn DSA</h2>
        <Link
          to="/dsa/arrays"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/dsa/arrays" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Arrays
        </Link>
        <Link
          to="/dsa/linkedlist"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/dsa/linkedlist" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Linked List
        </Link>
        <Link
          to="/dsa/trees"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/dsa/trees" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Trees
        </Link>
        <Link
          to="/dsa/graphs"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/dsa/graphs" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Graphs
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
