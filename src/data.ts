import { Service, Project, BlogPost, Testimonial, FAQItem } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'home-interiors',
    title: 'Home Interiors',
    description: 'Bespoke, end-to-end full-home interior design solutions transforming standard apartments and villas into beautifully customized sanctuaries that speak to your soul.',
    icon: 'Home',
    items: [
      'Tailored space planning & ergonomic layouts',
      'Custom luxury false ceiling designs & smart lighting schemas',
      'Exclusive modular wardrobes with premium glass & acrylic finishes',
      'Curated wallpaper, accent textures, and customized paint consulting'
    ]
  },
  {
    id: 'modular-kitchens',
    title: 'Modular Kitchens',
    description: 'Sleek, ergonomic, and heavy-duty modular kitchen layouts designed to streamline workflow, utilizing waterproof, fire-retardant materials and high-end hardware integrations.',
    icon: 'CookingPot',
    items: [
      'German-engineered soft-close hinges and tandem boxes',
      'High-capacity oil and spice pull-out drawers',
      'Custom breakfast counter counters and luxury quartz countertops',
      'Seamless built-in oven, microwave, chimney & hob planning'
    ]
  },
  {
    id: 'living-room-designs',
    title: 'Living Room Designs',
    description: 'The social hub of your residence, meticulously styled to strike a majestic balance between elite hospitality aesthetics and absolute daily comfort.',
    icon: 'Sofa',
    items: [
      'Custom floating TV media consoles with timber veneer styling',
      'Statement focal wall paneling in marble, louvers, or concrete textures',
      'Bespoke, hand-upholstered sofas, lounges, and designer coffee tables',
      'Layered ambient lighting including cove, track, and accent lights'
    ]
  },
  {
    id: 'luxury-bedroom-and-suites',
    title: 'Luxury Bedroom & Master Suites',
    description: 'Bespoke bedroom sanctuaries crafted with acoustically padded headboards, walk-in closets, and customized mood lighting tailored for restful luxury.',
    icon: 'Bed',
    items: [
      'Custom floor-to-ceiling walk-in wardrobes with glass & tinted mirrors',
      'Ergonomic acoustic headboard paneling and plush leatherette trims',
      'Integrated study nooks, dressing vanities & concealed jewelry drawers',
      'Layered nightstand lighting, reading spotlights & dimmable cove glow'
    ]
  },
  {
    id: 'renovations-and-remodeling',
    title: 'Renovations and Remodeling',
    description: 'Breathe new life into aging structures with our comprehensive civil upgrades, refreshing dated spaces into highly functional, contemporary masterpieces.',
    icon: 'Sparkles',
    items: [
      'Stress-free structural alterations and interior wall removals',
      'Premium tiling, marble polishing, and luxury bathroom upgrades',
      'Full plumbing, rewiring, and electrical grid modernisation',
      'Complete aesthetic overhauls with modular panel and unit fits'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-pramod',
    title: "Pramod's Residence – Minimalist Family Haven",
    subtitle: 'Warm minimalism designed for multi-generational comfort.',
    location: 'Amberpet, Hyderabad',
    style: 'Warm Minimalism',
    size: '3,200 sq.ft. 3BHK Apartment',
    year: '2025',
    desc: 'An exquisite study in light wood accents, generous negative spaces, and hidden custom storage. This residence provides a serene escape in Amberpet, Hyderabad, incorporating cozy family seating and kid-friendly play layouts without disrupting the peaceful minimalist visual stream.',
    brief: 'A tech-entrepreneur couple with a playful toddler and visiting parents wanted a clean, warm minimalist aesthetic. However, standard minimalism lacks storage and safety. They requested zero-clutter surfaces, kid-safe curved edges, and dedicated quiet workstations that physically vanish when not in use to preserve family boundaries.',
    solution: 'We custom-built handleless ceiling-height storage panels matching the textured plaster walls to hide clutter. Curved white oak veneer columns and rounded furniture corners replaced sharp profiles. For the workspace, we engineered custom timber louvers within a quiet master suite alcove, sliding shut to conceal screens after work hours.',
    result: 'A seamless, highly calming haven where work and family life coexist. Every toy has a hidden container, and the home transition from high-performance office to cozy residence takes under 60 seconds.',
    details: [
      'Understated matte lacquer cabinetry and light white oak veneers',
      'Incredibly clean, handles-free wardrobes blending seamlessly into wall plaster',
      'Concealed ambient LED lighting to maximize room height and soothe eyes',
      'Integrated modular workspace within a quiet master bedroom alcove'
    ],
    imageUrl: '/images/selected-residences/pramod-1.jpg',
    linkUrl: '/projects/'
  },
  {
    id: 'project-spoorthi',
    title: "Spoorthi's Residence – Subtle Fusion of Styles | Kohinoor Aurobindo",
    subtitle: 'Timeless Indian heritage paired with contemporary luxury.',
    location: 'Kohinoor Aurobindo, Hyderabad',
    style: 'Transitional Fusion',
    size: '4,100 sq.ft. 4BHK Premium Flat',
    year: '2025',
    desc: 'A gorgeous transitional space combining European classical molding techniques with rich Indian textures. Custom brass partition screens, warm handpicked teak wood items, and luxurious Gwalior stone panels pair with modern Italian minimal leather sofas, demonstrating a rich, highly individualized style fusion.',
    brief: 'The clients wanted an opulent, high-ceiling modern flat that honors their deep South Indian roots. They explicitly asked for an open-concept Pooja room visible yet separate from the social zones, seamless integration of ancestral teak heirlooms, and a modern kitchen capable of supporting traditional heavy culinary prep.',
    solution: 'We framed the traditional laser-cut Pooja room in structural brass and backlit fluted glass panels. Ancestral teak items were restored and paired with clean Italian leather sectionals. In the kitchen, we designed heavy-duty waterproof marine ply carcasses finished in high-gloss anti-scratch acrylic with a custom Quartz island counter.',
    result: 'An incredibly personalized, museum-like space where heirloom memories and ultra-modern convenience merge into a majestic, high-contrast style fusion.',
    details: [
      'Sophisticated fluted panel detailing with brushed brass gold metal trim',
      'Beautiful open-concept pooja room featuring backlit traditional laser-cut screens',
      'High-gloss acrylic handle-less kitchen drawers with premium Quartz island',
      'Grand master bedroom featuring tufted velvet headboards and elegant marble-cladding walls'
    ],
    imageUrl: '/images/selected-residences/spoorthi-1.jpg',
    linkUrl: '/projects/'
  },
  {
    id: 'project-anil',
    title: "Anil's Residence – Pet-Friendly Villa Charm | Patancheru",
    subtitle: 'Luxury villa interior design engineered for pets and luxury lovers.',
    location: 'Patancheru, Hyderabad',
    style: 'Contemporary Rustic Villa',
    size: '5,500 sq.ft. 4BHK Independent Villa',
    year: '2024',
    desc: 'Designed around the active daily lifestyle of three energetic retrievers and their owners. We custom-sourced premium scratch-proof high-durability textiles, laid high-strength, anti-slip vitrified flooring, and designed hidden dog-washing stations and integrated lounge tunnels, maintaining a stunning rustic luxury vibe.',
    brief: 'A family with three playful golden retrievers wanted an earthy, upscale villa. They were tired of scratched sofas, muddy dog paws, and hair accumulation on fabric. They requested high-end materials that are totally claw-proof, mud-resistant, and easily washable, alongside cozy integrated spaces for their pets.',
    solution: 'We sourced ultra-premium scratch-resistant polyurethane leatherette fabrics and laid anti-slip, non-porous rustic vitrified tiles. A professional dog-shower station with warm water and dedicated drying racks was built into the utility area, and custom dog-lounges were integrated under the open timber stairs.',
    result: 'An elegant, high-luxury villa that is entirely stress-free. Paws are washed at the door, fur is swept effortlessly, and furniture remains pristine and claw-mark free.',
    details: [
      'Stunning exposed timber beam ceilings and cozy terracotta accent features',
      'Heavy-duty scratch-resistant leatherette fabrics and robust quartz worktops',
      'Concealed pet-washing station in the utility room with specialized drying racks',
      'Beautiful double-height glass windows framing panoramic garden vistas'
    ],
    imageUrl: '/images/selected-residences/anil-1.jpg',
    linkUrl: '/projects/'
  },
  {
    id: 'project-piyush',
    title: "Piyush's Residence – Contemporary Italian Luxury | Aurobindo Regent",
    subtitle: 'Refined sophistication, custom marble accents, and smart automation.',
    location: 'Aurobindo Regent, Kondapur, Hyderabad',
    style: 'Contemporary Italian Luxury',
    size: '4,070 sq.ft. 4BHK High-Rise Residence',
    year: '2025',
    desc: 'A spectacular high-rise sanctuary in Aurobindo Regent. Designed with Italian marble flooring, bespoke fluted wall paneling, subtle architectural cove lighting, and state-of-the-art smart home integration.',
    brief: 'A high-profile C-suite executive wanted a sleek, ultra-modern luxury home in Aurobindo Regent. He requested expansive social entertaining zones, a state-of-the-art concealed acoustic home theater, and automated Lutron scene-lighting across all suites.',
    solution: 'We opened the layout into an expansive living-dining expanse clad in book-matched Statuario marble. We integrated acoustic fabric paneling hidden behind champagne gold metal trim in the entertainment zone, and installed smart Lutron lighting controls.',
    result: 'An effortlessly sophisticated urban haven that effortlessly transitions from an elegant executive host venue to a serene family retreat.',
    details: [
      'Book-matched Italian Statuario marble flooring and custom champagne gold accents',
      'Integrated smart home automation for Lutron lighting, climate, and window motorized drapes',
      'Concealed acoustic home entertainment zone with bespoke fluted veneer paneling',
      'Custom Italian lacquered island kitchen with concealed motorized appliance garages'
    ],
    imageUrl: '/images/selected-residences/piyush-1.jpg',
    linkUrl: '/projects/'
  }
];

export const TRUST_BADGES = [
  '300+ Projects Delivered',
  'Award-Winning Designs',
  '100% Client Satisfaction',
  '15+ Years Team Experience',
  'Media Magazine Features',
  'Eco-Friendly & Smart Living',
  'Design-Led Innovation',
  'Strong Vendor Network'
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Villa Interior Design Cost in Hyderabad: Kokapet, Jubilee Hills & Financial District Guide',
    excerpt: 'Planning to design a 4BHK or 5BHK luxury villa in Hyderabad? Explore itemized interior cost breakdowns, material choices (Italian marble, Burma Teak, BWP Ply), and budget allocation strategies for Kokapet, Jubilee Hills, and Financial District residences.',
    fullContent: `Designing a luxury villa in Hyderabad’s prime enclaves like Jubilee Hills, Kokapet, Financial District, and Tellapur demands a refined balance between grandeur and functional longevity. Independent villas ranging from 4,500 sq.ft. to 10,000+ sq.ft. require a structured approach to interior budgeting to prevent scope creep and budget overruns.

1. Budget Allocation Breakdown for Hyderabad Villas:
- Structural Woodwork & Modular Cabinetry (40%): High-Density Moisture-Resistant (HDMR) and Boiling Waterproof (BWP) plywood for kitchen, foyer, master wardrobes, and crockery units.
- Premium Finishes & Paneling (25%): Italian Travertine wall cladding, veneer wall paneling, and acoustic fluted louvers.
- Loose Furniture & Custom Upholstery (20%): Bespoke couches, marble dining tables, and accent armchairs.
- False Ceiling & Architectural Lighting (15%): Magnetic track lights, warm LED coves, and acoustic gypsum framing.

2. In-House Factory vs. On-Site Carpenter Execution:
For villas in Hyderabad, on-site carpenter fabrication often leads to uneven edge-banding, dust contamination, and extended timelines. Operating an in-house manufacturing factory allows hot-melt PUR edgebanding that seals plywood against Hyderabad's seasonal humidity, delivering millimeter-precise joinery and smooth soft-close drawer action.

3. Key Line-Item BOQ Transparency:
Always demand a line-item Bill of Quantities (BOQ) with zero hidden clauses before signing contracts. Ensure your interior studio commits to written 45-60 day handover deadlines with penalty clauses for delay protection.`,
    date: 'September 15, 2026',
    author: 'Sanjay Kumar (Design Principal)',
    category: 'Villa Interiors & Pricing',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-2',
    title: 'Modular Kitchen Design Trends in Hyderabad: BWP Plywood, PUR Edgebanding & Indian Cooking Durability',
    excerpt: 'Discover high-performance modular kitchen designs engineered specifically for heavy Indian cooking styles in Hyderabad homes. Learn about water-retardant BWP plywood, tandem drawers, and anti-fingerprint acrylic finishes.',
    fullContent: `The kitchen is the heartbeat of every Hyderabad home. Indian cooking involves heavy spice roasting, high-heat tadka frying, and frequent water usage, making standard modular kitchen materials deteriorate within a few years if not engineered correctly.

1. Essential Material Standards:
- Marine Grade BWP Plywood (IS:710 Standard): Mandatory for sink units and wet prep areas to withstand moisture and prevent warping or termite infestation.
- PUR Hot-Melt Edgebanding: Prevents water ingress along cabinet door edges, guaranteeing zero swelling over decades of daily use.
- German Hardware Integration: Heavy-duty soft-close tandem drawers rated for 50kg+ loads to easily accommodate heavy brass & stainless steel cookware.

2. Popular Layouts in Hyderabad High-Rises & Villas:
- Parallel / Galley Kitchens: Ideal for compact 3BHK high-rises in Gachibowli and Kondapur, optimizing the ergonomic cooking triangle.
- Island Modular Kitchens: Perfect for open-plan villas in Kokapet and Manikonda, combining breakfast counters with concealed appliances and integrated induction hobs.

3. Low-Maintenance Finishes:
Anti-fingerprint matte laminates and back-painted toughened glass shutters are rapidly replacing glossy finishes in Hyderabad, offering effortless wipe-clean maintenance against turmeric and oil splatters.`,
    date: 'August 28, 2026',
    author: 'Neha Sharma (Senior Space Stylist)',
    category: 'Modular Kitchens',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-3',
    title: 'NRI Home Interior Design Guide for Hyderabad Properties: Remote Tracking & On-Time Handover',
    excerpt: 'Building or renovating a home in Hyderabad from abroad? Learn how NRIs in the US, UK, and Gulf manage turnkey interior execution with weekly 4K video updates, transparent BOQs, and zero site-visit hassle.',
    fullContent: `Non-Resident Indians (NRIs) buying gated community villas or luxury apartments in Hyderabad often face the anxiety of managing interior execution from thousands of miles away. Misaligned budgets, vendor delays, and substandard material substitutions are common pitfalls when dealing with unorganized contractors.

1. The Single Point of Contact Model:
Instead of coordinating between separate carpenters, painters, electricians, and false-ceiling vendors, NRIs benefit immensely from a unified turnkey studio. A dedicated Project Lead manages all site operations, schedule tracking, and quality audits.

2. Real-Time Remote Site Progress Protocols:
- Weekly 4K Video Walkthroughs: Detailed site video logs covering electrical conduit runs, false ceiling framing, and tile leveling.
- WhatsApp Progress Dashboard: Direct access to milestone checklists, material delivery receipts, and photo logs.
- Digital Material Approval: Material sample kits dispatched directly or reviewed via high-definition video calls.

3. Written Timeline & Penalty Guarantees:
Demand a legally binding agreement specifying factory manufacturing schedules, site installation phases, and handover dates. This ensures your Hyderabad property is ready for immediate move-in or high-yield rental deployment upon your arrival.`,
    date: 'August 12, 2026',
    author: 'Sanjay Kumar (Design Principal)',
    category: 'NRI Special Guide',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-4',
    title: 'Earthy Luxury & Heritage Fusion: Hyderabad Interior Design Trends for 2026',
    excerpt: 'Explore how top Hyderabad interior designers are fusing Nizami architectural motifs, Bidriware brass inlays, and Pochampally silk upholstery with modern warm minimalism for timeless residential spaces.',
    fullContent: `Hyderabad’s architectural landscape is witnessing a magnificent movement: Earthy Luxury infused with subtle heritage motifs. Homeowners in Banjara Hills, Jubilee Hills, and Film Nagar are moving away from sterile, cookie-cutter modern interiors in favor of spaces that feel deeply grounded, warm, and distinctly rooted in regional art.

1. Heritage Modern Accents:
- Bidriware Brass Inlays: Delicate brass profiles inlaid into dark walnut wood panels or natural stone foyer walls.
- Nizami Arches & Fluted Detailing: Softer curved doorway frames and fluted teak partition screens that create gentle spatial transitions.
- Pochampally & Kalamkari Textiles: Custom-upholstered throw cushions and lounge chairs featuring traditional weave patterns against neutral linen couches.

2. Tactile Natural Finishes:
- Textured Lime-Wash Walls: Hand-troweled earthy lime washes that breathe, handle Hyderabad humidity effortlessly, and age gracefully.
- Terracotta & Gwalior Stone Accents: Warm earthy terracotta tiles paired with honed Italian marble flooring for tactile richness.

3. Warm Minimalist Furniture Profiles:
Low-slung, sleek furniture silhouettes in Burma teak wood ensure the space remains airy and uncluttered while retaining opulent craftsmanship.`,
    date: 'July 24, 2026',
    author: 'Rohan Mehta (Technical Director)',
    category: 'Design Trends',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-5',
    title: '3BHK & 4BHK Apartment Interior Design Checklist for Gachibowli & Kondapur High-Rises',
    excerpt: 'Essential interior planning guide for IT professionals and families moving into high-rise apartments in Gachibowli, Kondapur, Puppalguda, and Narsingi. Maximize storage, acoustic comfort, and lighting.',
    fullContent: `High-rise living in Hyderabad’s tech corridors—Gachibowli, Kondapur, Nallagandla, and Puppalguda—requires smart spatial engineering. With typical 3BHK and 4BHK floor plans ranging from 1,800 sq.ft. to 3,500 sq.ft., optimizing available square footage without crowding the home is paramount.

1. Foyer & Entryway Organization:
Create a multi-functional shoe console with ventilated shutters, hidden umbrella storage, a seating bench, and a key drop nook that sets a welcoming tone upon entering.

2. Floor-to-Ceiling Storage Innovation:
- Concealed Loft Space: Extend bedroom wardrobe doors up to the ceiling using heavy-duty tandem hinges to utilize vertical space efficiently.
- Multi-Purpose Study & Work Nooks: Compact wall-mounted folding desks with built-in LED profile lighting and power management grommets.

3. Acoustic Comfort for High-Rise Apartments:
High-rise towers near major roadways benefit from acoustic drywall paneling, plush rugs, double-glazed balcony sliders, and soft fabric drapery to eliminate ambient traffic noise.

4. Balcony Leisure Transformations:
Transform apartment balconies into relaxing green oases with weather-resistant composite wooden deck flooring, vertical plant walls, and custom stone bar counters.`,
    date: 'July 05, 2026',
    author: 'Neha Sharma (Senior Space Stylist)',
    category: 'Apartment Interiors',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-6',
    title: 'How to Choose the Right Turnkey Interior Designer in Hyderabad: BOQ, Factory & Warranty Rules',
    excerpt: 'Avoid contractor delays, hidden costs, and material compromises. Check out the 5 critical evaluation rules every Hyderabad homeowner must follow before hiring an interior designer.',
    fullContent: `Selecting the right interior studio in Hyderabad is the single most important decision for your home project. With hundreds of freelancers, design aggregators, and local contractors operating in the market, distinguishing true quality from aggressive marketing requires careful due diligence.

Rule 1: Verify In-House Manufacturing Capabilities
Ask to visit the studio’s manufacturing factory in Hyderabad. Studios operating automated beam saws, edge-banders, and CNC routers deliver consistent factory precision, unlike contractors relying on manual hand-tools on-site.

Rule 2: Insist on a Transparent Line-Item BOQ
Never accept lump-sum estimates. A professional BOQ specifies exact board brands (e.g., CenturyPly, Greenply BWP), laminate thickness (1mm/1.5mm), hinge models (Blum/Hettich), and unit dimensions.

Rule 3: Check Completed Residential Homes Across Hyderabad
Request to visit recently completed villa or apartment projects in areas like Jubilee Hills, Kokapet, or Gachibowli to inspect joinery alignment, drawer smoothness, and paint finishes firsthand.

Rule 4: Review Written Timeline Commitments
Ensure your contract includes a clear project schedule with defined milestone dates and delay penalty clauses.

Rule 5: Verify Post-Handover Warranty & Service Network
Choose a studio that provides a written 10-year warranty on modular cabinetry and maintains a local maintenance team in Hyderabad for prompt post-handover support.`,
    date: 'June 20, 2026',
    author: 'Sanjay Kumar (Design Principal)',
    category: 'Studio Selection',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is included in your complete turnkey interior design scope for a 2BHK, 3BHK, or 4BHK home?',
    answer: 'Our turnkey scope delivers a complete, move-in ready home. It includes spatial layout planning, photorealistic 3D renders, a factory-milled modular kitchen with anti-scratch surfaces, master bedroom wardrobes with soft-close hardware, custom TV media units, foyer cabinetry, false ceiling design with LED cove lighting, full-home painting, electrical profile additions, and site cleanup. You hand over the keys and walk into a pristine, fully finished home.'
  },
  {
    id: 'faq-2',
    question: 'How do you guarantee long-lasting material quality in Hyderabad’s climate?',
    answer: 'We use water-resistant Boiling Waterproof (BWP) plywood for kitchen wet zones and High-Density Moisture-Resistant (HDMR) boards for wardrobes and dry storage areas. All cabinetry is precision-edged at our in-house Hyderabad factory using hot-melt PUR edgebanding to prevent moisture ingress. We pair these with premium German-engineered soft-close hinges and heavy-duty tandem drawer runners.'
  },
  {
    id: 'faq-3',
    question: 'How long does a turnkey home interior project take from design approval to final handover?',
    answer: 'Execution typically takes 45 to 60 days following final 3D design and material sign-off. Because 80% of your furniture and cabinetry is pre-manufactured at our state-of-the-art Hyderabad factory while on-site civil and false ceiling work takes place simultaneously, site installation is fast, clean, and strictly adheres to written timeline commitments.'
  },
  {
    id: 'faq-4',
    question: 'Can I monitor my site progress remotely if I am an NRI or busy working professional?',
    answer: 'Yes. You get a dedicated single point of contact for your project. You receive weekly HD video walkthroughs, detailed photo logs, and progress updates directly via WhatsApp and email, allowing you to stay updated effortlessly from anywhere in the world without having to visit the site daily.'
  },
  {
    id: 'faq-5',
    question: 'Do you handle civil modifications, electrical rewiring, and false ceiling work under one roof?',
    answer: 'Yes. As a complete turnkey studio, we manage all civil alterations, electrical point additions, plumbing rerouting, false ceiling structural framing, LED profile installations, and wall painting. You work with a single unified team, eliminating the stress of managing external contractors or multiple vendors.'
  },
  {
    id: 'faq-6',
    question: 'How to choose the right interior designer in Hyderabad for your home?',
    answer: 'To choose the right interior designer in Hyderabad, evaluate their portfolio of completed residential homes, verify if they operate an in-house manufacturing factory for modular cabinetry precision, demand a transparent line-item BOQ with zero hidden costs, review client testimonials across Hyderabad, and ensure they provide written timeline commitments with post-handover warranty support.'
  },
  {
    id: 'faq-7',
    question: 'What warranty and post-handover support do you provide for modular cabinetry and finishes?',
    answer: 'We stand firmly behind our manufacturing precision with a comprehensive 10-year structural warranty on factory modular cabinetry and a 1-year free service warranty covering hardware alignment, door adjustments, and routine maintenance checks post-handover.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Bala Naresh Nalamati',
    locality: 'Hyderabad',
    text: 'Recently, Koncept House Interiors completed the interior work for my new home. They did an excellent job and delivered everything on time. Siresha ma’am suggested many valuable improvements that truly enhanced our interior design. Her ideas made a big difference in the overall look and feel of our home. Overall, I had a very good experience with Koncept House Interiors. Thank you for designing my home so beautifully!',
    rating: 5,
    initials: 'BN'
  },
  {
    name: 'Amruthamma Kudikilla',
    locality: 'Hyderabad (NRI Client)',
    text: 'Working with The Koncept House interior Design Studio has been an exceptional experience. As NRI clients, we initially reached out through Instagram, impressed by the quality and style showcased in their online portfolio. The trust we placed in them was well-placed, as they have delivered outstanding results that truly reflect their expertise and attention to detail. From initial consultation to final execution, their professionalism and creativity have exceeded our expectations. We highly recommend The Koncept House interior Design Studio to anyone seeking top-notch interior design solutions!',
    rating: 5,
    initials: 'AK'
  },
  {
    name: 'Snehalata Reddy',
    locality: 'Hyderabad',
    text: 'Koncept house has been wonderful designing our house. The output is very good, totally recommendable. Sirisha garu being the nicest, she was being very crisp and clear on each design session. Timely & quality delivery is appreciated.',
    rating: 5,
    initials: 'SR'
  },
  {
    name: 'Mr. Imran Sheikh',
    locality: 'Manikonda',
    text: 'What won us over was their meticulous attention to the tiny details. They built the most gorgeous floating TV unit and customized false ceiling lighting. They also custom-upholstered a massive living room sectional matching our accent wall perfectly. Fantastic customer support and flawless craft.',
    rating: 5,
    initials: 'IS'
  }
];
