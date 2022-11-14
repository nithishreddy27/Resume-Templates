import React from 'react'
import { demoResume } from '../../lib/data'
import Image from 'next/image'
import Link from 'next/link'

export default function two() {
    const resume =demoResume()
  return (
    <>
        <div className="bg-gray-300 flex align-middle justify-center">
      <div className="bg-slate-50 w-[210mm] h-[297mm] m-10 overflow-auto drop-shadow-2xl flex flex-row">

        <div className=' w-[35%] bg-gray-200 p-6'>

            <div className='bg-slate-800 w-36 h-[200px] absolute top-0 left-0'>
                <img src="https://randomuser.me/api/portraits/men/40.jpg" alt=""  className='w-36 h-36 mt-7 ml-10 border-8 border-white'/>
            </div>
            <div className='mt-56'>
                <h1 className='text-2xl font-semibold tracking-[2px]' >CONTACT</h1>
                <hr className="h-[2px] bg-black my-1" />
                {
                    <>
                    <div className='flex'>
                    <span><img src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png" className='w-5 h-5'/></span>
                    <h1 className='mx-4'>{resume.personal.phone}</h1>
                        </div>  
                    
                    
                    
                    <div className='flex my-1'>
                    <span><img src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"  className='w-7 h-7' /></span>
                    <h1 className='mx-2'>{resume.personal.email}</h1>
                        </div>  
                    {
                        resume.social.map(item=>(
                            <div className='my-3 flex'>
                                <span><img src={"https://www."+item.network+".com/favicon.ico"} alt="" srcset=""  className="w-5 grayscale-[40%]"/></span>

                                <Link href={item.url}><span className='mx-4'>{item.username}</span></Link>

                            </div>
                        ))
                    }
                    
                    </>
                }
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl font-semibold tracking-[2px]' >SKILLS</h1>
                <hr className="h-[2px] bg-black my-1" />
                {
                    resume.skills.map(item=>(
                        <li className='mx-4'>{item.name}</li>
                    ))
                }
            </div>
            <div className='mt-4'>
            <h1 className='text-2xl font-semibold tracking-[2px]' >HOBBIES</h1>
                <hr className="h-[2px] bg-black my-1" />
                {
                    resume.hobbies.map(item=>(
                        <p className='my-2'>{item.name}</p>
                    ))
                }
            </div>
            <div className='mt-4'>
            <h1 className='text-2xl font-semibold tracking-[2px]' >LANGUAGES</h1>
                <hr className="h-[2px] bg-black my-1" />
                {
                    resume.languages.map(item=>(
                        <p className='my-2'>{item.name}</p>
                    ))
                }
            </div>
            <h1 className='text-2xl font-semibold tracking-[2px]' >AWARADS</h1>
                <hr className="h-[2px] bg-black my-1" />
                {
                    resume.awards.map(item=>(
                        <div className='my-2'>
                        <span className='font-semibold text-[15px]'>{item.name} ({item.date.slice(0,4)})</span>
                        <span className='mx-2 text-[15px]'></span>
                        <p className='mx-4'>{item.summary.data.slice(0,38)}</p>

                        </div>
                    ))
                }
        </div>
        <div className=' w-[70%] pt-10 px-5 ' >

                <div>
                    <h1 className='text-5xl font-semibold tracking-wider'>{resume.personal.firstName}</h1>
                    <h1 className='text-3xl  tracking-[4px] mt-2'>{resume.personal.lastName}</h1>
                    <h1 className='text-lg  tracking-[4px] mt-2'>{resume.personal.role}</h1>
                </div>

                <div className='mt-20'>
                    <h1 className='text-xl font-bold tracking-[1px]' >OBJECTIVE</h1>
                   <hr className="h-[2px] bg-black my-1" />
                   <p className='text-sm'>{resume.objective}</p>

                   <h1 className='text-xl font-bold tracking-[1px] mt-5' >WORK</h1>
                   <hr className="h-[2px] bg-black my-1" />
                   <div className='flex'>
                    <div className='pt-2'>
                        <div className='w-3 bg-black h-3 rounded-full opacity-60'></div>
                        <div className='w-1 bg-black h-36 m-1'></div>
                        <div className='w-3 bg-black h-3 rounded-full opacity-60'></div>
                        <div className='w-1 bg-black h-24 m-1'></div>
                    </div>
                    <div className="ml-5 mt-1">

                            {
                                resume.work.map(item=>(
                                    <div className=''>
                                        <p className='font-semibold'>{item.from.slice(0,4)} - {item.to.slice(0,4)}</p>
                                        <p className='tracking-[2px] my-1'>{item.company}</p>
                                        <p className='font-bold'>{item.designation}</p>
                                        <p className='mb-4 text-sm'>{item.summary.data}</p>
                                    </div>
                                ))
                            }

                    </div>


                    
                   </div>
                   <h1 className='text-xl font-bold tracking-[1px] mt-5' >EDUCACTION</h1>
                   <hr className="h-[2px] bg-black my-1" />
                   <div className='flex'>
                    <div className='pt-2'>
                        <div className='w-3 bg-black h-3 rounded-full opacity-60'></div>
                        <div className='w-1 bg-black h-36 m-1'></div>
                        <div className='w-3 bg-black h-3 rounded-full opacity-60'></div>
                        <div className='w-1 bg-black h-16 m-1'></div>
                    </div>
                    <div className="ml-5 mt-1">

                            {
                                resume.education.map(item=>(
                                    <div className=''>
                                        <p className='font-semibold'>{item.startDate.slice(0,4)} - {item.endDate.slice(0,4)}</p>
                                        <p className='tracking-[2px]'>{item.institution}</p>
                                        <p className='font-bold'>{item.fieldOfStudy}</p>
                                        <p className=''>{item.typeOfDegree}</p>
                                        <p className='mb-4 font-semibold'>GPA-{item.gpa}</p>
                                    </div>
                                ))
                            }

                    </div>


                    
                   </div>
                </div>

        </div>
                
        </div>
        </div>
    </>
  )
}
