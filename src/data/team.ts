import benjamin from "@/assets/benjamin.jpg";
import susann from "@/assets/susann.jpg";
import josephine from "@/assets/josephine.jpg";
import vanessa from "@/assets/vanessa.jpg";
import maria from "@/assets/maria.jpg";
import yvonne from "@/assets/yvonne.jpg";
import paulina from "@/assets/paulina.jpg";
import janina from "@/assets/janina.jpg";
import stefanie from "@/assets/stefanie.jpg";

export type TeamMember = {
  name: string;
  role: string;
  email: string;
  img: string;
};

export const team: TeamMember[] = [
  { name: "Benjamin Barnack", role: "Chief Executive Officer", email: "ben@hey-contact-heroes.de", img: benjamin },
  { name: "Susann Schulze", role: "Head of Operations", email: "susann@hey-contact-heroes.de", img: susann },
  { name: "Josephine Engelmann", role: "Assistenz der Geschäftsführung", email: "josephine@hey-contact-heroes.de", img: josephine },
  { name: "Vanessa Lerose", role: "Projektmanagerin", email: "vanessa@hey-contact-heroes.de", img: vanessa },
  { name: "Maria Brak", role: "Head of Projektmanagement", email: "maria@hey-contact-heroes.de", img: maria },
  { name: "Yvonne Grundmann", role: "Projektmanagerin", email: "yvonne@hey-contact-heroes.de", img: yvonne },
  { name: "Paulina Reisige", role: "Office Management & Recruiting", email: "paulina@hey-contact-heroes.de", img: paulina },
  { name: "Janina Schönfelder", role: "Junior Projektleiterin", email: "janina@hey-contact-heroes.de", img: janina },
  { name: "Stefanie Schmidt", role: "Junior Operations Managerin", email: "stefanie@hey-contact-heroes.de", img: stefanie },
];