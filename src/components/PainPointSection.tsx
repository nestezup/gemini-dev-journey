import { Database, Clock, Settings, HelpCircle, Code } from "lucide-react";

const PainPointSection = () => {
  const painPoints = [
    {
      icon: Database,
      text: "API 없는 사이트 데이터 추출의 어려움"
    },
    {
      icon: Clock,
      text: "수작업 리뷰 답변의 시간 소모"
    },
    {
      icon: Settings,
      text: "복잡한 개발 환경 설정의 벽"
    },
    {
      icon: HelpCircle,
      text: "혼자선 막막한 자동화 구현"
    },
    {
      icon: Code,
      text: "실무에 바로 쓸 수 있는 앱 개발 스킬 부족"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-black text-foreground mb-6 tracking-tight">
            이런 고민 있으셨죠?
          </h3>
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-destructive/20 text-destructive rounded-full p-2 flex-shrink-0">
                <point.icon size={16} />
              </div>
              <p className="text-muted-foreground leading-relaxed break-keep font-medium">{point.text}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-muted/30 rounded-2xl p-8 text-center">
          {/* Image placeholder for developer struggling with data */}
          <div className="w-full max-w-sm mx-auto mb-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl aspect-square flex items-center justify-center text-gray-500 text-sm font-medium">
            데이터 스크래핑에 막힌<br />개발자의 모습
          </div>
          <h4 className="text-xl font-bold text-foreground mb-4">
            혼자선 너무 어려워요...
          </h4>
          <p className="text-muted-foreground leading-relaxed break-keep font-light">
            개발 지식도 부족하고,<br />
            어디서부터 시작해야 할지 모르겠고,<br />
            <span className="font-medium">실무에 바로 쓸 수 있는 스킬을 배우고 싶은데...</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PainPointSection;