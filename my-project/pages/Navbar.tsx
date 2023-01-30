import Link from 'next/link'
import React from 'react'

export default function Navbar({children}) {
  return (
    <>
<div className="container bg-[#160040] starts ">
<nav className=' flex flex-col items-center  md:justify-around md:flex-row text-pink-500' ><h2>Meta</h2> 
<ul className='flex'><li className='p-2'>
<Link className='underline decoration-pink-500 underline-offset-4 text-white' href={'/'} >Home Page</Link></li> 

</ul>
</nav>
    <div>{children} </div></div>

    
    
    </>
  )
}
