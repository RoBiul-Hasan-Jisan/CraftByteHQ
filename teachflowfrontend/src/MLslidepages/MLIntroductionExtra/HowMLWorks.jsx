import React from "react";

export default function HowMLWorks() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">How Do Machine Learning Algorithms Work?</h1>
      <p>
        Machine Learning algorithms work by learning patterns from data and using those patterns to make decisions or predictions. This process involves several key steps:
      </p>

      <ol className="list-decimal list-inside space-y-6 text-lg">
        <li>
          <span className="mr-2">📥</span>
          <strong>Input Data</strong><br />
          Raw data is collected from various sources (databases, sensors, web, etc.) and cleaned, formatted, and split into:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Training set (to learn)</li>
            <li>Testing set (to evaluate)</li>
          </ul>
          <span className="block mt-2 italic text-gray-600">
            Example: Customer data, images, text, sensor logs.
          </span>
        </li>

        <li>
          <span className="mr-2">🧠</span>
          <strong>Feature Extraction</strong><br />
          Important characteristics (features) are selected or created to help the model learn better.
          <span className="block mt-2 italic text-gray-600">
            Example: Email spam detection might use features like the number of links or specific keywords.
          </span>
        </li>

        <li>
          <span className="mr-2">🔍</span>
          <strong>Model Selection</strong><br />
          Choose an algorithm based on the problem type:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Regression → Linear Regression</li>
            <li>Classification → Decision Tree, SVM</li>
            <li>Complex tasks → Neural Networks, Random Forest</li>
          </ul>
        </li>

        <li>
          <span className="mr-2">🏋️</span>
          <strong>Training the Model</strong><br />
          Feed the training data into the model. It learns patterns by minimizing errors and adjusting internal parameters.
          <span className="block mt-2 italic text-gray-600">
            Example: In image classification, the model learns features distinguishing cats from dogs.
          </span>
        </li>

        <li>
          <span className="mr-2">📊</span>
          <strong>Evaluation</strong><br />
          Test the model using the testing dataset and evaluate its performance using appropriate metrics:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Accuracy</li>
            <li>Precision</li>
            <li>Recall</li>
            <li>F1-Score</li>
            <li>Mean Squared Error (MSE) — for regression</li>
          </ul>
        </li>

        <li>
          <span className="mr-2">🤖</span>
          <strong>Prediction</strong><br />
          The trained model can now make predictions on new, unseen data.
          <span className="block mt-2 italic text-gray-600">
            Example: Predicting house prices or recommending products.
          </span>
        </li>

        <li>
          <span className="mr-2">🔁</span>
          <strong>Improvement and Tuning</strong><br />
          Improve the model’s performance by:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Adding more training data</li>
            <li>Tuning hyperparameters (e.g., learning rate, tree depth)</li>
            <li>Trying different algorithms</li>
            <li>Using cross-validation to avoid overfitting</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
