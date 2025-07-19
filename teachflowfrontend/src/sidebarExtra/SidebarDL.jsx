import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarDL() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-200 p-4 pt-16 h-full fixed top-0 left-0 overflow-y-auto md:relative z-40">
      <nav className="flex flex-col space-y-1">
        <h2 className="font-bold mb-4 mt-8 md:mt-0 text-xl">Learn DL</h2>

        <Link
          to="/dl/introduction"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/dl/introduction" ? "bg-blue-400 text-white" : ""
          }`}
        >
          Introduction
        </Link>

        <Link
          to="/dl/cnn"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/dl/cnn" ? "bg-blue-400 text-white" : ""
          }`}
        >
          CNN
        </Link>

        <Link
          to="/dl/rnn"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/dl/rnn" ? "bg-blue-400 text-white" : ""
          }`}
        >
          RNN
        </Link>

        <Link
          to="/dl/gan"
          className={`block py-2 px-3 rounded hover:bg-gray-300 ${
            location.pathname === "/dl/gan" ? "bg-blue-400 text-white" : ""
          }`}
        >
          GAN
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
