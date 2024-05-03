"use client";
// pages/index.tsx
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PortfolioItem from "../components/PortfolioItem";
import Footer from "../components/Footer";

const IndexPage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PortfolioItem
            image="/images/mobile-app.png"
            title="Moxa Template"
            description="A cutting-edge mobile app template designed for modern needs."
          />
          <PortfolioItem
            image="/images/scroll-mockup.png"
            title="Long Scroll Mockup Pack"
            description="Comprehensive mockup pack for showcasing long-scroll interfaces."
          />
          {/* Add more PortfolioItem components as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
