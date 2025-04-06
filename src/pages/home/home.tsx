import FeaturesSection from "@/components/home/features-section";
import HomeHeader from "@/components/home/home-header";
import HowItWorksSection from "@/components/home/how-it-works-section";
import PricingSection from "@/components/home/pricing-section";
import TestimonialsSection from "@/components/home/testimonials-section";

export default function Home() {
  return (
    <div className="">
      <HomeHeader />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
    </div>
  );
}
