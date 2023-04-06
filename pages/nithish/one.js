<<<<<<< HEAD
import React from "react";
import { demoResume } from "../../lib/data";
import Link from "next/link";

export default function one() {
  const resume = demoResume();
  return (
    <div className="bg-gray-300 flex align-middle justify-center h-[290mm]">
      <div className="bg-slate-50 w-[210mm] h-[292mm] overflow-auto drop-shadow-2xl flex flex-row min-w-[210mm]">
        <div className="absolute left-44 top-5 border-[3px] border-gray-500 h-40 w-96 bg-white text-center">
          <h1 className="mt-8 font-extrabold text-2xl tracking-[3px]">
            {resume.personal.firstName} {resume.personal.lastName}
          </h1>
          <h1 className="mt-3">{resume.personal.role}</h1>  


          <div className="mt-2 mb-4 flex  justify-center align-middle">
            {
                resume.social.map(item =>(
                    <div className="mx-5 mt-1">
                        <span className=""><Link href={item.url}><img src={"https://www."+item.network+".com/favicon.ico"} className="w-5 grayscale-[40%] "/></Link></span>
                    </div>
                ))
            }
          </div>
        </div>
        <div className="w-[40%] bg-gray-200">
        <div className="mt-52 mx-10 flex flex-col">
                <h4 className="font-bold tracking-[4px]">EDUCATION</h4>
                <hr className="w-[100%] h-1 bg-black my-2"/>

            {resume.education.map((item) => (
              <div className="flex flex-col">
                <span className="text-black font-semibold mt-4">
                  {item.institution}
                </span>
                <span className="mb-2 font-semibold">
                  ({item.startDate} {item.endDate})
                </span>

                <span className="font-semibold">{item.typeOfDegree}</span>
                <span className="">{item.fieldOfStudy}</span>

                <span className="mb-4">
                  <b>GPA - </b> {item.gpa}
                </span>
              </div>
            ))}
          </div>
          <div className="mx-10 flex flex-col mt-4">
            <h4 className="font-bold tracking-[4px]">SKILLS</h4>
            <hr className="w-[100%] h-1 bg-black my-2" />
            {resume.skills.map((item) => (
              <>
                <span className="font-semibold mt-1">{item.name}</span>
                <span className=" mt-1 mb-3">{item.level}</span>
              </>
            ))}
          </div>
          <div className="mx-10 flex flex-col mt-4">
            <h4 className="font-bold tracking-[4px]">HOBBIES</h4>
            <hr className="w-[100%] h-1 bg-black my-2" />
            {resume.hobbies.map((item) => (
              <>
                <span className="font-semibold mt-1">{item.name}</span>
              </>
            ))}
          </div>
          <div className="mx-10 flex flex-col mt-4">
            <h4 className="font-bold tracking-[4px]">LANGUAGES</h4>
            <hr className="w-[100%] h-1 bg-black my-2" />
            {resume.languages.map((item) => (
              <>
                <span className="font-semibold mt-1">{item.name}</span>
              </>
            ))}
          </div>
        </div>
        <div className="w-[60%] mt-52 mx-10">
          <h2 className="font-bold tracking-[4px]">OBJECTIVE</h2>
          <hr className="w-[100%] h-1 bg-black my-1" />
          <p className="my-4">{resume.objective}</p>

          <h2 className="font-bold tracking-[4px]">PROJECTS</h2>
          <hr className="w-[100%] h-1 bg-black my-1" />

          {resume.projects.map((item) => (
            <>
              <div className="my-4">
                <span className="text-black font-bold mt-3">
                  {item.name} ({" "}
                  <span className="text-black font-semibold">
                    {item.from} to {item.to}
                  </span>{" "}
                  ){" "}
                </span>

                <p className="ml-4 mt-2">{item.summary.data}</p>
              </div>
            </>
          ))}

          <h2 className="font-bold tracking-[4px]">WORK</h2>
          <hr className="w-[100%] h-1 bg-black my-1" />
          {resume.work.map((item) => (
            <>
              <div className="flex flex-col">
                {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                <span className="text-black font-bold mt-3">
                  {item.company}{" "}
                  <span className="font-semibold">
                    ({item.from} to {item.to})
                  </span>
                </span>
                <span className="text-black font-semibold mx-4">
                  {item.designation}
                </span>
                <p className="ml-4">{item.summary.data}</p>
              </div>
            </>
=======
<div>
  <div className="first w-[85mm] h-[285mm] bg-slate-300">
    <div className="photo">
      <div className="px-20 pt-10 pb-5">
        <img
          src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
          className="w-[100px] h-[100px]"
        ></img>
      </div>
    </div>
    <div className="personal">
      <div className="dob pl-10 pt-3">
        <i className="bx bxs-calendar pr-4 text-lg"></i>
        <span className="text-base relative bottom-[3px]">
          {details.personal.dob}
        </span>
      </div>
      <div className="phone pl-10 pt-1">
        <i className="bx bxs-phone pr-4 text-lg"></i>
        <span className="text-base relative bottom-1">
          {details.personal.phone}
        </span>
      </div>
      <div className="mail pl-10 pt-1">
        <i className="bx bxs-envelope pr-4 text-lg"></i>
        <span className="text-base relative bottom-1">
          {details.personal.email}
        </span>
      </div>
      <div className="social px-14 grid grid-cols-6 pb-4">
        {details.social.map((item) => (
          <div className="pr-2 pt-1" key={item.network}>
            <h1>
              <Link href={`${item.url}`}>
                <img
                  src={"https://www." + item.network + ".com/favicon.ico"}
                  className="w-5 grayscale-[40%]"
                ></img>
              </Link>
            </h1>
          </div>
        ))}
      </div>
    </div>
    {details.education.length != 0 && (
      <div className="education">
        <h2 className="text-center text-xl font-serif font-medium underline">
          E D U C A T I O N
        </h2>
        {details.education.map((item) => (
          <p className="pl-10 pr-5 pt-5" key={item.institution}>
            <span className="font-medium">{item.institution}</span>
            <span className="font-medium">
              <br />({item.startDate} to {item.endDate})
            </span>
            <br />
            <i className="bx bxs-graduation"></i> {item.typeOfDegree} in{" "}
            {item.fieldOfStudy} ({item.gpa})
          </p>
        ))}
      </div>
    )}
    {details.certifications.length != 0 && (
      <div className="certifications">
        <h2 className="text-center text-xl font-serif font-medium underline pt-5">
          C E R T I F I C A T I O N S
        </h2>
        {details.certifications.map((item) => (
          <p className="pl-10 pr-5 pt-3" key={item.title}>
            <i className="bx bxs-square text-xs pr-3"></i>
            {item.title} from {item.issuer}
          </p>
        ))}
      </div>
    )}
    {details.skills != 0 && (
      <div className="skills">
        <div className="pl-10">
          <h2 className="text-center text-xl font-serif font-medium underline pt-5 pb-5">
            S K I L L S
          </h2>
          {details.skills.map((item) => (
            <span className="pr-2" key={item.name}>
              {item.name}{" "}
            </span>
>>>>>>> e80f81e6535c88b39d26bc46fa6527abc98a6681
          ))}
        </div>
      </div>
    )}
  </div>
  <div className="second bg-slate-100 w-[125mm] h-[285mm]">
    <div className="name">
      <div className="text-3xl mx-20 mt-10 font-semibold border-b-[1px] border-gray-600">
        <h1>{details.personal.firstName}</h1>
        <h1>{details.personal.lastName}</h1>
        <h2 className="text-lg font-normal py-3">{details.personal.role}</h2>
      </div>
    </div>
    {details.personal.objective.length != 0 && (
      <div className="career-objective">
        <h2 className="text-center text-xl font-serif font-medium underline pt-6">
          C A R E E R O B J E C T I V E
        </h2>
        <p className="pl-10 pr-5 pt-5">{details.personal.objective}</p>
      </div>
    )}
    {details.work.length != 0 && (
      <div className="experience">
        <h2 className="text-center text-xl font-serif font-medium underline pt-5">
          E X P E R I E N C E
        </h2>
        {details.work.map((item) => (
          <p className="pl-10 pr-5 pt-5" key={item.company}>
            <span className="font-medium text-lg pr-3">
              {item.designation} in {item.company}
            </span>
            <br></br>({item.from} to {item.to})<br />
            <Link href={`${item.website}`}>{item.website}</Link>
            <p className="pr-5">{item.summary.data}</p>
            <br></br>
          </p>
        ))}
      </div>
    )}
    {/* <div className="projects">
                <h2 className="text-center text-xl font-serif font-medium underline pt-5">
                  P R O J E C T S
                </h2>
                {details.projects.map((item) => (
                  <p className="pl-10 pr-5 pt-5">
                    <span className="font-medium text-lg pr-3">
                      {item.name}
                    </span>{" "}
                    ({item.from} to {item.to})<br />
                    <Link href={item.website}>{item.website}</Link>
                    <br></br>
                  </p>
                ))}
              </div> */}
    {details.awards.length != 0 && (
      <div className="awards">
        <h2 className="text-center text-xl font-serif font-medium underline pt-5">
          A W A R D S
        </h2>
        {details.awards.map((item) => (
          <p className="pl-10 pr-5 pt-3" key={item.name}>
            <i className="bx bxs-award pr-1"></i>
            <span className="font-medium">{item.name}</span> from {item.awarder}
          </p>
        ))}
      </div>
    )}
  </div>
</div>;
