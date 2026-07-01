import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/Section";
import { useState } from "react";
import { Target, Eye, Heart, Users, Sparkles, ShieldCheck, Handshake, BadgeCheck, ArrowRight } from "lucide-react";
import chair from "@/assets/profiles/chair.jpeg";
import phoku from "@/assets/profiles/poku.jpeg";
import manana from "@/assets/profiles/manana.jpeg";
import heroImg from "@/assets/taxi.png";
import sibanyoni from "@/assets/profiles/sibanyoni.jpeg";
import masango from "@/assets/profiles/masango.jpeg";
import ehlanzeni from "@/assets/ehlanzeni.jpeg";
import gert from "@/assets/gertsibande.jpeg";
import nkangala from "@/assets/nkangala.png";

export const leaders = [
  { name: "F.J Sibanyoni", role: "Chairperson", image: chair },
  { name: "J.K Phoku", role: "Deputy Chairperson", image: phoku },
  { name: "P.S Sibanyoni", role: "Secretary", image: sibanyoni },
  { name: "L.L Manana", role: "Deputy Secretary", image: manana },
  { name: "D.S Masango", role: "Treasurer", image: masango },
  { name: "K.W Moropa", role: "Training Officer", image: heroImg },
  { name: "L Zulu", role: "Chairperson Women Desk", image: heroImg },
  { name: "J Khosa ", role: "Disciplinary Committee", image: heroImg },
  { name: "J.S Simelane", role: "Executive Member", image: heroImg },
  { name: "M.A Mokonyane", role: "Executive Member", image: heroImg },
  { name: "M Nkalanga ", role: "Executive Member", image: heroImg },
];

export const regionalOffices = [
  { name: "Ehlanzeni RegionalTaxi Council (MA Msimango Office)", image: ehlanzeni, location: "116 Outteniqua Streets, white River" },
  { name: "Gert Sibande Regional Taxi Council (DL Mabuza Office)", image: gert, location: "98 Oosthuizen Street, Ermelo" },
  { name: "Nkangala Regional Taxi Council (MS Makeke Office)", image: nkangala, location: "18 Florida Streer, Model park, eMlalahleni" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mpumalanga Provincial Taxi Council" },
      { name: "description", content: "Learn about the mission, vision, values and leadership of the Mpumalanga Provincial Taxi Council." },
    ],
  }),
  component: AboutPage,
});

const commitmentPillars = [
  {
    icon: Sparkles,
    title: "Empowerment",
    description: "We are committed to enhancing economic opportunities for our members and employees across the transport value chain.",
    bullets: [
      "Facilitate access to finance, training, and business development support.",
      "Foster a culture of self-reliance and growth through opportunity.",
      "Support inclusive participation in enterprise development and industry transformation.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Professionalism",
    description: "We uphold the highest standards of organisation, accountability, and professional conduct within the taxi industry.",
    bullets: [
      "Enforce codes of conduct and continuous skills development.",
      "Promote discipline, respect, and commitment among all stakeholders.",
      "Maintain robust governance structures and performance accountability mechanisms.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    description: "We are dedicated to ensuring safe, reliable, and secure transport for all commuters and operators.",
    bullets: [
      "Run driver training programs, vehicle inspections, and safety awareness campaigns.",
      "Enforce compliance with national safety standards and promote best practices.",
      "Cultivate a safety-first mindset throughout the industry.",
    ],
  },
  {
    icon: Handshake,
    title: "Involvement",
    description: "We are committed to expanding the taxi industry’s role and presence in the broader economy through active participation.",
    bullets: [
      "Promote innovation and diversification beyond traditional operations.",
      "Encourage participation in logistics, infrastructure, and technology sectors.",
      "Drive member-owned ventures and partnerships.",
    ],
  },
  {
    icon: BadgeCheck,
    title: "Representation & Commitment",
    description: "We advocate for our members’ interests with integrity, ensuring every voice is heard and our mission upheld.",
    bullets: [
      "Engage stakeholders across all levels and platforms.",
      "Build transparent, democratic structures that support collective decision-making.",
      "Lead with unity, purpose, and accountability.",
    ],
  },
];

function TabsLocal() {
  const [tab, setTab] = useState<"committee" | "offices">("committee");

  return (
    <div className="space-y-6">
      <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
        <button
          onClick={() => setTab("committee")}
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all ${
            tab === "committee" ? "bg-background text-foreground shadow" : ""
          }`}
        >
          Provincial Council
        </button>
        <button
          onClick={() => setTab("offices")}
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all ${
            tab === "offices" ? "bg-background text-foreground shadow" : ""
          }`}
        >
          Regional Offices
        </button>
      </div>

      {tab === "committee" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((m) => (
            <Card key={m.name} className="group hover-lift overflow-hidden px-3 py-4 text-center sm:px-4 sm:py-5">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-[1.25rem] border-2 border-white/80 bg-secondary/50 shadow-md ring-1 ring-black/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.03]">
                <img src={m.image} alt={m.name} className="h-full w-full object-cover object-center" />
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
          {[
            { name: "Ehlanzeni RegionalTaxi Council (MA Msimango Office)", image: ehlanzeni, location: "116 Outteniqua Streets, white River" },
            { name: "Gert Sibande Regional Taxi Council (DL Mabuza Office)", image: gert, location: "98 Oosthuizen Street, Ermelo" },
            { name: "Nkangala Regional Taxi Council (MS Makeke Office)", image: nkangala, location: "18 Florida Streer, Model park, eMlalahleni" },
            
          ].map((o) => (
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
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A council built by drivers, for drivers"
        subtitle="Fast and friendly, we offer professional transportation services throughout the Mpumalanga area. Our team is up for any job, from big to small. Mpumalanga locals know that we stand behind our work, putting your satisfaction as our #1 priority. What really makes us stand out is our dedication and attention to detail. Contact us to learn more from one of our expert staff on how our professional team can help you!"
        image={heroImg}
      />

      <div className="container-pro -mt-8 relative z-10 px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/70 bg-background/95 p-4 shadow-lg backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Meet the committee</p>
              <p className="text-sm text-muted-foreground">Jump straight to our leadership and council representatives.</p>
            </div>
          </div>
          <Button asChild variant="default" size="sm" className="rounded-full">
            <a href="#committee" className="inline-flex items-center gap-2">
              View committee
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <Section eyebrow="Our purpose" title="Mission, Vision & Values">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, t: "Our Mission", d: "To drive the transformation of public transport through safe, reliable, and innovative mobility and logistics solutions, while promoting economic empowerment and a diversified, sustainable, subsidized industry that serves all stakeholder." },
            { icon: Eye, t: "Our Vision", d: "A safe, fair and modern taxi industry that's the first choice for urban transport." },
            { icon: Heart, t: "Core Values", d: "Integrity, accountability, professionalism, community and continuous improvement." },
          ].map((v) => (
            <Card key={v.t} className="hover-lift p-8">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-secondary">
                <v.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{v.t}</h3>
              <p className="text-sm text-muted-foreground">{v.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What guides us"
        title="Our pillars of impact"
        subtitle="These commitments shape how we serve our members, communities, and the broader transport industry."
        className="bg-secondary/20"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {commitmentPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} className="hover-lift p-7">
                <div className="flex gap-4">
                  <div className="mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{pillar.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{pillar.description}</p>
                    <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                      {pillar.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section
        id="committee"
        eyebrow="Leadership"
        title="Meet our committee"
        subtitle="Elected leaders dedicated to serving our members."
        className="bg-secondary/40 scroll-mt-24"
      >
        {/* Simple local-state tabs to avoid interaction issues */}
        <TabsLocal />
      </Section>
    </>
  );
}
