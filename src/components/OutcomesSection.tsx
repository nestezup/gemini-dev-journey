import appMockup from "@/assets/app-mockup.jpg";

const OutcomesSection = () => {
  const outcomes = [
    {
      icon: "📰",
      title: "뉴스 요약 앱",
      description: "실시간 뉴스를 AI로 요약하는 데스크톱 앱"
    },
    {
      icon: "💬", 
      title: "리뷰 자동 댓글 앱",
      description: "네이버 스마트스토어 리뷰에 AI가 자동 답변"
    },
    {
      icon: "🛠",
      title: "리뷰 관리 앱 소스코드",
      description: "오프라인 클래스에서 제공하는 완성된 소스코드"
    },
    {
      icon: "🔎",
      title: "API 없는 웹사이트 데이터 추출 경험", 
      description: "어떤 사이트든 데이터를 가져올 수 있는 능력"
    },
    {
      icon: "🚀",
      title: "자동화 개발자로서의 자신감 확보",
      description: "반복 작업을 자동화하는 실무 개발 역량"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            학습 결과물
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={appMockup} 
                alt="뉴스 요약 앱 및 리뷰 자동화 앱 화면"
                className="w-full rounded-2xl shadow-strong"
              />
            </div>

            <div className="space-y-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{outcome.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{outcome.title}</h3>
                      <p className="text-muted-foreground">{outcome.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;