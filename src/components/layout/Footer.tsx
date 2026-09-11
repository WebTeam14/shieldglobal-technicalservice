import { Link } from "@tanstack/react-router";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesList } from "@/assets/data/services";
import logoFull from "@/assets/logo/logo-full.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/projects", label: "Projects" },
  { to: "/hse-quality", label: "HSE & Quality" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact Us" },
] as const;

interface FooterProps {
  onQuoteOpen: () => void;
}

export function Footer({ onQuoteOpen }: FooterProps) {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-deep text-foreground">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

      <div className="technical-container relative py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div className="space-y-5">
            <img
              src={logoFull}
              alt="Shield Global Technical Services LLC"
              className="h-11 w-auto object-contain"
            />
            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
              Delivering excellence across building construction, facility management, oil & gas,
              energy utilities, MEP contracting, welding fabrication, and technical engineering
              support.
            </p>
            <Button
              onClick={() => onQuoteOpen()}
              variant="outline"
              size="sm"
              className="uppercase tracking-[0.14em]"
            >
              Request a Quotation
            </Button>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <div className="section-label">Service Divisions</div>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              {servicesList.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to="/services"
                    hash={srv.id}
                    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <div className="section-label">Navigation</div>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <div className="section-label">Regional Operations</div>
            <div className="space-y-2.5 text-xs text-muted-foreground">
              <p>Industrial Area & Offshore Technical Operations</p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary-bright" /> info@shieldglobal.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary-bright" /> +971 4 000 0000 / Quotations
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/70 p-4">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-primary-bright" /> Standards & Compliance
              </div>
              <div className="mt-2 text-[11px] font-semibold text-foreground">
                ISO 9001:2015 • ISO 14001:2015 • ISO 45001:2018
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-[11px] text-muted-foreground md:flex-row">
          <div>
            © {new Date().getFullYear()} Shield Global Technical Services LLC. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-[0.14em]">
            <Link to="/hse-quality" className="hover:text-foreground">
              HSE Policy
            </Link>
            <Link to="/about" className="hover:text-foreground">
              Quality Assurance
            </Link>
            <Link to="/contact" className="hover:text-foreground">
              Tenders & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
