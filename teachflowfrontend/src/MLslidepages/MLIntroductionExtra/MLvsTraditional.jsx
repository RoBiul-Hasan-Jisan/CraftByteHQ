import React from "react";

export default function MLvsTraditional() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 mt-8">How it Differs from Traditional Programming</h2>
      <table className="w-full border-collapse border border-gray-300 mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Traditional Programming</th>
            <th className="border px-4 py-2 text-left">Machine Learning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Programmer writes rules</td>
            <td className="border px-4 py-2">Algorithm learns rules from data</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-2">Input + Rules → Output</td>
            <td className="border px-4 py-2">Input + Output → Algorithm learns rules</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Example: if statements, loops</td>
            <td className="border px-4 py-2">Example: decision trees, neural networks</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
