import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { Card } from "@/components/ui/card";
import heroImg from "@/assets/taxi.png";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Metro Taxi Council" },
      { name: "description", content: "The journey of the Metro Taxi Council, from founding to today's milestones." },
    ],
  }),
  component: StoryPage,
});

const milestones = [
  { year: "2001", title: "The formation of SANTACO", text: "Following a government led National Taxi Task Team(NTTT) process, which facilitated the converges of all taxi formations into a national conference. The SANTACO was formed in Durban, The 1st democratic leadership was elected on September 11th" },
  { year: "2005", title: "Officiation of SANTACO Constitution", text: "The National leadership of SANTACO signed its organisations governing law which is the SANTACO Constitution" },
  { year: "2009", title: "Official recognition and growth", text: "SATACO + NTA + PROTAC came together to strengthen our collective voice." },
  { year: "2010", title: "Hlokomela Road Safety Campaign launch", text: "on November 10th, SANTACO launched its road safety campaign called Hlokomela to complement governments Arrive Alive campaign and drive an awereness of road safety and oversee training for the Taxi industry" },
  { year: "2015", title: "Formation of SANTACO Women's Desk", text: "SANTACO launched the women's desk, to cater for the needs of all women in the taxi industry. July 2015" },
  { year: "2020", title: "SANTACO Participated in History National Taxi Lekgotla", text: "SANTACO took part in National Taxi Lekgotla hosted by the department of transport which resolved to SANTACO being an Apex body of the Taxi industry in October. The Lekgotla resulted in the formation of Joint Taxi Task Team in October 2020" },
  { year: "2024", title: "SANTACO hosts inaugural Policy Conference", text: "For the first time in the history of the Taxi industry, SANTACO convened a policy conference where a deligation of all provinces, structures from modes including meter taxis,ehailing, cross border and scholar transport. May 2024" },
  // { year: "2020", title: "Standing strong", text: "Supported thousands of members through the pandemic with relief funds and PPE." },
  // { year: "2024", title: "Greener fleet", text: "Began our transition program toward hybrid and electric vehicles across the metro fleet." },
];

function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="SANTACO is the national representative body of the taxi industry in South Africa."
        subtitle="From a small collective to a leading industry voice — these are the moments that shaped us."
        image={heroImg}
      />
      <section className="py-16 md:py-24">
        <div className="container-pro">
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col gap-6 md:flex-row md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} animate-fade-up`}
                >
                  <div className="hidden flex-1 md:block" />
                  <div className="absolute left-4 top-2 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full gradient-gold text-xs font-bold text-primary shadow-glow md:left-1/2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 pl-12 md:pl-0">
                    <Card className="hover-lift p-6">
                      <p className="text-sm font-semibold text-gradient-gold">{m.year}</p>
                      <h3 className="mt-1 text-xl font-semibold">{m.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
