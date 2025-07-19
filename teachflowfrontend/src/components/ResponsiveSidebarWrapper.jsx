import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function ResponsiveSidebarWrapper({ showSidebar }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth < 768; // Tailwind md breakpoint
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
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
  className="fixed left-4 z-50 p-2 rounded bg-blue-600 text-white md:hidden"
  aria-label="Toggle sidebar"
  style={{ top: '150px' }} // e.g., 150px from top
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
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <aside
          className={`
            fixed top-0 left-0 h-full bg-gray-200 p-4 w-64 z-40
            ${isMobile ? "shadow-lg" : "sticky top-0 self-start h-screen overflow-auto border-r border-gray-300"}
          `}
        >
          <Sidebar
            onLinkClick={() => {
              if (isMobile) setIsSidebarOpen(false);
            }}
          />
        </aside>
      )}
    </>
  );
}
