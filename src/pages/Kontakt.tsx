import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MapPin, Phone, Mail, Calendar, Facebook, Instagram, Linkedin, Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useToast } from "@/hooks/use-toast";
import hamburg from "@/assets/hamburg-elbphilharmonie.jpeg";

const schema = z.object({
  name: z.string().trim().min(1, "Pflichtfeld").max(100),
  firma: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Ungültige E-Mail").max(255),
  telefon: z.string().trim().min(4, "Pflichtfeld").max(40),
  thema: z.string().min(1, "Bitte wählen"),
  nachricht: z.string().trim().min(1, "Pflichtfeld").max(2000),
  gdpr: z.literal(true, { errorMap: () => ({ message: "Bitte zustimmen" }) }),
});
type FormData = z.infer<typeof schema>;

const Kontakt = () => {
  const [done, setDone] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({ title: "Bitte Eingaben prüfen", description: parsed.error.errors[0]?.message, variant: "destructive" });
      return;
    }
    await new Promise((r) => setTimeout(r, 800));
    setDone(true);
    reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title={<>Let's <span className="text-gradient-brand bg-gradient-to-r from-teal to-purple">talk.</span></>}
        subtitle="Wir freuen uns auf Ihre Nachricht. Persönlich, schnell und unverbindlich."
      />

      <section className="py-24 bg-background">
        <div className="container-narrow grid lg:grid-cols-12 gap-10">
          {/* Left */}
          <Reveal className="lg:col-span-5 space-y-6">
            <div className="bg-navy text-white rounded-3xl p-8 md:p-10 space-y-6">
              <h2 className="font-display font-bold text-2xl">hey contact heroes GmbH</h2>
              <ul className="space-y-4 text-white/85">
                <li className="flex gap-4"><MapPin className="size-5 text-teal shrink-0 mt-0.5"/><span>Am Kaiserkai 45<br/>20457 Hamburg</span></li>
                <li className="flex gap-4"><Phone className="size-5 text-teal shrink-0 mt-0.5"/><a href="tel:+4940300961700">+49 (0)40 – 30 09 6170</a></li>
                <li className="flex gap-4"><Mail className="size-5 text-teal shrink-0 mt-0.5"/><a href="mailto:jobs@hey-contact-heroes.de">jobs@hey-contact-heroes.de</a></li>
              </ul>
              <div className="flex gap-3 pt-4 border-t border-white/10">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social" className="size-10 rounded-full border border-white/15 grid place-items-center hover:border-teal hover:text-teal transition">
                    <Icon className="size-4"/>
                  </a>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-teal/30">
              <img src={hamburg} alt="Hamburg Elbphilharmonie" loading="lazy" className="w-full aspect-[4/3] object-cover" style={{ filter: "brightness(0.85) saturate(1.1)" }}/>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 text-white">
                <div className="text-xs label-eyebrow text-teal">Hamburg HafenCity</div>
                <div className="font-display font-bold text-lg">Am Kaiserkai 45</div>
              </div>
            </div>
          </Reveal>

          {/* Right — Form */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="bg-offwhite rounded-3xl p-8 md:p-10 border border-border">
              {done ? (
                <div className="text-center py-12">
                  <div className="size-20 rounded-full bg-teal grid place-items-center mx-auto mb-6 animate-scale-in">
                    <Check className="size-10 text-white" strokeWidth={3}/>
                  </div>
                  <h2 className="font-display font-bold text-foreground text-3xl mb-3">Vielen Dank!</h2>
                  <p className="text-muted-foreground">Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.</p>
                  <button onClick={() => setDone(false)} className="mt-6 text-teal font-accent font-medium story-link">Neue Nachricht senden</button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <p className="text-sm text-muted-foreground">Felder mit * sind Pflichtfelder</p>

                  <Field label="Dein Name *" error={errors.name?.message}>
                    <input {...register("name", { required: "Pflichtfeld" })} className={inputClass} />
                  </Field>
                  <Field label="Deine Firma" error={errors.firma?.message}>
                    <input {...register("firma")} className={inputClass}/>
                  </Field>
                  <Field label="Deine E-Mail *" error={errors.email?.message}>
                    <input type="email" {...register("email", { required: "Pflichtfeld" })} className={inputClass}/>
                  </Field>
                  <Field label="Telefon *" error={errors.telefon?.message}>
                    <input type="tel" {...register("telefon", { required: "Pflichtfeld" })} className={inputClass}/>
                  </Field>
                  <Field label="Worum geht es? *" error={errors.thema?.message}>
                    <select {...register("thema", { required: "Bitte wählen" })} className={inputClass} defaultValue="">
                      <option value="" disabled>Bitte auswählen</option>
                      <option>Anfrage Inbound Service</option>
                      <option>Anfrage Outbound & Vertrieb</option>
                      <option>Anfrage Back Office</option>
                      <option>KI & Automation</option>
                      <option>Karriere</option>
                      <option>Sonstiges</option>
                    </select>
                  </Field>
                  <Field label="Deine Nachricht *" error={errors.nachricht?.message}>
                    <textarea rows={5} {...register("nachricht", { required: "Pflichtfeld" })} className={inputClass}/>
                  </Field>

                  <label className="flex items-start gap-3 text-sm text-muted-foreground">
                    <input type="checkbox" {...register("gdpr", { required: true })} className="mt-1 size-4 accent-teal"/>
                    <span>Ich stimme der Verarbeitung meiner Daten gemäß der <a href="#" className="text-teal underline">Datenschutzerklärung</a> zu.</span>
                  </label>
                  {errors.gdpr && <p className="text-xs text-destructive">Bitte zustimmen</p>}

                  <button type="submit" disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-brand text-white font-accent font-semibold px-6 py-4 rounded-full shadow-elegant hover:shadow-glow-teal transition-all disabled:opacity-60">
                    {isSubmitting ? "Wird gesendet..." : <>Nachricht senden <ArrowRight className="size-5"/></>}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Contact options */}
        <div className="container-narrow grid md:grid-cols-3 gap-5 mt-16">
          {[
            { icon: Phone, t: "Telefon", d: "+49 (0)40 30 09 6170", href: "tel:+4940300961700" },
            { icon: Mail, t: "E-Mail", d: "jobs@hey-contact-heroes.de", href: "mailto:jobs@hey-contact-heroes.de" },
            { icon: Calendar, t: "Termin buchen", d: "Online verfügbar", href: "#" },
          ].map((o) => (
            <a key={o.t} href={o.href} className="group bg-background border border-border rounded-2xl p-7 hover:border-teal hover:-translate-y-1 transition-all">
              <div className="size-12 rounded-xl bg-teal/10 text-teal grid place-items-center mb-4 group-hover:bg-teal group-hover:text-white transition-colors">
                <o.icon className="size-6"/>
              </div>
              <h3 className="font-display font-bold text-foreground text-lg">{o.t}</h3>
              <p className="text-muted-foreground text-sm mt-1">{o.d}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

const inputClass = "w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition";

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div>
    <label className="block font-accent font-medium text-sm text-foreground mb-2">{label}</label>
    {children}
    {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
  </div>
);

export default Kontakt;