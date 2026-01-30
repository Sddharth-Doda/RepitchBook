import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

export function MetricCard({ title, value, change, changeType = "neutral", icon: Icon }: MetricCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground">{title}</p>
          <p className="mt-2 text-xl font-semibold tabular-nums text-foreground transition-transform duration-300 group-hover:scale-105 origin-left">{value}</p>
          {change && (
            <p className={cn(
              "mt-1 text-xs font-medium transition-all duration-300",
              changeType === "positive" && "text-success",
              changeType === "negative" && "text-destructive",
              changeType === "neutral" && "text-muted-foreground"
            )}>
              {change}
            </p>
          )}
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
          <Icon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
