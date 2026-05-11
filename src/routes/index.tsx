import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Users, Award, Car, Phone } from "lucide-react";
import { Section } from "@/components/site/Section";
import heroImg from "@/assets/tax.jfif";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mpumalanga Provincial Taxi Council — Driving Excellence Together" },
      { name: "description", content: "Official council for professional taxi operators. Safety, integrity, and service excellence." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Fleet of professional taxis at dusk"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="relative container-pro flex min-h-[88vh] flex-col items-start justify-center py-24 text-primary-foreground">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gradient-gold animate-fade-in">
            Established 2001
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl animate-fade-up">
            Driving Excellence,<br />
            <span className="text-gradient-gold">Serving Our City.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85 animate-fade-up">
            The Mpumalanga Provincial Taxi Council unites professional drivers and operators committed to safety,
            fair practice, and outstanding passenger service.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
            <Button asChild size="lg">
              <Link to="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact"><Phone className="mr-2 h-4 w-4" /> Contact Us</Link>
            </Button>
          </div>

          <div className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-6 animate-fade-up">
            {[
              { n: "2,500+", l: "Members" },
              { n: "25+", l: "Years of Service" },
              { n: "98%", l: "Driver Satisfaction" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-gold pl-4">
                <div className="text-2xl font-bold md:text-3xl">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="What we stand for"
        title="A united voice for professional drivers"
        subtitle="We advocate, educate, and elevate standards across the taxi industry."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Shield, t: "Safety First", d: "Rigorous standards and ongoing training to keep drivers and passengers safe." },
            { icon: Users, t: "Community", d: "A strong network supporting members through every stage of their career." },
            { icon: Award, t: "Excellence", d: "Recognising professionalism and rewarding outstanding service." },
          ].map((f) => (
            <Card key={f.t} className="hover-lift border-border/60 p-8 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl gradient-gold shadow-glow">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{f.t}</h3>
              <p className="text-sm text-muted-foreground">{f.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-pro flex flex-col items-center gap-6 py-16 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold">Become a member today</h2>
            <p className="mt-2 text-primary-foreground/80">Join thousands of professional drivers benefiting from our advocacy, training, and support.</p>
          </div>
          <Button asChild size="lg" className="gradient-gold text-primary hover:opacity-90">
            <Link to="/contact"><Car className="mr-2 h-4 w-4" /> Join the Council</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
