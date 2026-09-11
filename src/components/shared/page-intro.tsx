import { Reveal } from "@/components/shared/reveal";

export function PageIntro({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-deep pt-36 lg:pt-44">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="red-bloom pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 opacity-50"
        aria-hidden
      />
      <div className="technical-container relative pb-20 lg:pb-28">
        <Reveal>
          <div className="section-label">{index} / Shield Global Technical Services</div>
          <h1 className="mt-7 max-w-4xl font-display text-4xl leading-[1.03] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <div className="red-rule mt-9 w-40" />
          <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
