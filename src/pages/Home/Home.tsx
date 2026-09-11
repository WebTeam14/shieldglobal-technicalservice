import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Cpu,
  Flame,
  HardHat,
  Layers,
  RotateCcw,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import heroTurbine from "@/assets/images/hero-turbine.jpg";
import qualityImg from "@/assets/images/quality-detail.jpg";
import processImg from "@/assets/images/industry-process.jpg";
import machiningImg from "@/assets/images/product-machining.jpg";
import valveImg from "@/assets/images/product-valve.jpg";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/shared/quote-modal";

// ─── Data for Home page sections ───────────────────────────────────────────
const mainPillars = [
  {
    number: "01",
    title: "Building Construction",
    tagline: "Civil & Structural",
    desc: "Turnkey structural and civil engineering for industrial plants, commercial facilities and specialised infrastructure.",
    features: [
      "Civil & Structural Engineering",
      "Industrial Plants & Warehouses",
      "Foundation & Concrete Works",
      "Retrofitting & Refurbishment",
    ],
    slug: "building-construction",
    icon: Building2,
    image: processImg,
  },
  {
    number: "02",
    title: "Facility Management",
    tagline: "Asset Lifecycle",
    desc: "Integrated hard & soft FM ensuring uptime, preventive maintenance and energy efficiency across complexes.",
    features: [
      "Planned Preventive Maintenance",
      "Corrective & Emergency Repairs",
      "Asset Lifecycle Management",
      "24/7 Rapid Response",
    ],
    slug: "facility-management",
    icon: Wrench,
    image: qualityImg,
  },
  {
    number: "03",
    title: "Oil & Gas",
    tagline: "Upstream to Downstream",
    desc: "High-spec mechanical and pipeline support for refineries, petrochemical plants and offshore installations.",
    features: [
      "Pipeline Installation & Integrity",
      "Refinery & Plant Maintenance",
      "Valve Overhaul & Testing",
      "Shutdown & Turnaround",
    ],
    slug: "oil-gas",
    icon: Flame,
    image: valveImg,
  },
  {
    number: "04",
    title: "Energy & Utilities",
    tagline: "Power & Networks",
    desc: "Engineering support for thermal, solar, substations and industrial power-distribution infrastructures.",
    features: [
      "Substation Installation",
      "Solar PV & Renewables",
      "Water & Wastewater Networks",
      "HV / MV Cabling",
    ],
    slug: "energy-utilities",
    icon: Zap,
    image: machiningImg,
  },
  {
    number: "05",
    title: "MEP Services",
    tagline: "Mechanical · Electrical · Plumbing",
    desc: "Precision MEP design, installation and retrofitting with energy modelling and smart-building integration.",
    features: [
      "HVAC Chilled Water & Ducting",
      "Fire Fighting & Alarm Systems",
      "LV & ELV Electrical",
      "BMS Setup",
    ],
    slug: "mep-services",
    icon: Cpu,
    image: heroTurbine,
  },
];

const secondaryServices = [
  {
    badge: "Fabrication",
    title: "Welding & Fabrication",
    desc: "Certified structural steel, spool fabrication and coded welding (SMAW / GTAW / GMAW / FCAW) with NDT QA/QC.",
    icon: Layers,
    link: "/services#welding-fabrication",
  },
  {
    badge: "Manpower",
    title: "Technical Support",
    desc: "Engineering secondment, certified QA/QC inspectors, HSE officers and project-management resources.",
    icon: Users,
    link: "/services#technical-support",
  },
  {
    badge: "Mobilisation",
    title: "Turnaround Support",
    desc: "Rapid mobilisation crews for planned shutdowns, emergency repairs and critical-path recovery.",
    icon: Truck,
    link: "/services",
  },
  {
    badge: "HSEQ",
    title: "Quality & Safety",
    desc: "ISO 9001 / 14001 / 45001 aligned systems, Inspection Test Plans and full material traceability.",
    icon: ShieldCheck,
    link: "/hse-quality",
  },
];

export function HomePage() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.25], [0, 80]);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[96svh] flex flex-col justify-between overflow-hidden bg-[#07090C] text-white">
        {/* Background Image with Parallax & Industrial Overlay */}
        <motion.div style={{ y: imageY }} className="absolute inset-0 h-[115%] w-full">
          <img
            src={heroTurbine}
            width={1920}
            height={1080}
            alt="Shield Global Technical Services LLC industrial operations"
            className="h-full w-full object-cover object-[60%_center] opacity-50 sm:opacity-60"
          />
        </motion.div>
        
        {/* Dark overlays so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090C] via-[#07090C]/90 to-[#07090C]/50 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090C] via-transparent to-[#07090C]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090C]/60 via-transparent to-transparent" />

        {/* Hero Content */}
        <div className="technical-container relative z-10 flex flex-1 flex-col justify-center pb-12 pt-32 lg:pb-16 lg:pt-36">
          {/* Company Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 border border-red-500/40 bg-red-500/10 px-3.5 py-1.5 backdrop-blur-md self-start rounded-md"
          >
            <Shield className="h-4 w-4 text-red-500" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              SHIELD GLOBAL TECHNICAL SERVICES LLC
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-5xl font-display text-4xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[6.5rem] tracking-tight text-white"
          >
            Engineering. <br className="hidden sm:inline" />
            Technical Services. <br />
            <span className="font-normal text-red-500">Project Excellence.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg font-normal"
          >
            Delivering integrated technical, construction, maintenance and project support solutions across Building Construction, Facility Management, Oil & Gas, Energy & Utilities and MEP sectors in the UAE and beyond.
          </motion.p>

          {/* Buttons: Our Services | Request a Quotation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4 pt-2"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/25 bg-white/5 text-white hover:bg-white hover:text-black backdrop-blur-sm text-xs uppercase tracking-widest font-semibold px-7 py-6 rounded-lg"
            >
              <Link to="/services">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <QuoteModal>
              <Button
                variant="default"
                size="lg"
                className="bg-red-600 hover:bg-red-500 text-white text-xs uppercase tracking-widest font-bold px-7 py-6 shadow-lg shadow-red-900/40 rounded-lg border-0"
              >
                Request a Quotation
              </Button>
            </QuoteModal>
          </motion.div>
        </div>

        {/* Bottom Trust & Compliance Bar */}
        <div className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-md py-4">
          <div className="technical-container grid grid-cols-2 gap-4 sm:grid-cols-4 text-white/75 text-[10px] sm:text-xs font-mono uppercase tracking-[0.14em]">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="h-4 w-4 text-red-500 shrink-0" />
              <span>ISO 9001 / 14001 / 45001</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Building2 className="h-4 w-4 text-red-500 shrink-0" />
              <span>Civil & MEP Contracting</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Flame className="h-4 w-4 text-red-500 shrink-0" />
              <span>Oil & Gas / Energy Specs</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0" />
              <span>UAE & Regional Execution</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY SERVICES – 5 MAIN PILLARS */}
      <section id="key-services" className="py-24 lg:py-32 bg-[#0B0E12] border-b border-white/5 scroll-mt-24">
        <div className="technical-container">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
              <div>
                <div className="section-label text-red-500">01 / Key Services</div>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-white">
                  5 Main Pillars of Excellence
                </h2>
              </div>
              <p className="max-w-md text-sm text-white/60 leading-relaxed">
                Integrated technical, engineering, and maintenance solutions tailored to the demanding standards of modern industrial infrastructure.
              </p>
            </div>
          </Reveal>

          {/* 5 Visual Cards Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isLargeCard = index === 0 || index === 1;

              return (
                <Reveal
                  key={pillar.number}
                  className={index === 3 || index === 4 ? "sm:col-span-1 lg:col-span-1" : ""}
                >
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D1117] transition-all duration-300 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-900/10 hover:-translate-y-1">
                    {/* Visual Card Image Header */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0D1117]">
                      <img
                        loading="lazy"
                        src={pillar.image}
                        alt={pillar.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/30 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center border border-white/20 bg-[#0D1117]/80 backdrop-blur-md text-red-500 font-mono text-xs font-bold shadow-md">
                          {pillar.number}
                        </span>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600/90 text-white backdrop-blur-md shadow-md">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Tagline */}
                      <div className="absolute bottom-3 left-4 text-[11px] font-mono uppercase tracking-widest text-red-500 font-semibold">
                        {pillar.tagline}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                      <div className="space-y-3">
                        <h3 className="font-display text-2xl sm:text-3xl text-white group-hover:text-red-500 transition-colors">
                          {pillar.number} — {pillar.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/60">
                          {pillar.desc}
                        </p>

                        {/* Capabilities Bullet points */}
                        <div className="pt-3 border-t border-white/10 space-y-1.5">
                          {pillar.features.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                              <span className="h-1.5 w-1.5 bg-red-500/60 rounded-full shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                        <Link
                          to="/services"
                          hash={pillar.slug}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-red-500 transition-colors"
                        >
                          Explore Details <ArrowUpRight className="h-4 w-4" />
                        </Link>
                        <QuoteModal defaultService={pillar.title}>
                          <button
                            type="button"
                            className="text-[11px] font-mono uppercase tracking-wider text-red-500 hover:underline font-medium"
                          >
                            Get Quote
                          </button>
                        </QuoteModal>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SECONDARY SPECIALIZED TECHNICAL CAPABILITIES */}
      <section className="py-24 lg:py-32 bg-[#07090C] border-b border-white/5">
        <div className="technical-container">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <div className="section-label text-red-500">02 / Secondary Capabilities</div>
                <h2 className="mt-3 font-display text-3xl sm:text-5xl text-white">
                  Specialized Technical & Support Services
                </h2>
              </div>
              <p className="max-w-md text-sm text-white/60 leading-relaxed">
                Complementing our main pillars with certified shop fabrication, technical secondment, and fast mobilization across turnaround projects.
              </p>
            </div>
          </Reveal>

          {/* 4 Secondary Service Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {secondaryServices.map((sec, idx) => {
              const SecIcon = sec.icon;
              return (
                <Reveal key={idx}>
                  <div className="group flex h-full flex-col justify-between rounded-xl border border-white/10 bg-[#0D1117] p-6 transition-all duration-300 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-900/10 hover:-translate-y-1">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center border border-white/10 bg-[#12171E] text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-colors">
                          <SecIcon className="h-5 w-5" />
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">
                          0{idx + 1}
                        </span>
                      </div>

                      <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-red-500">
                        {sec.badge}
                      </div>

                      <h3 className="font-display text-2xl text-white group-hover:text-red-500 transition-colors">
                        {sec.title}
                      </h3>

                      <p className="text-xs leading-relaxed text-white/60">
                        {sec.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <Link
                        to={sec.link}
                        className="text-xs font-semibold uppercase tracking-wider text-white group-hover:text-red-500 inline-flex items-center gap-1"
                      >
                        Learn More <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <QuoteModal defaultService={sec.title}>
                        <button
                          type="button"
                          className="text-[11px] font-mono uppercase tracking-wider text-white/60 hover:text-red-500"
                        >
                          RFQ
                        </button>
                      </QuoteModal>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY SHIELD GLOBAL & HSEQ EXCELLENCE */}
      <section className="py-24 lg:py-32 bg-[#07090C] text-white">
        <div className="technical-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="space-y-6 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-red-500" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-500">
                  HSEQ & Precision Standards
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-white">
                Rigorous Safety Culture.{" "}
                <span className="text-red-500">Zero-Compromise Quality.</span>
              </h2>
              <p className="text-sm leading-relaxed text-white/75 sm:text-base max-w-xl">
                Every project executed by Shield Global Technical Services LLC adheres
                strictly to international ISO standards and regional regulatory requirements.
                We provide complete transparency through Inspection Test Plans (ITP),
                Material Test Certificates (MTC), and certified QA/QC oversight.
              </p>

              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                <div className="rounded-lg border border-white/10 bg-[#0D1117] p-4">
                  <div className="font-display text-xl sm:text-2xl text-red-500">ISO 9001</div>
                  <div className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider mt-1.5">
                    Quality Management
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-[#0D1117] p-4">
                  <div className="font-display text-xl sm:text-2xl text-red-500">ISO 45001</div>
                  <div className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider mt-1.5">
                    Occupational Health & Safety
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-[#0D1117] p-4">
                  <div className="font-display text-xl sm:text-2xl text-red-500">ISO 14001</div>
                  <div className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider mt-1.5">
                    Environmental Management
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-500 text-white rounded-lg px-6 py-6 text-xs uppercase tracking-widest font-bold border-0 shadow-lg shadow-red-900/30"
                >
                  <Link to="/hse-quality">
                    Explore HSE & Quality Manual <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 rounded-lg px-6 py-6 text-xs uppercase tracking-widest font-semibold"
                >
                  <Link to="/about">About Our Leadership</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0D1117]">
                <img
                  src={qualityImg}
                  alt="Quality assurance inspection and dimensional verification"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090C] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/10 bg-black/50 px-5 py-4 text-xs font-mono backdrop-blur-sm">
                  <span className="text-white/80">Shield Global QA/QC</span>
                  <span className="text-red-400 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" /> 100% Traceability
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION / REQUEST A QUOTATION */}
      <section className="py-24 lg:py-32 bg-[#0B0E12] border-t border-white/5">
        <div className="technical-container">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D1117] p-8 sm:p-12 lg:p-16 shadow-xl">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="space-y-4 lg:col-span-8">
                  <div className="section-label text-red-500">Start Your Technical Tender</div>
                  <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-white">
                    Ready to mobilize your next industrial or construction project?
                  </h2>
                  <p className="text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed">
                    Contact Shield Global Technical Services LLC for competitive bids, project proposals, and technical consultations across the UAE and Gulf region.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:col-span-4 lg:items-end justify-center">
                  <QuoteModal>
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full sm:w-auto bg-red-600 text-white py-6 px-8 text-xs uppercase tracking-widest font-bold shadow-lg"
                    >
                      Request a Quotation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </QuoteModal>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto py-6 px-8 text-xs uppercase tracking-widest font-semibold border-white/20 text-white hover:bg-white/10 rounded-lg"
                  >
                    <Link to="/contact">Contact Technical Desk</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}