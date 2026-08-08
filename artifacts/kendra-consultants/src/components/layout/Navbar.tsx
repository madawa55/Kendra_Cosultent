import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import mainLogo from "@assets/WhatsApp_Image_2026-08-02_at_02.10.15-removebg-preview_1785952619625.png";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-primary py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50">
            <img src={mainLogo} alt="Kendra Consultants Logo" className="h-10 w-10 object-contain" />
            <div className="flex flex-col text-white leading-tight">
              <span className="font-serif font-bold text-lg tracking-wider uppercase">KENDRA</span>
              <span className="text-[0.65rem] text-secondary tracking-[0.2em]">CONSULTANTS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium transition-colors hover:text-secondary ${
                    location === link.path ? "text-secondary" : "text-white/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#C9A84C] to-[#9A6E1F] text-white px-6 py-2.5 text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-0.5"
            >
              CONSULT KENDRA
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-primary/98 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-8 w-full max-w-sm px-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-2xl font-serif tracking-wide transition-colors ${
                location === link.path ? "text-secondary" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full h-px bg-white/10 my-4" />
          <Link
            href="/contact"
            className="w-full text-center bg-gradient-to-r from-[#C9A84C] to-[#9A6E1F] text-white px-8 py-4 text-sm font-semibold tracking-widest transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            CONSULT KENDRA
          </Link>
        </div>
      </div>
    </header>
  );
}
