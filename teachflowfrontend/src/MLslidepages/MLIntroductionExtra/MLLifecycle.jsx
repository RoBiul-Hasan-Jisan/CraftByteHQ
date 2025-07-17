import React from "react";

export default function MLLifecycle() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Machine Learning Lifecycle</h1>
      <p>
        The Machine Learning Lifecycle is a step-by-step process that guides how an ML project is planned, developed, deployed, and maintained. It ensures that the model is efficient, reliable, and sustainable in a real-world environment.
      </p>

      <ol className="list-decimal list-inside space-y-6 text-lg">
        <li>
          <span className="mr-2">🎯</span>
          <strong>Problem Definition</strong><br />
          Clearly define the goal of the ML project.<br />
          Determine:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>What problem are we solving?</li>
            <li>Is it classification, regression, clustering, etc.?</li>
            <li>What will be the input and expected output?</li>
          </ul>
          Example: Predict customer churn, detect fraud, classify emails.
        </li>

        <li>
          <span className="mr-2">📥</span>
          <strong>Data Collection</strong><br />
          Gather relevant and sufficient data from various sources (databases, APIs, sensors, user logs, etc.).<br />
          Quality and quantity of data directly affect the model's success.
        </li>

        <li>
          <span className="mr-2">🧹</span>
          <strong>Data Cleaning & Preparation</strong><br />
          Handle missing values, duplicates, outliers, and inconsistent formats.<br />
          Normalize, scale, or encode data as needed.<br />
          Split data into training, validation, and testing sets.
        </li>

        <li>
          <span className="mr-2">🛠️</span>
          <strong>Feature Engineering</strong><br />
          Select or create relevant features that help the model understand the data better.<br />
          Techniques:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Feature selection (removing irrelevant features)</li>
            <li>Feature transformation (e.g., log scaling)</li>
            <li>Encoding categorical data</li>
          </ul>
        </li>

        <li>
          <span className="mr-2">🧠</span>
          <strong>Model Selection</strong><br />
          Choose the right algorithm based on:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Type of problem</li>
            <li>Data size and quality</li>
            <li>Accuracy vs. complexity trade-off</li>
          </ul>
          Examples:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Decision Trees</li>
            <li>Random Forest</li>
            <li>Logistic Regression</li>
            <li>Support Vector Machine</li>
            <li>Neural Networks</li>
          </ul>
        </li>

        <li>
          <span className="mr-2">🏋️</span>
          <strong>Model Training</strong><br />
          Feed the training data into the chosen model.<br />
          The model learns by adjusting internal parameters to reduce error/loss.
        </li>

        <li>
          <span className="mr-2">📊</span>
          <strong>Model Evaluation</strong><br />
          Evaluate the trained model using the test data.<br />
          Use metrics like:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Accuracy, Precision, Recall, F1-score (for classification)</li>
            <li>RMSE, MAE, R² (for regression)</li>
          </ul>
        </li>

        <li>
          <span className="mr-2">🎯</span>
          <strong>Hyperparameter Tuning</strong><br />
          Improve model performance by adjusting hyperparameters (not learned by the model).<br />
          Use:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Grid Search</li>
            <li>Random Search</li>
            <li>Bayesian Optimization</li>
          </ul>
          Example: Learning rate, number of trees, depth of tree, etc.
        </li>

        <li>
          <span className="mr-2">🚀</span>
          <strong>Deployment</strong><br />
          Deploy the model into a production environment (app, website, server).<br />
          Users or systems can now use the model to make live predictions.
        </li>

        <li>
          <span className="mr-2">🔧</span>
          <strong>Monitoring & Maintenance</strong><br />
          Continuously monitor the model’s performance.<br />
          Check for:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Model drift (performance degradation)</li>
            <li>Data changes</li>
            <li>Update or retrain the model as needed</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
