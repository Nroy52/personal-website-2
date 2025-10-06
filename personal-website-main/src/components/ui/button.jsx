import React from "react";
import clsx from "clsx";

const base =
  "inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
const variants = {
  default: "bg-gold text-black hover:bg-gold-dark",
  outline: "border border-gold text-gold hover:bg-gold/10",
  ghost: "text-foreground hover:bg-white/10",
};
const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-10 px-5 text-base",
  lg: "h-12 px-6 text-lg",
};

export function Button({ className, variant = "default", size = "md", ...props }) {
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
}

export default Button;
