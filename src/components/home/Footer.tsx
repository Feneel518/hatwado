"use client";

// import Link from "next/link";
// import { Separator } from "@/components/ui/separator";

// export default function Footer() {
//   return (
//     <footer className="w-full border-t bg-background">
//       {/* Main footer */}
//       <div className="mx-auto grid gap-10 px-4 py-16 md:px-8 lg:grid-cols-5">
//         {/* Brand */}
//         <div className="lg:col-span-2">
//           <Link href="/" className="inline-flex items-baseline gap-1">
//             <span className="text-lg font-semibold">hatwado</span>
//             <span className="text-primary text-lg font-semibold">.</span>
//           </Link>

//           <p className="mt-4 max-w-md text-sm text-muted-foreground">
//             Hatwado is a modern multivendor clothing platform helping brands,
//             designers, and creators sell effortlessly with powerful tools, clean
//             design, and seamless checkout.
//           </p>
//         </div>

//         {/* Platform */}
//         <FooterColumn
//           title="Platform"
//           links={[
//             { label: "Features", href: "/features" },
//             { label: "Pricing", href: "/pricing" },
//             { label: "New Arrivals", href: "/new" },
//             { label: "Sale", href: "/sale" },
//           ]}
//         />

//         {/* Sellers */}
//         <FooterColumn
//           title="Sellers"
//           links={[
//             { label: "Start Selling", href: "/sell" },
//             { label: "Seller Dashboard", href: "/seller" },
//             { label: "Commission & Payouts", href: "/seller/payouts" },
//             { label: "Seller Guidelines", href: "/seller/guidelines" },
//           ]}
//         />

//         {/* Company */}
//         <FooterColumn
//           title="Company"
//           links={[
//             { label: "About", href: "/about" },
//             { label: "Contact", href: "/contact" },
//             { label: "Privacy Policy", href: "/privacy" },
//             { label: "Terms of Service", href: "/terms" },
//           ]}
//         />
//       </div>

//       <Separator />

//       {/* Bottom bar */}
//       <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row md:px-8">
//         <span>© {new Date().getFullYear()} Hatwado. All rights reserved.</span>

//         <div className="flex items-center gap-6">
//           <Link href="/privacy" className="hover:text-foreground">
//             Privacy
//           </Link>
//           <Link href="/terms" className="hover:text-foreground">
//             Terms
//           </Link>
//           <Link href="/contact" className="hover:text-foreground">
//             Contact
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function FooterColumn({
//   title,
//   links,
// }: {
//   title: string;
//   links: { label: string; href: string }[];
// }) {
//   return (
//     <div>
//       <h4 className="mb-4 text-sm font-semibold text-foreground">{title}</h4>
//       <ul className="space-y-3">
//         {links.map((link) => (
//           <li key={link.href}>
//             <Link
//               href={link.href}
//               className="text-sm text-muted-foreground transition hover:text-foreground">
//               {link.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  RefreshCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

type FooterLink = { label: string; href: string };

const LINKS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Brands", href: "/brands" },
      { label: "New Arrivals", href: "/new" },
    ],
  },
  {
    title: "Sellers",
    links: [
      { label: "Start Selling", href: "/sell" },
      { label: "Seller Guidelines", href: "/seller/guidelines" },
      { label: "Commission & Payouts", href: "/seller/payouts" },
      { label: "Help for Sellers", href: "/seller/help" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Shipping & Delivery", href: "/shipping" },
      { label: "Returns & Refunds", href: "/returns" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      {/* Top CTA strip */}
      <div className="w-full bg-gradient-to-b from-background to-accent/30">
        <div className="mx-auto grid max-w-screen-2xl gap-6 px-4 py-10 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
              Build your brand on hatwado<span className="text-primary">.</span>
            </h3>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Sell products, manage inventory, and grow with a modern
              multivendor platform built for fashion.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <Button asChild className="rounded-full">
              <Link href="/sell">
                Start selling <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/features">Explore features</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Trust / features row */}
      <div className="mx-auto max-w-screen-2xl px-4 py-10 md:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Secure payments"
            desc="Safe checkout with trusted gateways and fraud protection."
          />
          <FeatureCard
            icon={<Truck className="h-5 w-5" />}
            title="Fast delivery"
            desc="Reliable shipping options to delight your customers."
          />
          <FeatureCard
            icon={<RefreshCcw className="h-5 w-5" />}
            title="Easy returns"
            desc="Smooth return & refund flows to build trust."
          />
          <FeatureCard
            icon={<BadgeCheck className="h-5 w-5" />}
            title="Verified sellers"
            desc="Seller onboarding & quality checks for marketplace trust."
          />
        </div>
      </div>

      <Separator />

      {/* Main footer grid */}
      <div className="mx-auto grid max-w-screen-2xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-12">
        {/* Brand + newsletter */}
        <div className="lg:col-span-5">
          <Link href="/" className="inline-flex items-baseline gap-1">
            <span className="text-lg font-semibold">hatwado</span>
            <span className="text-primary text-lg font-semibold">.</span>
          </Link>

          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            A fashion-first multivendor marketplace — discover brands you love
            and help creators sell with powerful tools.
          </p>

          {/* Newsletter */}
          <div className="mt-6 rounded-2xl border bg-card p-4 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold">Get drops & deals</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  New arrivals, sale alerts, and seller tips. No spam.
                </p>
              </div>
            </div>

            <form
              className="mt-4 flex flex-col gap-2 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                // Hook this to your newsletter provider later.
              }}>
              <Input
                type="email"
                required
                placeholder="Enter your email"
                className="h-11 rounded-xl"
              />
              <Button type="submit" className="h-11 rounded-xl">
                Subscribe
              </Button>
            </form>

            <p className="mt-3 text-[11px] text-muted-foreground">
              By subscribing you agree to our{" "}
              <Link href="/privacy" className="underline underline-offset-4">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="lg:col-span-7">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {LINKS.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-muted-foreground transition hover:text-foreground">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Optional “mini info” row */}
          <div className="mt-10 rounded-2xl border bg-card p-5 shadow-sm">
            <div className="grid gap-6 md:grid-cols-3">
              <MiniStat
                label="For sellers"
                value="Low setup, fast onboarding"
              />
              <MiniStat
                label="For buyers"
                value="Curated fashion marketplace"
              />
              <MiniStat label="Support" value="Quick help via chat/email" />
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <span>© {new Date().getFullYear()} Hatwado. All rights reserved.</span>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="rounded-xl border bg-background p-2">{icon}</div>
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}
