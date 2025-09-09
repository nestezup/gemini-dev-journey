import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const onlinePlans = [
    {
      id: "online1",
      title: "온라인1",
      price: "159,000",
      originalPrice: null,
      features: [
        "API 없는 사이트 데이터 추출",
        "뉴스/블로그/부동산 스크래핑", 
        "Electron 앱 UI 제작",
        "Gemini API 코멘트 생성"
      ],
      buttonVariant: "course",
      buttonText: "수강하기"
    },
    {
      id: "online2", 
      title: "온라인2",
      price: "179,000",
      originalPrice: null,
      features: [
        "네이버 리뷰 요청 추적 & 쿠키 인증",
        "리뷰 관리 앱 직접 제작",
        "AI 맞춤형 답변 자동화",
        "리뷰 일괄 처리 기능 구현"
      ],
      buttonVariant: "course",
      buttonText: "수강하기"
    },
    {
      id: "package",
      title: "패키지 (온라인1+2)",
      price: "259,000", 
      originalPrice: "299,000",
      discount: "15% 할인",
      features: [
        "온라인1 + 온라인2 모든 내용",
        "완전한 자동화 개발 과정",
        "두 앱 모두 완성", 
        "종합적인 실무 경험"
      ],
      buttonVariant: "hero",
      buttonText: "패키지 신청",
      popular: true
    }
  ];

  const offlinePlan = {
    id: "offline",
    title: "오프라인 원데이",
    price: "590,000",
    originalPrice: null,
    features: [
      "온라인1+2 VOD 포함",
      "6시간 몰입 실습",
      "완성 앱 소스코드 제공",
      "1:1 피드백 케어"
    ],
    buttonVariant: "premium", 
    buttonText: "신청하기"
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            가격 안내
          </h2>

          {/* 온라인 강의 섹션 */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
              온라인 강의
            </h3>
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {onlinePlans.map((plan) => (
                <Card key={plan.id} className={`relative shadow-medium hover:shadow-strong transition-all duration-300 flex flex-col h-full ${plan.popular ? 'border-primary shadow-primary/20 scale-105' : 'border-border/50'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        인기
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg mb-2">{plan.title}</CardTitle>
                    <div className="space-y-1 h-20 flex flex-col justify-center">
                      {plan.originalPrice ? (
                        <>
                          <div className="text-sm text-muted-foreground line-through">
                            ₩{plan.originalPrice}
                          </div>
                          <div className="text-2xl font-bold text-foreground">
                            ₩{plan.price}
                          </div>
                          <div className="text-sm text-primary font-semibold">
                            {plan.discount}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-sm invisible">
                            ₩000,000
                          </div>
                          <div className="text-2xl font-bold text-foreground">
                            ₩{plan.price}
                          </div>
                          <div className="text-sm invisible">
                            할인 정보
                          </div>
                        </>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <ul className="space-y-3 flex-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-primary text-primary-foreground rounded-full p-1 mt-1 flex-shrink-0">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                          </div>
                          <span className="text-sm text-muted-foreground leading-relaxed break-keep">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <Button 
                        variant={plan.buttonVariant as any} 
                        className="w-full mt-6"
                        size="lg"
                      >
                        {plan.buttonText}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 오프라인 강의 섹션 */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
              오프라인 강의
            </h3>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <Card className="relative shadow-medium hover:shadow-strong transition-all duration-300 border-primary shadow-primary/20">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg mb-2">{offlinePlan.title}</CardTitle>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-foreground">
                        ₩{offlinePlan.price}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {offlinePlan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-primary text-primary-foreground rounded-full p-1 mt-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                          </div>
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={offlinePlan.buttonVariant as any} 
                      className="w-full mt-6"
                      size="lg"
                    >
                      {offlinePlan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;