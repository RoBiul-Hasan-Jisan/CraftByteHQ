import React from "react";

export default function WhatIsML() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">ML Introduction</h1>

      <p className="mb-4">
        Machine Learning (ML) is a field of computer science that gives machines the ability to learn from data and experiences—much like humans do—and make predictions or decisions without being explicitly programmed to perform those tasks.
      </p>

      <p className="mb-6">
        Instead of following strict instructions coded by a developer, ML algorithms are trained using data, and from this data, they learn patterns, trends, and relationships to solve problems or automate processes.
      </p>

      <h2 className="text-2xl font-semibold mb-4">What is Machine Learning?</h2>
      <p className="mb-6">
        Machine Learning (ML) is a field of computer science that gives machines the ability to learn from data and experiences—much like humans do—and make predictions or decisions without being explicitly programmed to perform those tasks.
      </p>

      <h2 className="text-2xl font-semibold mb-4">How it Differs from Traditional Programming</h2>

      <table className="w-full border-collapse border border-gray-300 mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Traditional Programming</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Machine Learning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Programmer writes rules</td>
            <td className="border border-gray-300 px-4 py-2">Algorithm learns rules from data</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Input + Rules → Output</td>
            <td className="border border-gray-300 px-4 py-2">Input + Output → Algorithm learns rules</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Example: if statements, loops</td>
            <td className="border border-gray-300 px-4 py-2">Example: decision trees, neural networks</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
