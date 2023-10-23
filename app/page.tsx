import Main from "@/components/pages/home/main";
import AboutUs from "@/components/pages/home/AboutUs";
import OutboundSection from "@/components/pages/home/OutboundSection";
import QuoteSection from "@/components/pages/home/QuoteSection";
import { Metadata } from "next";
import metaData from "@/utils/MetaData";

export const metadata: Metadata = metaData.home;
export default function Home() {
  return (
    <div>
      <Main />
      <AboutUs />
      <OutboundSection />
      <QuoteSection />
    </div>
  );
}
