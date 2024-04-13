import React from "react";
import StatsPhoto from "../Assets/statsphoto.png";
import groupPhotoBanner from "../Assets/group.avif";
function Statistics() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 z-10">
      <div
        className="w-full bg-cover bg-center mb-8"
        style={{
          backgroundImage: `url(${groupPhotoBanner})`,
          backgroundSize: "cover",
          height: "250px",
        }}
      ></div>
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-red-500 mb-8">
          Statistics on Shootings
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Wright State Statistics:
          </h2>
          <p className="text-lg">
            Unfortunately, even within our own school, there have been several
            instances of active shootings on and around campus. <br />
            Even in just this year, there was an active shooter false alarm that
            left many students on the Dayton Campus with lasting PTSD. <br />
            In another instance, there was a person shot just across the street
            from campus. The American mass shooting epidemic finds its way into
            all communities.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Shooting Statistics:</h2>
          <p className="text-lg">
            There have been 13 mass shootings on college campuses since 1966
            where at least three people were killed. <br />
            Gunfire on college campuses has killed 91 people in total and
            injured another 240 since 2013. <br />
            Campus shooters usually have prior connections to the campuses they
            target.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Preventative Statistics:
          </h2>
          <div className="mb-8 ">
            <img
              src={StatsPhoto}
              alt="Statistics Photo"
              className=" rounded-lg sm:h-40 h-36
             w-96"
            />
          </div>
          <p className="text-lg">
            According to the Sandy Hook Promise, almost all school mass
            shootings leave some sort of sign. <br />
            Whether this be through words, messages or concerning images on
            social media, in even more than 75% of cases there was some sort of
            warning prior. <br />
            93% of shooters plan their attack well in advance, as well. <br />
            In another shocking statistic, in 80% of cases, at least one other
            person had knowledge of the perpetrators plan but failed to report
            it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
