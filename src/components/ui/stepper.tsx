import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StepperStep {
  title: string;
  description?: string;
}

export function Stepper({
  steps,
  currentStep = 1,
  className,
}: {
  steps: StepperStep[];
  currentStep?: number;
  className?: string;
}) {
  return (
    <div className={cn("w-full flex items-center justify-between", className)}>
      {steps.map((step, idx) => {
        const stepNum = idx + 1;
        const isCompleted = stepNum < currentStep;
        const isCurrent = stepNum === currentStep;

        return (
          <React.Fragment key={idx}>
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold transition-all shrink-0 font-mono",
                  isCompleted && "bg-purple-600 border-purple-500 text-white shadow-md shadow-purple-950",
                  isCurrent && "border-purple-500 bg-purple-950/60 text-purple-300 ring-4 ring-purple-950/40",
                  !isCompleted && !isCurrent && "border-gray-800 bg-gray-900 text-gray-500"
                )}
              >
                {isCompleted ? <Check className="w-4 h-4 text-white" /> : stepNum}
              </div>
              <div className="hidden sm:block">
                <span className={cn("text-xs font-semibold block", isCurrent ? "text-white" : "text-gray-400")}>
                  {step.title}
                </span>
                {step.description && <span className="text-[10px] text-gray-500 block">{step.description}</span>}
              </div>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-0.5 mx-3 rounded transition-all",
                  stepNum < currentStep ? "bg-purple-600" : "bg-gray-800"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
