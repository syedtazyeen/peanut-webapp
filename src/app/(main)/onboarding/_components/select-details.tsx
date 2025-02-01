import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FolderPlus, Pickaxe } from "lucide-react";
import useOnboardStore from "@/store/onboard";
import SelectHeader from "./select-header";

export default function SelectDetails() {
  const {
    dataName,
    setDataName,
    dataDescription,
    setDataDescription,
    setStage,
  } = useOnboardStore();
  return (
    <>
      <SelectHeader
        title="Create a new workspace"
        subtitle="Set things up with a few quick details"
      />
      <div className="flex-1 space-y-4">
        <div className="space-y-1 group">
          <Label required>Workspace name</Label>
          <Input
            value={dataName || ""}
            onChange={(e) => setDataName(e.target.value)}
          />
        </div>

        <div className="space-y-1 group">
          <Label>Description name</Label>
          <Textarea
            value={dataDescription || ""}
            onChange={(e) => setDataDescription(e.target.value)}
          />
        </div>
      </div>

      <Button
        onClick={() => setStage(1)}
        className="w-full flex items-center justify-center gap-2 group"
        disabled={!dataName || dataName.trim().length < 1}
      >
        Create workspace
      </Button>
    </>
  );
}
