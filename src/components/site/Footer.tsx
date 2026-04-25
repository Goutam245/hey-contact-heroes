import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/hch-logo-dark.png";

const services = [
  { to: "/leistungen", label: "Inbound Kundenservice" },
  { to: "/leistungen", label: "Outbound & Vertrieb" },
  { to: "/leistungen", label: "Back Office" },
  { to: "/technologie-ki", label: "KI & Automation" },
];
const company = [
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/warum-hch", label: "Warum HCH" },
  { to: "/karriere", label: "Karriere" },
  { to: "/insights", label: "Insights" },
  { to: "/referenzen", label: "Referenzen" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-navy text-white">
      <div className="h-1 w-full bg-gradient-brand" />
      <div className="container-narrow py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <img src={logo} alt="hey contact heroes" className="h-14 w-auto" />
            <p className="text-white/70 text-sm leading-relaxed">
              Premium Remote Contact Center aus Hamburg. Guided by Humans — powered by AI.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social Media"
                  className="size-10 rounded-full border border-white/15 grid place-items-center hover:border-teal hover:bg-teal/10 hover:text-teal transition-all">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-accent text-xs uppercase tracking-[0.2em] text-teal mb-5">Leistungen</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className="text-white/80 hover:text-white text-sm transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-accent text-xs uppercase tracking-[0.2em] text-teal mb-5">Unternehmen</h4>
            <ul className="space-y-3">
              {company.map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className="text-white/80 hover:text-white text-sm transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="font-accent text-xs uppercase tracking-[0.2em] text-teal">Let's talk</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3"><MapPin className="size-4 mt-0.5 text-teal shrink-0"/>Am Kaiserkai 45<br/>20457 Hamburg</li>
              <li className="flex items-center gap-3"><Phone className="size-4 text-teal shrink-0"/>+49 (0)40 30 09 6170</li>
              <li className="flex items-center gap-3"><Mail className="size-4 text-teal shrink-0"/>jobs@hey-contact-heroes.de</li>
            </ul>
            <Link to="/kontakt" className="inline-flex items-center gap-2 text-teal text-sm font-accent font-medium story-link">
              Termin vereinbaren <ArrowRight className="size-4"/>
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} hey contact heroes GmbH · HRB 168825 Hamburg</p>
          <div className="flex gap-6">
            <Link to="/kontakt" className="hover:text-white">Kontakt</Link>
            <a href="#" className="hover:text-white">Datenschutz</a>
            <a href="#" className="hover:text-white">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;