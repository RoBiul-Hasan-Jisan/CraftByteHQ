// D:\Tachflow\teachflowfrontend\src\MLslidepages\MLSupervisedExtra\LogisticRegression.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogisticRegression() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🔷 Logistic Regression</h1>
      <p>
        Logistic Regression is a supervised classification algorithm used to predict categorical outcomes such as yes/no, true/false, or spam/not spam.
      </p>
      <p>
        It uses the <strong>sigmoid function</strong> to convert the linear output into a probability between 0 and 1.
      </p>
      <h2 className="text-xl font-semibold">Key Points:</h2>
      <ul className="list-disc list-inside">
        <li>Predicts discrete labels (classification).</li>
        <li>Works well for binary and multi-class classification.</li>
        <li>Outputs probabilities using logistic (sigmoid) function.</li>
      </ul>
      <h2 className="text-xl font-semibold">Use Cases:</h2>
      <ul className="list-disc list-inside">
        <li>Email spam detection</li>
        <li>Disease diagnosis (positive/negative)</li>
        <li>Customer churn prediction</li>
      </ul>
    </div>
  );
}
