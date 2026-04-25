import { TrendingUp, Globe, ShieldCheck, Cpu, Maximize, Check, X } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import CTASection from "@/components/site/CTASection";

const usps = [
  { icon: TrendingUp, c: "orange", t: "GAIN-Share Modell", h: "Sie zahlen nur bei Erfolg.",
    d: "Statt fixer Stundensätze teilen wir das unternehmerische Risiko. Vergütung an klar definierte KPIs gekoppelt — Sie gewinnen, wir gewinnen." },
  { icon: Globe, c: "teal", t: "100% Remote-Kompetenz", h: "Remote ist nicht Plan B.",
    d: "Seit Gründung dezentral aufgestellt. Tools, Prozesse und Kultur sind auf Remote-Excellence ausgelegt — nicht nachträglich adaptiert." },
  { icon: ShieldCheck, c: "purple", t: "Qualitätsgarantie", h: "Zertifizierte Prozesse, messbare Ergebnisse.",
    d: "ISO-zertifizierte Abläufe, kontinuierliches Monitoring, transparente KPI-Dashboards. Qualität ist kein Versprechen, sondern messbar." },
  { icon: Cpu, c: "teal", t: "Technologie & KI", h: "Modernste Tools für maximale Effizienz.",
    d: "Best-of-Breed-Tech-Stack mit KI-Integration. Automatisierung dort, wo sie Sinn macht — Menschen dort, wo sie unersetzlich sind." },
  { icon: Maximize, c: "orange", t: "Flexibilität & Skalierbarkeit", h: "Wächst mit Ihren Anforderungen.",
    d: "Von 5 auf 500 Heroes in wenigen Wochen — saisonale Spitzen, Markteintritte oder neue Kanäle: Wir sind ramped, wann immer Sie es brauchen." },
];

const compare = [
  { f: "Standortgebunden", trad: false, hch: true, hchLabel: "100% Remote — keine Standort-Abhängigkeit" },
  { f: "Erfolgsorientierte Vergütung", trad: false, hch: true, hchLabel: "GAIN-Share Modell" },
  { f: "Schnelle Skalierung", trad: false, hch: true, hchLabel: "Ramp-up in Tagen statt Monaten" },
  { f: "Moderne KI-Integration", trad: false, hch: true, hchLabel: "Out-of-the-Box" },
  { f: "Transparente KPIs", trad: false, hch: true, hchLabel: "Real-time Dashboards" },
  { f: "DSGVO & ISO-konform", trad: true, hch: true, hchLabel: "Zertifizierte Prozesse" },
];

const colorMap: Record<string, string> = {
  teal: "bg-teal/15 text-teal", orange: "bg-orange/15 text-orange", purple: "bg-purple/15 text-purple",
};

const WarumHCH = () => (
  <>
    <PageHero
      eyebrow="Warum HCH"
      title={<>Mehr als ein Call Center.<br/><span className="text-gradient-brand bg-gradient-to-r from-teal to-purple">Ihr strategischer Partner.</span></>}
      subtitle="Fünf Gründe, warum führende Unternehmen mit hey contact heroes arbeiten."
    />

    {usps.map((u, i) => (
      <section key={u.t} className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-background" : "bg-offwhite"}`}>
        <div className="container-narrow grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
            <div className={`size-16 rounded-2xl ${colorMap[u.c]} grid place-items-center mb-6`}>
              <u.icon className="size-8" />
            </div>
            <span className="label-eyebrow text-muted-foreground">0{i + 1}</span>
            <h2 className="mt-2 font-display font-bold text-foreground text-3xl md:text-5xl tracking-tight leading-[1.05]">{u.t}</h2>
          </Reveal>
          <Reveal delay={0.15} className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
            <p className="font-display font-semibold text-foreground text-2xl md:text-3xl leading-tight mb-6">{u.h}</p>
            <p className="text-muted-foreground text-lg leading-relaxed">{u.d}</p>
          </Reveal>
        </div>
      </section>
    ))}

    {/* Comparison */}
    <section className="py-24 bg-navy text-white">
      <div className="container-narrow">
        <Reveal className="mb-12 max-w-2xl">
          <span className="label-eyebrow text-teal">Vergleich</span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl tracking-tight">Klassisch vs. hey contact heroes</h2>
        </Reveal>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-left">
            <thead className="bg-white/5">
              <tr>
                <th className="p-5 font-accent text-sm font-medium">Merkmal</th>
                <th className="p-5 font-accent text-sm font-medium text-white/60 text-center">Klassisches Call Center</th>
                <th className="p-5 font-accent text-sm font-medium text-teal text-center">hey contact heroes</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((c) => (
                <tr key={c.f} className="border-t border-white/10">
                  <td className="p-5 font-medium">{c.f}</td>
                  <td className="p-5 text-center">
                    {c.trad ? <Check className="size-5 text-emerald-400 inline" /> : <X className="size-5 text-red-400 inline" />}
                  </td>
                  <td className="p-5 text-center text-white/90">
                    <Check className="size-5 text-teal inline mr-2" />
                    <span className="text-sm">{c.hchLabel}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <CTASection />
  </>
);

export default WarumHCH;