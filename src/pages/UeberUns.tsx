import { Heart, Rocket, Globe2 } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import Counter from "@/components/site/Counter";
import CTASection from "@/components/site/CTASection";
import TeamGrid from "@/components/site/TeamGrid";
import hamburg from "@/assets/hamburg-elbphilharmonie.jpeg";
import remotePool from "@/assets/remote-pool.jpeg";
import remoteBeach from "@/assets/remote-beach.jpeg";

const milestones = [
  { y: "2010", t: "Gründung", d: "hey contact heroes wird in Hamburg gegründet — mit der Vision von menschlichem, modernem Kundenservice." },
  { y: "2014", t: "Remote-First", d: "Lange vor dem Trend bauen wir auf vollständig dezentrale Teams." },
  { y: "2018", t: "GAIN-Share Modell", d: "Wir führen unser einzigartiges Erfolgs­beteiligungs-Modell ein." },
  { y: "2022", t: "KI-Integration", d: "Erste KI-gestützte Bot-Lösungen gehen produktiv." },
  { y: "2026", t: "500.000+ Kontakte", d: "Über eine halbe Million Kundenkontakte pro Jahr — und wachsend." },
];

const values = [
  { icon: Heart, c: "text-orange", t: "Menschlichkeit", d: "Jeder Kontakt zählt. Wir sehen den Menschen — nicht nur ein Ticket." },
  { icon: Rocket, c: "text-teal", t: "Innovation", d: "Technologie im Dienst des Menschen. Wir nutzen KI, um Beziehungen zu stärken." },
  { icon: Globe2, c: "text-purple", t: "Vielfalt", d: "Welcome Everyone. Diversität ist unsere Stärke und unser Versprechen." },
];

const facts = [
  { v: 250, s: "+", l: "Heroes weltweit" },
  { v: 100, s: "%", l: "Remote" },
  { v: 15, s: "+", l: "Jahre Erfahrung" },
  { v: 6, s: "", l: "Sprachen" },
];

const UeberUns = () => (
  <>
    <PageHero
      eyebrow="Über uns"
      title={<>Wir sind <span className="text-gradient-brand bg-gradient-to-r from-teal via-orange to-purple">Contact Heroes.</span></>}
      subtitle="Ein Team aus leidenschaftlichen Profis, die Kundenservice neu denken — menschlich, digital, exzellent."
    />

    {/* Story / Timeline */}
    <section className="py-24 md:py-32 bg-background">
      <div className="container-narrow max-w-4xl">
        <Reveal>
          <span className="label-eyebrow text-teal">Unsere Geschichte</span>
          <h2 className="mt-4 font-display font-bold text-foreground text-4xl md:text-5xl tracking-tight">Vom Start-up zum Marktführer für Remote-Service</h2>
        </Reveal>
        <div className="mt-16 relative">
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal via-orange to-purple md:-translate-x-px" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <Reveal key={m.y} delay={i * 0.05}>
                <div className={`relative flex gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="size-14 rounded-full bg-gradient-brand grid place-items-center text-white font-display font-bold text-sm shrink-0 ring-8 ring-background z-10">
                    {m.y.slice(2)}
                  </div>
                  <div className="flex-1 md:max-w-md">
                    <div className="font-display font-bold text-3xl text-teal mb-2">{m.y}</div>
                    <h3 className="font-display font-bold text-foreground text-xl mb-2">{m.t}</h3>
                    <p className="text-muted-foreground leading-relaxed">{m.d}</p>
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 bg-offwhite">
      <div className="container-narrow">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-eyebrow text-purple">Werte</span>
          <h2 className="mt-4 font-display font-bold text-foreground text-4xl md:text-5xl">Unsere Werte</h2>
        </Reveal>
        <Stagger className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <StaggerItem key={v.t}>
              <div className="bg-background rounded-3xl p-10 text-center h-full border border-border hover:-translate-y-2 hover:shadow-elegant transition-all duration-500 group">
                <div className={`inline-grid place-items-center size-16 rounded-2xl bg-muted ${v.c} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                  <v.icon className="size-8" />
                </div>
                <h3 className="font-display font-bold text-foreground text-2xl mb-3">{v.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>

    {/* Team */}
    <section className="py-24 md:py-32 bg-navy">
      <div className="container-narrow">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-eyebrow text-teal">Unser Team</span>
          <h2 className="mt-4 font-display font-bold text-white text-4xl md:text-5xl tracking-tight">Die Menschen hinter den Heroes</h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Unser remote Team — verteilt über ganz Deutschland, vereint durch eine Leidenschaft: exzellenten Kundenservice.
          </p>
        </Reveal>
        <TeamGrid />
      </div>
    </section>

    {/* Hamburg */}
    <section className="relative overflow-hidden">
      <img src={hamburg} alt="Hamburg Elbphilharmonie" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="container-narrow relative z-10 py-24 md:py-32 text-center max-w-3xl mx-auto">
        <Reveal>
          <span className="label-eyebrow text-teal">Hamburg</span>
          <h2 className="mt-4 font-display font-bold text-white text-4xl md:text-6xl tracking-tight leading-[1.05]">
            Hamburg ist unser <span className="text-gradient-brand bg-gradient-to-r from-teal to-orange">Zuhause.</span>
          </h2>
          <p className="mt-6 text-white/75 text-lg leading-relaxed">
            Vom Herzen der HafenCity aus koordinieren wir ein Team, das remote über ganz Deutschland verteilt arbeitet — mit hanseatischer Verlässlichkeit und norddeutscher Klarheit.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Remote Culture */}
    <section className="py-24 md:py-32 bg-navy-2 text-white overflow-hidden">
      <div className="container-narrow grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          <span className="label-eyebrow text-teal">Remote Culture</span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl tracking-tight">Work wherever you want.</h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Remote war für uns nie Plan B — es ist unser Standard seit Tag 1. Unsere Heroes arbeiten von Hamburg bis Mallorca, von Berlin bis Lissabon. Was zählt: Ergebnisse, nicht Anwesenheit.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="order-1 lg:order-2 relative">
          <img
            src={remotePool}
            alt="Remote Arbeit am Pool"
            loading="lazy"
            className="w-3/4 aspect-[4/5] object-cover float-slow"
            style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
          />
          <img
            src={remoteBeach}
            alt="Remote Arbeit am Strand"
            loading="lazy"
            className="w-2/3 aspect-square object-cover absolute -bottom-8 -right-2 ring-4 ring-navy-2 float-slow"
            style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 50% 60%", animationDelay: "-2s" }}
          />
          <div className="absolute -top-4 -left-4 size-10 bg-orange rounded-md rotate-12 hidden md:block" />
        </Reveal>
      </div>

      <div className="container-narrow grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
        {facts.map((f) => (
          <Reveal key={f.l} className="text-center">
            <div className="font-display font-bold text-5xl md:text-6xl text-teal"><Counter end={f.v} suffix={f.s} /></div>
            <div className="mt-2 text-white/70 text-sm">{f.l}</div>
          </Reveal>
        ))}
      </div>
    </section>

    <CTASection />
  </>
);

export default UeberUns;