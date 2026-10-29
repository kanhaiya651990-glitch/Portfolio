import React from 'react';
import { Youtube, Mail, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#D6CEBE] pt-14 pb-12 border-t border-[#292524]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#292524]">
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#"
              className="font-editorial text-2xl font-bold text-[#FBF9F5] tracking-tight inline-block hover:text-[#86EFAC] transition-colors"
            >
              Prakriti Conservation Initiative
            </a>
            <p className="text-xs md:text-sm text-[#A8A29E] leading-relaxed max-w-md">
              A community ecological alliance dedicated to native forest regeneration, plastic-free river corridors, and digital youth environmental education in partnership with the <strong className="text-white">@nunabachha</strong> YouTube platform. Curated by Kanhaiya.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://www.youtube.com/@nunabachha"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] px-3.5 py-2 rounded-lg transition-colors"
              >
                <Youtube className="w-4 h-4 fill-white" />
                <span>@nunabachha on YouTube</span>
              </a>
              <a
                href="mailto:Kanhaiya65190000@gmail.com"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1C1917] bg-[#FBF9F5] hover:bg-[#EAE4D8] px-3.5 py-2 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4 text-[#14532D]" />
                <span>Kanhaiya65190000@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#FBF9F5]">
              Conservation Focus
            </div>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li><a href="#efforts" className="hover:text-white transition-colors">Himalayan Reforestation</a></li>
              <li><a href="#efforts" className="hover:text-white transition-colors">River Basin Cleanups</a></li>
              <li><a href="#efforts" className="hover:text-white transition-colors">Miyawaki Urban Groves</a></li>
              <li><a href="#efforts" className="hover:text-white transition-colors">Wildlife Corridor Monitoring</a></li>
              <li><a href="#efforts" className="hover:text-white transition-colors">Indigenous Seed Banking</a></li>
            </ul>
          </div>

          {/* Get Involved Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#FBF9F5]">
              Public Participation
            </div>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li><a href="#impact-calculator" className="hover:text-white transition-colors">Action Pledge Calculator</a></li>
              <li><a href="#get-involved" className="hover:text-white transition-colors">Field Volunteer Registration</a></li>
              <li><a href="#nunabachha" className="hover:text-white transition-colors">Free School Screenings</a></li>
              <li><a href="#get-involved" className="hover:text-white transition-colors">Sponsorship Tiers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Kanhaiya</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <div>
            © {new Date().getFullYear()} Prakriti Conservation Initiative. In association with @nunabachha & Kanhaiya. All educational materials open-access.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#A8A29E] hover:text-[#FBF9F5] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
