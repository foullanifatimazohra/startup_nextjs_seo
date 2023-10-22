import React from "react";
import Image from "next/image";
import Logo from "../../public/svg/LogoSalient.svg";
import LinkedinIcon from "../../public/svg/linkedin.svg";

function Footer() {
  return (
    <footer className="container mx-auto my-40">
      <div className="flex md:flex-row flex-col gap-5 justify-between items-center">
        <Image src={Logo} alt="logo silent" />
        <nav>
          <ul className="flex text-center gap-5 cursor-pointer">
            <li>Who are we?</li>
            <li>Contact Us</li>
            <li>Get in touch</li>
          </ul>
        </nav>
        <Image src={LinkedinIcon} alt="linkedin icon" />
      </div>
      <hr className="w-full h-[1px] bg-[#6F6F6F] mt-16" />
      <ul className="flex md:flex-row flex-col md:gap-10 gap-5 items-center justify-center mt-8">
        <li>2023 by Ese for Salient</li>
        <li className="underline">Privacy Policy</li>
        <li className="underline">Terms and Conditions</li>
        <li className="underline">Cookies Policy</li>
      </ul>
    </footer>
  );
}

export default Footer;
