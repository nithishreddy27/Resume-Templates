import React from 'react'
import styles from '../../styles/Home.module.css'
import { demoResume } from '../../lib/data'
import { INTERNALS } from 'next/dist/server/web/spec-extension/request'
import Link from 'next/link'
import Head from 'next/head'

export default function four() {
    const resume=demoResume()
  return (
    <div className={styles.container}>
        <Head>
        <title>Create Next App</title> 
                <meta name="description" content="Generated by create next app"></meta>
                <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
        </Head>
        <main className={styles.main}>
            <div className='container w-[210mm] h-[297mm] min-w-[210mm] bg-white flex'>
                <div className='first w-[85mm] h-[297mm] bg-emerald-700'>
                    
                    <div className='photobg bg-slate-300 w-[200px] h-[200px] relative top-16 left-16'></div>
                    <div className='photo'>
                        <img src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0" className='w-[200px] h-[200px] relative top-[-124px] left-[75px]'></img>
                    </div>
                    <div className='firstone w-[85mm] relative top-[-100px]'>
                        <div className='personal'>
                        <div className="dob pl-10 pt-3 text-white"><i className='bx bxs-calendar pr-4 text-lg text-white'></i><span className="text-base relative bottom-[3px] text-white">{resume.personal.dob}</span></div>
                        <div className="phone pl-10 pt-3 text-white"><i className='bx bxs-phone pr-4 text-lg text-white'></i><span class="text-base relative bottom-1 text-white">{resume.personal.phone}</span></div>
                        <div className="mail pl-10 pt-3 pb-2 text-white"><i className='bx bxs-envelope pr-4 text-lg text-white'></i><span class="text-base relative bottom-1 text-white">{resume.personal.email}</span></div>
                        </div>
                        <div className="education">
                        <h2 className="text-center text-xl font-sans font-bold text-zinc-200">E D U C A T I O N</h2>
                        {
                                resume.education.map(item=>(
                                    <p className="pl-10 pr-5 pt-5"><span className="font-medium text-white">{item.institution}</span><span className='text-white'> in </span><span className="font-medium text-white">{item.fieldOfStudy}<br/>({item.startDate} to {item.endDate})</span><br/><i className='bx bxs-graduation text-white'></i><span className='text-white'> {item.typeOfDegree} in {item.fieldOfStudy} ({item.gpa})</span></p>
                                ))
                        }
                        </div>
                        <div className="certifications">
                        <h2 className="text-center text-xl font-sans font-bold pt-3 text-zinc-200 pb-3">C E R T I F I C A T I O N S</h2>
                        {
                                resume.certifications.map(item=>(
                                    <p className="pl-10 pr-5 pt-1 text-white"><i className='bx bxs-square text-xs pr-3 text-white'></i><span className='text-white'>{item.title} from {item.issuer}</span></p>
                                ))
                        }
                        </div>
                        <div className="skills">
                    <div className="pl-10">
                    <h2 className="text-center text-xl font-sans font-bold pt-5 pb-1 text-zinc-300">S K I L L S</h2>
                    {
                                resume.skills.map(item=>(
                                    <span className="pr-2 text-white">{item.name} </span>
                                ))
                    }
                    </div>
                    </div>
                    </div>
                    
                </div>
                <div className='second bg-emerald-100 w-[125mm] h-[297mm]'>
                        <div className="name">
                            <div className="text-3xl mx-20 mt-10 font-semibold border-b-[1px] border-gray-600 font-serif">
                            <h1>{resume.personal.firstName}</h1>
                            <h1>{resume.personal.lastName}</h1>
                            <h2 className="text-lg font-normal py-3">{resume.personal.role}</h2>
                            </div>
                        </div>
                        <div className="career-objective">
                            <h2 className="text-center text-xl font-sans font-bold pt-3">C A R E E R  O B J E C T I V E</h2>
                            <p className="pl-10 pr-5 pt-2 text-xs">{resume.objective}</p>
                        </div>
                        <div className="experience">
                            <h2 className="text-center text-xl font-sans font-bold pt-5">E X P E R I E N C E</h2>
                            {
                                resume.work.map(item=>(
                                    <p className="pl-10 pr-5 pt-2"><span className="font-medium text-lg pr-3">{item.designation} in {item.company}</span><br></br>({item.from} to {item.to})<br/><Link href={item.website}>{item.website}</Link><br></br><span className='text-sm'>{item.summary.data}</span></p>
                                ))
                            }
                        </div>
                        <div className="projects">
                            <h2 className="text-center text-xl font-sans font-bold pt-2">P R O J E C T S</h2>
                            {
                                resume.projects.map(item=>(
                                    <p className="pl-10 pr-5 pt-1"><span className="font-medium text-lg pr-3">{item.name}</span> ({item.from} to {item.to})<br/><a href={item.website}>{item.website}</a><br></br><span className='text-sm'>{item.summary.data}</span></p>
                                ))
                            }
                        </div>
                        <div className="awards">
                        <h2 className="text-center text-xl font-sans font-bold pt-2">A W A R D S</h2>
                            {
                                resume.awards.map(item=>(
                                    <p className="pl-10 pr-5 pt-1"><i className='bx bxs-award pr-1' ></i><span className="font-medium">{item.name}</span> from {item.awarder}</p>
                                ))
                            }
                        </div>
                </div>
            </div>
        </main>
    </div>
  )
}
