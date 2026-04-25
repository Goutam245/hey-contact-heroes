import { Bot, Network, Workflow, ArrowRight, Cpu } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import CTASection from "@/components/site/CTASection";

const stack = [
  "Salesforce", "HubSpot", "Zendesk", "Intercom", "Genesys", "Twilio",
  "Microsoft Teams", "Zoom", "Google Workspace", "Make", "OpenAI", "Anthropic",
];

const features = [
  { icon: Bot, c: "teal", t: "KI-gestützte Chatbots",
    d: "24/7 verfügbar, mehrsprachig, mit nahtloser Übergabe an menschliche Heroes. Unsere Bots verstehen Kontext — keine Roboter-Antworten.",
    img: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&q=80" },
  { icon: Network, c: "orange", t: "Intelligentes Routing & Analytics",
    d: "Smart Call Routing, Real-Time-Dashboards und Predictive Analytics. Jede Anfrage landet beim richtigen Hero — beim ersten Mal.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" },
  { icon: Workflow, c: "purple", t: "Prozessautomatisierung",
    d: "RPA, automatisiertes Ticketing, Workflow-Orchestrierung. Wir automatisieren das Repetitive — damit Heroes sich auf Menschen konzentrieren können.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80" },
];

const colorMap: Record<string, string> = {
  teal: "bg-teal/15 text-teal", orange: "bg-orange/15 text-orange", purple: "bg-purple/15 text-purple",
};

const Technologie = () => (
  <>
    <PageHero
      eyebrow="Technologie & KI"
      title={<>Guided by Humans.<br/><span className="text-gradient-brand bg-gradient-to-r from-teal to-purple">Powered by AI.</span></>}
      subtitle="Die Zukunft des Kundenservice — heute schon bei uns im Einsatz."
    />

    {/* Tech Stack */}
    <section className="py-24 bg-background">
      <div className="container-narrow">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="label-eyebrow text-teal">Stack</span>
          <h2 className="mt-4 font-display font-bold text-foreground text-4xl md:text-5xl">Unsere Plattformen & Tools</h2>
          <p className="mt-6 text-muted-foreground">Best-of-Breed-Technologie für jeden Anwendungsfall.</p>
        </Reveal>
        <Stagger className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {stack.map((s) => (
            <StaggerItem key={s}>
              <div className="aspect-square rounded-2xl bg-offwhite border border-border grid place-items-center text-center p-4 hover:border-teal hover:-translate-y-1 transition-all">
                <span className="font-display font-bold text-foreground text-sm md:text-base">{s}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>

    {/* Features */}
    {features.map((f, i) => (
      <section key={f.t} className={`py-24 ${i % 2 === 0 ? "bg-offwhite" : "bg-background"}`}>
        <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
            <div className={`size-14 rounded-xl ${colorMap[f.c]} grid place-items-center mb-6`}><f.icon className="size-7"/></div>
            <span className="label-eyebrow text-muted-foreground">0{i+1}</span>
            <h2 className="mt-2 font-display font-bold text-foreground text-3xl md:text-5xl tracking-tight leading-[1.05]">{f.t}</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">{f.d}</p>
          </Reveal>
          <Reveal delay={0.15} className={i % 2 === 1 ? "lg:order-1" : ""}>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-navy">
              <img src={f.img} alt={f.t} loading="lazy" className="w-full h-full object-cover opacity-90" />
            </div>
          </Reveal>
        </div>
      </section>
    ))}

    {/* Innovation Roadmap */}
    <section className="py-24 bg-navy text-white">
      <div className="container-narrow text-center max-w-3xl mx-auto">
        <Reveal>
          <Cpu className="size-12 text-teal mx-auto mb-6"/>
          <span className="label-eyebrow text-teal">Roadmap</span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl tracking-tight">So entwickeln wir uns weiter</h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Voice-AI, multimodale Agenten, Predictive Service — wir investieren kontinuierlich in die Technologien von morgen, damit Sie heute schon profitieren.
          </p>
        </Reveal>
      </div>
    </section>

    <CTASection />
  </>
);

export default Technologie;