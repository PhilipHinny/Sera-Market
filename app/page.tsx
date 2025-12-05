"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, ChevronRight, Menu, X, ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showConsultationForm, setShowConsultationForm] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  })
  const [activeTab, setActiveTab] = useState("economic")
  const [hoveredSector, setHoveredSector] = useState<number | null>(null)

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", business: "", message: "" })
    setShowConsultationForm(false)
  }

  const sectors = [
    {
      title: "Agribusiness",
      slug: "agribusiness",
      description:
        "Coffee, tea, grains, spices - Premium agricultural exports with certified quality standards and international compliance support.",
      icon: "🌾",
      image: "/ugandan-agribusiness-coffee-tea-export.jpg",
    },
    {
      title: "Processed Foods & Beverages",
      slug: "processed-foods-beverages",
      description:
        "Value-added food products, snacks, and beverages meeting international food safety and packaging standards.",
      icon: "🍲",
      image: "/ugandan-processed-foods-beverages-export.jpg",
    },
    {
      title: "Handicrafts & Creative Industries",
      slug: "handicrafts-creative",
      description:
        "Artisanal products, design-led goods, and cultural exports with authentic storytelling and global positioning.",
      icon: "🎨",
      image: "/ugandan-handicrafts-creative-industries-artisans.jpg",
    },
    {
      title: "Natural Products",
      slug: "natural-products",
      description:
        "Honey, shea butter, essential oils, and organic natural products for the premium wellness and beauty markets.",
      icon: "🌿",
      image: "/ugandan-natural-products-honey-shea-essential-oils.jpg",
    },
  ]

  const tabContent = {
    economic: [
      { label: "GDP (Nominal)", value: "~$50 Billion USD" },
      { label: "GDP Per Capita", value: "~$1,100 USD" },
      { label: "GDP Growth Rate", value: "5.2% (projected)" },
      { label: "Inflation Rate", value: "~3.8% (stabilizing)" },
      { label: "Corporate Tax Rate", value: "30% (standard)" },
    ],
    human: [
      { label: "Population", value: "~48 Million" },
      { label: "Urbanization Rate", value: "~26% and rising" },
      { label: "Labor Force", value: "Young, dynamic, median age 16" },
      { label: "Literacy Rate", value: "~76%" },
    ],
    market: [
      { label: "EAC (East African Community)", value: "Access to 300M+ consumers" },
      { label: "AfCFTA", value: "Access to 1.3B+ consumer continental market" },
      { label: "Top Export Partners", value: "EU, UAE, Kenya, Rwanda" },
      { label: "Top Import Partners", value: "China, UAE, India" },
    ],
    incentives: [
      { label: "Tax Holidays", value: "Available for strategic export sectors" },
      { label: "Industrial Park Land", value: "Access through structured allocation" },
      { label: "Export Financing", value: "Available via partner DFIs and banks" },
      { label: "SME Capacity Grants", value: "Supported through development partners" },
    ],
  }

  const services = [
    {
      title: "Market Support",
      slug: "market-support",
      icon: "🌍",
      description: "Strategic market analysis and entry support for African expansion",
      points: [
        "Market research and opportunity identification",
        "Entry strategy development",
        "Local partner identification",
        "Regulatory landscape analysis",
      ],
      image: "/uganda-business-growth-investment-market.jpg",
    },
    {
      title: "Trade Facilitation & Expansion",
      slug: "trade-facilitation",
      icon: "📦",
      description: "Enable seamless cross-border trade and market access",
      points: [
        "Export readiness assessments",
        "Documentation and compliance support",
        "Trade fair coordination",
        "Supply chain optimization",
      ],
      image: "/global-trade-market-access.jpg",
    },
    {
      title: "B2B and B2G Matchmaking",
      slug: "b2b-b2g-matchmaking",
      icon: "🤝",
      description: "Connect businesses with qualified buyers and government procurement",
      points: [
        "Buyer identification and qualification",
        "Government contracting pathways",
        "Negotiation support",
        "Contract management assistance",
      ],
      image: "/export-readiness-business-operations.jpg",
    },
    {
      title: "Investment Support",
      slug: "investment-support",
      icon: "💰",
      description: "Comprehensive financial guidance and investment facilitation",
      points: [
        "Access to export credit facilities",
        "Grant identification and application",
        "Development finance partnerships",
        "Financial planning and advisory",
      ],
      image: "/financial-planning-business-growth.jpg",
    },
    {
      title: "Capacity Building",
      slug: "capacity-building",
      icon: "📚",
      description: "Strengthen organizational capabilities and skills",
      points: [
        "Leadership development programs",
        "Compliance and governance training",
        "Digital transformation support",
        "Team capability assessment",
      ],
      image: "/legal-compliance-documentation.jpg",
    },
  ]

  const handleMobileMenuClose = () => setMobileMenuOpen(false)

  return (
    <main className="w-full">
      {/* Navigation - Enhanced for mobile with hamburger menu */}
      <nav className="fixed top-0 w-full bg-[#F8F5EF] border-b border-[#E8E4D9] z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <img src="/sera-logo.png" alt="Sera Access Markets Logo" className="h-12 sm:h-14 w-auto" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <div className="relative group">
              <button className="flex items-center gap-2 text-[#1E1E1E] hover:text-[#7A1E1E] transition font-medium text-sm lg:text-base">
                Services
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
              </button>

              {/* Services Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-56 bg-white border border-[#E8E4D9] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                <Link
                  href="/services/market-support"
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-[#F8F5EF] hover:text-[#7A1E1E] transition"
                >
                  Market Support
                </Link>
                <Link
                  href="/services/trade-facilitation"
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-[#F8F5EF] hover:text-[#7A1E1E] transition"
                >
                  Trade Facilitation & Expansion
                </Link>
                <Link
                  href="/services/b2b-b2g-matchmaking"
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-[#F8F5EF] hover:text-[#7A1E1E] transition"
                >
                  B2B and B2G Matchmaking
                </Link>
                <Link
                  href="/services/investment-support"
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-[#F8F5EF] hover:text-[#7A1E1E] transition"
                >
                  Investment Support
                </Link>
                <Link
                  href="/services/capacity-building"
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-[#F8F5EF] hover:text-[#7A1E1E] transition"
                >
                  Capacity Building
                </Link>
              </div>
            </div>

            <a
              href="#why-uganda"
              className="text-[#1E1E1E] hover:text-[#7A1E1E] transition font-medium text-sm lg:text-base"
            >
              Why Uganda
            </a>
            <a
              href="#sectors"
              className="text-[#1E1E1E] hover:text-[#7A1E1E] transition font-medium text-sm lg:text-base"
            >
              Sectors
            </a>
            <Button
              onClick={() => setShowConsultationForm(true)}
              size="sm"
              className="bg-[#7A1E1E] hover:bg-[#5A1515] text-white font-semibold whitespace-nowrap"
            >
              Request Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#7A1E1E] p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Slide-down menu for mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#E8E4D9] animate-in fade-in slide-in-from-top-2">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="block w-full text-left text-[#1E1E1E] hover:text-[#7A1E1E] transition font-medium py-2"
              >
                <div className="flex items-center justify-between">
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </button>
              {servicesDropdownOpen && (
                <div className="pl-4 space-y-2 border-l border-[#E8E4D9]">
                  <Link
                    href="/services/market-support"
                    onClick={handleMobileMenuClose}
                    className="block text-[#1E1E1E] hover:text-[#7A1E1E] transition py-1"
                  >
                    Market Support
                  </Link>
                  <Link
                    href="/services/trade-facilitation"
                    onClick={handleMobileMenuClose}
                    className="block text-[#1E1E1E] hover:text-[#7A1E1E] transition py-1"
                  >
                    Trade Facilitation & Expansion
                  </Link>
                  <Link
                    href="/services/b2b-b2g-matchmaking"
                    onClick={handleMobileMenuClose}
                    className="block text-[#1E1E1E] hover:text-[#7A1E1E] transition py-1"
                  >
                    B2B and B2G Matchmaking
                  </Link>
                  <Link
                    href="/services/investment-support"
                    onClick={handleMobileMenuClose}
                    className="block text-[#1E1E1E] hover:text-[#7A1E1E] transition py-1"
                  >
                    Investment Support
                  </Link>
                  <Link
                    href="/services/capacity-building"
                    onClick={handleMobileMenuClose}
                    className="block text-[#1E1E1E] hover:text-[#7A1E1E] transition py-1"
                  >
                    Capacity Building
                  </Link>
                </div>
              )}

              <a
                href="#why-uganda"
                onClick={handleMobileMenuClose}
                className="block text-[#1E1E1E] hover:text-[#7A1E1E] transition font-medium py-2"
              >
                Why Uganda
              </a>
              <a
                href="#sectors"
                onClick={handleMobileMenuClose}
                className="block text-[#1E1E1E] hover:text-[#7A1E1E] transition font-medium py-2"
              >
                Sectors
              </a>
              <Button
                onClick={() => {
                  setShowConsultationForm(true)
                  handleMobileMenuClose()
                }}
                className="w-full bg-[#7A1E1E] hover:bg-[#5A1515] text-white font-semibold"
              >
                Request Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Mobile-first responsive layout */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 bg-gradient-to-br from-[#7A1E1E] to-[#5A1515] text-[#F8F5EF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
                Invest. Grow. Expand.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-light mb-8 sm:mb-12 text-balance leading-relaxed">
                Sera Access Markets equips Ugandan businesses and investors with the support, partnerships, and
                strategic guidance needed to unlock regional and global market opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Button
                  onClick={() => setShowConsultationForm(true)}
                  size="lg"
                  className="bg-[#D4AD57] hover:bg-[#C49A47] text-[#1E1E1E] font-semibold px-8 w-full sm:w-auto"
                >
                  Request Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#D4AD57] text-[#D4AD57] hover:bg-[#D4AD57] hover:text-[#7A1E1E] font-semibold px-8 bg-transparent w-full sm:w-auto"
                >
                  Partner With Us
                </Button>
              </div>
            </div>
            <div className="hidden md:block rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/uganda-business-growth-investment-market.jpg"
                alt="Uganda business growth and investment"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1E1E] mb-4 sm:mb-6 text-balance text-center">
            What We Do
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#1E1E1E] max-w-3xl leading-relaxed text-center mx-auto">
            We provide investment advisory, market expansion support, export facilitation, business registration,
            compliance support, and access to financing. Our mission is to strengthen Ugandan enterprises and connect
            them to high-value markets.
          </p>
        </div>
      </section>

      {/* Services Overview - Updated modern grid layout */}
      <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#F8F5EF] to-[#F4F0E8]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1E1E] mb-4 text-center">
              Our Services
            </h3>
            <p className="text-center text-[#1E1E1E] text-base sm:text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your business growth and market access across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, idx) => (
              <Link href={`/services/${service.slug}`} key={idx} className="group">
                <Card className="p-0 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col hover:-translate-y-1">
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-[#7A1E1E] to-[#5A1515]">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7A1E1E]/90 via-[#7A1E1E]/40 to-transparent flex items-center justify-center">
                      <span className="text-5xl">{service.icon}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#7A1E1E] mb-2 group-hover:text-[#5A1515] transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-[#1E1E1E] text-sm mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.points.slice(0, 3).map((point, pidx) => (
                          <li key={pidx} className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-[#D4AD57] rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-[#1E1E1E] text-xs sm:text-sm leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full py-3 px-4 bg-[#D4AD57] text-[#7A1E1E] font-semibold rounded-lg hover:bg-[#7A1E1E] hover:text-[#D4AD57] transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Uganda - Tabbed Data Section - Responsive tab layout */}
      <section id="why-uganda" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#7A1E1E]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4AD57] mb-8 sm:mb-12 text-center">
            Why Uganda
          </h2>

          {/* Tabs - Scrollable on mobile, wrapping on tablet */}
          <div className="flex gap-2 mb-8 sm:mb-12 justify-center flex-wrap lg:flex-nowrap overflow-x-auto pb-2 sm:pb-0">
            {[
              { id: "economic", label: "Economic Indicators" },
              { id: "human", label: "Human Capital" },
              { id: "market", label: "Regional & Global Access" },
              { id: "incentives", label: "Investment Incentives" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[#D4AD57] text-[#7A1E1E]"
                    : "bg-[#5A1515] text-[#D4AD57] hover:bg-[#6A1818]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content - 1 col mobile, 2 col tablet/desktop */}
          <div className="bg-white rounded-lg p-6 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {tabContent[activeTab as keyof typeof tabContent].map((item, idx) => (
                <div key={idx} className="border-l-4 border-[#7A1E1E] pl-4 sm:pl-6">
                  <p className="text-[#7A1E1E] font-semibold mb-2 text-sm sm:text-base">{item.label}</p>
                  <p className="text-[#1E1E1E] text-base sm:text-lg font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Support - 1 col mobile, 2 col tablet, 4 col desktop */}
      <section id="sectors" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F9FFFF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E8C86] mb-8 sm:mb-12 text-center">
            Sectors We Support
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {sectors.map((sector, idx) => (
              <Link key={idx} href={`/sectors/${sector.slug}`}>
                <div
                  onMouseEnter={() => setHoveredSector(idx)}
                  onMouseLeave={() => setHoveredSector(null)}
                  className="relative h-56 sm:h-64 lg:h-72 rounded-lg overflow-hidden cursor-pointer group"
                >
                  <img
                    src={sector.image || "/placeholder.jpg"}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

                  <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                    <div className="text-2xl sm:text-3xl lg:text-4xl">{sector.icon}</div>

                    <div>
                      <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-[#7ED9C2] mb-2">
                        {sector.title}
                      </h3>

                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          hoveredSector === idx ? "opacity-100 max-h-32" : "opacity-0 max-h-0"
                        }`}
                      >
                        <p className="text-[#F9FFFF] text-xs sm:text-sm leading-relaxed">{sector.description}</p>
                      </div>
                    </div>

                    <div
                      className={`transition-all duration-300 transform ${
                        hoveredSector === idx ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                      }`}
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#7ED9C2]" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Ecosystem - Responsive grid layout */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#F9FFFF] to-[#E8FAF7]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E8C86] mb-4 sm:mb-6">
            Partnership Ecosystem
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#0F2E2C] max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12">
            We collaborate with government trade agencies, logistics providers, financial institutions, incubators, and
            global buyer networks to support business growth and market participation.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {[
              { name: "Government", icon: "🏛️" },
              { name: "Finance", icon: "💰" },
              { name: "Logistics", icon: "🚚" },
              { name: "Buyers", icon: "👥" },
              { name: "Incubators", icon: "🚀" },
            ].map((partner, idx) => (
              <div
                key={idx}
                className="w-full h-24 sm:h-28 lg:h-32 bg-white rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transition text-[#0F2E2C] font-semibold border border-[#E8FAF7]"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">{partner.icon}</div>
                <p className="text-xs sm:text-sm text-center px-2">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact - Responsive image layout */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#0E8C86] to-[#065F5B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="hidden md:block rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/african-business-impact-growth-community.jpg"
                alt="Business impact and community growth"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="text-[#F9FFFF]">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Impact</h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                Our work increases SME export participation, expands investment flows, strengthens value chains, and
                positions Uganda competitively in regional and global trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive form layout */}
      <section id="cta" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F9FFFF]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E8C86] mb-3 sm:mb-4 text-center text-balance">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#0F2E2C] text-center mb-8 sm:mb-12">
            Whether you are an investor or a business seeking to grow, our advisory team is ready to support your
            expansion journey.
          </p>

          <form onSubmit={handleFormSubmit} className="bg-white rounded-lg shadow-lg p-6 sm:p-12 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-[#0F2E2C] font-semibold mb-2 text-sm sm:text-base">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E8C86] text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[#0F2E2C] font-semibold mb-2 text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E8C86] text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-[#0F2E2C] font-semibold mb-2 text-sm sm:text-base">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E8C86] text-sm sm:text-base"
                  placeholder="+256..."
                />
              </div>
              <div>
                <label className="block text-[#0F2E2C] font-semibold mb-2 text-sm sm:text-base">
                  Business/Organization
                </label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E8C86] text-sm sm:text-base"
                  placeholder="Your business name"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#0F2E2C] font-semibold mb-2 text-sm sm:text-base">Brief Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E8C86] resize-none text-sm sm:text-base"
                placeholder="Tell us about your expansion plans..."
              ></textarea>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#0E8C86] hover:bg-[#065F5B] text-[#F9FFFF] font-semibold py-2 sm:py-3 text-base sm:text-lg"
            >
              Request Consultation
            </Button>
          </form>
        </div>
      </section>

      {/* Footer - Responsive footer layout */}
      <footer className="bg-[#0E8C86] text-[#F9FFFF] py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Sera Access Markets</h3>
              <p className="text-[#7ED9C2] font-semibold text-sm sm:text-base">Unlocking Growth in Uganda</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-[#7ED9C2] text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <a href="#services" className="hover:text-[#7ED9C2] transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#why-uganda" className="hover:text-[#7ED9C2] transition">
                    Market Data
                  </a>
                </li>
                <li>
                  <a href="#sectors" className="hover:text-[#7ED9C2] transition">
                    Sectors
                  </a>
                </li>
                <li>
                  <a href="#cta" className="hover:text-[#7ED9C2] transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-[#7ED9C2] text-sm sm:text-base">Contact</h4>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="flex-shrink-0" />
                  <a href="mailto:info@seraaccessmarkets.com" className="hover:text-[#7ED9C2] transition break-all">
                    info@seraaccessmarkets.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0" />
                  <span>+256 (placeholder)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#065F5B] pt-6 sm:pt-8 text-center text-[#7ED9C2] text-sm sm:text-base">
            <p>&copy; 2025 Sera Access Markets. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Consultation Modal - Responsive modal */}
      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4 overflow-y-auto">
          <Card className="w-full max-w-2xl my-8">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E8C86]">Request Consultation</h2>
                <button
                  onClick={() => setShowConsultationForm(false)}
                  className="text-[#3A5452] hover:text-[#0F2E2C] text-2xl flex-shrink-0"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[#0F2E2C] font-semibold mb-2 text-sm sm:text-base">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E8C86] text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0F2E2C] font-semibold mb-2 text-sm sm:text-base">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E8C86] text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[#0F2E2C] font-semibold mb-2 text-sm sm:text-base">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E8C86] text-sm sm:text-base"
                      placeholder="+256..."
                    />
                  </div>
                  <div>
                    <label className="block text-[#0F2E2C] font-semibold mb-2 text-sm sm:text-base">
                      Business/Organization
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E8C86] text-sm sm:text-base"
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#0F2E2C] font-semibold mb-2 text-sm sm:text-base">
                    Tell us about your goals
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={5}
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E8C86] resize-none text-sm sm:text-base"
                    placeholder="Describe your business goals and how we can help..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 bg-[#0E8C86] hover:bg-[#065F5B] text-[#F9FFFF] font-semibold py-2 sm:py-3"
                  >
                    Submit Consultation Request
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setShowConsultationForm(false)}
                    size="lg"
                    variant="outline"
                    className="flex-1 border-[#7ED9C2] text-[#0E8C86] hover:bg-[#E8FAF7] py-2 sm:py-3"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      )}
    </main>
  )
}
