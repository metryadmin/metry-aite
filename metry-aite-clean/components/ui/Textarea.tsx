import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          ref={ref}
          className={`w-full p-4 rounded-xl border bg-background text-text transition-all duration-200 outline-none resize-y min-h-[120px] placeholder:text-text-muted/50
          ${error ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-border focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-text-muted/30'}
          ${className}`}
          {...props}
        />
        {error && <span className="text-red-500 text-sm mt-1.5 block">{error}</span>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
