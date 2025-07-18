import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Artificial Intelligence", path: "/ai", icon: "🤖" },
  { name: "Machine Learning", path: "ml/introduction", icon: "🧠" },
  { name: "Deep Learning", path: "/dl", icon: "🧬" },
  { name: "MLOps", path: "/mlops", icon: "⚙️" },
  { name: "Data Structures & Algorithms", path: "/dsa", icon: "📚" },
  { name: "Object-Oriented Programming", path: "/oops", icon: "🧩" },
  { name: "Computer Networks", path: "/computer-network", icon: "🌐" },
  { name: "Operating System", path: "/os", icon: "💻" },
  { name: "DBMS", path: "/dbms", icon: "🗄️" },
];

export default function ExploreCategories() {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Explore Popular Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categories.map(({ name, path, icon }, index) => (
          <button
            key={index}
            onClick={() => navigate(path)}
            aria-label={`Explore ${name} category`}
            className="
              group
              bg-indigo-50
              rounded-xl
              p-8
              flex flex-col items-center
              cursor-pointer
              shadow-md
              transition
              duration-300
              ease-in-out
              hover:bg-indigo-100
              hover:scale-105
              transform
              focus:outline-none
              focus:ring-4
              focus:ring-indigo-300
              focus:ring-opacity-50
            "
          >
            <div
              className="
                mb-6
                bg-indigo-200
                text-indigo-700
                rounded-full
                p-5
                text-4xl
                flex items-center justify-center
                transition-colors
                duration-300
                group-hover:bg-indigo-300
              "
            >
              {icon}
            </div>

            <span className="text-xl font-semibold text-indigo-900 text-center">
              {name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
