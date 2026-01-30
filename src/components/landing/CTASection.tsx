import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants } from "@/hooks/useScrollAnimation";

export function CTASection() {
  const navigate = useNavigate();
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-28 relative overflow-hidden">
      {/* Dual gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-accent/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl lg:ml-auto lg:mr-0 text-left lg:text-right"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-accent mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-widest">Ready to start?</span>
          </motion.div>
          
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Make smarter investments{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">starting today</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Join thousands of professionals using AI to gain a competitive edge in Indian real estate.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                onClick={() => navigate("/auth?mode=signup")}
                className="h-12 gap-2.5 px-8 text-sm font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-xs text-muted-foreground"
          >
            No credit card required • Free 14-day trial
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
