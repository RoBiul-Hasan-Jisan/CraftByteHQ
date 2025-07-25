import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Artificial Intelligence", path: "/ai", icon: "🤖", external: false },
  {
    name: "Machine Lerning ",
    path: "https://ml-sandy.vercel.app", // no leading slash and mark external true
    icon: "📚",
    external: true,
  },
  { name: "Deep Learning", path: "/dl", icon: "🧬", external: false },
  { name: "MLOps", path: "/mlops", icon: "⚙️", external: false },
  {
    name: "Data Structures & Algorithms",
    path: "https://craft-byte-hq.vercel.app/dsa/arrays", // no leading slash and mark external true
    icon: "📚",
    external: true,
  },
  
  { name: "Object-Oriented Programming", path: "/oops", icon: "🧩", external: false },
  { name: "Computer Networks", path: "/computer-network", icon: "🌐", external: false },
  { name: "Operating System", path: "/os", icon: "💻", external: false },
  { name: "DBMS", path: "/dbms", icon: "🗄️", external: false },
];


export default function ExploreCategories() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    if (category.external) {
      window.open(category.path, "_blank", "noopener,noreferrer");
    } else {
      navigate(category.path);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Explore Popular Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categories.map(({ name, path, icon, external }, index) => (
          <button
            key={index}
            onClick={() => handleClick({ path, external })}
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
