import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, X } from "lucide-react";
import agmVideo from "@/assets/AGM.mp4";
import heroImg from "@/assets/taxi.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";

type EventItem = {
  id: number;
  name: string;
  date: string;
  location: string;
  category: string;
  desc: string;
  img?: string;
  video?: string;
};

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events Attended — Metro Taxi Council" },
      { name: "description", content: "Conferences, summits and community events the Metro Taxi Council has attended." },
    ],
  }),
  component: EventsPage,
});

export const events: EventItem[] = [
  { id: 1, name: "SANTACO Mpumalanga Elective AGM 2026", date: "Mar 12, 2026", location: "Bundu Lodge in Nelpruit", category: "Summit", desc: "Congratulations to the re-elected SANTACO Mpumalanga Provincial Excecutive Committee", video: agmVideo, img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80" },
  // { id: 2, name: "Driver Wellness Day", date: "Feb 02, 2025", location: "Riverside Park", category: "Community", desc: "A day of free health checks, training and family activities for our members." },
  // { id: 3, name: "Green Fleet Expo", date: "Nov 18, 2024", location: "Metro Arena", category: "Conference", desc: "Showcasing the latest hybrid and EV vehicles for taxi operators." },
  // { id: 4, name: "Annual Awards Gala", date: "Oct 04, 2024", location: "Grand Heritage Hotel", category: "Gala", desc: "Celebrating excellence and long service among our members." },
  // { id: 5, name: "City Safety Forum", date: "Aug 22, 2024", location: "City Hall", category: "Forum", desc: "Collaborative workshop with police on driver and passenger safety." },
  // { id: 6, name: "Youth Career Fair", date: "May 15, 2024", location: "Trade Hall", category: "Community", desc: "Mentoring next-generation drivers and showcasing industry careers." },
];

function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <>
      <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="sticky top-0 bg-background z-10">
            <DialogTitle>{selectedEvent?.name}</DialogTitle>
          </DialogHeader>
          {selectedEvent && (
            <div className="space-y-6">
              <div className="relative h-96 overflow-hidden rounded-lg bg-secondary">
                {selectedEvent.video ? (
                  <video
                    src={selectedEvent.video}
                    controls
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : selectedEvent.img ? (
                  <img
                    src={selectedEvent.img}
                    alt={selectedEvent.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center gradient-hero text-primary-foreground/80">
                    Event Media
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">{selectedEvent.location}</span>
                  </div>
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {selectedEvent.category}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-2">Event Details</h3>
                  <p className="text-muted-foreground">{selectedEvent.desc}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <PageHero
        eyebrow="Events"
        title="Where we've been"
        subtitle="A look at the conferences, gatherings and community events we've attended and hosted."
        image={heroImg}
      />
      <section className="py-16">
        <div className="container-pro">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <Card key={e.id} className="group hover-lift overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden bg-secondary">
                  {e.video ? (
                    <video src={e.video} controls playsInline className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : e.img ? (
                    <img src={e.img} alt={e.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <div className="grid h-full w-full place-items-center gradient-hero text-primary-foreground/80 text-sm">
                      Event Photo
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{e.name}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {e.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.location}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
                  <Button
                    onClick={() => setSelectedEvent(e)}
                    variant="ghost"
                    size="sm"
                    className="mt-4 px-0 text-primary hover:bg-transparent hover:text-primary/80"
                  >
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
