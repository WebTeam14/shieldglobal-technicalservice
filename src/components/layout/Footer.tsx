import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesList } from "@/assets/data/services";
import logoImg from "@/assets/logo/logo.png";

interface FooterProps {
  onQuoteOpen: () => void;
}

export function Footer({ onQuoteOpen }: FooterProps) {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="technical-container py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Shield Global" className="h-9 w-auto object-contain" />
              <div>
                <div className="font-sans text-sm font-bold uppercase tracking-[0.14em]">
                  Shield Global
                </div>
                <div className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                  Technical Services LLC
                </div>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Delivering excellence across building construction, facility management, oil & gas,
              energy utilities, MEP contracting, welding fabrication, and technical engineering
              support.
            </p>
            <div className="pt-2">
              <Button
                onClick={() => onQuoteOpen()}
                variant="outline"
                size="sm"
                className="text-xs uppercase tracking-wider font-semibold"
              >
                Request a Quotation
              </Button>
            </div>
          </div>

          {/* Column 2: Service Divisions */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
              Service Divisions
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {servicesList.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to="/services"
                    hash={srv.id}
                    className="block py-0.5 transition-colors hover:text-primary"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="transition-colors hover:text-primary">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/projects" className="transition-colors hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/hse-quality" className="transition-colors hover:text-primary">
                  HSE & Quality
                </Link>
              </li>
              <li>
                <Link to="/careers" className="transition-colors hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Accreditations */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
              Regional Operations
            </div>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>Industrial Area & Offshore Technical Operations</p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary" /> info@shieldglobal.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary" /> +971 4 000 0000 / Quotations
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Standards & Compliance
              </div>
              <div className="mt-1 text-[11px] font-medium text-foreground">
                ISO 9001:2015 • ISO 14001:2015 • ISO 45001:2018
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-[11px] text-muted-foreground md:flex-row">
          <div>
            © {new Date().getFullYear()} Shield Global Technical Services LLC. All rights reserved.
          </div>
          <div className="flex gap-6 text-[10px] uppercase tracking-wider">
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