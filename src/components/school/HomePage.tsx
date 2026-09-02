import { ArrowRight, BookOpen, HeartHandshake, ShieldCheck, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { academicStages, eventItems, newsItems, school } from "@/data/school";
import { AdmissionBand, Eyebrow, PhotoPlaceholder, SectionHeading } from "@/components/school/Blocks";
import { TestimonialsMarquee } from "@/components/school/Testimonials";

export function HomePage() {
  const reasons = [
    { icon: BookOpen, title: "Strong academic foundations", text: "A structured approach to learning that builds understanding, curiosity and confidence." },
    { icon: HeartHandshake, title: "Whole-child development", text: "Space for character, communication, creativity and participation alongside academics." },
    { icon: ShieldCheck, title: "A caring environment", text: "A disciplined and welcoming culture where children can feel known and supported." },
    { icon: Trophy, title: "Opportunity to participate", text: "Activities that encourage teamwork, expression and healthy challenge." }
  ];
  return (
    <>
      <section className="border-b border-border reveal-on-scroll">
        <div className="site-container grid gap-10 py-12 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:py-16">
          <div className="max-w-xl">
            <Eyebrow>DM Public School · Bengaluru</Eyebrow>
            <h1 className="heading-xl">{school.tagline}</h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground md:text-lg md:leading-8">A school community where academic foundations, good values and meaningful experiences help every child move forward with confidence.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto"><a href="/admissions">Admissions <ArrowRight className="ml-2 size-4"/></a></Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto"><a href="/about">Explore the School</a></Button>
            </div>
          </div>
          <PhotoPlaceholder label="School campus or students in learning" src="/campus.jpg"/>
        </div>
      </section>

      <section className="site-container grid gap-10 py-16 md:grid-cols-[.72fr_1.28fr] md:py-24 reveal-on-scroll">
        <SectionHeading eyebrow="Our school" title="Learning that shapes capable, considerate young people."/>
        <div>
          <p className="text-lg leading-8">DM Public School brings learning, values and student development together in a focused school environment.</p>
          <p className="mt-5 leading-7 text-muted-foreground">We focus on holistic education and character building for every student that walks through our doors.</p>
          <Button asChild className="mt-7 w-fit"><a href="/about">About DM Public School <ArrowRight className="ml-2 size-4"/></a></Button>
        </div>
      </section>

      <section className="border-y border-border bg-secondary reveal-on-scroll">
        <div className="site-container py-16 md:py-24">
          <SectionHeading eyebrow="Why DMPS" title="A balanced school experience." copy="Clear priorities for learning and growth, presented without inflated claims."/>
          <div className="mt-12 grid border-t border-border md:grid-cols-2">
            {reasons.map(({icon: Icon, title, text}, i) => (
              <article key={title} className={`border-b border-border py-8 md:px-8 ${i % 2 === 0 ? "md:border-r md:pl-0" : ""}`}>
                <Icon className="size-6 text-accent-foreground"/>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 max-w-md leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
          <Button asChild className="mt-8 w-fit"><a href="/about">Explore Our Story <ArrowRight className="ml-2 size-4"/></a></Button>
        </div>
      </section>

      <section className="site-container py-16 md:py-24 reveal-on-scroll">
        <div className="grid gap-8 md:grid-cols-[.65fr_1.35fr]">
          <SectionHeading eyebrow="Academics" title="A clear path through every stage."/>
          <div className="border-t border-border">
            {academicStages.map((stage, i) => (
              <div key={stage.title} className="grid gap-3 border-b border-border py-7 sm:grid-cols-[3rem_1fr_1.2fr]">
                <span className="font-display text-sm font-bold text-accent-foreground">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-bold">{stage.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{stage.range}</p>
                </div>
                <p className="leading-6 text-muted-foreground">{stage.text}</p>
              </div>
            ))}
            <Button asChild className="mt-6 w-fit"><a href="/academics">Explore Academics <ArrowRight className="ml-2 size-4"/></a></Button>
          </div>
        </div>
      </section>

      <div className="reveal-on-scroll">
        <TestimonialsMarquee />
      </div>

      <section className="border-y border-border reveal-on-scroll">
        <div className="site-container grid lg:grid-cols-2">
          <PhotoPlaceholder label="Student activities, sports and celebrations" src="/students_learning.jpg"/>
          <div className="flex flex-col justify-center py-12 lg:px-14">
            <SectionHeading eyebrow="Student life" title="Learning continues beyond the classroom." copy="Activities, sports, clubs and celebrations give students opportunities to participate, collaborate and discover their interests."/>
            <Button asChild className="mt-6 w-fit"><a href="/student-life">Discover Student Life <ArrowRight className="ml-2 size-4"/></a></Button>
          </div>
        </div>
      </section>

      <section className="site-container py-16 md:py-24 reveal-on-scroll">
        <SectionHeading eyebrow="Admissions" title="A straightforward path to joining DMPS."/>
        <ol className="mt-10 grid border-y border-border md:grid-cols-4">
          {["Make an enquiry", "Speak with the school", "Complete the confirmed process", "Receive admission guidance"].map((x, i) => (
            <li className="border-b border-border p-6 last:border-0 md:border-b-0 md:border-r md:last:border-r-0" key={x}>
              <span className="text-sm font-bold text-accent-foreground">0{i + 1}</span>
              <p className="mt-4 font-display font-bold">{x}</p>
            </li>
          ))}
        </ol>
        <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">Our admissions team is here to help you every step of the way.</p>
          <Button asChild className="w-fit"><a href="/admissions">View Admissions Details <ArrowRight className="ml-2 size-4"/></a></Button>
        </div>
      </section>

      <section className="bg-secondary reveal-on-scroll">
        <div className="site-container py-16 md:py-24">
          <SectionHeading eyebrow="Updates" title="News & events"/>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-2">
            <article className="bg-background p-7">
              <p className="text-xs font-bold uppercase text-accent-foreground">{newsItems[0].category} {newsItems[0].draft && '· Draft'}</p>
              <h3 className="mt-4 font-display text-2xl font-bold">{newsItems[0].title}</h3>
              <p className="mt-3 text-muted-foreground">{newsItems[0].summary}</p>
              <Button asChild className="mt-6 w-fit"><a href="/news">View news</a></Button>
            </article>
            <article className="bg-background p-7">
              <p className="text-xs font-bold uppercase text-accent-foreground">{eventItems[0].category} {eventItems[0].draft && '· Draft'}</p>
              <h3 className="mt-4 font-display text-2xl font-bold">{eventItems[0].title}</h3>
              <p className="mt-3 text-muted-foreground">{eventItems[0].summary}</p>
              <Button asChild className="mt-6 w-fit"><a href="/events">View events</a></Button>
            </article>
          </div>
        </div>
      </section>

      <section className="site-container py-16 md:py-24 reveal-on-scroll">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr]">
          <div>
            <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" copy="Find answers to common questions about admissions, academics, and school life."/>
            <Button asChild className="mt-8 w-fit"><a href="/contact">Contact us for more <ArrowRight className="ml-2 size-4"/></a></Button>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {[
              ["What is the admission procedure?", "Please visit the Admissions page and submit an enquiry. Our team will guide you through the next steps."],
              ["Does the school offer transportation?", "Yes, we provide safe and reliable transportation across various routes. Please contact the school office for route specifics."],
              ["What is the student-to-teacher ratio?", "We maintain an optimal ratio to ensure personalized attention for every student in the classroom."],
              ["Are extracurricular activities included?", "Yes, we believe in holistic development and offer a variety of sports, arts, and clubs."]
            ].map(([q, a]) => (
              <AccordionItem value={q} key={q} className="border-b border-border py-2">
                <AccordionTrigger className="text-left font-display text-xl hover:no-underline hover:text-accent-foreground transition-colors">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-8 text-base pb-6">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <AdmissionBand />
    </>
  );
}
