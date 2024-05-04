// components/PricingToggle.tsx
import { useState } from "react";

const PricingToggle = () => {
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' or 'yearly'

  return (
    <div className="text-center my-4">
      <h2 className="text-3xl font-bold text-blue-600">Plans And Pricing</h2>
      <p className="text-gray-500">
        Try Dropship risk-free with a 7-day free trial.
      </p>
      <div className="mt-4">
        <button
          className={`px-4 py-2 rounded-l-lg ${
            billingCycle === "monthly"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Pay Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${
            billingCycle === "yearly"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setBillingCycle("yearly")}
        >
          Pay Yearly
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Save up to 40% with yearly billing
      </p>
    </div>
  );
};

export default PricingToggle;
