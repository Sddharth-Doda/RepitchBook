import { Building2, TrendingUp, DollarSign, MapPin } from "lucide-react";
import { AIScoreWidget } from "@/components/dashboard/AIScoreWidget";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DealsTable } from "@/components/dashboard/DealsTable";
import { ROIChart } from "@/components/dashboard/ROIChart";
import { RiskHeatmap } from "@/components/dashboard/RiskHeatmap";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6 lg:p-8 xl:p-10">
      {/* Hero Section - Full width with asymmetric content */}
      <div className="mb-8 rounded-2xl border border-border bg-card overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-0">
          <div className="lg:col-span-8 p-6 lg:p-8">
            <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
              Turn Property Data into{" "}
              <span className="text-gradient-primary">Investor Intelligence</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              AI-powered analysis for smarter real estate decisions. Evaluate deals, assess risk, 
              and generate institutional-grade investment reports in seconds.
            </p>
          </div>
          <div className="lg:col-span-4 bg-gradient-to-br from-primary/5 to-accent/5 p-6 lg:p-8 flex items-center justify-end">
            <Button 
              onClick={() => navigate("/analyze")}
              className="h-11 bg-gradient-primary px-6 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90"
            >
              Analyze New Deal
            </Button>
          </div>
        </div>
      </div>

      {/* Metrics Row - Spread across full width */}
      <div className="mb-8 grid gap-4 grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-1">
          <AIScoreWidget score={84} label="Strong Buy" />
        </div>
        <MetricCard
          title="Active Deals"
          value="12"
          change="+3 this week"
          changeType="positive"
          icon={Building2}
        />
        <MetricCard
          title="Avg. ROI"
          value="11.2%"
          change="+2.4% vs last month"
          changeType="positive"
          icon={TrendingUp}
        />
        <MetricCard
          title="Total Portfolio Value"
          value="₹11.8 Cr"
          change="+₹1.5 Cr YTD"
          changeType="positive"
          icon={DollarSign}
        />
        <MetricCard
          title="Markets Tracked"
          value="24"
          change="5 new markets"
          changeType="neutral"
          icon={MapPin}
        />
      </div>

      {/* Charts Row - Asymmetric sizing */}
      <div className="mb-8 grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ROIChart />
        </div>
        <div className="lg:col-span-2">
          <RiskHeatmap />
        </div>
      </div>

      {/* Deals Table - Full width */}
      <DealsTable />
    </div>
  );
}
