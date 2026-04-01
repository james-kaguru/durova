"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="custom-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className=" text-xl tracking-tight">Durova</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-primary">About</Link>
          <Link href="#services" className="transition-colors hover:text-primary">Services</Link>
          <Link href="#faq" className="transition-colors hover:text-primary">FAQ</Link>
          <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">

        </div>
      </div>
    </header>
  );
}
