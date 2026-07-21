import { motion } from "framer-motion";
import { Shell } from "@/components/layout/Shell";
import { Target, Eye, ShieldCheck, MapPin } from "lucide-react";
import mdPhoto from "@assets/Managin_director_1784638489447.jpeg";

export default function About() {
  return (
    <Shell>
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-16 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Us</h1>
          <p className="text-lg text-white/80 font-light leading-relaxed">
            Kendra Consultants is a premium quantity surveying and construction consultancy, delivering unparalleled commercial certainty to complex projects worldwide.
          </p>
        </div>
      </section>

      {/* MD Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-secondary translate-x-4 translate-y-4" />
              <img 
                src={mdPhoto} 
                alt="Ms. Kendra Fernando, Managing Director" 
                className="relative z-10 w-full h-[600px] object-cover border border-border grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-secondary font-bold tracking-[0.2em] text-sm uppercase mb-4">Leadership</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Ms. Kendra Fernando</h3>
              <p className="text-muted-foreground text-lg mb-8 italic">Managing Director & Principal Consultant</p>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  With over two decades of international experience across the Middle East, Australia, and South Asia, Kendra Fernando founded Kendra Consultants to address a critical gap in the market: the need for absolute commercial precision combined with unyielding integrity.
                </p>
                <p>
                  A chartered quantity surveyor by profession, Kendra has led the commercial management of multi-billion dollar mega-projects, from advanced infrastructure hubs in Doha to premium commercial high-rises in Melbourne and Colombo.
                </p>
                <p>
                  Her philosophy is simple: a project's success is not just built on concrete and steel, but on the rigorous management of contracts, costs, and claims. Under her leadership, the firm has grown into a trusted advisor for developers, contractors, and governments worldwide.
                </p>
              </div>
              
              <div className="mt-10">
                <img 
                  src="/attached_assets/WhatsApp_Image_2026-07-19_at_08.19.03_1784638489447.jpeg" 
                  alt="Signature Logo" 
                  className="h-16 object-contain opacity-50 grayscale"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <Target className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h4 className="font-serif text-2xl font-bold mb-4">Our Mission</h4>
              <p className="text-muted-foreground leading-relaxed">
                To protect our clients' commercial interests through rigorous cost control, strategic procurement, and expert contract administration across the project lifecycle.
              </p>
            </div>
            <div className="p-8 bg-primary text-white shadow-xl -translate-y-4">
              <Eye className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h4 className="font-serif text-2xl font-bold mb-4 text-white">Our Vision</h4>
              <p className="text-white/80 leading-relaxed">
                To be the world's most trusted construction consultancy, setting the global standard for precision, integrity, and dispute avoidance in engineering.
              </p>
            </div>
            <div className="p-8">
              <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h4 className="font-serif text-2xl font-bold mb-4">Our Values</h4>
              <p className="text-muted-foreground leading-relaxed">
                Absolute precision. Unwavering ethics. Commercial vigilance. We believe in transparency and proactive risk management above all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-bold tracking-[0.2em] text-sm uppercase mb-4">International Presence</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Where We Operate</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                country: "Sri Lanka",
                city: "Colombo (HQ)",
                address: "Level 12, Parkland Building, 33 Park Street, Colombo 02",
                phone: "+94 11 234 5678"
              },
              {
                country: "Qatar",
                city: "Doha",
                address: "Office 45, West Bay Commercial Centre, Diplomatic Area, Doha",
                phone: "+974 4423 8910"
              },
              {
                country: "Australia",
                city: "Melbourne",
                address: "Suite 8, Level 14, 333 Collins Street, Melbourne VIC 3000",
                phone: "+61 3 9876 5432"
              }
            ].map((office, idx) => (
              <div key={idx} className="border border-border p-8 hover:border-secondary transition-colors group">
                <MapPin className="w-8 h-8 text-primary mb-6 group-hover:text-secondary transition-colors" />
                <h4 className="font-serif text-2xl font-bold mb-2">{office.country}</h4>
                <p className="text-sm font-semibold text-secondary mb-4 uppercase tracking-wider">{office.city}</p>
                <div className="text-muted-foreground space-y-2">
                  <p>{office.address}</p>
                  <p className="font-medium text-foreground pt-4">{office.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
