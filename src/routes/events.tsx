import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events Attended — Metro Taxi Council" },
      { name: "description", content: "Conferences, summits and community events the Metro Taxi Council has attended." },
    ],
  }),
  component: EventsPage,
});

const events = [
  { id: 1, name: "National Transport Summit", date: "Mar 12, 2025", location: "Capital Convention Center", category: "Summit", desc: "Keynote panel on the future of urban mobility and shared transport.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80" },
  { id: 2, name: "Driver Wellness Day", date: "Feb 02, 2025", location: "Riverside Park", category: "Community", desc: "A day of free health checks, training and family activities for our members." },
  { id: 3, name: "Green Fleet Expo", date: "Nov 18, 2024", location: "Metro Arena", category: "Conference", desc: "Showcasing the latest hybrid and EV vehicles for taxi operators." },
  { id: 4, name: "Annual Awards Gala", date: "Oct 04, 2024", location: "Grand Heritage Hotel", category: "Gala", desc: "Celebrating excellence and long service among our members." },
  { id: 5, name: "City Safety Forum", date: "Aug 22, 2024", location: "City Hall", category: "Forum", desc: "Collaborative workshop with police on driver and passenger safety." },
  { id: 6, name: "Youth Career Fair", date: "May 15, 2024", location: "Trade Hall", category: "Community", desc: "Mentoring next-generation drivers and showcasing industry careers." },
];

const categories = ["All", "Summit", "Community", "Conference", "Gala", "Forum"];

function EventsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? events : events.filter((e) => e.category === active);

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Where we've been"
        subtitle="A look at the conferences, gatherings and community events we've attended and hosted."
      />
      <section className="py-16">
        <div className="container-pro">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === c ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/70"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((e) => (
              <Card key={e.id} className="group hover-lift overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden bg-secondary">
                  {e.img ? (
                    <img src={e.img} alt={e.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <div className="grid h-full w-full place-items-center gradient-hero text-primary-foreground/80 text-sm">
                      Event Photo
                    </div>
                  )}
                  <Badge className="absolute left-3 top-3 bg-background/90 text-foreground">{e.category}</Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{e.name}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {e.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.location}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
                  <Button variant="ghost" size="sm" className="mt-4 px-0 text-primary hover:bg-transparent hover:text-primary/80">
                    View More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
