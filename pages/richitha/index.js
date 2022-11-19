import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <>
      <div>
        <div className="m-20 text-center">
          <h1 className="text-5xl bg-black text-white p-6 mx-[40%] rounded-t-md ">
            RESUMES
          </h1>
          <div className="p-12  bg-white mx-[40%] font-semibold  text-3xl ">
            <Link href="/richitha/one" className=" bg-white rounded-md  p-2 ">
              RESUME 1
            </Link>
            <p className="bg-white rounded-md p-5"></p>
            <Link href="/richitha/two" className=" bg-white  p-2">
              RESUME 2
            </Link>
            <p className="bg-white  rounded-md p-5"></p>
            <Link href="/richitha/three" className=" bg-white  p-2">
              RESUME 3
            </Link>
            <p className="bg-white rounded-md p-5"></p>
            <Link href="/richitha/four" className=" bg-white  p-2">
              RESUME 4
            </Link>
            <p className="bg-white  rounded-md p-5"></p>
            <Link href="/richitha/five" className=" bg-white  p-2">
              RESUME 5
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
