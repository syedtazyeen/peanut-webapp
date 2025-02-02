import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";
import { cn } from "@/lib/utils";

interface DropdownContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const DropdownContext = createContext<DropdownContextProps | undefined>(
  undefined
);

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Dropdown({ children, className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, dropdownRef }}>
      <div className={cn("relative", className)} ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

interface DropdownTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function DropdownTrigger({
  children,
  className,
  ...props
}: DropdownTriggerProps) {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownTrigger must be used within a Dropdown");
  }
  const { isOpen, setIsOpen } = context;

  return (
    <button
      className={cn("w-full",className)}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
    </button>
  );
}

interface DropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DropdownContent({ children, className }: DropdownContentProps) {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownContent must be used within a Dropdown");
  }
  const { isOpen } = context;

  return (
    isOpen && (
      <div
        className={cn(
          "absolute z-50 top-full w-fit bg-border rounded-lg shadow-xl overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    )
  );
}
