// src/App.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg mb-4">
          This is a simple homepage created using React, Vite, and Tailwind CSS.
        </p>
        <p className="text-lg mb-4">
          I have implemented Breadcrumbs using Material UI and Multi Grid using
          Ag-Grid React
        </p>
        <Link to="/card">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
