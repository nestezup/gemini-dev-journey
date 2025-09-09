import { Button } from "@/components/ui/button";
import heroBoat from "@/assets/hero-boat.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero Image */}
          <div className="relative mb-16">
            <img 
              src={heroBoat} 
              alt="데이터 헌터에서 실무 자동화 개발자로"
              className="w-full max-w-3xl mx-auto rounded-3xl shadow-strong"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-foreground leading-tight tracking-tight font-serif">
            데이터 헌터에서<br />
            <span className="text-primary font-black">실무 자동화 개발자로</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary tracking-wide font-serif">
            웹 스크래핑 & AI 앱 개발 실무 과정
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed break-keep font-light">
              프로들은 데이터를 이렇게 활용할까?
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed break-keep font-light">
              혼자선 막막했던 스크래핑과 자동화...
            </p>
            <p className="text-lg md:text-xl text-foreground font-semibold leading-relaxed break-keep">
              끝까지 함께하는 안내자, 개발자 강사와 함께라면 가능합니다.
            </p>
          </div>

          <div className="mb-12 space-y-4">
            <div className="text-lg font-bold text-foreground">
              📅 언제든지 시작 가능한 온라인 강의
            </div>
            <div className="text-lg font-bold text-pointer">
              👥 전문가 1:1 피드백 & 실무 코칭
            </div>
            <div className="text-lg font-black text-primary">
              💰 온라인1+2 패키지 | 259,000원
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 rounded-xl shadow-accent">
              수강 신청하기
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-xl border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => {
                const curriculumSection = document.getElementById('curriculum');
                curriculumSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              커리큘럼 보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;