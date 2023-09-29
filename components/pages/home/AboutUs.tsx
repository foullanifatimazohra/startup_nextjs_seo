import React from "react";
import Card from "./Card";
import Text from "@/components/ui/Text";
import Image from "next/image";
import womenCoworker from "../../../public/images/working-on-computer.jpg";

function AboutUs() {
  return (
    <div className="bg-[#000] py-40 px-auto mx-0">
      <div className="container flex items-center justify-center">
        <Card rounded={true} padding="p-8 " extraClassName="basis-2/3">
          <Text
            type="h2"
            content="Supercharge your Outbound Sales"
            className="mr-20"
          />
          <div>
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
          className="basis-1/3 rounded-lg"
          height={350}
        />
      </div>
    </div>
  );
}

export default AboutUs;
