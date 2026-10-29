import React, { useState, useMemo } from 'react';
import { PLEDGE_OPTIONS, PledgeItem } from '../data/conservationData';
import { Leaf, Award, Download, Share2, Check, RefreshCw } from 'lucide-react';

interface PledgeCalculatorProps {
  onCommitPledge: (pledgeSummary: { name: string; carbon: number; trees: number }) => void;
}

export function PledgeCalculator({ onCommitPledge }: PledgeCalculatorProps) {
  const [pledgeValues, setPledgeValues] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    PLEDGE_OPTIONS.forEach((item) => {
      initial[item.id] = item.defaultValue;
    });
    return initial;
  });

  const [pledgerName, setPledgerName] = useState<string>('');
  const [pledgerEmail, setPledgerEmail] = useState<string>('');
  const [certificateGenerated, setCertificateGenerated] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const handleSliderChange = (id: string, val: number) => {
    setPledgeValues((prev) => ({ ...prev, [id]: val }));
  };

  const handleReset = () => {
    const resetVals: Record<string, number> = {};
    PLEDGE_OPTIONS.forEach((item) => {
      resetVals[item.id] = item.defaultValue;
    });
    setPledgeValues(resetVals);
    setCertificateGenerated(false);
  };

  // Calculations
  const impactTotals = useMemo(() => {
    let carbonKg = 0;
    let treesEq = 0;
    let waterLitres = 0;

    PLEDGE_OPTIONS.forEach((item) => {
      const val = pledgeValues[item.id] || 0;
      carbonKg += val * item.carbonKgSavedPerUnit;
      treesEq += val * item.treesEquivalent;
      waterLitres += val * item.waterLitresSaved;
    });

    return {
      carbonKg: Math.round(carbonKg),
      treesEq: Math.round(treesEq * 10) / 10,
      waterLitres: Math.round(waterLitres)
    };
  }, [pledgeValues]);

  const handleGenerateCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pledgerName.trim()) {
      alert('Please enter your name to generate your personalized pledge certificate.');
      return;
    }
    setCertificateGenerated(true);
    onCommitPledge({
      name: pledgerName,
      carbon: impactTotals.carbonKg,
      trees: impactTotals.treesEq
    });
  };

  const handleCopyPledge = () => {
    const text = `🌿 I pledged to take environmental action with Prakriti Conservation & @nunabachha! My projected annual impact: ${impactTotals.carbonKg}kg CO₂ offset & ${impactTotals.treesEq} tree-equivalents. Join at https://www.youtube.com/@nunabachha or email Kanhaiya65190000@gmail.com`;
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="impact-calculator" className="py-16 lg:py-24 border-b border-[#E8E2D6] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#14532D] mb-2">
            Ways to Get Involved · Personal & Community Pledge
          </div>
          <h2 className="font-editorial text-3xl md:text-4xl font-medium text-[#1C1917] leading-tight">
            Calculate Your Conservation Impact
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#57534E] leading-relaxed">
            Every seedling nurtured, riverbank cleaned, and nature lesson shared creates compound ecological resilience. Adjust the action sliders below to compute your projected ecological footprint and generate your verified action certificate.
          </p>
        </div>

        {/* 2-Column Layout: Calculator Controls vs. Live Impact Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Sliders */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D6]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                Select Your Annual Commitments
              </span>
              <button
                onClick={handleReset}
                className="text-xs text-[#78716C] hover:text-[#14532D] inline-flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Defaults</span>
              </button>
            </div>

            <div className="space-y-5">
              {PLEDGE_OPTIONS.map((item) => {
                const currentVal = pledgeValues[item.id] ?? item.defaultValue;
                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-xl bg-[#FFFFFF] border border-[#D6CEBE] shadow-xs space-y-3"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[11px] font-semibold text-[#14532D] uppercase tracking-wider">
                          {item.category}
                        </div>
                        <h4 className="text-sm font-semibold text-[#1C1917] mt-0.5">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#78716C] mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-editorial text-2xl font-bold text-[#14532D] tabular-nums">
                          {currentVal}
                        </span>
                        <span className="text-xs font-medium text-[#78716C] ml-1.5">
                          {item.unit}
                        </span>
                      </div>
                    </div>

                    {/* Range slider */}
                    <div className="pt-2">
                      <input
                        type="range"
                        min="0"
                        max={item.maxValue}
                        step="1"
                        value={currentVal}
                        onChange={(e) => handleSliderChange(item.id, parseInt(e.target.value, 10))}
                        className="w-full accent-[#14532D] cursor-pointer"
                        aria-label={`Quantity for ${item.title}`}
                      />
                      <div className="flex justify-between text-[11px] text-[#A8A29E] mt-1">
                        <span>0 {item.unit}</span>
                        <span>{item.maxValue} {item.unit}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Impact Summary & Certificate Form */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            {/* Impact Metric Cards */}
            <div className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#E0D8CA] space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
                Your Projected Annual Ecological Yield
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E8E2D6]">
                  <div className="text-[11px] font-medium text-[#78716C] uppercase tracking-wider">
                    Carbon Offset Potential
                  </div>
                  <div className="font-editorial text-3xl font-bold text-[#14532D] mt-1 tabular-nums">
                    {impactTotals.carbonKg} <span className="text-lg font-normal text-[#57534E]">kg CO₂/yr</span>
                  </div>
                  <div className="text-xs text-[#78716C] mt-1">
                    Equivalent to ~{Math.round(impactTotals.carbonKg / 2.5)} car miles avoided
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E8E2D6]">
                  <div className="text-[11px] font-medium text-[#78716C] uppercase tracking-wider">
                    Native Tree Canopy Equivalents
                  </div>
                  <div className="font-editorial text-3xl font-bold text-[#0369A1] mt-1 tabular-nums">
                    {impactTotals.treesEq} <span className="text-lg font-normal text-[#57534E]">mature trees</span>
                  </div>
                  <div className="text-xs text-[#78716C] mt-1">
                    Creating permanent pollinator corridors
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E8E2D6]">
                  <div className="text-[11px] font-medium text-[#78716C] uppercase tracking-wider">
                    Clean Waterway Protected
                  </div>
                  <div className="font-editorial text-3xl font-bold text-[#9A3412] mt-1 tabular-nums">
                    {impactTotals.waterLitres.toLocaleString()} <span className="text-lg font-normal text-[#57534E]">litres</span>
                  </div>
                  <div className="text-xs text-[#78716C] mt-1">
                    Filtered & shielded from plastic degradation
                  </div>
                </div>
              </div>

              {/* Form to seal pledge */}
              {!certificateGenerated ? (
                <form onSubmit={handleGenerateCertificate} className="pt-4 border-t border-[#E0D8CA] space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={pledgerName}
                      onChange={(e) => setPledgerName(e.target.value)}
                      placeholder="e.g., Aarav Sharma / Priya Patel"
                      className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:ring-1 focus:ring-[#14532D] focus:border-[#14532D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                      Your Email (for updates & invite to next drive)
                    </label>
                    <input
                      type="email"
                      value={pledgerEmail}
                      onChange={(e) => setPledgerEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:ring-1 focus:ring-[#14532D] focus:border-[#14532D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-semibold text-[#FBF9F5] bg-[#14532D] rounded-lg hover:bg-[#0F3D21] active:scale-[0.99] transition-all shadow-sm"
                  >
                    Generate Action Pledge Certificate
                  </button>
                </form>
              ) : (
                /* Generated Certificate Card */
                <div className="pt-4 border-t border-[#E0D8CA] space-y-4">
                  <div className="p-5 rounded-xl bg-[#FFFFFF] border-2 border-[#14532D]/30 relative overflow-hidden shadow-sm">
                    <div className="text-center space-y-2">
                      <div className="inline-flex p-2 rounded-full bg-[#E8F0EA] text-[#14532D] mx-auto">
                        <Award className="w-6 h-6" />
                      </div>
                      <div className="text-[11px] font-semibold tracking-widest uppercase text-[#9A3412]">
                        Prakriti Conservation Initiative
                      </div>
                      <h4 className="font-editorial text-lg font-bold text-[#1C1917]">
                        Certificate of Environmental Action
                      </h4>
                      <p className="text-xs text-[#57534E]">
                        Proudly awarded to <strong className="text-[#14532D]">{pledgerName}</strong>
                      </p>
                      <div className="py-2 px-3 rounded-lg bg-[#F7F4EE] text-xs text-[#44403C] space-y-1">
                        <div>Annual Carbon Offset: <strong className="tabular-nums font-mono">{impactTotals.carbonKg} kg CO₂</strong></div>
                        <div>Canopy Equivalents: <strong className="tabular-nums font-mono">{impactTotals.treesEq} mature trees</strong></div>
                      </div>
                      <div className="text-[10px] text-[#A8A29E] pt-1">
                        In collaboration with @nunabachha · Curated by Kanhaiya
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyPledge}
                      className="flex-1 py-2 text-xs font-medium text-[#14532D] bg-[#E8F0EA] hover:bg-[#D9E9DE] rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
                    >
                      {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
                      <span>{copiedLink ? 'Pledge Copied!' : 'Share Commitment'}</span>
                    </button>
                    <button
                      onClick={() => setCertificateGenerated(false)}
                      className="px-3 py-2 text-xs text-[#78716C] hover:text-[#1C1917] transition-colors"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
