"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const projects = ["Not sure yet", "V Parks", "V Trees", "V Wildlife", "V Repair", "V Eco", "V Clean", "V Collect", "V Run", "V Kind", "V Pizza", "V Aware", "V Code", "V Tutor", "V Schools", "V Graduate"];

export default function InterestPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("Not sure yet");
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(false);
  function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    const subject = `V Team volunteering interest: ${project}`;
    const body = `Name: ${name}\nUniversity email: ${email}\nInterested in: ${project}\nOther information: ${notes || "None"}`;
    window.location.href = `mailto:vteam@bath.ac.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  const field = "mt-2 w-full rounded-xl border border-[#E6CFC4] bg-white px-4 py-3 text-[#302A27] focus:outline-none focus:ring-2 focus:ring-[#E45656]";
  return <main className="min-h-screen bg-[#FFFDFB]">
    <section className="bg-[#FCE9DC] px-6 py-16 text-center"><p className="text-sm font-bold uppercase tracking-widest text-[#B94141]">Volunteering with V Team</p><h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Register Your <span className="text-[#C84949]">Interest.</span></h1><p className="mx-auto mt-5 max-w-2xl text-[#594C47]">Tell us which projects interest you. We'll help you find the right next step.</p></section>
    <section className="mx-auto max-w-2xl px-6 py-14"><form onSubmit={send} className="space-y-6 rounded-3xl border border-[#F0DDD3] bg-white p-6 shadow-sm sm:p-10">
      <div><label htmlFor="full-name" className="font-semibold">Full name</label><input id="full-name" name="name" className={field} required maxLength={120} value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name" autoComplete="name" /></div>
      <div><label htmlFor="email" className="font-semibold">University email</label><input id="email" name="email" type="email" className={field} required maxLength={200} value={email} onChange={e=>setEmail(e.target.value)} placeholder="username@bath.ac.uk" autoComplete="email" /></div>
      <div><label htmlFor="project" className="font-semibold">Which project interests you?</label><select id="project" name="project" className={field} value={project} onChange={e=>setProject(e.target.value)}>{projects.map(x=><option key={x} value={x}>{x}</option>)}</select></div>
      <div><label htmlFor="notes" className="font-semibold">Anything else? <span className="font-normal text-[#796B65]">(optional)</span></label><textarea id="notes" name="notes" rows={3} maxLength={1000} className={field} value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Your interests, availability or questions" /></div>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-[#615651]"><input type="checkbox" className="mt-1 accent-[#C84949]" checked={consent} onChange={e=>setConsent(e.target.checked)} required/><span>I'm happy for the V Team committee to use these details to contact me about volunteering. Please don't include sensitive personal information.</span></label>
      <button disabled={!consent} type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E45656] px-7 py-4 font-bold text-white hover:bg-[#C64343] disabled:cursor-not-allowed disabled:opacity-50"><Mail size={18}/> Prepare Email to V Team <ArrowRight size={18}/></button>
      <p className="text-sm leading-relaxed text-[#655A55]"><strong>How this works:</strong> This form prepares an email in your email app. You must press Send in that app to register your interest; nothing is automatically submitted or stored by this website. If your email app doesn't open, email <a className="font-semibold underline" href="mailto:vteam@bath.ac.uk">vteam@bath.ac.uk</a> instead.</p>
    </form><p className="mt-6 text-center text-sm text-[#655A55]">Interested in leading a project instead? <Link href="/project-leader" className="font-semibold text-[#B94141] underline">Apply for Project Leader</Link>.</p></section>
  </main>;
}
