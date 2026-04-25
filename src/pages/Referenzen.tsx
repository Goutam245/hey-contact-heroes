import { Star, ArrowRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import CTASection from "@/components/site/CTASection";

const cases = [
  {
    cat: "E-Commerce", color: "teal",
    title: "Wartezeiten halbiert — Conversion gesteigert",
    img: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1400&q=80",
    problem: "Saisonale Spitzen führten zu Wartezeiten von >5 Minuten und sinkender CSAT.",
    solution: "Aufbau eines flexiblen Remote-Teams mit KI-gestütztem Routing & Pre-Qualifizierung.",
    results: "Stabile <60s Wartezeit, +25% CSAT, +18% Conversion in Peak-Zeiten.",
    metrics: [{ v: "−68%", l: "Wartezeit" }, { v: "+25%", l: "CSAT" }, { v: "+18%", l: "Conversion" }],
    quote: "Endlich ein Partner, der mit unserer Saisonalität atmet.",
    name: "Sabine Hoffmann, COO RetailFlow AG",
  },
  {
    cat: "Telekommunikation", color: "orange",
    title: "First-Call-Resolution auf 96% gesteigert",
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1400&q=80",
    problem: "Hohe Eskalationsraten, mehrfacher Kundenkontakt zur Lösung eines Problems.",
    solution: "Spezialisierte Skill-Gruppen, intensives Tech-Training, KI-Wissensdatenbank.",
    results: "FCR von 72% auf 96% — bei gleichzeitiger Reduktion der Bearbeitungskosten um 22%.",
    metrics: [{ v: "96%", l: "FCR" }, { v: "−22%", l: "Cost-per-Contact" }, { v: "+31%", l: "NPS" }],
    quote: "hey contact heroes hat unser Service-Verständnis transformiert.",
    name: "Dr. Markus Weber, TechVentures GmbH",
  },
  {
    cat: "SaaS", color: "purple",
    title: "Multilingualer 24/7-Support in 6 Wochen live",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80",
    problem: "Internationaler Markteintritt erforderte schnellen, mehrsprachigen Support.",
    solution: "Onboarding eines DE/EN-Teams in nur 6 Wochen, Tool-Integration in bestehendes Zendesk.",
    results: "Lückenloser 24/7-Support, < 2h Response-Time, +50% Self-Service-Quote.",
    metrics: [{ v: "6 Wochen", l: "Time-to-Live" }, { v: "24/7", l: "Verfügbar" }, { v: "+50%", l: "Self-Service" }],
    quote: "So schnell waren wir noch nie im Markt.",
    name: "Andreas Klein, EnergiePlus SE",
  },
];

const colorMap: Record<string, string> = {
  teal: "bg-teal text-white", orange: "bg-orange text-white", purple: "bg-purple text-white",
};

const testimonials = [
  { t: "Echte Partnerschaft auf Augenhöhe.", n: "Lena Krämer", c: "ShopGenius" },
  { t: "Professionalität gepaart mit Wärme — selten.", n: "Tom Berger", c: "FinTrust" },
  { t: "Reporting-Transparenz auf einem neuen Level.", n: "Maria Schneider", c: "MedCare AG" },
];

const Referenzen = () => (
  <>
    <PageHero
      eyebrow="Referenzen"
      title={<>Messbare Ergebnisse.<br/><span className="text-gradient-brand bg-gradient-to-r from-teal to-purple">Echte Partnerschaften.</span></>}
      subtitle="Drei Geschichten, wie wir Kundenservice für unsere Partner neu definiert haben."
    />

    <section className="py-24 bg-background">
      <div className="container-narrow space-y-12">
        {cases.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <article className="grid lg:grid-cols-12 gap-0 bg-background border border-border rounded-3xl overflow-hidden hover:shadow-elegant transition-shadow">
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-0">
                <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <span className={`absolute top-5 left-5 text-xs font-accent font-semibold px-3 py-1.5 rounded-full ${colorMap[c.color]}`}>{c.cat}</span>
              </div>
              <div className="lg:col-span-7 p-8 md:p-12">
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl leading-tight">{c.title}</h2>
                <div className="mt-6 grid sm:grid-cols-3 gap-5">
                  <div><div className="label-eyebrow text-purple mb-2">Problem</div><p className="text-sm text-muted-foreground leading-relaxed">{c.problem}</p></div>
                  <div><div className="label-eyebrow text-teal mb-2">Lösung</div><p className="text-sm text-muted-foreground leading-relaxed">{c.solution}</p></div>
                  <div><div className="label-eyebrow text-orange mb-2">Ergebnis</div><p className="text-sm text-muted-foreground leading-relaxed">{c.results}</p></div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4 p-5 bg-offwhite rounded-2xl">
                  {c.metrics.map((m) => (
                    <div key={m.l} className="text-center">
                      <div className="font-display font-bold text-2xl md:text-3xl text-foreground">{m.v}</div>
                      <div className="text-xs text-muted-foreground mt-1">{m.l}</div>
                    </div>
                  ))}
                </div>
                <blockquote className="mt-6 border-l-4 border-teal pl-5 italic text-foreground">
                  "{c.quote}"
                  <footer className="mt-2 not-italic text-sm text-muted-foreground">— {c.name}</footer>
                </blockquote>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="py-24 bg-offwhite">
      <div className="container-narrow">
        <Reveal className="text-center mb-14">
          <span className="label-eyebrow text-teal">Kundenstimmen</span>
          <h2 className="mt-4 font-display font-bold text-foreground text-4xl md:text-5xl">Was sie sonst noch sagen</h2>
        </Reveal>
        <Stagger className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.n}>
              <div className="bg-background rounded-2xl p-7 border border-border h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({length:5}).map((_,i) => <Star key={i} className="size-4 fill-orange text-orange"/>)}
                </div>
                <p className="text-foreground italic mb-5">"{t.t}"</p>
                <div className="text-sm font-semibold text-foreground">{t.n}</div>
                <div className="text-xs text-muted-foreground">{t.c}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>

    <CTASection />
  </>
);

export default Referenzen;