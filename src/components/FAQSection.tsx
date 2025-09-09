import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "저는 프로그래밍을 거의 못하는데, 들어도 될까요?",
      answer: "네. \"개발자 도구 + 복붙\"부터 시작합니다. 예제 코드가 단계별로 제공돼 쉽게 따라옵니다."
    },
    {
      question: "온라인 강의는 실시간인가요, 녹화인가요?", 
      answer: "실시간 진행 + 녹화(VOD) 제공. 언제든 복습 가능합니다."
    },
    {
      question: "오프라인 수업에 가면 온라인 강의도 포함되나요?",
      answer: "네. 오프라인 참가자는 온라인1+2 VOD 모두 포함됩니다."
    },
    {
      question: "온라인1과 온라인2는 어떤 차이가 있나요?",
      answer: "온라인1 = 입문 (뉴스/블로그/부동산 데이터 스크래핑)\n온라인2 = 심화 (네이버 리뷰 자동화, AI 답변)"
    },
    {
      question: "회사 업무에도 활용할 수 있나요?",
      answer: "네. 반복적인 보고서, 리뷰 관리, 데이터 수집 자동화에 바로 적용 가능합니다."
    },
    {
      question: "강의 듣다가 모르는 게 있으면 질문할 수 있나요?",
      answer: "온라인: 게시판/이메일로 Q&A 제공\n오프라인: 현장 1:1 피드백"
    },
    {
      question: "환불 정책은 어떻게 되나요?",
      answer: "온라인: 시작 전 전액 환불 / 진행 후 부분 환불\n오프라인: 수업 3일 전까지 전액 환불, 이후 환불 불가"
    },
    {
      question: "준비물은 무엇인가요?",
      answer: "개인 노트북(윈도우/맥 모두 가능), 크롬 브라우저"
    },
    {
      question: "오프라인 클래스 정원은 몇 명인가요?",
      answer: "15명 소수 정예, 질문과 실습에 충분히 대응 가능"
    },
    {
      question: "중복 결제가 되나요?",
      answer: "아니요. 업그레이드 시 차액만 지불. 최대 지불 상한선은 ₩590,000입니다."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            자주 묻는 질문
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border/50 shadow-soft"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">
                    Q{index + 1}. {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <div className="text-muted-foreground whitespace-pre-line">
                      👉 {faq.answer}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;