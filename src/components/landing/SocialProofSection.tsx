import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, scaleInVariants } from "@/hooks/useScrollAnimation";

export function SocialProofSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-28 relative">
      {/* Background accent - offset */}
      <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-6">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scaleInVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/8 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/6 to-transparent rounded-tr-full" />
          
          <div className="relative">
            {/* Asymmetric layout */}
            <motion.div 
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">
                Trusted by leading firms
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                The same analytical rigor used by{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  top real estate investment firms
                </span>
              </h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                Now accessible to every professional. From individual investors to enterprise funds.
              </p>
            </motion.div>

            {/* Floating metrics */}
            <motion.div 
              initial={{ opacity: 0, x: 24 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mt-10 flex flex-wrap gap-8 lg:gap-12"
            >
              {[
                { label: "Active Users", value: "2.4K+" },
                { label: "Cities Covered", value: "50+" },
                { label: "Reports Generated", value: "18K+" },
              ].map((metric) => (
                <div key={metric.label} className="text-left">
                  <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
