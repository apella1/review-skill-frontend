import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function HomeHeader() {
  const navigate = useNavigate();

  return (
    <header className="flex min-h-[50vh] flex-col items-center justify-center gap-4 py-8 text-center lg:py-12">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            ReviewSkill
          </h1>
          <div className="mx-auto max-w-[700px] space-y-2 text-muted-foreground">
            <h2 className="text-lg sm:text-xl md:text-2xl">
              Spaced Repetition Tools To Enhance Your Career
            </h2>
            <h2 className="text-lg sm:text-xl md:text-2xl">
              Build Your Skills In a Science-Based Way
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
