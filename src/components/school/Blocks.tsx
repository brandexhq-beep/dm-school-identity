import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Eyebrow({children}:{children:React.ReactNode}) { return <p className="mb-4 text-xs font-bold uppercase text-accent-foreground">{children}</p> }
export function PageHero({eyebrow,title,intro}:{eyebrow:string;title:string;intro:string}) { return <section className="page-hero"><div className="site-container grid gap-7 py-14 md:grid-cols-[1fr_0.7fr] md:items-end md:py-20"><div><Eyebrow>{eyebrow}</Eyebrow><h1 className="heading-xl">{title}</h1></div><p className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg">{intro}</p></div></section> }
export function SectionHeading({eyebrow,title,copy}:{eyebrow?:string;title:string;copy?:string}) { return <div className="max-w-2xl">{eyebrow&&<Eyebrow>{eyebrow}</Eyebrow>}<h2 className="heading-lg">{title}</h2>{copy&&<p className="mt-5 leading-7 text-muted-foreground">{copy}</p>}</div> }
export function PhotoPlaceholder({label,aspect="wide",src}:{label:string;aspect?:"wide"|"portrait";src?:string}) {
  if (src) {
    return <img src={src} alt={label} className={`object-cover w-full h-full rounded-md ${aspect==="portrait"?"aspect-[4/5]":"aspect-[16/10]"}`} loading="lazy" />
  }
  return <div className={`photo-placeholder ${aspect==="portrait"?"aspect-[4/5]":"aspect-[16/10]"}`} role="img" aria-label={`${label} photograph to be supplied by the school`}><ImageIcon className="size-7"/><span>{label}</span><small>Authentic school photograph pending</small></div> 
}
export function Breadcrumbs({current}:{current:string}) { return <nav aria-label="Breadcrumb" className="site-container py-4 text-sm text-muted-foreground"><a href="/" className="hover:text-foreground">Home</a><span aria-hidden="true" className="px-2">/</span><span aria-current="page">{current}</span></nav> }
export function AdmissionBand() { return <section className="bg-accent text-accent-foreground"><div className="site-container grid gap-7 py-12 md:grid-cols-[1fr_auto] md:items-center md:py-16"><div><p className="text-xs font-bold uppercase">Admissions</p><h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">Thinking about the next step for your child?</h2><p className="mt-3 text-accent-foreground/80">Talk to DM Public School. We will help you understand the process.</p></div><div className="flex flex-wrap gap-3"><Button asChild size="lg"><a href="/admissions">Admission Enquiry <ArrowRight/></a></Button><Button asChild size="lg" variant="outline"><a href="/contact">Contact School</a></Button></div></div></section> }
