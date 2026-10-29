import React, { useState, useEffect } from 'react';
import { X, Send, Check, Mail, Copy } from 'lucide-react';

interface ActionModalProps {
  actionType: string | null;
  onClose: () => void;
}

export function ActionModal({ actionType, onClose }: ActionModalProps) {
  if (!actionType) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Derive titles & default notes based on actionType
  let title = 'Get Involved in Conservation';
  let subtitle = 'Join our frontline community ecological efforts';
  let placeholderNote = 'Share your availability or interest...';

  if (actionType === 'volunteer') {
    title = 'Register as Field Volunteer';
    subtitle = 'Join upcoming weekend tree-planting brigades and river cleanup drives';
    placeholderNote = 'Which weekends or days are you available? Any previous conservation experience?';
  } else if (actionType === 'school-partner') {
    title = 'Request Free School Nature Screening Pack';
    subtitle = 'Bring @nunabachha animated nature episodes and printed activity guides to your students';
    placeholderNote = 'Name of school / educational institution, grades/ages of children, estimated student count...';
  } else if (actionType.startsWith('sponsor')) {
    title = 'Sponsor Conservation Equipment & Supplies';
    subtitle = `Directly support: ${actionType.replace('sponsor-', '')}`;
    placeholderNote = 'Do you wish to sponsor individual items, sponsor monthly, or contribute as an institution?';
  } else if (actionType === 'report-area') {
    title = 'Submit a Degraded Habitat Report';
    subtitle = 'Inform our team about deforested slopes, plastic dump points, or drying natural springs';
    placeholderNote = 'Specific location / coordinates, description of the ecological damage, access conditions...';
  }

  const recipientEmail = 'Kanhaiya65190000@gmail.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(`[${title}] from ${name || 'Conservation Supporter'}`);
    const mailBody = encodeURIComponent(
      `Hello Kanhaiya,\n\nI am contacting you regarding: ${title}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\n\nDetails:\n${notes}\n\nSent from Prakriti Conservation Initiative website.`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${mailSubject}&body=${mailBody}`;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FBF9F5] rounded-2xl border border-[#D6CEBE] shadow-2xl overflow-hidden p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D6]">
          <div>
            <div className="text-[11px] font-semibold text-[#14532D] uppercase tracking-wider">
              Prakriti Conservation Action
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#1C1917] mt-0.5">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#78716C] hover:text-[#1C1917] hover:bg-[#EAE4D8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-[#57534E] mt-3 leading-relaxed">
          {subtitle}. All communications are routed directly to organizer Kanhaiya at <strong className="font-mono text-[#14532D]">{recipientEmail}</strong>.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:ring-1 focus:ring-[#14532D] focus:border-[#14532D]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:ring-1 focus:ring-[#14532D] focus:border-[#14532D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 / Mobile"
                  className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:ring-1 focus:ring-[#14532D] focus:border-[#14532D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                Your City / District / State
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Dehradun, Uttarakhand / Delhi NCR"
                className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:ring-1 focus:ring-[#14532D] focus:border-[#14532D]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                Specific Details or Message
              </label>
              <textarea
                rows={3}
                required
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={placeholderNote}
                className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:ring-1 focus:ring-[#14532D] focus:border-[#14532D]"
              />
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 text-xs font-medium text-[#57534E] hover:text-[#1C1917] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-[2] py-2.5 text-xs font-semibold text-[#FBF9F5] bg-[#14532D] hover:bg-[#0F3D21] rounded-lg transition-all inline-flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit to Kanhaiya</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-6 p-6 rounded-xl bg-[#E8F0EA] border border-[#C5DDCB] text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#14532D] text-white mx-auto flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-editorial text-lg font-bold text-[#1C1917]">
              Message Dispatched!
            </h4>
            <p className="text-xs text-[#44403C] leading-relaxed">
              Your details have opened in your email client addressed to <span className="font-mono font-semibold text-[#14532D]">{recipientEmail}</span>.
            </p>
            <div className="pt-2 flex justify-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#14532D] bg-[#FFFFFF] border border-[#D6CEBE] rounded-md inline-flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#14532D] rounded-md"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
