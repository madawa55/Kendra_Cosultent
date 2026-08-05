import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
import mainLogo from "@assets/WhatsApp_Image_2026-07-19_at_08.19.03_1784638489447.jpeg";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <img src={mainLogo} alt="Kendra Consultants Logo" className="h-12 w-12 object-contain bg-white p-1" />
              <div className="flex flex-col text-white leading-tight">
                <span className="font-serif font-bold text-xl tracking-wider uppercase">KENDRA</span>
                <span className="text-[0.65rem] text-secondary tracking-[0.2em]">CONSULTANTS</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed pr-4">
              Built on Trust. Driven by Precision. Delivering trusted construction consultancy across Sri Lanka, the Middle East and Australia.
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
                "Commercial & Contract",
                "Claims & Dispute",
                "Contractor Advisory",
                "Academic Services",
              ].map((service) => (
                <li key={service} className="text-white/70 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary/50 rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Global Presence */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white tracking-wide">Global Offices</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="text-sm text-white/70">
                  <strong className="block text-white mb-1">Sri Lanka (HQ)</strong>
                  Level 12, Parkland Building, Colombo 02
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="text-sm text-white/70">
                  <strong className="block text-white mb-1">Middle East</strong>
                  Office 45, West Bay Commercial, Doha
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="text-sm text-white/70">
                  <strong className="block text-white mb-1">Australia</strong>
                  Suite 8, Collins Street, Melbourne VIC
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mb-6 flex items-center gap-3">
          <Mail className="w-4 h-4 text-secondary shrink-0" />
          <a href="mailto:info@consultkendra.com" className="text-white/70 hover:text-secondary text-sm transition-colors">
            info@consultkendra.com
          </a>
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
