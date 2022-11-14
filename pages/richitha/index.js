import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { demoResume } from "../../lib/data";
import Link from "next/link";

export default function Home() {
  const resume = demoResume();
  return (
    <>
      <div className="bg-slate-200  p-10">
        <div className="bg-blue-100 w-[210mm] h-[297mm] overflow-auto drop-shadow-2xl mx-auto">
          <div className="m-4 ">
            <div className="flex  space-x-3 ">
              <div className="w-[37%] bg-white rounded-md p-3 ">
                {/* personal details */}
                <div>
                  <div>
                    <img
                      className="w-[85%] h-[30] p-1 pl-7  pb-2  "
                      src="https://randomuser.me/api/portraits/women/71.jpg"
                    ></img>
                    <p className="font-semibold text-2xl text pl-2 pb-1 font-sans tracking-wide text-center">
                      {resume.personal.firstName} {resume.personal.lastName}
                    </p>
                    {/* <p className="text-sm">{resume.personal.dob}</p> */}

                    {/* <p className="text-sm">{resume.personal.email}</p> */}
                    <div>
                      <div className=" pb-2 rounded-sm flex bg-blue-50">
                        {resume.social.map((item) => (
                          <div className="mx-3 mt-2">
                            <span>
                              <Link href={item.url}>
                                <img
                                  src={
                                    "https://www." +
                                    item.network +
                                    ".com/favicon.ico"
                                  }
                                  className="w-5 "
                                />
                              </Link>
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm from-neutral-700">
                        {resume.personal.phone}
                      </p>

                      <div className="text-sm">
                        <p className="text-m font-medium ">HOBBIES</p>
                        {resume.hobbies.map((item) => (
                          <div>
                            <p>{item.name}</p>
                            <p>{item.enabled}</p>
                          </div>
                        ))}
                      </div>
                      <div className="text-sm">
                        <p className="text-m font-medium ">SKILLS</p>
                        {resume.skills.map((item) => (
                          <div>
                            <span className="text-sm">
                              {item.name} - {item.level}
                            </span>
                            <p>{item.enabled}</p>
                          </div>
                        ))}
                      </div>

                      <div className="text-sm">
                        <p className="text-m font-semibold">LANGUAGES</p>
                        {resume.languages.map((item) => (
                          <div>
                            <p>
                              {item.name} : {item.fluency}
                            </p>
                            <p>{item.enabled}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* objective */}

              <div className="bg-white w-[70%]  rounded-md p-3 ">
                <p className="font-semibold text-3xl p-2 pb-3 bg-slate-100 text-center">
                  {resume.personal.role}
                </p>

                <span className="font-bold  m-2 rounded">PROFILE</span>
                <br></br>
                <div>
                  <p className="text-sm">{resume.objective}</p>
                </div>
                <hr className="m-2"></hr>
                <div>
                  <p className="font-bold  m-2 rounded ">AWARDS</p>
                  {resume.awards.map((item) => (
                    <div className="text-sm p-1">
                      <p className="font-semibold">
                        {item.name} - [{item.date}]
                      </p>
                      <p>{item.awarder}</p>

                      {/* <p>{item.summary.data}</p> */}
                      <p>{item.summary.enabled}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 m-4 ">
            <div className="b-[50%] rounded-md  bg-white p-2">
              <p className="font-bold  m-2 ">EDUCATION</p>
              {resume.education.map((item) => (
                <div className="text-sm p-1">
                  <p className="font-semibold">
                    {item.institution} [{item.startDate} - {item.endDate}]
                  </p>
                  <p>{item.fieldOfStudy}</p>
                  <p>{item.typeOfDegree}</p>
                  <p>{item.gpa}</p>

                  {/* <p>{item.summary.data}</p> */}
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
            <div className="bg-white w-[50%] rounded-md p-2 pr-2">
              <p className="font-bold  m-2 ">WORK</p>
              {resume.work.map((item) => (
                <div>
                  <Link href={item.website}>
                    <p className="text-blue-400">{item.company} </p>
                  </Link>
                  <p>
                    {" "}
                    [ {item.from}] - [{item.to}]
                  </p>
                  <p>{item.designation}</p>
                  {/* <p>{item.summary.data}</p> */}
                  <p>{item.summary.enabled}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-3 m-4 ">
            <div className="bg-white w-[50%] rounded-md p-2">
              <p className="font-bold  m-2">PROJECTS</p>
              {resume.projects.map((item) => (
                <div>
                  <Link href={item.website}>
                    <p className="text-blue-400">{item.name}</p>
                  </Link>
                  <p>
                    {item.from}- {item.to}
                  </p>
                  <p>{item.summary.data}</p>
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>

            <div className="bg-white w-[50%] rounded-md p-2">
              <p className="font-bold m-2">CERTIFICATION</p>
              {resume.certifications.map((item) => (
                <div>
                  <p className="font-semibold">
                    {item.title} [{item.date}]
                  </p>
                  <p></p>
                  <p>{item.issuer}</p>
                  {/* <p>{item.summary.data}</p> */}
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
