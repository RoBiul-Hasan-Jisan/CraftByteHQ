import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PLACEHOLDERS = [
  "AI",
  "Machine Learning",
  "Computer Network",
  "Deep Learning",
  "Operating System",
  "DSA",
];

const TOPIC_ROUTES = {
  "ai": "/ai",
  "artificial intelligence": "/ai",

  "ml": "/ml",
  "machine learning": "/ml",
  "ml introduction": "/ml/introduction",
  "ml supervised": "/ml/supervised",
  "ml unsupervised": "/ml/unsupervised",
  "ml reinforcement": "/ml/reinforcement",

  "dl": "/dl",
  "deep learning": "/dl",

  "mlops": "/mlops",

  "dsa": "/dsa",
  "arrays": "/dsa/arrays",
  "linked list": "/dsa/linkedlist",
  "linkedlist": "/dsa/linkedlist",
  "trees": "/dsa/trees",
  "graphs": "/dsa/graphs",

  "oops": "/oops",
  "object oriented programming": "/oops",

  "computer network": "/computer-network",
  "networking": "/computer-network",

  "os": "/os",
  "operating system": "/os",

  "dbms": "/dbms",
  "database": "/dbms"
};

const TYPING_INTERVAL = 120;
const PAUSE_DURATION = 2000;

export default function HeroSection() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  const charIndexRef = useRef(0);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const typeText = useCallback(() => {
    const fullText = PLACEHOLDERS[placeholderIndex];
    if (charIndexRef.current <= fullText.length) {
      setDisplayedText(fullText.slice(0, charIndexRef.current));
      charIndexRef.current += 1;
      timeoutRef.current = setTimeout(typeText, TYPING_INTERVAL);
    } else {
      timeoutRef.current = setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
      }, PAUSE_DURATION);
    }
  }, [placeholderIndex]);

  useEffect(() => {
    if (isPaused) {
      clearTimeout(timeoutRef.current);
      setDisplayedText("");
      return;
    }

    charIndexRef.current = 0;
    setDisplayedText("");
    typeText();

    return () => clearTimeout(timeoutRef.current);
  }, [placeholderIndex, isPaused, typeText]);

  const handleSearch = () => {
    const query = inputValue.trim().toLowerCase();
    const matchedKey = Object.keys(TOPIC_ROUTES).find((key) =>
      query.includes(key)
    );

    if (matchedKey) {
      navigate(TOPIC_ROUTES[matchedKey]);
    } else {
      alert("No matching topic found.");
    }
  };

  return (
    <section className="w-full min-h-[70vh] bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          LearnWise — Empower Your Learning Journey
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Choose a topic and start mastering today's most in-demand skills.
        </p>

        <div className="relative w-full md:w-2/3 mx-auto">
          <input
            type="text"
            value={inputValue}
            placeholder={isPaused ? "" : displayedText || "Start typing..."}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          />
          <button
            onClick={handleSearch}
            className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500 hover:text-blue-600 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
