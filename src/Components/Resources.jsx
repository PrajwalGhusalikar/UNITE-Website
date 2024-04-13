import React from "react";
import groupPhotoBanner from "../Assets/group.avif"; 

function Resources() {
  return (
    <div className="flex flex-col items-center pb-10">
      <div
        className="w-full bg-cover bg-center mb-8 rounded-lg overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${groupPhotoBanner})`,
          backgroundSize: "cover",
          height: "250px",
        }}
      >
       
      </div>
      <h1 className="text-4xl font-bold mt-8 mb-6 text-red-500 underline">
        Resources
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-evenly sm:mx-5">
        <div className="m-3 bg-slate-200 rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-600">WSU:</h2>
            <p className="text-lg mb-4 text-gray-600">
               <i className="fa-solid fa-university text-blue-600 mr-2"></i>
              <strong> Wright State University Police: </strong>
              <a href="tel:1-855-353-3783" className="text-blue-600 underline">
                1-855-353-3783
              </a>{" "}
              <br />
             
                Wright State Counseling and Wellness <br />
                <strong> Raider Cares (24 hour-line):{" "}
              </strong>
              <a href="tel:937-775-4567" className="text-blue-600 underline">
                937-775-4567
              </a>
            </p>
          </div>
        </div>
        <div className="m-3 bg-slate-200 rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-600">
              Local:
            </h2>
            <p className="text-lg mb-4 text-gray-600">
              <i className="fa-solid fa-building text-blue-600 mr-2"></i>
              <strong>Fairborn Police Department: </strong>
              <a href="tel:937-754-3000" className="text-blue-600 underline">
                937-754-3000
              </a>{" "}
              <br />
              <br /> <strong> Dayton Police Department</strong> 
               <i className="fa-solid fa-exclamation-triangle text-yellow-600 mr-2"></i>
              Report Suspicious Activity to Ohio Homeland Security
              <br />
              (1-877-OHS-INTEL), or 911 if an emergency or active threat
            </p>
          </div>
        </div>
        <div className="m-3 bg-slate-200 rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-600">
              National:
            </h2>
            <p className="text-lg mb-4 text-gray-600">
              <i className="fa-solid fa-hands-helping text-blue-600 mr-2"></i>
               <strong>Parents for Peace:</strong> A Non-profit org dedicated to preventing
              extremism and violence: Call 24/7 helpline at{" "}
              <a href="tel:844-99-PEACE" className="text-blue-600 underline">
                844-99-PEACE
              </a>{" "}
              <br />
              Centers for Disease Control and Prevention- read more about risk
              factors here <br />
              <i className="fa-solid fa-phone text-blue-600 mr-2"></i>
              <strong>National Suicide Prevention Hotline:</strong>{" "}
              <a href="tel:800-273-8255" className="text-blue-600 underline">
                800-273-8255
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
