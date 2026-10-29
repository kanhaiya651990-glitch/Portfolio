import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare, PhoneCall, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  const [subjectCategory, setSubjectCategory] = useState<string>('volunteering');
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userMessage, setUserMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const recipientEmail = 'Kanhaiya65190000@gmail.com';

  const categorySubjects: Record<string, string> = {
    volunteering: '[Volunteer Application] Grassroots Field Conservation Brigade',
    school: '[School Screening] Free @nunabachha Nature Education Request',
    partnership: '[Partnership Proposal] Habitat Restoration / Land Stewardship',
    sponsorship: '[Supply Sponsorship] Direct Support for Conservation Equipment',
    inquiry: '[General Inquiry] Prakriti Conservation Initiative'
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(categorySubjects[subjectCategory] || 'Conservation Outreach');
    const body = encodeURIComponent(
      `Hello Kanhaiya,\n\nMy name is ${userName || '[Name]'}.\nContact Email: ${userEmail || '[Email]'}\nArea of Interest: ${subjectCategory}\n\nMessage:\n${userMessage}\n\nSent via Prakriti Conservation Initiative Website`
    );

    // Open mailto
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    setStatusMessage('Opening your email client to send your message directly to Kanhaiya...');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 border-b border-[#E8E2D6] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Dossier */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-[#14532D] mb-2">
                Direct Communication & Organizing
              </div>
              <h2 className="font-editorial text-3xl md:text-4xl font-medium text-[#1C1917] leading-tight">
                Connect Directly with Kanhaiya
              </h2>
              <p className="mt-3 text-sm text-[#57534E] leading-relaxed">
                Whether you want to organize a local tree planting day, invite our team for a school nature screening with @nunabachha, or propose an eco-corridor project, write to us directly.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#E0D8CA] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#14532D] text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-[#78716C]">Primary Contact Address</div>
                  <div className="font-mono text-sm sm:text-base font-semibold text-[#14532D] break-all">
                    {recipientEmail}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-[#1C1917] bg-[#FFFFFF] hover:bg-[#EAE4D8] border border-[#D6CEBE] rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#15803D]" /> : <Copy className="w-4 h-4 text-[#78716C]" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
                </button>

                <a
                  href={`mailto:${recipientEmail}`}
                  className="py-2 px-4 text-xs font-semibold text-[#FBF9F5] bg-[#14532D] hover:bg-[#0F3D21] rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>Open Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Facts / Guidelines */}
            <div className="space-y-3 pt-2 text-xs text-[#57534E]">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-[#14532D]">•</span>
                <span>Response timeline: Usually within 24–48 hours for volunteer and school screening inquiries.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-[#14532D]">•</span>
                <span>School screenings: Include free downloadable activity sheets and video files for offline classroom use.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-[#14532D]">•</span>
                <span>YouTube inquiries: Collaborations for nature animation scripts and voiceovers are warmly welcomed.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-configured Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D6CEBE] shadow-sm">
              <h3 className="font-editorial text-2xl font-semibold text-[#1C1917] mb-2">
                Send a Structured Message
              </h3>
              <p className="text-xs text-[#78716C] mb-6">
                Fill in your details below and click send to prepare a ready-to-dispatch message to <strong className="font-mono text-[#14532D]">{recipientEmail}</strong>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Topic selector */}
                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                    Purpose of Message
                  </label>
                  <select
                    value={subjectCategory}
                    onChange={(e) => setSubjectCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:ring-1 focus:ring-[#14532D] focus:border-[#14532D]"
                  >
                    <option value="volunteering">Volunteer for Upcoming Field Drives</option>
                    <option value="school">Host a Free @nunabachha School Nature Screening</option>
                    <option value="sponsorship">Sponsor Conservation Equipment / Seedlings</option>
                    <option value="partnership">Habitat Restoration / Ecological Partnership</option>
                    <option value="inquiry">General Question or Media Inquiry</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="e.g., Rajesh Kumar"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:ring-1 focus:ring-[#14532D] focus:border-[#14532D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="rajesh@example.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:ring-1 focus:ring-[#14532D] focus:border-[#14532D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                    Your Message / Specific Request
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Tell us about your location, school details, volunteer availability, or how you would like to collaborate..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:ring-1 focus:ring-[#14532D] focus:border-[#14532D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold text-[#FBF9F5] bg-[#14532D] rounded-lg hover:bg-[#0F3D21] active:scale-[0.99] transition-all inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Kanhaiya</span>
                </button>

                {statusMessage && (
                  <div className="p-3 rounded-lg bg-[#E8F0EA] text-xs text-[#14532D] font-medium text-center">
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
