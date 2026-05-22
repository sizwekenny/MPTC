import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { PageHero, Section } from "@/components/site/Section";
import { useState } from "react";
import { Target, Eye, Heart, Users } from "lucide-react";
import staffFff from "@/assets/fff.jpg";
import placeholderLogo from "@/assets/logo.png";
import placeholderTaxi from "@/assets/taxi.png";
import ehlanzeni from "@/assets/ehlanzeni.jpeg";
import gert from "@/assets/gertsibande.jpeg";
import nkangala from "@/assets/nkangala.png";

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
  { name: "F.J Sibanyoni", role: "Chairperson", image: staffFff },
  { name: "J.K Phoku", role: "Deputy Chairperson", image: placeholderLogo },
  { name: "P.S Sibanyoni", role: "Secretary", image: placeholderTaxi },
  { name: "L.L Manana", role: "Deputy Secretary", image: placeholderLogo },
  { name: "D.S Masango", role: "Treasurer", image: placeholderTaxi },
  { name: "K.W Moropa", role: "Training Officer", image: placeholderTaxi },
  { name: "L Zulu", role: "Chairperson Women Desk", image: placeholderTaxi },
  { name: "J Khosa ", role: "Disciplinary Committee", image: placeholderTaxi },
  { name: "J.S Simelane", role: "Executive Member", image: placeholderTaxi },
  { name: "M.A Mokonyane", role: "Executive Member", image: placeholderTaxi },
  { name: "M Nkalanga ", role: "Executive Member", image: placeholderTaxi },
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
      />

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
        eyebrow="Leadership"
        title="Meet our committee"
        subtitle="Elected leaders dedicated to serving our members."
        className="bg-secondary/40"
      >
        {/* Simple local-state tabs to avoid interaction issues */}
        <TabsLocal />
      </Section>
    </>
  );
}
