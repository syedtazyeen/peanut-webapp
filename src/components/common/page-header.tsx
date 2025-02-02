"use client";

import React from "react";
import { Button } from "../ui/button";
import { MenuIcon, PanelRightOpen } from "lucide-react";
import useUiStore from "@/store/ui";
import { useRouter } from "next/navigation";

interface PageHeaderProps {
  name?: string;
  children?: React.ReactNode;
  options?: any;
}

export default function PageHeader({ name, children }: PageHeaderProps) {
  const router = useRouter();
  const { collapsed, setCollapsed } = useUiStore();

  function handleCollapse() {
    setCollapsed(!collapsed);
  }

  function handleWorkspaceClick() {
    router.push("/home");
  }
  return (
    <header className="flex gap-2 items-center">
      <div>
        <Button onClick={handleCollapse} variant="ghost" size="icon">
          {collapsed ? (
            <MenuIcon className="size-5" />
          ) : (
            <PanelRightOpen className="size-5" />
          )}
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <Button
          onClick={handleWorkspaceClick}
          variant="ghost"
          size="sm"
          className="px-2 h-7"
        >
          Workspace
        </Button>
        <span className="text-muted-foreground">/</span>
        <Button variant="ghost" size="sm" className="px-2 h-7">
          {name}
        </Button>
      </div>
      <div>{children}</div>
    </header>
  );
}
