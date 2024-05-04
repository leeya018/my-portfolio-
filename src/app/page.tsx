"use client";
// pages/_app.tsx

import Header from "../components/Header";
import Footer from "../components/Footer";

function page() {
  return (
    <>
      <Header />
      <main>
        <Footer />
      </main>
    </>
  );
}

export default page;
