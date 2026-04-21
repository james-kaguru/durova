import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Durova",
  description: "We are in the mission to save human lives from the risk of floods by providing a platform that helps in the detection ,alerting and coordination of disaster response efforts"
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
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
