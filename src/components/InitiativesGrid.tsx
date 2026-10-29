import React, { useState, useMemo } from 'react';
import { ConservationInitiative, CONSERVATION_INITIATIVES } from '../data/conservationData';
import { NatureGraphic } from './NatureGraphics';
import { Search, ArrowRight, MapPin, Sparkles, Filter } from 'lucide-react';

interface InitiativesGridProps {
  onSelectInitiative: (initiative: ConservationInitiative) => void;
  onTakeAction: (initiative: ConservationInitiative) => void;
}

export function InitiativesGrid({ onSelectInitiative, onTakeAction }: InitiativesGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Reforestation', 'Waterways', 'Biodiversity', 'Wildlife', 'Youth Education'];

  const filteredInitiatives = useMemo(() => {
    return CONSERVATION_INITIATIVES.filter((init) => {
      const matchesCategory = selectedCategory === 'All' || init.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        init.title.toLowerCase().includes(q) ||
        init.summary.toLowerCase().includes(q) ||
        init.region.toLowerCase().includes(q) ||
        init.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="efforts" className="py-16 lg:py-24 border-b border-[#E8E2D6] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E8E2D6]">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#9A3412] mb-2">
              Recent Field Campaigns & Ecological Interventions
            </div>
            <h2 className="font-editorial text-3xl md:text-4xl font-medium text-[#1C1917] leading-tight">
              Frontline Conservation Initiatives in Action
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#57534E] leading-relaxed">
              Explore documented conservation outcomes across mountain watersheds, river basins, native seed sanctuaries, and youth education corridors.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#78716C]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search initiatives, trees, rivers..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#FFFFFF] border border-[#D6CEBE] rounded-lg text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-1 focus:ring-[#14532D] focus:border-[#14532D]"
            />
          </div>
        </div>

        {/* Interactive Filter Tabs (Segmented Control per Section 1.A) */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#14532D] text-[#FBF9F5] shadow-sm'
                  : 'bg-[#F2EDE2] text-[#44403C] hover:bg-[#EAE4D8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Initiatives Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInitiatives.map((item) => {
            const graphicType =
              item.category === 'Reforestation' ? 'reforestation' :
              item.category === 'Waterways' ? 'waterways' :
              item.category === 'Biodiversity' ? (item.id.includes('seed') ? 'seeds' : 'biodiversity') :
              item.category === 'Wildlife' ? 'wildlife' : 'education';

            return (
              <div
                key={item.id}
                className="group flex flex-col rounded-2xl overflow-hidden border border-[#D6CEBE] bg-[#FFFFFF] hover:border-[#14532D]/40 transition-all duration-200 shadow-sm"
              >
                {/* Visual Header */}
                <div className="relative aspect-[16/10] w-full bg-[#EAE4D8] overflow-hidden">
                  <NatureGraphic type={graphicType} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
                  
                  {/* Overlay Bottom Ribbon */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#1C1917]/85 backdrop-blur-sm text-[#FBF9F5] px-3 py-1.5 rounded-md text-[11px] flex items-center justify-between">
                    <span className="truncate">{item.region}</span>
                    <span className="font-mono text-[#86EFAC] shrink-0 font-medium ml-2">
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Card Content (Zero-Pill: Clean unboxed metadata with typographic separators) */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#78716C] mb-2 font-medium">
                      <span className="text-[#14532D] font-semibold">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.yearActive}</span>
                    </div>

                    <h3 className="font-editorial text-xl font-medium text-[#1C1917] leading-snug group-hover:text-[#14532D] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs lg:text-sm text-[#57534E] leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>

                    {/* Key Metrics Strip */}
                    <div className="mt-4 pt-4 border-t border-[#F2EDE2] grid grid-cols-2 gap-3">
                      <div>
                        <div className="font-editorial text-lg font-bold text-[#14532D] tabular-nums">
                          {item.keyOutcomes[0]?.metric}
                        </div>
                        <div className="text-[11px] text-[#78716C] truncate">
                          {item.keyOutcomes[0]?.label}
                        </div>
                      </div>
                      <div>
                        <div className="font-editorial text-lg font-bold text-[#0369A1] tabular-nums">
                          {item.keyOutcomes[1]?.metric}
                        </div>
                        <div className="text-[11px] text-[#78716C] truncate">
                          {item.keyOutcomes[1]?.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-[#F2EDE2] flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectInitiative(item)}
                      className="text-xs font-semibold text-[#14532D] hover:text-[#0F3D21] transition-colors inline-flex items-center gap-1.5 py-1.5"
                    >
                      <span>Read Full Field Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onTakeAction(item)}
                      className="px-3 py-1.5 text-xs font-medium text-[#1C1917] bg-[#F4EFE6] hover:bg-[#EAE4D8] rounded-md transition-colors"
                    >
                      Support Drive
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Feedback */}
        {filteredInitiatives.length === 0 && (
          <div className="mt-12 p-8 text-center rounded-xl bg-[#F7F4EE] border border-[#E0D8CA]">
            <p className="text-sm text-[#57534E]">
              No initiatives found matching "<span className="font-semibold">{searchQuery}</span>" in this category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 px-4 py-1.5 text-xs font-medium text-[#14532D] bg-[#E8F0EA] rounded-md hover:bg-[#D9E9DE]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
