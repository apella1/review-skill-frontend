import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Up to 100 flashcards",
      "Basic spaced repetition",
      "Personal dashboard",
      "Mobile access",
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "For serious learners",
    features: [
      "Unlimited flashcards",
      "Advanced analytics",
      "Custom review intervals",
      "Priority support",
      "Export capabilities",
      "API access",
    ],
  },
  {
    name: "Team",
    price: "$29.99",
    period: "per month",
    description: "For organizations",
    features: [
      "Everything in Pro",
      "Team management",
      "Shared decks",
      "Progress tracking",
      "Admin dashboard",
      "SSO integration",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        Simple, Transparent Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className={index === 1 ? "border-primary" : ""}>
            <CardHeader className="text-center space-y-2 pb-2">
              <h3 className="font-bold text-xl">{plan.name}</h3>
              <div className="flex justify-center items-end">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">/{plan.period}</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {plan.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={index === 1 ? "default" : "outline"}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
