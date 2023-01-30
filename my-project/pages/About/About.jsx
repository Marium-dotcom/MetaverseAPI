import Image from 'next/image'
import React from 'react'
import about from '../../public/about.jpg'

export default function About() {
  return (
  <>
  <div id='#about' className="stars mb-20">
    <h2 className=' text-3xl text-center my-5 underline decoration-pink-500 text-white'>About Us</h2>   
     <div className="m-auto w-9/12">

    <div className="flex  flex-col    lg:flex-row  lg:justify-between lg:items-center ">
      <Image width={700} src={about} alt="about"/>
      <div className=""><h3 className='text-2xl text-yellow-500'>Meta</h3>
      <p className="text-lg text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora ullam ut omnis culpa explicabo. 
        Non harum natus quaerat ipsa quidem ex, pariatur repellat maxime numquam, temporibus a libero eligendi.</p>
      </div>
    </div></div>
  </div>
  </>)
}
