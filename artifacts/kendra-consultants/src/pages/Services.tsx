import { motion } from "framer-motion";
import { Shell } from "@/components/layout/Shell";
import { Calculator, FileSignature, Scale, BookOpen, Briefcase, Handshake } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Calculator,
    title: "Cost Planning & Estimating",
    description: "Rigorous financial modeling and cost prediction from conceptual design to project completion. We ensure your budget is realistic, optimized, and strictly adhered to.",
    features: [
      "Feasibility estimates & cost modeling",
      "Detailed bills of quantities (BOQ)",
      "Value engineering & cost optimization",
      "Cash flow forecasting",
      "Life cycle costing"
    ]
  },
  {
    icon: Briefcase,
    title: "Procurement & Tendering",
    description: "Strategic procurement advice to secure the right contractors at the right price, minimizing risk and maximizing value for your capital investment.",
    features: [
      "Procurement strategy development",
      "Tender document preparation",
      "Tender evaluation & analysis",
      "Contractor negotiations",
      "Contract award recommendations"
    ]
  },
  {
    icon: FileSignature,
    title: "Commercial & Contract Management",
    description: "Proactive administration of construction contracts to protect your commercial interests, ensuring compliance and preventing financial leakage.",
    features: [
      "Contract administration",
      "Interim valuations & payment certification",
      "Variation & change order management",
      "Final account settlement",
      "Cost reporting & financial audits"
    ]
  },
  {
    icon: Scale,
    title: "Claims & Dispute Management",
    description: "Expert analysis and resolution of construction disputes. We prepare robust claims and provide strategic defense to protect you from unwarranted liabilities.",
    features: [
      "Delay & disruption analysis",
      "Loss and expense claims",
      "Extension of Time (EOT) claims",
      "Expert witness services",
      "Alternative dispute resolution support"
    ]
  },
  {
    icon: Handshake,
    title: "Contractor Advisory Services",
    description: "Specialized commercial support for main contractors and subcontractors to maximize profitability and ensure fair compensation for works executed.",
    features: [
      "Tender pricing & bidding support",
      "Subcontractor management",
      "Project cost control",
      "Claim preparation & negotiation",
      "Risk identification & mitigation"
    ]
  },
  {
    icon: BookOpen,
    title: "Academic Services & Research",
    description: "Contributing to the advancement of the quantity surveying profession through tailored academic programs, corporate training, and industry research.",
    features: [
      "Corporate training programs",
      "APC (Assessment of Professional Competence) mentoring",
      "Industry trend analysis",
      "Bespoke research reports",
      "Best practice workshops"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Services() {
  return (
    <Shell>
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-16 text-white border-b-4 border-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-lg text-white/80 font-light leading-relaxed">
            Comprehensive commercial solutions for the built environment. We engineer financial certainty across the entire project lifecycle.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="bg-card border border-border hover:border-secondary transition-all duration-300 hover:shadow-xl group flex flex-col h-full"
              >
                <div className="p-8 flex-1">
                  <service.icon className="w-12 h-12 text-primary mb-6 group-hover:text-secondary transition-colors" />
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mt-auto">
                    <h4 className="text-sm font-bold tracking-wider uppercase text-foreground mb-4">Key Deliverables</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-border group-hover:bg-secondary transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Need a bespoke commercial strategy?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every project presents unique risks and opportunities. Contact our senior partners to discuss a customized service package tailored to your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold tracking-wider text-sm transition-all hover:bg-primary/90"
          >
            CONSULT WITH US
          </Link>
        </div>
      </section>
    </Shell>
  );
}
