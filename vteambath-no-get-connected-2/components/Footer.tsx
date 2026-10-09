import Link from "next/link";
import { Mail } from "lucide-react";
import { LINKS } from "@/lib/links";
import { SocialLinks } from "./SocialLinks";
export default function Footer() {
 return <footer className="bg-[#FCE9DC] px-6 py-14 text-[#3A302C]"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
   <div><p className="text-2xl font-black tracking-tight text-[#D64E4E]">V TEAM</p><p className="mt-2 max-w-xs text-sm leading-relaxed text-[#685B55]">The student volunteering group of The SU Bath, University of Bath.</p><a href={`mailto:${LINKS.email}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:underline"><Mail size={17}/>{LINKS.email}</a></div>
   <div><h2 className="text-sm font-bold uppercase tracking-widest text-[#9F3F3F]">Explore</h2><div className="mt-4 flex flex-col items-start gap-3 text-sm font-medium"><Link href="/about" className="hover:underline">About Us</Link><Link href="/projects" className="hover:underline">Our Projects</Link><Link href="/project-leader" className="hover:underline">Apply for Project Leader</Link><Link href="/contact" className="hover:underline">Contact</Link></div></div>
   <div><h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#9F3F3F]">Stay Connected</h2><SocialLinks/></div>
 </div><p className="mx-auto mt-10 max-w-7xl border-t border-[#E8CABD] pt-6 text-xs text-[#75635D]">© 2026 V Team Bath. Activities subject to availability.</p></footer>;
}
