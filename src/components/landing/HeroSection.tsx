import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/hooks/useScrollAnimation";

const benefits = [
  "Institutional-grade deal analysis",
  "Real-time market intelligence",
  "AI-powered risk scoring",
  "Comprehensive reporting suite",
];

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Layered background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary glow - offset left */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[500px] bg-primary/8 rounded-full blur-[100px]" />
        {/* Accent glow - offset right */}
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[80px]" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      </div>
      
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl"
        >
          {/* Badge - offset left */}
          <motion.div 
            variants={fadeUpVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 flex justify-start lg:pl-8"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-foreground/80">Trusted by 2,400+ professionals across India</span>
            </div>
          </motion.div>
          
          {/* Headline - slightly offset for asymmetry */}
          <motion.h1 
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.08] lg:pr-12"
          >
            Turn Property Data into
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Investor Intelligence
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl leading-relaxed"
          >
            AI-powered deal analysis for smarter real estate decisions. 
            Evaluate properties, assess risk, and generate institutional-grade 
            investment reports in seconds.
          </motion.p>
          
          {/* CTAs - staggered layout */}
          <motion.div 
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                onClick={() => navigate("/auth?mode=signup")}
                className="h-12 gap-2.5 px-8 text-sm font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary shadow-lg shadow-primary/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/30"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/auth?mode=signin")}
                className="h-12 px-8 text-sm font-medium border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                Sign In to Dashboard
              </Button>
            </motion.div>
          </motion.div>

          {/* Quick Benefits - staggered reveal */}
          <motion.div 
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-14 grid grid-cols-2 gap-x-8 gap-y-3 lg:flex lg:flex-wrap lg:gap-x-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit} 
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.08, ease: "easeOut" }}
                className="flex items-center gap-2.5 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
