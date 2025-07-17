import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";

import Home from "./pages/Home.jsx";

import LearnAI from "./pages/LearnAI.jsx";
import LearnML from "./pages/LearnML.jsx";
import LearnDL from "./pages/LearnDL.jsx";
import LearnMLOps from "./pages/LearnMLOps.jsx";
import LearnDSA from "./pages/LearnDSA.jsx";
import LearnOOPs from "./pages/LearnOOPs.jsx";
import LearnComputerNetwork from "./pages/LearnComputerNetwork.jsx";
import LearnOperatingSystem from "./pages/LearnOperatingSystem.jsx";
import LearnDBMS from "./pages/LearnDBMS.jsx";

import MLIntroduction from "./MLslidepages/MLIntroduction.jsx";
import MLSupervised from "./MLslidepages/MLSupervised.jsx";
import MLUnsupervised from "./MLslidepages/MLUnsupervised.jsx";
import MLReinforcement from "./MLslidepages/MLReinforcement.jsx";

import DSAArrays from "./dsapages/DSAArrays.jsx";
import DSALinkedList from "./dsapages/DSALinkedList.jsx";
import DSATrees from "./dsapages/DSATrees.jsx";
import DSAGraphs from "./dsapages/DSAGraphs.jsx";

function AppContent() {
  const location = useLocation();

  const tutorialPaths = [
    "/ai",
    "/ml",
    "/ml/introduction",
    "/ml/supervised",
    "/ml/unsupervised",
    "/ml/reinforcement",
    "/dl",
    "/mlops",
    "/dsa",
    "/dsa/arrays",
    "/dsa/linkedlist",
    "/dsa/trees",
    "/dsa/graphs",
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

      <div className="p-6 flex space-x-6 min-h-[calc(100vh-120px)]">
        {showSidebar && (
          <aside className="w-64 sticky top-0 self-start h-screen overflow-auto border-r border-gray-300">
            <Sidebar />
          </aside>
        )}

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Main topics */}
            <Route path="/ai" element={<LearnAI />} />
            <Route path="/ml" element={<LearnML />} />
            <Route path="/dl" element={<LearnDL />} />
            <Route path="/mlops" element={<LearnMLOps />} />
            <Route path="/dsa" element={<LearnDSA />} />
            <Route path="/oops" element={<LearnOOPs />} />
            <Route path="/computer-network" element={<LearnComputerNetwork />} />
            <Route path="/os" element={<LearnOperatingSystem />} />
            <Route path="/dbms" element={<LearnDBMS />} />

            {/* ML subtopics */}
            <Route path="/ml/introduction" element={<MLIntroduction />} />
            <Route path="/ml/supervised" element={<MLSupervised />} />
            <Route path="/ml/unsupervised" element={<MLUnsupervised />} />
            <Route path="/ml/reinforcement" element={<MLReinforcement />} />

            {/* DSA subtopics */}
            <Route path="/dsa/arrays" element={<DSAArrays />} />
            <Route path="/dsa/linkedlist" element={<DSALinkedList />} />
            <Route path="/dsa/trees" element={<DSATrees />} />
            <Route path="/dsa/graphs" element={<DSAGraphs />} />
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
