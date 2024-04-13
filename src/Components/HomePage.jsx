import React from "react";
import uniteLogo from "../Assets/unitelogo.png";
import bgHome from "../Assets/people-united-hand.avif";

import "../App.css";
import NavBar from "./NavBar";

function HomePage() {
  return (
    <div
      className="h-screen bg-cover"
      style={{ backgroundImage: `url(${bgHome})` }}
    >
      {/* <NavBar/> */}
      <div className="flex flex-col items-center justify-center h-full bg-opacity-50 bg-black p-8">
        <h1 className="text-7xl font-bold text-white mt-16 mb-8 text-center">
          Welcome to U.N.I.T.E!
        </h1>
        <p className="text-xl text-white mb-8 text-center">
          This application is designed to educate students on the risk factors
          of campus shootings.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
