import React from "react";
import groupPhotoBanner from "../Assets/group.avif"; // Import your group photo banner here

function RiskFactors() {
  return (
    <div className="flex flex-col items-center pb-10 ">
      <div
        className="w-full bg-cover bg-center mb-8 rounded-lg"
        style={{
          backgroundImage: `url(${groupPhotoBanner})`,
          backgroundSize: "cover",
          height: "250px",
        }}
      >
      </div>
      <h1 className="text-4xl font-bold mt-8 mb-6 text-red-500 underline">
        Risk Factors
      </h1>
      <div className="max-w-6xl bg-gray-100 rounded-lg overflow-hidden shadow-sm p-6 sm:px-8">
        <p className="text-lg mb-4">
          It is important to note that just because someone may exhibit risk
          factors, it does not always mean violence will occur. The following
          risk factors are just consistent with past mass shooters, not everyone
          who displays these factors are going to commit acts of domestic
          terrorism
        </p>
        <p className="text-lg m-4">
          Some common risk factors defined by the CDC include:
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 place-items-center gap-4">
          <div className="flex items-start bg-slate-200 rounded-lg overflow-hidden shadow-lg p-3">
            <i className="fa-solid fa-user text-3xl text-blue-600 mr-4" />
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-600">
                Individual:
              </h2>
              <ul className="text-lg list-disc pl-6">
                <li>Involvement with drugs and alcohol</li>
                <li>High emotional distress in situations</li>
                <li>Poor academic performance</li>
                <li>Social rejection by peers</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start bg-slate-200 rounded-lg overflow-hidden shadow-lg p-3">
            <i className="fa-solid fa-people-roof text-3xl text-green-600 mr-4" />
            <div>
              <h2 className="text-xl font-semibold mb-2 text-green-600">
                Family:
              </h2>
              <ul className="text-lg list-disc pl-6">
                <li>Low parental involvement</li>
                <li>Poor monitoring and supervision of children</li>
                <li>Parental substance abuse or criminality</li>
                <li>Low parental education and income</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-lg mt-4">
          If you see someone struggling with these things, start to look for
          other things. Something as simple as checking someone's social media
          statuses could be enough to prevent future violence.
        </p>
      </div>
    </div>
  );
}

export default RiskFactors;
