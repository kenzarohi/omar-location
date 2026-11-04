import type { ReactNode } from "react";
import { agency } from "@/data/cars";

export default function Footer() {
  return (
    <footer className="section-pad border-t border-border bg-surface pt-16 pb-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl font-semibold text-foreground">
            Omar
            <span className="text-accent" aria-hidden>
              .
            </span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">{agency.tagline}</p>
          <div className="mt-5 flex gap-3">
            <Social
              href={agency.socials.instagram}
              label="Instagram Omar"
              icon={<InstagramIcon />}
            />
            <Social
              href={agency.socials.facebook}
              label="Facebook Omar"
              icon={<FacebookIcon />}
            />
            <Social
              href={agency.socials.linkedin}
              label="LinkedIn Omar"
              icon={<LinkedinIcon />}
            />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium tracking-wide text-foreground uppercase">
            Coordonnées
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-muted">
            <p>{agency.address}</p>
            <p>
              <a
                href={`tel:${agency.phone.replace(/\s/g, "")}`}
                className="hover:text-accent"
              >
                {agency.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${agency.email}`} className="hover:text-accent">
                {agency.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-medium tracking-wide text-foreground uppercase">
            Horaires
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {agency.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-foreground">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium tracking-wide text-foreground uppercase">
            Mentions
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href="#" className="hover:text-accent">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Conditions générales
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border pt-6 text-center text-xs text-muted md:text-left">
        © {new Date().getFullYear()} Omar Location. Tous droits réservés.
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex rounded-md border border-border p-2 text-muted transition hover:border-accent/50 hover:text-accent"
    >
      {icon}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 9.5H4V20h2.5V9.5ZM5.25 4A1.75 1.75 0 1 0 5.26 7.5 1.75 1.75 0 0 0 5.25 4ZM20 20h-2.5v-5.4c0-1.7-.6-2.8-2.1-2.8-1.1 0-1.8.8-2.1 1.5-.1.3-.1.6-.1.9V20H10.7s.05-9.2 0-10.5H13.2v1.5c.4-.6 1.4-1.7 3.4-1.7 2.5 0 4.4 1.6 4.4 5.2V20Z"
        fill="currentColor"
      />
    </svg>
  );
}
