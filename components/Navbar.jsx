"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useSession } from "next-auth/react";
import { FaDiamond } from "react-icons/fa6";
import { Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [navOpen, setnavOpen] = useState(false);

  const { data: session } = useSession();
  console.log(session);

  const navItems = [
    { label: "Home", url: "/" },
    { label: "Membership", url: "/membership" },
    { label: "Tracker", url: "/tracker" },
    { label: "Contact", url: "/contact" },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className="flex items-center justify-between sticky top-0 shadow-md px-6 py-2 bg-neutral-800 z-90">
      <div className=" items-center z-50 ">
        <h1 className="text-white flex  text-2xl font-bold italic max-md:text-lg">
          TURBOFIT
          <FaDiamond className="text-[#DAB55D] mx-2" />
        </h1>
        <p className="text-white flex  text-2xl font-bold italic max-md:text-lg">
          FITNESS HUB
        </p>
      </div>

      <div className="flex gap-10 items-center">
        <div className=" flex gap-10 max-lg:hidden ">
          {navItems.map((items, index) => (
            <Link
              key={index}
              href={items.url}
              className="text-sm text-white hover:text-[#DAB55D] transition-all"
            >
              {items.label}
            </Link>
          ))}
        </div>

        {session ? (
          <div>
            <button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="outline-none"
            >
              <img
                src={session?.user?.image}
                alt={session?.user?.name.slice(0, 2).toUpperCase()}
                className="rounded-full w-10 h-10 text-[#5A363A] max-md:hidden hover:text-white"
              />
            </button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <button onClick={() => signOut({ redirectTo: "/auth/signin" })}>
                  Sign Out
                </button>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Link
            className="text-sm hover:text-[#DAB55D] text-white"
            href={"/auth/signin"}
          >
            Sign Up
          </Link>
        )}
      </div>

      {/* for mobile and tablets */}

      <div
        className={`transition-transform duration-300 flex-col ${
          navOpen ? "flex" : "hidden"
        } bg-black pt-12  flex items-center gap-7 lg:hidden justify-center h-dvh w-full fixed top-0 left-0`}
      >
        {navItems.map((items, index) => (
          <Link
            key={index}
            href={items.url}
            onClick={() => setnavOpen(!navOpen)}
            className="lg:text-lg hover:text-white text-white"
          >
            {items.label}
          </Link>
        ))}
      </div>

      <button
        className="lg:hidden z-50 font-black text-white text-2xl"
        onClick={() => {
          setnavOpen(!navOpen);
        }}
      >
        {navOpen ? <IoMdClose /> : <HiOutlineMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
