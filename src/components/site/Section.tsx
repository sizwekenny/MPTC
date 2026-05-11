import { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container-pro">
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-12 max-w-2xl text-center animate-fade-up">
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gradient-gold">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border gradient-hero">
      <div className="container-pro py-20 text-center text-primary-foreground md:py-28">
        {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gradient-gold animate-fade-in">{eyebrow}</p>}
        <h1 className="text-4xl font-bold md:text-5xl animate-fade-up">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80 animate-fade-up">{subtitle}</p>}
      </div>
    </section>
  );
}
