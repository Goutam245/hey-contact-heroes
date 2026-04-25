import { Mail } from "lucide-react";
import { team } from "@/data/team";
import { Stagger, StaggerItem } from "./Reveal";

export const TeamGrid = () => (
  <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {team.map((p) => (
      <StaggerItem key={p.name}>
        <div className="group relative bg-navy-2 rounded-3xl p-8 text-center border border-teal/15 hover:border-teal hover:-translate-y-2 transition-all duration-500 h-full">
          <div className="relative mx-auto size-36 mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            <div className="relative size-36 rounded-full overflow-hidden ring-4 ring-teal/40 group-hover:ring-teal transition-all">
              <img
                src={p.img}
                alt={`Portrait von ${p.name}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <h3 className="font-display font-bold text-white text-lg uppercase tracking-wide leading-tight">
            {p.name}
          </h3>
          <p className="mt-2 text-teal text-sm font-medium">{p.role}</p>
          <a
            href={`mailto:${p.email}`}
            className="mt-3 inline-flex items-center gap-2 text-white/50 hover:text-teal text-xs font-accent transition-colors break-all"
          >
            <Mail className="size-3.5 shrink-0" />
            {p.email}
          </a>
        </div>
      </StaggerItem>
    ))}
  </Stagger>
);

export default TeamGrid;