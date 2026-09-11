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
          className="max-h-[85vh] overflow-y-auto border-t border-white/10 bg-[#0B0E12] px-6 py-6 text-white shadow-2xl lg:hidden"
        >
          <div className="space-y-1">
            <Link
              to="/"
              className="flex items-center justify-between border-b border-white/10 py-3 text-base font-semibold uppercase tracking-wider text-white"
            >
              <span>Home</span>
              <span className="font-mono text-[10px] text-white/40">01</span>
            </Link>

            <Link
              to="/about"
              className="flex items-center justify-between border-b border-white/10 py-3 text-base font-semibold uppercase tracking-wider text-white"
            >
              <span>About Us</span>
              <span className="font-mono text-[10px] text-white/40">02</span>
            </Link>

            {/* Services accordion */}
            <div className="border-b border-white/10">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between py-3 text-left text-base font-semibold uppercase tracking-wider text-white"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-1 overflow-hidden pb-3 pl-2"
                  >
                    {servicesList.map((srv) => {
                      const Icon = serviceIconsMap[srv.icon] || Building2;
                      return (
                        <Link
                          key={srv.id}
                          to="/services"
                          hash={srv.id}
                          onClick={onClose}
                          className="flex items-center gap-2 py-2 text-sm text-white/60 hover:text-red-500"
                        >
                          <Icon className="h-3.5 w-3.5 shrink-0" />
                          {srv.title}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/industries"
              className="flex items-center justify-between border-b border-white/10 py-3 text-base font-semibold uppercase tracking-wider text-white"
            >
              <span>Industries</span>
              <span className="font-mono text-[10px] text-white/40">04</span>
            </Link>

            <Link
              to="/projects"
              className="flex items-center justify-between border-b border-white/10 py-3 text-base font-semibold uppercase tracking-wider text-white"
            >
              <span>Projects</span>
              <span className="font-mono text-[10px] text-white/40">05</span>
            </Link>

            <Link
              to="/hse-quality"
              className="flex items-center justify-between border-b border-white/10 py-3 text-base font-semibold uppercase tracking-wider text-white"
            >
              <span>HSE & Quality</span>
              <span className="font-mono text-[10px] text-white/40">06</span>
            </Link>

            <Link
              to="/careers"
              className="flex items-center justify-between border-b border-white/10 py-3 text-base font-semibold uppercase tracking-wider text-white"
            >
              <span>Careers</span>
              <span className="font-mono text-[10px] text-white/40">07</span>
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-between border-b border-white/10 py-3 text-base font-semibold uppercase tracking-wider text-white"
            >
              <span>Contact Us</span>
              <span className="font-mono text-[10px] text-white/40">08</span>
            </Link>
          </div>

          <div className="mt-6 space-y-3 border-t border-white/10 pt-4">
            <Button
              onClick={() => {
                onClose();
                onQuoteOpen();
              }}
              className="w-full justify-center bg-primary py-3 text-xs font-bold uppercase tracking-widest text-red-500-foreground shadow-md"
              size="lg"
            >
              Request a Quotation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="h-3.5 w-3.5 text-red-500" /> ISO 9001 / 45001 / 14001
              </span>
              <span>tenders@shieldglobal.com</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}