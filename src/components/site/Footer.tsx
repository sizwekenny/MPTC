import { Link } from "@tanstack/react-router";
import { Car, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-pro grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg gradient-gold">
              <Car className="h-5 w-5 text-primary" />
            </span>
            Metro Taxi Council
          </Link>
          <p className="text-sm text-muted-foreground">
            Representing professional taxi operators with integrity, safety, and excellence since 1998.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/our-story" className="hover:text-foreground">Our Story</Link></li>
            <li><Link to="/events" className="hover:text-foreground">Events</Link></li>
            <li><Link to="/news" className="hover:text-foreground">News</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />123 Council Avenue, Capital City</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" />+1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" />info@metrotaxicouncil.com</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">Newsletter</h4>
          <p className="mb-3 text-sm text-muted-foreground">Stay updated with our latest news and events.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="Your email" required />
            <Button type="submit" size="sm">Join</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-pro flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Metro Taxi Council. All rights reserved.</p>
          <p>Built with care for our drivers and community.</p>
        </div>
      </div>
    </footer>
  );
}
