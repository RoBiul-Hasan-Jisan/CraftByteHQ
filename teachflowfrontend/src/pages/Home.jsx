import React from "react";
import HeroSection from "../components/HomeExtra/HeroSection";
import ExploreCategories from "../components/HomeExtra/ExploreCategories";
import FeaturedCourses from "../components/HomeExtra/FeaturedCourses";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const categories = [
    { name: "DSA", path: "/dsa" },
    { name: "Machine Learning", path: "/ml" },
    { name: "Artificial Intelligence", path: "/ai" },
    { name: "Deep Learning", path: "/dl" },
    { name: "Object-Oriented Programming", path: "/oop" },
    { name: "Operating Systems", path: "/os" },
    { name: "System Design", path: "/system-design" },
    { name: "Web Development", path: "/web-dev" },
    { name: "App Development", path: "/app-dev" },
  ];

  const courses = [
    {
      title: "React for Beginners",
      description: "Learn React from scratch through hands-on projects.",
    },
    {
      title: "JavaScript Essentials",
      description: "Master core JavaScript concepts for modern web development.",
    },
    {
      title: "Python for Data Science",
      description: "Kickstart your Data Science journey with Python.",
    },
  ];

  return (
    <div className="px-4 md:px-12 lg:px-24 py-8">
      {/* HeroSection now manages its own placeholder typing and cycling */}
      <HeroSection />

      <ExploreCategories categories={categories} navigate={navigate} />

      <FeaturedCourses courses={courses} />
    </div>
  );
}
