import { Building2, TrendingUp, DollarSign, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { AIScoreWidget } from "@/components/dashboard/AIScoreWidget";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DealsTable } from "@/components/dashboard/DealsTable";
import { ROIChart } from "@/components/dashboard/ROIChart";
import { RiskHeatmap } from "@/components/dashboard/RiskHeatmap";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6 lg:p-8 xl:p-10">
      {/* Hero Section - Full width with asymmetric content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 rounded-2xl border border-border bg-card overflow-hidden"
      >
        <div className="grid lg:grid-cols-12 gap-0">
          <div className="lg:col-span-8 p-6 lg:p-8">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground"
            >
              Turn Property Data into{" "}
              <span className="text-gradient-primary">Investor Intelligence</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed"
            >
              AI-powered analysis for smarter real estate decisions. Evaluate deals, assess risk, 
              and generate institutional-grade investment reports in seconds.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-4 bg-gradient-to-br from-primary/5 to-accent/5 p-6 lg:p-8 flex items-center justify-end"
          >
            <Button 
              onClick={() => navigate("/analyze")}
              className="h-11 bg-gradient-primary px-6 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              Analyze New Deal
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Metrics Row - Spread across full width with staggered animations */}
      <motion.div 
        className="mb-8 grid gap-4 grid-cols-2 lg:grid-cols-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="col-span-2 lg:col-span-1">
          <AIScoreWidget score={84} label="Strong Buy" />
        </motion.div>
        <motion.div variants={itemVariants} className="lg:translate-y-2">
          <MetricCard
            title="Active Deals"
            value="12"
            change="+3 this week"
            changeType="positive"
            icon={Building2}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="lg:-translate-y-1">
          <MetricCard
            title="Avg. ROI"
            value="11.2%"
            change="+2.4% vs last month"
            changeType="positive"
            icon={TrendingUp}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="lg:translate-y-3">
          <MetricCard
            title="Total Portfolio Value"
            value="₹11.8 Cr"
            change="+₹1.5 Cr YTD"
            changeType="positive"
            icon={DollarSign}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="lg:-translate-y-2">
          <MetricCard
            title="Markets Tracked"
            value="24"
            change="5 new markets"
            changeType="neutral"
            icon={MapPin}
          />
        </motion.div>
      </motion.div>

      {/* Charts Row - Asymmetric sizing with stagger */}
      <motion.div 
        className="mb-8 grid gap-6 lg:grid-cols-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ROIChart />
        </motion.div>
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <RiskHeatmap />
        </motion.div>
      </motion.div>

      {/* Deals Table - Full width with delayed entrance */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <DealsTable />
      </motion.div>
    </div>
  );
}
