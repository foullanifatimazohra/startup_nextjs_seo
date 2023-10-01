import React from "react";
import Card from "./Card";
import Text from "@/components/ui/Text";
import Image from "next/image";
import womenCoworker from "../../../public/images/working-on-computer.jpg";
import coworkers from "../../../public/images/coworkers.png";
import combinatorLogo from "../../../public/images/combinator.png";

function AboutUs() {
  return (
    <div className="bg-[#000] py-40 px-60 px-auto mx-0">
      <div className="container flex items-stretch justify-center gap-8 ">
        <Card rounded={true} padding="p-8 " extraClassName="w-3/4">
          <Text
            type="h2"
            content="Supercharge your Outbound Sales"
            className="mr-60"
          />
          <div className="mr-20">
            <Text
              type="p"
              content="Unleash personalized outreach that forges meaningful connections and creates effortless leads."
            />
            <Text
              type="p"
              content="Salient is your AI sales development representative that;"
            />
            <ul className="list-disc ml-6">
              <li>Generates human-quality outbound in your tone of voice</li>
              <li>Proactively sets up meetings</li>
              <li>Responds to common queries</li>
            </ul>
          </div>
        </Card>
        <Image
          src={womenCoworker}
          alt="women coworker"
          className="w-1/4 rounded-lg h-[380px]"
        />
      </div>
      <div className="container flex gap-8 mt-8 items-stretch justify-center">
        <div className="w-30">
          <div className="flex gap-8 flex-col">
            <Card rounded={true} padding="p-10 " bgColor="bg-green">
              <Text
                type="h3"
                content="3x Outbound Sales"
                className=" text-center text-white "
              />
            </Card>
            <Card rounded={true} padding="p-10 ">
              <Text
                type="h3"
                content="2x Engagement Rate"
                className=" text-center text-[#00883B]"
              />
            </Card>
          </div>
        </div>

        <Image src={coworkers} alt="coworkers" className="w-1/3 " />
        <Card
          rounded={true}
          padding="p-4 "
          extraClassName="w-1/3 flex items-center justify-center"
          bgColor="bg-[#E6F8FA]"
        >
          <Image src={combinatorLogo} alt="combinator logo" />
        </Card>
      </div>
    </div>
  );
}

export default AboutUs;
