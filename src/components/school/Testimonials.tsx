import { Star } from "lucide-react";

const testimonials = [
  { text: "My daughter loves going to DMPS every day. The teachers are incredibly supportive.", author: "Parent of Grade 4 Student" },
  { text: "The emphasis on values alongside academics makes this school truly special.", author: "Parent of Grade 8 Student" },
  { text: "A fantastic environment that nurtures both academic excellence and character.", author: "Alumnus" },
  { text: "The sports facilities and extracurricular activities here are phenomenal.", author: "Parent of Grade 6 Student" },
  { text: "I feel confident my child is getting the best education and care possible.", author: "Parent of Grade 2 Student" },
  { text: "DMPS gave me the foundation I needed to succeed in university.", author: "Alumnus, Class of 2024" }
];

export function TestimonialsMarquee() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-24 overflow-hidden">
      <div className="site-container mb-12 text-center">
        <h2 className="heading-lg">What Our Community Says</h2>
      </div>
      <div className="relative w-full max-w-full overflow-hidden">
        <div className="flex w-[200%] animate-marquee hover:pause-on-hover">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="flex-none w-[350px] mx-4 bg-secondary text-secondary-foreground p-8 rounded-xl shadow-lg border border-border">
              <div className="flex gap-1 mb-4 text-accent">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-sm font-bold opacity-80">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
