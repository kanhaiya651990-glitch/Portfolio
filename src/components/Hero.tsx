import React from 'react';
import { NatureGraphic } from './NatureGraphics';
import { ArrowDown, Mail, Play, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onExploreEfforts: () => void;
}

export function Hero({ onOpenContact, onExploreEfforts }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-[#E8E2D6] bg-gradient-to-b from-[#FBF9F5] via-[#F7F4EE] to-[#F2EDE2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Curatorial Header Decker */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#78716C] mb-4">
          <span>Grassroots Ecological Action</span>
          <span aria-hidden="true">·</span>
          <span>Himalayan Watersheds & Foothills</span>
          <span aria-hidden="true">·</span>
          <span>Curated by Kanhaiya</span>
        </div>

        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Mission, Vision, and Direct Action CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917] leading-[1.15] text-balance">
                Restoring Living Canopies, Reviving Clean Rivers & Inspiring Youth Nature Literacy
              </h1>

              <p className="mt-6 text-base lg:text-lg text-[#44403C] leading-relaxed max-w-2xl">
                A community-rooted conservation network restoring indigenous forests, preventing plastic runoff in mountain streams, establishing safe wildlife corridors, and cultivating the next generation of eco-stewards through digital storytelling on <strong className="text-[#14532D] font-semibold">@nunabachha</strong>.
              </p>

              {/* Direct Touchpoints info bar */}
              <div className="mt-6 pt-6 border-t border-[#E8E2D6] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#57534E]">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#1C1917]">Contact Leader:</span>
                  <a
                    href="mailto:Kanhaiya65190000@gmail.com"
                    className="font-mono text-[#14532D] hover:underline"
                  >
                    Kanhaiya65190000@gmail.com
                  </a>
                </div>
                <span aria-hidden="true" className="text-[#D6CEBE]">·</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#1C1917]">Digital Outreach:</span>
                  <a
                    href="https://www.youtube.com/@nunabachha"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#DC2626] hover:underline inline-flex items-center gap-1"
                  >
                    youtube.com/@nunabachha
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreEfforts}
                className="px-6 py-3 text-sm font-semibold text-[#FBF9F5] bg-[#14532D] rounded-lg hover:bg-[#0F3D21] active:scale-[0.98] transition-all inline-flex items-center gap-2 shadow-sm"
              >
                <span>Explore Recent Conservation Efforts</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href="#nunabachha"
                className="px-5 py-3 text-sm font-medium text-[#14532D] bg-[#E8F0EA] border border-[#C5DDCB] rounded-lg hover:bg-[#D9E9DE] transition-all inline-flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-[#14532D]" />
                <span>Watch @nunabachha Stories</span>
              </a>

              <button
                onClick={onOpenContact}
                className="px-5 py-3 text-sm font-medium text-[#44403C] hover:text-[#1C1917] hover:bg-[#EAE4D8] border border-[#D6CEBE] rounded-lg transition-all inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#78716C]" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full rounded-2xl overflow-hidden border border-[#D6CEBE] bg-[#FFFFFF] shadow-sm flex flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE4D8]">
                <NatureGraphic type="reforestation" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-3 right-3 bg-[#1C1917]/85 backdrop-blur-sm text-[#FBF9F5] px-3.5 py-2 rounded-lg text-xs flex items-center justify-between">
                  <span>Sub-Himalayan Slope Restoration</span>
                  <span className="font-mono text-[#86EFAC] tabular-nums">148,500+ Saplings</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#9A3412] mb-1">
                    Featured Drive Focus
                  </div>
                  <h3 className="font-editorial text-lg font-semibold text-[#1C1917]">
                    Indigenous Banj Oak & Sal Regeneration
                  </h3>
                  <p className="mt-2 text-xs lg:text-sm text-[#57534E] leading-relaxed">
                    By phasing out water-draining monocultures in favor of broadleaf native trees, we protect natural aquifers and create permanent avian and pollinator habitats.
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#F2EDE2] flex items-center justify-between text-xs text-[#78716C]">
                  <span>Van Panchayat Partnership</span>
                  <span className="font-mono tabular-nums text-[#14532D] font-semibold">88% Survival Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Quantitative Adjacency Strip */}
        <div className="mt-14 pt-10 border-t border-[#E8E2D6] grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="font-editorial text-3xl lg:text-4xl font-semibold text-[#14532D] tabular-nums">
              148,500+
            </div>
            <div className="text-sm font-semibold text-[#1C1917] mt-1">Native Trees Planted</div>
            <div className="text-xs text-[#78716C] mt-0.5">88% audited 2-year survival rate</div>
          </div>

          <div>
            <div className="font-editorial text-3xl lg:text-4xl font-semibold text-[#0369A1] tabular-nums">
              34.6 t
            </div>
            <div className="text-sm font-semibold text-[#1C1917] mt-1">River Waste Intercepted</div>
            <div className="text-xs text-[#78716C] mt-0.5">Along 18.4 km protected riparian shores</div>
          </div>

          <div>
            <div className="font-editorial text-3xl lg:text-4xl font-semibold text-[#9A3412] tabular-nums">
              250,000+
            </div>
            <div className="text-sm font-semibold text-[#1C1917] mt-1">Children Reached</div>
            <div className="text-xs text-[#78716C] mt-0.5">Via @nunabachha nature storytelling</div>
          </div>

          <div>
            <div className="font-editorial text-3xl lg:text-4xl font-semibold text-[#15803D] tabular-nums">
              500,000+
            </div>
            <div className="text-sm font-semibold text-[#1C1917] mt-1">Seedballs Dispersed</div>
            <div className="text-xs text-[#78716C] mt-0.5">Preserving 82 indigenous plant species</div>
          </div>
        </div>
      </div>
    </section>
  );
}
