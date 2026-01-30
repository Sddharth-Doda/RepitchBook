import { useNavigate } from "react-router-dom";
import { TrendingUp, BarChart3, Shield, Zap, ArrowRight } from "lucide-react";
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

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">REPitchBook AI</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" onClick={() => navigate("/auth?mode=signin")} className="text-sm">
              Sign In
            </Button>
            <Button onClick={() => navigate("/auth?mode=signup")} className="bg-gradient-primary shadow-glow text-sm">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Trusted by 2,400+ real estate professionals
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Turn Property Data into{" "}
              <span className="text-gradient-primary">Investor Intelligence</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl leading-relaxed">
              AI-powered deal analysis for smarter real estate decisions. Evaluate properties, 
              assess risk, and generate institutional-grade investment reports in seconds.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => navigate("/auth?mode=signup")}
                className="h-12 gap-2 bg-gradient-primary px-8 text-sm shadow-glow"
              >
                Start Analyzing Deals
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/auth?mode=signin")}
                className="h-12 px-8 text-sm"
              >
                Sign In to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Trust Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-xl border border-border bg-card p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-semibold text-foreground">
                Institutional-Grade Analysis
              </h2>
              <p className="mt-4 text-muted-foreground">
                The same analytical rigor used by top real estate investment firms, now accessible to every professional.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {[
                  { value: "₹1,200 Cr+", label: "Deals Analyzed" },
                  { value: "97%", label: "Accuracy Rate" },
                  { value: "2.4s", label: "Avg. Analysis Time" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-gradient-primary">{stat.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground">
              Ready to make smarter investments?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join thousands of professionals using AI to gain a competitive edge.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/auth?mode=signup")}
              className="mt-8 h-12 gap-2 bg-gradient-primary px-8 text-sm shadow-glow"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">REPitchBook AI</span>
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
