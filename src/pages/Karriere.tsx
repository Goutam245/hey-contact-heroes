import { useState } from "react";
import { Globe, Clock, Award, GraduationCap, Laptop, Users, ChevronDown, ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import TeamGrid from "@/components/site/TeamGrid";
import mascotPurple from "@/assets/mascot-duo-purple.jpeg";
import remotePool from "@/assets/remote-pool.jpeg";
import remoteBeach from "@/assets/remote-beach.jpeg";

const perks = [
  { icon: Globe, t: "100% Remote", d: "Arbeite von überall in Europa" },
  { icon: Clock, t: "Flexible Zeiten", d: "Vereinbare Schichten mit deinem Leben" },
  { icon: Award, t: "GAIN-Share", d: "Mitarbeiterbeteiligung am Erfolg" },
  { icon: GraduationCap, t: "Weiterbildung", d: "Eigenes Lern-Budget pro Hero" },
  { icon: Laptop, t: "Top-Equipment", d: "MacBook, Headset, Tools — alles dabei" },
  { icon: Users, t: "Internationales Team", d: "Diverse Kulturen, eine Mission" },
];

const jobs = [
  { title: "Customer Service Hero (m/w/d)", dept: "Kundenservice", type: "Vollzeit", desc: "Du liebst Menschen und löst Probleme mit Freude? Dann werde Teil unseres Inbound-Teams." },
  { title: "Outbound Sales Hero (m/w/d)", dept: "Kundenservice", type: "Voll- oder Teilzeit", desc: "Aktive Kundenansprache, Termine, Verkauf — mit Empathie und Expertise." },
  { title: "Team Lead Customer Service (m/w/d)", dept: "Management", type: "Vollzeit", desc: "Du führst ein Team von 10-15 Heroes — coachend, fördernd, ergebnisorientiert." },
  { title: "AI / Automation Engineer (m/w/d)", dept: "Technologie", type: "Vollzeit", desc: "Du baust unsere KI-Bots und Automation-Workflows der nächsten Generation." },
  { title: "Workforce Manager (m/w/d)", dept: "Management", type: "Vollzeit", desc: "Forecast, Scheduling und Real-Time-Steuerung in einem Remote-Setup." },
];

const filters = ["Alle", "Kundenservice", "Management", "Technologie"];

const Karriere = () => {
  const [filter, setFilter] = useState("Alle");
  const [open, setOpen] = useState<number | null>(null);
  const visible = jobs.filter(j => filter === "Alle" || j.dept === filter);

  return (
    <>
      {/* Hero with mascot */}
      <section className="relative overflow-hidden bg-navy text-white pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="absolute inset-0 bg-mesh opacity-70" />
        <div className="blob bg-purple/40 size-[500px] -top-32 -left-20" />
        <div className="blob bg-teal/40 size-[400px] bottom-0 right-1/3" style={{ animationDelay: "-6s" }} />
        <div className="container-narrow relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal><span className="label-eyebrow text-teal">Karriere</span></Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 font-display font-bold text-white text-5xl md:text-7xl leading-[1.05] tracking-tight">
                Werde ein <span className="text-gradient-brand bg-gradient-to-r from-orange via-purple to-teal">Contact Hero!</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed">
                Arbeite von überall. Wachse mit uns. Mach einen Unterschied.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a href="#jobs" className="mt-8 inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-accent font-semibold px-7 py-3.5 rounded-full transition-all shadow-glow-teal">
                Offene Stellen ansehen <ArrowRight className="size-4" />
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="relative hidden lg:block">
            <img
              src={mascotPurple}
              alt="Hey Contact Heroes Mascots"
              className="w-full max-w-md mx-auto rounded-3xl float-slow"
              style={{ filter: "drop-shadow(0 30px 60px hsl(var(--purple) / 0.4))" }}
            />
          </Reveal>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 md:py-32 bg-navy-2 text-white overflow-hidden">
        <div className="container-narrow grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="relative order-2 lg:order-1">
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
              className="w-2/3 aspect-square object-cover absolute -bottom-8 -right-0 ring-4 ring-navy-2 float-slow"
              style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 50% 60%", animationDelay: "-2s" }}
            />
            <div className="absolute top-0 right-4 size-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-orange rotate-12 hidden md:block" />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <span className="label-eyebrow text-teal">Kultur</span>
            <h2 className="mt-4 font-display font-bold text-white text-4xl md:text-5xl tracking-tight">Work wherever you want!</h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Wir sind 100% remote — und das aus Überzeugung. Ob von der Küche, dem Café, dem Pool oder dem Strand: Bei hey contact heroes zählt das Ergebnis, nicht der Ort.
            </p>
            <Stagger className="mt-8 grid sm:grid-cols-2 gap-3">
              {perks.map((p) => (
                <StaggerItem key={p.t}>
                  <div className="flex items-start gap-3 p-4 bg-navy/60 rounded-xl border border-white/10 hover:border-teal/60 transition-colors">
                    <p.icon className="size-5 text-teal shrink-0 mt-0.5" />
                    <div>
                      <div className="font-display font-bold text-white text-sm">{p.t}</div>
                      <div className="text-white/60 text-xs">{p.d}</div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </section>

      {/* Diversity */}
      <section className="py-24 bg-gradient-brand text-white">
        <div className="container-narrow text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="label-eyebrow text-white/80">Diversity</span>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl tracking-tight">Welcome Everyone.</h2>
            <p className="mt-6 text-white/90 text-lg leading-relaxed">
              Wir lieben Chancengleichheit. Geschlecht, Herkunft, Alter, sexuelle Orientierung, Religion oder körperliche Voraussetzungen sind für uns keine Kriterien — Talent, Leidenschaft und Menschlichkeit zählen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team Heroes */}
      <section className="py-24 md:py-32 bg-navy">
        <div className="container-narrow">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-eyebrow text-teal">TEAM HEROES</span>
            <h2 className="mt-4 font-display font-bold text-white text-4xl md:text-5xl">Lerne uns kennen</h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">Die echten Heroes hinter den Kulissen — vielleicht bald auch du?</p>
          </Reveal>
          <TeamGrid />
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="py-24 bg-offwhite">
        <div className="container-narrow">
          <Reveal className="mb-10">
            <span className="label-eyebrow text-purple">Jobs</span>
            <h2 className="mt-4 font-display font-bold text-foreground text-4xl md:text-5xl">Offene Stellen</h2>
          </Reveal>

          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={cn(
                  "px-5 py-2 rounded-full font-accent text-sm font-medium transition-all",
                  filter === f ? "bg-foreground text-background" : "bg-background border border-border text-muted-foreground hover:border-teal hover:text-teal"
                )}>
                {f}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {visible.map((j, i) => {
              const isOpen = open === i;
              return (
                <div key={j.title} className={cn("bg-background rounded-2xl border border-border overflow-hidden transition-all", isOpen && "border-teal shadow-soft")}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full p-6 flex items-center gap-4 text-left">
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-foreground text-lg">{j.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="size-3.5" />Remote (Deutschland)</span>
                        <span className="px-2 py-0.5 bg-teal/10 text-teal rounded-full font-accent">{j.type}</span>
                        <span className="px-2 py-0.5 bg-muted rounded-full font-accent">{j.dept}</span>
                      </div>
                    </div>
                    <ChevronDown className={cn("size-5 text-muted-foreground transition-transform", isOpen && "rotate-180 text-teal")} />
                  </button>
                  <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 space-y-4">
                        <p className="text-muted-foreground leading-relaxed">{j.desc}</p>
                        <a href="mailto:jobs@hey-contact-heroes.de" className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-accent font-medium px-5 py-2.5 rounded-full">
                          Jetzt bewerben <ArrowRight className="size-4"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Karriere;