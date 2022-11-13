import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { demoResume } from "../../lib/data";

export default function index() {
  const resume = demoResume();
  return (
    <div className={styles.container}>
      <Head>
        <title>resume template</title>
      </Head>
      <main className={styles.main}>
        <div class="flex align-middle justify-center bg-zinc-300 m-10">
            <div class="container w-[210mm] h-[297mm] bg-white p-10 min-w-[210mm]">
                <div class="h-auto pb-10 border-b-4">
                    <div>
                        <h1 class="text-4xl font-sans font-semibold">RUBEENA KHATUN</h1>
                        <h1 class="text-sm text-gray-400 font-semibold">Programmer</h1>
                    </div>
                </div>
                <div class="grid grid-cols-3 mt-10">
                    <div class="border-r-4 pr-10">
                        <div>
                            <h1 class="text-2xl font-semibold">DETAILS</h1>
                            <hr class="w-[15%] h-1 bg-black"></hr>
                            <h1 class="text-sm font-semibold pt-5">ADDRESS</h1>
                            <p class="text-sm text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, exercitationem.</p>
                            <h1 class="text-sm font-semibold pt-4">PHONE</h1>
                            <p class="text-sm text-gray-400">+91 8074206332</p>
                            <h1 class="text-sm font-semibold pt-4">EMAIL</h1>
                            <p class="text-sm text-gray-400">loremipsum@gmail.com</p>
                            <h1 class="text-sm font-semibold pt-4">NATIONALITY</h1>
                            <p class="text-sm text-gray-400">Indian</p>
                        </div>
                        <div class="">
                            <h1 class="text-2xl font-semibold pt-7">SKILLS</h1>
                            <hr class="w-[15%] h-1 bg-black"></hr>
                            <h1 class="text-sm text-gray-800 pt-3">Lorem ipsum dolor sit amet.</h1>
                            <h1>●●●●●</h1>
                            <h1 class="text-sm text-gray-800 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                            <h1>●●●●●</h1>
                            <h1 class="text-sm text-gray-800 pt-3">Lorem ipsum dolor sit amet.</h1>
                            <h1>●●●●●</h1>
                            <h1 class="text-sm text-gray-800 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                            <h1>●●●●●</h1>
                            <h1 class="text-sm text-gray-800 pt-3">Lorem ipsum dolor sit amet.</h1>
                            <h1>●●●●●</h1>
                        </div>
                        <div>
                            <h1 class="text-2xl font-semibold pt-7">LANGUAGES</h1>
                            <hr class="w-[15%] h-1 bg-black"></hr>
                            <h1 class="text-sm text-gray-800 pt-3">English</h1>
                            <h1>●●●●●</h1>
                            <h1 class="text-sm text-gray-800 pt-3">French</h1>
                            <h1>●●●●</h1>
                        </div>
                    </div>
                    <div class="col-span-2 pl-10">
                        <div>
                            <h1 class="text-2xl font-semibold">PROFILE</h1>
                            <hr class="w-[8%] h-1 bg-black"></hr>
                            <p class="text-sm text-gray-400 py-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet consectetur aut voluptas expedita ipsam esse corporis saepe consequuntur qui dolorem possimus doloribus distinctio impedit maiores, quam officia id, et suscipit?</p>
        
                        </div>
                        <div>
                            <h1 class="text-2xl font-semibold pt-8 border-t-2">EMPLOYMENT HISTORY</h1>
                            <hr class="w-[8%] h-1 bg-black"></hr>
                            <span class="text-sm font-bold mt-8">Programmer</span><span class="text-sm text-gray-400 font-bold ml-[65%]">Hyderabad</span>
                            <h1 class="text-xs py-2 font-semibold text-gray-400">Dec 2015 - Present</h1>
                            <ul class="list-disc pl-10">
                                <li class="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eius asperiores quaerat eveniet eos harum adipisci hic quidem error deleniti!</li>
                                <li class="text-sm text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                                <li class="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsam.</li>
                                <li class="text-sm text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                            </ul>
                            <span class="text-sm font-bold text-left">Programmer</span><span class="text-sm text-gray-400 font-bold ml-[68%]">Chennai</span>                  
                            <h1 class="text-xs py-2 font-semibold text-gray-400">Feb 2004 - Sep 2015</h1>
                            <ul class="list-disc pl-10">
                                <li class="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eius asperiores quaerat eveniet eos harum adipisci hic quidem error deleniti!</li>
                                <li class="text-sm text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                                <li class="text-sm text-gray-400 pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsam.</li>
                            </ul>
                        </div>
                        <div>
                            <h1 class="text-2xl font-semibold pt-8 border-t-2">EDUCATION</h1>
                            <hr class="w-[8%] h-1 bg-black"></hr>
                            <h1 class="text-sm font-bold pt-8">Lorem ipsum dolor sit amet consectetur.</h1>
                            <h1 class="text-xs font-semibold py-2 text-gray-400">Aug 2001 - Jun 2004</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
