// "use client";

// import { Poppins } from "next/font/google";
// import Link from "next/link";
// import { FC } from "react";
// import { Button } from "../ui/button";
// import { cn } from "@/lib/utils";
// import { usePathname } from "next/navigation";

// interface NavbarProps {}

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["700"],
// });

// interface NavbarItemProps {
//   href: string;
//   children: React.ReactNode;
//   isActive?: boolean;
// }

// const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
//   return (
//     <Button
//       asChild
//       variant={"outline"}
//       className={cn(
//         "bg-transparent hover:bg-transparent  hover:border-primary border-transparent px-3.5 text-lg",
//         isActive &&
//           "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
//       )}>
//       <Link href={href}>{children}</Link>
//     </Button>
//   );
// };

// const NAVBARITEMS = [
//   {
//     href: "/",
//     children: "Home",
//   },
//   {
//     href: "/about",
//     children: "About",
//   },
//   {
//     href: "/features",
//     children: "Features",
//   },
//   {
//     href: "/pricing",
//     children: "Pricing",
//   },
//   {
//     href: "/contact",
//     children: "Contact",
//   },
// ];

// const Navbar: FC<NavbarProps> = ({}) => {
//   const pathanme = usePathname();
//   return (
//     <nav className="h-20 flex border-b justify-between font-md bg-secondary">
//       <Link href={"/"} className="pl-6 flex items-center">
//         <span className={cn("text-5xl font-semibold", poppins.className)}>
//           hatwado.
//         </span>
//       </Link>

//       <div className=" items-center gap-4 hidden lg:flex">
//         {NAVBARITEMS.map((item) => (
//           <NavbarItem
//             key={item.href}
//             href={item.href}
//             isActive={pathanme === item.href}>
//             {item.children}
//           </NavbarItem>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Features", href: "/features" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16  items-center justify-between px-4 md:pl-6 lg:pr-0">
        {/* LEFT: Brand + Nav links */}

        {/* Brand */}
        <Link
          href="/"
          className="text-xl     font-semibold tracking-tight md:text-2xl">
          <span className="text-foreground">hatwado</span>
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  "text-muted-foreground hover:text-foreground hover:bg-accent",
                  active && "text-foreground bg-accent",
                )}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: Actions */}
        <div className="hidden items-center  md:flex">
          <Button
            variant="ghost"
            asChild
            className="h-16 rounded-none border-r-0 ">
            <Link href="/login">Login</Link>
          </Button>

          <Button asChild className="h-16 rounded-none">
            <Link href="/sell">
              Start Selling <ArrowRight></ArrowRight>
            </Link>
          </Button>
        </div>

        {/* MOBILE: Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size={"icon"} asChild className=" w-fit px-2">
            <Link href="/login">Login</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] sm:w-[380px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Link href="/" className="text-xl font-semibold">
                    <span>hatwado</span>
                    <span className="text-primary">.</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-2">
                {NAV_ITEMS.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        "text-muted-foreground hover:text-foreground hover:bg-accent",
                        active && "text-foreground bg-accent",
                      )}>
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <Separator></Separator>

              <div className="mt-2 flex flex-col gap-2 px-4">
                <Button
                  variant="outline"
                  size={"xs"}
                  asChild
                  className="justify-center">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild size={"xs"} className="justify-center">
                  <Link href="/sell">Start Selling</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
