import React from 'react';
import { ConservationInitiative } from '../data/conservationData';
import { NatureGraphic } from './NatureGraphics';
import { X, CheckCircle, MapPin, Calendar, Users, ExternalLink, ArrowRight } from 'lucide-react';

interface InitiativeModalProps {
  initiative: ConservationInitiative | null;
  onClose: () => void;
  onTakeAction: (initiative: ConservationInitiative) => void;
}

export function InitiativeModal({ initiative, onClose, onTakeAction }: InitiativeModalProps) {
  if (!initiative) return null;

  const graphicType = 
    initiative.category === 'Reforestation' ? 'reforestation' :
    initiative.category === 'Waterways' ? 'waterways' :
    initiative.category === 'Biodiversity' ? 'biodiversity' :
    initiative.category === 'Wildlife' ? 'wildlife' :
    initiative.category === 'Youth Education' ? 'education' : 'seeds';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-initiative-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
    >
      <div 
        className="relative w-full max-w-4xl bg-[#FBF9F5] rounded-2xl border border-[#D6CEBE] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E2D6] bg-[#F7F4EE] sticky top-0 z-10">
          <div className="flex items-center gap-2 text-xs font-medium text-[#78716C]">
            <span className="text-[#14532D] font-semibold">{initiative.category}</span>
            <span aria-hidden="true">·</span>
            <span>{initiative.status}</span>
            <span aria-hidden="true">·</span>
            <span>{initiative.yearActive}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-[#78716C] hover:text-[#1C1917] hover:bg-[#EAE4D8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Header & Visual */}
          <div className="space-y-4">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#9A3412]">
              {initiative.kicker}
            </div>
            <h2 id="modal-initiative-title" className="font-editorial text-2xl md:text-3xl font-medium text-[#1C1917] leading-snug">
              {initiative.title}
            </h2>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#57534E] pt-2 border-t border-[#E8E2D6]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#14532D]" />
                <span>{initiative.region}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#14532D]" />
                <span>Timeline: {initiative.yearActive}</span>
              </div>
            </div>

            {/* Banner graphic */}
            <div className="w-full aspect-[21/9] rounded-xl overflow-hidden border border-[#D6CEBE] bg-[#EAE4D8] mt-4">
              <NatureGraphic type={graphicType} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Key Quantitative Outcomes Grid */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#78716C] mb-3">
              Verified Environmental Metrics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {initiative.keyOutcomes.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F4EFE6] border border-[#E0D8CA]">
                  <div className="font-editorial text-2xl lg:text-3xl font-bold text-[#14532D] tabular-nums">
                    {item.metric}
                  </div>
                  <div className="text-xs font-semibold text-[#1C1917] mt-1">{item.label}</div>
                  <div className="text-[11px] text-[#78716C] mt-0.5">{item.subtext}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
              Background & Ecological Rationale
            </h3>
            <p className="text-sm md:text-base text-[#44403C] leading-relaxed">
              {initiative.fullNarrative}
            </p>
          </div>

          {/* Ecological Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
              Scientific & Ecological Highlights
            </h3>
            <ul className="space-y-2">
              {initiative.ecologicalHighlights.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#44403C]">
                  <CheckCircle className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Field Methods */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
              Grassroots Methodology & Implementation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {initiative.fieldMethods.map((method, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-[#FFFFFF] border border-[#E8E2D6] text-xs text-[#57534E] leading-relaxed">
                  <span className="font-semibold text-[#1C1917] block mb-1">Phase 0{idx + 1}</span>
                  {method}
                </div>
              ))}
            </div>
          </div>

          {/* Community Partners */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
              Participating Stakeholders & Youth Allies
            </h3>
            <div className="flex flex-wrap gap-2">
              {initiative.partnerCommunities.map((partner, idx) => (
                <span
                  key={idx}
                  className="text-xs text-[#44403C] bg-[#EFE9DC] px-3 py-1.5 rounded-md border border-[#D6CEBE]"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Action Trigger */}
        <div className="p-6 border-t border-[#E8E2D6] bg-[#F7F4EE] flex flex-wrap items-center justify-between gap-4 sticky bottom-0">
          <div className="text-xs text-[#57534E] max-w-md">
            <strong className="text-[#1C1917]">Opportunity:</strong> {initiative.actionOpportunity}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#57534E] hover:text-[#1C1917] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onTakeAction(initiative);
              }}
              className="px-5 py-2.5 text-xs font-semibold text-[#FBF9F5] bg-[#14532D] rounded-lg hover:bg-[#0F3D21] transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <span>Join or Support This Initiative</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
