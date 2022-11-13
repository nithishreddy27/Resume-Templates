import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div className='mx-auto w-[50%] text-center p-28'>
      <h1 className='font-bold m-10'>NITHISH RESUME</h1>
      <Link href="/nithish/one" className='m-10 p-4'>FIRST</Link>
      <Link href="/nithish/two" className='m-10 p-4'>TWO</Link>
      <Link href="/nithish/three" className='m-10 p-4'>THREE</Link>

    </div>
  )
}
