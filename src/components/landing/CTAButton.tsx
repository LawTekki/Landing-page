import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid" | "dark";
  children: React.ReactNode;
}

export const CTAButton = ({
  variant = "solid",
  children,
  className,
  ...props
}: CTAButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center gap-2 rounded text-xs font-medium leading-[15.6px] tracking-[-0.24px] cursor-pointer px-2.5 py-4",
        {
          "border text-white border-solid border-white": variant === "outline",
          "text-[#6B047C] bg-white": variant === "solid",
          "text-[#F0E6F2] bg-[#300238]": variant === "dark",
        },
        className,
      )}
      {...props}
    >
      {children}
      <i className="ti ti-arrow-right text-base" />
    </button>
  );
};
