import React from "react";
import { demoResume } from "../../lib/data";
import Link from "next/link";

export default function one() {
  const resume = demoResume();
  return (
    <div className="bg-gray-300 flex align-middle justify-center">
      <div className="bg-slate-50 w-[210mm] h-[297mm] m-10 overflow-auto drop-shadow-2xl flex flex-row">
        <div className="absolute left-44 top-11 border-[3px] border-gray-500 h-40 w-96 bg-white text-center">
          <h1 className="mt-8 font-extrabold text-2xl tracking-[3px]">
            {resume.personal.firstName} {resume.personal.lastName}
          </h1>
          <h1 className="mt-3">{resume.personal.role}</h1>


          <div className="mt-5 flex  justify-center align-middle">
            {
                resume.social.map(item =>(
                    <div className="mx-5 mt-3">
                    
                        <span><Link href={item.url}><img src={"https://www."+item.network+".com/favicon.ico"} alt="" srcset=""  className="w-5 grayscale-[40%]"/></Link></span>
                    </div>
                ))
            }
          </div>
        </div>
        <div className="w-[40%] bg-gray-100">
        <div className="mt-56 mx-10 flex flex-col">
                <h4 className="font-bold tracking-[4px]">EDUCATION</h4>
                <hr className="w-[100%] h-1 bg-black my-2"/>

                {
                    resume.education.map(item=>(
                        <div className="flex flex-col">
                            <span className="text-black font-semibold mt-4">{item.institution}</span>
                            <span className="mb-2 font-semibold">({item.startDate}  {item.endDate})</span>
                            
                            <span className="font-semibold">{item.typeOfDegree}</span>
                            <span className="">{item.fieldOfStudy}</span>

                            <span className="mb-4"><b>GPA - </b> {item.gpa}</span>
                        </div>
                    ))
                }
            </div>
            <div className="mx-10 flex flex-col mt-4"> 
                <h4 className="font-bold tracking-[4px]">SKILLS</h4>
                <hr className="w-[100%] h-1 bg-black my-2"/>
                {
                    resume.skills.map(item=>(
                        <>
                        <span className="font-semibold mt-1">{item.name}</span>
                        <span className=" mt-1 mb-3">{item.level}</span>
                        </>
                        
                    ))
                }
            </div>
            <div className="mx-10 flex flex-col mt-4"> 
                <h4 className="font-bold tracking-[4px]">HOBBIES</h4>
                <hr className="w-[100%] h-1 bg-black my-2"/>
                {
                    resume.hobbies.map(item=>(
                        <>
                        <span className="font-semibold mt-1">{item.name}</span>
                        </>
                    ))
                }
            </div>
            <div className="mx-10 flex flex-col mt-4"> 
                <h4 className="font-bold tracking-[4px]">LANGUAGES</h4>
                <hr className="w-[100%] h-1 bg-black my-2"/>
                {
                    resume.languages.map(item=>(
                        <>
                        <span className="font-semibold mt-1">{item.name}</span>

                        </>
                    ))
                }
            </div>

            
        </div>
        <div className="w-[60%] mt-56 mx-10">
                <h2 className="font-bold tracking-[4px]">OBJECTIVE</h2>
                <hr className="w-[100%] h-1 bg-black my-1"/>
                <p className="my-4">{resume.objective}</p>

                <h2 className="font-bold tracking-[4px]">PROJECTS</h2>
                <hr className="w-[100%] h-1 bg-black my-1"/>

                {
                    resume.projects.map(item =>(
                        <>
                            <div className="my-4">
                             <span className="text-black font-bold mt-3" >{item.name} ( <span className="text-black font-semibold">{item.from} to {item.to }</span> ) </span>

                             <p className="ml-4 mt-2">{item.summary.data}</p>
                            </div>
                        </>
                    ))
                }

                <h2 className="font-bold tracking-[4px]">WORK</h2>
                <hr className="w-[100%] h-1 bg-black my-1"/>
                {
                    resume.work.map(item=>(

                        <>
                            <div className="flex flex-col">
                             {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                             <span className="text-black font-bold mt-3" >{item.company} <span className="font-semibold">({item.from} to {item.to})</span></span>
                             <span className="text-black font-semibold mx-4" >{item.designation}</span>
                             <p className="ml-4">{item.summary.data}</p>
                            
                                
                            </div>
                        </>
                    ))
                }





            </div>
      </div>
    </div>
  );
}
