import { motion } from "framer-motion";
import { Shell } from "@/components/layout/Shell";
import { Construction } from "lucide-react";

export default function Projects() {
  return (
    <Shell>
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-16 text-white border-b-4 border-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Project Portfolio</h1>
          <p className="text-lg text-white/80 font-light leading-relaxed">
            A selection of projects showcasing our expertise and experience in delivering sound commercial solutions and value throughout the project lifecycle.
          </p>
        </div>
      </section>

      {/* Under Construction Section */}
      <section className="py-32 bg-background min-h-[50vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 text-center max-w-xl"
        >
          <Construction className="w-12 h-12 text-secondary mx-auto mb-8" />
          <h2 className="text-secondary font-bold tracking-[0.2em] text-sm uppercase mb-4">
            Portfolio
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Under Construction
          </h3>
        </motion.div>
      </section>
    </Shell>
  );
}