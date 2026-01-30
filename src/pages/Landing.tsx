import { useNavigate } from "react-router-dom";
import { TrendingUp, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-foreground">
              <TrendingUp className="h-3.5 w-3.5 text-background" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-foreground">REPitchBook</span>
          </div>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              onClick={() => navigate("/auth?mode=signin")} 
              className="h-8 px-3 text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              Sign In
            </Button>
            <Button 
              onClick={() => navigate("/auth?mode=signup")} 
              className="h-8 px-4 text-xs font-medium"
            >
              Start Free
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Asymmetric Layout */}
      <section className="relative pt-28 lg:pt-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-7 pt-4 lg:pt-12">
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-6">
                <span className="h-px w-8 bg-border" />
                Real Estate Intelligence Platform
              </div>
              
              <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1]">
                Stop guessing.
                <br />
                <span className="text-muted-foreground">Start knowing.</span>
              </h1>
              
              <p className="mt-6 text-base text-muted-foreground max-w-md leading-relaxed">
                We built the analysis engine that top Indian real estate funds use internally. 
                Now it's yours—institutional-grade deal scoring, risk modeling, and market intelligence.
              </p>
              
              <div className="mt-10 flex items-center gap-4">
                <Button
                  onClick={() => navigate("/auth?mode=signup")}
                  className="h-11 px-6 text-sm font-medium gap-2 group"
                >
                  Analyze Your First Deal
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <button 
                  onClick={() => navigate("/auth?mode=signin")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  I have an account
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Right Column - Stats Block */}
            <div className="lg:col-span-5 lg:pt-24">
              <div className="bg-card border border-border rounded-2xl p-8 lg:ml-8">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                  Platform Statistics
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline border-b border-border pb-6">
                    <span className="text-sm text-muted-foreground">Deals Analyzed</span>
                    <span className="text-2xl font-semibold text-foreground tabular-nums">₹1,247 Cr</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-border pb-6">
                    <span className="text-sm text-muted-foreground">Model Accuracy</span>
                    <span className="text-2xl font-semibold text-foreground tabular-nums">97.2%</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-muted-foreground">Avg. Analysis Time</span>
                    <span className="text-2xl font-semibold text-foreground tabular-nums">2.4s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities - Staggered Layout */}
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-y-16">
            {/* Section Label */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <span className="h-px w-8 bg-border" />
                  Capabilities
                </div>
                <h2 className="text-2xl font-medium text-foreground">
                  What the platform does
                </h2>
              </div>
            </div>

            {/* Capabilities List - Right aligned, staggered */}
            <div className="lg:col-span-8 lg:col-start-5 space-y-1">
              {[
                {
                  title: "AI Deal Scoring",
                  description: "Machine learning models trained on 50,000+ Indian real estate transactions. Get instant investment scores with confidence intervals.",
                },
                {
                  title: "Market Intelligence",
                  description: "Real-time rental yields, price trends, and demand signals across Mumbai, Bengaluru, Gurugram, Pune, and 45 other cities.",
                },
                {
                  title: "Risk Modeling",
                  description: "Scenario analysis and stress testing. Understand downside exposure before you commit capital.",
                },
                {
                  title: "Institutional Reports",
                  description: "Generate investor-ready pitch decks and due diligence reports. The same format top funds use internally.",
                },
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="group py-8 border-t border-border first:border-t-0 hover:bg-muted/30 -mx-6 px-6 transition-colors cursor-default"
                >
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs text-muted-foreground tabular-nums">0{index + 1}</span>
                        <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-lg pl-8">
                        {item.description}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-foreground transition-colors mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Dense Section */}
      <section className="py-6 border-y border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
            <span>Used by analysts at leading Indian real estate firms</span>
            <div className="flex items-center gap-8">
              <span className="tabular-nums">2,400+ professionals</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="tabular-nums">180+ institutional clients</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Mumbai • Bengaluru • Delhi NCR • Pune</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section - Offset Grid */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Large Statement */}
            <div className="lg:pr-8">
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-6">
                <span className="h-px w-8 bg-border" />
                Why REPitchBook
              </div>
              <h2 className="text-3xl lg:text-4xl font-medium text-foreground leading-tight">
                The due diligence that used to take your team two weeks now takes two minutes.
              </h2>
            </div>

            {/* Right - Supporting Points */}
            <div className="lg:pt-16 space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                We're not building another property portal. REPitchBook is purpose-built for investment professionals 
                who need institutional-grade analysis without the institutional overhead.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-semibold text-foreground mb-1">14×</div>
                  <div className="text-xs text-muted-foreground">Faster than manual analysis</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-foreground mb-1">₹0</div>
                  <div className="text-xs text-muted-foreground">To start analyzing deals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Asymmetric */}
      <section className="py-20 lg:py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-6">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground">
                The best time to start was yesterday.
                <br />
                <span className="text-muted-foreground">The second best time is now.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:text-right">
              <Button
                onClick={() => navigate("/auth?mode=signup")}
                className="h-12 px-8 text-sm font-medium gap-2 group"
              >
                Create Free Account
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">
                No credit card required • Setup in 30 seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-8 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-foreground">
                <TrendingUp className="h-3 w-3 text-background" />
              </div>
              <span className="text-xs font-medium text-foreground">REPitchBook</span>
            </div>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span>© 2026</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Built in India</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
