import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnalyzeSteps } from "@/components/analyze/AnalyzeSteps";
import { PropertyBasicsStep } from "@/components/analyze/PropertyBasicsStep";
import { FinancialInputsStep } from "@/components/analyze/FinancialInputsStep";
import { AIProcessingStep } from "@/components/analyze/AIProcessingStep";
import { ArrowLeft, ArrowRight } from "lucide-react";

const steps = ["Property Basics", "Financial Inputs", "AI Analysis"];

export default function AnalyzeDeal() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  
  const [propertyData, setPropertyData] = useState({
    location: "",
    propertyType: "",
    purchasePrice: "",
    monthlyRent: "",
    investmentHorizon: 5,
  });

  const [financialData, setFinancialData] = useState({
    downPayment: "",
    financingRate: 6.5,
    operatingCosts: "",
    appreciationRate: 3.5,
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnalysisComplete = () => {
    navigate("/deal-result");
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-foreground">Analyze New Deal</h1>
          <p className="mt-2 text-muted-foreground">
            Enter property details for AI-powered investment analysis
          </p>
        </div>

        {/* Steps indicator */}
        <AnalyzeSteps currentStep={currentStep} steps={steps} />

        {/* Step content */}
        <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
          {currentStep === 0 && (
            <PropertyBasicsStep
              data={propertyData}
              onChange={(data) => setPropertyData({ ...propertyData, ...data })}
            />
          )}
          {currentStep === 1 && (
            <FinancialInputsStep
              data={financialData}
              onChange={(data) => setFinancialData({ ...financialData, ...data })}
            />
          )}
          {currentStep === 2 && (
            <AIProcessingStep onComplete={handleAnalysisComplete} />
          )}

          {/* Navigation buttons */}
          {currentStep < 2 && (
            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                className="bg-gradient-primary text-primary-foreground hover:opacity-90"
              >
                {currentStep === 1 ? "Run Analysis" : "Continue"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
