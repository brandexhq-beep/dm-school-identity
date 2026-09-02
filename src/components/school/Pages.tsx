import { ArrowRight, Check, FileText, Mail, MapPin, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { academicStages, school } from "@/data/school";
import { AdmissionBand, Breadcrumbs, PageHero, PhotoPlaceholder, SectionHeading } from "./Blocks";
import { EnquiryForm } from "./EnquiryForm";

export function AboutPage() {
  return (
    <>
      <Breadcrumbs current="About" />
      <PageHero eyebrow="About DMPS" title="A school shaped by learning and values." intro="An introduction to DM Public School, its purpose and the community it seeks to build." />
      
      <section className="site-container grid gap-12 py-16 md:grid-cols-2 md:py-24 reveal-on-scroll">
        <div>
          <SectionHeading eyebrow="Our story" title="About the school" />
          <p className="mt-6 leading-8 text-muted-foreground">DM Public School serves families in {school.locality}, {school.city}. We have a proud history of academic excellence and holistic development. Since our founding, we have been committed to providing a nurturing environment where students can thrive academically, socially, and emotionally.</p>
        </div>
        <PhotoPlaceholder label="School campus and community" src="/campus.jpg" />
      </section>

      <section className="border-y border-border bg-secondary reveal-on-scroll">
        <div className="site-container grid gap-px bg-border md:grid-cols-2">
          <article className="bg-secondary py-14 md:pr-12">
            <p className="text-xs font-bold uppercase text-accent-foreground">Vision</p>
            <h2 className="mt-4 font-display text-3xl font-bold">Help every learner grow with knowledge, character and confidence.</h2>
            <p className="mt-4 text-sm text-muted-foreground">Our vision is to be a leading educational institution that empowers students to achieve their full potential and become responsible global citizens.</p>
          </article>
          <article className="bg-secondary py-14 md:pl-12">
            <p className="text-xs font-bold uppercase text-accent-foreground">Mission</p>
            <h2 className="mt-4 font-display text-3xl font-bold">Create a purposeful, caring environment for rigorous learning and responsible participation.</h2>
            <p className="mt-4 text-sm text-muted-foreground">We are dedicated to fostering a love of learning, promoting critical thinking, and instilling a strong sense of community and social responsibility.</p>
          </article>
        </div>
      </section>

      <section className="site-container py-16 md:py-24 reveal-on-scroll">
        <SectionHeading eyebrow="Leadership & people" title="A community led with care." />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <PhotoPlaceholder label="Principal or school leader" src="/principal.jpg" aspect="portrait" />
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold">Mrs. Elizabeth Reed</h3>
            <p className="mt-2 text-muted-foreground">Principal</p>
            <p className="mt-6 leading-8 text-muted-foreground">Welcome to DM Public School. It is my privilege to lead this vibrant community of learners. Our dedicated team of educators is passionate about creating a supportive and challenging environment where every student is encouraged to discover their unique talents and pursue their passions. We believe that education is a collaborative effort between the school, parents, and the community.</p>
            <div className="mt-10 border-t border-border pt-8">
              <h3 className="font-display text-2xl font-bold">Educational philosophy</h3>
              <p className="mt-4 leading-8 text-muted-foreground">Learning is strongest when knowledge, practice, reflection and participation work together. We embrace a student-centered approach that values inquiry, creativity, and resilience. Our goal is to prepare students not just for academic success, but for a meaningful and fulfilling life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary reveal-on-scroll">
        <div className="site-container py-16 md:py-24">
          <SectionHeading eyebrow="School values" title="Principles for learning and life." />
          <div className="mt-10 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Respect", "Valuing others, self, and our environment in everything we do."],
              ["Responsibility", "Taking ownership of our actions and contributing positively to society."],
              ["Curiosity", "Fostering a lifelong love of learning and exploration."],
              ["Community", "Building strong, supportive relationships and working together."]
            ].map(([x, desc]) => (
              <div className="border-b border-border py-7 sm:px-6 sm:first:pl-0 lg:border-r lg:last:border-r-0" key={x}>
                <h3 className="font-display text-xl font-bold">{x}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AdmissionBand />
    </>
  );
}

export function AcademicsPage() {
  return (
    <>
      <Breadcrumbs current="Academics" />
      <PageHero eyebrow="Academics" title="Strong foundations. Thoughtful progression." intro="An academic journey designed to develop knowledge, independent thinking and readiness for what comes next." />
      <section className="site-container py-16 md:py-24 reveal-on-scroll">
        <SectionHeading title="The academic approach" copy="Our curriculum is carefully designed to provide a comprehensive and balanced education, challenging students at every stage." />
        <div className="mt-12 space-y-0 border-t border-border">
          {academicStages.map((s, i) => (
            <article key={s.title} className="grid gap-5 border-b border-border py-9 md:grid-cols-[4rem_.7fr_1.3fr]">
              <span className="font-display text-sm font-bold text-accent-foreground">0{i + 1}</span>
              <div>
                <h2 className="font-display text-2xl font-bold">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.range}</p>
              </div>
              <div>
                <p className="leading-7 text-muted-foreground">{s.text}</p>
                <p className="mt-4 text-sm font-semibold">Subjects and activities: <span className="font-normal text-muted-foreground">English, Mathematics, Science, Social Studies, Languages, Arts, Physical Education.</span></p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-secondary reveal-on-scroll">
        <div className="site-container grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <PhotoPlaceholder label="Classroom learning" src="/students_learning.jpg" />
          <div>
            <SectionHeading eyebrow="Learning in practice" title="Understanding before memorisation." copy="We emphasize active learning, where students engage with concepts through projects, discussions, and hands-on activities, ensuring deep comprehension and retention." />
          </div>
        </div>
      </section>
      <AdmissionBand />
    </>
  );
}

export function AdmissionsPage() {
  const steps = ["Submit an enquiry", "Discuss the appropriate class and availability", "Complete the school’s interaction or assessment", "Provide documents and receive confirmation"];
  return (
    <>
      <Breadcrumbs current="Admissions" />
      <PageHero eyebrow="Admissions" title="Start your child’s journey with DMPS." intro="Clear guidance for families considering admission. We are currently accepting applications for the 2026-27 academic year." />
      <section className="site-container grid gap-12 py-16 lg:grid-cols-[.8fr_1.2fr] lg:py-24 reveal-on-scroll">
        <div>
          <SectionHeading eyebrow="Process" title="How admission works" />
          <ol className="mt-8 border-t border-border">
            {steps.map((x, i) => (
              <li key={x} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-border py-5">
                <span className="font-bold text-accent-foreground">0{i + 1}</span>
                <span>{x}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 bg-secondary p-6">
            <h3 className="font-display text-lg font-bold">Before you apply</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">Eligible classes: <span className="text-foreground">Grades 1 to 12</span><br />Important dates: <span className="text-foreground">Admissions close April 30th</span><br />Fee information: <span className="text-foreground">Provided upon enquiry</span></p>
          </div>
        </div>
        <div className="border border-border bg-card p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold">Admission enquiry</h2>
          <p className="mb-7 mt-2 text-sm text-muted-foreground">Complete the form below to initiate the admissions process. Our team will get back to you shortly.</p>
          <EnquiryForm />
        </div>
      </section>
      <section className="bg-secondary reveal-on-scroll">
        <div className="site-container grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <SectionHeading eyebrow="Documents" title="What you may need" />
            <ul className="mt-7 space-y-3 text-muted-foreground">
              {["Birth certificate", "Previous school records", "Recent photographs", "Address or identity documents"].map(x => (
                <li key={x} className="flex gap-3">
                  <FileText className="size-5 shrink-0 text-accent-foreground" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Questions" title="Admissions FAQ" />
            <Accordion type="single" collapsible className="mt-5">
              {[
                ["Which classes are accepting applications?", "We are currently accepting applications for Grades 1 through 10. Grade 11 and 12 availability depends on the selected streams."],
                ["Is there an assessment?", "Yes, a brief interaction and age-appropriate assessment helps us understand your child's readiness."],
                ["Where can I find fee details?", "Detailed fee structures are shared by our admissions office after the initial enquiry is processed."]
              ].map(([q, a]) => (
                <AccordionItem value={q} key={q}>
                  <AccordionTrigger>{q}</AccordionTrigger>
                  <AccordionContent>{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}

export function CampusPage() {
  const items = [
    { name: "Library", src: "/library.jpg" },
    { name: "Classrooms", src: "/students_learning.jpg" },
    { name: "Sports areas", src: "/sports.jpg" },
    { name: "Main Building", src: "/campus.jpg" }
  ];
  return (
    <>
      <Breadcrumbs current="Campus" />
      <PageHero eyebrow="Campus" title="Spaces that support school life." intro="A visual guide to the DMPS campus. Our facilities are designed to provide a safe, stimulating, and modern environment." />
      <section className="site-container py-16 md:py-24 reveal-on-scroll">
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((x, i) => (
            <article key={x.name} className={i === 0 ? "md:col-span-2" : ""}>
              <PhotoPlaceholder label={x.name} src={x.src} />
              <div className="border-x border-b border-border p-5">
                <h2 className="font-display text-xl font-bold">{x.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">Modern and well-equipped for student success.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <AdmissionBand />
    </>
  );
}

export function StudentLifePage() {
  const items = [
    { name: "Sports", src: "/sports.jpg" },
    { name: "Learning", src: "/students_learning.jpg" },
    { name: "Community", src: "/campus.jpg" }
  ];
  return (
    <>
      <Breadcrumbs current="Student Life" />
      <PageHero eyebrow="Student life" title="Participation builds confidence." intro="A school experience enriched by activities, teamwork, expression and shared celebration." />
      <section className="site-container py-16 md:py-24 reveal-on-scroll">
        <div className="grid gap-10 md:grid-cols-12">
          {items.map((x, i) => (
            <article key={x.name} className={i % 3 === 0 ? "md:col-span-7" : "md:col-span-5"}>
              <PhotoPlaceholder label={x.name} src={x.src} />
              <h2 className="mt-5 font-display text-2xl font-bold">{x.name}</h2>
              <p className="mt-2 text-muted-foreground">Students engage in diverse programs designed to develop leadership and creativity.</p>
            </article>
          ))}
        </div>
      </section>
      <AdmissionBand />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <Breadcrumbs current="Contact" />
      <PageHero eyebrow="Contact" title="Speak with DM Public School." intro="For admissions, visits or general questions, please reach out to us using the details below." />
      <section className="site-container grid gap-12 py-16 lg:grid-cols-[.8fr_1.2fr] lg:py-24 reveal-on-scroll">
        <div>
          <h2 className="font-display text-2xl font-bold">School information</h2>
          <div className="mt-7 space-y-6">
            <div className="flex gap-4"><MapPin className="size-5 shrink-0 text-accent-foreground" /><p>{school.address}<br />{school.locality}, {school.city}, {school.state}</p></div>
            <div className="flex gap-4"><Phone className="size-5 shrink-0 text-accent-foreground" /><p>{school.phone}</p></div>
            <div className="flex gap-4"><Mail className="size-5 shrink-0 text-accent-foreground" /><p>{school.email}</p></div>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">School timings: {school.timings}</p>
          <Button asChild variant="outline" className="mt-6"><a href={school.mapUrl} target="_blank" rel="noreferrer" data-analytics="map-click">Open in Google Maps <ArrowRight /></a></Button>
        </div>
        <div className="border border-border bg-card p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold">Send an enquiry</h2>
          <p className="mb-7 mt-2 text-sm text-muted-foreground">Fill out the form below and a member of our team will contact you shortly.</p>
          <EnquiryForm kind="contact" />
        </div>
      </section>
    </>
  );
}

export function LegalPage({ kind }: { kind: "Privacy" | "Terms" }) {
  return (
    <>
      <Breadcrumbs current={kind} />
      <PageHero eyebrow="Information" title={kind === "Privacy" ? "Privacy policy" : "Website terms"} intro={`The standard ${kind.toLowerCase()} information for DMPS.`} />
      <section className="site-container max-w-3xl py-16 reveal-on-scroll">
        <h2 className="mt-10 font-display text-2xl font-bold">Purpose</h2>
        <p className="mt-4 leading-7 text-muted-foreground">This page contains standard information regarding the use of the DM Public School website and the handling of enquiries and visitor information.</p>
      </section>
    </>
  );
}
