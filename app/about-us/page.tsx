import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import image from "../../public/images/about-image.jpeg";
import Ceo from "../../public/images/ceo.jpeg";
import Cto from "../../public/images/cto.jpeg";

function page() {
  return (
    <div className=" mx-auto">
      <div className="md:h-screen">
        {/* FIRST SECTION */}
        <div className="container md:mx-auto p-5 flex md:flex-row flex-col max-sm:gap-5 md:h-full h-auto md:justify-between md:items-center">
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
          <Image
            src={image}
            alt="Image about us"
            height={320}
            width={400}
            className="h-[430px] w-[380px]"
          />
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
      <div className="h-[400px] w-screen background-gradient mt-20 flex items-center justify-center">
        <Text
          type="h2"
          content="Meet the Team"
          className="text-white md:text-[56px] font-normal "
        />
      </div>
      {/* TEAM SECTION */}
      <div className="container  md:mx-auto p-5">
        <div className="flex gap-5 md:flex-row flex-col my-10">
          <div className="basis-1/2 flex md:flex-row flex-col gap-5">
            <div className="basis-1/2 relative">
              <Image
                src={Ceo}
                alt="CEO of salient"
                width={200}
                height={200}
                className="relative z-10"
              />
              <div className="w-[200px] h-[200px] bg-green absolute top-4 left-4"></div>
              <p className="mt-8 text-sm">CEO</p>
              <h5 className="text-xl">Ari</h5>
            </div>
            <div className="basis-1/2 relative">
              <Image
                src={Cto}
                alt="CTO of salient"
                width={200}
                height={200}
                className="relative z-10"
              />
              <div className="w-[200px] h-[200px] bg-green absolute top-4 left-4"></div>
              <p className="mt-8 text-sm">CTO</p>
              <h5 className="text-xl">Mukund</h5>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col md:gap-[56px] gap-5">
            <div>
              <h3 className="text-[24px] font-normal mb-[32px]">
                🎯 Ari (CEO):
              </h3>
              <p className="font-[300]">
                Sales Finance @Tesla, previously @Goldman Sachs @DST Global.
                Computer Science + Philosophy @Columbia. Chat with me about
                Manchester United, the intersection of technology and
                government, and Ben Taub.
              </p>
            </div>
            <div>
              <h3 className="text-[24px] font-normal mb-[32px]">
                🚀 Mukund (CTO):
              </h3>
              <p className="font-[300]">
                Growth Engineering @Airtable @Dropbox. Computer Science +
                Robotics @Carnegie Mellon. Chat with me about alpine climbing,
                solo backpacking, and rock music 🎸
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
