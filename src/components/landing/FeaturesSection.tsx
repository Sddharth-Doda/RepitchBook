import { Zap, BarChart3, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, slideInLeftVariants, slideInRightVariants } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Analysis",
    description: "Instant investment scoring powered by machine learning models trained on millions of transactions.",
    accent: "primary",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Real-time market data, rental yields, and demand trends across 50+ Indian cities.",
    accent: "accent",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Comprehensive risk modeling with scenario analysis and stress testing capabilities.",
    accent: "primary",
  },
];

export function FeaturesSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-28 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header - offset alignment */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideInLeftVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
            Platform Capabilities
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need for confident investment decisions
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Institutional-grade tools designed for modern real estate professionals.
          </p>
        </motion.div>

        {/* Features grid - staggered, asymmetric */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group relative rounded-2xl border border-border/60 bg-card/50 p-8 transition-all duration-300 hover:border-${feature.accent}/30 hover:bg-card/80 hover:shadow-lg ${index === 1 ? 'lg:translate-y-6' : ''}`}
            >
              {/* Icon with gradient background */}
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.accent === 'accent' ? 'from-accent/20 to-accent/5' : 'from-primary/20 to-primary/5'} transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className={`h-5 w-5 ${feature.accent === 'accent' ? 'text-accent' : 'text-primary'}`} />
              </div>
              
              <h3 className="mb-3 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              
              {/* Hover accent line */}
              <motion.div 
                className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${feature.accent === 'accent' ? 'from-accent/50 to-transparent' : 'from-primary/50 to-transparent'} rounded-full`}
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
