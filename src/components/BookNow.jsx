// src/components/BookNow.jsx
import React from "react";

const BookNow = () => {
  return (
    <div className="relative z-30 -mt-20 w-full flex justify-center px-4">
      <div className="bg-[#ff6b00] w-full max-w-screen-lg rounded-lg shadow-lg px-6 py-10 md:px-10 md:py-12">
        <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-8">
          RENT A BIKE NOW!
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Bike Model"
            className="px-4 py-3 rounded w-full"
          />
          <input
            type="text"
            placeholder="Pick-up Location"
            className="px-4 py-3 rounded w-full"
          />
          <input
            type="date"
            className="px-4 py-3 rounded w-full"
          />
          <input
            type="text"
            placeholder="Drop-off Location"
            className="px-4 py-3 rounded w-full"
          />
          <input
            type="date"
            className="px-4 py-3 rounded w-full"
          />
          <button
            type="button"
            className="px-6 py-3 border border-white text-white font-bold rounded hover:bg-white hover:text-[#ff6b00] transition w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
