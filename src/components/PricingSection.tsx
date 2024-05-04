import Image from "next/image";
import { useState } from "react";
import PricingToggle from "./PricingToggle";
import PricingItems from "./PricingItems";

// components/PricingSection.tsx
const PricingSection = () => {
  return (
    <div className="  h-screen">
      <div className="container mx-auto px-6 mt-10">
        <PricingToggle />
        <PricingItems />
      </div>
    </div>
  );
};

export default PricingSection;
