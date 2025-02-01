"use client";

import React, { useState } from "react";
import SelectPurpose from "./_components/select-purpose";
import useOnboardStore from "@/store/onboard";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogSubtitle,
  DialogTitle,
} from "@/components/ui/dialog";
import SelectDetails from "./_components/select-details";

export default function Onboarding() {
  const { stage, setStage } = useOnboardStore();
  const [isDialogOpen, setDialogOpen] = useState(false);

  function handleBack() {
    if (stage > 0) setStage(stage - 1);
    else setDialogOpen(true);
  }

  function renderStage() {
    switch (stage) {
      case 0:
        return <SelectPurpose />;

      case 1:
        return <SelectDetails />;

      default:
        break;
    }
  }

  return (
    <div className="flex">
      <div className="relative w-full h-screen md:max-w-xl bg-muted md:rounded-r-xl">
        <div>
          <Button
            onClick={handleBack}
            variant="ghost"
            size="icon"
            className="absolute left-0 right-0 m-4"
          >
            <ChevronLeft className="opacity-70 size-5" />
          </Button>
        </div>

        <Dialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogHeader>
            <DialogTitle>Cancel workspace setup?</DialogTitle>
            <DialogSubtitle>
              You'll be taken back to your previous workspace.
            </DialogSubtitle>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost">Continue to setup</Button>
            <Button color="danger">Go back</Button>
          </DialogFooter>
        </Dialog>

        <div className="py-12 w-full h-full flex flex-col max-w-96 m-auto space-y-16 overflow-auto">
          {renderStage()}
        </div>
      </div>
      <div className="flex-1 hidden md:flex flex-col justify-center items-center gap-2">
        <div className="w-96">
          <img src="/ist/work-5.svg" className="w-full h-full" />
        </div>
        <h1 className="text-3xl font-semibold">Workspaces</h1>
        <h1 className="text-lg font-medium text-center text-muted-foreground">
          Collaborate. Organize. Achieve.
        </h1>
      </div>
    </div>
  );
}
