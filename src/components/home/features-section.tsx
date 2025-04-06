import { Brain, Clock, Layout, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Science-Based Learning",
    description: "Leverage spaced repetition for optimal knowledge retention",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Smart Review Scheduling",
    description:
      "Automatically scheduled reviews based on your learning patterns",
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Organized Learning",
    description: "Keep your study materials structured and easily accessible",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Progress Tracking",
    description: "Monitor your learning progress with detailed analytics",
  },
];

export default function FeaturesSection() {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        Why Choose ReviewSkill?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center space-y-4">
              <div className="flex justify-center text-primary">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
