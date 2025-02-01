import React, { useState, useEffect, useRef } from "react";
import { Button } from "./button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogHeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function DialogHeader({
  children,
  className,
  ...props
}: DialogHeaderProps) {
  return (
    <div className={cn("mb-6 space-y-1", className)} {...props}>
      {children}
    </div>
  );
}

interface DialogTitleProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

export function DialogTitle({
  children,
  className,
  ...props
}: DialogTitleProps) {
  return (
    <h1 className={cn("font-medium text-lg", className)} {...props}>
      {children}
    </h1>
  );
}

interface DialogSubtitleProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

export function DialogSubtitle({
  children,
  className,
  ...props
}: DialogSubtitleProps) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)} {...props}>
      {children}
    </p>
  );
}

interface DialogFooterProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function DialogFooter({
  children,
  className,
  ...props
}: DialogFooterProps) {
  return (
    <div
      className={cn("flex justify-end space-x-4 mt-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface DialogProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  strict?: boolean;
}

export const Dialog = ({
  isOpen,
  onClose,
  children,
  strict,
  className,
  ...props
}: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    if (strict) return;
    onClose && onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 animate-fadeIn"
        onClick={handleClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        className={cn(
          "relative bg-popover p-6 rounded-xl shadow-lg w-fit min-w-96 transition-transform animate-appear",
          className
        )}
        {...props}
      >
          {!strict && (
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              aria-label="Close"
            >
              <X className="size-5 opacity-70" />
            </Button>
          )}
          {children}
      </div>
    </div>
  );
};
