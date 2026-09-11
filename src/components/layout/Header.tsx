import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
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
import logoMark from "@/assets/logo/logo-mark.png";

const serviceIconsMap: Record<string, typeof Building2> = {
  Building2,
  Wrench,
  Flame,
  Zap,
  Cpu,
  Layers,
  Users,
};

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/industries", label: "Industries" },
  { to: "/projects", label: "Projects" },
  { to: "/hse-quality", label: "HSE & Quality" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setServicesDropdownOpen(false), 150);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <div className="technical-container">
        <div
          className={`glass-bar rounded-2xl px-4 transition-all duration-500 sm:px-5 ${
            scrolled ? "shadow-lift" : ""
          }`}
        >
          <div className="flex h-16 items-center justify-between gap-6 lg:h-18">
            {/* Brand */}
            <Link
              to="/"
              className="group flex shrink-0 items-center gap-3"
              aria-label="Shield Global Technical Services LLC home"
            >
              <img
                src={logoFull}
                alt="Shield Global Technical Services LLC"
                className="hidden h-9 w-auto object-contain sm:block lg:h-10"
              />
              <img
                src={logoMark}
                alt="Shield Global Technical Services LLC"
                className="h-9 w-auto object-contain sm:hidden"
              />
            </Link>

            {/* Desktop nav */}
            <div className="ml-auto hidden items-center gap-1 lg:flex">
              <nav className="flex items-center" aria-label="Main navigation">
                {navLinks.slice(0, 2).map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="technical-link px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground data-[status=active]:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Services dropdown */}
                <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <Link
                    to="/services"
                    className={`technical-link inline-flex items-center gap-1 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                      servicesDropdownOpen
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    Services
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180 text-primary-bright" : ""
                      }`}
                    />
                  </Link>

                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="glass-bar absolute right-0 top-full z-50 mt-3 w-[640px] rounded-2xl p-5 shadow-lift"
                      >
                        <div className="mb-3 flex items-center justify-between border-b border-border pb-3">
                          <div className="section-label">Service Divisions</div>
                          <Link
                            to="/services"
                            className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.14em] text-foreground hover:text-primary-bright"
                          >
                            All Services <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {servicesList.map((srv) => {
                            const IconComp = serviceIconsMap[srv.icon] || Building2;
                            return (
                              <Link
                                key={srv.id}
                                to="/services"
                                hash={srv.id}
                                className="group/item flex items-start gap-3 rounded-xl border border-transparent p-2.5 transition-all hover:border-primary/40 hover:bg-primary/5"
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-elevated text-primary-bright transition-all group-hover/item:border-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground">
                                  <IconComp className="h-4 w-4" />
                                </span>
                                <div className="space-y-0.5">
                                  <div className="text-[12px] font-bold uppercase tracking-wider text-foreground">
                                    {srv.title}
                                  </div>
                                  <p className="line-clamp-1 text-[11px] leading-normal text-muted-foreground">
                                    {srv.shortDesc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-elevated/60 p-3">
                          <span className="text-[11px] text-muted-foreground">
                            Need specific technical specs or project BOQ?
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              onQuoteOpen();
                            }}
                            className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-primary-bright hover:underline"
                          >
                            Request Quotation <ArrowRight className="h-3 w-3" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.slice(2).map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="technical-link px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground data-[status=active]:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="pl-3">
                <Button onClick={() => onQuoteOpen()} size="sm" className="tracking-[0.14em] uppercase">
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
                onClick={() => setOpen((val) => !val)}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          <MobileMenu
            open={open}
            onClose={() => setOpen(false)}
            mobileServicesOpen={mobileServicesOpen}
            setMobileServicesOpen={setMobileServicesOpen}
            onQuoteOpen={onQuoteOpen}
            serviceIconsMap={serviceIconsMap}
          />
        </div>
      </div>
    </header>
  );
}
