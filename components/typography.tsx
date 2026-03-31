import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyH1({ className, children }: { className?: string, children: ReactNode }) {
  return (
    <h1 className={cn("scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance", className)}>
      {children}
    </h1>
  )
}

export function TypographyH2({ className, children }: { className?: string, children: ReactNode }) {
  return (
    <h2 className={cn("scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
      {children}
    </h2>
  )
}


export function TypographyH3({ className, children }: { className?: string, children: ReactNode }) {
  return (
    <h3 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
      {children}
    </h3>
  )
}

export function TypographyH4({ className, children }: { className?: string, children: ReactNode }) {
  return (
    <h4 className={cn("scroll-m-20 text-lg font-semibold tracking-tight", className)}>
      {children}
    </h4>
  )
}

export function TypographyP({ className, children }: { className?: string, children: ReactNode }) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground", className)}>
      {children}
    </p >
  )
}
