"use client";

import React, { useEffect, useState } from "react";
import useUiStore from "@/store/ui";
import { cn } from "@/lib/utils";
import SidebarContent from "./sidebar-content";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { collapsed } = useUiStore();
  const [expanded, setExpanded] = useState(collapsed);

  function handleExpand() {
    if (!collapsed) return;
    setTimeout(() => {
      setExpanded(true);
    }, 200);
  }

  function handleCollapse() {
    if (!collapsed) return;
    setTimeout(() => {
      setExpanded(false);
    }, 200);
  }

  useEffect(() => {
    setExpanded(!collapsed);
  }, [collapsed]);

  return (
    <main className="w-full h-screen flex">
      <aside
        onMouseEnter={handleExpand}
        onMouseLeave={handleCollapse}
        className={cn(
          expanded ? "w-64" : "w-4",
          "fixed h-full flex overflow-hidden",
          "transition-all duration-200 ease-in-out"
        )}
      >
        <SidebarContent expanded={expanded} />
      </aside>
      <section
        className={cn(
          "flex-1 py-2 pr-2 transition-all duration-200 ease-in-out",
          expanded ? "ml-64" : "ml-8"
        )}
      >
        {children}
      </section>
    </main>
  );
}
