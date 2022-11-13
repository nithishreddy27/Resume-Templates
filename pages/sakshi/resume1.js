import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { demoResume } from '../../lib/data'
import { INTERNALS } from 'next/dist/server/web/spec-extension/request'

export default function Home(){
    const resume = demoResume()
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title> 
                <meta name="description" content="Generated by create next app"></meta>
                <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
            </Head>
            <main className={styles.main}>
                <div class="container w-[210mm] h-[297mm] min-w-[210mm] flex bg-white text-black">
                    <div class="first w-[85mm] h-[297mm] bg-slate-300">
                    <div class="photo">
                        <div class="px-20 pt-10 pb-5">
                        <img src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0" class="w-[100px] h-[100px]"></img>
                        </div>
                    </div>
                    <div class="personal">
                        <div class="dob pl-10 pt-3"><i class='bx bxs-calendar pr-4 text-lg'></i><span class="text-base relative bottom-[3px]">{resume.personal.dob}</span></div>
                        <div class="phone pl-10 pt-3"><i class='bx bxs-phone pr-4 text-lg'></i><span class="text-base relative bottom-1">{resume.personal.phone}</span></div>
                        <div class="mail pl-10 pt-3 pb-8"><i class='bx bxs-envelope pr-4 text-lg'></i><span class="text-base relative bottom-1">{resume.personal.email}</span></div> 
                    </div>
                    <div class="education">
                    <h2 class="text-center text-xl font-serif font-medium underline">E D U C A T I O N</h2>
                    {
                                resume.education.map(item=>(
                                    <p class="pl-10 pr-5 pt-5"><span class="font-medium">{item.institution}</span> in <span class="font-medium">{item.fieldOfStudy}<br/>({item.startDate} to {item.endDate})</span><br/><i class='bx bxs-graduation'></i> {item.typeOfDegree} in {item.fieldOfStudy} ({item.gpa})</p>
                                ))
                    }
                    </div>
                    <div class="certifications">
                    <h2 class="text-center text-xl font-serif font-medium underline pt-5">C E R T I F I C A T I O N S</h2>
                    {
                                resume.certifications.map(item=>(
                                    <p class="pl-10 pr-5 pt-3"><i class='bx bxs-square text-xs pr-3'></i>{item.title} from {item.issuer}</p>
                                ))
                    }
                    </div>
                    <div class="skills">
                    <div class="pl-10">
                    <h2 class="text-center text-xl font-serif font-medium underline pt-5 pb-5">S K I L L S</h2>
                    {
                                resume.skills.map(item=>(
                                    <span class="pr-2">{item.name} </span>
                                ))
                    }
                    </div>
                    </div>
                    
                    

                    </div>
                    <div class="second bg-slate-100 w-[125mm] h-[297mm]">
                        <div class="name">
                            <div class="text-3xl mx-20 mt-10 font-semibold border-b-[1px] border-gray-600">
                            <h1>{resume.personal.firstName}</h1>
                            <h1>{resume.personal.lastName}</h1>
                            <h2 class="text-lg font-normal py-3">{resume.personal.role}</h2>
                            </div>
                        </div>
                        <div class="career-objective">
                            <h2 class="text-center text-xl font-serif font-medium underline pt-6">C A R E E R  O B J E C T I V E</h2>
                            <p class="pl-10 pr-5 pt-5">{resume.objective}</p>
                        </div>
                        <div class="experience">
                            <h2 class="text-center text-xl font-serif font-medium underline pt-5">E X P E R I E N C E</h2>
                            {
                                resume.work.map(item=>(
                                    <p class="pl-10 pr-5 pt-5"><span class="font-medium text-lg pr-3">{item.designation} in {item.company}</span><br></br>({item.from} to {item.to})<br/><a href='{item.website}'>{item.website}</a><br></br></p>
                                ))
                            }
                        </div>
                        <div class="projects">
                            <h2 class="text-center text-xl font-serif font-medium underline pt-5">P R O J E C T S</h2>
                            {
                                resume.projects.map(item=>(
                                    <p class="pl-10 pr-5 pt-5"><span class="font-medium text-lg pr-3">{item.name}</span> ({item.from} to {item.to})<br/><a href='{item.website}'>{item.website}</a><br></br></p>
                                ))
                            }
                        </div>
                        <div class="awards">
                        <h2 class="text-center text-xl font-serif font-medium underline pt-5">A W A R D S</h2>
                            {
                                resume.awards.map(item=>(
                                    <p class="pl-10 pr-5 pt-3"><i class='bx bxs-award pr-1' ></i><span class="font-medium">{item.name}</span> from {item.awarder}</p>
                                ))
                            }
                        </div>
                    
                    </div>
                </div>
                
            </main>
        </div>
    )
}
