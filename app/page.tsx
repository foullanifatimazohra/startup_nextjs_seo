import Card from "@/components/pages/home/Card";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1>First page</h1>
      <Button type="primary" title="Get Access" />
      <Button type="secondary" title="Request Access" />
      <Text
        content="Unparalleled personalized outreach and optimized customer engagement"
        type="h1"
      />
      <div className="w-1/2">
        <Card rounded={true} padding="p-12" bgColor="bg-[#E6F8FA]">
          <Text content="Supercharge your Outbound Sales" type="h2" />
          <div>
            <Text
              content="Unleash personalized outreach that forges meaningful connections and creates effortless leads. "
              type="p"
            />
            <Text
              content="Salient is your AI sales development representative that;"
              type="p"
            />
            <ul className="list-disc ml-5">
              <li>Generates human-quality outbound in your tone of voice</li>
              <li>Proactively sets up meetings</li>
              <li>Responds to common queries</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}
