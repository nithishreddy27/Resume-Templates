import React from "react";
import { demoResume } from "../../lib/data";
import Link from "next/link";

export default function index() {
  const resume = demoResume();
  return (
    <div className="bg-slate-200 h-[290mm] flex align-middle justify-center ">
      <div className="bg-slate-50 w-[210mm] h-[292mm] drop-shadow-2xl mx-auto  min-w-[210mm]  ">
        <div className="m-5 ">
          <div className="flex gap-3">
            <div className="w-[35%] pl-3">
              <img
                className="w-[35mm] h-[30mm] rounded-full my-2"
                src="https://randomuser.me/api/portraits/women/71.jpg"
              ></img>
              {/* network */}
              <div className="py-3">
                <h1 className="text-[16px] font-bold">NETWORK</h1>
                <div className="pl-2 text-[12px]">
                  <p className="">{resume.personal.phone}</p>
                  <p className="">{resume.personal.email}</p>
                </div>
              </div>

              {resume.hobbies.length != 0 && (
                <div className="py-1">
                  <p className="text-[16px] font-bold">HOBBIES</p>
                  {resume.hobbies.map((item) => (
                    <div key={item.name} className="text-[12px]">
                      <p>{item.name}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
              )}

              {resume.skills.length != 0 && (
                <div className="py-1">
                  <p className="text-[16px] font-bold">SKILLS</p>
                  {resume.skills.map((item) => (
                    <div key={item.name}>
                      <span className="text-[12px]">
                        {item.name} - {item.level}
                      </span>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
              )}
              {/* languages */}
              <div className="py-1">
                <p className="text-[16px] font-bold">LANGUAGES</p>
                {resume.languages.length != 0 &&
                  resume.languages.filter((languages) => languages.enabled)
                    .length > 0 && (
                    <div className="">
                      {resume.languages.map((item) => (
                        <>
                          {item.enabled && (
                            <div key={item.name} className="pt-2">
                              <p className="text-[12px]">
                                {item.name} - {item.fluency}
                              </p>
                              <p>{item.enabled}</p>
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                  )}
              </div>

              {/* internship */}
              <div className="py-1">
                <p className="text-[16px] font-bold pb-1">INTERNSHIP</p>
                {resume.work.map((item) => (
                  <div key={item.company} className="">
                    <Link href={item.website}>
                      <li className="relative font-bold text-gray-800 text-[14px] tracking-wider">
                        {item.company}
                      </li>
                      <p>
                        <span className=" text-[12px]">
                          [ {item.from.slice(0, 10)}] - [{item.to.slice(0, 10)}]
                        </span>
                      </p>
                    </Link>

                    <p className="text-[12px]">{item.designation}</p>
                    <p className="pl-1 text-[12px]">{item.summary.data}</p>
                    <p>{item.summary.enabled}</p>
                  </div>
                ))}
              </div>

              <div className="pb-1">
                <p className="text-black font-bold tracking-wider  px-2 py-1 ">
                  AWARDS:
                </p>
                {resume.awards.map((item) => (
                  <div key={item.name} className="text-[12px]">
                    <li className="font-bold text-gray-700">{item.name}</li>
                    <span className="pl-2">[{item.date}]</span>
                    <p className="pl-2">{item.awarder}</p>
                    <p className="pl-2 text-[12px]">{item.summary.data}</p>
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[65%] pr-4 pl-3 ">
              <div className="py-4">
                <p className="font-bold text-center text-[20px]  font-sans tracking-widest ">
                  {resume.personal.firstName} {resume.personal.lastName}
                </p>
                <p className="text-black font-thin text-[16px] tracking-widest text-center  ">
                  {resume.personal.role}
                </p>
              </div>
              <div className=" bg-gray-200 rounded-xl p-1 my-2">
                {resume.objective.length != 0 && (
                  <>
                    <p className=" text-black font-semibold text-[16px] px-3 py-1 tracking-wid  ">
                      PROFILE
                    </p>
                    <p className="text-[12px] text-black px-2 pb-2 ">
                      {resume.objective}
                    </p>
                  </>
                )}
              </div>

              {/* education */}
              {resume.education.length != 0 && (
                <div className="bg-gray-200 rounded-xl p-1 my-2">
                  <p className="text-black font-semibold text-[16px] px-3 py-1 tracking-wid">
                    EDUCATION
                  </p>
                  {resume.education.map((item) => (
                    <div
                      key={item.institution}
                      className="text-[12px] p-1 pl-3"
                    >
                      <p className="relative font-bold text-gray-800 text-[14px]">
                        {item.institution}
                        <span className="absolute right-1 font-normal text-[12px]">
                          [{item.startDate.slice(0, 4)}] - [
                          {item.endDate.slice(0, 4)}]
                        </span>
                      </p>
                      <p className="">{item.fieldOfStudy}</p>

                      <p>
                        {item.typeOfDegree} - {item.gpa}
                      </p>
                      <p>{item.summary.enabled}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
              )}

              {resume.projects.length != 0 && (
                <div className="bg-gray-200 rounded-xl p-1 my-2">
                  <p className="text-black font-semibold text-[16px] px-3 py-1 tracking-wider">
                    PROJECTS
                  </p>

                  {resume.projects.map((item) => (
                    <div key={item.name} className=" text-black pl-3 ">
                      <p className="font-bold relative text-gray-800 text-[14px]  tracking-wider">
                        {item.name}

                        <span className="absolute right-2 font-normal text-[10px]">
                          [{item.from} ] - [ {item.to} ]
                        </span>
                      </p>
                      <p className="text-[12px] pr-1">{item.summary.data}</p>
                      <p>{item.summary.enabled}</p>
                      <p>{item.enabled}</p>
                      <p className="p-2"> </p>
                    </div>
                  ))}
                </div>
              )}

              {resume.certifications.length != 0 && (
                <div className="bg-gray-200 rounded-xl p-1 my-2 pb-2 ">
                  <p className=" text-black font-semibold text-[16px] px-3 py-1 tracking-wider ">
                    CERTIFICATION
                  </p>

                  {resume.certifications.map((item) => (
                    <div key={item.title} className="pt-4 text-black mx-3 ">
                      <p className="font-bold  text-gray-800 text-[14px]  tracking-wider">
                        {item.title}
                      </p>
                      <p className="font-bold relative text-gray-600 text-[13px]  tracking-wider">
                        {item.issuer}
                        <span className="absolute right-0 font-normal text-[10px]">
                          [ {item.date} ]
                        </span>
                      </p>
                      <p className="text-[12px] pr-1">{item.summary.data}</p>
                      <p>{item.summary.enabled}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
