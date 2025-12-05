"use client"

import { useState, use } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Card } from "@/components/ui/card"

const servicesData = {
  "market-support": {
    title: "Market Support",
    subtitle: "Strategic Market Analysis & Entry Support",
    icon: "🌍",
    overview:
      "Navigate complex African markets with confidence. We provide comprehensive market analysis, entry strategies, and local partnerships to accelerate your expansion.",
    whatWeDo: [
      {
        title: "Market Entry Support",
        description:
          "We help businesses access new markets, understand local regulations, and set up operations across Africa.",
        items: [
          "Country trade briefings and business environment overviews",
          "Regulatory and legal navigation",
          "Strategic advisory for regional expansion",
          "Access to local networks and service providers",
        ],
      },
      {
        title: "Trade Facilitation",
        description: "We support the seamless movement of goods and services across borders through:",
        items: [
          "Coordination of trade missions and business delegations",
          "Logistics support",
          "Export promotion strategies and sector showcases",
          "Connections with trade authorities and facilitation agencies",
        ],
      },
      {
        title: "B2B Matchmaking",
        description: "We facilitate curated introductions and deal-making opportunities between:",
        items: [
          "African and global companies across value chains",
          "Businesses and government institutions",
          "Buyers, suppliers, distributors, and service providers",
          "Public-private sector stakeholders for collaboration",
        ],
      },
      {
        title: "Investment Promotion",
        description: "We work with companies and investors to promote and mobilize investment across the continent by:",
        items: [
          "Organizing investor roundtables and business showcases",
          "Supporting investment readiness for growth-oriented firms",
          "Connecting businesses to capital, joint ventures, and public-private partnerships",
          "Promoting high-potential sectors and regional opportunities",
        ],
      },
      {
        title: "Policy Engagement",
        description:
          "We engage with policymakers and regional bodies to shape a more enabling business environment through:",
        items: [
          "Evidence-based policy research and analysis",
          "Multi-stakeholder dialogues and trade policy forums",
          "Regulatory reform advocacy and implementation support",
          "Partnerships with national and continental institutions",
        ],
      },
    ],
    benefits: [
      "Comprehensive market research covering competitive landscape, consumer behavior, and growth opportunities",
      "Customized entry strategies tailored to your specific business model and resources",
      "Strategic local partner identification to facilitate market entry and operations",
      "Regulatory and compliance guidance for smooth market operations",
      "Risk assessment and mitigation strategies for sustainable growth",
    ],
    services: [
      {
        name: "Market Research & Analysis",
        description: "In-depth analysis of market dynamics, opportunities, and competitive positioning",
      },
      {
        name: "Entry Strategy Development",
        description: "Customized go-to-market strategies aligned with your business objectives",
      },
      {
        name: "Partner Identification",
        description: "Sourcing and vetting of local partners, distributors, and strategic allies",
      },
      {
        name: "Regulatory Guidance",
        description: "Navigation of local regulatory requirements and compliance frameworks",
      },
      { name: "Market Adaptation Support", description: "Product and service localization to meet local market needs" },
    ],
    successMetrics: [
      "Market entry within 6-12 months",
      "30% reduction in market entry risks",
      "Qualified local partnership establishment",
      "Regulatory compliance achieved",
    ],
    cta: "Let us guide your market entry strategy",
  },
  "trade-facilitation": {
    title: "Trade Facilitation & Expansion",
    subtitle: "Seamless Cross-Border Trade Solutions",
    icon: "📦",
    overview:
      "Overcome trade barriers and expand your market reach. Our trade facilitation services ensure smooth export operations, regulatory compliance, and supply chain optimization.",
    benefits: [
      "Export readiness assessments to identify and address operational gaps",
      "Complete documentation and compliance support for cross-border transactions",
      "Trade fair coordination and buyer connection opportunities",
      "Supply chain optimization for cost-effective operations",
      "Logistics and shipping coordination support",
    ],
    services: [
      {
        name: "Customs & Border Procedure Support",
        description:
          "We help you understand and comply with customs procedures and requirements in different African markets.",
        details: [
          "Pre-clearance and documentation guidance",
          "HS codes and valuation support",
          "Engagement with customs authorities",
          "AfCFTA rules of origin advisory",
        ],
      },
      {
        name: "Trade Logistics",
        description: "Navigate Africa's diverse logistics landscape with confidence.",
        details: [
          "Route optimization and freight coordination",
          "Port access and inland connectivity",
          "Warehousing and cold chain support",
          "Cross-border transport compliance",
        ],
      },
      {
        name: "Regional Trade Expansion",
        description: "Expand your trade footprint into new African markets with tailored strategies.",
        details: [
          "Trade corridor entry planning",
          "Inter-country supply chain development",
          "Distributor and logistics partner identification",
          "Market-specific risk assessments",
        ],
      },
      {
        name: "AfCFTA & Trade Agreement Guidance",
        description:
          "Maximize benefits under the African Continental Free Trade Area (AfCFTA) and other trade agreements.",
        details: [
          "Support with certificate of origin and trade documents",
          "AfCFTA trade protocol interpretation",
          "Intra-African tariff mapping and analysis",
          "Regional integration and trade bloc navigation",
        ],
      },
    ],
    successMetrics: [
      "First export shipment within 3-6 months",
      "25% improvement in supply chain efficiency",
      "Access to 50+ qualified international buyers",
      "Regulatory compliance and certifications achieved",
    ],
    cta: "Start your export journey today",
  },
  "b2b-b2g-matchmaking": {
    title: "B2B and B2G Matchmaking",
    subtitle: "Connect with Qualified Buyers & Government Opportunities",
    icon: "🤝",
    overview:
      "Access exclusive networks of qualified buyers and government procurement opportunities. Our matchmaking services connect you with strategic business and government partners.",
    whoBenefits: [
      "Exporters and importers",
      "Local and international investors",
      "Ministries, departments & agencies",
      "Trade associations and chambers",
      "Project developers and PPP seekers",
    ],
    benefits: [
      "Access to network of pre-qualified buyers and government agencies",
      "Buyer-seller matching based on product requirements and compatibility",
      "Government contracting pathway guidance and opportunity identification",
      "Negotiation support and contract management assistance",
      "Ongoing relationship management and deal closure support",
    ],
    services: [
      {
        name: "Buyer Identification",
        description: "Strategic identification and qualification of potential buyers aligned with your offerings",
      },
      {
        name: "Government Procurement Access",
        description: "Guidance on government contracting processes and opportunity access",
      },
      { name: "Negotiation Support", description: "Expert negotiation guidance to secure favorable business terms" },
      { name: "Contract Management", description: "Support in contract structuring, documentation, and execution" },
      {
        name: "Relationship Building",
        description: "Facilitation of long-term partnerships and ongoing collaboration opportunities",
      },
    ],
    successMetrics: [
      "10+ qualified buyer introductions",
      "Average contract value of $50,000+",
      "Government procurement opportunity access",
      "90% contract closure rate",
    ],
    cta: "Connect with qualified business partners",
  },
  "investment-support": {
    title: "Investment Support",
    subtitle: "Financial Guidance & Investment Facilitation",
    icon: "💰",
    overview:
      "Unlock funding opportunities and accelerate your growth. We provide comprehensive financial guidance, access to credit facilities, and development finance partnerships.",
    benefits: [
      "Access to export credit facilities and preferential financing programs",
      "Grant identification and application support for eligible programs",
      "Partnerships with development finance institutions for growth capital",
      "Financial planning and business advisory services",
      "Investment readiness and pitch preparation support",
    ],
    services: [
      {
        name: "Export Credit Facility Access",
        description: "Connection to credit lines and financing options for export operations",
      },
      {
        name: "Grant Identification",
        description: "Research and identification of applicable grants and support programs",
      },
      {
        name: "Development Finance Partnerships",
        description: "Access to DFI funding for business expansion and growth",
      },
      { name: "Financial Planning", description: "Comprehensive financial planning and forecasting support" },
      { name: "Investment Readiness", description: "Preparation for investor engagement and capital raising" },
    ],
    successMetrics: [
      "Average funding access of $100,000+",
      "60% reduction in financing costs",
      "Grant awards averaging $50,000",
      "80% of clients secure growth capital",
    ],
    cta: "Unlock funding for your growth",
  },
  "capacity-building": {
    title: "Capacity Building",
    subtitle: "Strengthen Your Organization & Team",
    icon: "📚",
    overview:
      "Develop organizational capabilities and equip your team with skills for sustainable growth. Our capacity building programs are tailored to your specific needs.",
    benefits: [
      "Leadership development programs for management teams",
      "Compliance and governance training for regulatory excellence",
      "Digital transformation support for operational efficiency",
      "Team capability assessment and targeted training programs",
      "Continuous learning and professional development support",
    ],
    services: [
      {
        name: "Leadership Development",
        description: "Executive and management training programs for organizational effectiveness",
      },
      { name: "Compliance Training", description: "Governance, tax compliance, and regulatory training for staff" },
      {
        name: "Digital Transformation",
        description: "Support in adopting digital tools and systems for business operations",
      },
      {
        name: "Capability Assessment",
        description: "Comprehensive evaluation of organizational capabilities and skill gaps",
      },
      { name: "Specialized Training", description: "Custom training programs tailored to your business requirements" },
    ],
    successMetrics: [
      "95% staff competency achievement",
      "30% improvement in operational efficiency",
      "Certification achievement in compliance areas",
      "Continuous learning culture established",
    ],
    trade: [
      {
        name: "Trade Intelligence",
        description:
          "Access to market trends, trade regulations, and competitive insights for informed decision-making",
      },
      {
        name: "Trade Documentation",
        description: "Training on export/import documentation, certificates of origin, and compliance requirements",
      },
      {
        name: "Negotiation Skills",
        description: "Advanced negotiation workshops to strengthen commercial deal-making capabilities",
      },
    ],
    tools: [
      {
        name: "Business Management Systems",
        description: "Implementation and training on ERP, CRM, and accounting software for operational efficiency",
      },
      {
        name: "Quality Management Tools",
        description: "Introduction to ISO standards, quality assurance processes, and certification pathways",
      },
      {
        name: "Export Documentation Software",
        description: "Training on digital tools for trade documentation, customs compliance, and logistics tracking",
      },
    ],
    resources: [
      {
        name: "Industry Guidelines & Standards",
        description: "Access to sector-specific standards, certifications, and best practice resources",
      },
      {
        name: "Training Materials & Templates",
        description: "Comprehensive libraries of templates, checklists, and training materials for ongoing reference",
      },
      {
        name: "Expert Network Access",
        description: "Continued access to our network of consultants and industry experts for ongoing support",
      },
    ],
    cta: "Build stronger organizational capabilities",
  },
}

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const resolvedParams = use(params)
  const service = servicesData[resolvedParams.slug]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E0F7FA]">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-[#004D40] mb-4">Service Not Found</h1>
          <Link href="/" className="text-[#009688] hover:text-[#004D40]">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7A1E1E] to-[#5A1515] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#services"
            className="flex items-center gap-2 text-[#D4AD57] hover:text-[#F8F5EF] transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-2">{service.title}</h1>
              <p className="text-[#D4AD57] text-lg sm:text-xl">{service.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Overview */}
        <section className="mb-12 sm:mb-16">
          <p className="text-lg leading-relaxed text-[#1E1E1E] max-w-3xl">{service.overview}</p>
        </section>

        {/* What We Do section */}
        {resolvedParams.slug === "market-support" && service.whatWeDo && (
          <section className="mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mb-8">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.whatWeDo.map((section, idx) => (
                <Card key={idx} className="p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-serif text-2xl font-bold text-[#7A1E1E] mb-3">{section.title}</h3>
                  <p className="text-[#1E1E1E] mb-4 leading-relaxed">{section.description}</p>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-3">
                        <Check className="w-5 h-5 text-[#D4AD57] flex-shrink-0 mt-0.5" />
                        <span className="text-[#1E1E1E] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* What We Provide section for B2B and B2G Matchmaking */}
        {resolvedParams.slug === "b2b-b2g-matchmaking" && (
          <section className="py-16 bg-white/50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center">What We Provide</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Curated B2B Introductions */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">Curated B2B Introductions</h3>
                  <p className="text-amber-800 mb-4">
                    Connect with potential partners aligned with your industry, goals, and values.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 font-bold">✓</span>
                      <span className="text-amber-700">Buyer-supplier matchmaking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 font-bold">✓</span>
                      <span className="text-amber-700">Distributor and reseller linkages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 font-bold">✓</span>
                      <span className="text-amber-700">SME partnerships and value chain development</span>
                    </li>
                  </ul>
                </div>

                {/* B2G Engagement Platforms */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">B2G Engagement Platforms</h3>
                  <p className="text-amber-800 mb-4">
                    Facilitated access to government institutions and public-sector decision-makers.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 font-bold">✓</span>
                      <span className="text-amber-700">Policy roundtables and trade forums</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 font-bold">✓</span>
                      <span className="text-amber-700">Sector-specific government briefings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 font-bold">✓</span>
                      <span className="text-amber-700">Support for public-private partnership dialogues</span>
                    </li>
                  </ul>
                </div>

                {/* Networking at Trade Missions & Forums */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">Networking at Trade Missions & Forums</h3>
                  <p className="text-amber-800 mb-4">
                    Meet high-level business and government actors through SERA events.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 font-bold">✓</span>
                      <span className="text-amber-700">Business matchmaking during trade missions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 font-bold">✓</span>
                      <span className="text-amber-700">One-on-one sessions during investment roadshows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 font-bold">✓</span>
                      <span className="text-amber-700">Delegate support for international business delegations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Investment Support - What We Provide Section */}
        {resolvedParams.slug === "investment-support" && (
          <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#7A1E1E] mb-2 text-center">What We Provide</h2>
              <div className="w-16 h-1 bg-[#D4AD57] mx-auto mb-12"></div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Investment Opportunity Packaging */}
                <div className="bg-white border-l-4 border-[#7A1E1E] p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-[#7A1E1E] mb-4">Investment Opportunity Packaging</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    We identify and structure investment-ready projects in key sectors.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AD57] font-bold mt-1">✓</span>
                      <span className="text-gray-700 text-sm">Sector scoping and project profiling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AD57] font-bold mt-1">✓</span>
                      <span className="text-gray-700 text-sm">Investment teasers and pitch decks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AD57] font-bold mt-1">✓</span>
                      <span className="text-gray-700 text-sm">Feasibility and business model support</span>
                    </li>
                  </ul>
                </div>

                {/* Investor Engagement & Roadshows */}
                <div className="bg-white border-l-4 border-[#7A1E1E] p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-[#7A1E1E] mb-4">Investor Engagement & Roadshows</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    We connect investors to credible opportunities across Africa.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AD57] font-bold mt-1">✓</span>
                      <span className="text-gray-700 text-sm">Local and international investor matchmaking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AD57] font-bold mt-1">✓</span>
                      <span className="text-gray-700 text-sm">Country and sectoral investment forums</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AD57] font-bold mt-1">✓</span>
                      <span className="text-gray-700 text-sm">Investment missions and pitching platforms</span>
                    </li>
                  </ul>
                </div>

                {/* Public-Private Partnership Facilitation */}
                <div className="bg-white border-l-4 border-[#7A1E1E] p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-[#7A1E1E] mb-4">Public-Private Partnership Facilitation</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    We help unlock capital through partnerships between public institutions and private entities.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AD57] font-bold mt-1">✓</span>
                      <span className="text-gray-700 text-sm">PPP identification and deal structuring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AD57] font-bold mt-1">✓</span>
                      <span className="text-gray-700 text-sm">Government liaison and advocacy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AD57] font-bold mt-1">✓</span>
                      <span className="text-gray-700 text-sm">Investor-government roundtables</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Key Benefits */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-[#D4AD57] shadow-md hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <Check className="w-6 h-6 text-[#7A1E1E] flex-shrink-0 mt-1" />
                  <p className="text-[#1E1E1E] leading-relaxed">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Who Benefits section for B2B and B2G Matchmaking */}
        {resolvedParams.slug === "b2b-b2g-matchmaking" && service.whoBenefits && (
          <section className="mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mb-8">Who Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.whoBenefits.map((benefit, idx) => (
                <Card key={idx} className="p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="flex gap-4">
                    <Check className="w-6 h-6 text-[#7A1E1E] flex-shrink-0 mt-1" />
                    <p className="text-[#1E1E1E] leading-relaxed">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Services & Solutions */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mb-8">What We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.services.map((item, idx) => (
              <Card key={idx} className="p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                <h3 className="font-serif text-xl font-bold text-[#7A1E1E] mb-2">{item.name}</h3>
                <p className="text-[#1E1E1E] text-sm leading-relaxed mb-4">{item.description}</p>
                {item.details && (
                  <ul className="space-y-2">
                    {item.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="text-[#1E1E1E] text-sm flex items-start">
                        <span className="text-[#D4AD57] font-bold mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Trade Section for Capacity Building */}
        {resolvedParams.slug === "capacity-building" && (
          <>
            {/* Trade Section */}
            <section className="mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mb-8">Trade</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.trade.map((item, idx) => (
                  <Card key={idx} className="p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                    <h3 className="font-serif text-xl font-bold text-[#7A1E1E] mb-3">{item.name}</h3>
                    <p className="text-[#1E1E1E] text-sm leading-relaxed">{item.description}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Tools Section */}
            <section className="mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mb-8">Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.tools.map((item, idx) => (
                  <Card key={idx} className="p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                    <h3 className="font-serif text-xl font-bold text-[#7A1E1E] mb-3">{item.name}</h3>
                    <p className="text-[#1E1E1E] text-sm leading-relaxed">{item.description}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section className="mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mb-8">Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.resources.map((item, idx) => (
                  <Card key={idx} className="p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                    <h3 className="font-serif text-xl font-bold text-[#7A1E1E] mb-3">{item.name}</h3>
                    <p className="text-[#1E1E1E] text-sm leading-relaxed">{item.description}</p>
                  </Card>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Who Benefits section for other services */}
        {resolvedParams.slug !== "b2b-b2g-matchmaking" && service.whoBenefits && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-950 mb-8">Who Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.whoBenefits.map((beneficiary, index) => (
                <div
                  key={index}
                  className="bg-white border-l-4 border-amber-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-amber-700 text-2xl font-bold flex-shrink-0">{String.fromCharCode(9679)}</div>
                    <p className="text-gray-700 font-medium">{beneficiary}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Success Metrics */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mb-8">Expected Outcomes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.successMetrics.map((metric, idx) => (
              <Card key={idx} className="p-6 bg-gradient-to-br from-[#D4AD57]/10 to-[#7A1E1E]/10 text-center">
                <p className="font-serif text-[#7A1E1E] font-bold text-lg">{metric}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#7A1E1E] to-[#5A1515] rounded-lg p-8 sm:p-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">{service.cta}</h2>
          <p className="text-[#D4AD57] mb-8 max-w-2xl mx-auto text-lg">
            Schedule a consultation with our experts to discuss how this service can accelerate your business growth.
          </p>
          <button
            onClick={() => setShowConsultationModal(true)}
            className="px-8 py-4 bg-[#D4AD57] text-[#7A1E1E] font-semibold rounded-lg hover:bg-[#F8F5EF] transition-all inline-flex items-center gap-2 group"
          >
            Request Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>
      </div>
    </main>
  )
}
