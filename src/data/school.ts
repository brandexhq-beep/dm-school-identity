export const school = {
  name: "DM Public School",
  shortName: "DMPS",
  tagline: "A place to learn, grow and become.",
  address: "[School Address]",
  locality: "Rajeshwari Nagar, Laggere",
  city: "Bengaluru",
  state: "Karnataka",
  country: "India",
  phone: "[Phone Number]",
  email: "[School Email]",
  timings: "[School Timings]",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=DM+Public+School+Laggere+Bengaluru",
} as const;

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Admissions", to: "/admissions" },
  { label: "Contact", to: "/contact" },
] as const;

export const secondaryNavigation = [
  { label: "Academics", to: "/academics" },
  { label: "Campus", to: "/campus" },
  { label: "Student Life", to: "/student-life" },
  { label: "News & Events", to: "/news" },
] as const;

export const academicStages = [
  { title: "Primary School", range: "Grades 1 to 5", text: "A purposeful foundation in literacy, numeracy, curiosity and confident expression." },
  { title: "Middle School", range: "Grades 6 to 8", text: "Deeper subject learning supported by inquiry, collaboration and growing independence." },
  { title: "Secondary School", range: "Grades 9 & 10", text: "Structured academic preparation with attention to reasoning, responsibility and wellbeing." },
  { title: "Senior Secondary", range: "Grades 11 & 12", text: "Advanced pre-university education with specialized streams." },
] as const;

export const newsItems = [
  { slug: "admissions-open", title: "Admissions Open for 2026-27", date: "2026-09-02", category: "Notice", summary: "We are pleased to announce that admissions for the upcoming academic year are now open. Visit the campus or apply online.", draft: false },
] as const;

export const eventItems = [
  { slug: "annual-sports-day", title: "Annual Sports Day", date: "2026-11-15", category: "School Event", summary: "Join us for our Annual Sports Day celebrating student athleticism, teamwork, and school spirit.", draft: false },
] as const;
