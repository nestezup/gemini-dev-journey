const PainPointSection = () => {
  const painPoints = [
    {
      icon: "📰",
      title: "매일 아침 뉴스 기사를 복사·붙여넣기",
      description: "30분 이상 허비"
    },
    {
      icon: "🛒", 
      title: "쇼핑몰 리뷰는 쌓이는데",
      description: "답변은 밀리고 방치"
    },
    {
      icon: "📑",
      title: "API 문서가 없어 데이터를 못 가져오는",
      description: "답답함"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">
            이런 시간 도둑 작업들, 지겹지 않으세요?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20">
            <p className="text-xl font-semibold text-foreground">
              👉 이 강의는 그런 시간 도둑 작업을 AI와 자동화로 날려버립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;