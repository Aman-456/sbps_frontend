import React, { useState } from 'react';
import img from "../../images/popupimg.jpg"
const CreateContestPopUp = ({isOpen, setIsOpen, number}) => {


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to open the sidebar */}
      {/* <button
        className="fixed top-4 right-4 bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md"
        onClick={toggleSidebar}
      >
        Open 100 Square Contest
      </button> */}

      {/* Sidebar */}
      <div
      style={{scrollbarWidth:'none'}}
        className={`fixed top-0 right-0 h-full md:w-[25%] overflow-y-auto bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
          <h2 className="text-lg font-bold">{number === "100" ? '100 Square Contest' : number === "25" ? '25 Square Contest' : number === "50" ? '50 Square Contest': "Super Bowl Squares" } </h2>
          <button
            className="text-gray-600 text-2xl"
            onClick={toggleSidebar}
          >
            &times;
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">{number === null ? 'Ready to Create Your FREE Online Super Bowl Squares Contest for the 2025 Super Bowl?': 'Ready to Begin?'}</h3>
          <img
          style={{display: number === "100" || number === null ? ' ' : "none"}}
            src={img}
            alt="Contest grid"
            className="w-full mb-4"
          />
            <h3 style={{display: number === null ? '' : 'none'}} className="text-xl font-semibold mb-4">Ready to Begin?</h3>
          <p className="text-sm text-gray-600 mb-6">
            The process takes 15 seconds and is free! Just fill out the form
            below and hit the button!
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Your First Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Your Last Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
            style={{backgroundColor:'rgb(99, 102, 241)',}}
              type="submit"
              className="w-[60%]  text-[16px] hover:bg-blue-700  text-white py-2 px-4 rounded-lg"
            >
              Create My Contest!
            </button>
          </form>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default CreateContestPopUp;