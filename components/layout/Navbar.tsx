import React from "react";
import Image from "next/image";
import Logo from "../../public/svg/LogoSalient.svg";
import Button from "../ui/Button";

function Navbar() {
  return (
    <div className="h-10 py-5 container mx-auto">
      <div className="flex justify-between">
        <Image src={Logo} alt="Logo " height={48} width={120} />
        <nav>
          <ul className="flex items-center gap-5 cursor-pointer">
            <li>Who are we?</li>
            <li>Contact Us</li>
            <Button type="secondary" title="Request Access" />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
