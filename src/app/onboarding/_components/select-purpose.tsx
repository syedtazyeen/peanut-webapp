import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Home } from "lucide-react";
import React from "react";
import SelectWrapper from "./select-wrapper";
import useOnboardStore from "@/store/onboard";
import SelectHeader from "./select-header";

export default function SelectPurpose() {
  const { setStage, dataPurpose, setDataPurpose } = useOnboardStore();

  return (
    <>
      <SelectHeader
        title="Create a new workspace"
        subtitle="Select a purpose to customize your experience"
      />

      <div className="w-full flex-1 flex flex-col space-y-4">
        <SelectWrapper
          onClick={() => setDataPurpose("work")}
          selected={dataPurpose == "work"}
          className="w-full flex items-center gap-4"
        >
          <Building2 />
          <div>
            <p className="font-medium">For work</p>
            <p className="text-xs text-muted-foreground">
              Track projects, meetings and write docs
            </p>
          </div>
        </SelectWrapper>
        <SelectWrapper
          onClick={() => setDataPurpose("personal")}
          selected={dataPurpose == "personal"}
          className="w-full flex items-center gap-4"
        >
          <Home />
          <div>
            <p className="font-medium">For personal</p>
            <p className="text-xs text-muted-foreground">
              Add notes, keep organized and clear
            </p>
          </div>
        </SelectWrapper>
      </div>

      <Button
        onClick={() => setStage(1)}
        className="w-full flex items-center justify-center gap-2 group"
        disabled={!dataPurpose}
      >
        Continue
        <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform ease-in duration-200 group-disabled:translate-x-0" />
      </Button>
    </>
  );
}
