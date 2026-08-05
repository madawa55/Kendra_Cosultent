import { motion } from "framer-motion";
import { Shell } from "@/components/layout/Shell";
import { Calculator, FileSignature, Scale, BookOpen, Briefcase, Handshake } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Calculator,
    title: "Cost Planning & Estimating",
    description: "Rigorous financial modelling and cost forecasting from project inception through completion. We help clients establish realistic budgets, optimise project costs, and maintain financial control throughout the project lifecycle.",
    features: [
      "Feasibility Cost Estimates",
      "Cost Planning & Budget Development",
      "Bills of Quantities",
      "Value Engineering",
      "Cash Flow Forecasting",
      "Life Cycle Costing"
    ]
  },
  {
    icon: Briefcase,
    title: "Procurement & Tendering",
    description: "Strategic procurement advice and tender management to secure the right contractors, achieve commercial certainty, and maximise value throughout the procurement process.",
    features: [
      "Procurement Strategy Development",
      "Preparation of Tender Documentation",
      "Tender Evaluation & Analysis",
      "Tender Clarifications & Negotiations",
      "Contract Award Recommendations"
    ]
  },
  {
    icon: FileSignature,
    title: "Commercial & Contract Management",
    description: "Proactive contract and commercial management services that protect client interests, promote contractual compliance, manage commercial risk, and provide effective financial control throughout the project lifecycle.",
    features: [
      "Contract Administration",
      "Interim Valuations & Payment Certification",
      "Variation Assessment & Change Management",
      "Cost Reporting & Commercial Performance Monitoring",
      "Risk Identification & Commercial Advisory",
      "Final Account Preparation & Agreement"
    ]
  },
  {
    icon: Scale,
    title: "Claims & Dispute Management",
    description: "Professional claims consultancy and commercial advice to support the preparation, evaluation, and resolution of contractual claims while minimising the impact of disputes.",
    features: [
      "Delay & Disruption Analysis",
      "Extension of Time (EOT) Assessments",
      "Loss & Expense Claims",
      "Claims Preparation & Evaluation",
      "Alternative Dispute Resolution Support"
    ]
  },
  {
    icon: Handshake,
    title: "Contractor Advisory Services",
    description: "Specialised commercial advisory support for contractors, subcontractors, developers, and project stakeholders to strengthen commercial performance and manage contractual risk.",
    features: [
      "Tender Pricing",
      "Project Cost Control",
      "Subcontract Administration",
      "Claims Preparation & Negotiation",
      "Commercial Risk Management"
    ]
  },
  {
    icon: BookOpen,
    title: "Academic Services & Research",
    description: "Supporting industry development through professional training, technical research and knowledge-sharing initiatives tailored to organisations and construction professionals.",
    features: [
      "Professional Training Programmes",
      "Corporate Learning Solutions",
      "Industry Research",
      "Technical Publications",
      "Best Practice Workshops"
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
            Delivering trusted consultancy solutions for the built environment. We provide strategic commercial expertise and informed guidance to support successful project outcomes throughout the project lifecycle.
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
          <h2 className="font-serif text-3xl font-bold mb-6">Need expert guidance for your project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every project presents unique challenges and opportunities. Connect with our team to discuss how Kendra Consultants can provide tailored solutions and strategic support aligned with your project objectives.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold tracking-wider text-sm transition-all hover:bg-primary/90"
          >
            CONSULT KENDRA
          </Link>
        </div>
      </section>
    </Shell>
  );
}
