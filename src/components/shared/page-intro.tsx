import { Reveal } from "@/components/shared/reveal";

export function PageIntro({ index, title, description }: { index: string; title: string; description: string }) {
  return <section className="technical-grid border-b border-border pt-36 lg:pt-44"><div className="technical-container pb-20 lg:pb-28"><Reveal><div className="section-label">{index} / Shield Global Technical Services</div><h1 className="mt-8 max-w-5xl font-display text-6xl leading-[0.92] md:text-8xl lg:text-[8rem]">{title}</h1><p className="mt-10 max-w-xl text-base leading-7 text-muted-foreground md:ml-[40%]">{description}</p></Reveal></div></section>;
}