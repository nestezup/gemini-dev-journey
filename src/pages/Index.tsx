import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointSection from "@/components/PainPointSection";
import SolutionSection from "@/components/SolutionSection";
import CourseSection from "@/components/CourseSection";
import InstructorSection from "@/components/InstructorSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-foreground tracking-tight font-serif">
              프로그램 소개
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              1인 개발자와<br className="sm:hidden" />
              실무 자동화를 원하는 분들을 위한<br />
              <span className="font-medium">특별한 데이터 활용<br className="sm:hidden" />
              마스터 과정입니다.</span>
            </p>
            {/* Program overview image */}
            <div className="w-full max-w-2xl mx-auto mt-12 mb-16">
              <img 
                src="/src/assets/program-overview.png" 
                alt="데이터 헌터 프로그램 전체 여정 다이어그램" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
          <PainPointSection />
          <div className="mt-20">
            <SolutionSection />
          </div>
        </div>
      </section>
      <CourseSection />
      <InstructorSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
