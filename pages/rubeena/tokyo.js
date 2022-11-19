import React from "react";
import { demoResume } from "../../lib/data";
import Head from "next/head";

export default function index() {
  const resume = demoResume();
  return (
    <div>
      <div className="flex align-middle justify-center bg-zinc-400">
        <div className="container w-[210mm] h-[296mm] bg-white min-w-[210mm]">
          <div className="flex bg-red-700">
            <img
              className="rounded-full p-10 w-48"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
              alt="ProfilePhoto"
            />
            <div className="text-white m-1 py-12">
              <h1 className="text-3xl font-semibold m-1">
                {resume.personal.firstName} {resume.personal.lastName}
              </h1>
              <h1 className="text-sm m-1">{resume.personal.role}</h1>
            </div>
          </div>
          <div className="flex justify-around p-3 border-b-2">
            <div className="font-semibold">{resume.personal.email}</div>
            <div className="font-semibold">{resume.personal.phone}</div>
            <div className="font-semibold">{resume.personal.dob}</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2 h-[230mm] border-r-2 p-8">
              <div>
                <h1 className="text-lg font-bold">Profile</h1>
                <p className="text-sm font-semibold ml-3">{resume.objective}</p>
              </div>
              <div>
                <h1 className="text-lg font-bold mt-4 mb-1">
                  Employment History
                </h1>
                {resume.work.map((item) => (
                  <div className="my-1 ml-3">
                    <span className="text-sm font-bold">
                      ● {item.company}
                      {" - "}
                      <span className="text-sm font-semibold mt-10">
                        {item.designation}
                      </span>
                    </span>
                    <p className="text-xs py-1 font-semibold text-gray-500">
                      ({item.from} to {item.to})
                    </p>
                    <p class="text-sm font-semibold">{item.summary.data}</p>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-lg font-bold mt-4 mb-1">Education</h1>
                {resume.education.map((item) => (
                  <div className="my-1 ml-3">
                    <span className="text-sm font-bold">
                      ● {item.institution}
                      {" - "}
                      <span className="text-sm font-semibold mt-10">
                        {item.fieldOfStudy}
                      </span>
                    </span>
                    <p className="text-xs py-1 font-semibold text-gray-500">
                      ({item.startDate} to {item.endDate})
                    </p>
                    <p class="text-sm font-semibold">{item.summary.data}</p>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-lg font-bold mt-4 mb-1">Certifications</h1>
                {resume.certifications.map((item) => (
                  <div className="my-1 ml-3">
                    <span className="text-sm font-semibold">
                      ● {item.title}
                      {" - "}
                      <span className="text-sm font-semibold mt-10">
                        {item.issuer}
                      </span>
                    </span>
                    <p className="text-xs py-1 font-semibold text-gray-500">
                      ({item.date})
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <div>
                <h1 className="text-lg font-bold mt-5 mb-1">Skills</h1>
                {resume.skills.map((item) => (
                  <div className="ml-2">
                    <h1 className="text-sm font-semibold m-1">● {item.name}</h1>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-lg font-bold mt-5 mb-1">Social</h1>
                {resume.social.map((item) => (
                  <div className="ml-2">
                    <h1 className="text-sm font-semibold m-1">
                      ● {item.network}
                    </h1>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-lg font-bold mt-5 mb-1">Awards</h1>
                <div className="ml-2">
                  {resume.awards.map((item) => (
                    <div className="py-1">
                      <h1 className="text-sm font-bold relative m-1">
                        ● {item.name}
                      </h1>
                      <p className="text-sm font-semibold m-1">
                        {item.awarder}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-lg font-bold mt-5 mb-1">Hobbies</h1>
                {resume.awards.map((item) => (
                  <div className="ml-2">
                    <h1 className="text-sm font-semibold relative m-1">
                      ● {item.name}
                    </h1>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-lg font-bold mt-5 mb-1">Languages</h1>
                {resume.languages.map((item) => (
                  <div className="ml-2">
                    <h1 className="text-sm font-semibold relative m-1">
                      ● {item.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
