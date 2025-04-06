export interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
}

export const testimonials: Testimonial[] = [
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
  {
    name: "Michael Rodriguez",
    role: "Law Student",
    image: "/testimonials/michael.jpg",
    content:
      "Preparing for the bar exam became much more manageable with ReviewSkill. The system helps me systematically review complex legal concepts.",
  },
  {
    name: "Priya Patel",
    role: "Data Scientist",
    image: "/testimonials/priya.jpg",
    content:
      "As a data scientist, staying updated with ML algorithms is crucial. ReviewSkill helps me maintain and refresh my theoretical knowledge effectively.",
  },
  {
    name: "James Wilson",
    role: "History Teacher",
    image: "/testimonials/james.jpg",
    content:
      "I recommend ReviewSkill to all my students. It's transformed how they approach learning historical dates and events.",
  },
  {
    name: "Lisa Zhang",
    role: "Medical Resident",
    image: "/testimonials/lisa.jpg",
    content:
      "During my residency, ReviewSkill has been invaluable for keeping medical procedures and protocols fresh in my mind.",
  },
];
