import { EmailLink, Tel, TelLink } from "@/lib/contact-info";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero / Page Header */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/steel-bg.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Get in Touch
            <span className="block text-primary mt-2">Your Project Starts Here</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Request quotes, discuss technical specifications, or arrange mill visits — our team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Contact Section – Form + Contact Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left: Contact Form */}
            <div className="bg-card p-8 md:p-10 rounded-xl border border-border shadow-lg">
              <h2 className="text-3xl md:text-4xl font-black mb-8 text-foreground">
                Send Us Your Inquiry
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-muted-foreground">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                      placeholder="Acme Construction Ltd"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                      placeholder="john@acme.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-muted-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-2 text-muted-foreground">
                    Project Type / Product Interest
                  </label>
                  <select
                    id="project"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                  >
                    <option value="">Select one...</option>
                    <option value="structural">Structural Steel (I-beams, H-beams, etc.)</option>
                    <option value="plates">Plates & Sheets (wear-resistant, high-strength)</option>
                    <option value="pipes">Pipes & Tubes</option>
                    <option value="custom">Custom Fabrication / Processing</option>
                    <option value="rebar">Rebar & Wire Rod</option>
                    <option value="sustainable">Sustainable / Low-Carbon Steel</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">
                    Message / Project Details *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                    placeholder="Please describe your project requirements, quantities, standards (EN/ASTM/etc.), delivery location, and timeline..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 rounded-lg text-lg font-bold transition shadow-lg"
                >
                  Submit Inquiry
                </button>
              </form>

              <p className="mt-6 text-sm text-muted-foreground text-center">
                We respect your privacy — your information is used only for this inquiry.
              </p>
            </div>

            {/* Right: Contact Details + Locations */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-black mb-6">Direct Contact</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Technical Sales & Quotes</h3>
                    <p className="text-lg">
                      <a href="tel:+18005551234" className="hover:text-primary transition">
                        +1 (800) 555-1234
                      </a>
                      <br />
                      <a href="mailto:sales@premiumsteelsolutions.com" className="hover:text-primary transition">
                        sales@premiumsteelsolutions.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Engineering & Technical Support</h3>
                    <p className="text-lg">
                      <a href="tel:+18005556789" className="hover:text-primary transition">
                        +1 (800) 555-6789
                      </a>
                      <br />
                      <a href="mailto:tech@premiumsteelsolutions.com" className="hover:text-primary transition">
                        tech@premiumsteelsolutions.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">General / Accounts</h3>
                    <p className="text-lg">
                      <a href="tel:+18005554321" className="hover:text-primary transition">
                        +1 (800) 555-4321
                      </a>
                      <br />
                      <a href="mailto:info@premiumsteelsolutions.com" className="hover:text-primary transition">
                        info@premiumsteelsolutions.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-3xl font-black mb-6">Our Locations</h2>
                <div className="space-y-6">
                  {[
                    {
                      city: "Headquarters & Main Mill",
                      address: "123 Steel Avenue, Industrial Park\nPittsburgh, PA 15222, USA",
                    },
                    {
                      city: "European Service Center",
                      address: "Stahlstraße 45\n40221 Düsseldorf, Germany",
                    },
                    {
                      city: "Asia-Pacific Office",
                      address: "No. 88 Metallurgy Road\nShanghai Pudong, China 200120",
                    },
                  ].map((loc) => (
                    <div key={loc.city} className="bg-muted/50 p-6 rounded-lg border border-border">
                      <h3 className="text-xl font-bold mb-2">{loc.city}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{loc.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Map Placeholder / Embed */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Our main office</h2>
          <div className="bg-muted h-96 rounded-xl flex items-center justify-center text-2xl text-muted-foreground border border-border">
            {/* Replace with real Google Maps / Leaflet embed */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d420.02671689707813!2d51.66308579539633!3d32.62713118217338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snl!4v1772194356700!5m2!1sen!2snl" className="w-full h-full rounded-lg" title="Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <p className="mt-6 text-muted-foreground">
            Multiple mill and service center locations worldwide — contact us for the nearest facility.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Ready to Discuss Your Next Steel Requirement?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Submit the form above or reach out directly — our specialists are standing by to assist with pricing, samples, certifications, and logistics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href={EmailLink}
              className="bg-background text-foreground hover:bg-muted px-10 py-5 rounded-lg text-lg font-bold transition shadow-lg"
            >
              Email Sales Team
            </a>
            <a
              href={TelLink}
              className="border-2 border-background hover:bg-background/10 px-10 py-5 rounded-lg text-lg font-bold transition"
            >
              Call Now: {Tel}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
