// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Twitter
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Dribbble
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Behance
          </a>
        </div>
        <div className="mt-4">
          © {new Date().getFullYear()} Your Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
