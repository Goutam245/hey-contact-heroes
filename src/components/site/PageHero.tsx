import { Reveal } from "./Reveal";

export const PageHero = ({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}) => (
  <section className="relative overflow-hidden bg-navy text-white pt-40 pb-24 md:pt-48 md:pb-32">
    <div className="absolute inset-0 bg-mesh opacity-70" />
    <div className="blob bg-teal/40 size-[400px] -top-20 -left-20" />
    <div className="blob bg-purple/40 size-[400px] top-20 right-0" style={{ animationDelay: "-6s" }} />
    <div className="container-narrow relative z-10">
      {eyebrow && (
        <Reveal>
          <span className="label-eyebrow text-teal">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h1 className="mt-4 font-display font-bold text-white text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl">
          {title}
        </h1>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">{subtitle}</p>
        </Reveal>
      )}
      {children && <div className="mt-10">{children}</div>}
    </div>
  </section>
);

export default PageHero;