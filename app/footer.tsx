import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 bg-black text-white/60 ">
      <div className="custom-container space-y-12">
        <div className="lg:grid lg:grid-cols-3 gap-6 space-y-6 lg:space-y-0">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-semiold mb-2 tracking-tight text-white">
              Durova
            </Link>
            <p className="text-sm  lg:max-w-[300px] text-justify">
              Advancing flood resilience through technology and coordination in Kenya.
            </p>
          </div>

          <div className="flex flex-col  gap-2 text-sm text-left">
            <p className="text-white font-semibold">Pages</p>
            <Link href="#about" className="hover:underline hover:text-white transition-colors">About</Link>
            <Link href="#services" className="hover:underline hover:text-white transition-colors">Services</Link>
            <Link href="#faq" className="hover-underline hover:text-white transition-colors">FAQ</Link>
            <Link href="#contact" className="hover:underline hover:text-white transition-colors">Contact</Link>
            <Link href="#" className="hover:underline hover:text-white transition-colors">Privacy Policy</Link>
          </div>

          <div className="flex flex-col  gap-2 text-sm text-left">
            <p className="text-white font-semibold">Socials</p>
            <Link href="#about" className="hover:underline hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#services" className="hover:underline hover:text-white transition-colors">X</Link>
          </div>
        </div>


        <div className="text-sm text-center text-white">
          © {new Date().getFullYear()} Durova. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
