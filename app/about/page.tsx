// app/about/page.tsx
import { contactPath } from "@/lib/path-list";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero / Page Header */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/steel-bg.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            About Us
            <span className="block text-primary mt-2">Strength. Precision. Responsibility.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Premium steel partner for demanding projects worldwide — engineered quality since 1998.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-foreground">
              Over 25 Years of Steel Excellence
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 1998, we began as a regional supplier of structural steel and have grown into
                a trusted global partner for constructors, engineers, EPC contractors, and heavy industry
                leaders across five continents.
              </p>
              <p>
                Today we operate modern rolling mills, state-of-the-art fabrication facilities, and a
                tightly integrated supply chain — delivering high-performance steel products that meet
                or exceed EN, ASTM, JIS, API and other international standards.
              </p>
              <p>
                Our strength lies in combining metallurgical expertise, precise manufacturing, and a
                genuine commitment to sustainable steel production — helping our clients build safer,
                longer-lasting, and more environmentally responsible infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Strengths Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-5">What Defines Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Core principles that guide every heat, every cut, and every delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Uncompromising Quality",
                desc: "ISO 9001 certified processes • Full traceability • Mill test certificates standard on every order • Rigorous incoming & final inspection",
                icon: "🛡️",
              },
              {
                title: "Technical Partnership",
                desc: "Dedicated metallurgists and engineers support your project from design review through delivery — value engineering included",
                icon: "🤝",
              },
              {
                title: "Sustainable Future",
                desc: "Up to 90% scrap-based production • Green hydrogen trials • Scope 1–3 carbon tracking • Responsible sourcing policy",
                icon: "🌱",
              },
              {
                title: "Global Reliability",
                desc: "On-time delivery track record >98% • Multimodal logistics network • Strategic mill & service center locations",
                icon: "🌍",
              },
              {
                title: "Innovation Driven",
                desc: "High-strength low-alloy grades • Advanced thermomechanical rolling • Continuous investment in production technology",
                icon: "⚙️",
              },
              {
                title: "Customer First",
                desc: "Transparent communication • Flexible order quantities • Rapid quotation turnaround • Long-term partnership focus",
                icon: "⭐",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card p-8 rounded-xl border border-border hover:shadow-xl hover:border-primary/40 transition group"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Memberships */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12">Certified Strength You Can Trust</h2>

          <div className="grid md:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {[
              "ISO 9001:2015",
              "EN 1090-1/2 Execution Class 4",
              "CE Marking",
              "ASTM / API Compliant",
              "ISO 14001 Environmental",
              "ISO 45001 Occupational Health",
              "ResponsibleSteel Member",
              "Full Traceability & MTC",
            ].map((cert) => (
              <div
                key={cert}
                className="bg-card p-8 rounded-xl border border-border text-xl font-bold"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Partner with a Steel Company That Performs
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Speak with our technical team about your next project — receive expert advice, accurate
            pricing, and reliable delivery timelines.
          </p>

          <Link
            href={contactPath}
            className="inline-block bg-background text-foreground hover:bg-muted px-12 py-6 rounded-lg text-2xl font-bold shadow-2xl transition"
          >
            Contact Our Team Today
          </Link>
        </div>
      </section>
    </div>
  );
}