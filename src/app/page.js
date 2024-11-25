import { Button } from "@/component";

export default function Home() {
  return (
    <div className="p-8 space-y-4">
      <Button variant="primary" size="md">Primary Button</Button>
      <Button variant="secondary" size="lg">Secondary Button</Button>
    </div>
  );
}

