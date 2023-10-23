"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/svg/LogoSalient.svg";
import Button from "../ui/Button";
import Link from "next/link";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className=" bg-white border-gray-200 dark:bg-gray-900">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between py-4  gap-5 md:container md:mx-auto mx-5">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo "
            height={48}
            width={120}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex md:hidden items-center lg:order-2">
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setOpenMenu(!openMenu)}
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`${
            openMenu ? "" : "hidden"
          } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
        >
          <ul className="flex flex-col items-center gap-4 mt-4 lg:flex-row lg:space-x-8 lg:mt-0 cursor-pointer">
            <li>
              <Link href="/about-us">Who are we?</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <Button type="secondary" title="Request Access" />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
