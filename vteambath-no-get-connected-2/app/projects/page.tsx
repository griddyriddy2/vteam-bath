import Link from "next/link";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteering Projects",
  description: "Explore 15 V Team Bath volunteering projects across nature, sustainability, wellbeing and education.",
  alternates: { canonical: "/projects" },
};
import { ArrowLeft, ExternalLink, ArrowRight, Leaf, Recycle, Heart, Users, Mail } from "lucide-react";

const categories = ["Nature", "Sustainability", "Wellbeing", "Education"] as const;
type Category = (typeof categories)[number];
type Project = {
  name: string;
  category: Category;
  summary: string;
  partners: { name: string; description: string; url?: string }[];
};

const projects: Project[] = [
  {
    name: "V Parks", category: "Nature",
    summary: "Help local green spaces and community initiatives thrive.",
    partners: [
      { name: "Belgrave Community Garden", description: "Support a volunteer-run garden growing organic food with rainwater harvesting, composting and solar power.", url: undefined },
      { name: "Bath Area Play Project", description: "Support a local children's charity through fundraising, campaigning and volunteer engagement.", url: "https://www.bapp.org.uk/careers-volunteers/" },
    ],
  },
  {
    name: "V Trees", category: "Nature",
    summary: "Grow greener spaces and support biodiversity in and around Bath.",
    partners: [{ name: "More Trees BANES", description: "Help grow, plant and care for trees in regular community volunteering sessions.", url: "https://moretrees.earth/get-involved/volunteer/" }],
  },
  {
    name: "V Wildlife", category: "Nature",
    summary: "Take practical steps to protect local wildlife.",
    partners: [{ name: "Hedgehog Friendly Campus", description: "Contribute to litter picks, hedgehog surveys, habitat improvements and awareness campaigns.", url: "https://www.hedgehogfriendlycampus.co.uk/" }],
  },
  {
    name: "V Repair", category: "Sustainability",
    summary: "Reduce waste and pick up practical repair skills.",
    partners: [{ name: "Share and Repair", description: "Get involved with repair cafés and workshops, including sewing, tool use and repairing everyday items.", url: "https://shareandrepair.org.uk/" }],
  },
  {
    name: "V Eco", category: "Sustainability",
    summary: "Explore everyday action on climate and sustainability.",
    partners: [{ name: "EcoTogether", description: "Discuss and act on topics such as energy, food, transport and resources in supportive groups.", url: "https://www.ecotogether.info/" }],
  },
  {
    name: "V Clean", category: "Sustainability",
    summary: "Care for shared spaces and help strengthen the local community.",
    partners: [
      { name: "Student Community Partnership", description: "Support volunteering, sustainability campaigns and positive relationships between students and Bath residents.", url: "https://scpbath.org.uk/" },
      { name: "Marine Conservation Society", description: "Participate in clean-ups, litter surveys and citizen science that contribute to marine conservation.", url: "https://www.mcsuk.org/what-you-can-do/volunteering/" },
    ],
  },
  {
    name: "V Collect", category: "Sustainability",
    summary: "Support community-focused activities and collections.",
    partners: [{ name: "Royal United Hospital", description: "Potential activities include companionship, practical support and creating activity packs or cards for patients.", url: "https://www.ruh.nhs.uk/get_involved/volunteering/index.asp" }],
  },
  {
    name: "V Run", category: "Wellbeing",
    summary: "Help make charity runs and community events happen.",
    partners: [{ name: "Charity running events", description: "Volunteer at events such as the Bath Half Marathon, Santa Dash and colour runs, subject to event availability." }],
  },
  {
    name: "V Kind", category: "Wellbeing",
    summary: "Create welcoming experiences that brighten students' days.",
    partners: [{ name: "University activities", description: "Help organise wellbeing initiatives such as pottery painting, slime making and positivity chalkboards." }],
  },
  {
    name: "V Pizza", category: "Wellbeing",
    summary: "Bring people together through relaxed social activities.",
    partners: [{ name: "University activities", description: "Support men's wellbeing through hands-on activities, pizza and conversation." }],
  },
  {
    name: "V Aware", category: "Wellbeing",
    summary: "Champion causes through awareness and fundraising.",
    partners: [{ name: "FearFree", description: "Previously featured in a V Aware campaign raising awareness of domestic abuse and support services.", url: "https://www.fearfree.org.uk/support-us/" }],
  },
  {
    name: "V Code", category: "Education",
    summary: "Help introduce young people to technology and coding.",
    partners: [{ name: "MightyGirls", description: "Help encourage girls to explore tech and STEM through coding activities, building on a successful 2024 collaboration.", url: "https://www.thesubath.com/news/article/volunteering/V-Code-teams-with-Mighty-Girls-to-run-successful-event-with-local-secondary-school-students/" }],
  },
  {
    name: "V Tutor", category: "Education",
    summary: "Help young people unlock their academic potential.",
    partners: [{ name: "Tutor the Nation", description: "Support a young person's learning through approximately one hour of tutoring per week.", url: "https://tutorthenation.org/" }],
  },
  {
    name: "V Schools", category: "Education",
    summary: "Get involved with activities at local primary schools.",
    partners: [{ name: "Local primary schools", description: "Activities may include reading sessions, Easter egg hunts and improvements to children's play areas.", url: "https://rsvp-west.org.uk/volunteering-in-schools/" }],
  },
  {
    name: "V Graduate", category: "Education",
    summary: "Volunteering opportunities that can fit postgraduate schedules.",
    partners: [{ name: "University", description: "Explore flexible activities intended for postgraduate and doctoral students alongside research commitments." }],
  },
];

const theme: Record<Category, { tint: string; ink: string; icon: typeof Leaf }> = {
  Nature: { tint: "#E4EEDB", ink: "#4D874F", icon: Leaf },
  Sustainability: { tint: "#E0EEE8", ink: "#4E8478", icon: Recycle },
  Wellbeing: { tint: "#FCE4EC", ink: "#DE6587", icon: Heart },
  Education: { tint: "#FFF0D7", ink: "#DA9B37", icon: Users },
};

async function ProjectsContent({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const requested = (params.category ?? "").toLowerCase();
  const active = categories.find((value) => value.toLowerCase() === requested);
  const displayed = active ? projects.filter((project) => project.category === active) : projects;

  return (
    <main className="min-h-screen bg-[#FFFDFB] text-[#252525]">
      

      <section className="reveal-block bg-[#FCE9DC] px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#B94141]">Our projects</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Find Your Next <span className="text-[#C84949]">Opportunity.</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#504541]">Explore student-led projects across Nature, Sustainability, Wellbeing and Education. Find a cause that speaks to you.</p>
          <div className="mt-8 flex flex-col items-center gap-3"><Link href="/interest" className="inline-flex items-center gap-2 rounded-full bg-[#B94141] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#9D3030]">Register Volunteering Interest <ArrowRight size={18} /></Link><a href="https://www.thesubath.com/volunteer/browse/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#B94141] bg-white/70 px-7 py-3 font-semibold text-[#A43737] transition hover:-translate-y-0.5 hover:bg-white">Explore Opportunities <ExternalLink size={17}/></a></div>
          <div><Link href="/" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#9F3434] hover:underline"><ArrowLeft size={17} /> Back to homepage</Link></div>
        </div>
      </section>

      <section className="reveal-block mx-auto max-w-7xl px-6 py-14">
        <h2 className="mb-5 text-xl font-bold">Browse by initiative</h2>
        <div className="mb-8 flex flex-wrap gap-3" aria-label="Filter projects by initiative">
          <Link href="/projects" aria-current={!active ? "page" : undefined} className={`rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B94141] ${!active ? "bg-[#BC4141] text-white" : "border border-[#ECD3C8] bg-white hover:bg-[#FCE9DC]"}`}>All projects ({projects.length})</Link>
          {categories.map((category) => {
            const Icon = theme[category].icon;
            return (
              <Link key={category} href={`/projects?category=${category.toLowerCase()}`} aria-current={active === category ? "page" : undefined} className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B94141] ${active === category ? "bg-[#BC4141] text-white" : "border border-[#ECD3C8] bg-white hover:bg-[#FCE9DC]"}`}>
                <Icon size={17} /> {category}
              </Link>
            );
          })}
        </div>
        <p className="mb-6 text-sm text-[#6F625D]" aria-live="polite">Showing {displayed.length} {displayed.length === 1 ? "project" : "projects"}{active ? ` in ${active}` : ""}</p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {displayed.map((project) => {
            const Icon = theme[project.category].icon;
            return (
              <article key={project.name} className="flex flex-col rounded-3xl border border-[#EEDDD5] bg-white p-7 shadow-sm">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold" style={{ backgroundColor: theme[project.category].tint, color: theme[project.category].ink }}><Icon size={17} />{project.category}</span>
                  <span className="text-xs font-semibold text-[#87726C]">{project.name}</span>
                </div>
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <p className="mt-2 leading-relaxed text-[#615651]">{project.summary}</p>
                <div className="mt-6 flex-1 space-y-4 border-t border-[#F1E4DF] pt-5">
                  {project.partners.map((partner) => (
                    <div key={partner.name}>
                      {project.name === "V Code" || project.name === "V Aware" ? <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#A74848]">{project.name === "V Code" ? "Who we have worked with" : "Featured in a previous campaign"}</p> : null}
                      <h4 className="font-semibold">{partner.name}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#6B605B]">{partner.description}</p>
                      {partner.url && <a href={partner.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#AD3F3F] hover:underline">Learn more <ExternalLink size={14} /></a>}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-sm text-[#756A64]">Organisations shown are examples drawn from V Team project information, not necessarily confirmed current partners. Project activities and opportunities are subject to availability. Please contact V Team to check what is currently running.</p>
      </section>

      <section className="reveal-block bg-[#FCE9DC] px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div><h2 className="text-3xl font-bold">Have a question about volunteering?</h2><p className="mt-3 max-w-xl text-[#5D504C]">Get in touch to find out more about our projects or discuss opportunities for your organisation.</p></div>
          <a href="mailto:vteam@bath.ac.uk?subject=V%20Team%20Project%20Enquiry" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#BC4141] px-6 py-4 font-semibold text-white hover:bg-[#A73737]"><Mail size={18}/> Email V Team</a>
        </div>
      </section>
    </main>
  );
}


export default function ProjectsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  return (
    <Suspense fallback={<main className="mx-auto max-w-7xl px-6 py-24" role="status">Loading V Team projects...</main>}>
      <ProjectsContent searchParams={searchParams} />
    </Suspense>
  );
}
