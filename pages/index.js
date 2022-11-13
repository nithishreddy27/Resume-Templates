import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RESUME TEMPLETES</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center align-middle p-28 flex-col w-[50%] mx-auto text-center">
        <h1 className="text-2xl font-bold mb-32 ">RESUME TEMPLETES</h1>
        <div className="flex justify-center align-middle flex-col">
        <Link href="/nithish" className="m-10 bg-gray-300 p-2 rounded-lg"><button>NITHISH</button></Link>
        <Link href="/skt" className="m-10 bg-gray-300 p-2 rounded-lg"><button>SAIKRISHNA</button></Link>
        <Link href="/rubeena" className="m-10 bg-gray-300 p-2 rounded-lg"><button>RUBEENA</button></Link>
        <Link href="/richitha" className="m-10 bg-gray-300 p-2 rounded-lg"><button>RICHITHA</button></Link>
        <Link href="/sakshi" className="m-10 bg-gray-300 p-2 rounded-lg"><button>SAKSHI</button></Link>
        </div>
      </div>
    </div>
  );
}
