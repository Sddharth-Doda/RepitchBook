import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { MapPin } from "lucide-react";

interface PropertyBasicsStepProps {
  data: {
    location: string;
    propertyType: string;
    purchasePrice: string;
    monthlyRent: string;
    investmentHorizon: number;
  };
  onChange: (data: Partial<PropertyBasicsStepProps["data"]>) => void;
}

export function PropertyBasicsStep({ data, onChange }: PropertyBasicsStepProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="location" className="text-foreground">Property Location</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="location"
            placeholder="Enter address or neighborhood..."
            value={data.location}
            onChange={(e) => onChange({ location: e.target.value })}
            className="h-12 border-border bg-muted/50 pl-10 text-foreground placeholder:text-muted-foreground focus:bg-muted"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="propertyType" className="text-foreground">Property Type</Label>
        <Select value={data.propertyType} onValueChange={(value) => onChange({ propertyType: value })}>
          <SelectTrigger className="h-12 border-border bg-muted/50 text-foreground">
            <SelectValue placeholder="Select property type" />
          </SelectTrigger>
          <SelectContent className="border-border bg-popover">
            <SelectItem value="multifamily">Multifamily</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
            <SelectItem value="retail">Retail</SelectItem>
            <SelectItem value="office">Office</SelectItem>
            <SelectItem value="industrial">Industrial</SelectItem>
            <SelectItem value="mixed-use">Mixed Use</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="purchasePrice" className="text-foreground">Purchase Price</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              id="purchasePrice"
              placeholder="0"
              value={data.purchasePrice}
              onChange={(e) => onChange({ purchasePrice: e.target.value })}
              className="h-12 border-border bg-muted/50 pl-8 text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="monthlyRent" className="text-foreground">Expected Monthly Rent</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              id="monthlyRent"
              placeholder="0"
              value={data.monthlyRent}
              onChange={(e) => onChange({ monthlyRent: e.target.value })}
              className="h-12 border-border bg-muted/50 pl-8 text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-foreground">Investment Horizon</Label>
          <span className="text-sm font-medium text-primary">{data.investmentHorizon} years</span>
        </div>
        <Slider
          value={[data.investmentHorizon]}
          onValueChange={([value]) => onChange({ investmentHorizon: value })}
          min={1}
          max={15}
          step={1}
          className="py-2"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1 year</span>
          <span>15 years</span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Our AI evaluates these signals to model investment strength and market positioning.
      </p>
    </div>
  );
}
