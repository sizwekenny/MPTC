import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search } from "lucide-react";
import news1 from "@/assets/news/11.jpeg";
import news2 from "@/assets/news/22.jpeg";
import news3 from "@/assets/news/33.jpeg";
import news4 from "@/assets/news/44.jpeg";
import chair from "@/assets/news/cha.jpeg";
import heroImg from "@/assets/taxi.png";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Latest News — Metro Taxi Council" },
      { name: "description", content: "Updates, announcements and news from the Metro Taxi Council." },
    ],
  }),
  component: NewsPage,
});

const allNews = [
  { id: 1, preview: "SANTACO Mpumalanga Province under the leadership of Mr FJ Sibanyoni joined family members and mourner to pay their final respect at the Lekwa Mass funeral in Standerton. The organization extended its heartfelt condolences to the bereaved families and stood in solidarity with the affected communities during this difficult time ", date: "May 30, 2026", title: "Santaco Mpumalanga at Lekwa Mass funeral in Mpumalanga provice", images: [news1,news2,news3,news4] },
  { id: 2, title: "Congratulation to SANTACO Mpumalanga chairperson Mr FJ Sibanyoni on being elected as the second Deputy President of SANTACO National", date: "May 27, 2026", preview: "", images: [chair] },
  // { id: 3, title: "New safety standards adopted across the fleet", date: "Mar 28, 2025", preview: "Updated guidelines cover vehicle inspections, in-car cameras and incident reporting procedures." },
  // { id: 4, title: "Annual general meeting set for June", date: "Mar 12, 2025", preview: "Members are invited to participate in the AGM where new committee members will be elected." },
  // { id: 5, title: "Partnership with city for accessible taxi pilot", date: "Feb 18, 2025", preview: "A pilot program will introduce wheelchair-accessible vehicles in three downtown zones." },
  // { id: 6, title: "Council launches mental wellness hotline", date: "Jan 30, 2025", preview: "Free confidential support is now available 24/7 for members and their families." },
  // { id: 7, title: "Winter readiness checks now mandatory", date: "Jan 12, 2025", preview: "All member vehicles must complete winter safety inspections before the cold-weather season begins." },
  // { id: 8, title: "EV charging stations expand citywide", date: "Dec 20, 2024", preview: "Twelve new fast-charge stations come online, supporting our growing electric fleet." },
]

const PAGE_SIZE = 4;

function NewsPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const filtered = useMemo(
    () => allNews.filter((n) => n.title.toLowerCase().includes(query.toLowerCase()) || n.preview.toLowerCase().includes(query.toLowerCase())),
    [query]
  );
  const visible = filtered.slice(0, page * PAGE_SIZE);

  return (
    <>
      <PageHero eyebrow="News" title="Latest from the council" subtitle="Stay up to date with our latest announcements and stories." image={heroImg} />
      <section className="py-16">
        <div className="container-pro">
          <div className="mx-auto mb-10 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                placeholder="Search news..."
                className="pl-9"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {visible.map((n) => (
              <Card key={n.id} className="group hover-lift overflow-hidden p-0">
                {n.images && n.images.length > 0 ? (
                  n.images.length === 1 ? (
                    <div className="bg-muted w-full">
                      <img src={n.images[0]} alt={n.title} className="w-full h-auto object-contain object-center" />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-0 bg-muted">
                      {n.images.map((img, idx) => (
                        <img key={idx} src={img} alt={`${n.title} - ${idx + 1}`} className="h-32 w-full object-cover" />
                      ))}
                    </div>
                  )
                ) : (
                  <div className="grid h-44 place-items-center gradient-hero text-primary-foreground/70 text-sm">
                    News Image
                  </div>
                )}
                <div className="p-6">
                  <p className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> {n.date}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{n.preview}</p>
                  {/* <Button variant="ghost" size="sm" className="mt-4 px-0 text-primary hover:bg-transparent hover:text-primary/80">
                    Read More →
                  </Button> */}
                </div>
              </Card>
            ))}
          </div>
          {visible.length < filtered.length && (
            <div className="mt-10 text-center">
              <Button onClick={() => setPage((p) => p + 1)} variant="outline">Load more</Button>
            </div>
          )}
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground">No news matches your search.</p>
          )}
        </div>
      </section>
    </>
  );
}
