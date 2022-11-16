import React from "react";
import { demoResume } from "../../lib/data";
import Head from "next/head";

export default function index() {
  const resume = demoResume();
  return (
    <div>
      <div className="flex align-middle justify-center bg-zinc-400">
        <div className="container w-[210mm] h-[297mm] bg-white min-w-[210mm] m-10">
          <div className="absolute mt-10 z-10 w-[210mm] flex bg-gradient-to-r from-gray-300 to-slate-50">
            <img
              className="rounded-full ml-10 border-[12px] border-cyan-800 w-48"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
              alt="ProfilePhoto"
            />
            <div className="m-14">
              <h1 className="text-4xl font-semibold">
                {resume.personal.firstName} {resume.personal.lastName}
              </h1>
              <h1>{resume.personal.role}</h1>
            </div>
          </div>
          <div className="grid grid-cols-3 z-0 h-[297mm]">
            <div className="bg-cyan-800 text-white">
              <div className="mt-64 mx-6">
                <div>
                  <h1 className="border-2 border-white  mt-5 mb-3 flex justify-center align-middle py-2">
                    CONTACTS
                  </h1>
                  <h1>{resume.personal.email}</h1>
                  <h1>{resume.personal.phone}</h1>
                  <h1>{resume.personal.dob}</h1>
                </div>
                <div>
                  <h1 className="border-2 border-white  mt-5 mb-3 flex justify-center align-middle py-2">
                    SOCIAL
                  </h1>
                  {resume.social.map((item) => (
                    <div>
                      <h1 className="">{item.network}</h1>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="border-2 border-white  mt-5 mb-3 flex justify-center align-middle py-2">
                    EDUCATION
                  </h1>
                  {resume.education.map((item) => (
                    <div className="py-1 my-2">
                      <h1 className="text-xs">{item.endDate.slice(0, 4)}</h1>
                      <h1 className="text-lg">{item.institution}</h1>
                      <h1 className="text-xs">{item.fieldOfStudy}</h1>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="border-2 border-white  mt-5 mb-3 flex justify-center align-middle py-2">
                    SKILLS
                  </h1>
                  {resume.skills.map((item) => (
                    <div>
                      <h1 className="relative">
                        {item.name}
                        <span className="text-xs absolute right-0 py-1">
                          {item.level}
                        </span>
                      </h1>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="border-2 border-white  mt-5 mb-3 flex justify-center align-middle py-2">
                    HOBBIES
                  </h1>
                  {resume.hobbies.map((item) => (
                    <div>
                      <h1 className="">{item.name}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-2 text-black">
              <div className="mt-64 mx-6">
                <div>
                  <h1 className="text-xl border-b-2 border-black mb-3">
                    PROFILE
                  </h1>
                  <p className="text-sm">{resume.objective}</p>
                </div>
                <div>
                  <h1 className="text-xl border-b-2 border-black mb-3 mt-5">
                    WORK EXPERIENCE
                  </h1>
                  {resume.work.map((item) => (
                    <div className="py-1">
                      <h1 className="font-semibold relative">
                        {item.company}
                        <span className="absolute right-0 text-xs">
                          {item.from} - {item.to}
                        </span>
                      </h1>
                      <p className="text-sm">{item.designation}</p>
                      <p class="">{item.summary.data}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="text-xl border-b-2 border-black mb-3 mt-5">
                    CERTIFICATIONS
                  </h1>
                  {resume.certifications.map((item) => (
                    <div className="py-1">
                      <h1 className="font-semibold relative">
                        {item.issuer}
                        <span className="absolute right-0 text-xs">
                          {item.date}
                        </span>
                      </h1>
                      <p className="text-sm">{item.designation}</p>
                      <p class="">{item.summary.data}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
