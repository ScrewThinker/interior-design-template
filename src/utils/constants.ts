/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  location: string;
  details: string;
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  description: string;
  before: string;
  after: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  projectType: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export const COMPANY_INFO = {
  name: "Nyasa Interior Designs",
  tagline: "Transform Your Space With Expert Design",
  subTagline: "Premium quality work in pocket-friendly budget",
  location: "Nagpur, Maharashtra, India",
  address: "Plot No. 42, Nelco Society, Near Pratap Nagar Square, Nagpur - 440022",
  phone: "+91 98765 43210",
  email: "contact@nyasadesigns.com",
  whatsapp: "919876543210",
  aboutShort: "We specialize in creating beautiful, functional interiors that reflect your personality and vision. With 10+ years of experience, we've completed 500+ projects across Nagpur with an emphasis on craftsmanship and premium materials within friendly budgets.",
  aboutLong: "Founded with a passion for architectural harmony and client-centered design, Nyasa Interior Designs has grown into one of Nagpur's most trusted interior execution firms. We believe that premium design shouldn't demand excessive prices. By combining streamlined project management, locally sourced high-grade materials, and a team of dedicated local artisans, we bring global aesthetics straight to homes and workplaces in Nagpur.",
  founderName: "Pranay Pandit",
  founderTitle: "Founder & Principal Architect",
  founderQuote: "We don't just decorate rooms; we craft environments that elevate how people live and perform. Every choice—from structural space planning to the final accent light—is a dialogue between functionality and emotion.",
  founderImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
};

export const SERVICES: Service[] = [
  {
    id: "residential",
    title: "Residential Interior Design",
    description: "Tailored living spaces, smart modular kitchens, and custom-styled bedrooms designed for modern living.",
    longDescription: "Our residential services cover end-to-end design and execution. We design functional layouts, customized modular wardrobes, ergonomic modular kitchens, luxury false ceilings, and select premium lighting and color schemes that make your home your favorite place on earth.",
    icon: "Home",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "commercial",
    title: "Commercial Interior Design",
    description: "Engaging corporate offices, boutique retail outlets, and productive co-working spaces engineered for success.",
    longDescription: "We craft commercial spaces that enhance productivity, foster collaboration, and reflect your brand identity. From receptionist lobbies, conference rooms, acoustic executive cabins to open workspaces, our team delivers stunning, compliant commercial turnkeys.",
    icon: "Briefcase",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "construction",
    title: "Construction Services",
    description: "High-grade civil construction, structural alterations, and turnkey builders for homes and commercial assets.",
    longDescription: "With expert engineers and strict adherence to structural safety standards, we execute precise civil works, layout changes, premium plastering, flooring, plumbing, and electrification to build a durable canvas for high-end interiors.",
    icon: "Hammer",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "elevation",
    title: "Elevation & Facade Design",
    description: "Striking modern facades, classic high-end exteriors, and structural 3D architectural elevations.",
    longDescription: "First impressions are lasting. Our elevation design merges traditional durability with contemporary geometric lines. We utilize composite panels, premium stone claddings, treated wood paneling, and strategic exterior lighting to create showstopping elevations.",
    icon: "Compass",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "landscaping",
    title: "Landscaping & Green Integration",
    description: "Custom terrace gardens, green vertical walls, and serene outdoor patios integrated with nature.",
    longDescription: "Bring nature closer. We design high-end residential balconies, executive green lounges, and landscaped courtyards with automatic drip-irrigation, mood lighting, selected flora, and durable weatherproof outdoor deck furniture.",
    icon: "Leaf",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "visualization",
    title: "3D Visualization & Walkthroughs",
    description: "Photorealistic 3D renders, immersive VR walkthroughs, and material mockup analysis.",
    longDescription: "No more guesswork. Before laying down a single brick, walk through your future space in photorealistic high-fidelity. We craft fully detailed 3D digital models displaying exact material textures, lighting impacts, and furniture placements.",
    icon: "Tv",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Luxury Duplex Apartment",
    category: "Residential",
    year: "2025",
    location: "Dharampeth, Nagpur",
    details: "An open-plan 4 BHK duplex featuring bespoke teakwood elements, soft ambient lighting panels, and premium Italian marble floors.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "proj-2",
    title: "Eco-Friendly Tech Workspace",
    category: "Commercial",
    year: "2024",
    location: "MIHAN SEZ, Nagpur",
    details: "A 12,000 sq.ft office with vertical green walls, natural oak wood desks, custom glass cabins, and energy-efficient lighting controls.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "proj-3",
    title: "Modern Minimalist Modular Kitchen",
    category: "Modular Kitchen",
    year: "2025",
    location: "Ramdaspeth, Nagpur",
    details: "Handleless quartz-top counters, integrated premium German appliances, soft-close charcoal pullouts, and elegant indirect profile LEDs.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "proj-4",
    title: "Contemporary Villa Elevation",
    category: "Elevation",
    year: "2024",
    location: "Pratap Nagar, Nagpur",
    details: "A striking facade featuring cantilevered concrete beams, charcoal composite louvers, natural stone tiles, and warm uplighting.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "proj-5",
    title: "Bespoke Master Suite",
    category: "Residential",
    year: "2025",
    location: "Civil Lines, Nagpur",
    details: "Linen-clad acoustic wall panels, custom king-size velvet bed, integrated walk-in wardrobe, and warm beige micro-concrete walls.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "proj-6",
    title: "Luxe Dental Clinic Lounge",
    category: "Commercial",
    year: "2024",
    location: "Sardar, Nagpur",
    details: "Calming pastel sage green walls, curved bouclé sofas, soft brass details, and clean acoustic-slatted ceilings to ease client anxieties.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "proj-7",
    title: "Terrace Garden & Lounge",
    category: "Landscaping",
    year: "2025",
    location: "Narendra Nagar, Nagpur",
    details: "Weatherproof ipe wood decking, modern metal pergolas, a customized waterfall stone backdrop, and a vibrant select planter scheme.",
    image: "https://images.unsplash.com/photo-1534710951216-45c5df96c273?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "proj-8",
    title: "Industrial Chic Café",
    category: "Commercial",
    year: "2024",
    location: "Bajaj Nagar, Nagpur",
    details: "Exposed brick accent walls, black steel fixtures, reclaimed wood communal tables, and custom hand-painted local art murals.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "proj-9",
    title: "Modern 3 BHK Residence",
    category: "Residential",
    year: "2025",
    location: "Manish Nagar, Nagpur",
    details: "Space-optimized sleek TV unit, customized breakfast counter, hidden storage utility solutions, and beautiful custom fabrics.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "proj-10",
    title: "Premium Executive Cabin",
    category: "Commercial",
    year: "2025",
    location: "Wardha Road, Nagpur",
    details: "Italian leather desk, veneered back cabinets, motorized double-glazed privacy partitions, and premium acoustic design.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "proj-11",
    title: "Urban Balcony Garden",
    category: "Landscaping",
    year: "2024",
    location: "Somalwada, Nagpur",
    details: "Custom wooden privacy slats, artificial grass turf with pebbles, a cozy swing, and vertical hanging pots with automated watering.",
    image: "https://images.unsplash.com/photo-1567226464720-e6309136e6fb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "proj-12",
    title: "Nordic Living Room Concept",
    category: "Residential",
    year: "2025",
    location: "Friends Colony, Nagpur",
    details: "A soft neutral color palette, curved white boucle armchair, light ash-wood tables, and beautiful textured high-pile linen rug.",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=800&auto=format&fit=crop"
  }
];

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: "ba-1",
    title: "Dharampeth Living Room Transformation",
    description: "From a dark, cluttered, and poorly utilized space to a bright, open-concept contemporary family lounge.",
    before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop", // simpler messy/empty room visual
    after: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop"   // premium styled interior
  },
  {
    id: "ba-2",
    title: "Ramdaspeth Modular Kitchen Renovation",
    description: "Old traditional brick platform kitchen rebuilt with modular, ergonomic soft-closing cabinets and sleek chimney.",
    before: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ba-3",
    title: "MIHAN Tech Office Redesign",
    description: "Cold, industrial bare concrete space turned into an energetic, well-ventilated, creative open-plan tech workspace.",
    before: "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Rahul Mehta",
    role: "Managing Director",
    projectType: "Corporate Office",
    text: "Nyasa turned our empty shell of an office into a creative hub that motivates our team every single day. Their professional service, premium materials, and adherence to time guidelines were absolutely top-notch.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "t-2",
    name: "Anjali Deshmukh",
    role: "Homeowner",
    projectType: "3 BHK Apartment",
    text: "Getting a premium interior design on a pocket-friendly budget seemed impossible until we met Pranay. The 3D visualizations they created were 100% accurate to the final hand-over. Highly recommended in Nagpur!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "t-3",
    name: "Dr. Sameer Joshi",
    role: "Clinic Founder",
    projectType: "Dental Lounge",
    text: "The patient response to our clinic lounge layout is wonderful. The curved bouclé sofas and calming pastel green walls create a soothing environment that has completely taken away the dental visit anxiety. Excellent craft!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "t-4",
    name: "Preeti & Rajesh Vyas",
    role: "Villas Owners",
    projectType: "Villa Elevation & Landscaping",
    text: "Our villa facade has become a talk of the town in Pratap Nagar. The integration of treated woodwork panels and balcony vertical planters is breathtaking. The project management team executed everything smoothly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description: "We meet at our office or on-site, discussing your lifestyle, tastes, and pocket budget parameters to lay down a collaborative framework.",
    icon: "Coffee"
  },
  {
    step: "02",
    title: "Space Layout & 3D Design",
    description: "Our designers draft spatial layouts and build detailed 3D photorealistic visualizers so you can experience your interiors before any work starts.",
    icon: "Layers"
  },
  {
    step: "03",
    title: "Material & Color Curation",
    description: "You join us to handpick premium, durable veneers, quartz, fittings, laminates, and upholstery colors with expert guidance.",
    icon: "Palette"
  },
  {
    step: "04",
    title: "Artisanal Execution",
    description: "Our in-house master carpenters, civil engineers, and electricians transform 3D models into reality with meticulous finishing.",
    icon: "Cpu"
  },
  {
    step: "05",
    title: "Handover & Professional Styling",
    description: "We clean, assemble, style with curtains/planters, and hand over your ready-to-love premium space, complete with service warranties.",
    icon: "Key"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "5 Smart Space-Saving Secrets for Nagpur Apartments",
    date: "June 24, 2026",
    readTime: "4 min read",
    excerpt: "With premium high-rise spaces growing in Nagpur, maximizing square footage is key. Discover clever modular fittings and multi-functional storage hacks.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop",
    content: "Living in prominent neighborhoods in Nagpur like Dharampeth or Manish Nagar shouldn't mean compromising on space. The secret lies in vertical space-saving solutions. Utilizing ceiling-height modular wardrobes, custom under-bed soft hydraulic lifts, and floating breakfast bars can double your functional floor area. In this post, we list our favorite locally sourced multi-functional fittings that keep your home looking extremely elegant and completely clutter-free."
  },
  {
    id: "blog-2",
    title: "Earthy Palettes: Incorporating Natural Tones Into Living Rooms",
    date: "July 11, 2026",
    readTime: "5 min read",
    excerpt: "Ditch the cold grays. Warm sands, soothing sage greens, and custom soft linens are making a huge comeback in modern interior design.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop",
    content: "The natural environment has an innate capacity to heal and calm our senses. By bringing warm off-whites, organic linen textures, ash-wood finishes, and soft olive tones indoors, we construct a sanctuary from the urban rush. We recommend selecting a flat linen weave for upholstery, styling shelves with local pottery, and integrating small, hardy indoor plants like Fiddle-Leaf Figs to balance the geometry of your furniture."
  },
  {
    id: "blog-3",
    title: "Commercial Office Layouts That Boost Employee Morale",
    date: "May 18, 2026",
    readTime: "6 min read",
    excerpt: "Is your office layout counterproductive? Learn how acoustic design, ergonomic spacing, and green landscaping create a premium workspace.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop",
    content: "Modern workspaces must satisfy both active performance and creative pause. By designing collaborative breakout zones, integrating soft noise-dampening acoustic panels, and placing open landscape features, we can reduce employee stress levels by up to 30%. At Nyasa Interior Designs, we focus heavily on fluid movement pathways and biological integration to build offices that Nagpur's top talent loves to work in."
  }
];
