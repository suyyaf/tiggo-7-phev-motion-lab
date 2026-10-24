export type CarColor = {
  name: string;
  tone: string;
  accent: string;
  image: string;
  note: string;
};

export type Mode = {
  id: string;
  label: string;
  title: string;
  surface: string;
  summary: string;
  posture: string;
  palette: string;
  atmosphere: string;
  heading: string;
  body: string;
  cta: string;
  stats: { value: string; label: string }[];
  bullets: string[];
  gradient: string;
};

export const carColors: CarColor[] = [
  {
    name: "Khaki White",
    tone: "#e7ebf5",
    accent: "#9dc2ff",
    image:
      "https://cheryofficial.com.my/wp-content/uploads/2025/11/tiggo-7-phev-white.png",
    note: "Cleanest proportions. Best for premium hero work.",
  },
  {
    name: "Phantom Grey",
    tone: "#727b87",
    accent: "#7ef0db",
    image:
      "https://cheryofficial.com.my/wp-content/uploads/2025/11/tiggo-7-phev-grey.png",
    note: "Most practical mood. Better for tech-forward darker scenes.",
  },
  {
    name: "Bloodstone Red",
    tone: "#a7122b",
    accent: "#ff74b2",
    image:
      "https://cheryofficial.com.my/wp-content/uploads/2025/11/tiggo-7-phev-red.png",
    note: "Best for poster energy and high-drama campaign sections.",
  },
];

export const heroStats = [
  { value: "RM129,400", label: "Malaysia listed price" },
  { value: "1200 km", label: "claimed combined range" },
  { value: "279 PS", label: "combined power" },
  { value: "19 mins", label: "DC 30–80% charge" },
];

export const showcaseModes: Mode[] = [
  {
    id: "premium",
    label: "01",
    title: "Aura Pulse",
    surface: "Decide / Learn",
    summary:
      "The flagship launch-page direction: premium, bright, structured, and expensive without looking like a generic car-site template.",
    posture: "premium + punchy",
    palette: "ice blue, silver glow, clean dark chrome",
    atmosphere: "disciplined hero glow",
    heading: "The family SUV, recharged — with a more cinematic first impression.",
    body:
      "This is the canonical home direction. It sells aspiration first, then quickly proves the hardware: 1200 km range, 279 PS, 540° camera, and the dual-screen interior without turning the page into a spec dump.",
    cta: "Open launch chapter",
    stats: [
      { value: "1200 km", label: "range headline" },
      { value: "540°", label: "camera moment" },
      { value: "24.6”", label: "cockpit hook" },
    ],
    bullets: [
      "Best homepage thesis",
      "Strong color-switching story",
      "Feels premium enough for a public demo",
    ],
    gradient:
      "linear-gradient(135deg, rgba(123,173,255,0.22), rgba(255,255,255,0.03) 40%, rgba(53,242,210,0.14))",
  },
  {
    id: "product",
    label: "02",
    title: "Family Utility",
    surface: "Compare / Operate",
    summary:
      "The product-smart chapter for people who want clarity over spectacle: charging, seating, screens, safety, and long-distance practicality.",
    posture: "precise + calm",
    palette: "deep slate, teal, cool white",
    atmosphere: "clean information panels",
    heading: "Charge at home. Cruise further. Keep the family comfortable.",
    body:
      "This chapter treats the Tiggo 7 PHEV like a serious product. Cards, comparisons, charging facts, boot space, ambient lights, and family use cases all get proper hierarchy instead of being hidden under an ad campaign tone.",
    cta: "Open product chapter",
    stats: [
      { value: "18.3 kWh", label: "battery" },
      { value: "1386L", label: "max boot space" },
      { value: "8", label: "airbags" },
    ],
    bullets: [
      "Most useful section",
      "Good for side-by-side feature framing",
      "Shows maturity beyond a flashy hero",
    ],
    gradient:
      "linear-gradient(135deg, rgba(35,55,92,0.88), rgba(10,15,28,0.92) 46%, rgba(33,139,167,0.18))",
  },
  {
    id: "future",
    label: "03",
    title: "Night Drive",
    surface: "Command / Inspect",
    summary:
      "A darker cockpit chapter that leans into ambient lighting, hybrid logic, drive modes, and the futuristic dual-screen interior.",
    posture: "cinematic + sharp",
    palette: "violet, cyan, black glass, signal blue",
    atmosphere: "instrument-cluster energy",
    heading: "A hybrid cockpit that looks smarter when the road gets darker.",
    body:
      "This is where we flex the tech mood: EV / HEV / Sport mode changes, charging flow visuals, dashboard-like panels, and a more futuristic framing for the Tiggo’s digital interior.",
    cta: "Open cockpit chapter",
    stats: [
      { value: "EV / HEV", label: "mode logic" },
      { value: "64", label: "ambient colours" },
      { value: "50W", label: "wireless charging" },
    ],
    bullets: [
      "Best for motion-heavy scenes",
      "Good place for future 3D add-ons",
      "Needs readability discipline",
    ],
    gradient:
      "linear-gradient(135deg, rgba(24,17,54,0.92), rgba(9,12,22,0.94) 48%, rgba(0,170,255,0.18))",
  },
  {
    id: "local",
    label: "04",
    title: "Jom Balik Kampung",
    surface: "Decide / Learn",
    summary:
      "A warmer chapter with more Malaysian flavour: BM touches, family-roadtrip energy, and less imported-tech-brand stiffness.",
    posture: "warm + playful",
    palette: "amber, coral, sky blue, darker plum",
    atmosphere: "friendly roadtrip mood",
    heading: "Jom pergi jauh — charge for weekdays, cruise for balik kampung.",
    body:
      "This direction is where the site becomes more yours. It can hold BM copy, roadtrip storytelling, and a slightly more playful rhythm while still keeping the car aspirational enough to feel premium.",
    cta: "Open local chapter",
    stats: [
      { value: "5 seats", label: "family fit" },
      { value: "95 km", label: "pure EV use" },
      { value: "Sony", label: "drive soundtrack" },
    ],
    bullets: [
      "Most distinctive personality",
      "More local, less template-ish",
      "Should stay tasteful, not cartoonish",
    ],
    gradient:
      "linear-gradient(135deg, rgba(255,170,76,0.26), rgba(111,64,154,0.12) 38%, rgba(69,122,255,0.18))",
  },
  {
    id: "campaign",
    label: "05",
    title: "Motion Posters",
    surface: "Decide / Learn",
    summary:
      "The loud chapter: launch-week typography, big claims, moving light, and social-share energy — contained on purpose.",
    posture: "bold + theatrical",
    palette: "red, magenta, silver, black",
    atmosphere: "poster spectacle",
    heading: "More electric. More drama. Still a real product underneath it all.",
    body:
      "This is the chapter for excess, but controlled excess. It proves we can do loud motion, campaign graphics, and big typography without letting the whole site collapse into Awwwards chaos.",
    cta: "Open campaign chapter",
    stats: [
      { value: "279 PS", label: "hero claim" },
      { value: "365 Nm", label: "torque pulse" },
      { value: "19 min", label: "fast-charge hook" },
    ],
    bullets: [
      "Best wow-factor section",
      "Good for launch-week assets",
      "Not the whole site — one chapter only",
    ],
    gradient:
      "linear-gradient(135deg, rgba(181,24,46,0.34), rgba(16,10,18,0.94) 42%, rgba(255,92,185,0.18))",
  },
  {
    id: "lab",
    label: "06",
    title: "Hybrid Command",
    surface: "Operate / Command",
    summary:
      "A component and interaction lab that proves buttons, toggles, chips, loading states, and dashboard widgets — not just big glossy sections.",
    posture: "precise + tactile",
    palette: "slate, cyan, mint, neon white",
    atmosphere: "product UI prototype",
    heading: "A proper UI lab for the Tiggo, not only a marketing shell.",
    body:
      "If the project is supposed to prove capability, this chapter matters. It shows chips, switches, card choreography, mode transitions, dashboard widgets, and richer interactions that a production app could inherit later.",
    cta: "Open UI lab chapter",
    stats: [
      { value: "6", label: "chapter system" },
      { value: "3", label: "core motion tiers" },
      { value: "1", label: "shared shell" },
    ],
    bullets: [
      "Shows actual interface maturity",
      "Best place for reusable motion tokens",
      "Future home for real 360 and hotspots",
    ],
    gradient:
      "linear-gradient(135deg, rgba(18,34,59,0.96), rgba(6,10,18,0.94) 40%, rgba(53,242,210,0.15))",
  },
];

export const featureColumns = [
  {
    title: "Exterior moments",
    items: [
      "540° HD panoramic camera",
      "18-inch alloy rims",
      "full-width LED rear light bar",
      "panoramic sunroof",
    ],
  },
  {
    title: "Interior signals",
    items: [
      "24.6-inch integrated dual display",
      "Sony premium audio",
      "50W wireless charger",
      "memory + ventilated front seats",
    ],
  },
  {
    title: "Hybrid reasons",
    items: [
      "daily EV use without touching petrol",
      "1200 km claimed combined range",
      "EV / HEV / Sport mode storytelling",
      "better long-distance family use case",
    ],
  },
] as const;

export const chapterCards = [
  {
    id: "chapter-home",
    title: "Flagship home",
    subtitle: "canonical identity",
    text: "One strongest thesis page that says what the whole project is before the experiments branch out.",
    href: "/",
  },
  {
    id: "chapter-showroom",
    title: "Showroom chapter",
    subtitle: "premium first impression",
    text: "The polished launch-page version with calm color, light choreography, and cleaner prestige framing.",
    href: "/showroom",
  },
  {
    id: "chapter-cockpit",
    title: "Cockpit chapter",
    subtitle: "future UI energy",
    text: "Drive modes, dashboard panels, ambient lights, and a more technical night-drive atmosphere.",
    href: "/cockpit",
  },
  {
    id: "chapter-local",
    title: "Roadtrip chapter",
    subtitle: "more local flavour",
    text: "Jom makan, jom balik kampung, family use cases, and a friendlier storytelling voice.",
    href: "/roadtrip",
  },
  {
    id: "chapter-lab",
    title: "Lab chapter",
    subtitle: "controls + interactions",
    text: "The UI systems chapter: toggles, buttons, chips, and the 3D prep block for future 360 work.",
    href: "/lab",
  },
] as const;

export const microInteractions = [
  {
    title: "Tactile buttons",
    text: "Hover lift, active compression, and obvious next-step hierarchy.",
  },
  {
    title: "Stateful toggles",
    text: "EV-priority and drive-mode controls that feel like real product controls, not plain form elements.",
  },
  {
    title: "Chapter chips",
    text: "Fast navigation between launch, cockpit, local, and lab chapters without feeling like tabs from a template.",
  },
  {
    title: "Hero choreography",
    text: "The car, the stats, the glow field, and the supporting copy should all animate with one shared rhythm.",
  },
] as const;

export const threeDPrep = [
  "We now have React Three Fiber + drei in the stack.",
  "That means yes: we have real 3D UI capability for 360 prep.",
  "Current 3D block is a concept placeholder scene, not the actual Tiggo geometry yet.",
  "To make a true 360, we still need turntable frames or a usable 3D model.",
] as const;
