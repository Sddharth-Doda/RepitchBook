import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "₹1,200 Cr+", label: "Deals Analyzed", accent: true },
  { value: "97%", label: "Accuracy Rate", accent: false },
  { value: "2.4s", label: "Avg. Analysis Time", accent: false },
];

export function StatsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-20">
      {/* Asymmetric divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="mx-auto max-w-6xl px-6">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
          className="grid gap-8 sm:grid-cols-3 lg:gap-16"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              variants={fadeUpVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`relative ${index === 0 ? 'sm:text-left' : index === 1 ? 'sm:text-center' : 'sm:text-right'}`}
            >
              <div className={`text-4xl lg:text-5xl font-bold tracking-tight ${stat.accent ? 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' : 'text-foreground'}`}>
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
              {/* Decorative accent line */}
              {index === 0 && (
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="mt-4 h-0.5 w-12 bg-gradient-to-r from-primary to-transparent origin-left hidden sm:block"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Asymmetric divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-border via-transparent to-border" />
    </section>
  );
}
