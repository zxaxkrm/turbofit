"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {

  const [navOpen, setnavOpen] = useState(false)

  const navItems = [
    {label: "Home", url:"/"},
    {label: "Categories", url:"/categories"},
    {label: "Shop", url:"/shop"},
    {label: "Sign In", url:"/signin"},
    {label: "Sign Up", url:"/signup"},
    

  ]
  return (
  <nav className='flex items-center justify-between sticky top-0 shadow-md px-6 py-2 bg-black z-50'>
    <div className='md:flex items-center z-50 '>
      <Image
      src={"/gymbag.png"}
      alt={"logo"}
      width={800}
      height={800}
      className='w-18 h-18'
      />
      <br />
      <h1 className='text-red-500 text-lg font-bold italic max-md:hidden'>TurboFit</h1>
    </div>

    <div className=' flex gap-10 max-lg:hidden bg-black'>
      {navItems.map((items, index)=>(
        <Link 
        key={index}
        href={items.url}
        className='lg:text-lg hover:text-white text-red-500 transition-all'
        >
        {items.label}
        </Link>
      ))}
    </div >


{/* for mobile and tablets */}


     <div className= {`transition-transform duration-300 flex-col ${navOpen ? "flex" : "hidden"} bg-black pt-12  flex items-center gap-7 lg:hidden justify-center gap-16  h-dvh w-full fixed top-0 left-0`} >
      {navItems.map((items, index)=>(
        <Link 
        key={index}
        href={items.url}
        className='lg:text-lg hover:text-white text-red-500'
        >
        {items.label}
        </Link>
      ))}
    </div >
   
    <button className='lg:hidden z-50 font-black text-red-500 text-2xl' onClick={()=>{
      setnavOpen(!navOpen)
    }}>
      {navOpen ? <IoMdClose /> : <HiOutlineMenu />  }
    </button>
  </nav>
  )
}

export default Navbar
