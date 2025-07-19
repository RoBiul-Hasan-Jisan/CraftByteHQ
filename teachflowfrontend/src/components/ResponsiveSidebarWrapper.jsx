import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function ResponsiveSidebarWrapper({ showSidebar }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!showSidebar) return null;

  return (
    <>
      {/* Hamburger Button on mobile */}
      {isMobile && (
       <button
  onClick={() => setIsSidebarOpen(open => !open)}
  className="fixed left-4 top-16 z-50 p-1.5 rounded-md bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform-gpu"
  aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
  aria-expanded={isSidebarOpen}
  aria-controls="sidebar"
  style={{
    transitionProperty: "transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
    transform: isSidebarOpen ? "rotate(90deg)" : "rotate(0deg)",
  }}
>
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>

      )}

      {/* Sidebar with smooth slide-in/out transform */}
      <aside
        id="sidebar"
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-100 p-6 z-40 shadow-xl border-r border-gray-300
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          ${!isMobile ? "sticky top-0 self-start h-screen overflow-auto translate-x-0" : ""}
        `}
        role="navigation"
        aria-label="Sidebar navigation"
      >
        <Sidebar
          onLinkClick={() => {
            if (isMobile) setIsSidebarOpen(false);
          }}
        />
      </aside>
    </>
  );
}
