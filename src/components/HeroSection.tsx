// components/HeroSection.tsx
import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="relative text-white text-center">
      {/* Background and Overlay */}
      <div className="bg-purple-700 absolute inset-0 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex  items-center justify-center h-screen">
        {/* Profile Image */}
        <Image
          src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="John Smith"
          className=" mb-4 border-4 border-white w-[10rem] h-[22rem] object-fill bg-center rounded-md"
          width={96} // width in pixels
          height={96} // height in pixels
          layout="fixed"
        />

        {/* Tagline */}
        <div className="flex flex-col items-center text-white font-bold ">
          <Image
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="John Smith"
            className="rounded-full mb-4 border-4 border-white"
            width={96} // width in pixels
            height={96} // height in pixels
            layout="fixed"
          />
          <h1 className="text-4xl font-bold mb-2">Thinking for Creativity</h1>
          <p className="text-xl">John Smith</p>
          <p className="text-base font-light">Webflow Developer</p>
        </div>

        {/* Additional UI Elements like the mobile app mockup */}
        <div className="mt-8">
          {/* <img
            src="/path-to-app-mockup.png"
            alt="Mobile App Mockup"
            className="w-40 h-auto mx-auto"
          /> */}
          <Image
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="John Smith"
            className="rounded-full mb-4 border-4 border-white"
            width={96} // width in pixels
            height={96} // height in pixels
            layout="fixed"
          />
          <p className="text-white mt-4">Moxa Template</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
