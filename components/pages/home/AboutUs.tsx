import React from "react";
import Card from "./Card";
import Text from "@/components/ui/Text";
import Image from "next/image";
import womenCoworker from "../../../public/images/women-coworker.jpeg";
import coworkers from "../../../public/images/team.jpeg";
import combinatorLogo from "../../../public/images/combinator.png";

function AboutUs() {
  return (
    <div className="bg-[#000] py-40 mx-auto">
      <div className="md:px-60 px-5">
        <div className="flex items-stretch md:flex-row flex-col w-full justify-center gap-8 ">
          <Card rounded={true} padding="p-8 " extraClassName="w-auto ">
            <Text
              type="h2"
              content="Supercharge your Outbound Sales"
              className="mr-40"
            />
            <div className="mr-10">
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
            className="md:w-auto w-full rounded-lg h-[380px]"
            sizes="100vw"
            // Make the image display full width
            style={{
              width: "340px",
              height: "500px",
            }}
          />
        </div>
        <div className=" flex md:flex-row flex-col gap-8 mt-8 items-stretch justify-center">
          <div className="md:w-30">
            <div className="flex gap-8 flex-col md:w-1/3 w-full">
              <Card
                rounded={true}
                padding="p-10 max-sm:w-auto "
                bgColor="bg-green"
              >
                <Text
                  type="h3"
                  content="3x Outbound Sales"
                  className=" text-center text-gray_100 "
                />
              </Card>
              <Card rounded={true} padding="p-10 max-sm:w-auto ">
                <Text
                  type="h3"
                  content="2x Engagement Rate"
                  className=" text-center text-[#00883B]"
                />
              </Card>
            </div>
          </div>

          <Image
            src={coworkers}
            alt="coworkers"
            className="md:w-[230px] rounded-md w-full "
            height={360}
            width={230}
          />
          <Card
            rounded={true}
            padding="p-4 "
            extraClassName="md:w-1/3 w-full flex items-center justify-center"
            bgColor="bg-[#E6F8FA]"
          >
            <Image
              src={combinatorLogo}
              alt="combinator logo"
              height={100}
              width={280}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
