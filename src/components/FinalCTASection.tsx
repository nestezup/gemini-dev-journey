import { Button } from "@/components/ui/button";
import finalCTAImage from "@/assets/final-cta.jpg";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-12">
            <img 
              src={finalCTAImage} 
              alt="함께 배움의 여정을 시작하세요"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-strong"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            뉴스 긁고, 리뷰 달고, 앱까지 완성.
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            끝까지 함께하는 안내자와 지금 시작하세요.
          </p>

          <div className="space-y-6">
            <Button variant="hero" size="lg" className="text-xl px-12 py-8 rounded-2xl shadow-accent">
              🚀 수강 신청하기
            </Button>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-success">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                실무 즉시 적용 가능
              </span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-success">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                완성된 앱 소스코드 제공
              </span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-success">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                끝까지 함께하는 피드백
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;