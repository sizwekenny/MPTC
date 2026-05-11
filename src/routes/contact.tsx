import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { PageHero } from "@/components/site/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Metro Taxi Council" },
      { name: "description", content: "Get in touch with the Metro Taxi Council. Office address, phone, email and contact form." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(2, "Subject required").max(150),
  message: z.string().trim().min(10, "Message too short").max(1000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    form.reset();
    toast.success("Message sent — we'll get back to you shortly.");
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk" subtitle="Questions, partnership ideas, or membership enquiries — we'd love to hear from you." />
      <section className="py-16">
        <div className="container-pro grid gap-10 lg:grid-cols-5">
          <Card className="p-8 lg:col-span-3">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" required maxLength={150} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required maxLength={1000} rows={6} />
              </div>
              <Button type="submit" size="lg" className="w-full transition-transform hover:scale-[1.01]" disabled={submitting}>
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          <div className="space-y-4 lg:col-span-2">
            <Card className="hover-lift p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary"><MapPin className="h-5 w-5 text-primary" /></div>
                <div>
                  <h3 className="font-semibold">Office Address</h3>
                  <p className="text-sm text-muted-foreground">123 Council Avenue, Capital City, 10001</p>
                </div>
              </div>
            </Card>
            <Card className="hover-lift p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary"><Phone className="h-5 w-5 text-primary" /></div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </Card>
            <Card className="hover-lift p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary"><Mail className="h-5 w-5 text-primary" /></div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">info@metrotaxicouncil.com</p>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden p-0">
              <iframe
                title="Office location map"
                src="https://www.google.com/maps?q=Times+Square,New+York&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
