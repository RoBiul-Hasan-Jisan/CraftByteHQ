import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
// Removed direct Sidebar import here because ResponsiveSidebarWrapper uses it internally
import ResponsiveSidebarWrapper from "./components/ResponsiveSidebarWrapper.jsx";

import Home from "./pages/Home.jsx";


// ML parts
import MLIntroduction from "./MLslidepages/MLIntroduction.jsx";
import MLSupervised from "./MLslidepages/MLSupervised.jsx";
import MLUnsupervised from "./MLslidepages/MLUnsupervised.jsx";
import MLReinforcement from "./MLslidepages/MLReinforcement.jsx";

import LinearRegression from "./MLslidepages/MLSupervisedExtra/LinearRegression";
import LogisticRegression from "./MLslidepages/MLSupervisedExtra/LogisticRegression";
import DecisionTreeRegression from "./MLslidepages/MLSupervisedExtra/DecisionTreeRegression";
import RandomForestRegression from "./MLslidepages/MLSupervisedExtra/RandomForestRegression";




import SimpleLinearRegression from './MLslidepages/MLSupervisedExtra/LinearRegressionAlgo/SimpleLinearRegression.jsx';
import MultipleLinearRegression from './MLslidepages/MLSupervisedExtra/LinearRegressionAlgo/MultipleLinearRegression.jsx';
import PolynomialRegression from './MLslidepages/MLSupervisedExtra/LinearRegressionAlgo/PolynomialRegression.jsx';

import DSAArrays from "./dsapages/DSAArrays.jsx";
import DSALinkedList from "./dsapages/DSALinkedList.jsx";
import DSATrees from "./dsapages/DSATrees.jsx";
import DSAGraphs from "./dsapages/DSAGraphs.jsx";

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

      <div className="p-6 flex space-x-6 min-h-[calc(100vh-120px)] relative">
        {/* Responsive Sidebar with hamburger toggle */}
        <ResponsiveSidebarWrapper showSidebar={showSidebar} />

        {/* Main content, margin-left adjusted on desktop when sidebar shown */}
      <main className={`flex-1 w-full min-h-screen ${!showSidebar ? "" : "md:ml-64"}`}>
          <Routes>
            <Route path="/" element={<Home />} />

  
          

            {/* ML subtopics */}
            <Route path="/ml/introduction" element={<MLIntroduction />} />
            <Route path="/ml/supervised" element={<MLSupervised />} />
            <Route path="/ml/unsupervised" element={<MLUnsupervised />} />
            <Route path="/ml/reinforcement" element={<MLReinforcement />} />

            {/* ML Supervised detailed routes */}
            <Route path="/ml/supervised/linear-regression" element={<LinearRegression />} />
            <Route path="/ml/supervised/logistic-regression" element={<LogisticRegression />} />
            <Route path="/ml/supervised/decision-tree" element={<DecisionTreeRegression />} />
            <Route path="/ml/supervised/random-forest" element={<RandomForestRegression />}/>
            
            
            {/* ML Supervised Linear Algorithms */}
            <Route path="/SimpleLinearRegression" element={<SimpleLinearRegression />} />
            <Route path="/MultipleLinearRegression" element={<MultipleLinearRegression />} />
            <Route path="/PolynomialRegression" element={<PolynomialRegression />} />

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
