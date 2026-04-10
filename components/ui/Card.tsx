import React from "react";

export function Card({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={`bg-surface/80 backdrop-blur-md border border-border/50 rounded-3xl shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-8 md:p-12 ${className}`} {...props}>
      {children}
    </div>
  );
}
