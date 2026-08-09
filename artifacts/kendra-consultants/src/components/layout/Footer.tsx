import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import mainLogo from "@assets/WhatsApp_Image_2026-08-02_at_02.10.15-removebg-preview_1785952619625.png";

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <img src={mainLogo} alt="Kendra Consultants Logo" className="h-12 w-12 object-contain" />
              <div className="flex flex-col text-white leading-tight">
                <span className="font-serif font-bold text-xl tracking-wider uppercase">KENDRA</span>
                <span className="text-[0.65rem] text-secondary tracking-[0.2em]">CONSULTANTS</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed pr-4">
             A globally trusted leader in shaping the future of the built environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Projects Portfolio", path: "/projects" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-white/70 hover:text-secondary text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary/50 rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white tracking-wide">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Cost Planning & Estimating",
                "Procurement & Tendering",
                "Commercial & Contract Management",
                "Claims & Dispute Management",
                "Contractor Advisory Services",
                "Academic Services",
              ].map((service) => (
                <li key={service} className="text-white/70 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary/50 rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Global Offices */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white tracking-wide">Global Offices</h4>
            <ul className="space-y-5">
              {[
                { country: "Sri Lanka", city: "Colombo", role: "Head Office" },
                { country: "Middle East", city: "Dubai, United Arab Emirates" },
                { country: "Australia", city: "" },
              ].map((office) => (
                <li key={office.country} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div className="text-sm text-white/70">
                    <strong className="block text-white mb-1">{office.country}</strong>
                    {office.city && (
                      <span className="block border-l border-white/20 pl-3">
                        {office.city}{office.role && <> — {office.role}</>}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mb-6 flex items-center gap-3">
          <Mail className="w-4 h-4 text-secondary shrink-0" />
          <a href="mailto:info@consultkendra.com" className="text-white/70 hover:text-secondary text-sm transition-colors">
            info@consultkendra.com
          </a>
        </div>

        <div className="flex items-center gap-4 mb-8">
          {[
            { name: "LinkedIn", href: "https://www.linkedin.com/company/kendraconsultants", Icon: Linkedin },
            { name: "YouTube", href: "https://www.youtube.com/@KendraConsultants", Icon: Youtube },
            { name: "Instagram", href: "https://www.instagram.com/kendra_consultants", Icon: Instagram },
            { name: "TikTok", href: "https://www.tiktok.com/@kendra_consultants", Icon: TiktokIcon },
            { name: "Facebook", href: "https://www.facebook.com/kendraconsultants", Icon: Facebook },
          ].map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary/60 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Kendra Consultants. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
