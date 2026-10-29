import React, { useState } from 'react';
import { FAQS } from '../data/conservationData';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 lg:py-24 border-b border-[#E8E2D6] bg-[#F7F4EE]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#9A3412] mb-2">
            Questions & Answers
          </div>
          <h2 className="font-editorial text-3xl md:text-4xl font-medium text-[#1C1917] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-xs md:text-sm text-[#57534E]">
            Learn more about our methodology, the educational mission of @nunabachha, and how community partnerships function.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#FFFFFF] border border-[#D6CEBE] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 text-sm font-semibold text-[#1C1917] hover:text-[#14532D] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#78716C] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#14532D]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-[#57534E] leading-relaxed border-t border-[#F2EDE2]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
