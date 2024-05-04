import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="flex h-[60vh] justify-between gap-2 mx-auto  w-[80vw] mt-10">
      <div className="flex-grow p-8 flex-1  flex flex-col gap-6 ">
        <h1 className="text-5xl font-bold text-gray-800">
          <span className="text-red-500">Discover</span> What Other Sellers Make
        </h1>
        <p className="text-gray-600 mt-2">
          Add Shopify stores and products to Sales Tracker to track performance
          over time, monitor sales, and spot the next big opportunity before
          others.
        </p>
        <div className="mt-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Start Free Trial
          </button>
          <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Watch Tutorial
          </button>
        </div>
        <div className="mt-8">
          {/* Sales summary and search functionality will be added here */}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search Tracked Stores..."
          />
        </div>
      </div>

      <div className="p-8">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1675700415013-48ade09d842a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={100}
          height={100}
          alt="Picture of the author"
          className="flex-1 rounded-md shadow-xl w-[500px] h-[500px]"
        />
      </div>
    </div>
  );
}
