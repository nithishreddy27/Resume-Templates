import React from "react";
import { demoResume } from "../../lib/data";
import Head from "next/head";
import Link from "next/link"

export default function index() {
  const resume = demoResume();
  return (
      <div className="flex align-middle justify-center bg-zinc-400 h-[285mm] ">
        <div className="container w-[210mm] h-[285mm] bg-white min-w-[210mm] ">
      <div className="grid grid-cols-11">
        <div className="col-span-8">
        <div className=" p-1 px-1 flex bg-gray-300 h-52">
            <img
            className="rounded-lg w-[130px] h-36  border-4 border-yellow-400  ml-4 mt-2 mr-1 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
            alt="ProfilePhoto"/>
        <div>
          <h1 className="text-3xl font-medium p-2 ">
            {resume.personal.firstName} {resume.personal.lastName}
          </h1>
          <div>
            <h1 className="m-1 mt-0 ml-2 text-sm font-medium text-yellow-400">{resume.personal.role}</h1>
          </div>
          <div>
            <p className="text-xs p-2 pt-0 font-medium">{resume.objective}</p>
          </div>
        </div>
        </div>
          
         <div>
          <h1 className="font-medium text-2xl ml-5 pt-4 mb-1">Employement History</h1>
                        {
                            resume.work.map(item=>(
                                <div>
                                    <h1 className="font-medium text-lg ml-16 ">{item.company}</h1>
                                    <h2 className="font-medium ml-16 text-sm text-yellow-400">{item.from} - {item.to}</h2>
                                    <li className="ml-28 text-lg list-disc">{item.designation}</li>
                                    <li className="ml-28  list-disc ">{item. website}</li>
                                    {/* <p class="text-sm font-medium ml-14">{item.summary.data}</p> */}
                                </div>
                            ))
                        }

         </div>
         <div>
          
            <h1 className="font-medium text-2xl ml-5 pt-2 mb-1">Certifications</h1>
            {
              resume.certifications.map(item=>(
                <div>
                  <h1 className="text-sm ml-16 font-medium">{item.title}</h1>
                  <h6 className="text-xs ml-16 font-medium text-yellow-400">{item.date}</h6>
                  <li className="text-sm  font-medium ml-28">{item.summary.data}</li>
                </div>
              ))
            }
           </div>
           <div>
            <h1 className="font-medium text-2xl ml-5 pt-2 mb-1">Awards</h1>
            {
                resume.awards.map(item=>(
                  <div>
                    <h1 className="font-medium ml-16">{item.name}</h1>
                    <h6 className="text-xs ml-16 font-medium text-yellow-400">{item.date}</h6>
                    <li className="ml-28 font-medium text-sm">{item.summary.data}</li>
                  </div>
                ))
            }

           </div>
        
          
          </div>
        <div className="col-span-3">
          <div className="bg-blue-800 h-52">
            <h1 className="font-bold  text-lg ml-12 pt-4">
              Social Network
            </h1>
            {resume.social.map((item) => (
              <div className="ml-16 my-4 flex">
                <img
                  src={"https://www." + item.network + ".com/favicon.ico"}
                  alt=""
                  className="w-8 h-8 border-4 ml-0 mr-0 rounded-full border-yellow-400 "
                />
                <Link href={item.url}>
                  <h1 className="ml-4">{item.username}</h1>
                </Link>
              </div>
            ))}
          </div>
          <div class="bg-gray-300 h-[84%]">
            <div className="p-2">
              <h1 className="font-bold text-lg ml-8 pt-4">skills</h1>
              {resume.skills.map((item) => (
                <div>
                  <h1 className="font-medium ml-8 p-1">{item.name}</h1>
                  <h1 className="text-sm font-medium ml-9 ">{item.level}</h1>
                </div>
              ))}
            </div>
            <div className="p-2 px-0">
              <h1 className="font-medium text-xl ml-6 mb-0">Education</h1>
              {resume.education.map((item) => (
                <div className="p-1">
                  <h1 className=" ml-6 text-sm font-medium">{item.institution}</h1>
                  <h6 className="text-xs ml-6 font-medium text-yellow-500">
                    {item.startDate} - {item.endDate}
                  </h6>
                  <li className="ml-8 text-normal font-medium">{item.fieldOfStudy}</li>
                </div>
              ))}
            </div>
            <div className="p-2">
              <h1 className="font-medium text-xl ml-6 mb-0"> Hobbies</h1>
              {
                resume. hobbies.map((item)=>(
                  <div>
                    <li className="font-normal ml-8 text">{item.name}</li>
                  </div>
  
                ))
              }
            </div>
            <div className="p-2">
              <h1 className=" text-lg font-medium ml-6 mb-0">Languages</h1>
              {
                resume.languages.map((item)=>(
                  <div>
                    <li className="font-normal ml-8 tex-sm">{item.name}</li>
                  </div>
  
                ))
              }
            </div>
            <div className="p-2">
              <h1 className=" text-lg font-medium ml-6 ">Projects</h1>
              {
                resume.projects.map((item)=>(
                  <div>
                    <h1 className="font-medium ml-8 tex-lg">{item.name}</h1>
                    <h6 className="text-xs ml-8 font-medium text-yellow-500">{item.from} - {item.to}</h6>
                    
                  </div>
  
                ))
              }
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  
  );
}