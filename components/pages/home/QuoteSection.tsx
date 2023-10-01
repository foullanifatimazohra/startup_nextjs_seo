import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import manImage from "../../../public/images/man-working.jpg";

function QuoteSection() {
  return (
    <div className="bg-[#232323] flex h-1/2">
      <div className="flex flex-col w-1/2 gap-20 items-center justify-center ">
        <Text
          type="h3"
          className="text-center text-white w-[28ch] text-[30px] font-[400]"
          content="&ldquo; We always had to choose between outbound volume or high-touch personalization; thanks to Salient, we don't have to &ldquo;"
        />
        <p className="text-base text-[#BFBFBF]">Head of Sales, PublicCo</p>
      </div>
      <Image
        src={manImage}
        alt="man working on his computer"
        className="w-1/2"
      />
    </div>
  );
}

export default QuoteSection;
