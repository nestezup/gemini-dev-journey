import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CourseSection = () => {
  const courses = [
    {
      id: "online1",
      title: "웹 데이터 스크래핑 & Electron 앱 개발",
      level: "입문",
      color: "primary",
      description: "API 문서 없는 사이트에서도 데이터를 가져오고, 뉴스·블로그·부동산 데이터를 스크래핑해 앱으로 구현하는 과정.",
      curriculum: [
        "개발 환경 세팅 (VSCode, Node.js, GitHub, Electron)",
        "웹 스크래핑 기초 (cURL, Postman, DevTools)", 
        "뉴스 요약 AI 앱 만들기 (빅카인즈 → Gemini API)",
        "데이터 헌터 되기 (블로그, 뉴스, 부동산, 리뷰 분석)"
      ],
      outcome: "뉴스 요약 AI 앱",
      price: "159,000",
      buttonVariant: "course"
    },
    {
      id: "online2", 
      title: "네이버 리뷰 자동 답변 앱 제작",
      level: "심화",
      color: "accent",
      description: "네이버 스마트스토어 리뷰를 불러와 AI가 자동으로 답변까지 등록하는 실무형 앱 제작.",
      curriculum: [
        "리뷰 요청 추적 & 쿠키 인증 이해",
        "리뷰 관리 앱 구현 (불러오기 + 댓글 등록)",
        "Gemini AI 맞춤형 답변 생성", 
        "리뷰 일괄 처리 기능 구현"
      ],
      outcome: "리뷰 자동화 앱",
      price: "179,000",
      buttonVariant: "course"
    },
    {
      id: "offline",
      title: "프라임 실습반: 앱 완성과 소스코드까지",
      level: "원데이 클래스",
      color: "primary",
      description: "온라인1+2 핵심 요약 + 심화 실습, 하루 만에 앱 완성과 소스코드 제공.",
      curriculum: [
        "12:00 ~ 12:30: 환경 세팅 점검",
        "12:30 ~ 14:00: 온라인1 핵심 실습",
        "14:00 ~ 15:30: 온라인2 핵심 실습",
        "15:30 ~ 16:30: Gemini API 연동",
        "16:30 ~ 17:30: 리뷰 관리 앱 고도화",
        "17:30 ~ 18:00: 앱 소스코드 제공 & Q&A"
      ],
      outcome: "실무 앱 + 소스코드 + 1:1 코칭",
      price: "590,000",
      buttonVariant: "premium"
    }
  ];

  const levelColors = {
    primary: "bg-primary/10 text-primary border-primary/20",
    accent: "bg-accent/10 text-accent border-accent/20"
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            강의 소개
          </h2>

          <div className="grid lg:grid-cols-1 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="shadow-medium hover:shadow-strong transition-all duration-300 border border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${levelColors[course.color as keyof typeof levelColors]}`}>
                        {course.level}
                      </span>
                      <CardTitle className="text-xl md:text-2xl">{course.title}</CardTitle>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">₩{course.price}</div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed mt-4">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">커리큘럼</h4>
                      <ul className="space-y-2">
                        {course.curriculum.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="bg-primary/20 text-primary rounded-full text-xs px-2 py-1 mt-1">
                              {index + 1}
                            </span>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-border">
                      <div>
                        <span className="text-sm text-muted-foreground">성과물: </span>
                        <span className="font-semibold text-foreground">{course.outcome}</span>
                      </div>
                      <Button variant={course.buttonVariant as any} size="lg" className="w-full sm:w-auto">
                        {course.id === "offline" ? "신청하기" : "수강하기"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;