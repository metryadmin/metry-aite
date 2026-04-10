import React from "react";

export function Badge({ className = "", children }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold leading-5 bg-primary/10 text-primary border border-primary/20 ${className}`}>
      {children}
    </span>
  );
}
