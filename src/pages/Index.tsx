import HeroSection from "@/components/HeroSection";
import PainPointSection from "@/components/PainPointSection";
import SolutionSection from "@/components/SolutionSection";
import CourseSection from "@/components/CourseSection";
import OutcomesSection from "@/components/OutcomesSection";
import InstructorSection from "@/components/InstructorSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainPointSection />
      <SolutionSection />
      <CourseSection />
      <OutcomesSection />
      <InstructorSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
