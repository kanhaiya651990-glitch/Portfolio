import React from 'react';
import { GET_INVOLVED_WAYS, SPONSORSHIP_TIERS } from '../data/conservationData';
import { Users, School, HeartHandshake, Eye, ArrowRight, Check } from 'lucide-react';

interface GetInvolvedSectionProps {
  onOpenActionModal: (actionType: string) => void;
}

export function GetInvolvedSection({ onOpenActionModal }: GetInvolvedSectionProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'volunteer':
        return <Users className="w-5 h-5 text-[#14532D]" />;
      case 'school-partner':
        return <School className="w-5 h-5 text-[#9A3412]" />;
      case 'sponsor':
        return <HeartHandshake className="w-5 h-5 text-[#0369A1]" />;
      case 'report-area':
      default:
        return <Eye className="w-5 h-5 text-[#78350F]" />;
    }
  };

  return (
    <section id="get-involved" className="py-16 lg:py-24 border-b border-[#E8E2D6] bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#9A3412] mb-2">
            Action Pathways & Public Engagement
          </div>
          <h2 className="font-editorial text-3xl md:text-4xl font-medium text-[#1C1917] leading-tight">
            How You Can Get Involved Today
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#57534E] leading-relaxed">
            Conservation is not a distant institutional responsibility—it flourishes when individuals, schools, and communities step in. Choose your path to join our field teams, support grassroots supplies, or spread environmental literacy.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GET_INVOLVED_WAYS.map((way) => (
            <div
              key={way.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#FFFFFF] border border-[#D6CEBE] shadow-xs hover:border-[#14532D]/40 transition-colors"
            >
              <div>
                <div className="p-2.5 rounded-lg bg-[#F4EFE6] inline-block mb-4">
                  {getIcon(way.id)}
                </div>

                <div className="text-[11px] font-semibold text-[#9A3412] uppercase tracking-wider mb-1">
                  {way.kicker}
                </div>

                <h3 className="font-editorial text-xl font-semibold text-[#1C1917] leading-snug">
                  {way.title}
                </h3>

                <p className="mt-3 text-xs text-[#57534E] leading-relaxed">
                  {way.summary}
                </p>

                <div className="mt-4 pt-4 border-t border-[#F2EDE2] space-y-1.5 text-xs text-[#78716C]">
                  <div><strong className="text-[#1C1917]">Time:</strong> {way.timeCommitment}</div>
                  <div><strong className="text-[#1C1917]">For:</strong> {way.suitableFor}</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2EDE2]">
                <button
                  onClick={() => onOpenActionModal(way.id)}
                  className="w-full py-2.5 px-3 text-xs font-semibold text-[#14532D] bg-[#E8F0EA] hover:bg-[#D9E9DE] rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>{way.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Conservation Sponsorship Tiers Callout */}
        <div className="mt-16 pt-12 border-t border-[#E8E2D6]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-[#14532D] mb-1">
                Material Sponsorship
              </div>
              <h3 className="font-editorial text-2xl md:text-3xl font-medium text-[#1C1917]">
                Equip Frontline Volunteer Brigades
              </h3>
            </div>
            <p className="text-xs text-[#57534E] max-w-md">
              100% of material sponsorships go directly towards physical equipment, sapling guards, and classroom kits with transparent community audit logs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPONSORSHIP_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#FFFFFF] border border-[#D6CEBE] flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-semibold uppercase text-[#78716C]">
                    Tier 0{idx + 1}
                  </div>
                  <h4 className="font-editorial text-lg font-bold text-[#1C1917] mt-1">
                    {tier.name}
                  </h4>
                  <div className="font-editorial text-2xl font-bold text-[#14532D] mt-2 tabular-nums">
                    {tier.amount}
                  </div>
                  <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
                    {tier.impact}
                  </p>

                  <ul className="mt-4 pt-3 border-t border-[#F2EDE2] space-y-1.5">
                    {tier.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#44403C]">
                        <Check className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3">
                  <button
                    onClick={() => onOpenActionModal(`sponsor-${tier.name}`)}
                    className="w-full py-2 text-xs font-semibold text-[#1C1917] bg-[#F4EFE6] hover:bg-[#EAE4D8] rounded-md transition-colors"
                  >
                    Sponsor This Tier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
