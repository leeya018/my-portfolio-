"use client";
// pages/_app.tsx

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Footer />
      </main>
    </>
  );
}

export default page;
