import React from "react";

export default function FeaturedCourses({ courses }) {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition-all duration-200"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
