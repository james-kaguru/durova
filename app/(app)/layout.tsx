import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./navbar";

// const dmMono = DM_Mono({ subsets: ["latin"], weight: "400" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Durova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", spaceMono.className)}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <Navbar />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
