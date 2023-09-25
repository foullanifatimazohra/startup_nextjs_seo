import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

export default function Home() {
  return (
    <div>
      <h1>First page</h1>
      <Button type="primary" title="Get Access" />
      <Button type="secondary" title="Request Access" />
      <Text
        content="Unparalleled personalized outreach and optimized customer engagement"
        type="h1"
      />
    </div>
  );
}
