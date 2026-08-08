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
            Kendra Consultants is a globally trusted consultancy firm committed to shaping the future of the built environment through integrity, precision and professional excellence.
          </p>
        </div>
      </section>

      {/* MD Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-fit"
            >
              <div className="absolute inset-0 bg-secondary translate-x-4 translate-y-4" />
              <img 
                src={mdPhoto} 
                alt="Kaushala Fonseka, Founder & Managing Director" 
                className="relative z-10 w-80 md:w-96 h-auto border border-border transition-all duration-500"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-secondary font-bold tracking-[0.2em] text-sm uppercase mb-4">Leadership</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Kaushala Fonseka</h3>
              <p className="text-muted-foreground text-lg mb-8 italic">Founder & Managing Director</p>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  Kendra Consultants was founded with a vision to establish a trusted consultancy that delivers professional excellence, integrity and value across the built environment. The firm is driven by a commitment to precision, ethical practice and creating meaningful outcomes for clients.
                  </p>
                  <p>
                    Supported by a team committed to professional excellence, Kendra Consultants applies industry knowledge, commercial insight and collaborative approaches to deliver informed decisions and value-driven outcomes throughout the project lifecycle.
                    </p>
                <p>
                  Through Kendra Consultants, the focus remains on embracing international best practices, strengthening industry standards and contributing to a sustainable and progressive built environment.
                </p>                
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
                To deliver high-quality quantity surveying, commercial management, contract advisory and construction consultancy services through expert knowledge, commercial insight and strategic solutions. We are committed to providing trusted and ethical advice, building lasting client relationships and maintaining the highest standards of integrity, competence and excellence throughout every stage of the project lifecycle.
              </p>
            </div>
            <div className="p-8 bg-primary text-white shadow-xl -translate-y-4">
              <Eye className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h4 className="font-serif text-2xl font-bold mb-4 text-white">Our Vision</h4>
              <p className="text-white/80 leading-relaxed">
                To be a globally trusted leader in shaping the future of the built environment.
              </p>
            </div>
            <div className="p-8">
              <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h4 className="font-serif text-2xl font-bold mb-4">Our Values</h4>
              <p className="text-muted-foreground leading-relaxed">
                Absolute Precision. Unwavering Ethics. Commercial Insight. We believe in transparency, professional integrity and proactive risk management, delivering trusted advice and strategic solutions that create lasting value for our clients and contribute to a sustainable built environment.
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
                city: "Colombo (Head Office)"               
              
              },
              {
                country: "Middle East",
                city: "Dubai, United Arab Emirates"                
              },
              {
                country: "Australia"              
              }
            ].map((office, idx) => (
              <div key={idx} className="border border-border p-8 hover:border-secondary transition-colors group">
                <MapPin className="w-8 h-8 text-primary mb-6 group-hover:text-secondary transition-colors" />
                <h4 className="font-serif text-2xl font-bold mb-2">{office.country}</h4>
                <p className="text-sm font-semibold text-secondary mb-4 uppercase tracking-wider">{office.city}</p>
                <div className="text-muted-foreground space-y-2">              
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}