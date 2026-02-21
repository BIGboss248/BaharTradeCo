import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gray-950 text-white overflow-hidden">
        {/* Background gradient + subtle texture */}
        <div className="absolute inset-0 bg-[url('/steel-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Premium Steel Solutions
              <span className="block text-amber-500">Engineered for Tomorrow</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
              High-strength structural steel, custom fabrication, sustainable production — serving construction, infrastructure, energy and heavy industry since 1998.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/contact"
                className="bg-amber-600 hover:bg-amber-500 px-10 py-5 rounded-lg text-lg font-bold transition shadow-lg"
              >
                Request a Quote
              </Link>
              <Link
                href="#products"
                className="border-2 border-white/40 hover:bg-white/10 px-10 py-5 rounded-lg text-lg font-bold transition backdrop-blur-sm"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "25+", label: "Years Experience" },
              { num: "180+", label: "Projects Completed" },
              { num: "50+", label: "Countries Served" },
              { num: "ISO 9001", label: "Certified Quality" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-black text-amber-500">{stat.num}</div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products / Services Grid */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-5">Our Steel Products & Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hot-rolled coils to high-performance structural sections and turn-key fabrication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Structural Steel",
                desc: "I-beams, H-beams, channels, angles – EN, ASTM, JIS standards",
                icon: "🏗️",
              },
              {
                title: "Steel Plates & Sheets",
                desc: "Wear-resistant, high-strength, boiler, shipbuilding grades",
                icon: "📏",
              },
              {
                title: "Custom Fabrication",
                desc: "Cutting, bending, welding, shot-blasting, painting – one-stop solution",
                icon: "🔧",
              },
              {
                title: "Steel Pipes & Tubes",
                desc: "Seamless, ERW, spiral welded – API, ASTM, DIN certified",
                icon: "⛓️",
              },
              {
                title: "Rebar & Wire Rod",
                desc: "Construction-grade reinforcement steel, drawn wire",
                icon: "🛠️",
              },
              {
                title: "Sustainable Steel",
                desc: "Low-carbon, recycled-content steel with full traceability",
                icon: "🌱",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:border-amber-200 transition group"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-5">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "SkyTower Business Center", loc: "Dubai, UAE", year: "2025" },
              { name: "Harbor Bridge Reconstruction", loc: "Lisbon, Portugal", year: "2024" },
              { name: "Wind Farm Foundations", loc: "North Sea, Denmark", year: "2025" },
            ].map((proj) => (
              <div key={proj.name} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-56 bg-gray-300 flex items-center justify-center text-6xl">🏭</div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{proj.name}</h3>
                  <p className="text-gray-600 mt-1">
                    {proj.loc} • {proj.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability / Green Steel */}
      <section id="sustainability" className="py-20 bg-gradient-to-br from-emerald-900 to-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Steel with Purpose</h2>
          <p className="text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
            We are committed to reducing carbon footprint — using up to 90% scrap in production,
            green hydrogen pilots, full CO₂ tracking per batch, and responsible sourcing.
          </p>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { val: "68%", label: "Average recycled content" },
              { val: "-42%", label: "CO₂ reduction vs 2018 baseline" },
              { val: "Scope 1–3", label: "Full carbon reporting" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-6xl font-black text-emerald-400">{item.val}</div>
                <p className="mt-4 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-amber-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Build with Strength?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact our technical sales team for mill test certificates, pricing, delivery schedules and custom solutions.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-gray-900 hover:bg-gray-800 px-12 py-6 rounded-lg text-2xl font-bold shadow-2xl transition"
          >
            Get in Touch Today
          </Link>
        </div>
      </section>
    </div>);
}
