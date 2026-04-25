import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowDown, Headset, PhoneOutgoing, Layers, Cpu, Check, Star, Award,
  ShoppingBag, Phone, Zap, Wallet, HeartPulse, Cloud
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import Counter from "@/components/site/Counter";
import CTASection from "@/components/site/CTASection";
import { useEffect, useState } from "react";
import mascotTeam from "@/assets/mascot-team.jpeg";

const services = [
  { icon: Headset, title: "Inbound Kundenservice", desc: "Wir nehmen Ihre Anrufe entgegen – professionell, schnell und mit echtem Engagement.", color: "teal", to: "/leistungen" },
  { icon: PhoneOutgoing, title: "Outbound & Vertrieb", desc: "Aktive Kundenansprache, Terminvereinbarung und Verkaufsunterstützung – wir wählen für Sie.", color: "orange", to: "/leistungen" },
  { icon: Layers, title: "Back Office & Administration", desc: "Datenpflege, Ticketing, E-Mail-Bearbeitung – Ihr Rücken bleibt frei für das Wesentliche.", color: "purple", to: "/leistungen" },
  { icon: Cpu, title: "KI & Automation", desc: "Intelligente Bots, automatisierte Workflows und smarte Plattformen für die Zukunft.", color: "gradient", to: "/technologie-ki" },
];

const colorTop: Record<string, string> = {
  teal: "from-teal to-teal", orange: "from-orange to-orange", purple: "from-purple to-purple", gradient: "from-teal to-purple",
};
const iconBg: Record<string, string> = {
  teal: "bg-teal/15 text-teal", orange: "bg-orange/15 text-orange", purple: "bg-purple/15 text-purple", gradient: "bg-gradient-brand text-white",
};

const stats = [
  { value: 500000, suffix: "+", label: "Kundenkontakte pro Jahr", color: "text-teal" },
  { value: 98, suffix: "%", label: "Kundenzufriedenheit", color: "text-orange" },
  { value: 15, suffix: "+", label: "Jahre Erfahrung", color: "text-purple" },
  { value: 100, suffix: "%", label: "Remote-Betrieb", color: "text-teal" },
];

const usps = [
  "Spezialisiert auf Remote-Kundenservice seit Tag 1",
  "GAIN-Share Modell — Sie zahlen nur bei Erfolg",
  "Zertifizierte Qualitätsprozesse nach deutschen Standards",
  "Modernste Technologie & KI-Integration",
];

const industries = [
  { icon: ShoppingBag, name: "E-Commerce & Retail", desc: "Skalierbarer Support für Ihren Onlineshop." },
  { icon: Phone, name: "Telekommunikation", desc: "Komplexe Anfragen, einfach gelöst." },
  { icon: Zap, name: "Energie & Versorgung", desc: "Zuverlässig in regulierten Märkten." },
  { icon: Wallet, name: "Finanzdienstleistungen", desc: "Vertrauen durch Kompetenz." },
  { icon: HeartPulse, name: "Gesundheitswesen", desc: "Sensibel, schnell, verlässlich." },
  { icon: Cloud, name: "SaaS & Tech", desc: "Support auf Augenhöhe." },
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
  { category: "Event", title: "hey contact heroes auf der CCW 2026", excerpt: "Die CCW in Berlin ist auch 2026 wieder der zentrale Treffpunkt der Customer-Service-Branche.", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80", date: "12. März 2026", read: "3 Min." },
  { category: "Insight", title: "Maßgeschneiderter Kundenservice für E-Commerce", excerpt: "So unterstützt hey contact heroes Ihren Onlineshop im Wachstum.", img: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80", date: "28. Feb. 2026", read: "5 Min." },
  { category: "News", title: "GAIN-Share statt Kostendruck", excerpt: "hey contact heroes senkt Servicekosten – ohne Risiko für unsere Partner.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80", date: "10. Feb. 2026", read: "4 Min." },
];

const Index = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-mesh" />
        <div className="blob bg-teal size-[500px] top-10 -left-32" />
        <div className="blob bg-purple size-[500px] bottom-0 right-0" style={{ animationDelay: "-8s" }} />
        <div className="blob bg-orange size-[300px] top-1/3 left-1/2" style={{ animationDelay: "-4s" }} />

        {/* Floating geometric shapes */}
        <div className="absolute top-32 right-20 size-24 rounded-full border-2 border-teal/30 float-slow hidden md:block" />
        <div className="absolute bottom-40 left-16 size-16 bg-orange/20 rounded-2xl float-slow hidden md:block" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-1/2 right-1/4 size-12 bg-purple/30 rounded-full float-slow hidden md:block" style={{ animationDelay: "-4s" }} />

        <div className="container-narrow relative z-10 pt-32 pb-24 md:pt-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <Reveal>
              <span className="label-eyebrow text-teal">Call Center Hamburg • Remote Contact Center</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-display font-bold text-white tracking-tight leading-[0.95] text-[clamp(2.6rem,7vw,5.5rem)]">
                Ihr Kundenservice.<br/>
                <span className="text-gradient-brand bg-gradient-to-r from-teal via-orange to-purple">Neu gedacht.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-7 max-w-xl text-base md:text-lg text-white/75 leading-relaxed">
                hey contact heroes — Ihr spezialisierter Partner für exzellenten Kundenkontakt. Inbound. Outbound. Digital. Remote. Und immer menschlich.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-accent font-semibold px-7 py-3.5 rounded-full transition-all shadow-elegant hover:shadow-glow-teal hover:-translate-y-0.5">
                  Jetzt Kontakt aufnehmen <ArrowRight className="size-5"/>
                </Link>
                <Link to="/leistungen" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-accent font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 hover:border-teal transition-all">
                  Leistungen entdecken
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/55 text-sm font-accent">
                <span className="flex items-center gap-2"><Check className="size-4 text-teal" strokeWidth={3}/> 100% Remote</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-2"><Check className="size-4 text-teal" strokeWidth={3}/> Seit 2019</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-2"><Check className="size-4 text-teal" strokeWidth={3}/> Made in Hamburg</span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — Mascot */}
          <Reveal delay={0.3} className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <img
                src={mascotTeam}
                alt="Die hey contact heroes Mascots"
                className="w-full rounded-3xl float-slow"
                style={{
                  filter: "drop-shadow(0 40px 80px hsl(var(--teal) / 0.3))",
                  transform: "rotate(-2deg)",
                }}
              />
              {/* Floating top employer badge */}
              <div className="absolute -top-4 -right-2 md:-top-6 md:-right-6 bg-white text-navy rounded-2xl px-4 py-3 shadow-elegant flex items-center gap-2 rotate-3">
                <Award className="size-5 text-teal" />
                <div className="text-xs font-accent">
                  <div className="font-bold">Top Arbeitgeber</div>
                  <div className="text-muted-foreground">2024</div>
                </div>
              </div>
              {/* Floating remote badge */}
              <div className="absolute -bottom-3 -left-2 md:-bottom-4 md:-left-6 glass rounded-full px-4 py-2 flex items-center gap-2 text-white text-xs font-accent">
                <span className="size-2 rounded-full bg-emerald-400 pulse-dot" />
                100% Remote-Betrieb
              </div>
            </div>
          </Reveal>
        </div>

        <a href="#trust" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white flex flex-col items-center gap-2 text-xs font-accent uppercase tracking-widest z-10">
          Scrollen
          <ArrowDown className="size-4 bounce-arrow text-teal"/>
        </a>
      </section>

      {/* TRUST BAR */}
      <section id="trust" className="bg-light-gray border-y border-border py-12">
        <div className="container-narrow">
          <p className="text-center label-eyebrow text-muted-foreground mb-8">Vertrauen von führenden Unternehmen</p>
          <div className="overflow-hidden">
            <div className="flex gap-16 animate-marquee w-max">
              {[...Array(2)].map((_, set) => (
                <div key={set} className="flex gap-16 items-center shrink-0">
                  {["TechVentures","RetailFlow","EnergiePlus","FinTrust","MedCare","SaaSone","Nordlicht","Hanseat AG"].map((name) => (
                    <div key={name+set} className="font-display font-bold text-2xl text-foreground/40 hover:text-foreground transition-colors whitespace-nowrap">
                      {name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
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

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <Link to={s.to} className="group relative block h-full bg-navy rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorTop[s.color]}`} />
                  <div className={`size-14 rounded-xl ${iconBg[s.color]} grid place-items-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                    <s.icon className="size-7" />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-3 leading-tight">{s.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-teal text-sm font-accent font-medium">
                    Mehr erfahren <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* STATS */}
      <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}/>
        <div className="container-narrow relative z-10">
          <Reveal className="text-center mb-16">
            <span className="label-eyebrow text-teal">In Zahlen</span>
            <h2 className="mt-4 font-display font-bold text-white text-4xl md:text-5xl">Ergebnisse, die für sich sprechen</h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="text-center">
                <div className={`font-display font-bold text-5xl md:text-7xl ${s.color} leading-none mb-4`}>
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-white/70 text-sm md:text-base font-accent">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HCH */}
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
          <Stagger className="space-y-5">
            {usps.map((u) => (
              <StaggerItem key={u}>
                <div className="flex items-start gap-4 p-5 bg-offwhite rounded-2xl border border-border hover:border-teal/40 transition-colors">
                  <div className="size-9 rounded-full bg-teal grid place-items-center shrink-0 mt-0.5">
                    <Check className="size-5 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{u}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 md:py-32 bg-offwhite">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Reveal><span className="label-eyebrow text-purple">Branchen</span></Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 font-display font-bold text-foreground text-4xl md:text-5xl tracking-tight">Für Ihre Branche</h2>
              </Reveal>
            </div>
            <Link to="/branchenloesungen" className="text-teal font-accent font-semibold story-link inline-flex items-center gap-2">
              Alle Branchen <ArrowRight className="size-4" />
            </Link>
          </div>

          <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <StaggerItem key={ind.name}>
                <div className="group bg-background rounded-2xl p-7 border border-border hover:border-teal hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">
                  <div className="size-12 rounded-xl bg-teal/10 grid place-items-center text-teal mb-4 group-hover:bg-teal group-hover:text-white transition-colors">
                    <ind.icon className="size-6" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{ind.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
        <div className="blob bg-purple size-[500px] -top-40 -right-40" />
        <div className="blob bg-teal size-[400px] -bottom-20 -left-20" style={{ animationDelay: "-6s" }} />
        <div className="container-narrow relative z-10 max-w-4xl text-center">
          <Reveal><span className="label-eyebrow text-teal">Stimmen</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display font-bold text-white text-4xl md:text-5xl mb-16">Was unsere Kunden sagen</h2>
          </Reveal>

          <div className="relative min-h-[280px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ${i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
              >
                <div className="text-7xl text-teal font-display leading-none mb-4">"</div>
                <p className="text-white text-xl md:text-2xl italic font-display leading-relaxed mb-8">
                  {t.quote}
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({length: 5}).map((_, j) => <Star key={j} className="size-5 fill-orange text-orange" />)}
                </div>
                <div className="text-white font-semibold">{t.name}</div>
                <div className="text-white/60 text-sm">{t.role} · {t.company}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-10 bg-teal" : "w-2 bg-white/30"}`}
                aria-label={`Testimonial ${i+1}`} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* BLOG PREVIEW */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Reveal><span className="label-eyebrow text-orange">Insights</span></Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 font-display font-bold text-foreground text-4xl md:text-5xl tracking-tight">Aktuelle Insights</h2>
              </Reveal>
            </div>
            <Link to="/insights" className="text-teal font-accent font-semibold story-link inline-flex items-center gap-2">
              Alle Artikel <ArrowRight className="size-4" />
            </Link>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((p) => (
              <StaggerItem key={p.title}>
                <article className="group cursor-pointer h-full">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-muted">
                    <img src={p.img} alt={p.title} loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="label-eyebrow text-teal">{p.category}</span>
                    <span className="text-muted-foreground text-xs">· {p.date} · {p.read}</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl leading-tight mb-3 group-hover:text-teal transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.excerpt}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
};

export default Index;
