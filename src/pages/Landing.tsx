import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  Building2,
  MapPin,
  PieChart,
  Home,
  Landmark,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroRealEstate from "@/assets/hero-real-estate.jpg";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Analysis",
    description: "Instant investment scoring powered by machine learning models trained on millions of property transactions.",
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
    description: "Comprehensive risk modeling with scenario analysis and stress testing for real estate investments.",
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
  { value: "₹1,200 Cr+", label: "Property Value Analyzed", icon: Building2 },
  { value: "97%", label: "Accuracy Rate", icon: Target },
  { value: "2.4s", label: "Avg. Analysis Time", icon: Sparkles },
];

const cities = [
  { name: "Mumbai", properties: "12,400+" },
  { name: "Bengaluru", properties: "9,800+" },
  { name: "Gurugram", properties: "7,200+" },
  { name: "Hyderabad", properties: "6,500+" },
  { name: "Pune", properties: "5,900+" },
];

const testimonials = [
  {
    quote: "REPitchBook has transformed how we evaluate deals. The AI scoring saved us from two bad investments last quarter alone.",
    name: "Vineet Kamle",
    role: "Real Estate Investor",
    company: "Kamle Investments",
    location: "Mumbai",
    avatar: "VK",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    quote: "My clients love the detailed reports. It adds credibility to every property I present and has increased my close rate by 40%.",
    name: "Priya Sharma",
    role: "Senior Property Broker",
    company: "Prime Realty Group",
    location: "Bengaluru",
    avatar: "PS",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    quote: "The market intelligence features are incredible. We now have insights that previously required a full research team.",
    name: "Arjun Mehta",
    role: "Investment Analyst",
    company: "Horizon Capital",
    location: "Gurugram",
    avatar: "AM",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    quote: "From land acquisition to commercial projects, REPitchBook handles it all. It's become essential to our due diligence process.",
    name: "Kavitha Reddy",
    role: "Development Director",
    company: "Skyrise Developers",
    location: "Hyderabad",
    avatar: "KR",
    gradient: "from-violet-500 to-purple-500",
  },
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

        {/* Hero Image with Product Preview Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 mx-auto max-w-5xl"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
            {/* Hero Real Estate Image */}
            <div className="relative">
              <img 
                src={heroRealEstate} 
                alt="Modern luxury real estate building" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
            </div>
            
            {/* Floating Analytics Cards */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="grid md:grid-cols-3 gap-4">
                {/* Property Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="rounded-xl bg-card/90 backdrop-blur-xl p-4 border border-border/50 shadow-lg"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Skyline Tower</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Bandra, Mumbai
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Listed Price</span>
                    <span className="font-semibold text-foreground">₹2.4 Cr</span>
                  </div>
                </motion.div>

                {/* AI Score */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="rounded-xl bg-card/90 backdrop-blur-xl p-4 border border-success/30 shadow-lg"
                >
                  <div className="text-xs text-muted-foreground mb-2">AI Investment Score</div>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold text-success">87</div>
                    <div className="text-sm text-success/80 mb-1">/100</div>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-success/20 overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-success to-emerald-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "87%" }}
                      transition={{ delay: 1.8, duration: 0.8 }}
                    />
                  </div>
                </motion.div>

                {/* ROI Metrics */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="rounded-xl bg-card/90 backdrop-blur-xl p-4 border border-primary/30 shadow-lg"
                >
                  <div className="text-xs text-muted-foreground mb-2">Projected Returns</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">5Y ROI</span>
                      <span className="text-sm font-semibold text-primary">+42%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Rental Yield</span>
                      <span className="text-sm font-semibold text-accent">3.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Risk Level</span>
                      <span className="text-sm font-semibold text-success">Low</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Cities Coverage */}
    <section className="py-12 border-y border-border/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-muted-foreground whitespace-nowrap">Covering properties in</span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {cities.map((city, index) => (
              <motion.div 
                key={city.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50"
              >
                <MapPin className="w-3 h-3 text-primary" />
                <span className="text-sm font-medium text-foreground">{city.name}</span>
                <span className="text-xs text-muted-foreground">({city.properties})</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* How It Works Section - Timeline */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Simple & Powerful
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Get institutional-grade property insights in three simple steps
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-cyan-500 to-emerald-500 md:-translate-x-1/2" />

          {/* Step 1 */}
          <motion.div 
            className="relative flex items-start gap-8 mb-12 md:mb-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Timeline Node */}
            <div className="absolute left-8 md:left-1/2 w-16 h-16 -translate-x-1/2 flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 animate-pulse" />
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Building2 className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Content - Left side on desktop */}
            <div className="ml-24 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
              <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold mb-4">
                Step 1
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Upload Property</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Enter property details — location, price, size, and type. Our system supports residential, commercial, and land investments.
              </p>
              <div className="flex flex-wrap gap-2 md:justify-end">
                <span className="px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium border border-amber-500/20">Location</span>
                <span className="px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium border border-amber-500/20">Price</span>
                <span className="px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium border border-amber-500/20">Size</span>
              </div>
            </div>

            {/* Empty space for right side on desktop */}
            <div className="hidden md:block md:w-1/2" />
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            className="relative flex items-start gap-8 mb-12 md:mb-16"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Timeline Node */}
            <div className="absolute left-8 md:left-1/2 w-16 h-16 -translate-x-1/2 flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Empty space for left side on desktop */}
            <div className="hidden md:block md:w-1/2" />

            {/* Content - Right side on desktop */}
            <div className="ml-24 md:ml-0 md:w-1/2 md:pl-16">
              <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold mb-4">
                Step 2
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">AI Analysis</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our AI evaluates market trends, rental yields, risk factors, and growth potential using real-time data from across India.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">Analyzing market data...</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <span className="text-sm text-muted-foreground">Computing risk score...</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
                  <span className="text-sm text-muted-foreground">Generating insights...</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            className="relative flex items-start gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Timeline Node */}
            <div className="absolute left-8 md:left-1/2 w-16 h-16 -translate-x-1/2 flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <PieChart className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Content - Left side on desktop */}
            <div className="ml-24 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
              <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold mb-4">
                Step 3
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Get Report</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Receive a comprehensive investment report with AI score, ROI projections, risk analysis, and actionable recommendations.
              </p>
              <div className="flex items-center gap-3 md:justify-end">
                <div className="flex-1 max-w-32 h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </div>
                <span className="text-sm font-semibold text-emerald-500">Report Ready</span>
              </div>
            </div>

            {/* Empty space for right side on desktop */}
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Success Stories
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Real Estate
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professionals Across India
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            See how leading investors, brokers, and analysts are making smarter decisions
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group relative"
            >
              <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 h-full">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-6xl font-serif text-primary/10 leading-none select-none">
                  "
                </div>
                
                {/* Quote */}
                <p className="relative text-foreground/90 leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold text-sm shadow-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground/70 flex items-center gap-1 mt-0.5">
                      <span>{testimonial.company}</span>
                      <span>•</span>
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative gradient */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex -space-x-2">
              {["VK", "PS", "AM", "KR"].map((initials, i) => (
                <div 
                  key={initials} 
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-medium border-2 border-background"
                  style={{ zIndex: 4 - i }}
                >
                  {initials}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-xs font-medium border-2 border-background">
                +2K
              </div>
            </div>
            <span className="text-sm">Join 2,400+ professionals</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">4.9/5 average rating</span>
          </div>
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
          
          {/* Real estate icons decoration */}
          <div className="absolute top-8 left-8 opacity-10">
            <Landmark className="w-16 h-16 text-primary" />
          </div>
          <div className="absolute bottom-8 right-8 opacity-10">
            <Home className="w-12 h-12 text-accent" />
          </div>
          
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">
              Trusted by Real Estate Professionals
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              The same analytical rigor used by
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                top real estate investment firms
              </span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              From residential properties to commercial developments — analyze any deal with institutional precision.
            </p>
            
            {/* Property type badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Residential", "Commercial", "Land", "Pre-launch", "Rental"].map((type) => (
                <span key={type} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
            <HelpCircle className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Everything you need to know about REPitchBook
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300">
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                <span className="font-semibold">What types of properties can I analyze?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                REPitchBook supports all major property types including residential apartments, independent houses, commercial offices, retail spaces, land parcels, and pre-launch projects. Our AI models are trained on Indian market data covering 50+ cities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300">
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                <span className="font-semibold">How accurate is the AI investment score?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                Our AI investment score has a 97% accuracy rate, validated against historical transaction data. The score considers 40+ factors including location trends, rental yields, infrastructure development, and market sentiment. However, we always recommend using our analysis as one input in your overall due diligence process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300">
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                <span className="font-semibold">How often is the market data updated?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                Our market intelligence data is updated in real-time from multiple sources including property listings, government registrations, and developer announcements. Rental yield data is refreshed weekly, while macro indicators like infrastructure projects are updated monthly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300">
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                <span className="font-semibold">Can I share reports with my clients?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                Yes! All investment reports can be exported as professional PDFs with your branding. Pro and Enterprise plans include white-label options, allowing brokers and consultants to share institutional-grade reports under their own company name.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300">
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                <span className="font-semibold">What's included in the free trial?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                The 14-day free trial includes full access to all Pro features: unlimited property analyses, AI investment scores, detailed reports, market intelligence dashboards, and risk assessments. No credit card required to start. At the end of your trial, you can choose a plan that fits your needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300">
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                <span className="font-semibold">Is my data secure and confidential?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                Absolutely. We use bank-grade encryption (AES-256) for all data at rest and in transit. Your deal analyses are private and never shared with other users. We're compliant with Indian data protection regulations and undergo regular security audits.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <button className="text-primary font-medium hover:underline underline-offset-4">
              Contact our support team
            </button>
          </p>
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
