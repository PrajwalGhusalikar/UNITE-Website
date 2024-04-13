import React from "react";
import teamPhoto from "../Assets/unitelogo.png";
import groupPhotoBanner from "../Assets/group.avif"; 
import aboutImg from "../Assets/aboutus.png";
function AboutUs() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-full bg-cover bg-center mb-8"
        style={{
          backgroundImage: `url(${groupPhotoBanner})`,
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        {/* Group photo banner */}
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-1">
        <div className="p-4 md:col-span-1  place-content-center  place-self-center">
          <img
            src={aboutImg}
            alt="About Us"
            className="rounded-lg mb-4 sm:h-40 sm:w-60"
          />
          <img
            src={teamPhoto}
            alt="Team Photo"
            className="rounded-lg mb-4 h-40 w-60 hidden sm:block"
          />
        </div>
        <div className="md:col-span-3 p-5">
          <h1 className="text-3xl font-bold mb-4 underline text-red-500">
            About Us
          </h1>
          <p className="mb-4">
            We are U.N.I.T.E which stands for Understand, Notice, Inform Timely,
            and Educate.
          </p>
          <p className="mb-4">
            Our goal is to help students understand the risk factors that can
            contribute to an individual becoming a campus shooter, notice these
            risks factors, inform the appropriate channels in a timely manner,
            and educate others so we all can make Wright State University safer.
          </p>
          <p className="mb-4">
            This app was developed under a Homeland Security initiative called
            Invent2Prevent which focuses on actions to prevent targeted violence
            and terrorism. Our team comprised of Colin Bramlage, Kathleen Ahner,
            and Jillian Dascalos decided to focus on targeted violence happening
            in our community in the form of campus shootings.
          </p>
          <p className="mb-4">
            U.N.I.T.E strives to help educate and expand students’ knowledge on
            contributing factors to potential shooting events on campus and
            mitigate them. We want to provide resources for students to learn
            about risk factors and use that knowledge to help identify
            potentially troubled individuals before they become dangerous.
          </p>
          <p className="mb-4">
            Our application provides resources to help identify warning signs of
            potential shooters and help struggling individuals while also
            educating students on where to report concerns.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
