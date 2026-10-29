import React, { useState } from 'react';
import { NUNABACHHA_VIDEOS, VideoFeature } from '../data/conservationData';
import { NatureGraphic } from './NatureGraphics';
import { Play, ExternalLink, Youtube, BookOpen, Sparkles, X } from 'lucide-react';

interface NunabachhaSpotlightProps {
  onRequestScreening: () => void;
}

export function NunabachhaSpotlight({ onRequestScreening }: NunabachhaSpotlightProps) {
  const [activeVideo, setActiveVideo] = useState<VideoFeature | null>(null);

  return (
    <section id="nunabachha" className="py-16 lg:py-24 border-b border-[#E8E2D6] bg-gradient-to-b from-[#F2EDE2] to-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Curatorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#E8E2D6]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#DC2626] mb-2">
              <Youtube className="w-4 h-4 fill-[#DC2626]" />
              <span>Digital Youth Conservation Outreach</span>
              <span aria-hidden="true">·</span>
              <span>@nunabachha</span>
            </div>
            <h2 className="font-editorial text-3xl md:text-4xl font-medium text-[#1C1917] leading-tight">
              Inspiring the Next Generation Through Nature Storytelling
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#57534E] leading-relaxed">
              Before a child can protect a forest or clean a river, they must first fall in love with it. Through delightful 3D cartoons, songs, and adventures on <a href="https://www.youtube.com/@nunabachha" target="_blank" rel="noreferrer" className="text-[#DC2626] font-semibold underline underline-offset-2">@nunabachha</a>, we teach hundreds of thousands of young minds why every bird, bee, and seed matters.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://www.youtube.com/@nunabachha"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 text-xs md:text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-lg transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <Youtube className="w-4 h-4 fill-white" />
              <span>Visit @nunabachha on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onRequestScreening}
              className="px-4 py-2.5 text-xs md:text-sm font-medium text-[#1C1917] bg-[#FFFFFF] hover:bg-[#F2EDE2] border border-[#D6CEBE] rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#14532D]" />
              <span>Request Free School Pack</span>
            </button>
          </div>
        </div>

        {/* Channel Highlights Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-[#FFFFFF] border border-[#D6CEBE] shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#FEE2E2] text-[#DC2626] shrink-0">
              <Youtube className="w-5 h-5" />
            </div>
            <div>
              <div className="font-editorial text-xl font-bold text-[#1C1917] tabular-nums">250,000+</div>
              <div className="text-xs font-medium text-[#57534E] mt-0.5">Kids & families engaged across educational nature episodes</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#E8F0EA] text-[#14532D] shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="font-editorial text-xl font-bold text-[#1C1917] tabular-nums">65+ Episodes</div>
              <div className="text-xs font-medium text-[#57534E] mt-0.5">Focusing on river pollution, wildlife respect, and seedballs</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#FEF3C7] text-[#D97706] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-editorial text-xl font-bold text-[#1C1917] tabular-nums">100% Free Access</div>
              <div className="text-xs font-medium text-[#57534E] mt-0.5">Open curriculum for rural schools, teachers, and eco-clubs</div>
            </div>
          </div>
        </div>

        {/* Featured Video Episodes Showcase */}
        <div className="mt-10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#78716C] mb-4">
            Featured Nature Education Episodes
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NUNABACHHA_VIDEOS.map((vid) => (
              <div
                key={vid.id}
                className="group flex flex-col rounded-xl overflow-hidden border border-[#D6CEBE] bg-[#FFFFFF] hover:border-[#DC2626]/40 transition-all shadow-sm"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] bg-[#EAE4D8] overflow-hidden">
                  <NatureGraphic type={vid.thumbnailSvgType} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  
                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setActiveVideo(vid)}
                    className="absolute inset-0 bg-black/30 group-hover:bg-black/20 flex items-center justify-center transition-colors"
                    aria-label={`Play ${vid.title}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/95 text-[#DC2626] flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-[#DC2626] ml-0.5" />
                    </div>
                  </button>

                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[11px] font-mono text-white">
                    {vid.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-medium text-[#78716C]">
                      {vid.focus}
                    </div>
                    <h3 className="font-editorial text-base font-semibold text-[#1C1917] mt-1 leading-snug group-hover:text-[#DC2626] transition-colors">
                      {vid.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#57534E] leading-relaxed line-clamp-3">
                      {vid.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F2EDE2] flex items-center justify-between">
                    <button
                      onClick={() => setActiveVideo(vid)}
                      className="text-xs font-semibold text-[#DC2626] hover:underline inline-flex items-center gap-1"
                    >
                      <Play className="w-3.5 h-3.5 fill-[#DC2626]" />
                      <span>Preview Episode</span>
                    </button>

                    <a
                      href={vid.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#78716C] hover:text-[#1C1917] inline-flex items-center gap-1"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Preview */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#1C1917] text-[#FBF9F5] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2 text-xs text-[#D6CEBE]">
                <Youtube className="w-4 h-4 text-[#DC2626]" />
                <span className="font-semibold text-white">@nunabachha Nature Series</span>
                <span aria-hidden="true">·</span>
                <span>{activeVideo.duration}</span>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1 rounded text-white/70 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display */}
            <div className="relative aspect-video w-full bg-black flex flex-col items-center justify-center p-6 text-center">
              <div className="max-w-md space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#DC2626] text-white mx-auto flex items-center justify-center shadow-lg">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
                <h3 className="font-editorial text-xl font-medium text-white">
                  {activeVideo.title}
                </h3>
                <p className="text-xs text-[#D6CEBE] leading-relaxed">
                  {activeVideo.description}
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.youtube.com/@nunabachha"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-lg transition-colors shadow-sm"
                  >
                    <span>Watch Full Video on YouTube Channel</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Modal Bottom note */}
            <div className="p-4 bg-stone-900/90 text-xs text-[#A8A29E] flex items-center justify-between">
              <span>Channel: https://www.youtube.com/@nunabachha</span>
              <span>Educational Creative Commons</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
