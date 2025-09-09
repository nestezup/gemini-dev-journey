import { Button } from "@/components/ui/button";
import heroBoat from "@/assets/hero-boat.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-muted/30">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="relative mb-12">
            <img 
              src={heroBoat} 
              alt="데이터 헌터에서 실무 자동화 개발자로"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-strong"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-primary leading-tight">
            데이터 헌터에서<br />
            실무 자동화 개발자로
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            뉴스 긁고, 리뷰 달고, 앱까지 완성.<br />
            혼자선 막막했죠? 이제 같이 건넙시다.<br />
            <span className="text-foreground font-semibold">끝까지 함께하는 안내자, 개발자 강사와 함께라면 가능합니다.</span>
          </p>

          <Button variant="hero" size="lg" className="text-lg px-8 py-6 rounded-xl shadow-accent">
            지금 시작하기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;