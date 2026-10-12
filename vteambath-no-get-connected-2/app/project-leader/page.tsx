import Link from "next/link";

import { ArrowRight, Users, Megaphone, CalendarCheck, HeartHandshake, Mail } from "lucide-react";

export const metadata = { title: "Become a Project Leader", description: "Find out how to lead a student volunteering project with V Team.", alternates: { canonical: "/project-leader" } };
import { LINKS } from "@/lib/links";
const formUrl = LINKS.leaderForm;
const benefits = [
  {title:"Lead with confidence",text:"Develop leadership and organisational experience.",icon:Users},
  {title:"Bring people together",text:"Connect volunteers with activities and causes.",icon:HeartHandshake},
  {title:"Promote your project",text:"Help students discover ways to get involved.",icon:Megaphone},
  {title:"Make things happen",text:"Support the planning and delivery of activities.",icon:CalendarCheck},
];
export default function LeaderPage(){return <main className="min-h-screen bg-[#FFFDFB] text-[#252525]">

<section className="reveal-block bg-[#FCE9DC] px-6 py-24 text-center"><p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-[#B63F3F]">Project leadership</p><h1 className="text-5xl font-extrabold md:text-6xl">26/27 Applications now <span className="text-[#C84949]">open!</span></h1><p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[#594C47]">No previous experience required. Open to students in every year of study. Help coordinate activities, bring volunteers together and support meaningful initiatives in Bath and beyond.</p></section>
<section className="reveal-block mx-auto max-w-6xl px-6 py-20"><div className="mb-10 flex flex-wrap justify-center gap-3"><span className="rounded-full bg-[#E4EEDB] px-5 py-2 text-sm font-bold text-[#34623D]">No prior experience needed</span><span className="rounded-full bg-[#FFF0D7] px-5 py-2 text-sm font-bold text-[#82591F]">All years welcome</span></div><h2 className="text-center text-3xl font-bold md:text-4xl">What could you gain?</h2><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(x=>{const Icon=x.icon;return <div key={x.title} className="rounded-3xl border border-[#ECDCD5] bg-[#FFF8F4] p-7"><Icon className="text-[#C84949]" size={31}/><h3 className="mt-5 text-xl font-bold">{x.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#655A55]">{x.text}</p></div>})}</div></section>
<section className="reveal-block px-6 pb-24"><div className="mx-auto max-w-5xl rounded-[2rem] bg-[#FCE9DC] px-8 py-16 text-center"><h2 className="text-3xl font-bold md:text-4xl">Interested in becoming a Project Leader?</h2><p className="mx-auto mt-5 max-w-xl text-[#655A55]">Tell us what interests you and which kinds of projects you would like to support.</p>{formUrl?.startsWith("https://") ? <a href={formUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#B94141] px-7 py-4 font-semibold text-white hover:bg-[#9D3030]">Complete Interest Form <ArrowRight size={18}/></a> : <div className="mt-8"><span className="inline-flex rounded-full bg-white px-6 py-3 font-semibold text-[#8A5C54]">Interest form coming soon</span><p className="mt-4 text-sm text-[#655A55]">In the meantime, email <a className="font-semibold underline" href="mailto:vteam@bath.ac.uk?subject=Project%20Leader%20Interest">vteam@bath.ac.uk</a>.</p></div>}</div></section>
</main>}
