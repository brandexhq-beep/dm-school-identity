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
  { label: "Home", to: "/" }, { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" }, { label: "Admissions", to: "/admissions" },
  { label: "Campus", to: "/campus" }, { label: "Student Life", to: "/student-life" },
  { label: "News & Events", to: "/news" }, { label: "Contact", to: "/contact" },
] as const;

export const academicStages = [
  { title: "Primary School", range: "[Grades to be confirmed]", text: "A purposeful foundation in literacy, numeracy, curiosity and confident expression." },
  { title: "Middle School", range: "[Grades to be confirmed]", text: "Deeper subject learning supported by inquiry, collaboration and growing independence." },
  { title: "Secondary School", range: "[Grades to be confirmed]", text: "Structured academic preparation with attention to reasoning, responsibility and wellbeing." },
  { title: "Senior Secondary", range: "[Availability to be confirmed]", text: "Programme and subject details will be published after confirmation by the school." },
] as const;

export const newsItems = [
  { slug: "welcome-to-school-news", title: "School news will appear here", date: "2026-09-02", category: "Notice", summary: "This draft entry demonstrates the news format. Replace it with a verified school announcement before publishing.", draft: true },
] as const;

export const eventItems = [
  { slug: "upcoming-school-events", title: "Upcoming events will appear here", date: "[Date to be confirmed]", category: "School Event", summary: "This draft entry demonstrates the event format. Replace it with a confirmed event before publishing.", draft: true },
] as const;
