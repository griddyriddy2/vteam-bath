import Link from "next/link";

import {

  Leaf,

  Recycle,

  Heart,

  Users,

  HandHeart,

  Lightbulb,

  ArrowRight,


  Sparkles,

  CalendarHeart,

  Handshake,

} from "lucide-react";



const initiatives = [

  {

    name: "Nature",

    description:

      "Protect our environment and support biodiversity through hands-on volunteering.",

    icon: Leaf,

    color: "#4D874F",

    background: "#E4EEDB",

  },

  {

    name: "Sustainability",

    description:

      "Reduce waste and build a greener community through practical initiatives.",

    icon: Recycle,

    color: "#4E8478",

    background: "#E0EEE8",

  },

  {

    name: "Wellbeing",

    description:

      "Bring people together through activities that support wellbeing.",

    icon: Heart,

    color: "#DE6587",

    background: "#FCE4EC",

  },

  {

    name: "Education",

    description:

      "Inspire and empower others through tutoring, coding and school projects.",

    icon: Users,

    color: "#DA9B37",

    background: "#FFF0D7",

  },

];



const benefits = [

  {

    title: "Meet New People",

    description: "Connect with students who share your interests.",

    icon: Users,

  },

  {

    title: "Develop Skills",

    description: "Build confidence, teamwork and leadership experience.",

    icon: Lightbulb,

  },

  {

    title: "Make a Difference",

    description: "Support meaningful causes in the local community.",

    icon: HandHeart,

  },

  {

    title: "Flexible Opportunities",

    description: "Take part in one-off activities or longer-term projects.",

    icon: CalendarHeart,

  },

];



export default function Home() {

  return (

    <main className="min-h-screen bg-[#FFFDFB] text-[#252525]">



      {/* Hero */}

      <section className="reveal-block relative overflow-hidden bg-[#FCE9DC]">

        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#F6D2C6]/60 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-[#F9CFC6]/50 blur-3xl" />



        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-24 text-center md:py-32">

          <div className="flex items-center gap-2 rounded-full border border-[#F0C7B9] bg-white/70 px-5 py-2 text-sm font-semibold text-[#BC4949]">

            <Sparkles size={16} />

            THE SU BATH · UNIVERSITY OF BATH

          </div>



          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl lg:text-8xl">

            Your Community.

            <span className="block text-[#E45656]">Your Impact.</span>

          </h1>



          <p className="max-w-2xl text-lg leading-relaxed text-[#594F4B] md:text-xl">

            V Team is the University of Bath's student volunteering

            community, built around student-led projects that make a difference

            in Bath and beyond.

          </p>



          <div className="flex flex-wrap justify-center gap-4">

            <Link

              href="/projects"

              className="flex items-center gap-2 rounded-full bg-[#E45656] px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#CA4242]"

            >

              Explore Projects <ArrowRight size={18} />

            </Link>

            <Link

              href="/project-leader"

              className="rounded-full border border-[#E45656] bg-white px-8 py-4 font-semibold text-[#E45656] transition hover:bg-[#FFF5F0]"

            >

              Become a Project Leader

            </Link>

          </div>

        </div>

      </section>



      {/* What is V Team */}

      <section className="reveal-block mx-auto max-w-7xl px-6 py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#E45656]">

            Discover V Team

          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">

            Student-led projects.

            <span className="block text-[#E45656]">Real opportunities.</span>

          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#66615E]">

            V Team offers a wide range of volunteering opportunities. Whether

            you're joining a one-off activity or taking on a leadership

            role, there's a way for you to get involved.

          </p>

        </div>



        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-[#F2E1D9] bg-[#FFF8F3] p-9">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FCE3DB] text-[#E45656]">

              <HandHeart size={28} />

            </div>

            <h3 className="text-2xl font-bold">Volunteer</h3>

            <p className="mt-3 leading-relaxed text-[#68605D]">

              Take part in one-off volunteering opportunities and support

              community projects that matter to you.

            </p>

          </div>



          <div className="rounded-3xl border border-[#F2E1D9] bg-[#FFF8F3] p-9">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FCE3DB] text-[#E45656]">

              <Users size={28} />

            </div>

            <h3 className="text-2xl font-bold">Lead a Project</h3>

            <p className="mt-3 leading-relaxed text-[#68605D]">

              Take ownership, coordinate activities and help manage and

              promote community initiatives.

            </p>

          </div>

        </div>

      </section>



      {/* Four Initiatives */}

      <section className="reveal-block bg-[#FCE9DC]/60 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#E45656]">

              Our Initiatives

            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">

              Find Your Way to Make a Difference.

            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[#68605D]">

              Explore projects across four key areas and discover opportunities

              that match your interests.

            </p>

          </div>



          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {initiatives.map((item) => {

              const Icon = item.icon;



              return (

                <Link

                  key={item.name}

                  href={`/projects?category=${item.name.toLowerCase()}`}

                  className="group rounded-3xl border border-[#F3DDD3] bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"

                >

                  <div

                    className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full"

                    style={{ backgroundColor: item.background }}

                  >

                    <Icon size={43} strokeWidth={1.8} style={{ color: item.color }} />

                  </div>

                  <h3 className="text-xl font-bold">{item.name}</h3>

                  <p className="mt-4 min-h-24 text-sm leading-relaxed text-[#68605D]">

                    {item.description}

                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#E45656]">

                    View Projects

                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />

                  </span>

                </Link>

              );

            })}

          </div>

        </div>

      </section>



      {/* Leadership call to action */}

      <section className="reveal-block mx-auto max-w-7xl px-6 py-24">

        <div className="rounded-[2rem] bg-[#FCE9DC] px-8 py-16 text-center md:px-20">

          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#E45656]">

            Lead the Change

          </p>

          <h2 className="text-4xl font-bold md:text-5xl">

            Have an idea or a passion?

          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#655955]">

            Becoming a V Team Project Leader is an opportunity to organise

            meaningful activities, develop leadership skills and make a

            lasting difference.

          </p>

          <Link

            href="/project-leader"

            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E45656] px-8 py-4 font-semibold text-white transition hover:bg-[#CA4242]"

          >

            Become a Project Leader <ArrowRight size={18} />

          </Link>

        </div>

      </section>



      {/* Why Volunteer */}

      <section className="reveal-block bg-[#FFF7F2] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#E45656]">

              Why V Team?

            </p>

            <h2 className="text-4xl font-bold md:text-5xl">

              More than just volunteering.

            </h2>

          </div>



          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => {

              const Icon = benefit.icon;



              return (

                <div key={benefit.title} className="text-center">

                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#FCE4DA] text-[#E45656]">

                    <Icon size={28} />

                  </div>

                  <h3 className="text-lg font-bold">{benefit.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#68605D]">

                    {benefit.description}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>



      <section className="reveal-block bg-[#FFF7F2] px-6 py-24" aria-labelledby="recognition-heading">
        <div className="mx-auto max-w-7xl">
          <div className="reveal-block mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#C64B4B]">Our impact & recognition</p>
            <h2 id="recognition-heading" className="text-4xl font-bold tracking-tight md:text-5xl">Small actions. <span className="text-[#E45656]">Award-winning impact.</span></h2>
            <p className="mt-5 text-lg text-[#655955]">Celebrating the students and projects making a difference in Bath and beyond.</p>
          </div>
          <a href="https://www.thesubath.com/news/article/thesu/Su-Awards-2023/" target="_blank" rel="noopener noreferrer" className="reveal-block group mb-5 block rounded-[2rem] border border-[#E9CDBF] bg-[#FCE9DC] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-12">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-[#AE3F3F]"><span aria-hidden="true">🏆</span> 2023 · AWARD WINNER</div>
            <h3 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">Outstanding Contribution to the Local Community</h3>
            <p className="mt-5 max-w-2xl text-[#62534F]">V Code Bootcamp won at the 2023 SU Awards. V Clean, V Collect and V Nature were also shortlisted for this category.</p>
            <span className="mt-6 inline-flex items-center gap-2 font-bold text-[#A83D3D]">View the awards <ArrowRight size={17}/></span>
          </a>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {year:'2022',name:'BBC Radio Bristol Make a Difference',detail:'Environmental Award finalist',url:'https://www.thesubath.com/news/article/thesu/Victory-for-V-Team/'},
              {year:'2023',name:'Change Makers Award',detail:'V Code Project shortlisted',url:'https://www.thesubath.com/news/article/thesu/Su-Awards-2023/'},
              {year:'2025',name:'Change Makers Award',detail:'V Team shortlisted',url:'https://www.thesubath.com/suawards/2025/'},
              {year:'2026',name:'Outstanding Local Community',detail:'V Repair Repair Cafes & V Code STEM Day shortlisted',url:'https://www.thesubath.com/suawards/'},
              {year:'2026',name:'Commitment to Sustainability',detail:'V Repair shortlisted',url:'https://www.thesubath.com/suawards/'},
            ].map((award)=> (
              <a key={award.year+award.name} href={award.url} target="_blank" rel="noopener noreferrer" className="reveal-block rounded-3xl border border-[#EEDDD5] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm font-extrabold text-[#CB5050]">{award.year} · RECOGNITION</p>
                <h3 className="mt-3 text-xl font-bold">{award.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6D5D56]">{award.detail}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#AD4040]">Read more <ArrowRight size={15}/></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Charity Collaboration */}

      <section className="reveal-block mx-auto max-w-7xl px-6 py-24">

        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-[#F0DDD3] p-10 md:flex-row md:p-14">

          <div className="max-w-2xl">

            <Handshake size={35} className="mb-5 text-[#E45656]" />

            <h2 className="text-3xl font-bold">

              Working with a charity or community organisation?

            </h2>

            <p className="mt-4 leading-relaxed text-[#68605D]">

              We're interested in exploring new ways to connect students

              with meaningful volunteering opportunities.

            </p>

          </div>



          <Link

            href="/contact"

            className="shrink-0 rounded-full bg-[#E45656] px-7 py-4 font-semibold text-white hover:bg-[#CA4242]"

          >

            Partner With Us <ArrowRight className="ml-2 inline" size={18} />

          </Link>

        </div>

      </section>

    </main>

  );

}
