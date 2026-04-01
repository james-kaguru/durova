"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function SmNavSheet() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu strokeWidth={1} />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="border-b">
          <SheetTitle className="text-primary text-lg uppercase">
            Durova
          </SheetTitle>
          <SheetDescription className="sr-only">Durova</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col items-center gap-6 text-sm font-medium pt-3 uppercase">
          <SheetClose>Home</SheetClose>
          <SheetClose className="transition-colors hover:text-primary">
            About
          </SheetClose>
          <SheetClose className="transition-colors hover:text-primary">
            Technology
          </SheetClose>
          <SheetClose className="transition-colors hover:text-primary">
            Blog
          </SheetClose>
          <SheetClose className="transition-colors hover:text-primary">
            Dashboard
          </SheetClose>
          <SheetClose className="transition-colors hover:text-primary">
            Contact
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="custom-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3 ">
          <SmNavSheet />
          <Link
            href="/"
            className="flex items-center space-x-2 text-primary tracking-tight font-semibold"
          >
            <span className=" text-2xl tracking-tight uppercase">Durova</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium uppercase">
          <Link href="#about" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link
            href="#services"
            className="transition-colors hover:text-primary"
          >
            Technology
          </Link>
          <Link
            href="#services"
            className="transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <Link
            href="#services"
            className="transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
