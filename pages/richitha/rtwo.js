import React from "react";
import { demoResume } from "../../lib/data";
import Link from "next/link";

export default function index() {
  const resume = demoResume();
  return (
    <>
      <div className="bg-gray-300 flex align-middle justify-center h-[290mm]">
        <div className="bg-slate-50 w-[210mm] h-[292mm] drop-shadow-2xl  min-w-[210mm]  ">
          <div className="bg-gray-200 p-4">
            <div className="space-x-2 m-2 border-separate">
              <div className="flex pt-3 pb-2 border-b-4 bg-white border-solid text-black  ">
                <img
                  className="w-[20%] h-[30] p-3 pb-5 pl-7"
                  src="https://randomuser.me/api/portraits/women/71.jpg"
                ></img>
                {/* personal detail */}
                <div className="m-auto">
                  <p className=" text-center text-black text-4xl tracking-widest font-serif m-4 mt-5 ml-8">
                    {resume.personal.firstName} {resume.personal.lastName}
                  </p>
                  <p className="  text-2xl  text-black font-thin  tracking-wider mb-3 ml-10 ">
                    {resume.personal.role}
                  </p>
                </div>
              </div>
            </div>
            <div className="m-2">
              <div className="flex gap-3 ">
                <div className=" min-w-[50%]">
                  <div className=" m-4 ">
                    {resume.personal.objective != 0 && (
                      <>
                        <p className="bg-gray-800 tracking-widest  text-white p-1 w-[100%] rounded-md mt-3 text-center heading">
                          PROFILE 
                        </p>
                        <p className="text-[12px] p-1 ">
                          {resume.objective}
                        </p>
                      </>
                    )}
                  </div>
                  <div>
                    {/* <span className=" bg-gray-800 text-white pt-1 p-1 rounded-sm">PERSONAL</span> */}

                    {/* HOBBIES */}
                    {resume.hobbies.length != 0 &&
                      resume.hobbies.filter((hobbies) => hobbies.enabled)
                        .length > 0 && (
                        <div className="m-3">
                          <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center heading">
                            HOBBIES
                          </p>
                          {resume.hobbies.map((item) => (
                            <>
                              {item.enabled && (
                                <div
                                  key={item.name}
                                  className="pt-1 font-serif text-[12px] pl-4"
                                >
                                  <li>{item.name}</li>
                                  <p>{item.enabled}</p>
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      )}

                    {/* LANGUAGES
                    {resume.languages.length != 0 &&
                      resume.languages.filter((languages) => languages.enabled)
                        .length > 0 && (
                        <div className="m-3">
                          <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center heading">
                            LANGUAGES
                          </p>
                          {resume.languages.map((item) => (
                            <>
                              {item.enabled && (
                                <div key={item.name} className="pt-2 pl-4">
                                  <li className=" text-[12px] text-base font-serif tracking-wide">
                                    {item.name} - {item.fluency}
                                  </li>
                                  <p>{item.enabled}</p>
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      )} */}

                    {/* EDUCATION */}
                    {resume.education.length != 0 &&
                      resume.education.filter((education) => education.enabled)
                        .length > 0 && (
                        <div className="p-2 ">
                          <p className="bg-gray-800 tracking-widest text-center rounded-md text-white p-1 m-1 heading">
                            EDUCATION
                          </p>

                          {resume.education.map((item) => (
                            <>
                              {item.enabled && (
                                <div
                                  key={item.institution}
                                  className="text-base pl-4"
                                >
                                  <p className="font-semibold font-serif text-[13px]">
                                    {item.institution}
                                  </p>
                                  <p className="text-[12px] text-gray-800 font-semibold">
                                    {" "}
                                    [{item.startDate}] - [{item.endDate}]
                                  </p>
                                  <div className="text-[12px]">
                                  <p>{item.fieldOfStudy}</p>
                                  <p>
                                    {item.typeOfDegree} {item.gpa}
                                  </p>
                                  {/* <p>{item.summary.data}</p>
                                  <p>{item.summary.enabled}</p> */}
                                  <p>{item.enabled}</p>
                                  </div>
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      )}

                    {/* SKILLS */}
                    {resume.skills.length != 0 &&
                      resume.skills.filter((skills) => skills.enabled).length >
                        0 && (
                        <div className="p-2 ">
                          <p className="bg-gray-800 tracking-widest rounded-md text-center text-white p-1 mx-2 my-1 heading">
                            SKILLS
                          </p>
                          {resume.skills.map((item) => (
                            <>
                              {item.enabled && (
                                <div
                                  key={item.name}
                                  className=" pl-4 font-serif "
                                >
                                  <li className="text-[12px] p-1">
                                    {item.name} - {item.level}
                                  </li>
                                  <p>{item.enabled}</p>
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      )}
                  </div>

                  {resume.languages.length != 0 &&
                    resume.languages.filter((languages) => languages.enabled)
                      .length > 0 && (
                      <div className="  p-3">
                        <p className="bg-gray-800 tracking-widest rounded-md text-center text-white p-1 mx-2 my-1 heading">
                          PROJECTS
                        </p>
                        {resume.projects.map((item) => (
                          <>
                            {item.enabled && (
                              <div key={item.name} className="p-1 pl-5 ">
                                <p className="font-bold font-serif text-[13px] ">
                                  {item.name}
                                </p>
                                <Link href={`{item.website}$`}>
                                  <p className="font-semibold text-[12px] tracking-wider">
                                    {item.website}
                                  </p>
                                </Link>
                                <p className="text-[12px]">{item.summary.data}</p>
                                <p>{item.summary.enabled}</p>
                                <p>{item.enabled}</p>
                              </div>
                            )}
                          </>
                        ))}
                      </div>
                    )}
                </div>
                <div className="  min-w-[50%] ">
                  {/* NETWORK */}
                  <div className="m-4">
                    <>
                      <h1 className="bg-gray-800 tracking-widest text-white mt-1 p-1 text-center rounded-md heading">
                        NETWORK
                      </h1>
                      <div className="pl-4 text-[12px]">
                        <p className=" tracking-wider">
                          {resume.personal.phone}
                        </p>
                        <p className="tracking-wider">
                          {resume.personal.email}
                        </p>
                      </div>
                    </>

                    {/* INTERNSHIPS */}
                    {resume.work.length != 0 &&
                      resume.work.filter((work) => work.enabled).length > 0 && (
                        <>
                          <p className="bg-gray-800 tracking-widest text-white mt-1 p-1 text-center rounded-md  heading">
                            INTERNSHIPS
                          </p>
                          {resume.work.map((item) => (
                            <>
                              {item.enabled && (
                                <div key={item.company} className="m-2">
                                  <Link href={`{item.website}$`}>
                                    <p className="font-bold text-[13px] font-serif tracking-wide relative">
                                      {item.company}
                                      <span className="font-sans text-[10px] top-1 absolute text-gray-700 right-0">
                                        [{item.from}] - [{item.to}]
                                      </span>{" "}
                                    </p>
                                  </Link>
                                  <p className=" text-[13px] font-semibold">
                                    {item.designation}
                                  </p>
                                  <p className="text-[12px]">{item.summary.data}</p>
                                  <p className="">
                                    {item.summary.enabled}
                                  </p>
                                </div>
                              )}
                            </>
                          ))}
                        </>
                      )}

                    {/* AWARDS */}
                    <div>
                      {resume.awards.length != 0 &&
                        resume.awards.filter((awards) => awards.enabled)
                          .length > 0 && (
                          <div className="mt-5">
                            <p className="bg-gray-800 tracking-widest rounded-md text-center  text-white p-1 m-1 heading">
                              AWARDS
                            </p>
                            {resume.awards.map((item) => (
                              <>
                                {item.enabled && (
                                  <div key={item.name} className=" m-2">
                                    <p className="font-bold font-serif text-[13px] tracking-wide">
                                      {item.name}
                                    </p>
                                    <p className="text-[12px] font-semibold">
                                      Awarder : {item.awarder}{" "}
                                      <span className=" font-bold text-gray-700 font-sans text-[12px] right-5  absolute">
                                        [{item.date}]
                                      </span>
                                    </p>
                                    <p className="text-[12px]">
                                      {item.summary.data}
                                    </p>
                                    <p>{item.summary.enabled}</p>
                                    <p>{item.enabled}</p>
                                  </div>
                                )}
                              </>
                            ))}
                          </div>
                        )}

                      {/* CERTIFICATIONS */}
                      {resume.certifications.length != 0 &&
                        resume.certifications.filter(
                          (certifications) => certifications.enabled
                        ).length > 0 && (
                          <div className="mt-5">
                            <p className="bg-gray-800 tracking-widest rounded-md mt-2 text-center text-white p-1 m-1 heading">
                              CERTIFICATION
                            </p>
                            {resume.certifications.map((item) => (
                              <>
                                {item.enabled && (
                                  <div key={item.title} className="pl-2 pt-1">
                                    <p className="font-semibold  font-serif text-[13px]">
                                      {item.title}{" "}
                                    </p>
                                    <p className="font-bold text-gray-600 text-[13px] font relative">
                                      {item.issuer}{" "}
                                      <span className=" font-bold font-sans text-gray-700 text-[12px] absolute right-1 ">
                                        [{item.date}]
                                      </span>{" "}
                                    </p>
                                    <p className="text-[12px]">
                                      {item.summary.data}
                                    </p>
                                  </div>
                                )}
                              </>
                            ))}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
