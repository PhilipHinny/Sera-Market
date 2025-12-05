import { use } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone } from "lucide-react"

const sectorsData = {
  agribusiness: {
    title: "Agribusiness",
    icon: "🌾",
    description:
      "Coffee, tea, grains, spices - Premium agricultural exports with certified quality standards and international compliance support.",
    fullDescription: `Uganda's agribusiness sector is a cornerstone of the economy and a major driver of export revenue. We support businesses in this sector through comprehensive market preparation, quality assurance, and international buyer connections.`,
    opportunities: [
      "Growing global demand for specialty coffee and tea",
      "Premium market positioning for organic and fair-trade certified products",
      "Access to EU and fair-trade certification support",
      "Linkages with international buyers in specialty and commodity markets",
      "Export protocols for African and global markets",
    ],
    requirements: [
      "Quality certifications (ISO, Food Safety, Fair Trade)",
      "Consistent supply capability for export volumes",
      "Compliance with international phytosanitary standards",
      "Traceability systems for high-value exports",
    ],
    partners: [
      "Uganda Coffee Development Authority",
      "International buyers in EU, UAE, and Asia",
      "Certification bodies (Fair Trade, Organic)",
      "Logistics and shipping partners",
    ],
    image: "/ugandan-agribusiness-coffee-tea-export.jpg",
  },
  "processed-foods-beverages": {
    title: "Processed Foods & Beverages",
    icon: "🍲",
    description:
      "Value-added food products, snacks, and beverages meeting international food safety and packaging standards.",
    fullDescription: `The processed foods and beverages sector offers significant growth potential through value addition and branding. Uganda has emerging manufacturers in snacks, beverages, and specialty food products targeting regional and international markets.`,
    opportunities: [
      "Growing African middle class demand for premium packaged foods",
      "Export opportunities to regional African markets via AfCFTA",
      "International buyer networks for specialty beverages and snacks",
      "Compliance support for European and US food standards",
      "Brand development and packaging innovation support",
    ],
    requirements: [
      "HACCP and food safety certifications",
      "Compliant manufacturing facilities meeting export standards",
      "Proper labeling and packaging infrastructure",
      "Regulatory compliance with target market food laws",
    ],
    partners: [
      "Food and Drug Authority (Uganda)",
      "Packaging and labeling suppliers",
      "International food safety certification bodies",
      "Regional and international distributors",
    ],
    image: "/ugandan-processed-foods-beverages-export.jpg",
  },
  "handicrafts-creative": {
    title: "Handicrafts & Creative Industries",
    icon: "🎨",
    description:
      "Artisanal products, design-led goods, and cultural exports with authentic storytelling and global positioning.",
    fullDescription: `Uganda's rich cultural heritage and artisanal traditions create unique opportunities in the global handicrafts and creative industries market. We support artisans and creative entrepreneurs in positioning their products for international markets.`,
    opportunities: [
      "Growing global demand for authentic African crafts and design",
      "Premium market positioning for handmade and sustainable products",
      "E-commerce platforms and direct-to-consumer channels",
      "Fair-trade certification and impact storytelling",
      "Collaboration with international designers and retailers",
    ],
    requirements: [
      "Consistent quality and production capacity",
      "Sustainable and ethical production practices",
      "Strong branding and storytelling capabilities",
      "Compliance with international safety standards for products",
    ],
    partners: [
      "International craft retailers and e-commerce platforms",
      "Fair-trade organizations and impact investors",
      "Design and branding consultants",
      "Global logistics and fulfillment partners",
    ],
    image: "/ugandan-handicrafts-creative-industries-artisans.jpg",
  },
  "natural-products": {
    title: "Natural Products",
    icon: "🌿",
    description:
      "Honey, shea butter, essential oils, and organic natural products for the premium wellness and beauty markets.",
    fullDescription: `Uganda's abundant natural resources and favorable climate create excellent conditions for natural product production. The global wellness and beauty market is growing rapidly, with strong demand for authentic, sustainably-sourced natural products.`,
    opportunities: [
      "Premium pricing for organic and sustainably-sourced natural products",
      "Growing wellness and beauty market globally",
      "Certification support for organic and fair-trade standards",
      "Direct buyer linkages in Europe, North America, and Asia",
      "Private label and bulk supply opportunities for international brands",
    ],
    requirements: [
      "Organic certification and sustainable harvesting practices",
      "GMP and safety certifications for beauty/wellness products",
      "Proper storage and preservation infrastructure",
      "Quality testing and traceability systems",
    ],
    partners: [
      "Organic certification bodies",
      "International beauty and wellness retailers",
      "Raw material suppliers and aggregators",
      "Quality testing laboratories",
    ],
    image: "/ugandan-natural-products-honey-shea-essential-oils.jpg",
  },
}

export default function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const sector = sectorsData[resolvedParams.slug as keyof typeof sectorsData]

  if (!sector) {
    return (
      <div className="min-h-screen bg-[#F8F5EF] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-[#7A1E1E] mb-4">Sector Not Found</h1>
          <Link href="/">
            <Button className="bg-[#D4AD57] hover:bg-[#C49A47] text-[#7A1E1E] font-semibold">Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="w-full bg-[#F8F5EF]">
      {/* Header Navigation */}
      <nav className="fixed top-0 w-full bg-[#F8F5EF] border-b border-[#E8E5DC] z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#7A1E1E] hover:text-[#D4AD57] transition">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back</span>
          </Link>
          <div className="text-2xl font-bold text-[#7A1E1E]">
            <span className="font-serif">Sera</span> Access Markets
          </div>
          <div className="w-24"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#7A1E1E] to-[#5A1818] text-[#F8F5EF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{sector.icon}</span>
            <h1 className="font-serif text-5xl font-bold">{sector.title}</h1>
          </div>
          <p className="text-xl leading-relaxed max-w-2xl">{sector.description}</p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <img
            src={sector.image || "/placeholder.svg"}
            alt={sector.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Full Description */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-[#7A1E1E] mb-6">About This Sector</h2>
          <p className="text-lg text-[#1E1E1E] leading-relaxed">{sector.fullDescription}</p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#F8F5EF] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-[#7A1E1E] mb-8">Export Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sector.opportunities.map((opp, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border-l-4 border-[#D4AD57] shadow-md">
                <p className="text-[#1E1E1E] text-lg">{opp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-6 bg-[#7A1E1E]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-[#D4AD57] mb-8">Export Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sector.requirements.map((req, idx) => (
              <div key={idx} className="bg-[#5A1818] p-6 rounded-lg border-l-4 border-[#D4AD57]">
                <p className="text-[#F8F5EF] text-lg">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-[#F8F5EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-[#7A1E1E] mb-8">Key Partners & Support</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sector.partners.map((partner, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#D4AD57]">
                <p className="text-[#1E1E1E] font-semibold text-lg">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#7A1E1E] text-[#F8F5EF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">Ready to Grow in This Sector?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Our team specializes in export preparation, buyer connections, and compliance support for{" "}
            {sector.title.toLowerCase()}. Let's discuss your specific goals and growth strategy.
          </p>
          <Link href="/#cta">
            <Button size="lg" className="bg-[#D4AD57] hover:bg-[#C49A47] text-[#7A1E1E] font-semibold px-10">
              Request Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] text-[#F8F5EF] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-3">Sera Access Markets</h3>
              <p className="text-[#D4AD57] font-semibold">Unlocking Growth in Uganda</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-[#D4AD57]">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#services" className="hover:text-[#D4AD57] transition">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#sectors" className="hover:text-[#D4AD57] transition">
                    All Sectors
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-[#D4AD57] transition">
                    Home
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-[#D4AD57]">Contact</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:info@seraaccessmarkets.com" className="hover:text-[#D4AD57] transition">
                    info@seraaccessmarkets.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+256 (placeholder)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#3A3A3A] pt-6 text-center text-[#D4AD57] text-sm">
            <p>&copy; 2025 Sera Access Markets. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
