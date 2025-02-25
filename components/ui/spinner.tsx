import * as React from "react"
import { cn } from "@/lib/utils"

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  color?: "default" | "primary" | "green"
}

export function Spinner({
  className,
  size = "md",
  color = "green",
  ...props
}: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8"
  }

  const colorClasses = {
    default: "border-gray-600 dark:border-gray-300",
    primary: "border-blue-600 dark:border-blue-400",
    green: "border-green-600 dark:border-green-400"
  }

  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-2 border-solid",
        "border-r-transparent",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      role="status"
      aria-label="Loading"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}