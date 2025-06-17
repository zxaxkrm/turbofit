import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";


const Footer = () => {
  return (
    <main>
      <section className="bg-neutral-900 text-white space-y-10 pt-20 pb-10 max-md:flex-col max-md:flex">
        <div className="flex  max-lg:p-3 justify-around max-md:flex-col max-md:gap-10 max-lg:grid max-lg:grid-cols-3 max-lg:space-y-13">
          <div>
            <Image
                 src={"/muscles.png"}
                 alt={"logo"}
                 width={800}
                 height={800}
                 className='w-18 h-18'
                 />
                 <br />
                 <h1 className='text-[#DAB55D] text-lg font-bold italic max-md:hidden'>TurboFit</h1>
               </div>
          
         

          

          <ul className="text-gray-300 space-y-2 capitalize">
            <li className="mb-4 text-lg font-bold text-white">Opening Hours</li>
            <li>Sun-Fri: 9AM to 10PM</li>
            <li>Saturday: 10AM to 7PM</li>
            
            <li> 
              <div className="flex items-center gap-5 text-lg "><h1><FaInstagram /></h1><h1><RiTwitterXFill /></h1><h1><FaGithub /></h1></div>
            </li>
          </ul>

          <ul className="text-gray-300 space-y-2 capitalize">
            <li className="mb-4 text-lg font-bold text-white">Contact Us</li>
            <li>407 Gado Nasko Rd</li>
            <li>Kubwa, Abuja</li>
            <li>Mail: turbofit.support@gmail.com</li>
            <li>Tel: 0801110011</li>
          </ul>
          

          <div>
         <ul className="text-gray-300 space-y-2 capitalize">
            <li className="mb-4 text-lg font-bold text-white">Menu</li>
            <li>Facility</li>
            <li>Methods</li>
            <li>Program List</li>
            <li>Membership</li>
             <li>Contacts</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
            <li>Accessibility</li>
          </ul>

          <button className="bg-[#DAB55D] transition-all hover:underline mt-4  px-4 py-2 text-center justify-center font-semibold text-black">BOOK NOW</button>
          </div>
          

         
        </div>

        <div className="mx-15">
          <div className="border-t border-gray-700 p-3">
            <p className="text-center">
              Copyright &copy; 2025 All rights reserved
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
