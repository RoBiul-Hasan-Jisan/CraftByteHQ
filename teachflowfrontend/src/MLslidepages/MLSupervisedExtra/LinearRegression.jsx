import React from "react";
import { useNavigate } from "react-router-dom";

export default function LinearRegression() {
   const navigate = useNavigate();

  const handleRowClick = (path) => {
    navigate(path);
  };
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">🔷 Linear Regression</h1>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">✅ Definition</h2>
        <p>
          Linear Regression is a Supervised Machine Learning algorithm used for predicting continuous numerical values. It finds the best-fit straight line (called the regression line) that explains the relationship between:
        </p>
        <ul className="list-disc list-inside ml-6">
          <li>Independent variable(s) (input features, denoted as <code>X</code>)</li>
          <li>Dependent variable (target/output, denoted as <code>Y</code>)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">🧠 How It Works</h2>
        <p>It assumes a linear relationship between input and output.</p>
        <p className="font-mono bg-gray-100 p-3 rounded">
          Y = mX + c
        </p>
        <p>
          Where:<br />
          <code>Y</code> = predicted output (dependent variable)<br />
          <code>X</code> = input feature (independent variable)<br />
          <code>m</code> = slope (how much Y changes for every unit of X)<br />
          <code>c</code> = intercept (Y value when X = 0)
        </p>

        <p>For multiple linear regression with multiple inputs:</p>
        <p className="font-mono bg-gray-100 p-3 rounded">
          Y = w₁X₁ + w₂X₂ + ⋯ + wₙXₙ + b
        </p>
        <p>
          Where:<br />
          <code>wᵢ</code> = weight coefficient for each input feature<br />
          <code>b</code> = bias (intercept)
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">🧮 Goal of the Model</h2>
        <p>
          Minimize the error between predicted values (<code>Ŷ</code>) and actual values (<code>Y</code>) using a loss function, commonly:
        </p>
        <p className="font-mono bg-yellow-100 p-3 rounded">
          Mean Squared Error (MSE) = (1/n) ∑(Yᵢ - Ŷᵢ)²
        </p>
      </section>

       <section className="space-y-3">
      <h2 className="text-2xl font-semibold">📚 Types of Linear Regression</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2 text-left">Type</th>
            <th className="border border-gray-300 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => handleRowClick('/SimpleLinearRegression')}
          >
            <td className="border border-gray-300 p-2 text-blue-600">
  Simple Linear Regression
</td>

            <td className="border border-gray-300 p-2">1 input variable (X), 1 output (Y)</td>
          </tr>
          <tr
            className="bg-gray-50 cursor-pointer hover:bg-gray-100"
            onClick={() => handleRowClick('/MultipleLinearRegression')}
          >
            <td className="border border-gray-300 p-2 text-blue-600">Multiple Linear Regression</td>
            <td className="border border-gray-300 p-2">Multiple inputs (X₁, X₂, ..., Xₙ), 1 output (Y)</td>
          </tr>
          <tr
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => handleRowClick('/PolynomialRegression')}
          >
            <td className="border border-gray-300 p-2 text-blue-600">Polynomial Regression</td>
            <td className="border border-gray-300 p-2">X is raised to power (non-linear but linear in coefficients)</td>
          </tr>
        </tbody>
      </table>
    </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">🔍 Real-World Example: House Price Prediction</h2>
        <p>Training Data:</p>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-left">Area (sq ft)</th>
              <th className="border border-gray-300 p-2 text-left">Price ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">1000</td>
              <td className="border border-gray-300 p-2">200,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-2">1500</td>
              <td className="border border-gray-300 p-2">300,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">2000</td>
              <td className="border border-gray-300 p-2">400,000</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3">Model learns the linear pattern: <code>Price = 200 × Area</code></p>
        <p>For a new house of 1800 sq ft, prediction is:</p>
        <p className="font-mono bg-gray-100 p-3 rounded">Price = 200 × 1800 = 360,000</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">💡 Key Points</h2>
        <ul className="list-disc list-inside ml-6">
          <li>Type: Regression (continuous output)</li>
          <li>Linearity Assumption: Works best with linear data patterns</li>
          <li>Fast and interpretable</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">✅ Advantages</h2>
        <ul className="list-disc list-inside ml-6">
          <li>Simple and efficient</li>
          <li>Easy to interpret</li>
          <li>Works well when features and output are linearly correlated</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">⚠️ Limitations</h2>
        <ul className="list-disc list-inside ml-6">
          <li>Not suitable for non-linear relationships</li>
          <li>Sensitive to outliers</li>
          <li>Assumes no multicollinearity (independent features should not be highly correlated)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">📚 Types of Linear Regression</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-left">Type</th>
              <th className="border border-gray-300 p-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Simple Linear Regression</td>
              <td className="border border-gray-300 p-2">1 input variable (X), 1 output (Y)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-2">Multiple Linear Regression</td>
              <td className="border border-gray-300 p-2">Multiple inputs (X₁, X₂, ..., Xₙ), 1 output (Y)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Polynomial Regression</td>
              <td className="border border-gray-300 p-2">X is raised to power (non-linear but linear in coefficients)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">📐 Equation of Linear Regression</h2>
        <p>
          <strong>Simple Linear Regression:</strong>
        </p>
        <p className="font-mono bg-gray-100 p-3 rounded">
          Y = mX + c
        </p>
        <p>
          <code>Y</code>: Output (target)<br />
          <code>X</code>: Input (feature)<br />
          <code>m</code>: Slope (weight)<br />
          <code>c</code>: Intercept (bias)
        </p>
        <p>
          <strong>Multiple Linear Regression:</strong>
        </p>
        <p className="font-mono bg-gray-100 p-3 rounded">
          Y = w₁X₁ + w₂X₂ + ... + wₙXₙ + b
        </p>
        <p>
          <code>wᵢ</code>: Coefficients for features<br />
          <code>b</code>: Intercept
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">🎯 Goal of Linear Regression</h2>
        <p>Minimize the loss function (commonly Mean Squared Error - MSE):</p>
        <p className="font-mono bg-yellow-100 p-3 rounded">
          MSE = (1/n) ∑(Yᵢ - Ŷᵢ)²
        </p>
        <p>
          <code>Yᵢ</code>: Actual values<br />
          <code>Ŷᵢ</code>: Predicted values
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">📊 Assumptions of Linear Regression</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-left">Assumption</th>
              <th className="border border-gray-300 p-2 text-left">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Linearity</td>
              <td className="border border-gray-300 p-2">Relationship between X and Y is linear</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-2">Homoscedasticity</td>
              <td className="border border-gray-300 p-2">Equal variance of errors</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Independence of errors</td>
              <td className="border border-gray-300 p-2">No autocorrelation</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-2">Normality of errors</td>
              <td className="border border-gray-300 p-2">Errors are normally distributed</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">No multicollinearity</td>
              <td className="border border-gray-300 p-2">Input features should not be strongly correlated</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">⚖️ Advantages of Linear Regression</h2>
        <ul className="list-disc list-inside ml-6">
          <li>Simple and easy to implement</li>
          <li>Computationally efficient</li>
          <li>Easy to interpret</li>
          <li>Works well when data is linearly related</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">⚠️ Disadvantages of Linear Regression</h2>
        <ul className="list-disc list-inside ml-6">
          <li>Assumes linearity</li>
          <li>Sensitive to outliers</li>
          <li>Cannot model complex (non-linear) relationships</li>
          <li>Prone to overfitting (especially in multiple regression)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">🧑‍💼 Interview Questions on Linear Regression</h2>

        <h3 className="text-xl font-semibold mt-4">🔹 Basic Questions</h3>
        <ul className="list-disc list-inside ml-6">
          <li>What is linear regression?</li>
          <li>What is the difference between simple and multiple linear regression?</li>
          <li>What are the assumptions of linear regression?</li>
          <li>What is the cost function used in linear regression?</li>
          <li>How do you evaluate a linear regression model?</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">🔹 Intermediate Questions</h3>
        <ul className="list-disc list-inside ml-6">
          <li>What is multicollinearity and how do you detect it?<br />
            <em>Answer:</em> High correlation between independent variables; detected using VIF (Variance Inflation Factor).</li>
          <li>What is the difference between R² and Adjusted R²?<br />
            <em>Answer:</em> R² explains variance; Adjusted R² adjusts for the number of predictors.</li>
          <li>How does linear regression handle missing values?<br />
            <em>Answer:</em> It doesn’t handle them natively — preprocessing (e.g., imputation) is required.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">🔹 Advanced Questions</h3>
        <ul className="list-disc list-inside ml-6">
          <li>What is Regularization in Linear Regression?<br />
            <em>Answer:</em> Techniques like Ridge and Lasso to avoid overfitting.</li>
          <li>When would you use linear regression over a decision tree?<br />
            <em>Answer:</em> When the relationship is linear and interpretability is needed.</li>
        </ul>
      </section>
    </div>
  );
}
