import React from "react";
import Image from "next/image";
import Logo from "../../public/svg/LogoSalient.svg";
import Button from "../ui/Button";
import Link from "next/link";

function Navbar() {
  return (
    <header className="h-10 py-5 container mx-auto">
      <div className="flex justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo "
            height={48}
            width={120}
            className="cursor-pointer"
          />
        </Link>

        <nav>
          <ul className="flex items-center gap-5 cursor-pointer">
            <li>
              <Link href="/about-us">Who are we?</Link>
            </li>
            <li>Contact Us</li>
            <Button type="secondary" title="Request Access" />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
