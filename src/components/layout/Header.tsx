import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Cpu,
  Flame,
  Layers,
  Menu,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { servicesList } from "@/assets/data/services";
import { MobileMenu } from "@/components/layout/MobileMenu";
import logoFull from "@/assets/logo/logo-full.png";

const serviceIconsMap: Record<string, typeof Building2> = {
  Building2,
  Wrench,
  Flame,
  Zap,
  Cpu,
  Layers,
  Users,
};

interface HeaderProps {
  onQuoteOpen: () => void;
}

export function Header({ onQuoteOpen }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const navLinkClass = (isActive?: boolean) =>
    `px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors ${
      isActive
        ? "text-white border-b-2 border-red-600"
        : "text-white/80 hover:text-white"
    }`;

  return (
    <>
      {/* Floating dark navbar matching brand screenshot */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0B0E12]/85 backdrop-blur-xl shadow-2xl shadow-black/40 transition-all duration-300 ${
              scrolled ? "h-14 px-5" : "h-16 px-5 sm:h-[72px] sm:px-6"
            }`}
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center shrink-0"
              aria-label="Shield Global Technical Services LLC home"
            >
              <img
                src={logoFull}
                alt="Shield Global"
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-9 sm:h-10" : "h-11 sm:h-12"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <nav className="flex items-center gap-0.5" aria-label="Main navigation">
                <Link to="/" className={navLinkClass(pathname === "/")}>
                  Home
                </Link>

                <Link to="/about" className={navLinkClass(pathname === "/about")}>
                  About
                </Link>

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/services"
                    className={`inline-flex items-center gap-1 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                      servicesDropdownOpen || pathname.startsWith("/services")
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    Services
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[640px] rounded-xl border border-white/10 bg-[#0D1117] p-5 text-white shadow-2xl z-50"
                      >
                        <div className="border-b border-white/10 pb-3 mb-3 flex items-center justify-between px-1">
                          <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-white/50">
                            Service Divisions
                          </div>
                          <Link
                            to="/services"
                            className="text-[11px] font-bold uppercase tracking-wider text-red-500 hover:text-red-400 flex items-center gap-1"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            View all <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                          {servicesList.map((srv) => {
                            const IconComp = serviceIconsMap[srv.icon] || Building2;
                            return (
                              <Link
                                key={srv.id}
                                to="/services"
                                hash={srv.id}
                                className="group/item flex items-start gap-3 rounded-lg p-2.5 transition-all hover:bg-white/5 border border-transparent hover:border-white/10"
                                onClick={() => setServicesDropdownOpen(false)}
                              >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 group-hover/item:border-red-500/40 group-hover/item:bg-red-500/10 group-hover/item:text-red-400 transition-all">
                                  <IconComp className="h-4 w-4" />
                                </span>
                                <div className="space-y-0.5">
                                  <div className="text-[12px] font-bold uppercase tracking-wider text-white group-hover/item:text-red-400 transition-colors">
                                    {srv.title}
                                  </div>
                                  <p className="line-clamp-1 text-[11px] text-white/50 leading-normal">
                                    {srv.shortDesc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-4 border-t border-white/10 pt-3 px-2 flex items-center justify-between bg-white/5 rounded-lg p-2.5 text-xs">
                          <span className="text-[11px] text-white/60 font-medium">
                            Need specific technical specs or project BOQ?
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              onQuoteOpen();
                            }}
                            className="text-[11px] font-bold uppercase tracking-wider text-red-500 hover:text-red-400 flex items-center gap-1"
                          >
                            Request Quotation →
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/industries" className={navLinkClass(pathname === "/industries")}>
                  Industries
                </Link>

                <Link to="/projects" className={navLinkClass(pathname === "/projects")}>
                  Projects
                </Link>

                <Link to="/hse-quality" className={navLinkClass(pathname === "/hse-quality")}>
                  HSE & Quality
                </Link>

                <Link to="/careers" className={navLinkClass(pathname === "/careers")}>
                  Careers
                </Link>

                <Link to="/contact" className={navLinkClass(pathname === "/contact")}>
                  Contact
                </Link>
              </nav>

              {/* Primary CTA – red like screenshot */}
              <div className="pl-3">
                <Button
                  onClick={() => onQuoteOpen()}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] rounded-lg shadow-lg shadow-red-900/30 transition-all active:scale-95 border-0"
                >
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>

            {/* Mobile toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setOpen((val) => !val)}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        mobileServicesOpen={mobileServicesOpen}
        setMobileServicesOpen={setMobileServicesOpen}
        onQuoteOpen={onQuoteOpen}
        serviceIconsMap={serviceIconsMap}
      />
    </>
  );
}
