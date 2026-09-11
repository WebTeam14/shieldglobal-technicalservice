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
  Shield,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { servicesList } from "@/assets/data/services";
import { MobileMenu } from "@/components/layout/MobileMenu";
import logoImg from "@/assets/logo/logo.png";

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
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  return (
    <>
{/* Main Header - Clean White Background, Left Logo & Right-Aligned Menus */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 text-slate-900 border-b border-slate-200/90 backdrop-blur-md shadow-xs transition-all duration-300">
        <div className="technical-container">
          <div className="flex h-20 items-center justify-between gap-6 lg:h-24">
            {/* Left Side Logo: Shield Global Technical Services LLC */}
            <Link
              to="/"
              className="group flex items-center gap-3.5 shrink-0"
              aria-label="Shield Global Technical Services LLC home"
            >
              <img
                src={logoImg}
                alt="Shield Global Technical Services LLC"
                className="h-11 w-auto object-contain sm:h-12"
              />
              <div className="flex flex-col">
                <span className="font-sans text-sm sm:text-base font-extrabold uppercase tracking-[0.14em] text-slate-900 leading-tight group-hover:text-primary transition-colors">
                  Shield Global
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 leading-tight">
                  Technical Services LLC
                </span>
              </div>
            </Link>

            {/* Right Side: Navigation Menus & CTA Button */}
            <div className="ml-auto hidden items-center gap-2 xl:gap-3 lg:flex">
              <nav
                className="flex items-center gap-1 xl:gap-2"
                aria-label="Main navigation"
              >
                {/* Home */}
                <Link
                  to="/"
                  className="px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-700 hover:text-primary transition-colors"
                >
                  Home
                </Link>

                {/* About Us */}
                <Link
                  to="/about"
                  className="px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-700 hover:text-primary transition-colors"
                >
                  About Us
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
                      servicesDropdownOpen ? "text-primary font-bold" : "text-slate-700 hover:text-primary"
                    }`}
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    Services
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180 text-primary" : "text-slate-500"
                      }`}
                    />
                  </Link>

                  {/* Dropdown Menu - Clean White Card */}
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 top-full mt-1.5 w-[620px] rounded-sm border border-slate-200 bg-white p-5 text-slate-900 shadow-2xl backdrop-blur-xl z-50"
                      >
                        <div className="border-b border-slate-100 pb-3 mb-3 flex items-center justify-between px-1">
                          <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-slate-500">
                            Service Divisions
                          </div>
                          <Link
                            to="/services"
                            className="text-[11px] uppercase tracking-[0.14em] font-bold text-primary hover:underline flex items-center gap-1"
                          >
                            All Services <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {servicesList.map((srv) => {
                            const IconComp = serviceIconsMap[srv.icon] || Building2;
                            return (
                              <Link
                                key={srv.id}
                                to="/services"
                                hash={srv.id}
                                className="group/item flex items-start gap-3 rounded-sm p-2.5 transition-all hover:bg-slate-50 border border-transparent hover:border-slate-100"
                              >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-slate-200 bg-slate-50 text-slate-700 group-hover/item:border-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all">
                                  <IconComp className="h-4 w-4" />
                                </span>
                                <div className="space-y-0.5">
                                  <div className="text-[12px] font-bold uppercase tracking-wider text-slate-900 group-hover/item:text-primary transition-colors">
                                    {srv.title}
                                  </div>
                                  <p className="line-clamp-1 text-[11px] text-slate-500 leading-normal">
                                    {srv.shortDesc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-4 border-t border-slate-100 pt-3 px-2 flex items-center justify-between bg-slate-50/80 rounded-sm p-2.5 text-xs">
                          <span className="text-[11px] text-slate-600 font-medium">
                            Need specific technical specs or project BOQ?
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              onQuoteOpen();
                            }}
                            className="text-[11px] font-bold uppercase tracking-wider text-primary hover:underline flex items-center gap-1"
                          >
                            Request Quotation →
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Industries */}
                <Link
                  to="/industries"
                  className="px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-700 hover:text-primary transition-colors"
                >
                  Industries
                </Link>

                {/* Projects */}
                <Link
                  to="/projects"
                  className="px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-700 hover:text-primary transition-colors"
                >
                  Projects
                </Link>

                {/* HSE & Quality */}
                <Link
                  to="/hse-quality"
                  className="px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-700 hover:text-primary transition-colors"
                >
                  HSE & Quality
                </Link>

                {/* Careers */}
                <Link
                  to="/careers"
                  className="px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-700 hover:text-primary transition-colors"
                >
                  Careers
                </Link>

                {/* Contact Us */}
                <Link
                  to="/contact"
                  className="px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-700 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </nav>

              {/* Rightmost CTA Button: Request a Quotation */}
              <div className="pl-2">
                <Button
                  onClick={() => onQuoteOpen()}
                  variant="default"
                  size="sm"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] shadow-sm transition-all active:scale-95 shrink-0"
                >
                  Request a Quotation
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>

            {/* Mobile Hamburger Toggle (Right Aligned on Mobile) */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-800 hover:bg-slate-100"
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
