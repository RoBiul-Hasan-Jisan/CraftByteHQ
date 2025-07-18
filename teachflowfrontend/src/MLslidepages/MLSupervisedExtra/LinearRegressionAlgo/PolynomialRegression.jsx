import React from 'react';

export default function PolynomialRegression() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Polynomial Regression</h1>
      <p className="text-lg mb-2">
        Polynomial Regression models the relationship between the independent variable X and the dependent variable Y as an nth-degree polynomial.
      </p>
      <p>Equation: <strong>Y = a₀ + a₁X + a₂X² + ... + aₙXⁿ</strong></p>
    </div>
  );
}
