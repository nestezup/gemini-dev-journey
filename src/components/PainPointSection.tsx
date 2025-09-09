import { X } from "lucide-react";

const PainPointSection = () => {
  const painPoints = [
    "API 없는 사이트 데이터 추출의 어려움",
    "수작업 리뷰 답변의 시간 소모", 
    "복잡한 개발 환경 설정의 벽",
    "혼자선 막막한 자동화 구현",
    "실무에 바로 쓸 수 있는 앱 개발 스킬 부족"
  ];

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            이런 고민 있으셨죠?
          </h3>
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-destructive/20 text-destructive rounded-full p-2 mt-1">
                <X size={16} />
              </div>
              <p className="text-muted-foreground leading-relaxed break-keep">{point}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-muted/30 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">😵‍💫</div>
          <h4 className="text-xl font-semibold text-foreground mb-4">
            혼자선 너무 어려워요...
          </h4>
          <p className="text-muted-foreground leading-relaxed break-keep">
            개발 지식도 부족하고,<br />
            어디서부터 시작해야 할지 모르겠고,<br />
            실무에 바로 쓸 수 있는 스킬을 배우고 싶은데...
          </p>
        </div>
      </div>
    </div>
  );
};

export default PainPointSection;