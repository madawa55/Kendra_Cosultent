import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Building2, Globe2, MapPin, ShieldCheck, Users } from "lucide-react";
import { Shell } from "@/components/layout/Shell";
import mdPhoto from "@assets/Managin_director_1784638489447.jpeg";
import kendraLogo from "@assets/kendra-logo-transparent.png";
import costPlanningImg from "@assets/01_Cost_Planning_and_Estimating.png";
import procurementImg from "@assets/02_Procurement_and_Tendering.png";
import commercialImg from "@assets/03_Commercial_and_Contract_Management.png";
import claimsImg from "@assets/04_Claims_and_Dispute_Management.png";
import contractorImg from "@assets/05_Contractor_Advisory_Services.png";
import academicImg from "@assets/06_Academic_Services_and_Research.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <Shell>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/80 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/attached_assets/generated_images/hero.jpg)' }}
        />
        
        <div className="container relative z-20 mx-auto px-4 md:px-6 lg:px-8 text-center text-white mt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="flex justify-center mb-6"
            >
              <img
                src={kendraLogo}
                alt="Kendra Consultants logo"
                className="w-75 md:w-96 h-auto"
              />
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight mb-6"
            >
              Built on Trust.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#9A6E1F]">
                Driven by Precision.
              </span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Delivering trusted construction consultancy across Sri Lanka, the Middle East and Australia, Kendra Consultants combines precision, expertise and integrity to provide world-class quantity surveying, commercial management and contract advisory services that bring certainty to every project.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/projects"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#9A6E1F] text-white font-semibold tracking-wider text-sm transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:-translate-y-1"
              >
                VIEW PORTFOLIO
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold tracking-wider text-sm transition-all hover:bg-white/20"
              >
                DISCUSS YOUR PROJECT
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar / Statistics */}
      <section className="bg-primary border-t border-white/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Globe2, value: "3", label: "Markets Served" },
              { icon: Building2, value: "6", label: "Core Service Areas" },
              { icon: ShieldCheck, value: "100%", label: "Commitment to Excellence" },
              { icon: Users, value: "24/7", label: "Client Support" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-secondary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/60 tracking-wider uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-bold tracking-[0.2em] text-sm uppercase mb-4">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Delivering Confidence at Every Stage</h3>
            <p className="text-muted-foreground leading-relaxed">
              We provide integrated quantity surveying, commercial management, procurement, contract advisory and claims consultancy services across Sri Lanka, the Middle East and Australia. Combining technical expertise, commercial acumen and a commitment to ethical excellence, we support clients in making strategic decisions, optimizing project performance, mitigating risks, and delivering sustainable value throughout the project lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-6 gap-6 items-center mb-16">
            {[
              { src: costPlanningImg, alt: "Cost Planning and Estimating" },
              { src: procurementImg, alt: "Procurement and Tendering" },
              { src: commercialImg, alt: "Commercial and Contract Management" },
              { src: claimsImg, alt: "Claims and Dispute Management" },
              { src: contractorImg, alt: "Contractor Advisory Services" },
              { src: academicImg, alt: "Academic Services and Research" },
            ].map((img, i) => (
              <div key={i} className="relative">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[-12px] top-1/2 -translate-y-1/2 h-3/4 w-px bg-foreground/20"
                  />
                )}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors group"
            >
              Explore all services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-secondary font-bold tracking-[0.2em] text-sm uppercase mb-4">Global Reach</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">"Connecting Expertise Across Markets"</h3>
              <p className="text-white/70 leading-relaxed mb-8 text-lg">
                With a strategic presence across Sri Lanka, the Middle East and Australia, we bring trusted expertise, commercial insight and professional excellence to support clients in delivering successful projects across international markets.
              </p>
              
              <div className="space-y-6">
                {[
                  { country: "Sri Lanka", city: "Colombo", role: "Head Office" },
                  { country: "Middle East", city: "Dubai,United Arab Emirates"},
                  { country: "Australia", city: "" }
                ].map((office, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-white/10 bg-white/5 backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-secondary" />
                    <div>
                      <h4 className="font-semibold text-lg">{office.country}</h4>
                      <p className="text-sm text-white/50">{office.city}{office.role && ` — ${office.role}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[500px] bg-white/5 border border-white/10 rounded-lg p-8 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <Globe2 className="w-96 h-96 text-white" strokeWidth={0.5} />
              </div>
              <div className="relative z-10 text-center">
                <h4 className="font-serif text-3xl italic mb-4">"Precision Beyond Borders"</h4>
                <p className="text-secondary">— Kendra Consultants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border shadow-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Need expert guidance for your project?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every project presents unique challenges and opportunities. Connect with our team to discuss how Kendra Consultants can provide tailored solutions and strategic support aligned with your project objectives.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-primary text-white font-semibold tracking-wider text-sm transition-all hover:bg-primary/90"
            >
              CONSULT KENDRA
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
