import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <div className="mx-auto w-[50%] text-center p-28">
      <h1 className="font-bold m-10">RUBEENA RESUME TEMPLATES</h1>
      <Link href="/rubeena/berlin" className="m-10 p-4 bg-gray-300 rounded-lg">
        BERLIN
      </Link>
      <Link href="/rubeena/modern" className="m-10 p-4 bg-gray-300 rounded-lg">
        MODERN
      </Link>
    </div>
  );
}
