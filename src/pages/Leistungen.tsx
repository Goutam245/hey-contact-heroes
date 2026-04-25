import { Link } from "react-router-dom";
import { Headset, PhoneOutgoing, Layers, Cpu, Check, ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import CTASection from "@/components/site/CTASection";
import mascotOrange from "@/assets/mascot-duo-orange.jpeg";

const blocks = [
  {
    icon: Headset, color: "teal", title: "Inbound Kundenservice",
    desc: "Wir nehmen Ihre Anrufe entgegen — professionell, schnell und mit echtem Engagement. Vom 1st-Level-Support bis zum komplexen Beschwerdemanagement.",
    features: [
      "Telefonischer Kundensupport (1st & 2nd Level)",
      "E-Mail & Chat-Bearbeitung",
      "Beschwerdemanagement",
      "Auftragsannahme & Bestellservice",
      "Technischer Helpdesk",
      "Mehrsprachiger Support (DE/EN)",
    ],
    stats: [{ v: "< 30s", l: "Avg. Antwortzeit" }, { v: "98%", l: "First-Call-Resolution" }],
  },
  {
    icon: PhoneOutgoing, color: "orange", title: "Outbound & Vertrieb",
    desc: "Aktive Kundenansprache mit Fingerspitzengefühl. Wir öffnen Türen, vereinbaren Termine und schließen ab — DSGVO-konform und auf Augenhöhe.",
    features: [
      "Neukundenakquise",
      "Terminvereinbarung",
      "Marktforschung",
      "Reaktivierung inaktiver Kunden",
      "Cross- & Upselling",
      "Kundenbefragungen",
    ],
    stats: [{ v: "+34%", l: "Conversion-Rate" }, { v: "DSGVO", l: "100% konform" }],
  },
  {
    icon: Layers, color: "purple", title: "Back Office & Administration",
    desc: "Datenpflege, Ticketing, E-Mail-Bearbeitung — Ihr Rücken bleibt frei für das Wesentliche. Wir übernehmen die Prozesse, die Ihre Effizienz bremsen.",
    features: [
      "Datenpflege & CRM-Management",
      "Ticketbearbeitung",
      "Rechnungsstellung",
      "Dokumentenprüfung",
      "Reporting & Analytics",
      "Prozessautomatisierung",
    ],
    stats: [{ v: "+45%", l: "Effizienzgewinn" }, { v: "24/7", l: "Verfügbarkeit" }],
  },
];

const colors: Record<string, { bg: string; ring: string; text: string }> = {
  teal: { bg: "bg-teal/15", ring: "ring-teal/30", text: "text-teal" },
  orange: { bg: "bg-orange/15", ring: "ring-orange/30", text: "text-orange" },
  purple: { bg: "bg-purple/15", ring: "ring-purple/30", text: "text-purple" },
};

const steps = [
  { n: "01", t: "Analyse & Bedarfsermittlung", d: "Wir verstehen Ihr Geschäft, Ihre Kunden und Ihre Ziele." },
  { n: "02", t: "Konzept & Pilotphase", d: "Maßgeschneiderte Lösung, validiert in einem schlanken Pilot." },
  { n: "03", t: "Training & Onboarding", d: "Unser Team wird zu Botschaftern Ihrer Marke." },
  { n: "04", t: "Live-Betrieb & QS", d: "Skalierter Betrieb mit kontinuierlicher Qualitätssicherung." },
  { n: "05", t: "Reporting & Optimierung", d: "Transparente KPIs und stetige Verbesserung Ihrer Ergebnisse." },
];

const Leistungen = () => (
  <>
    {/* Hero with mascots */}
    <section className="relative overflow-hidden bg-navy text-white pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div className="blob bg-teal/40 size-[500px] -top-32 -left-20" />
      <div className="blob bg-orange/40 size-[400px] bottom-0 right-1/4" style={{ animationDelay: "-6s" }} />
      <div className="container-narrow relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <Reveal><span className="label-eyebrow text-teal">Leistungen</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display font-bold text-white text-5xl md:text-7xl leading-[1.05] tracking-tight">
              Maßgeschneiderte<br/>
              <span className="text-gradient-brand bg-gradient-to-r from-teal to-purple">Kundenkommunikation.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed">
              Für jede Anforderung die richtige Lösung — von Inbound bis KI-gestützter Automation.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="relative hidden lg:block -mt-8">
          <img
            src={mascotOrange}
            alt="Hey Contact Heroes Mascots"
            className="w-full max-w-md mx-auto rounded-3xl float-slow"
            style={{ filter: "drop-shadow(0 30px 60px hsl(var(--orange) / 0.4))" }}
          />
        </Reveal>
      </div>
    </section>

    {blocks.map((b, i) => {
      const c = colors[b.color];
      const reverse = i % 2 === 1;
      return (
        <section key={b.title} className={`py-24 md:py-32 ${i % 2 === 1 ? "bg-offwhite" : "bg-background"}`}>
          <div className="container-narrow grid lg:grid-cols-2 gap-16 items-center">
            <Reveal className={reverse ? "lg:order-2" : ""}>
              <div className={`inline-flex size-14 rounded-xl ${c.bg} ${c.text} grid place-items-center mb-6`}>
                <b.icon className="size-7" />
              </div>
              <h2 className="font-display font-bold text-foreground text-4xl md:text-5xl tracking-tight leading-[1.05]">{b.title}</h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">{b.desc}</p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {b.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground text-sm">
                    <Check className={`size-5 ${c.text} shrink-0 mt-0.5`} strokeWidth={3} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15} className={reverse ? "lg:order-1" : ""}>
              <div className={`relative bg-navy rounded-3xl p-10 ring-1 ${c.ring} overflow-hidden`}>
                <div className={`absolute -top-20 -right-20 size-60 rounded-full ${c.bg} blur-3xl`} />
                <div className="relative grid grid-cols-2 gap-8">
                  {b.stats.map((s) => (
                    <div key={s.l}>
                      <div className={`font-display font-bold text-5xl ${c.text}`}>{s.v}</div>
                      <div className="mt-2 text-white/60 text-sm">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="relative mt-8 pt-8 border-t border-white/10">
                  <p className="text-white/80 italic">"Wir machen Kundenservice persönlich, schnell und messbar besser."</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      );
    })}

    {/* KI Teaser */}
    <section className="py-24 bg-navy text-white">
      <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="size-14 rounded-xl bg-gradient-brand grid place-items-center mb-6">
            <Cpu className="size-7 text-white" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">KI & Automation</h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Intelligente Bots, automatisierte Workflows und smarte Plattformen. Erfahren Sie, wie wir Mensch und Maschine perfekt kombinieren.
          </p>
          <Link to="/technologie-ki" className="mt-8 inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-accent font-semibold px-6 py-3 rounded-full transition-all">
            Zur Technologieseite <ArrowRight className="size-4" />
          </Link>
        </Reveal>
        <Reveal delay={0.2}>
          <img src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&q=80" alt="KI & Automation" loading="lazy" className="rounded-3xl w-full aspect-[4/3] object-cover" />
        </Reveal>
      </div>
    </section>

    {/* Process */}
    <section className="py-24 md:py-32 bg-offwhite">
      <div className="container-narrow">
        <Reveal className="text-center mb-16">
          <span className="label-eyebrow text-teal">Prozess</span>
          <h2 className="mt-4 font-display font-bold text-foreground text-4xl md:text-5xl">So arbeiten wir</h2>
        </Reveal>
        <Stagger className="grid md:grid-cols-5 gap-6">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="bg-background rounded-2xl p-6 h-full border border-border hover:border-teal hover:-translate-y-1 transition-all">
                <div className="font-display font-bold text-3xl text-gradient-brand bg-gradient-to-r from-teal to-purple mb-4">{s.n}</div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{s.t}</h3>
                <p className="text-muted-foreground text-sm">{s.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>

    <CTASection />
  </>
);

export default Leistungen;