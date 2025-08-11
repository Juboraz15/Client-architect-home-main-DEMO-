import { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry sent",
      description: "We’ll get back to you within one business day.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="container py-20">
      <h2 id="contact-heading" className="font-serif text-4xl mb-10">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="grid gap-4">
            <Input name="name" placeholder="Your name" required aria-label="Your name" />
            <Input name="email" type="email" placeholder="Email address" required aria-label="Email address" />
            <Input name="phone" type="tel" placeholder="Phone (optional)" aria-label="Phone" />
            <Textarea name="message" placeholder="Tell us about your project" className="min-h-32" required aria-label="Message" />
            <Button type="submit" size="lg" variant="hero" className="justify-center">Send Inquiry</Button>
          </div>
        </form>
        <aside className="rounded-lg border bg-card p-6 shadow-sm flex flex-col gap-4">
          <p className="text-muted-foreground">Prefer to talk now?</p>
          <a href="tel:+10000000000" className="story-link">+1 (000) 000-0000</a>
          <a href="mailto:hello@example.com" className="story-link">hello@example.com</a>
          <p className="text-sm text-muted-foreground">Office hours: Mon–Fri, 9am–6pm</p>
        </aside>
      </div>
    </section>
  );
}
