import React from "react";
import { demoResume } from "../../lib/data";
import Link from "next/link";

export default function index() {
  const resume = demoResume();
  return (
    <div className="bg-slate-200 h-]">
      <div className="bg-zinc-800  w-[210mm] h-[297mm] mx-auto">
        <div className="flex px-6 bg-zinc-800">
          <div className="flex-col mt-[5%] py-3 pl-1 w-[40%] bg-white rounded-xl ">
            {/* image */}
            <div className=" flex text-black   justify-around ">
              <img
                className="w-[60%] h-[50%] rounded-full mb-3 "
                src="https://randomuser.me/api/portraits/women/71.jpg"
              ></img>
            </div>
            {/* name */}
            <div className="flex-col bg-zinc-200 py-2">
              <span className=" text-[20px] font-extrabold pl-3 tracking-wide font-serif ">
                {resume.personal.firstName} {resume.personal.lastName}
              </span>
              <p className="  text-[16px] pl-3 tracking-wider font-thin ">
                {resume.personal.role}
              </p>
            </div>
            {/* network */}
            <div className="py-1 px-2 text-black pt-2">
              <p className="text-[16px] font-bold tracking-wider font-serif px-4 py-2">
                NETWORK
              </p>

              <div className="text-[14px] px-2">
                <div className="px-2">
                  <p>{resume.personal.phone}</p>
                  <p> {resume.personal.email}</p>
                </div>
              </div>
            </div>

            {/* skills */}
            <div className="py-1 px-2 text-black">
              <p className="text-[16px] font-bold tracking-wider font-serif px-4 py-2">
                SKILLS
              </p>
              {resume.skills.map((item) => (
                <div className="text-[14px] px-2">
                  <span className="">
                    <li>
                      {item.name} - {item.level}
                    </li>
                  </span>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
            {/* languages */}
            <div className="py-1 px-2 text-black">
              <p className="text-[16px] font-bold tracking-wider font-serif px-4 py-2">
                LANGUAGES
              </p>
              {resume.languages.map((item) => (
                <div className="text-[14px] px-2">
                  <li>
                    {item.name} : {item.fluency}
                  </li>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
            {/* hobbies */}
            <div className="py-1 px-2 text-black">
              <p className="text-[16px] font-bold tracking-wider font-serif px-4 py-2">
                HOBBIES
              </p>
              {resume.hobbies.map((item) => (
                <>
                  {item.enabled && (
                    <div key={item.name} className="text-[14px] px-2">
                      <li>{item.name}</li>
                      <p>{item.enabled}</p>
                    </div>
                  )}
                </>
              ))}
            </div>

            {/* awards */}
            <div className="py-1 px-2 text-black">
              <p className="text-[16px] font-bold tracking-wider font-serif px-4 py-2">
                AWARDS
              </p>
              {resume.awards.map((item) => (
                <div className="text-[14px] px-2 font-semibold ">
                  <li>
                    {item.name}
                    <p className="px-4 font-mono font-normal">[{item.date}]</p>
                    <p className="px-4 font-normal">{item.awarder}</p>

                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                  </li>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-[60%] mt-[4%] ml-3 mr-3">
            <div className="flex-col">
              {/* profile */}
              <div>
                <p className=" text-white font-semibold text-[16px] tracking-wider  p-1  mt-3 ">
                  PROFILE
                </p>
                <hr></hr>
                <p className="text-[12px] text-white p-1 pt-4">
                  {resume.objective}
                </p>
              </div>
              {/* education */}
              <div className="p-1">
                <p className=" text-white font-semibold text-[16px] tracking-wider  p-1  mt-3 ">
                  EDUCATION
                </p>
                <hr></hr>
                {resume.education.map((item) => (
                  <div className="text-[12px] p-2 text-white">
                    <p className="font-semibold text-[14px] relative text-white">
                      {item.institution}
                      <span className="text-white absolute text-[11px] right-0">
                        [{item.startDate}] - [{item.endDate}]
                      </span>
                    </p>
                    <p className="text-white">{item.fieldOfStudy}</p>
                    <p className="text-white">{item.typeOfDegree} - {item.gpa}</p>
                    <p className="text-white">{item.summary.enabled}</p>
                    <p className="text-white">{item.enabled}</p>
                  </div>
                ))}
              </div>
              {/* Internship */}
              <div className="p-1">
                <p className="text-white font-semibold text-[16px] tracking-wider p-1 mt-3 ">
                  INTERNSHIP
                </p>
                <hr></hr>
                {resume.work.map((item) => (
                  <div className="text-[12px] p-2 text-white">
                    <p className="text-white text-[14px] relative ">
                      <Link href={item.website}>{item.company} - {item.designation}</Link>
                      <span className="absolute right-0 text-[10px] top-1 text-white">[{item.from}] - [{item.to}]</span>
                    </p>
                    
                    <p className="px-4  font-normal"></p>
                    <p className="text-[12px] text-white">{item.summary.data}</p>
                    <p>{item.summary.enabled}</p>
                  </div>
                ))}
              </div>
              {/* projects */}
              <div className="p-1">
                <p className=" text-white font-semibold text-[16px] tracking-wider  p-1  mt-3 ">
                  PROJECTS
                </p>
                <hr></hr>
                {resume.projects.map((item) => (
                  <div className="text-[12px] p-2 text-white">
                    <Link href={item.website}>
                      <p className="relative font-bold text-white tracking-wider">
                        {item.name}
                        <span className="absolute right-0 text-[10px] text-white">
                          [{item.from}] - [{item.to}]
                        </span>
                      </p>
                    </Link>

                    <p className="text-[12px] text-white">
                      {item.summary.data}
                    </p>
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
              {/* certification */}
              <div className="p-1">
                <p className=" text-white font-semibold text-[16px] tracking-wider  p-1  mt-3 ">
                  CERTIFICATION
                </p>
                <hr></hr>
                {resume.certifications.map((item) => (
                  <div className="text-[12px] p-2 text-white">
                    <p className="font-semibold  text-white">{item.title}</p>

                    <p className=" text-white relative">
                      {item.issuer}
                      <span className="absolute right-0 text-[12px] text-white">
                        [{item.date}]
                      </span>
                    </p>
                    <p className="text-[12px] text-white">
                      {item.summary.data}
                    </p>
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
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
