import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import vr from '../../public/vr.jpg'
export default function Land() {
  return (
    <>

    <div className="container bg-[#160040] stars ">
      <div className="flex flex-col md:items-center lg:flex-row  lg:justify-start">
        <div className=''>
    <Image  className='rounded '  src={vr} alt='vr'  width="700"/></div>
    <div className="mx-10"></div>
        <div><h2 className='text-3xl text-white'>Unleash the world of<br/> <span className=' text-[#AEFEEE] font-mono text-6xl underline decoration-pink-500'> Metaverse</span>  </h2>
        <p className='w-48 font-light italic text-white'>In science fiction, the Metaverse is a hypothetical iteration of the Internet as a single, universal, and immersive virtual world</p>
        <button className=" hover:bg-fuchsia-600 bg-[#AEFEEE] text-yellow-600 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"><Link href={`/Discover`}>lets have fun here </Link></button>

        </div>
    </div>

    </div>

</>
    
  )
}
