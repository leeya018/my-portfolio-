// components/HeroSection.tsx
import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-purple-700 flex text-white text-center flex-col ">
      {/* Background and Overlay */}
      {/* <div className="bg-purple-700 absolute inset-0 z-0"></div> */}

      {/* Tagline */}
      <div className=" flex flex-col items-center text-white font-bold py-10 mx-auto ">
        <Image
          src="https://images.unsplash.com/profile-fb-1611877906-90959b365216.jpg?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
          alt="Lee Yahav"
          className="rounded-full mb-4 border-4 border-white w-44 h-44 "
          width={96} // width in pixels
          height={96} // height in pixels
          layout="fixed"
        />
        <h1 className="text-4xl font-bold mb-2">Thinking for Creativity</h1>
        <p className="text-xl">Lee Yahav</p>
        <p className="text-base font-light">Web Developer</p>
      </div>
      {/* icons  */}
      <div className=" flex items-center justify-between mx-auto gap-10 text-blue-500 ">
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>
    </div>
  );
};

export default HeroSection;

function Icon() {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="-10.5 -9.45 21 18.9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out hover:rotate-180 duration-1000"
      >
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" stroke-width="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    </>
  );
}
