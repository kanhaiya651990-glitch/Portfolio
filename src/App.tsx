/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InitiativesGrid } from './components/InitiativesGrid';
import { InitiativeModal } from './components/InitiativeModal';
import { NunabachhaSpotlight } from './components/NunabachhaSpotlight';
import { PledgeCalculator } from './components/PledgeCalculator';
import { GetInvolvedSection } from './components/GetInvolvedSection';
import { ContactSection } from './components/ContactSection';
import { ActionModal } from './components/ActionModal';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConservationInitiative } from './data/conservationData';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [selectedInitiative, setSelectedInitiative] = useState<ConservationInitiative | null>(null);
  const [actionModalType, setActionModalType] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenPledge = () => {
    document.getElementById('impact-calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreEfforts = () => {
    document.getElementById('efforts')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTakeActionForInitiative = (initiative: ConservationInitiative) => {
    setActionModalType(`volunteer-${initiative.title}`);
  };

  const handleCommitPledge = (summary: { name: string; carbon: number; trees: number }) => {
    showToast(`🌱 Thank you ${summary.name}! Your pledge of ${summary.carbon}kg carbon offset is recorded.`);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917] flex flex-col font-sans selection:bg-[#14532D] selection:text-[#FBF9F5]">
      {/* Top Bar Header adhering to 3-zone Top Bar Contract */}
      <Header
        onOpenContact={handleOpenContact}
        onOpenPledge={handleOpenPledge}
      />

      <main className="flex-1">
        {/* Curatorial Hero Section */}
        <Hero
          onOpenContact={handleOpenContact}
          onExploreEfforts={handleExploreEfforts}
        />

        {/* Recent Conservation Efforts Grid */}
        <InitiativesGrid
          onSelectInitiative={(init) => setSelectedInitiative(init)}
          onTakeAction={handleTakeActionForInitiative}
        />

        {/* Digital Conservation Outreach & @nunabachha YouTube Section */}
        <NunabachhaSpotlight
          onRequestScreening={() => setActionModalType('school-partner')}
        />

        {/* Action Pledge & Impact Calculator */}
        <PledgeCalculator
          onCommitPledge={handleCommitPledge}
        />

        {/* Pathways to Get Involved & Sponsorship Tiers */}
        <GetInvolvedSection
          onOpenActionModal={(type) => setActionModalType(type)}
        />

        {/* Direct Contact with Kanhaiya */}
        <ContactSection />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Initiative Detail Dossier Modal */}
      <InitiativeModal
        initiative={selectedInitiative}
        onClose={() => setSelectedInitiative(null)}
        onTakeAction={handleTakeActionForInitiative}
      />

      {/* Action / Volunteering / Screening Request Modal */}
      <ActionModal
        actionType={actionModalType}
        onClose={() => setActionModalType(null)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-[#14532D] text-[#FBF9F5] px-4 py-3 rounded-xl shadow-lg border border-[#86EFAC]/30 flex items-center gap-2.5 text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <CheckCircle2 className="w-4 h-4 text-[#86EFAC] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
