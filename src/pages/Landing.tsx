import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Shield, Zap, ArrowRight, CheckCircle2, Sparkles, Target, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Analysis",
    description: "Instant investment scoring powered by machine learning models trained on millions of transactions.",
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "bg-amber-500/20",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Real-time market data, rental yields, and demand trends across 50+ Indian cities.",
    gradient: "from-cyan-500 to-blue-600",
    bgGlow: "bg-cyan-500/20",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Comprehensive risk modeling with scenario analysis and stress testing capabilities.",
    gradient: "from-emerald-500 to-teal-600",
    bgGlow: "bg-emerald-500/20",
  },
];

const benefits = [
  "Institutional-grade deal analysis",
  "Real-time market intelligence",
  "AI-powered risk scoring",
  "Comprehensive reporting suite",
];

const stats = [
  { value: "₹1,200 Cr+", label: "Deals Analyzed", icon: Target },
  { value: "97%", label: "Accuracy Rate", icon: Sparkles },
  { value: "2.4s", label: "Avg. Analysis Time", icon: LineChart },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Navigation */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <motion.div 
            className="flex items-center gap-2.5"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
              <TrendingUp className="h-4.5 w-4.5 text-primary-foreground" />
            </div>
            <span className="text-base font-semibold tracking-tight text-foreground">REPitchBook</span>
          </motion.div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              onClick={() => navigate("/auth?mode=signin")} 
              className="h-9 px-4 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Sign In
            </Button>
            <Button 
              onClick={() => navigate("/auth?mode=signup")} 
              className="h-9 px-5 text-sm font-medium bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
            >
              Get Started
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32">
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="text-foreground/80">Trusted by 2,400+ professionals across India</span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]"
            >
              Turn Property Data into
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Investor Intelligence
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              AI-powered deal analysis for smarter real estate decisions. 
              Evaluate properties, assess risk, and generate institutional-grade 
              investment reports in seconds.
            </motion.p>
            
            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                onClick={() => navigate("/auth?mode=signup")}
                className="group h-12 w-full sm:w-auto gap-2 px-8 text-sm font-medium bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl shadow-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02]"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/auth?mode=signin")}
                className="h-12 w-full sm:w-auto px-8 text-sm font-medium border-border/80 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
              >
                Sign In to Dashboard
              </Button>
            </motion.div>

            {/* Quick Benefits */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit} 
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div 
            className="grid gap-6 sm:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                variants={scaleVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <stat.icon className="mx-auto mb-4 h-8 w-8 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                  <div className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to make
              <br />
              <span className="text-primary">confident investment decisions</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Institutional-grade tools designed for modern real estate professionals.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-6 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
              >
                {/* Gradient glow effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 ${feature.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-12 lg:p-16 overflow-hidden relative"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">
                Trusted by leading firms
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                The same analytical rigor used by
                <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  top real estate investment firms
                </span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg">
                Now accessible to every professional. From individual investors to enterprise funds.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div 
            className="mx-auto max-w-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to make smarter investments?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Join thousands of professionals using AI to gain a competitive edge in Indian real estate.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                onClick={() => navigate("/auth?mode=signup")}
                className="group mt-8 h-14 gap-2 px-10 text-base font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] hover:bg-right shadow-xl shadow-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required • Free 14-day trial
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 relative">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <TrendingUp className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">REPitchBook</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 REPitchBook. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
