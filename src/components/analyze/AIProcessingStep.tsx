import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Check, Loader2 } from "lucide-react";

const processingSteps = [
  { message: "Analyzing market trends...", duration: 1200 },
  { message: "Evaluating risk signals...", duration: 1000 },
  { message: "Modeling ROI scenarios...", duration: 1400 },
  { message: "Assessing neighborhood outlook...", duration: 1100 },
  { message: "Generating investor narrative...", duration: 1300 },
];

interface AIProcessingStepProps {
  onComplete: () => void;
}

export function AIProcessingStep({ onComplete }: AIProcessingStepProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    if (currentIndex >= processingSteps.length) {
      setTimeout(onComplete, 500);
      return;
    }

    const timer = setTimeout(() => {
      setCompletedSteps((prev) => [...prev, currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, processingSteps[currentIndex].duration);

    return () => clearTimeout(timer);
  }, [currentIndex, onComplete]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center">
      {/* Animated ring */}
      <div className="relative mb-12">
        <div className="h-32 w-32 animate-pulse-ring rounded-full border-4 border-primary/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-24 w-24 animate-spin rounded-full border-4 border-transparent border-t-primary" style={{ animationDuration: '2s' }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-gradient-primary shadow-glow" />
        </div>
      </div>

      {/* Status messages */}
      <div className="w-full max-w-md space-y-3">
        {processingSteps.map((step, index) => (
          <div
            key={step.message}
            className={cn(
              "flex items-center gap-3 rounded-lg border border-border bg-card/50 px-4 py-3 transition-all duration-300",
              completedSteps.includes(index) && "border-success/30 bg-success/5",
              index === currentIndex && "border-primary/30 bg-primary/5"
            )}
            style={{
              opacity: index <= currentIndex ? 1 : 0.4,
              transform: index <= currentIndex ? "translateX(0)" : "translateX(8px)",
              transition: "all 0.3s ease-out",
            }}
          >
            <div className="flex h-6 w-6 items-center justify-center">
              {completedSteps.includes(index) ? (
                <Check className="h-4 w-4 text-success" />
              ) : index === currentIndex ? (
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
              ) : (
                <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
              )}
            </div>
            <span
              className={cn(
                "text-sm font-medium",
                completedSteps.includes(index)
                  ? "text-success"
                  : index === currentIndex
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {step.message}
            </span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-8 w-full max-w-md">
        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-primary transition-all duration-500"
            style={{ width: `${(completedSteps.length / processingSteps.length) * 100}%` }}
          />
        </div>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          {completedSteps.length === processingSteps.length
            ? "Analysis complete!"
            : `Processing... ${Math.round((completedSteps.length / processingSteps.length) * 100)}%`}
        </p>
      </div>
    </div>
  );
}
