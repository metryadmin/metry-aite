import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:scale-95";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 border border-primary-dark/20",
      secondary: "bg-surface text-text hover:bg-surface-hover border border-border/50 shadow-sm hover:shadow-md",
      outline: "border-2 border-border/50 bg-transparent text-text hover:border-primary hover:text-primary hover:bg-primary/5 shadow-sm",
      ghost: "bg-transparent text-text-muted hover:bg-surface-hover hover:text-text",
    };

    const sizes = {
      sm: "h-10 px-5 text-sm",
      md: "h-12 px-7 text-base",
      lg: "h-14 px-9 text-lg",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
