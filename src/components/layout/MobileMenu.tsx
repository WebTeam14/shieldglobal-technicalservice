import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Building2, ChevronDown, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesList } from "@/assets/data/services";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  mobileServicesOpen: boolean;
  setMobileServicesOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
  onQuoteOpen: () => void;
  serviceIconsMap: Record<string, typeof Building2>;
}

const links = [
  { to: "/", label: "Home", num: "01" },
  { to: "/about", label: "About Us", num: "02" },
] as const;

const tailLinks = [
  { to: "/industries", label: "Industries", num: "04" },
  { to: "/projects", label: "Projects", num: "05" },
  { to: "/hse-quality", label: "HSE & Quality", num: "06" },
  { to: "/careers", label: "Careers", num: "07" },
  { to: "/contact", label: "Contact Us", num: "08" },
] as const;

export function MobileMenu({
  open,
  onClose,
  mobileServicesOpen,
  setMobileServicesOpen,
  onQuoteOpen,
  serviceIconsMap,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="max-h-[78svh] overflow-y-auto overflow-x-hidden border-t border-border lg:hidden"
        >
          <div className="py-4">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={onClose}
                className="flex items-center justify-between border-b border-border py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-foreground"
              >
                <span>{item.label}</span>
                <span className="text-[10px] font-normal text-muted-foreground">{item.num}</span>
              </Link>
            ))}

            {/* Services accordion */}
            <div className="border-b border-border">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between py-3.5 text-left text-sm font-semibold uppercase tracking-[0.14em] text-foreground"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 text-primary-bright transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-1 overflow-hidden pb-3 pl-1"
                  >
                    {servicesList.map((srv) => {
                      const Icon = serviceIconsMap[srv.icon] || Building2;
                      return (
                        <Link
                          key={srv.id}
                          to="/services"
                          hash={srv.id}
                          onClick={onClose}
                          className="flex items-center gap-2.5 py-2 text-[13px] text-muted-foreground"
                        >
                          <Icon className="h-3.5 w-3.5 shrink-0 text-primary-bright" />
                          {srv.title}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {tailLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={onClose}
                className="flex items-center justify-between border-b border-border py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-foreground"
              >
                <span>{item.label}</span>
                <span className="text-[10px] font-normal text-muted-foreground">{item.num}</span>
              </Link>
            ))}

            <div className="mt-5 space-y-3">
              <Button
                onClick={() => {
                  onClose();
                  onQuoteOpen();
                }}
                className="w-full justify-center uppercase tracking-[0.16em]"
                size="lg"
              >
                Request a Quotation <ArrowRight className="ml-1 h-4 w-4" />
              </Button>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary-bright" /> ISO 9001 / 45001 / 14001
                </span>
                <span>tenders@shieldglobal.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
