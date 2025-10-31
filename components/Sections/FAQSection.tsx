"use client";

import { useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "What is SafetyVoiceAI?",
    answer:
      "SafetyVoiceAI is an AI-powered voice platform designed to make health, safety, and environmental (HSE) reporting faster, easier, and more reliable. It allows field workers and managers to capture incidents, hazards, and observations using voice commands, photos, and real-time AI guidance—improving compliance and safety outcomes.",
  },
  {
    id: "item-2",
    question: "Who is SafetyVoiceAI for?",
    answer:
      "Our platform is built for HSE officers, site operators, engineers, supervisors, directors, and compliance teams working in high-risk industries such as energy, construction, and manufacturing.",
  },
  {
    id: "item-3",
    question: "How does SafetyVoiceAI work?",
    answer:
      "Users simply record an incident or safety observation by speaking or uploading media. The AI model transcribes, categorizes, and generates structured reports in real time. Reports can be exported, shared with supervisors, and integrated into existing HSE workflows.",
  },
  {
    id: "item-4",
    question: "What makes SafetyVoiceAI different from other safety tools?",
    answer:
      "Unlike traditional reporting systems that rely on manual entry, SafetyVoiceAI uses voice recognition and AI classification to speed up reporting in the field even in noisy, hazardous environments. It ensures accuracy, provides actionable safety suggestions, and reduces reporting delays.",
  },
  {
    id: "item-5",
    question: "What languages are supported?",
    answer:
      "Currently, SafetyVoiceAI supports English, French, and Arabic, with plans to expand based on customer needs.",
  },
  {
    id: "item-6",
    question: "Is SafetyVoiceAI reliable in harsh environments?",
    answer:
      "Yes. The platform is optimized for use in industrial and outdoor settings, supporting offline mode and syncing when connectivity is restored.",
  },
  {
    id: "item-7",
    question: "Can the AI be trusted to make decisions?",
    answer:
      "The AI provides guidance and categorization, but users always have the ability to confirm, edit, or override AI suggestions. This ensures accuracy, accountability, and user control.",
  },
  {
    id: "item-8",
    question: "What kinds of reports can be generated?",
    answer:
      "SafetyVoiceAI produces structured incident reports, hazard observations, and corrective action recommendations. Reports are automatically formatted for compliance and can be exported as Excel, PDF, or integrated into existing enterprise systems.",
  },
  {
    id: "item-9",
    question: "Is my data secure?",
    answer:
      "Yes. SafetyVoiceAI follows strict security and compliance standards, including GDPR. All data is encrypted, version-controlled, and traceable without storing personal identifiers during model inference.",
  },
  {
    id: "item-10",
    question: "How much does SafetyVoiceAI cost?",
    answer:
      "Pricing depends on company size, user roles, and deployment needs. We offer flexible plans designed for small teams, mid-sized operations, and enterprise clients. Contact us for a tailored quote.",
  },
  {
    id: "item-11",
    question: "Can I try SafetyVoiceAI before purchasing?",
    answer:
      "Yes. We offer beta testing and pilot programs for qualified industry partners to validate the platform in real-world conditions before committing to full deployment.",
  },
];

// Helper to chunk FAQs into groups of 4
function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export function FAQSection() {
  const slides = useMemo(() => chunk(faqs, 4), []);

  return (
    <section className="py-10 lg:py-24 bg-background">
      <div className="mx-auto 2xl:max-w-[74%] max-w-[95%] px-4">
        <h2 className="text-sec-h1 font-bold text-center mb-8">FAQs</h2>

        <div className="relative">
          <Carousel className="w-full" opts={{ align: "start", loop: false }}>
            <CarouselContent>
              {slides.map((group, idx) => (
                <CarouselItem key={idx}>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-2 lg:space-y-4"
                  >
                    {group.map((faq) => (
                      <AccordionItem
                        key={faq.id}
                        value={faq.id}
                        className="rounded-lg border border-gray-200 px-5 lg:px-10 py-1 lg:py-4 data-[state=open]:bg-[#E7EFFD] transition-colors duration-300"
                      >
                        <AccordionTrigger className="text-lg font-semibold text-[8px] lg:text-[30px] hover:no-underline text-gray-800 data-[state=open]:text-primary transition-colors duration-300">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="lg:pb-4 pt-0 lg:pt-3 lg:text-[24px] text-[8px]">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className="-left-4 lg:-left-12"
              aria-label="Previous FAQs"
            />
            <CarouselNext
              className="-right-4 lg:-right-12"
              aria-label="Next FAQs"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
