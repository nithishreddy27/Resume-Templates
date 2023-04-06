import React from "react";
import { demoResume } from "../../lib/data";
import Link from "next/link";

export default function index() {
  const resume = demoResume();
  return (
    <div className="bg-gray-300  h-[290mm]">
      <div className="bg-slate-50 w-[210mm] h-[297mm] mx-auto   ">
        <div className="">
          <div className="flex mx-2 mt-[2%]  ">
            <img
              className="h-[38mm] p-1  m-2"
              src="https://randomuser.me/api/portraits/women/71.jpg"
            ></img>

            <div className="right-0 w-full">
              <p className=" text-black font-bold text-[16px] p-1 pt-3 pl-4 tracking-wide mt-1 heading ">
                PROFILE
              </p>
              <p className="text-[12px] text-black p-2 pl-2 pt-1">
                {resume.objective}
              </p>
            </div>
          </div>
          <div className=" bg-black px-4 py-1">
            <span className="text-[16px] bg-white p-1 pl-2 rounded-sm  text-black tracking-wider font-thin  ml-2">
              {resume.personal.role}
            </span>
            <span className=" text-[18px] pl-[10%] text-white tracking-wide text-right font-serif ">
              {resume.personal.firstName} {resume.personal.lastName}
            </span>
          </div>

          <div className="relative flex">
            <div className="bg-gradient-to-t   from-gray-300 w-[40%]">
              <div className=" ">
                <div className="flex px-3 py-1">
                  <div className="">
                    {resume.skills.length != 0 && (
                      <div className="py-1">
                        <p className="text-black px-2 font-bold tracking-wider text-[16px] heading">
                          SKILLS
                        </p>
                        {resume.skills.map((item) => (
                          <div key={item.name} className="ml-2">
                            <span className="text-[12px]  ">
                              <li>
                                {item.name} - {item.level}
                              </li>
                            </span>
                            <p>{item.enabled}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Languages */}
                    {resume.languages.length != 0 && (
                      <div className="py-1">
                        <p className="text-black px-2 font-bold tracking-wider text-[16px] heading">
                          LANGUAGES
                        </p>
                        {resume.languages.map((item) => (
                          <div key={item.name} className="ml-2">
                            <li className="text-[12px]">
                              {item.name} : {item.fluency}
                            </li>
                            <p>{item.enabled}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* awards */}
                    {resume.awards.length != 0 && (
                      <div className="py-1">
                        <p className="text-black px-2 font-bold tracking-wider text-[16px] heading">
                          AWARDS
                        </p>
                        {resume.awards.map((item) => (
                          <div key={item.name} className="ml-2">
                            <li className="">
                              <span className="text-[14px] font-semibold">
                                {" "}
                                {item.name}
                              </span>
                              <div className="pl-5">
                                <p className="relative  text-[14px]">
                                  {item.awarder}
                                  <span className="absolute right-0">
                                    {" "}
                                    [{item.date}]{" "}
                                  </span>
                                </p>
                                <p className="text-[12px] ">
                                  {item.summary.data}
                                </p>
                                <p className="text-[12px]">
                                  {item.summary.enabled}
                                </p>
                                <p>{item.enabled}</p>
                              </div>
                            </li>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* hobbies */}
                    {resume.hobbies.length != 0 && (
                      <div className="py-1">
                        <p className="text-black  px-2 font-bold tracking-wider text-[16px]  heading">
                          HOBBIES
                        </p>
                        {resume.hobbies.map((item) => (
                          <div className="ml-2" key={item.name}>
                            <li className="text-[12px]">{item.name}</li>
                            <p>{item.enabled}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* projects */}
                    {resume.projects.length != 0 && (
                      <div className=" py-1">
                        <p className="text-black  px-2 font-bold tracking-wider text-[16px]  heading  ">
                          PROJECTS
                        </p>

                        {resume.projects.map((item) => (
                          <div key={item.name} className="py-1">
                            <div className=" ml-2 text-black ">
                              <p className="tracking-wide text-[14px] font-semibold">
                                {item.name}
                              </p>
                              <p className="text-[12px]">
                                [{item.from}] - [{item.to}]
                              </p>

                              <Link href={item.website}>
                                <p className="text-[12px]">{item.website}</p>
                              </Link>
                              <p className="pr-2 text-sm  ">
                                {item.summary.data}
                              </p>
                              <p>{item.summary.enabled}</p>
                              <p>{item.enabled}</p>
                              <p className="p-2"> </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[70%] py-2 px-3">
              {/* education */}
              {resume.education.length != 0 && (
                <div className="py-1 ">
                  <p className=" text-black font-bold px-3 py-1 text-[16px] tracking-wide  heading">
                    EDUCATION
                  </p>
                  <hr></hr>
                  {resume.education.map((item) => (
                    <div
                      key={item.institution}
                      className="text-[12px] p-2 text-black "
                    >
                      <p className="relative text-[14px] font-semibold text-black ">
                        {item.institution}
                        <span className="absolute font-normal text-[12px] right-3">
                          [{item.startDate}] - [{item.endDate}]
                        </span>
                      </p>
                      <p>{item.typeOfDegree}</p>
                      <p>
                        {item.fieldOfStudy} - {item.gpa}
                      </p>
                      <p>{item.summary.enabled}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
              )}

              {resume.work.length != 0 && (
                <div className="py-1">
                  <p className=" text-black font-bold px-3 py-1 text-[16px] tracking-wide heading">
                    INTERNSHIP
                  </p>
                  <hr></hr>
                  {resume.work.map((item) => (
                    <div
                      key={item.company}
                      className="text-[12px] p-2 text-black "
                    >
                      <p className="relative font-semibold text-[14px] text-black ">
                        {item.company}
                        <span className="absolute font-normal text-[12px] right-0">
                          [{item.from}] - [{item.to}]
                        </span>
                      </p>
                      <p>{item.designation}</p>
                      <p>{item.summary.data}</p>
                      {/* <p>{item.gpa}</p> */}
                      <p>{item.summary.enabled}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
              )}

              {resume.certifications.length != 0 && (
                <div className="py-1">
                  <p className=" text-black font-bold px-3 py-1 text-[16px] tracking-wider heading">
                    CERTIFICATION
                  </p>
                  <hr className=""></hr>
                  {resume.certifications.map((item) => (
                    <div
                      key={item.title}
                      className="text-[12px] p-2 text-black"
                    >
                      <p className="relative font-semibold text-[14px]">
                        {item.title}{" "}
                        <span className="right-0 absolute font-normal text-[10px]">
                          [{item.date}]
                        </span>
                      </p>

                      <p>{item.issuer}</p>
                      <p>{item.summary.data}</p>
                      <p>{item.summary.enabled}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="py-1">
                <p className="text-black font-bold tracking-wider  px-3 py-1 text-[16px]   ">
                  PROJECTS
                </p>
                <hr></hr>
                {resume.projects.map((item) => (
                  <div className="text-[12px] p-2 text-black">
                    <p className="relative font-semibold text-[14px]">
                      {item.name}
                      <span className="absolute right-0 font-normal text-[10px]">
                        {" "}
                        [{item.from}] - [{item.to}]
                      </span>
                    </p>
                    <Link href={item.website}>
                      <p className="text-[12px]">{item.name}</p>
                      <p className="text-[12px]">{item.summary.data}</p>
                    </Link>

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
