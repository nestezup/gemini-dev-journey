import instructorImage from "@/assets/instructor.jpg";

const InstructorSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            강사 소개
          </h2>

          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="text-center md:text-left md:col-span-1">
              <img 
                src={instructorImage} 
                alt="개발자 강사"
                className="w-64 h-64 mx-auto md:mx-0 rounded-2xl shadow-strong object-cover"
              />
            </div>

            <div className="md:col-span-2">
              <div className="space-y-6 p-8 border border-border/50 rounded-2xl bg-card/50">
                <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                  "저는 화려하지 않아도, 끝까지 함께하는 사람이고 싶습니다."
                </blockquote>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    엑셀 자동화에서 출발해 최근 2년 반은 프로그래밍과 데이터 스크래핑에 몰입했습니다.
                  </p>
                  <p className="leading-relaxed">
                    혼자라면 막막할 길도, 함께라면 분명히 건널 수 있습니다.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border border-primary/20">
                  <p className="text-foreground font-semibold">
                    💡 실무 중심의 교육철학으로 여러분의 자동화 개발 여정을 끝까지 함께합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;