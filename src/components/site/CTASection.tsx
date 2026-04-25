import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

/* One-time reveal — fires once when visible, never re-triggers */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.unobserve(el); // ← fires ONCE, stops watching
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-once ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export const CTASection = () => (
  <section className="relative overflow-hidden">
    <div className="container-narrow py-24 md:py-32">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-brand p-10 md:p-20 text-white">
        {/* Static dot pattern — no animation */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px, 80px 80px",
          }}
        />
        <div className="relative z-10 max-w-3xl">
          <Reveal>
            <span className="label-eyebrow text-white/80">Let's talk</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-display font-bold text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Bereit, Ihren Kundenservice zu&nbsp;revolutionieren?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-xl">
              Sprechen Sie jetzt mit unseren Experten — kostenlos und unverbindlich.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/kontakt"
              className="mt-8 inline-flex items-center gap-3 bg-white text-purple font-accent font-semibold px-8 py-4 rounded-full hover:gap-4 transition-all shadow-elegant"
            >
              Jetzt Gespräch vereinbaren <ArrowRight className="size-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;