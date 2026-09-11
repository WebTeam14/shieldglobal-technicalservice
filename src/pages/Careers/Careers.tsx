import { Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/shared/page-intro";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export function CareersPage() {
  return (
    <>
      <PageIntro
        index="07"
        title="Careers at Shield Global"
        description="Join a dynamic, precision-driven engineering contracting organization. We invest in talent, continuous technical growth, safety leadership, and impactful industrial projects."
      />

      <section className="py-20 lg:py-28">
        <div className="technical-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border">
            <div>
              <div className="section-label">Opportunities</div>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">Open Positions</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Don't see your specific role? Send your CV and portfolio to <span className="text-foreground font-medium">careers@shieldglobal.com</span>
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {openPositions.map((job, idx) => (
              <Reveal key={idx}>
                <div className="group border border-border bg-card p-6 md:p-8 transition-all hover:border-primary/50 hover:bg-card/80">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
                        <span className="text-primary font-semibold">{job.department}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {job.location}
                        </span>
                        <span>•</span>
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.experience}</span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl text-foreground">
                        {job.title}
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed pt-1">
                        {job.desc}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <Button asChild variant="editorial" size="default">
                        <Link to="/contact">
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
