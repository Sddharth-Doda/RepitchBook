import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const riskData = [
  { category: "Market Volatility", level: 0.3 },
  { category: "Interest Rate", level: 0.6 },
  { category: "Occupancy Risk", level: 0.2 },
  { category: "Location Score", level: 0.1 },
  { category: "Economic Outlook", level: 0.4 },
];

export function RiskHeatmap() {
  const getRiskColor = (level: number) => {
    if (level <= 0.2) return "bg-success/80";
    if (level <= 0.4) return "bg-success/50";
    if (level <= 0.6) return "bg-warning/60";
    if (level <= 0.8) return "bg-warning/80";
    return "bg-destructive/80";
  };

  const getRiskLabel = (level: number) => {
    if (level <= 0.3) return "Low";
    if (level <= 0.6) return "Medium";
    return "High";
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6 h-full">
      <div className="mb-6">
        <h3 className="text-base font-semibold text-foreground">Risk Assessment</h3>
        <p className="mt-1 text-sm text-muted-foreground">Portfolio risk distribution by factor</p>
      </div>
      <div className="space-y-4">
        {riskData.map((item, index) => (
          <motion.div 
            key={item.category} 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
          >
            <span className="w-28 text-sm text-muted-foreground truncate">{item.category}</span>
            <div className="flex-1">
              <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className={cn("h-full rounded-full", getRiskColor(item.level))}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.level * 100}%` }}
                  transition={{ delay: 0.2 + 0.1 * index, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
            <span className={cn(
              "w-16 text-right text-xs font-medium",
              item.level <= 0.3 ? "text-success" : item.level <= 0.6 ? "text-warning" : "text-destructive"
            )}>
              {getRiskLabel(item.level)}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
