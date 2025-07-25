import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
// Removed direct Sidebar import here because ResponsiveSidebarWrapper uses it internally
import ResponsiveSidebarWrapper from "./components/ResponsiveSidebarWrapper.jsx";

import Home from "./pages/Home.jsx";


// ML parts
//import MLIntroduction from "./MLslidepages/MLIntroduction.jsx";
//import MLSupervised from "./MLslidepages/MLSupervised.jsx";
//import MLUnsupervised from "./MLslidepages/MLUnsupervised.jsx";
//import MLReinforcement from "./MLslidepages/MLReinforcement.jsx";



function AppContent() {
  const location = useLocation();

  // Paths where sidebar should be shown (including nested routes)
  const tutorialPaths = [
    "/ai",
    "/ml",
    "/ml/introduction",
    "/ml/supervised",
    "/ml/unsupervised",
    "/ml/reinforcement",
    "/dl",
    "/mlops",
  
    
    
    "/oops",
    "/computer-network",
    "/os",
    "/dbms",
  ];

  const showSidebar = tutorialPaths.some(
    (path) =>
      location.pathname === path || location.pathname.startsWith(path + "/")
  );

  return (
    <>
      <Header />

      <div className="p-6 flex space-x-6 min-h-[calc(100vh-120px)] relative">
        {/* Responsive Sidebar with hamburger toggle */}
        <ResponsiveSidebarWrapper showSidebar={showSidebar} />

   
      <main className={`flex-1 w-full min-h-screen ${!showSidebar ? "" : "md:ml-64"}`}>
          <Routes>
            <Route path="/" element={<Home />} />

  
        
           
          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}
export default function App() {

  return (
    <Router>
      <AppContent />
    </Router>
  );
}
