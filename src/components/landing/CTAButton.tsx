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
        "flex items-center gap-2 rounded text-xs font-medium leading-[15.6px] tracking-[-0.24px] cursor-pointer px-2.5 py-4 transition-all duration-300 ease-in-out transform hover:scale-105",
        {
          "border text-white border-solid border-white hover:bg-white/10": variant === "outline",
          "text-[#6B047C] bg-white hover:bg-purple-100": variant === "solid",
          "text-[#F0E6F2] bg-[#300238] hover:bg-[#3d023f]": variant === "dark",
        },
        className,
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        <i className="ti ti-arrow-right text-base transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </button>
  );
};
