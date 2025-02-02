import React from "react";

interface SelectHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SelectHeader({ title, subtitle }: SelectHeaderProps) {
  return (
    <div className="text-start">
      <h1 className="font-semibold text-xl">{title}</h1>
      <h2 className="text-muted-foreground text-sm">{subtitle}</h2>
    </div>
  );
}
