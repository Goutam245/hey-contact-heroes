import { useState } from "react";
import { Search, Calendar, ArrowRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const tabs = ["Alle", "Blog", "News", "Events", "Case Studies"];

const featured = {
  cat: "News", date: "12. März 2026", read: "5 Min.",
  title: "hey contact heroes auf der CCW 2026 — Guided by Humans, powered by AI",
  excerpt: "Die CCW in Berlin ist auch 2026 wieder der zentrale Treffpunkt der Customer-Service-Branche. Was uns am Stand J15 in Halle 3 erwartet.",
  img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=2000&q=80",
};

const posts = [
  { cat: "Insight", title: "Maßgeschneiderter Kundenservice für E-Commerce", excerpt: "So unterstützt hey contact heroes deinen Onlineshop.", img: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80", date: "28. Feb 2026", read: "5 Min." },
  { cat: "News", title: "GAIN-Share statt Kostendruck", excerpt: "hey contact heroes senkt Servicekosten – ohne Risiko.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80", date: "10. Feb 2026", read: "4 Min." },
  { cat: "Case Study", title: "Wie wir Wartezeiten halbiert haben", excerpt: "Ein Blick hinter die Kulissen unseres E-Commerce-Projekts.", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80", date: "01. Feb 2026", read: "7 Min." },
  { cat: "Blog", title: "Welcome Everyone — Diversität im Remote-Team", excerpt: "Warum Vielfalt unser stärkster Wettbewerbsvorteil ist.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80", date: "20. Jan 2026", read: "6 Min." },
  { cat: "News", title: "DMEXCO 2025: Innovationen für digitalen Kundendialog", excerpt: "hey contact heroes ist 2025 als Aussteller in Köln vertreten.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80", date: "15. Sep 2025", read: "3 Min." },
  { cat: "Insight", title: "KI im Kundenservice — Hype oder Hebel?", excerpt: "Wo KI heute bereits Mehrwert liefert — und wo nicht.", img: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&q=80", date: "05. Jan 2026", read: "8 Min." },
];

const events = [
  { date: "24.–27. Feb", year: "2026", t: "CCW 2026 Berlin", loc: "Berlin · Stand J15 Halle 3", d: "Treffen Sie uns am Stand und erleben Sie, wie wir Service neu denken." },
  { date: "16.–18. Sep", year: "2025", t: "DMEXCO 2025", loc: "Köln · Aussteller", d: "hey contact heroes präsentiert KI-Lösungen für digitalen Kundendialog." },
];

const Insights = () => {
  const [tab, setTab] = useState("Alle");
  const visible = posts.filter(p => tab === "Alle" || p.cat === tab || (tab === "Blog" && p.cat === "Insight"));

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Wissen, Trends &<br/><span className="text-gradient-brand bg-gradient-to-r from-teal to-purple">Neuigkeiten.</span></>}
        subtitle="Aus der Welt des Kundenservice — und aus unserer eigenen."
      />

      {/* Filter */}
      <section className="py-12 bg-background border-b border-border sticky top-20 z-40 bg-background/85 backdrop-blur">
        <div className="container-narrow flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className={cn("px-4 py-2 rounded-full font-accent text-sm font-medium transition-all",
                  tab === t ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:text-foreground")}>
                {t}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"/>
            <input type="search" placeholder="Suchen..." className="pl-10 pr-4 py-2 rounded-full border border-border bg-background text-sm focus:outline-none focus:border-teal w-64" />
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 bg-background">
        <div className="container-narrow">
          <Reveal>
            <article className="grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-border hover:shadow-elegant transition-shadow group cursor-pointer">
              <div className="lg:col-span-7 aspect-video lg:aspect-auto overflow-hidden">
                <img src={featured.img} alt={featured.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-accent font-semibold text-white bg-purple px-3 py-1 rounded-full">{featured.cat}</span>
                  <span className="text-xs text-muted-foreground">{featured.date} · {featured.read}</span>
                </div>
                <h2 className="font-display font-bold text-foreground text-2xl md:text-4xl leading-tight mb-4">{featured.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-teal font-accent font-semibold story-link self-start">
                  Weiterlesen <ArrowRight className="size-4" />
                </span>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-24 bg-background">
        <div className="container-narrow">
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((p) => (
              <StaggerItem key={p.title}>
                <article className="group cursor-pointer h-full">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-muted">
                    <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-accent font-semibold text-teal bg-teal/10 px-2.5 py-1 rounded-full">{p.cat}</span>
                    <span className="text-xs text-muted-foreground">{p.date} · {p.read}</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl leading-tight mb-3 group-hover:text-teal transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.excerpt}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 bg-offwhite">
        <div className="container-narrow">
          <Reveal className="mb-12">
            <span className="label-eyebrow text-orange">Events</span>
            <h2 className="mt-4 font-display font-bold text-foreground text-4xl md:text-5xl">Treffen Sie uns</h2>
          </Reveal>
          <div className="space-y-4">
            {events.map((e) => (
              <Reveal key={e.t}>
                <div className="bg-background rounded-2xl p-6 md:p-8 border border-border flex flex-col md:flex-row md:items-center gap-6 hover:border-teal transition-colors">
                  <div className="text-center md:text-left md:border-r md:border-border md:pr-8">
                    <div className="font-display font-bold text-3xl text-teal">{e.date}</div>
                    <div className="text-sm text-muted-foreground">{e.year}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-foreground text-xl">{e.t}</h3>
                    <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2"><Calendar className="size-4 text-orange"/>{e.loc}</p>
                    <p className="text-foreground mt-2">{e.d}</p>
                  </div>
                  <a href="/kontakt" className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-accent font-medium px-5 py-2.5 rounded-full whitespace-nowrap">
                    Termin vereinbaren <ArrowRight className="size-4"/>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-background">
        <div className="container-narrow max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display font-bold text-foreground text-3xl md:text-4xl">Immer auf dem Laufenden</h2>
            <p className="mt-4 text-muted-foreground">Echte contact heroes sind immer up to date.</p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" required placeholder="Deine E-Mail Adresse" className="flex-1 px-5 py-3.5 rounded-full border border-border focus:outline-none focus:border-teal bg-background"/>
              <button className="bg-teal hover:bg-teal-dark text-white font-accent font-semibold px-6 py-3.5 rounded-full transition-colors">Newsletter abonnieren</button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">Mit der Anmeldung stimmen Sie unseren Datenschutzbestimmungen zu.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Insights;