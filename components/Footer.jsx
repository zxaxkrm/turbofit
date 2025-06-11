import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";


const Footer = () => {
  return (
    <main className='bg-black flex flex-col items-center justify-center py-10 gap-10  w-full'>
     <div className='flex items-center z-50  '>
           <Image
           src={"/gymbag.png"}
           alt={"logo"}
           width={800}
           height={800}
           className='w-18 h-18'
           />
           <br />
           <h1 className='text-red-500 text-lg font-bold italic'>TurboFit</h1>
         </div>

         
        <div className="flex max-md:flex-col max-lg:py-5 items-center gap-5 text-sm text-red-500">
          <Link href={"#"} className="hover:underline hover:text-white">FAQs</Link>
          <Link href={"#"}  className="hover:underline hover:text-white">Blogs</Link>
          <Link href={"#"}  className="hover:underline hover:text-white">Terms of Use</Link>
          <Link href={"#"}  className="hover:underline hover:text-white">Privacy Policy</Link>
        </div>

        <div className="flex items-center gap-5 text-lg text-red-600" >
            <Link href={"#"}  className="hover:text-white"><FaInstagram /></Link>
           <Link href={"#"} className="hover:text-white"><FaXTwitter /></Link>
            <Link href={"#"} className="hover:text-white"> <FaTiktok /></Link>


        </div>
    </main>
  )
}

export default Footer
