import { Metadata } from 'next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Legal | Imperial Paper',
  description: 'Privacy policy, terms of service, and legal information for Imperial Paper.',
}

const sections = [
  {
    id: 'privacy',
    title: 'Privacy Policy',
    lastUpdated: 'January 1, 2024',
    content: [
      {
        heading: 'Information We Collect',
        text: 'We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, company name, and project details.',
      },
      {
        heading: 'How We Use Your Information',
        text: 'We use the information we collect to respond to your inquiries, provide quotes and estimates, communicate about projects, send promotional materials (with your consent), and improve our services. We do not sell your personal information to third parties.',
      },
      {
        heading: 'Cookies and Analytics',
        text: 'We use cookies and similar tracking technologies to analyze website traffic and improve user experience. You can control cookie preferences through your browser settings. We use privacy-focused analytics that do not track individual users across websites.',
      },
      {
        heading: 'Data Security',
        text: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.',
      },
      {
        heading: 'Your Rights',
        text: 'You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at privacy@imperialpaper.com. California residents have additional rights under the CCPA.',
      },
    ],
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    lastUpdated: 'January 1, 2024',
    content: [
      {
        heading: 'Acceptance of Terms',
        text: 'By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.',
      },
      {
        heading: 'Services Description',
        text: 'Imperial Paper provides structural packaging design, prototyping, and consulting services. All project details, timelines, and pricing are confirmed in written proposals and contracts specific to each engagement.',
      },
      {
        heading: 'Intellectual Property',
        text: 'All content on this website, including text, graphics, logos, and images, is the property of Imperial Paper and protected by intellectual property laws. Project work and designs are subject to separate agreements.',
      },
      {
        heading: 'Limitation of Liability',
        text: 'Imperial Paper shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of this website or our services. Our total liability shall not exceed the amount paid for services.',
      },
      {
        heading: 'Governing Law',
        text: 'These terms shall be governed by the laws of the State of California, without regard to conflict of law provisions. Any disputes shall be resolved in the courts of Los Angeles County, California.',
      },
    ],
  },
  {
    id: 'accessibility',
    title: 'Accessibility Statement',
    lastUpdated: 'January 1, 2024',
    content: [
      {
        heading: 'Our Commitment',
        text: 'Imperial Paper is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.',
      },
      {
        heading: 'Standards Compliance',
        text: 'We aim to conform to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Our website is designed to be perceivable, operable, understandable, and robust for all users.',
      },
      {
        heading: 'Accessibility Features',
        text: 'Our website includes keyboard navigation support, descriptive link text, appropriate color contrast ratios, resizable text without loss of functionality, and ARIA labels where appropriate.',
      },
      {
        heading: 'Feedback',
        text: 'We welcome your feedback on the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please contact us at accessibility@imperialpaper.com.',
      },
    ],
  },
]

export default function LegalPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="section-sm">
        <div className="container">
          <ScrollReveal>
            <span className="text-label mb-2 block">Legal</span>
            <h1 className="heading-display mb-4">
              Legal Information
            </h1>
            <p className="text-body-lg max-w-2xl">
              Our commitment to transparency and protecting your rights. Please review our 
              privacy policy, terms of service, and accessibility statement.
            </p>
          </ScrollReveal>

          {/* Quick Nav */}
          <div className="mt-8 flex flex-wrap gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 text-sm font-medium bg-primary-100 text-primary-700 rounded-full 
                         hover:bg-primary-200 transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-sm">
        <div className="container max-w-4xl">
          {sections.map((section, sectionIndex) => (
            <ScrollReveal key={section.id} delay={sectionIndex * 0.1}>
              <div
                id={section.id}
                className="scroll-mt-32 mb-16 last:mb-0"
              >
                <div className="glass-card p-8 md:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-primary-200">
                    <h2 className="heading-xl">{section.title}</h2>
                    <span className="text-sm text-primary-500">
                      Last updated: {section.lastUpdated}
                    </span>
                  </div>

                  <div className="space-y-8">
                    {section.content.map((item, index) => (
                      <div key={index}>
                        <h3 className="heading-sm mb-3">{item.heading}</h3>
                        <p className="text-body leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Contact for Questions */}
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-16 p-8 bg-primary-50 rounded-2xl">
              <h3 className="heading-lg mb-3">Questions?</h3>
              <p className="text-body mb-6 max-w-lg mx-auto">
                If you have any questions about our legal policies or need clarification 
                on any points, please don not hesitate to reach out.
              </p>
              <a href="mailto:legal@imperialpaper.com" className="btn-secondary">
                Contact Legal Team
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
