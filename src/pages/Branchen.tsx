import { useState } from "react";
import { ShoppingBag, Phone, Zap, Wallet, HeartPulse, Cloud, Check, X } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import CTASection from "@/components/site/CTASection";
import { cn } from "@/lib/utils";

const industries = [
  {
    icon: ShoppingBag, name: "E-Commerce & Retail", tag: "Ihr digitaler Kundendialog", color: "teal",
    challenges: ["Saisonale Lastspitzen", "Hohes Anfragevolumen über viele Kanäle", "Retouren- und Reklamationsmanagement"],
    solutions: ["Skalierbare Teams für Peak-Zeiten", "Omnichannel-Support (Telefon, E-Mail, Chat, Social)", "Komplette Order-to-Cash-Abwicklung"],
    services: ["Inbound", "Back Office", "KI-Chatbots"],
    metrics: [{ v: "−40%", l: "Wartezeit" }, { v: "+25%", l: "CSAT" }],
  },
  {
    icon: Phone, name: "Telekommunikation", tag: "Komplexe Anfragen, einfach gelöst", color: "orange",
    challenges: ["Komplexe Tarifstrukturen", "Technische Störungen", "Vertragsverwaltung"],
    solutions: ["Geschultes 1st & 2nd Level Support", "Eskalationsmanagement mit klaren SLAs", "Vertragsadministration"],
    services: ["Inbound", "Outbound", "Back Office"],
    metrics: [{ v: "98%", l: "FCR" }, { v: "< 60s", l: "Avg. Wartezeit" }],
  },
  {
    icon: Zap, name: "Energie & Versorgung", tag: "Zuverlässig in regulierten Märkten", color: "purple",
    challenges: ["Regulatorische Anforderungen", "Hohes Anfragevolumen bei Tarifwechseln", "Stammdatenpflege"],
    solutions: ["Zertifizierte Prozesse", "Skalierbare Kapazitäten", "Effiziente Wechselprozesse (GPKE/GeLi Gas)"],
    services: ["Inbound", "Back Office"],
    metrics: [{ v: "100%", l: "Compliance" }, { v: "ISO", l: "zertifiziert" }],
  },
  {
    icon: Wallet, name: "Finanzdienstleistungen", tag: "Vertrauen durch Kompetenz", color: "teal",
    challenges: ["Hohe Vertraulichkeit", "Beratungsintensiv", "Strenge Compliance"],
    solutions: ["BaFin-konforme Prozesse", "Hochqualifizierte Agenten", "End-to-End-verschlüsselte Kommunikation"],
    services: ["Inbound", "Back Office", "Outbound"],
    metrics: [{ v: "BaFin", l: "konform" }, { v: "100%", l: "DSGVO" }],
  },
  {
    icon: HeartPulse, name: "Gesundheitswesen", tag: "Sensibel, schnell, verlässlich", color: "orange",
    challenges: ["Patientenkommunikation", "Terminmanagement", "Datenschutz"],
    solutions: ["Empathische, geschulte Teams", "Rund-um-die-Uhr-Erreichbarkeit", "DSGVO- & §203 StGB-konform"],
    services: ["Inbound", "Outbound"],
    metrics: [{ v: "24/7", l: "Erreichbar" }, { v: "100%", l: "Datenschutz" }],
  },
  {
    icon: Cloud, name: "SaaS & Technologie", tag: "Support auf Augenhöhe", color: "purple",
    challenges: ["Technisch versierte Kunden", "Hohe Erwartungen", "Internationale Skalierung"],
    solutions: ["Tech-affine Spezialisten", "Multilingualer Support", "Tiefe Tool-Integration (Zendesk, Intercom, ...)"],
    services: ["Inbound", "Back Office", "KI-Bots"],
    metrics: [{ v: "DE/EN", l: "Multilingual" }, { v: "+50%", l: "Self-Service" }],
  },
];

const colorMap: Record<string, string> = {
  teal: "text-teal bg-teal/10",
  orange: "text-orange bg-orange/10",
  purple: "text-purple bg-purple/10",
};

const Branchen = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="Branchenlösungen"
        title={<>Wir kennen Ihre Branche.<br/><span className="text-gradient-brand bg-gradient-to-r from-teal to-purple">Und Ihre Kunden.</span></>}
        subtitle="Passgenaue Lösungen für die Anforderungen Ihres Marktes."
      />

      <section className="py-24 bg-background">
        <div className="container-narrow grid md:grid-cols-2 gap-6">
          {industries.map((ind, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={ind.name} delay={i * 0.05}>
                <div className={cn(
                  "rounded-3xl border border-border bg-background overflow-hidden transition-all duration-500",
                  isOpen && "ring-2 ring-teal/40 shadow-elegant"
                )}>
                  <button
                    className="w-full p-7 text-left flex items-start gap-5"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <div className={cn("size-14 rounded-xl grid place-items-center shrink-0", colorMap[ind.color])}>
                      <ind.icon className="size-7" />
                    </div>
                    <div className="flex-1">
                      <div className="label-eyebrow text-muted-foreground">{ind.tag}</div>
                      <h3 className="mt-1 font-display font-bold text-foreground text-2xl">{ind.name}</h3>
                    </div>
                  </button>
                  <div className={cn("grid transition-all duration-500", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      <div className="px-7 pb-7 pt-2 space-y-5">
                        <div>
                          <h4 className="label-eyebrow text-purple mb-2">Herausforderungen</h4>
                          <ul className="space-y-1.5 text-sm text-foreground">
                            {ind.challenges.map((c) => <li key={c} className="flex gap-2"><span className="text-purple">•</span>{c}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h4 className="label-eyebrow text-teal mb-2">Unsere Lösung</h4>
                          <ul className="space-y-1.5 text-sm text-foreground">
                            {ind.solutions.map((c) => <li key={c} className="flex gap-2"><Check className="size-4 text-teal shrink-0 mt-0.5"/>{c}</li>)}
                          </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border">
                          {ind.metrics.map((m) => (
                            <div key={m.l}>
                              <div className="font-display font-bold text-2xl text-foreground">{m.v}</div>
                              <div className="text-xs text-muted-foreground">{m.l}</div>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {ind.services.map((s) => <span key={s} className="text-xs font-accent bg-muted text-foreground px-3 py-1 rounded-full">{s}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Branchen;