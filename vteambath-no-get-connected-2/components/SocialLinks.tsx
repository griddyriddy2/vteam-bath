import { Instagram } from "lucide-react";
import { LINKS } from "@/lib/links";

const SU_LOGO = "/su-logo.svg";
const entries = [
  { label: "Our Society Webpage", sub: "Join our society!", href: LINKS.society, type: "su" },
  { label: "Instagram", sub: "Keep up to date here!", href: LINKS.instagram, type: "instagram" },
  { label: "WhatsApp", sub: "Our community :)", href: LINKS.whatsapp, type: "whatsapp" },
] as const;

export function SocialIcon({ type, small = false }: { type: "su" | "instagram" | "whatsapp"; small?: boolean }) {
  const size = small ? 28 : 38;
  if (type === "su") {
    // SU mark based on the supplied artwork, hosted locally for reliability.
    return <img src={SU_LOGO} alt="" width={size} height={size} className="shrink-0 rounded-md object-cover" loading="lazy" />;
  }
  if (type === "instagram") return <span aria-hidden="true" className="inline-flex shrink-0 items-center justify-center" style={{width:size,height:size}}><Instagram size={small ? 25 : 31} strokeWidth={1.9} color="#C84465"/></span>;
  return <span aria-hidden="true" className="inline-flex shrink-0 items-center justify-center" style={{width:size,height:size}}><svg width={small?27:34} height={small?27:34} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.2 25.1 4.7 27l1.2-4.1a12 12 0 1 1 4.3 3.4" stroke="#148F59" strokeWidth="2.3" strokeLinejoin="round" strokeLinecap="round"/><path d="M11.2 10.9c-.5-.8-1.1-.8-1.6-.2-1.2 1.5-.4 4.1 1.9 6.8 2.4 2.9 5.8 4.1 7.2 3.5.8-.3 1.4-1 1.5-1.7.1-.5-.1-.7-.5-.9l-2.6-1.3c-.4-.2-.6-.1-.9.2l-1.2 1.5c-2.1-.7-3.9-2.5-4.6-4.3l1.3-1.2c.3-.3.4-.6.2-1L11.2 10.9Z" stroke="#148F59" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round"/></svg></span>;
}

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  if (compact) return <div className="flex items-center gap-2" aria-label="Society and social links">{entries.map(e => <a key={e.label} href={e.href} target="_blank" rel="noopener noreferrer" aria-label={e.label} title={e.label} className="rounded-lg p-1 transition-transform hover:-translate-y-1 focus-visible:outline-2"><SocialIcon type={e.type} small/></a>)}</div>;
  return <div className="flex flex-col gap-4">{entries.map(e => <a key={e.label} href={e.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-lg transition hover:translate-x-1"><SocialIcon type={e.type}/><span className="flex flex-col"><span className="text-sm font-semibold text-[#302925] group-hover:text-[#B43E3E]">{e.label} ↗</span><span className="text-xs text-[#6D5B54]">{e.sub.trim()}</span></span></a>)}</div>;
}
