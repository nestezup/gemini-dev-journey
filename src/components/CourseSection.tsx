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
        "환경 세팅 점검",
        "온라인1 핵심 실습",
        "온라인2 핵심 실습",
        "Gemini API 연동",
        "리뷰 관리 앱 고도화",
        "앱 소스코드 제공 & Q&A"
      ],
      outcome: "실무 앱 + 소스코드 + 1:1 코칭",
      price: "590,000",
      buttonVariant: "premium"
    }
  ];

  const levelColors = {
    primary: "bg-primary/10 text-primary border-primary/20",
    accent: "bg-primary/10 text-primary border-primary/20"
  };

  return (
    <section id="curriculum" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground tracking-tight">
              강의 소개
            </h2>
            <p className="text-muted-foreground text-sm font-light">
              실무에 바로 적용할 수 있는 데이터 자동화 개발 과정
            </p>
          </div>

          <div className="space-y-6">
            {courses.map((course, index) => (
              <Card 
                key={course.id} 
                className="group bg-card border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${levelColors[course.color as keyof typeof levelColors]} bg-opacity-20 border-0`}>
                            {levelIcons[course.level as keyof typeof levelIcons] && 
                              React.createElement(levelIcons[course.level as keyof typeof levelIcons], { size: 14 })
                            }
                            {course.level}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2 leading-tight break-keep tracking-tight">
                            {course.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed break-keep font-light">
                            {course.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-foreground tracking-tight">
                          ₩{course.price}
                        </div>
                      </div>
                    </div>

                    {/* Curriculum */}
                    <div className="bg-muted/30 rounded-2xl p-6">
                      <h4 className="font-bold mb-4 text-foreground text-sm flex items-center gap-2 tracking-wide">
                        <BookOpen size={16} className="text-muted-foreground" />
                        커리큘럼
                      </h4>
                      <div className="space-y-3">
                        {course.curriculum.map((item, currIndex) => (
                          <div key={currIndex} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-primary/10 text-primary rounded-full text-xs font-medium flex items-center justify-center mt-0.5">
                              {currIndex + 1}
                            </div>
                             <span className="text-base text-muted-foreground leading-relaxed break-keep">
                               {item}
                             </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-pointer rounded-full"></div>
                        <span className="text-xs text-muted-foreground font-light">성과물:</span>
                        <span className="font-bold text-foreground text-sm">{course.outcome}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant={course.buttonVariant as any} 
                          className="rounded-full px-6 py-2 text-sm font-medium shadow-sm"
                        >
                          {course.id === "offline" ? "신청하기" : "수강하기"}
                        </Button>
                      </div>
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