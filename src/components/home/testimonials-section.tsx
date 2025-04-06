import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Medical Student",
    image: "/testimonials/sarah.jpg",
    content:
      "ReviewSkill has transformed how I study for medical school. The spaced repetition system helps me retain complex information effectively.",
  },
  {
    name: "David Chen",
    role: "Software Developer",
    image: "/testimonials/david.jpg",
    content:
      "I use ReviewSkill to keep my programming knowledge sharp. It's perfect for maintaining technical knowledge over time.",
  },
  {
    name: "Emma Williams",
    role: "Language Learner",
    image: "/testimonials/emma.jpg",
    content:
      "Learning vocabulary has never been easier. The smart scheduling helps me practice at the right intervals.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
