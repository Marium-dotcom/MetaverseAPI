import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { apod } from '../type';






export default function Discover({apod} ) {
console.log(apod.map((e:apod)=>{console.log(typeof(e.date))}));

  return (

<div className=''>
  <h1 className='text-center my-5 text-xl text-[#AEFEEE] underline underline-offset-4 decoration-yellow-500'>Astronomy Picture of the Day</h1>
<div className=' grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-4'>{apod.map((e:apod) => {
  
  return(
  <>
<div className='text-center border border-fuchsia-500 flex flex-col'>
  <Image className='m-auto' src={`${e.url}`} alt="img" width={120} height={120}/>
  <p className=''><Link href={`/something-else?uri=${e.date}`} as={`${e.date}`}>{e.title} <br/> {e.date}</Link></p>
 
</div>

</>)})}</div>
</div>

  )
}


export const getStaticProps: GetStaticProps = async (context) =>{
  const req = await fetch("https://api.nasa.gov/planetary/apod?start_date=2023-1-20&api_key=7lHtowszPCtn0o8ysWDE29SOgvzcJ5vhcmJlvW6Q")
  const res: apod[] = await req.json()
  const response: apod[] = res.splice(0,9)
  
  return {
  props : {
    apod: response

  }
  
  }
}
