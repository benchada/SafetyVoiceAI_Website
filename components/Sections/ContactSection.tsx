"use client";

import type React from "react";
import { useState } from "react";
import { Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Contact = {
  icon: "mail" | "user";
  title: string;
  email: string;
};

const contacts: Contact[] = [
  { icon: "mail", title: "General Inquiries", email: "hello@entrogx.com" },
  // { icon: "user", title: "Ikbal Benmahcene", email: "ikbal@entrogx.com" },
  // {
  //   icon: "user",
  //   title: "Chada El Islam Benmahcene",
  //   email: "chada@entrogx.com",
  // },
];

function ContactItem({ contact }: { contact: Contact }) {
  const Icon = contact.icon === "mail" ? Mail : User;
  return (
    <div className="flex items-start gap-3 sm:gap-7 text-start">
      <div className="grid size-14 sm:size-18 place-items-center rounded-xl bg-[#EDF3FE] text-primary">
        <Icon className="size-8 sm:size-10" aria-hidden="true" />
      </div>
      <div>
        <div className="font-medium text-lg sm:text-[28px]">
          {contact.title}
        </div>
        <div className="text-sm sm:text-[20px] font-extralight">
          {contact.email}
        </div>
      </div>
    </div>
  );
}

export default function ContactSection({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "err">(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) form.reset();
    } catch {
      setStatus("err");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={cn("py-8 sm:py-12 md:py-16", className)} id="contact">
      <div className="mx-auto px-2 sm:px-6 2xl:max-w-[73%] max-w-[95%]">
        <div className="grid gap-10 md:grid-cols-2 md:gap-24">
          {/* Left: Contacts */}
          <div className="space-y-8 sm:space-y-11 text-center sm:text-left">
            <h2 className="text-3xl sm:text-balance sm:text-sec-h1 font-semibold text-primary">
              Contact us
            </h2>
            <div className="space-y-6 lg:px-0 px-4">
              {contacts.map((c) => (
                <ContactItem key={c.title} contact={c} />
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <Card className="bg-[#EDF3FE] border-0 shadow-none flex flex-col gap-8 sm:gap-15 py-6 sm:py-8 px-2 sm:px-6">
            <CardHeader className="pb-0 lg:pb-2 text-center md:text-left">
              <CardTitle className="text-2xl sm:text-sec-h1 text-primary">
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:px-4 px-2">
              <form className="space-y-5 sm:space-y-6" onSubmit={onSubmit}>
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm sm:text-md font-medium"
                  >
                    Name
                  </label>
                  <Input id="name" name="name" required aria-required="true" />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm sm:text-md font-medium"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="company"
                    className="text-sm sm:text-md font-medium"
                  >
                    Company
                  </label>
                  <Input id="company" name="company" />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm sm:text-md font-medium"
                  >
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={5} />
                </div>

                <Button
                  type="submit"
                  className="w-full text-base sm:text-sec-h2 lg:block hidden"
                  size="lg"
                  disabled={loading}
                >
                  <span className="text-white">
                    {loading ? "Sending..." : "Send"}
                  </span>
                </Button>
                <Button
                  type="submit"
                  className="w-full text-base sm:text-sec-h2 lg:hidden block "
                  size="sm"
                  disabled={loading}
                >
                  <span className="text-white">
                    {loading ? "Sending..." : "Send"}
                  </span>
                </Button>
                {status === "ok" && (
                  <p className="text-sm text-green-600 text-center md:text-left">
                    Thanks! Your message has been sent.
                  </p>
                )}
                {status === "err" && (
                  <p className="text-sm text-destructive text-center md:text-left">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
