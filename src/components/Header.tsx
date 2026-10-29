import React from 'react';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenPledge: () => void;
}

export function Header({ onOpenContact, onOpenPledge }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E8E2D6] px-6 lg:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element, no adjacent badges) */}
        <a
          href="#"
          className="font-editorial text-xl md:text-2xl font-bold tracking-tight text-[#14532D] hover:text-[#0F3D21] transition-colors whitespace-nowrap shrink-0"
        >
          Prakriti Conservation
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#44403C]">
          <a
            href="#efforts"
            className="hover:text-[#14532D] transition-colors whitespace-nowrap shrink-0"
          >
            Recent Efforts
          </a>
          <a
            href="#nunabachha"
            className="hover:text-[#14532D] transition-colors whitespace-nowrap shrink-0"
          >
            @nunabachha
          </a>
          <a
            href="#impact-calculator"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('impact-calculator')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#14532D] transition-colors whitespace-nowrap shrink-0"
          >
            Action Pledge
          </a>
          <a
            href="#get-involved"
            className="hover:text-[#14532D] transition-colors whitespace-nowrap shrink-0"
          >
            Get Involved
          </a>
          <a
            href="#contact"
            className="hover:text-[#14532D] transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-xs md:text-sm font-semibold text-[#FBF9F5] bg-[#14532D] rounded-lg hover:bg-[#0F3D21] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-sm"
          >
            Join the Effort
          </button>
        </div>
      </div>
    </header>
  );
}
