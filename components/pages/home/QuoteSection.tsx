import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import manImage from "../../../public/images/man-working-on-laptop.jpeg";

function QuoteSection() {
  return (
    <div className="bg-[#232323] flex lg:flex-row flex-col lg:h-1/2">
      <div className="flex flex-col lg:w-1/2 max-lg:p-10 gap-20 items-center justify-center ">
        <Text
          type="h3"
          className="text-center text-white md:w-[28ch] w-auto text-[30px] font-[400]"
          content="&ldquo; We always had to choose between outbound volume or high-touch personalization; thanks to Salient, we don't have to &ldquo;"
        />
        <p className="text-base text-[#BFBFBF]">Head of Sales, PublicCo</p>
      </div>
      <Image
        src={manImage}
        alt="man working on his computer"
        className="lg:w-1/2"
      />
    </div>
  );
}

export default QuoteSection;
