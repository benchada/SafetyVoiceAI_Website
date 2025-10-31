import Link from "next/link";

interface Section {
  id: string;
  title: string;
  content: string[];
}

const sections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      "Welcome to SafetyVoiceAI, an AI-driven platform developed by Entrogx Ventures to enhance safety reporting and compliance efficiency.",
      "By using our website or submitting information through our forms, you agree to comply with these Terms of Use and our Privacy Policy.",
      "If you do not agree with these terms, please do not use the site.",
    ],
  },
  {
    id: "website-use",
    title: "Use of Website",
    content: [
      "The SafetyVoiceAI website is provided for informational and demonstration purposes only.",
      "You agree to use the website in accordance with applicable laws and regulations of the MENA region, including but not limited to data protection and communication laws.",
      "You must not use this website to transmit unlawful, harmful, or misleading information.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [
      "All content, trademarks, designs, and materials displayed on this website (including the SafetyVoiceAI logo, text, graphics, and visuals) are owned or licensed by Entrogx Ventures.",
      "You may not reproduce, distribute, or modify any part of this site without prior written permission.",
    ],
  },
  {
    id: "data-collection",
    title: "Data Collection and Privacy",
    content: [
      "When you submit a contact form or newsletter signup, we may collect your name, company, email address, and message.",
      "This information is used solely to respond to your inquiry or provide product updates.",
      "We do not sell, rent, or trade your personal information to third parties.",
      "Data may be processed or stored securely within MENA or international cloud servers, following applicable privacy laws.",
      "You can request access, correction, or deletion of your data anytime via hello@entrogx.com.",
    ],
  },
  {
    id: "data-security",
    title: "Data Protection & Security",
    content: [
      "SafetyVoiceAI follows strict security measures, aligned with security best practices:",
      "• End-to-end encryption (AES-256 for stored data, TLS 1.3 for data in transit)\n• Zero-trust infrastructure, access control via verified identities and role-based permissions\n• Secure development lifecycle (SDLC) regular code reviews and vulnerability scans\n• SOC 2 / ISO 27001 aligned policies for infrastructure security\n• Two-factor authentication (2FA) and strong password requirements for all internal accounts\n• Data localization compliance, user data hosted in MENA-region or compliant jurisdictions\n• Regular penetration testing and continuous monitoring",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Analytics",
    content: [
      "The website may use cookies or analytics tools to improve performance and user experience.",
      "You may disable cookies through your browser settings, though some features may not function properly.",
    ],
  },
  {
    id: "limitation-liability",
    title: "Limitation of Liability",
    content: [
      'While we strive to maintain accuracy, SafetyVoiceAI\'s website content is provided "as is", without warranties of any kind.',
      "Entrogx Ventures shall not be liable for any direct or indirect damages resulting from use of this website or reliance on its content.",
    ],
  },
  {
    id: "external-links",
    title: "External Links",
    content: [
      "Our site may contain links to third-party sites.",
      "We are not responsible for the content, security, or privacy practices of external websites.",
    ],
  },
  {
    id: "legal-compliance",
    title: "Legal Compliance (MENA Region)",
    content: [
      "SafetyVoiceAI operates in compliance with UAE Digital Law, Saudi Arabia Personal Data Protection Law (PDPL), and other applicable GCC regulations.",
      "Users from these regions consent to the lawful collection and secure storage of limited personal data as described above.",
      "Any disputes shall be governed by the laws of the United Arab Emirates, and resolved in the courts of Dubai, UAE.",
    ],
  },
  {
    id: "children-privacy",
    title: "Children's Privacy",
    content: [
      "Our platform is not directed to children under 18. We do not knowingly collect personal data from minors. If we learn of such collection, we will delete the information promptly.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      "For questions about these Terms or our Privacy Policy, please contact:",
      "Email: hello@entrogx.com",
    ],
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    content: [
      'We may update these Terms and this Policy periodically. Any revisions will be reflected by the "Effective Date" above and, if changes are material, notify you via email or in-app notice before they take effect.',
      "By using SafetyVoiceAI, you consent to this Privacy Policy.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background  mt-[120px]">
      {/* Header */}
      <header className="border-b border-border  bg-background/95 backdrop-blur z-50">
        <div className=" mx-auto px-2 sm:px-6 2xl:max-w-[73%] max-w-[95%]  lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-foreground">
              Privacy Policy
            </h1>
            <div className="w-24" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto px-2 sm:px-6 2xl:max-w-[73%] max-w-[95%] lg:px-8 py-12">
        {/* Meta Info */}
        <div className="mb-12 pb-8 border-b border-border">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Last Updated:</span>{" "}
            October 24, 2025
          </p>
          <p className="text-base text-muted-foreground mt-3 leading-relaxed">
            This Privacy Policy describes how SafetyVoiceAI collects, uses, and
            protects your personal information when you use our Services.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={section.id} className="scroll-mt-24">
              {/* Section Header with accent line */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-1 h-8 bg-primary rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Section {index + 1}
                  </p>
                </div>
              </div>

              {/* Section Content */}
              <div className="ml-5 space-y-4">
                {section.content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-muted-foreground leading-relaxed whitespace-pre-wrap"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
