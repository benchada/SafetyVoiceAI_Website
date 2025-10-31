import Link from "next/link";

interface Section {
  id: string;
  title: string;
  content: string[];
}

const sections: Section[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      "By accessing or using this website, you agree to comply with these Terms and Conditions and all applicable laws in your country of residence.",
      "If you do not agree with any part of these Terms, please do not use this website.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    content: [
      "You must be at least 18 years old and capable of entering into legally binding contracts. By using the Service, you represent and warrant that you meet these requirements.",
    ],
  },
  {
    id: "purpose",
    title: "Purpose of Website",
    content: [
      "The SafetyVoiceAI website is designed to provide information, demos, and updates about our AI-powered safety and compliance solutions.",
      "Use of the website is for lawful, non-commercial, and informational purposes only.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    content: [
      "All materials on this website including text, graphics, logos, product descriptions, and images are the property of Entrogx Ventures or its licensors.",
      "You may not copy, modify, distribute, or reuse any content without our prior written consent.",
    ],
  },
  {
    id: "security-practices",
    title: "Security Practices",
    content: [
      "We take data security and platform integrity seriously. To protect both our users and our systems:",
      "From Our End (Entrogx Commitments):\n• Secure Development: All code reviewed and deployed with security scanning (dependency checks, code vulnerability audits)\n• Encrypted Communication: HTTPS/TLS enforced across all website interactions\n• Data Protection: Any stored data is encrypted at rest and in transit\n• Access Control: Only authorized personnel can access contact submissions or form data\n• Vulnerability Management: Regular patching and security updates across servers and frameworks\n• Incident Response: Immediate action plan in case of detected breach or unauthorized access\n• Third-Party Compliance: Any vendors (e.g., form processors, analytics) must meet equivalent security and privacy standards",
      "From User's End (Your Responsibility):\n• Do not attempt to breach, scan, or interfere with website functionality\n• Do not submit malicious or misleading information\n• Ensure that communications via our forms or demo requests are lawful and respectful",
    ],
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    content: [
      "By using this website, you agree to:",
      "• Provide accurate information when submitting forms or inquiries\n• Not misuse, hack, or disrupt website functionality\n• Respect applicable cyber and communication laws in the MENA region, including data and content regulations",
      "We reserve the right to restrict access or take legal action if misuse is detected.",
    ],
  },
  {
    id: "data-protection",
    title: "Data Protection & Privacy",
    content: [
      "We value your privacy. Any personal data collected through contact forms, demo requests, or newsletter signups will be used solely for communication, demo coordination, or updates about SafetyVoiceAI.",
      "We comply with UAE Federal Decree-Law No. 45 of 2021 (Personal Data Protection Law) and relevant GCC data privacy standards.",
      "Your information will be stored securely and never shared or sold to third parties.",
      "To request deletion or access to your data, please email hello@entrogx.com",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    content: [
      "The SafetyVoiceAI website may contain links to other websites or resources.",
      "We are not responsible for the content, availability, or privacy practices of those third-party sites.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    content: [
      "The information provided on this website is for general informational purposes only.",
      "While we strive for accuracy, we do not guarantee that all content is error-free or up to date.",
      "SafetyVoiceAI and Entrogx Ventures are not liable for any direct, indirect, or consequential damages arising from use of this website.",
    ],
  },
  {
    id: "compliance",
    title: "Compliance with MENA Laws",
    content: [
      "This website operates under and complies with:",
      "• UAE Digital Law\n• Saudi Arabia Personal Data Protection Law (PDPL)\n• GCC Cybersecurity and E-Transactions Regulations",
      "Users agree that all interactions must comply with these regional laws. Any disputes will be governed by the laws of the United Arab Emirates, with exclusive jurisdiction in the courts of Dubai, UAE.",
    ],
  },
  {
    id: "modifications",
    title: "Modifications",
    content: [
      "Entrogx Ventures reserves the right to update or modify these Terms at any time.",
      'Changes will be effective immediately upon posting to this page, and the "Effective Date" will be updated accordingly.',
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    content: [
      "For any questions about these Terms or the website, please contact:",
      "Email: hello@entrogx.com",
      "By using SafetyVoiceAI, you acknowledge that you have read, understood, and agree to these Terms & Conditions.",
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    content: [
      "For any questions about these Terms or the website, please contact:",
      "Email: hello@entrogx.com",
      "Address: (Add your company address here)",
      "By using SafetyVoiceAI, you acknowledge that you have read, understood, and agree to these Terms & Conditions.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background lg:mt-[120px]">
      {/* Header */}
      <header className=" border-b border-border  top-0 bg-background/95 backdrop-blur z-50">
        <div className="mx-auto px-2 sm:px-6 2xl:max-w-[73%] max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-foreground">
              Terms & Conditions
            </h1>
            <div className="w-24" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto px-2 sm:px-6 2xl:max-w-[73%] max-w-[95%]  lg:px-8 py-12">
        {/* Meta Info */}
        <div className="mb-12 pb-8 border-b border-border">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Last Updated:</span>{" "}
            October 24, 2025
          </p>
          <p className="text-base text-muted-foreground mt-3 leading-relaxed">
            Please read these Terms and Conditions carefully before using
            SafetyVoiceAI. By accessing our website and services, you agree to
            be bound by these terms.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={section.id} className="scroll-mt-24">
              {/* Section Header with accent line */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-1 h-8 bg-secondary rounded-full flex-shrink-0 mt-1" />
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
