import React from "react";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import mainPicture from "../../../public/images/main-picture.jpg";
import Image from "next/image";

function Main() {
  return (
    <div className="container mx-auto my-60 h-auto mt-40">
      <div className="flex items-center text-center gap-8 flex-col">
        <Text
          type="h1"
          content="Unparalleled personalized outreach and optimized customer engagement"
          className="px-16"
        />
        <Text
          type="p"
          className="w-[60ch] text-center"
          content="Experience the power of Salient - the AI-powered sales platform that maximizes outbound volume and engagement, creates effortless sales and forges lasting connections with your customers."
        />
        <div>
          <Button type="primary" title="Get Access" />
        </div>
        <Image
          src={mainPicture}
          alt="main picture "
          width={1080}
          height={530}
        />
      </div>
    </div>
  );
}

export default Main;
