/* eslint-disable jsx-a11y/alt-text */
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { apod } from '../type'

export default function Date  ({data}) {
  let result: apod[] = data

console.log(result[0].title)

  return (
  <div className='container bg-[#000000] starts'>
    <div className='w-[95%] m-auto'>
  <h3 className='text-3xl text-center'>{result[0].title}</h3>

    <div className='flex flex-col text-center  lg:items-center lg:flex-row lg:justify-evenly'>
<Image className='m-auto my-10' alt={`${result[0].title}`} src={`${result[0].url}`} width={350} height={300}/>
<p className='w-[90%] m-auto lg:w-[50%] text-xl'>{result[0].explanation}</p>
 </div></div></div> 
  )
}



export async function getStaticPaths() {
    const req = await fetch("https://api.nasa.gov/planetary/apod?start_date=2023-01-20&api_key=7lHtowszPCtn0o8ysWDE29SOgvzcJ5vhcmJlvW6Q")
    const res: apod[] = await req.json()
    const paths = res.map(e => ({params:  {date: e.date}}))
    console.log(paths);

    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
    export const getStaticProps: GetServerSideProps = async ({params}) => {
    const req = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${params.date}&api_key=7lHtowszPCtn0o8ysWDE29SOgvzcJ5vhcmJlvW6Q`)
    const res: apod[] = await req.json()
    const response: apod[] = res.splice(0,9)
console.log('====================================');
console.log(`${params.date}`);
console.log('====================================');
    
    return {
      // Passed to the page component as props
      props: { data: response } ,
    }
}
