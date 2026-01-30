import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AIScoreWidgetProps {
  score: number;
  label: string;
  trend?: "up" | "down" | "stable";
}

export function AIScoreWidget({ score, label }: AIScoreWidgetProps) {
  const getScoreColor = (s: number) => {
    if (s >= 80) return "text-success";
    if (s >= 60) return "text-primary";
    if (s >= 40) return "text-warning";
    return "text-destructive";
  };

  const getScoreGradient = (s: number) => {
    if (s >= 80) return "from-success/20 to-success/5";
    if (s >= 60) return "from-primary/20 to-primary/5";
    if (s >= 40) return "from-warning/20 to-warning/5";
    return "from-destructive/20 to-destructive/5";
  };

  const getRingColor = (s: number) => {
    if (s >= 80) return "stroke-success";
    if (s >= 60) return "stroke-primary";
    if (s >= 40) return "stroke-warning";
    return "stroke-destructive";
  };

  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5",
      getScoreGradient(score)
    )}>
      <div className="flex items-center gap-6">
        {/* Score Ring with Animation */}
        <div className="relative">
          <svg className="h-32 w-32 -rotate-90 transform">
            <circle
              className="stroke-muted"
              strokeWidth="8"
              fill="none"
              r="54"
              cx="64"
              cy="64"
            />
            <motion.circle
              className={cn("transition-colors duration-500", getRingColor(score))}
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              r="54"
              cx="64"
              cy="64"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: strokeDashoffset }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{ strokeDasharray: circumference }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span 
              className={cn("text-4xl font-bold tabular-nums", getScoreColor(score))}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {score}
            </motion.span>
            <span className="text-xs text-muted-foreground">/100</span>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">AI Investment Score</p>
          <motion.p 
            className={cn("mt-1 text-2xl font-semibold", getScoreColor(score))}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {label}
          </motion.p>
          <motion.p 
            className="mt-2 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Based on 23 market signals and historical data patterns
          </motion.p>
        </div>
      </div>
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
}
