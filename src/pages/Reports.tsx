import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const reports = [
  {
    id: 1,
    property: "245 Park Avenue, Manhattan",
    type: "Commercial",
    score: 87,
    roi: "12.4%",
    risk: "Low",
    date: "Jan 28, 2026",
    status: "complete",
  },
  {
    id: 2,
    property: "1200 Ocean Drive, Miami Beach",
    type: "Multifamily",
    score: 74,
    roi: "9.2%",
    risk: "Moderate",
    date: "Jan 27, 2026",
    status: "complete",
  },
  {
    id: 3,
    property: "890 Market Street, San Francisco",
    type: "Retail",
    score: 62,
    roi: "7.8%",
    risk: "Moderate",
    date: "Jan 26, 2026",
    status: "complete",
  },
  {
    id: 4,
    property: "500 Boylston Street, Boston",
    type: "Office",
    score: 91,
    roi: "14.1%",
    risk: "Low",
    date: "Jan 25, 2026",
    status: "complete",
  },
  {
    id: 5,
    property: "100 Congress Avenue, Austin",
    type: "Mixed Use",
    score: 78,
    roi: "10.3%",
    risk: "Low",
    date: "Jan 24, 2026",
    status: "complete",
  },
  {
    id: 6,
    property: "2500 Sand Hill Road, Menlo Park",
    type: "Office",
    score: 45,
    roi: "5.2%",
    risk: "High",
    date: "Jan 23, 2026",
    status: "complete",
  },
];

const getScoreColor = (score: number) => {
  if (score >= 80) return "text-success";
  if (score >= 60) return "text-primary";
  if (score >= 40) return "text-warning";
  return "text-destructive";
};

const getRiskBadgeClass = (risk: string) => {
  switch (risk) {
    case "Low":
      return "bg-success/10 text-success border-success/20";
    case "Moderate":
      return "bg-warning/10 text-warning border-warning/20";
    case "High":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export default function Reports() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReports = reports.filter((report) =>
    report.property.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground">Reports</h1>
        <p className="mt-1 text-muted-foreground">View and manage your deal analyses</p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 border-border bg-muted/50 pl-10 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="gap-2 border-border text-muted-foreground hover:text-foreground">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="gap-2 border-border text-muted-foreground hover:text-foreground">
            <Download className="h-4 w-4" />
            Export All
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Property
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Investment Score
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  ROI
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Risk Level
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredReports.map((report) => (
                <tr
                  key={report.id}
                  onClick={() => navigate("/deal-result")}
                  className="cursor-pointer transition-colors hover:bg-muted/50"
                >
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="font-medium text-foreground">{report.property}</span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-muted-foreground">
                    {report.type}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 overflow-hidden rounded-full bg-muted">
                        <div
                          className={cn(
                            "h-full rounded-full",
                            report.score >= 80
                              ? "bg-success"
                              : report.score >= 60
                              ? "bg-primary"
                              : report.score >= 40
                              ? "bg-warning"
                              : "bg-destructive"
                          )}
                          style={{ width: `${report.score}%` }}
                        />
                      </div>
                      <span className={cn("text-lg font-semibold tabular-nums", getScoreColor(report.score))}>
                        {report.score}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-foreground">
                    {report.roi}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Badge variant="outline" className={cn("font-medium", getRiskBadgeClass(report.risk))}>
                      {report.risk}
                    </Badge>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-muted-foreground">
                    {report.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredReports.length === 0 && (
          <div className="flex h-32 items-center justify-center text-muted-foreground">
            No reports found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
