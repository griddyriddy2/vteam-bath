"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

const pages = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "Apply for Project Leader", href: "/project-leader" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-[#F2DED5] bg-[#FFFDFB]/95 backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <Link href="/" aria-label="V Team Bath homepage" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-3">
          <Image src="/vteam-logo.png" alt="V Team logo" width={58} height={49} priority className="h-12 w-auto object-contain" />
        </Link>
        <div className="hidden items-center gap-4 lg:flex">
          {pages.map(page => <Link key={page.href} href={page.href} aria-current={isActive(page.href) ? "page" : undefined} className={`text-sm font-semibold transition hover:text-[#C84949] ${isActive(page.href) ? "text-[#C84949]" : "text-[#34302E]"}`}>{page.label}</Link>)}
        </div>
        <div className="hidden xl:block"><SocialLinks compact /></div>
        <Link href="/interest" className="hidden items-center gap-2 rounded-full bg-[#E45656] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#C64343] lg:inline-flex">Get Involved <ArrowRight size={16} /></Link>
        <button type="button" className="rounded-xl border border-[#F0DDD4] p-3 text-[#B94141] lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="vteam-mobile-nav" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={23}/> : <Menu size={23}/>}</button>
      </nav>
      {open && <div id="vteam-mobile-nav" className="border-t border-[#F2DED5] bg-[#FFFDFB] px-5 py-4 shadow-sm lg:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-1">
        {pages.map(page => <Link key={page.href} href={page.href} onClick={() => setOpen(false)} aria-current={isActive(page.href) ? "page" : undefined} className={`rounded-xl px-4 py-3 text-sm font-semibold hover:bg-[#FCE9DC] ${isActive(page.href) ? "bg-[#FFF0E9] text-[#B94141]" : "text-[#252525]"}`}>{page.label}</Link>)}
        <div className="px-3 py-3"><SocialLinks compact /></div>
        <Link href="/interest" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center gap-2 rounded-full bg-[#E45656] px-6 py-3 font-bold text-white">Get Involved <ArrowRight size={17}/></Link>
      </div></div>}
    </header>
  );
}
