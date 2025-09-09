import solutionFlow from "@/assets/solution-flow.jpg";

const SolutionSection = () => {
  const solutions = [
    "API 없어도 데이터 추출 가능",
    "Gemini AI로 자동 댓글 생성", 
    "내가 만든 앱, 실무에 바로 적용",
    "온라인 + 오프라인으로 학습·실습 보완",
    "끝까지 함께하는 강사 피드백"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            해결과 가치
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={solutionFlow} 
                alt="데이터 → AI → 앱 자동화 플로우"
                className="w-full rounded-2xl shadow-medium"
              />
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-2 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <p className="text-lg text-foreground font-medium">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;