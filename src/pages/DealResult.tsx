import { 
  TrendingUp, 
  AlertTriangle, 
  DollarSign, 
  MapPin, 
  BarChart3, 
  Lightbulb,
  Download,
  Bookmark,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScoreRing } from "@/components/result/ScoreRing";
import { InsightCard } from "@/components/result/InsightCard";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";
import { toast } from "sonner";
import jsPDF from "jspdf";
const roiProjection = [
  { year: "Y1", value: 8.2 },
  { year: "Y2", value: 9.4 },
  { year: "Y3", value: 10.8 },
  { year: "Y4", value: 11.6 },
  { year: "Y5", value: 12.4 },
];

const expenseBreakdown = [
  { name: "Mortgage", value: 42, color: "hsl(var(--chart-1))" },
  { name: "Operating", value: 28, color: "hsl(var(--chart-2))" },
  { name: "Insurance", value: 15, color: "hsl(var(--chart-3))" },
  { name: "Reserves", value: 15, color: "hsl(var(--chart-4))" },
];

export default function DealResult() {
  const handleDownloadReport = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let y = 20;

    // Helper function to add centered text
    const addCenteredText = (text: string, fontSize: number, isBold = false) => {
      doc.setFontSize(fontSize);
      doc.setFont("helvetica", isBold ? "bold" : "normal");
      doc.text(text, pageWidth / 2, y, { align: "center" });
      y += fontSize * 0.5;
    };

    // Helper function to add left-aligned text
    const addText = (text: string, fontSize: number, isBold = false) => {
      doc.setFontSize(fontSize);
      doc.setFont("helvetica", isBold ? "bold" : "normal");
      const lines = doc.splitTextToSize(text, pageWidth - margin * 2);
      doc.text(lines, margin, y);
      y += lines.length * fontSize * 0.5;
    };

    // Helper function to add a section divider
    const addDivider = () => {
      y += 5;
      doc.setDrawColor(200, 200, 200);
      doc.line(margin, y, pageWidth - margin, y);
      y += 10;
    };

    // Title
    doc.setTextColor(30, 64, 175);
    addCenteredText("REPITCHBOOK INVESTMENT REPORT", 18, true);
    y += 5;
    doc.setTextColor(0, 0, 0);

    // Property Info
    addCenteredText("Lodha Altamount, Lower Parel, Mumbai", 14, true);
    y += 2;
    doc.setTextColor(100, 100, 100);
    addCenteredText("Commercial Office", 10);
    addCenteredText(`Listed Price: ₹3,50,00,000`, 10);
    addCenteredText(`Report Generated: ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}`, 10);
    doc.setTextColor(0, 0, 0);

    addDivider();

    // AI Investment Score
    addText("AI INVESTMENT SCORE", 12, true);
    y += 3;
    doc.setTextColor(34, 139, 34);
    addText("Overall Score: 87/100 (Strong Investment Opportunity)", 11, true);
    doc.setTextColor(0, 0, 0);

    addDivider();

    // Executive Summary
    addText("EXECUTIVE SUMMARY", 12, true);
    y += 3;
    addText("This property presents a strong investment opportunity with above-market rental yields and favorable location dynamics. The Mumbai commercial market shows sustained demand with 94% occupancy in the submarket. Projected 5-year IRR of 14.2% exceeds benchmark expectations.", 10);
    y += 5;
    addText("Key Strengths:", 10, true);
    addText("• Proximity to transit infrastructure", 10);
    addText("• Recent capital improvements", 10);
    addText("• Long-term lease commitments from investment-grade tenants", 10);

    addDivider();

    // Key Metrics
    addText("KEY METRICS", 12, true);
    y += 5;
    
    const metrics = [
      ["Projected ROI (5-Year):", "12.4%"],
      ["Risk Assessment:", "Low (based on 23 market signals)"],
      ["Cash-on-Cash Return (Y1):", "8.7%"],
      ["Location Score:", "92/100"],
      ["Market Sentiment:", "Bullish"],
      ["Break-even Period:", "3.2 years"],
    ];

    metrics.forEach(([label, value]) => {
      doc.setFont("helvetica", "normal");
      doc.text(label, margin, y);
      doc.setFont("helvetica", "bold");
      doc.text(value, margin + 70, y);
      y += 7;
    });

    addDivider();

    // ROI Projection
    addText("ROI PROJECTION (5 YEARS)", 12, true);
    y += 5;
    
    const roiData = [
      ["Year 1:", "8.2%"],
      ["Year 2:", "9.4%"],
      ["Year 3:", "10.8%"],
      ["Year 4:", "11.6%"],
      ["Year 5:", "12.4%"],
    ];

    roiData.forEach(([label, value]) => {
      doc.setFont("helvetica", "normal");
      doc.text(label, margin, y);
      doc.setFont("helvetica", "bold");
      doc.text(value, margin + 30, y);
      y += 6;
    });

    addDivider();

    // Expense Breakdown
    addText("EXPENSE BREAKDOWN", 12, true);
    y += 5;
    
    const expenses = [
      ["Mortgage Payments:", "42%"],
      ["Operating Costs:", "28%"],
      ["Insurance:", "15%"],
      ["Reserves:", "15%"],
    ];

    expenses.forEach(([label, value]) => {
      doc.setFont("helvetica", "normal");
      doc.text(label, margin, y);
      doc.setFont("helvetica", "bold");
      doc.text(value, margin + 50, y);
      y += 6;
    });

    // Check if we need a new page for disclaimer
    if (y > 250) {
      doc.addPage();
      y = 20;
    }

    addDivider();

    // Disclaimer
    doc.setTextColor(100, 100, 100);
    addText("DISCLAIMER", 10, true);
    y += 2;
    addText("This report is generated by REPitchBook AI and is for informational purposes only. It does not constitute financial advice. Please consult with qualified professionals before making investment decisions.", 8);
    y += 5;
    addText(`Report ID: RPB-${Date.now().toString(36).toUpperCase()}`, 8);
    addText("Generated by REPitchBook AI Platform", 8);

    // Save the PDF
    doc.save(`REPitchBook_Report_Lodha_Altamount_${new Date().toISOString().split('T')[0]}.pdf`);
    
    toast.success("PDF report downloaded successfully!");
  };

  const handleSaveDeal = () => {
    toast.success("Deal saved to your portfolio!");
  };

  const handleShareAnalysis = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="flex">
      {/* Main content */}
      <div className="flex-1 p-6 lg:p-8">
        {/* Header with Score */}
        <div className="mb-8 rounded-xl border border-border bg-card p-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
            <ScoreRing score={87} size="lg" />
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-xl font-semibold text-foreground">
                Lodha Altamount, Lower Parel, Mumbai
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">Commercial Office • ₹3,50,00,000</p>
              
              {/* Executive Summary */}
              <div className="mt-6 rounded-lg border border-border bg-muted/30 p-5">
                <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  AI Investment Summary
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  This property presents a <span className="font-medium text-success">strong investment opportunity</span> with 
                  above-market rental yields and favorable location dynamics. The Mumbai commercial market shows 
                  sustained demand with 94% occupancy in the submarket. Projected 5-year IRR of 14.2% 
                  exceeds benchmark expectations. Key strengths include proximity to transit, recent capital improvements, 
                  and long-term lease commitments from investment-grade tenants.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Insight Cards Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InsightCard
            title="Projected ROI"
            value="12.4%"
            description="5-year annualized return projection"
            icon={TrendingUp}
            trend="positive"
          />
          <InsightCard
            title="Risk Assessment"
            value="Low"
            description="Based on 23 market signals"
            icon={AlertTriangle}
            trend="positive"
          />
          <InsightCard
            title="Cash-on-Cash"
            value="8.7%"
            description="Year 1 cash return on equity"
            icon={DollarSign}
            trend="positive"
          />
          <InsightCard
            title="Location Score"
            value="92/100"
            description="Transit, amenities, growth factors"
            icon={MapPin}
            trend="positive"
          />
          <InsightCard
            title="Market Sentiment"
            value="Bullish"
            description="Based on recent transaction data"
            icon={BarChart3}
            trend="positive"
          />
          <InsightCard
            title="Break-even"
            value="3.2 yrs"
            description="Time to recover initial investment"
            icon={Lightbulb}
            trend="neutral"
          />
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* ROI Projection Chart */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold text-foreground">ROI Projection</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">Expected annual returns over investment horizon</p>
            <div className="mt-6 h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={roiProjection} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="roiGradient2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--popover))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                    formatter={(value: number) => [`${value}%`, "ROI"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    fill="url(#roiGradient2)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold text-foreground">Cost Breakdown</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">Annual expense distribution</p>
            <div className="mt-6 flex items-center gap-8">
              <div className="h-[160px] w-[160px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={expenseBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {expenseBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 space-y-3">
                {expenseBreakdown.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-xs text-muted-foreground">{item.name}</span>
                    </div>
                    <span className="text-xs font-medium tabular-nums text-foreground">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Action Panel */}
      <div className="hidden w-72 border-l border-border bg-card/50 p-6 lg:block">
        <div className="sticky top-24 space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Actions</h3>
          
          <Button 
            className="w-full justify-start gap-3 bg-gradient-primary text-primary-foreground hover:opacity-90"
            onClick={handleDownloadReport}
          >
            <Download className="h-4 w-4" />
            Download Report
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3 border-border text-foreground hover:bg-muted"
            onClick={handleSaveDeal}
          >
            <Bookmark className="h-4 w-4" />
            Save Deal
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3 border-border text-foreground hover:bg-muted"
            onClick={handleShareAnalysis}
          >
            <Share2 className="h-4 w-4" />
            Share Analysis
          </Button>

          <div className="mt-8 rounded-lg border border-border bg-muted/30 p-4">
            <p className="text-xs font-medium text-foreground">Need a deeper analysis?</p>
            <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">
              Upgrade to Pro for comprehensive due diligence reports and market comparables.
            </p>
            <Button size="sm" className="mt-3 w-full bg-primary/10 text-xs text-primary hover:bg-primary/20">
              Upgrade Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
