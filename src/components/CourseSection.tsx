import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, TrendingUp, Zap } from "lucide-react";
import * as React from "react";

const CourseSection = () => {
  const levelIcons = {
    "입문": BookOpen,
    "심화": TrendingUp,
    "원데이 클래스": Zap
  };

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
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              강의 소개
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              실무에 바로 적용할 수 있는 데이터 자동화 개발 과정
            </p>
          </div>

          <div className="space-y-8">
            {courses.map((course, index) => (
              <Card key={course.id} className="group overflow-hidden bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                <div className="relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <CardHeader className="pb-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm ${levelColors[course.color as keyof typeof levelColors]}`}>
                              {levelIcons[course.level as keyof typeof levelIcons] && 
                                React.createElement(levelIcons[course.level as keyof typeof levelIcons], { size: 16 })
                              }
                              {course.level}
                            </span>
                          </div>
                          <CardTitle className="text-xl md:text-2xl font-bold leading-tight">
                            {course.title}
                          </CardTitle>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            ₩{course.price}
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed text-muted-foreground">
                        {course.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-6">
                      <div className="bg-muted/30 rounded-xl p-6 border border-border/20">
                        <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
                          <BookOpen size={18} className="text-primary" />
                          커리큘럼
                        </h4>
                        <div className="grid gap-3">
                          {course.curriculum.map((item, currIndex) => (
                            <div key={currIndex} className="flex items-start gap-4 p-3 rounded-lg hover:bg-background/50 transition-colors duration-200">
                              <div className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full text-xs font-medium flex items-center justify-center mt-0.5">
                                {currIndex + 1}
                              </div>
                              <span className="text-sm text-foreground leading-relaxed break-keep">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">성과물:</span>
                          <span className="font-semibold text-foreground">{course.outcome}</span>
                        </div>
                        <Button 
                          variant={course.buttonVariant as any} 
                          size="lg" 
                          className="w-full sm:w-auto min-w-[120px] shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          {course.id === "offline" ? "신청하기" : "수강하기"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;