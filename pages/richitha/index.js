import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <>
      <div>
        <div className="m-20 text-center ">
          <h1 className="text-5xl bg-rose-300 p-6 mx-[40%] rounded-t-md ">
            RESUMES
          </h1>
          <div className="p-12  bg-rose-100 mx-[40%] font-semibold  text-3xl ">
            <Link
              href="/richitha/one"
              className=" bg-slate-100 rounded-md  p-2 "
            >
              RESUME 1
            </Link>
            <p className="bg-rose-100 rounded-md p-5"></p>
            <Link href="/richitha/two" className=" bg-gray-100  p-2">
              RESUME 2
            </Link>
            <p className="bg-rose-100 rounded-md p-5"></p>
            <Link href="/richitha/three" className=" bg-gray-100  p-2">
              RESUME 3
            </Link>
            <p className="bg-rose-100 rounded-md p-5"></p>
            <Link href="/richitha/four" className=" bg-gray-100  p-2">
              RESUME 4
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
