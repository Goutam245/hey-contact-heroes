import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowDown, Headset, PhoneOutgoing, Layers, Cpu, Check, Star, Award,
  ShoppingBag, Phone, Zap, Wallet, HeartPulse, Cloud
} from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";
import Counter from "@/components/site/Counter";
import CTASection from "@/components/site/CTASection";
import mascotTeam from "@/assets/mascot-team.jpeg";

/* ─── one-time scroll reveal hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.unobserve(el); // fires ONCE, never reverses
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── tiny wrapper so each element gets its own ref ─── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal();
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

/* ─── data ─── */
const services = [
  { icon: Headset,       title: "Inbound Kundenservice",       desc: "Wir nehmen Ihre Anrufe entgegen – professionell, schnell und mit echtem Engagement.",              color: "teal",     to: "/leistungen" },
  { icon: PhoneOutgoing, title: "Outbound & Vertrieb",         desc: "Aktive Kundenansprache, Terminvereinbarung und Verkaufsunterstützung – wir wählen für Sie.",        color: "orange",   to: "/leistungen" },
  { icon: Layers,        title: "Back Office & Administration", desc: "Datenpflege, Ticketing, E-Mail-Bearbeitung – Ihr Rücken bleibt frei für das Wesentliche.",          color: "purple",   to: "/leistungen" },
  { icon: Cpu,           title: "KI & Automation",             desc: "Intelligente Bots, automatisierte Workflows und smarte Plattformen für die Zukunft.",               color: "gradient", to: "/technologie-ki" },
];

const colorTop: Record<string, string> = {
  teal: "from-teal to-teal", orange: "from-orange to-orange",
  purple: "from-purple to-purple", gradient: "from-teal to-purple",
};
const iconBg: Record<string, string> = {
  teal: "bg-teal/15 text-teal", orange: "bg-orange/15 text-orange",
  purple: "bg-purple/15 text-purple", gradient: "bg-gradient-brand text-white",
};

const stats = [
  { value: 500000, suffix: "+", label: "Kundenkontakte pro Jahr", color: "text-teal" },
  { value: 98,     suffix: "%", label: "Kundenzufriedenheit",      color: "text-orange" },
  { value: 15,     suffix: "+", label: "Jahre Erfahrung",           color: "text-purple" },
  { value: 100,    suffix: "%", label: "Remote-Betrieb",            color: "text-teal" },
];

const usps = [
  "Spezialisiert auf Remote-Kundenservice seit Tag 1",
  "GAIN-Share Modell — Sie zahlen nur bei Erfolg",
  "Zertifizierte Qualitätsprozesse nach deutschen Standards",
  "Modernste Technologie & KI-Integration",
];

const industries = [
  { icon: ShoppingBag, name: "E-Commerce & Retail",     desc: "Skalierbarer Support für Ihren Onlineshop." },
  { icon: Phone,       name: "Telekommunikation",        desc: "Komplexe Anfragen, einfach gelöst." },
  { icon: Zap,         name: "Energie & Versorgung",     desc: "Zuverlässig in regulierten Märkten." },
  { icon: Wallet,      name: "Finanzdienstleistungen",   desc: "Vertrauen durch Kompetenz." },
  { icon: HeartPulse,  name: "Gesundheitswesen",         desc: "Sensibel, schnell, verlässlich." },
  { icon: Cloud,       name: "SaaS & Tech",              desc: "Support auf Augenhöhe." },
];

const testimonials = [
  {
    quote: "Mit hey contact heroes haben wir die Wartezeiten um 40% reduziert — und die Kundenzufriedenheit gleichzeitig deutlich gesteigert. Echte Partnerschaft auf Augenhöhe.",
    name: "Dr. Markus Weber", role: "Head of Customer Experience", company: "TechVentures GmbH",
  },
  {
    quote: "Das GAIN-Share Modell hat uns überzeugt. Hier sitzt ein Partner, der mit uns wächst und Verantwortung übernimmt — kein klassisches Call Center.",
    name: "Sabine Hoffmann", role: "COO", company: "RetailFlow AG",
  },
  {
    quote: "Professionalität auf höchstem Niveau, gepaart mit menschlicher Wärme. Genau das, was unsere Kunden erwarten und verdienen.",
    name: "Andreas Klein", role: "Geschäftsführer", company: "EnergiePlus SE",
  },
];

const blogPosts = [
  { category: "Event",   title: "hey contact heroes auf der CCW 2026",             excerpt: "Die CCW in Berlin ist auch 2026 wieder der zentrale Treffpunkt der Customer-Service-Branche.", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80", date: "12. März 2026",  read: "3 Min." },
  { category: "Insight", title: "Maßgeschneiderter Kundenservice für E-Commerce",  excerpt: "So unterstützt hey contact heroes Ihren Onlineshop im Wachstum.",                            img: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80", date: "28. Feb. 2026", read: "5 Min." },
  { category: "News",    title: "GAIN-Share statt Kostendruck",                     excerpt: "hey contact heroes senkt Servicekosten – ohne Risiko für unsere Partner.",                     img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80", date: "10. Feb. 2026", read: "4 Min." },
];

/* ════════════════════════════════════════════════════════
   GLOBAL STYLES — inject once into <head> via a style tag
   (alternatively paste into your global CSS file)
════════════════════════════════════════════════════════ */
const GlobalRevealStyle = () => (
  <style>{`
    /* ── One-time reveal: hidden → visible, never resets ── */
    .reveal-once {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.75s ease, transform 0.75s ease;
    }
    .reveal-once.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ── Static decorative blobs — NO loop animation ── */
    .blob-static {
      position: absolute;
      border-radius: 50%;
      filter: blur(90px);
      pointer-events: none;
    }

    /* ── Mascot: single slow float, no repeat jitter ── */
    @keyframes gentleFloat {
      0%, 100% { transform: rotate(-2deg) translateY(0px); }
      50%       { transform: rotate(-2deg) translateY(-14px); }
    }
    .mascot-float {
      animation: gentleFloat 7s ease-in-out infinite;
      will-change: transform;
    }

    /* ── Scroll arrow: subtle single bounce suggestion ── */
    @keyframes arrowBounce {
      0%, 80%, 100% { transform: translateY(0); opacity: 0.6; }
      40%            { transform: translateY(6px); opacity: 1; }
    }
    .arrow-bounce { animation: arrowBounce 2.4s ease-in-out infinite; }

    /* ── Testimonial slide — smooth, no jump ── */
    .testimonial-slide {
      position: absolute;
      inset: 0;
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .testimonial-slide.hidden-slide {
      opacity: 0;
      transform: translateY(12px);
      pointer-events: none;
    }
    .testimonial-slide.active-slide {
      opacity: 1;
      transform: translateY(0);
    }

    /* ── Logo marquee: perfectly seamless ── */
    @keyframes marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track {
      animation: marquee 28s linear infinite;
      will-change: transform;
    }

    /* ── Pulse dot (remote badge) ── */
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.5); }
      50%       { box-shadow: 0 0 0 6px rgba(52,211,153,0); }
    }
    .pulse-dot { animation: pulse 2.2s ease-in-out infinite; }

    /* ── Card hover: consistent, no stutter ── */
    .card-hover {
      transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                  box-shadow 0.35s ease,
                  border-color 0.3s ease;
    }
    .card-hover:hover { transform: translateY(-8px); }
  `}</style>
);

/* ════════════════════════════════════════════════════════
   COMPONENT
════════════════════════════════════════════════════════ */
const Index = () => {
  const [active, setActive] = useState(0);

  // Testimonial auto-rotate — pauses on hover
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
  }, []);
  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  return (
    <>
      <GlobalRevealStyle />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">

        {/* Static gradient blobs — decorative only, no looping CSS animation */}
        <div className="blob-static bg-teal/[0.08]  size-[600px] -top-16  -left-40" />
        <div className="blob-static bg-purple/[0.10] size-[500px] bottom-0   right-0" />
        <div className="blob-static bg-orange/[0.07] size-[320px] top-1/3   left-1/2 -translate-x-1/2" />

        {/* Static geometric accents */}
        <div className="absolute top-32 right-20 size-24 rounded-full border-2 border-teal/25 hidden md:block" />
        <div className="absolute bottom-40 left-16 size-16 bg-orange/15 rounded-2xl hidden md:block" />
        <div className="absolute top-1/2 right-1/4 size-12 bg-purple/25 rounded-full hidden md:block" />

        <div className="container-narrow relative z-10 pt-32 pb-24 md:pt-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div>
            <Reveal>
              <span className="label-eyebrow text-teal">Call Center Hamburg • Remote Contact Center</span>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="mt-5 font-display font-bold text-white tracking-tight leading-[0.95] text-[clamp(2.6rem,7vw,5.5rem)]">
                Ihr Kundenservice.<br />
                <span className="bg-gradient-to-r from-teal via-orange to-purple bg-clip-text text-transparent">
                  Neu gedacht.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-7 max-w-xl text-base md:text-lg text-white/75 leading-relaxed">
                hey contact heroes — Ihr spezialisierter Partner für exzellenten Kundenkontakt.
                Inbound. Outbound. Digital. Remote. Und immer menschlich.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-accent font-semibold px-7 py-3.5 rounded-full transition-all shadow-elegant hover:shadow-glow-teal hover:-translate-y-0.5"
                >
                  Jetzt Kontakt aufnehmen <ArrowRight className="size-5" />
                </Link>
                <Link
                  to="/leistungen"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-accent font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 hover:border-teal transition-all"
                >
                  Leistungen entdecken
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/55 text-sm font-accent">
                <span className="flex items-center gap-2"><Check className="size-4 text-teal" strokeWidth={3} /> 100% Remote</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-2"><Check className="size-4 text-teal" strokeWidth={3} /> Seit 2019</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-2"><Check className="size-4 text-teal" strokeWidth={3} /> Made in Hamburg</span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — Mascot with gentle float only */}
          <Reveal delay={0.28} className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <img
                src={mascotTeam}
                alt="Die hey contact heroes Mascots"
                className="w-full rounded-3xl mascot-float"
                style={{ filter: "drop-shadow(0 40px 80px hsl(var(--teal) / 0.28))" }}
              />
              <div className="absolute -top-4 -right-2 md:-top-6 md:-right-6 bg-white text-navy rounded-2xl px-4 py-3 shadow-elegant flex items-center gap-2 rotate-3">
                <Award className="size-5 text-teal" />
                <div className="text-xs font-accent">
                  <div className="font-bold">Top Arbeitgeber</div>
                  <div className="text-muted-foreground">2024</div>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-2 md:-bottom-4 md:-left-6 glass rounded-full px-4 py-2 flex items-center gap-2 text-white text-xs font-accent">
                <span className="size-2 rounded-full bg-emerald-400 pulse-dot" />
                100% Remote-Betrieb
              </div>
            </div>
          </Reveal>
        </div>

        <a
          href="#trust"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white flex flex-col items-center gap-2 text-xs font-accent uppercase tracking-widest z-10"
        >
          Scrollen
          <ArrowDown className="size-4 arrow-bounce text-teal" />
        </a>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────── */}
      <section id="trust" className="bg-light-gray border-y border-border py-12 overflow-hidden">
        <div className="container-narrow">
          <p className="text-center label-eyebrow text-muted-foreground mb-8">
            Vertrauen von führenden Unternehmen
          </p>
          {/* Seamless marquee — duplicate list so it loops invisibly */}
          <div className="overflow-hidden">
            <div className="flex marquee-track w-max">
              {[1, 2].map((set) => (
                <div key={set} className="flex gap-16 items-center shrink-0 pr-16">
                  {["TechVentures", "RetailFlow", "EnergiePlus", "FinTrust", "MedCare", "SaaSone", "Nordlicht", "Hanseat AG"].map((name) => (
                    <div key={name + set} className="font-display font-bold text-2xl text-foreground/35 hover:text-foreground/70 transition-colors whitespace-nowrap cursor-default">
                      {name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-narrow">
          <div className="max-w-3xl mb-16">
            <Reveal><span className="label-eyebrow text-teal">Unsere Leistungen</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display font-bold text-foreground text-4xl md:text-6xl tracking-tight leading-[1.05]">
                Alles, was Ihr Kundenservice braucht
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <Link
                  to={s.to}
                  className="group relative flex flex-col h-full bg-navy rounded-2xl p-8 overflow-hidden card-hover hover:shadow-elegant"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorTop[s.color]}`} />
                  <div className={`size-14 rounded-xl ${iconBg[s.color]} grid place-items-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <s.icon className="size-7" />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-3 leading-tight">{s.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-teal text-sm font-accent font-medium">
                    Mehr erfahren <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────── */}
      <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container-narrow relative z-10">
          <Reveal className="text-center mb-16">
            <span className="label-eyebrow text-teal">In Zahlen</span>
            <h2 className="mt-4 font-display font-bold text-white text-4xl md:text-5xl">
              Ergebnisse, die für sich sprechen
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.09} className="text-center">
                <div className={`font-display font-bold text-5xl md:text-7xl ${s.color} leading-none mb-4`}>
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-white/70 text-sm md:text-base font-accent">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY HCH ────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-narrow grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-teal to-purple rounded-full" />
              <span className="label-eyebrow text-teal">Warum HCH</span>
              <h2 className="mt-4 font-display font-bold text-foreground text-4xl md:text-5xl tracking-tight leading-[1.05]">
                Warum Unternehmen uns vertrauen
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Wir sind nicht einfach ein Call Center — wir sind Ihr strategischer Partner für nachhaltigen Kundenerfolg.
              </p>
              <Link to="/warum-hch" className="mt-8 inline-flex items-center gap-2 text-teal font-accent font-semibold story-link">
                Mehr erfahren <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <div className="space-y-5">
            {usps.map((u, i) => (
              <Reveal key={u} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-5 bg-offwhite rounded-2xl border border-border hover:border-teal/40 card-hover">
                  <div className="size-9 rounded-full bg-teal grid place-items-center shrink-0 mt-0.5">
                    <Check className="size-5 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{u}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-offwhite">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Reveal><span className="label-eyebrow text-purple">Branchen</span></Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 font-display font-bold text-foreground text-4xl md:text-5xl tracking-tight">
                  Für Ihre Branche
                </h2>
              </Reveal>
            </div>
            <Link to="/branchenloesungen" className="text-teal font-accent font-semibold story-link inline-flex items-center gap-2">
              Alle Branchen <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.07}>
                <div className="group bg-background rounded-2xl p-7 border border-border card-hover hover:border-teal cursor-pointer h-full">
                  <div className="size-12 rounded-xl bg-teal/10 grid place-items-center text-teal mb-4 transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                    <ind.icon className="size-6" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{ind.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────── */}
      <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
        {/* Static blobs — no animation */}
        <div className="blob-static bg-purple/[0.10] size-[500px] -top-40 -right-40" />
        <div className="blob-static bg-teal/[0.08]  size-[400px] -bottom-20 -left-20" />

        <div
          className="container-narrow relative z-10 max-w-4xl text-center"
          onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current); }}
          onMouseLeave={startTimer}
        >
          <Reveal><span className="label-eyebrow text-teal">Stimmen</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display font-bold text-white text-4xl md:text-5xl mb-16">
              Was unsere Kunden sagen
            </h2>
          </Reveal>

          <div className="relative min-h-[300px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`testimonial-slide ${i === active ? "active-slide" : "hidden-slide"}`}
              >
                <div className="text-7xl text-teal font-display leading-none mb-4">"</div>
                <p className="text-white text-xl md:text-2xl italic font-display leading-relaxed mb-8">
                  {t.quote}
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-5 fill-orange text-orange" />
                  ))}
                </div>
                <div className="text-white font-semibold">{t.name}</div>
                <div className="text-white/60 text-sm">{t.role} · {t.company}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-400 ${i === active ? "w-10 bg-teal" : "w-2 bg-white/30 hover:bg-white/50"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* ── BLOG PREVIEW ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Reveal><span className="label-eyebrow text-orange">Insights</span></Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 font-display font-bold text-foreground text-4xl md:text-5xl tracking-tight">
                  Aktuelle Insights
                </h2>
              </Reveal>
            </div>
            <Link to="/insights" className="text-teal font-accent font-semibold story-link inline-flex items-center gap-2">
              Alle Artikel <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.09}>
                <article className="group cursor-pointer h-full flex flex-col">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-muted">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="label-eyebrow text-teal">{p.category}</span>
                    <span className="text-muted-foreground text-xs">· {p.date} · {p.read}</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl leading-tight mb-3 group-hover:text-teal transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;