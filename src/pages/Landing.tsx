import { useNavigate } from "react-router-dom";
import { TrendingUp, BarChart3, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Analysis",
    description: "Instant investment scoring powered by machine learning models trained on millions of transactions.",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Real-time market data, rental yields, and demand trends across 50+ Indian cities.",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Comprehensive risk modeling with scenario analysis and stress testing capabilities.",
  },
];

const benefits = [
  "Institutional-grade deal analysis",
  "Real-time market intelligence",
  "AI-powered risk scoring",
  "Comprehensive reporting suite",
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-base font-semibold tracking-tight text-foreground">REPitchBook</span>
          </div>
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
              className="h-9 px-5 text-sm font-medium"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              <span className="text-muted-foreground">Trusted by 2,400+ professionals across India</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              Turn Property Data into
              <br />
              <span className="text-primary">Investor Intelligence</span>
            </h1>
            
            {/* Subheadline */}
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto leading-relaxed">
              AI-powered deal analysis for smarter real estate decisions. 
              Evaluate properties, assess risk, and generate institutional-grade 
              investment reports in seconds.
            </p>
            
            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={() => navigate("/auth?mode=signup")}
                className="h-12 w-full sm:w-auto gap-2 px-8 text-sm font-medium"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/auth?mode=signin")}
                className="h-12 w-full sm:w-auto px-8 text-sm font-medium"
              >
                Sign In to Dashboard
              </Button>
            </div>

            {/* Quick Benefits */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { value: "₹1,200 Cr+", label: "Deals Analyzed" },
              { value: "97%", label: "Accuracy Rate" },
              { value: "2.4s", label: "Avg. Analysis Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-semibold tracking-tight text-foreground">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Everything you need to make confident investment decisions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Institutional-grade tools designed for modern real estate professionals.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/30 hover:bg-card/80"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 border-t border-border/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-border bg-card/50 p-12 lg:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
                Trusted by leading firms
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                The same analytical rigor used by top real estate investment firms
              </h2>
              <p className="mt-4 text-muted-foreground">
                Now accessible to every professional. From individual investors to enterprise funds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Ready to make smarter investments?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join thousands of professionals using AI to gain a competitive edge in Indian real estate.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/auth?mode=signup")}
              className="mt-8 h-12 gap-2 px-8 text-sm font-medium"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              No credit card required • Free 14-day trial
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
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
