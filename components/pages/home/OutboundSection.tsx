import React from "react";
import Text from "@/components/ui/Text";
import Card from "./Card";
import Image from "next/image";
import gif from "../../../public/gif/email.gif";

function OutboundSection() {
  return (
    <div className="container md:mx-auto px-5 my-28 text-center flex flex-col items-center gap-10 ">
      <Text type="h2" content="Outbound Sales, Without the Work" />

      <Text
        type="p"
        className="md:w-[100ch] text-center"
        content="Our exceptional personalized outreach capabilities ensure that your communications resonate with your customers, helping you build meaningful relationships that drive revenue growth. "
      />
      <div className="flex md:flex-row flex-col gap-10">
        <Card
          rounded={true}
          padding="py-40  "
          bgColor="bg-[#E6FAE6]"
          extraClassName="flex items-center max-sm:w-auto"
        >
          <Image src={gif} alt="Project" />
        </Card>
        <Card
          rounded={true}
          padding="py-40 "
          bgColor="bg-[#E6F8FA]"
          extraClassName="flex items-center max-sm:w-auto"
        >
          <Image src={gif} alt="Project" />
        </Card>
      </div>
    </div>
  );
}

export default OutboundSection;
