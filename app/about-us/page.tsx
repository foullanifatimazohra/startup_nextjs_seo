import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import image from "../../public/images/about-us-image.png";

function page() {
  return (
    <div className=" mx-auto">
      <div className="md:h-screen">
        {/* FIRST SECTION */}
        <div className="container md:mx-auto p-5 flex md:flex-row flex-col md:h-full h-auto md:justify-between md:items-center">
          <div className="md:w-1/2 w-auto flex flex-col  gap-5">
            <Text type="h3" content="ABOUT US" className="text-[20px] " />
            <Text type="h1" content=" Outbound sales On autopilot" />
            <Text
              type="p"
              className="mt-2"
              content="Salient is an AI-powered sales platform that enables sales teams to increase their outbound volume and engagement. "
            />
            <Text
              type="p"
              content="With Salient, you can personalize your outbound communications at scale, automate responses to customers, and proactively re-engage with prospects at the optimal time."
            />
          </div>
          <Image src={image} alt="Image about us " height={410} width={400} />
        </div>
      </div>
      {/* SECOND SECTION */}
      <div className="container  md:mx-auto p-5">
        <div className="flex gap-5 flex-col my-10">
          <div className="md:w-[60%]">
            <Text type="h2" content="What's the problem?" />
            <Text
              type="p"
              content="Nearly all businesses engage in outbound sales, and they know that personalization is important — in fact, it has been shown to increase outbound revenue by 8x! However, personalization takes up to 10 minutes per email. These businesses all face the same problem: choosing between maximizing outbound volume or engagement rate."
            />
            <Text type="h2" content="Salient solves this" className="mt-5" />
            <Text
              type="p"
              content="We leverage ML and proprietary data engines to generate contextually-relevant, human-quality emails, reducing the time to personalize by 20x.
From there, we auto-respond to common queries, schedule meetings, and proactively re-engage with prospects at the the right time, freeing up your sales teams to focus on calls and closing deals.
We do all of this without interrupting your team's current workflows, integrating fully with Salesloft and Outreach."
            />
            <Text type="h2" content="Our ask" className="mt-5" />
            <ul className="list-disc ml-10">
              <li>
                If you're a Sales or Marketing leader, please reach out here.
                We'd love to have you folks on board!
              </li>
              <li>
                If you're an investor, please reach out to ari@trysalient.com.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* THIRD SECTION */}
      <div className="h-[400px] w-screen background-gradient mt-20"></div>
    </div>
  );
}

export default page;
