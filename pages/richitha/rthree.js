import React from "react";
import { demoResume } from "../../lib/data";
import Link from "next/link";

export default function index() {
  const resume = demoResume();
  return (
    <>
      <div className="bg-gray-300 flex align-middle justify-center h-[290mm]">
        <div className="bg-slate-50 w-[210mm] h-[292mm] drop-shadow-2xl  min-w-[210mm]  ">

        <div className="flex " >
        <img className="h-[38mm] p-1   m-2" src="https://randomuser.me/api/portraits/women/71.jpg"></img>
      
    {/* {resume.social.length != 0 && (
     <div key={item.network}>
      {resume.social.map((item) => (
        <div key={item.network} className="mx-3 ml-5 pb-4  mt-3 ">
          <span> */}
            {/* <Link href={item.url}>
              <img
                src={"https://www." + item.network + ".com/favicon.ico"}
                className="w-5 "
              />
            </Link> */}
          {/* </span>
        </div>
      ))}
    </div>
    )} */}

  
    <div className=" m-3 mt-2 right-0 w-full    ">
      
        <p className=" text-black font-bold text-xl p-1 pt-2 pl-4 tracking-wide  mt-3 heading ">PROFILE</p>
        <p className="text-sm text-black p-3 pl-2 pt-2">{ }</p>
      
      </div>
</div>
<div className="flex-col bg-black pt-3 p-4">
      <span className="  text-3xl  bg-white p-1 pl-2 rounded-sm  text-black tracking-wider font-thin  ml-2">
        {resume.personal.role}
      </span>
      <span className=" text-5xl pl-[10%] text-white tracking-wide text-right font-serif ">
        {resume.personal.firstName} {resume.personal.lastName}
      </span>
    </div>

<div className=" flex">
  <div className=" h-[222mm] bg-gradient-to-t from-gray-300 w-[40%]">
  <div className="">
  <div className="flex  text-lg m-4">
    <div className="font-col">
    {resume.skills.length != 0 && (
      <div className="p-2 ">
        <p className="text-black text-lg font-bold tracking-wider pb-3 heading">
          SKILLS
        </p>
        {resume.skills.map((item) => (
          <div key={item.name} className="ml-2">
            <span className="text-lg  ">
              <li>
                {item.name} - {item.level}
              </li>
            </span>
            <p>{item.enabled}</p>
          </div>
        ))}
      </div>
    )}

     {resume.languages.length != 0 && (
       <div className="text-lg pb-2">
        <p className="text-black font-bold tracking-wider  p-1 px-3 py-1 heading">
          LANGUAGES
        </p>
        {resume.languages.map((item) => (
          <div key={item.name} className="ml-4">
            <li className="">
              {item.name} : {item.fluency}
            </li>
            <p>{item.enabled}</p>
          </div>
        ))}
      </div>
     )}


    {resume.awards.length != 0 && (
      <div className="pt-2 pb-2  ">
        <p className="text-black font-bold tracking-wider  p-1 mx-2 heading">
          AWARDS
        </p>
        {resume.awards.map((item) => (
          <div key={item.name} className="text-lg  ml-3">
            <li className="font-semibold">{item.awarder}</li>
            <p className="text-sm"> [{item.date}] </p>
            <p>{item.name}</p>
            <p className="text-sm pr-3">{item.summary.data}</p>
            <p className="text-sm">{item.summary.enabled}</p>
            <p>{item.enabled}</p>
          </div>
        ))}
      </div>
    )}

     {resume.hobbies.length != 0 && (
       <div className="text-lg pb-2">
        <p className="text-black font-bold tracking-wider  p-1 px-3 py-1 heading">
          HOBBIES
        </p>
        {resume.hobbies.map((item) => (
          <div key={item.name}>
            <li className="pl-6">
              {item.name}
            </li>
            <p>{item.enabled}</p>
          </div>
        ))}
      </div>
     )}

    {resume.projects.length != 0 && (
      <div className=" pt-1 pb-3 ">
        <p className="text-black font-bold tracking-wider  p-1 px-2 pt-3 heading  ">
        PROJECTS
        </p>
        
        {resume.projects.map((item) => (
          <div key={item.name} className="pl-1">
          <div className=" ml-2 text-black ">
            <p className="tracking-wide font-semibold">{item.name}</p>
          <p className="text-sm">
          [{item.from}] - [{item.to}]
          </p>

          <Link href={item.website}>
          <p className=" ml-1 text-sm">
          {item.website}
          </p>
          </Link>
          <p className="pr-2 text-sm  ">{item.summary.data}</p>
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
    <div className="w-[70%]">
    {resume.education.length != 0 && (  
      <div className="pl-2 ">
        <p className=" text-black font-bold text-xl tracking-wide  p-3  mt-3 heading">
          EDUCATION
        </p>
        <hr></hr>
        {resume.education.map((item) => (
          <div key={item.institution} className="text-base p-2 text-black ">
            <p className="font-semibold text-black ">
              {item.institution} 
              <span className="absolute right-3">[{item.startDate} - {item.endDate}]</span>
            </p>
            <p>{item.fieldOfStudy}</p>
            <p>{item.typeOfDegree}</p>
            <p>{item.gpa}</p>
            <p>{item.summary.enabled}</p>
            <p>{item.enabled}</p>
          </div>
        ))}
      </div>
    )}


    {resume.work.length != 0 && (  
      <div className="pl-2 ">
        <p className=" text-black font-bold text-xl tracking-wide  p-3  mt-3 heading">
          INTERNSHIP
        </p>
        <hr></hr>
        {resume.work.map((item) => (
          <div key={item.company} className="text-base p-2 text-black ">
            <p className="font-semibold text-black ">
              {item.company} 
              {/* <span className="absolute right-0">[{item.startDate} - {item.endDate}]</span> */}
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
      <div>
        <p className=" text-black font-bold text-xl tracking-wide ml-3 p-1  mt-1 heading">
          CERTIFICATION
        </p>
        <hr className="m-2"></hr>
        {resume.certifications.map((item) => (
          <div key={item.title} className="pt-4 text-black mx-3 ">
            <p className="font-semibold ">
              {item.title} <span className="right-0 absolute pr-4">[{item.date}]</span>
            </p>
            
            <p>{item.issuer}</p>
            <p>{item.summary.data}</p>
            <p>{item.summary.enabled}</p>
            <p>{item.enabled}</p>
          </div>
        ))}
      </div>
    )}

    {/* 
      <div className=" pt-1 pb-3 bg-gray-200">
        <p className="text-black font-bold tracking-wider  p-1 px-2 pt-3   ">
        PROJECTS
        </p>
        
        {resume.projects.map((item) => (
          <div className=" ml-2 text-black ">
          <p className="">
          [{item.from}] - [{item.to}]
          </p>
          <Link href={item.website}>
          <p className="font-semibold ml-1 tracking-wider">
          {item.name}
          </p>
          </Link>
          
          <p>{item.summary.enabled}</p>
            <p>{item.enabled}</p>
            <p className="p-2"> </p>
            </div>
            ))}
          </div> */}
    </div>
  </div>

        </div>
        </div>
        </>
  )}