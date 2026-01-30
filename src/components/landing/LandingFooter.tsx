import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function LandingFooter() {
  return (
    <footer className="border-t border-border/40 py-10 relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <TrendingUp className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold text-foreground">REPitchBook</span>
          </div>
          
          <div className="flex items-center gap-8 text-xs text-muted-foreground">
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Contact</span>
          </div>
          
          <p className="text-xs text-muted-foreground">
            © 2026 REPitchBook. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
