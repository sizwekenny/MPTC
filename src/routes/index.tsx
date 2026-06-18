import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Users, Award, Car, Images, Calendar, MapPin } from "lucide-react";
import { Section } from "@/components/site/Section";
import heroImg from "@/assets/taxi.png";
import { events } from "./events";
import { leaders, regionalOffices } from "./about";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

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
  const [showGallery, setShowGallery] = useState(false);
  const [galleryTab, setGalleryTab] = useState<"council" | "offices">("council");

  return (
    <>
      <Dialog open={showGallery} onOpenChange={setShowGallery}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
          <DialogHeader className="sticky top-0 bg-background z-10">
            <DialogTitle>Council & Regional Offices</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
              <button
                onClick={() => setGalleryTab("council")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all ${
                  galleryTab === "council" ? "bg-background text-foreground shadow" : ""
                }`}
              >
                Provincial Council
              </button>
              <button
                onClick={() => setGalleryTab("offices")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all ${
                  galleryTab === "offices" ? "bg-background text-foreground shadow" : ""
                }`}
              >
                Regional Offices
              </button>
            </div>

            {galleryTab === "council" ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {leaders.map((m) => (
                  <Card key={m.name} className="group hover-lift overflow-hidden p-6 text-center">
                    <div className="mx-auto mb-4 h-28 w-28 rounded-full overflow-hidden transition-transform group-hover:scale-105">
                      <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                    </div>
                    <h3 className="font-semibold">{m.name}</h3>
                    <p className="mt-1 text-sm text-gradient-gold font-medium">{m.role}</p>
                    <div className="mt-3 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" /> Council Member
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {regionalOffices.map((o) => (
                  <Card key={o.name} className="hover-lift overflow-hidden p-2 text-center">
                    <div className="mx-auto mb-3 h-52 w-full overflow-hidden rounded-md">
                      <img src={o.image} alt={o.name} className="h-full w-full object-cover" />
                    </div>
                    <h4 className="font-medium">{o.name}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{o.location}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

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
            The <strong className="uppercase font-semibold text-yellow-400">Mpumalanga Provincial Taxi Council</strong> unites professional drivers and operators committed to safety,
            fair practice, and outstanding passenger service.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
            <Button asChild size="lg">
              <Link to="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button onClick={() => setShowGallery(true)} size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Images className="mr-2 h-4 w-4" /> View Council
            </Button>
          </div>

          <div className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-6 animate-fade-up">
            {[
              { n: "22,000", l: "Operating Taxis" },
              { n: "20+", l: "Years of Service" },
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

      <Section eyebrow="Our Services" title="We're available for every journey">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "Local Trips",
              description: "Navigate your town with ease. Professional drivers familiar with every route and neighborhood.",
              color: "from-blue-500/20 to-blue-600/20",
              borderColor: "border-blue-200/30",
            },
            {
              icon: Car,
              title: "Long Distance Travel",
              description: "Safe, comfortable journeys across regions. Experienced drivers and modern vehicles for extended trips.",
              color: "from-amber-500/20 to-amber-600/20",
              borderColor: "border-amber-200/30",
            },
            {
              icon: Users,
              title: "Private Travel",
              description: "Exclusive charter services for groups. Tailored solutions for events, tours, and corporate needs.",
              color: "from-emerald-500/20 to-emerald-600/20",
              borderColor: "border-emerald-200/30",
            },
          ].map((service, idx) => (
            <Card
              key={service.title}
              className={`${service.borderColor} hover-lift border relative overflow-hidden p-6 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10 animate-fade-up`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="mb-4 inline-block rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

  <Section eyebrow="Recent Events" title="Latest from our events">
        <div className="grid gap-4 md:grid-cols-3">
          {events.slice(0, 3).map((e) => (
            <Card key={e.id} className="hover-lift p-4">
              <div className="flex items-start gap-3">
                <div className="h-14 w-20 overflow-hidden rounded-md bg-secondary">
                  {e.video ? (
                    <video
                      src={e.video}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : e.img ? (
                    // small cover
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={e.img} alt={e.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="grid h-full w-full place-items-center text-sm text-muted-foreground">No Image</div>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">{e.name}</h4>
                  <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {e.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.location}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{e.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button asChild size="sm">
            <Link to="/events">View all events <ArrowRight className="ml-2 h-3 w-3" /></Link>
          </Button>
        </div>
      </Section>
      <section className="bg-primary text-primary-foreground">
        <div className="container-pro flex flex-col items-center gap-6 py-16 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold">Have any questions?</h2>
            <p className="mt-2 text-primary-foreground/80">Don't hesitate to reach out to us for more information from our professional admins</p>
          </div>
          <Button asChild size="lg" className="gradient-gold text-primary hover:opacity-90">
            <Link to="/contact"><Car className="mr-2 h-4 w-4" /> Contact the Council</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
