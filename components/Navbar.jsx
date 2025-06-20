"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useSession } from 'next-auth/react';


const Navbar = () => {

  const [navOpen, setnavOpen] = useState(false)

  const {data : session} = useSession();
  console.log(session);
  
  

  const navItems = [
    {label: "Home", url:"/"},
    {label: "Pricing", url:"/pricing"},
    {label: "Shop", url:"/shop"},
    {label: "Contact", url:"/contact"},
    
    

  ]
  return (
  <nav className='flex items-center justify-between sticky top-0 shadow-md px-6 py-2 bg-neutral-800 z-50'>
    <div className='md:flex items-center z-50 '>
      <Image
      src={"/muscles.png"}
      alt={"logo"}
      width={800}
      height={800}
      className='w-18 h-18 bg-[#DAB55D]'
      />
      <br />
      <h1 className='text-[#DAB55D] border-2 px-2 py-5 text-lg font-bold italic max-md:hidden'>TurboFit</h1>
    </div>


    <div className='flex gap-10 items-center'>
  <div className=' flex gap-10 max-lg:hidden '>
      {navItems.map((items, index)=>(
        <Link 
        key={index}
        href={items.url}
        className='text-sm font-semibold  text-white hover:text-[#DAB55D] transition-all'
        >
        {items.label}
        </Link>
      ))}
    </div >

    {session ? (
      <div>
        <button
        id='basic-button'
        className='outline-none'
        >
          <img
           src={session?.user?.image} 
          alt={session?.user?.name.slice(0,2).toUpperCase()} 
          className='rounded-full w-10 h-10 text-[#5A363A] hover:text-white' />
        </button>
      </div>
    ) : (
      <Link className='text-sm font-semibold hover:text-white text-[#DAB55D]' href={"/auth/signin"}>
      Sign Up</Link>
    )}
    </div>
  


{/* for mobile and tablets */}


     <div className= {`transition-transform duration-300 flex-col ${navOpen ? "flex" : "hidden"} bg-black pt-12  flex items-center gap-7 lg:hidden justify-center gap-16  h-dvh w-full fixed top-0 left-0`} >
      {navItems.map((items, index)=>(
        <Link 
        key={index}
        href={items.url}
        className='lg:text-lg hover:text-white text-[#DAB55D]'
        >
        {items.label}
        </Link>
      ))}
    </div >
   
    <button className='lg:hidden z-50 font-black text-[#DAB55D] text-2xl' onClick={()=>{
      setnavOpen(!navOpen)
    }}>
      {navOpen ? <IoMdClose /> : <HiOutlineMenu />  }
    </button>
  </nav>
  )
}

export default Navbar
