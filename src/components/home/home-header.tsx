import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";

export default function HomeHeader() {
  const navigate = useNavigate();

  return (
    <header className="flex min-h-[50vh] flex-col items-center justify-center gap-4 py-8 text-center lg:py-12">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Unlock your potential with <span>ReviewSkill!</span>
          </h1>
          <div className="mx-auto space-y-2 text-muted-foreground">
            <h2 className="text-lg sm:text-xl md:text-2xl">
              Our innovative learning platform harnesses the power of spaced
              repetition and interactive tools to help you master new concepts
              efficiently. Whether you&apos;re studying for exams, learning a
              new language, or exploring a new subject, we&apos;re here to guide
              you every step of the way.
            </h2>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            onClick={() => navigate("/auth/sign-up")}
            className="gap-2"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate("/docs")}>
            Learn More
          </Button>
        </div>
      </div>
    </header>
  );
}
