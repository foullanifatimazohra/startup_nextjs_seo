import React from "react";
import Text from "@/components/ui/Text";
import Card from "./Card";
import Image from "next/image";
import asset from "../../../public/svg/asset-svg.svg";

function OutboundSection() {
  return (
    <div className="container mx-auto my-28 text-center flex flex-col items-center gap-10 ">
      <Text type="h2" content="Outbound Sales, Without the Work" />

      <Text
        type="p"
        className="w-[100ch] text-center"
        content="Our exceptional personalized outreach capabilities ensure that your communications resonate with your customers, helping you build meaningful relationships that drive revenue growth. "
      />
      <div className="flex gap-10">
        <Card
          rounded={true}
          padding="py-40 px-5"
          bgColor="bg-[#E6FAE6]"
          extraClassName="flex items-center"
        >
          <Image src={asset} alt="Project" />
        </Card>
        <Card
          rounded={true}
          padding="py-40 px-5"
          bgColor="bg-[#E6F8FA]"
          extraClassName="flex items-center"
        >
          <Image src={asset} alt="Project" />
        </Card>
      </div>
    </div>
  );
}

export default OutboundSection;
