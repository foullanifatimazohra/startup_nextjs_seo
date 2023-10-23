import React from "react";

import { Metadata } from "next";
import metaData from "@/utils/MetaData";
import Image from "next/image";
import image from "@/public/images/about-image.jpeg";
import Text from "@/components/ui/Text";
import { TextField } from "@/components/ui/TextField";
import Button from "@/components/ui/Button";
import exit from "@/public/svg/x.svg";

export const metadata: Metadata = metaData.contact;

function page() {
  return (
    <div className="md:h-full relative flex md:flex-row flex-col max-sm:gap-5 max-sm:mt-10">
      <div className="container md:mx-auto px-10  h-full flex flex-col justify-center ">
        <Image
          src={exit}
          alt="exit icon"
          height={24}
          width={24}
          className="cursor-pointer my-10"
        />
        <div className="md:pl-5">
          <Text content="Interested in trying Salient?" type="h1" />
          <p className="mt-3 ml-1">
            We are excited for you to join our platform
          </p>
          <form className="flex flex-col gap-8 mt-8">
            <TextField name="name" label="Name" type="text" />
            <TextField name="email" label="Work Email" type="email" />
            <TextField
              name="number_people"
              label="Number of People Who Outbound"
              subLabel="Number of people at your company who regularly send outbound emails."
              type="number"
            />
            <TextField
              name="total_emails"
              label="Total Emails Sent Per Day"
              subLabel="Your company's total daily outbound volume."
              type="number"
            />
            <Button type="primary" title="Submit" />
          </form>
        </div>
      </div>
      <Image
        src={image}
        alt="About Image "
        width={550}
        height={800}
        className="md:w-[35%] w-screen top-0 right-0"
      />
    </div>
  );
}

export default page;
