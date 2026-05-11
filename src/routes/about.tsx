import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { PageHero, Section } from "@/components/site/Section";
import { Target, Eye, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mpumalanga Provincial Taxi Council" },
      { name: "description", content: "Learn about the mission, vision, values and leadership of the Mpumalanga Provincial Taxi Council." },
    ],
  }),
  component: AboutPage,
});

const leaders = [
  { name: "James Mwangi", role: "Chairman", initial: "JM" },
  { name: "Aisha Patel", role: "Deputy Chairman", initial: "AP" },
  { name: "David Okafor", role: "Secretary", initial: "DO" },
  { name: "Maria Santos", role: "Treasurer", initial: "MS" },
 
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A council built by drivers, for drivers"
        subtitle="Fast and friendly, we offer professional transportation services throughout the Mpumalanga area. Our team is up for any job, from big to small. Mpumalanga locals know that we stand behind our work, putting your satisfaction as our #1 priority. What really makes us stand out is our dedication, great prices and attention to detail. Contact us to learn more from one of our expert staff on how our professional team can help you!"
      />

      <Section eyebrow="Our purpose" title="Mission, Vision & Values">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, t: "Our Mission", d: "To represent, protect and advance the interests of taxi operators while delivering trusted service to the public." },
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
        eyebrow="Leadership"
        title="Meet our committee"
        subtitle="Elected leaders dedicated to serving our members."
        className="bg-secondary/40"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((m) => (
            <Card key={m.name} className="group hover-lift overflow-hidden p-6 text-center">
              <div className="mx-auto mb-4 grid h-28 w-28 place-items-center rounded-full gradient-hero text-2xl font-bold text-primary-foreground transition-transform group-hover:scale-105">
                {m.initial}
              </div>
              <h3 className="font-semibold">{m.name}</h3>
              <p className="mt-1 text-sm text-gradient-gold font-medium">{m.role}</p>
              <div className="mt-3 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <Users className="h-3 w-3" /> Council Member
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
