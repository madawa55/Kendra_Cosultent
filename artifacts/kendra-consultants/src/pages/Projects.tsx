import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell } from "@/components/layout/Shell";
import { MapPin } from "lucide-react";

const allProjects = [
  {
    id: 1,
    title: "Colombo Port City Commercial Tower",
    region: "Sri Lanka",
    type: "Commercial High-Rise",
    value: "USD 120M",
    description: "Comprehensive cost planning and post-contract commercial management for a 45-story premium Grade A office tower within the new financial city.",
    image: "/attached_assets/generated_images/project_colombo.jpg"
  },
  {
    id: 2,
    title: "Doha Metro Extension Hub",
    region: "Qatar",
    type: "Infrastructure",
    value: "QAR 850M",
    description: "Provided expert claims defense and variation analysis for the main contractor on a complex underground transit interchange project.",
    image: "/attached_assets/generated_images/project_doha.jpg"
  },
  {
    id: 3,
    title: "Melbourne West Infrastructure Upgrade",
    region: "Australia",
    type: "Civil Engineering",
    value: "AUD 245M",
    description: "End-to-end procurement strategy and contract administration for a major highway and bridge expansion project delivered under a design & construct model.",
    image: "/attached_assets/generated_images/project_melbourne.jpg"
  },
  {
    id: 4,
    title: "Lusail Luxury Residences",
    region: "Qatar",
    type: "High-End Residential",
    value: "QAR 420M",
    description: "Pre-contract cost estimating and value engineering for twin luxury residential towers, ensuring design aspirations met strict budget constraints.",
    image: "/attached_assets/generated_images/project_residential.jpg"
  },
  {
    id: 5,
    title: "Monash Research Institute",
    region: "Australia",
    type: "Academic & Healthcare",
    value: "AUD 180M",
    description: "Independent certifier and cost monitoring role for a state-of-the-art medical research facility with highly specialized laboratory requirements.",
    image: "/attached_assets/generated_images/project_academic.jpg"
  },
  {
    id: 6,
    title: "Hambantota Logistics Center",
    region: "Sri Lanka",
    type: "Industrial",
    value: "USD 55M",
    description: "Contractor advisory services and final account settlement for a massive 1M sq ft industrial warehouse and distribution hub.",
    image: "/attached_assets/generated_images/project_industrial.jpg"
  }
];

const regions = ["All", "Sri Lanka", "Qatar", "Australia"];

export default function Projects() {
  const [activeRegion, setActiveRegion] = useState("All");

  const filteredProjects = activeRegion === "All" 
    ? allProjects 
    : allProjects.filter(p => p.region === activeRegion);

  return (
    <Shell>
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-16 text-white border-b-4 border-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Project Portfolio</h1>
          <p className="text-lg text-white/80 font-light leading-relaxed">
            A selection of high-profile developments where our commercial precision secured the project's financial success.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-6 py-2 text-sm font-semibold tracking-wider uppercase transition-all border ${
                  activeRegion === region 
                    ? "bg-primary text-white border-primary" 
                    : "bg-transparent text-foreground border-border hover:border-primary"
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="bg-card border border-border group overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-bold tracking-wider uppercase flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.region}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <h3 className="font-serif text-xl font-bold text-foreground leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm font-medium text-secondary mb-4 uppercase tracking-wider">
                      <span>{project.type}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{project.value}</span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </Shell>
  );
}
