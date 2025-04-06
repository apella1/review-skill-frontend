import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Number of testimonials to show based on viewport
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((current) =>
          current + visibleCount >= testimonials.length ? 0 : current + 1,
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, visibleCount]);

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current + visibleCount >= testimonials.length ? 0 : current + 1,
    );
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - visibleCount : current - 1,
    );
    setAutoPlay(false);
  };

  return (
    <section className="container mx-auto py-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full shrink-0"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="px-3">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {testimonial.content}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div className="flex justify-center mt-6 gap-2">
          {Array.from(
            { length: Math.ceil(testimonials.length / visibleCount) },
            (_, i) => (
              <button
                key={i}
                className={`h-2 w-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / visibleCount) === i
                    ? "bg-primary"
                    : "bg-primary/20"
                }`}
                onClick={() => {
                  setCurrentIndex(i * visibleCount);
                  setAutoPlay(false);
                }}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
