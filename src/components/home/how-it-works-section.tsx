import { Check, PenLine, Repeat, Timer } from "lucide-react";

const steps = [
  {
    icon: <PenLine className="h-6 w-6" />,
    title: "Create Your Content",
    description: "Add your learning materials as flashcards or notes",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "Review Daily",
    description: "Complete your scheduled review sessions",
  },
  {
    icon: <Timer className="h-6 w-6" />,
    title: "Smart Intervals",
    description: "Let our algorithm optimize your review schedule",
  },
  {
    icon: <Repeat className="h-6 w-6" />,
    title: "Track Progress",
    description: "Monitor your retention and learning progress",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-secondary/10 py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">
          How ReviewSkill Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {step.icon}
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute translate-x-[150%] translate-y-6">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
