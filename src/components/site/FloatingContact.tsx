import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <Link
      to="/contact"
      aria-label="Contact us"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full gradient-gold text-primary shadow-glow transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}
