import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { demoResume } from "../../lib/data";

export default function index() {
  const resume = demoResume();
  return (
    <div className="flex align-middle justify-center bg-zinc-300">
      <div className="container w-[210mm] h-[297mm] bg-white p-10 min-w-[210mm] m-10">
        <div className="h-auto pb-10 border-b-4">
          <div>
            <h1 className="text-4xl font-sans font-semibold">
              {resume.personal.firstName} {resume.personal.lastName}
            </h1>
            <h1 className="text-sm text-gray-500 font-semibold mt-4">
              {resume.personal.role}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-10">
          <div className="border-r-4 pr-10">
            <div>
              <h1 className="text-2xl font-semibold">DETAILS</h1>
              <hr className="w-[15%] h-1 bg-black"></hr>
              <h1 className="text-sm font-semibold pt-3">
                DOB
                <span className="text-sm text-gray-500">
                  {" : "}
                  {resume.personal.dob}
                </span>
              </h1>
              <h1 className="text-sm font-semibold pt-3">
                PHONE
                <span className="text-sm text-gray-500">
                  {" : "}
                  {resume.personal.phone}
                </span>
              </h1>
              <h1 className="text-sm font-semibold pt-3">
                EMAIL
                <span className="text-sm text-gray-500">
                  {" : "}
                  {resume.personal.email}
                </span>
              </h1>
              {resume.social.map((item) => (
                <div className="text-sm font-semibold pt-3">
                  <a href="{item.url}">{item.network}</a>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-2xl font-semibold pt-5">EDUCATION</h1>
              <hr className="w-[15%] h-1 bg-black"></hr>
              {resume.education.map((item) => (
                <div className="my-5">
                  <span className="text-sm font-bold">{item.institution}</span>
                  <p className="text-xs py-1 font-semibold text-gray-500">
                    {item.fieldOfStudy}{" "}
                    <span className="text-xs font-semibold text-gray-500">
                      ({item.startDate} to {item.endDate})
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <div className="">
              <h1 className="text-2xl font-semibold pt-2">SKILLS</h1>
              <hr className="w-[15%] h-1 bg-black"></hr>
              {resume.skills.map((item) => (
                <div>
                  <h1 className="text-sm text-gray-800 pt-2">{item.name}</h1>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-2xl font-semibold pt-5">HOBBIES</h1>
              <hr className="w-[15%] h-1 bg-black"></hr>
              {resume.hobbies.map((item) => (
                <div>
                  <h1 className="text-sm text-gray-800 pt-2">{item.name}</h1>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-2xl font-semibold pt-5">LANGUAGES</h1>
              <hr className="w-[15%] h-1 bg-black"></hr>
              {resume.languages.map((item) => (
                <div>
                  <h1 className="text-sm text-gray-800 pt-2">{item.name}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 pl-10">
            <div>
              <h1 className="text-2xl font-semibold">PROFILE</h1>
              <hr className="w-[8%] h-1 bg-black"></hr>
              <p className="text-sm text-gray-500 py-5">{resume.objective}</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold pt-5 border-t-2">
                EMPLOYMENT HISTORY
              </h1>
              <hr className="w-[8%] h-1 bg-black"></hr>
              {resume.work.map((item) => (
                <div className="my-5">
                  <span className="text-sm font-bold mt-10">
                    {item.company}
                    {" - "}
                    <span className="text-sm font-bold mt-10">
                      {item.designation}
                    </span>
                  </span>
                  <p className="text-xs py-1 font-semibold text-gray-500">
                    ({item.from} to {item.to})
                  </p>
                  <p class="text-sm text-gray-500">{item.summary.data}</p>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-2xl font-semibold pt-5 border-t-2">
                PROJECTS
              </h1>
              <hr className="w-[8%] h-1 bg-black"></hr>
              {resume.projects.map((item) => (
                <div className="my-5">
                  <span className="text-sm font-bold mt-10">
                    <a href="{item.website}">{item.name}</a>
                  </span>
                  <p className="text-xs py-1 font-semibold text-gray-500">
                    ({item.from} to {item.to})
                  </p>
                  <p class="text-sm text-gray-500">{item.summary.data}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
