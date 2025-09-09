import automationWorkflow from "@/assets/automation-workflow.jpg";

const SolutionSection = () => {
  const solutions = [
    "API 없어도 데이터 추출 가능",
    "Gemini AI로 자동 댓글 생성", 
    "내가 만든 앱, 실무에 바로 적용",
    "온라인 + 오프라인으로 학습·실습 보완",
    "끝까지 함께하는 강사 피드백"
  ];

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src={automationWorkflow} 
            alt="데이터 → AI → 앱 자동화 플로우"
            className="w-full rounded-2xl shadow-medium"
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-black text-foreground mb-6 tracking-tight">
            <span className="text-pointer">해결과</span> 가치
          </h3>
          {solutions.map((solution, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full p-2 mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <p className="text-muted-foreground leading-relaxed break-keep">{solution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;