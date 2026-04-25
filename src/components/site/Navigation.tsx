import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/hch-logo.png";
import { cn } from "@/lib/utils";

const links = [
  { to: "/leistungen", label: "Leistungen" },
  { to: "/branchenloesungen", label: "Branchenlösungen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/warum-hch", label: "Warum HCH" },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/karriere", label: "Karriere" },
  { to: "/technologie-ki", label: "Technologie & KI" },
  { to: "/insights", label: "Insights" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-navy/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav className="container-narrow flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="hey contact heroes Startseite">
          <img src={logo} alt="hey contact heroes Logo" className="h-10 w-auto" />
        </Link>

        <div className="hidden xl:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "font-accent text-sm font-medium tracking-wide transition-colors",
                  scrolled || open ? "text-white/85 hover:text-white" : "text-white/90 hover:text-white",
                  isActive && "text-teal"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/kontakt"
            className="hidden md:inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-accent font-medium text-sm px-5 py-2.5 rounded-full transition-all shadow-[0_0_0_0_hsl(var(--teal)/0.4)] hover:shadow-[0_0_30px_0_hsl(var(--teal)/0.4)]"
          >
            Kontakt <ArrowRight className="size-4" />
          </Link>
          <button
            className="xl:hidden text-white p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "xl:hidden fixed inset-x-0 top-20 bottom-0 bg-navy/98 backdrop-blur-xl transition-all duration-500",
          open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-1 p-6 pb-12 overflow-y-auto h-full">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "font-display text-3xl font-semibold py-3 border-b border-white/5 transition-colors",
                  isActive ? "text-teal" : "text-white"
                )
              }
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/kontakt"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-teal text-white font-accent font-medium px-6 py-4 rounded-full"
          >
            Kontakt aufnehmen <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;