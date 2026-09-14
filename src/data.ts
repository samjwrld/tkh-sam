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
      'Layered architectural lighting including cove, track, and accent lights'
    ]
  },
  {
    id: 'office-and-commercial-interiors',
    title: 'Office and Commercial Interiors',
    description: 'High-performance, beautifully branded commercial layouts created to foster workplace creativity, employee well-being, and positive brand recognition.',
    icon: 'Briefcase',
    items: [
      'Acoustic-treated meeting rooms and collaborative hub clusters',
      'Ergonomic workstation setups and custom executive desks',
      'Stunning reception, client lounge, and board room designs',
      'Integrated electrical grids, server setups, and fire-safety compliance'
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
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    linkUrl: '/projects/'
  },
  {
    id: 'project-spoorthi',
    title: "Spoorthi's Residence – Subtle Fusion of Styles | Kohinoor Aurobindo",
    subtitle: 'Timeless Indian heritage paired with contemporary luxury.',
    location: 'Kohinoor Aurobindo, Gachibowli, Hyderabad',
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
    imageUrl: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
    linkUrl: '/projects/'
  },
  {
    id: 'project-sudheer',
    title: "Sudheer's Residence – Calm & Compact Living | Home Mangala",
    subtitle: 'Optimizing small-scale layouts with airy, space-saving intelligence.',
    location: 'Home Mangala, Miyapur, Hyderabad',
    style: 'Scandinavian Compact',
    size: '1,800 sq.ft. 2BHK Smart Flat',
    year: '2024',
    desc: 'Proof that architectural luxury is determined by layout intelligence rather than square footage. This cozy, breezy apartment uses specialized light-reflecting materials, customized dual-purpose multi-functional storage units, and soft pastel colors to design a highly practical and stress-free modern home.',
    brief: 'A professional consultant requested a spacious, open layout within a compact 1,800 sq.ft. footprint. The client needed high-capacity storage for a vast book collection and kitchen gadgets, but insisted the flat must feel like an open, airy loft without bulky closets blocking light.',
    solution: 'We engineered custom multi-functional modular storage: a wall-embedded fold-out dining table, a slide-out vertical kitchen pantry, and a bespoke guest Murphy-bed. Strategic floor-to-ceiling mirror placements and sliding glass panels maximize natural light penetration across the layout.',
    result: 'The apartment feels twice its physical volume. All bulky elements are concealed flat against the walls, creating an exceptionally breezy, high-performance urban retreat.',
    details: [
      'Clever wall-embedded fold-out breakfast table and hidden study desk',
      'Glossy reflective surface finishes combined with strategically mounted mirrors',
      'Extremely space-efficient vertical slide-out pantry system in the kitchen',
      'Bespoke Murphy-bed setup in guest room to easily transition from guest suite to playroom'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    linkUrl: '/projects/'
  },
  {
    id: 'project-anil',
    title: "Anil's Residence – Pet-Friendly Villa Charm | Patancheru",
    subtitle: 'Luxury villa architecture engineered for pets and luxury lovers.',
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
    imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    linkUrl: '/projects/'
  },
  {
    id: 'project-tanushree',
    title: "Tanushree's Residence – Earthy Luxury at Its Best | Aparna Luxor Park",
    subtitle: 'High-end organic textures and tactile finishes.',
    location: 'Aparna Luxor Park, Kondapur, Hyderabad',
    style: 'Earthy Luxury / Organic',
    size: '4,800 sq.ft. 4BHK Premium Flat',
    year: '2025',
    desc: 'An absolute masterpiece of raw luxury and sensory texture. The home relies on gorgeous local hand-troweled lime-wash wall coatings, rustic travertine countertops, textured linens, and solid timber. Every corner exhibits a highly comforting tactile warmth that makes high-end living feel peaceful and authentic.',
    brief: 'An artist requested a home entirely free of cold, glossy plastics or generic commercial laminates. She wanted a sensory, highly tactile environment focusing on natural textures, breathable organic fabrics, sustainable local masonry, and deep earth tones that reflect morning sunlight softly.',
    solution: 'We specified hand-troweled lime-wash wall treatments, solid local teakwood columns, and raw travertine washbasins. Cabinet fronts feature hand-woven organic rattan panels. Natural mineral paints and textured linens were hand-sourced, completely replacing conventional chemical coatings.',
    result: 'A breathtakingly calm, quiet, and warm organic luxury home. The walls softly diffuse Hyderabad’s harsh sunlight, creating a tactile sanctuary of comfort.',
    details: [
      'Stunning bespoke travertine wash basins and custom floating shelves',
      'Organic lime wash plaster finishes and hand-woven rattan cabinet panels',
      'Warm earthy color palette (warm terracotta, soft clay, deep forest sand, rich olive)',
      'Floor-to-ceiling customized fluted wooden columns acting as gentle dividers'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80',
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
    title: 'Top Hyderabad Interior Trends for 2026: Earthy Luxury & Smart Modular Kitchens',
    excerpt: 'Discover how Hyderabad homeowners are embracing organic textures, earthy tones, and high-performance modular kitchen designs that blend aesthetics with daily utility.',
    fullContent: 'Hyderabad’s luxury interior design space is undergoing a magnificent shift. Standard high-gloss modern interiors are making way for "Earthy Luxury." Think handcrafted lime-wash walls, organic textures, terracotta tile accents, and textured linen furniture. Additionally, the culinary hub is getting a major upgrade with smart modular kitchens. Homeowners in Maseedbanda, Kondapur, and Gachibowli are demanding heavy-duty water-retardant marine ply carcasses integrated with high-end German tandem drawer systems. This comprehensive guide highlights how to marry luxury textures with functional, heavy-use cooking features designed for Indian recipe preparation styles.',
    date: 'June 18, 2026',
    author: 'Sanjay Kumar (Design Principal)',
    category: 'Design Trends',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'blog-2',
    title: 'How to Design a Clutter-Free, Minimalist Living Room in Gachibowli Homes',
    excerpt: 'Learn the core design principles of space-saving custom furniture, hidden storage units, and soft neutral color palettes that make urban apartments look incredibly spacious.',
    fullContent: 'Urban high-rise flats in areas like Gachibowli and the Financial District present unique spatial conditions. To make a modern living room truly feel airy and free, we rely on warm minimalist principles. We utilize handles-free, ceiling-height wall storage units that physically vanish into the drywall. Multi-functional furniture, such as coffee tables that slide out to double as laptop desks, and sleek hanging TV panels with backlighting help expand visual boundaries. Dive into our step-by-step layout design checklist to turn a compact 2BHK or 3BHK living area into a high-end relaxing sanctuary.',
    date: 'May 10, 2026',
    author: 'Neha Sharma (Senior Space Stylist)',
    category: 'Minimalist Interiors',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'blog-3',
    title: 'Selecting the Perfect Pet-Friendly Fabrics and Textures for Luxury Villas',
    excerpt: 'Designing an elegant home shouldn’t mean compromising on your pet’s comfort. Read our comprehensive guide to high-performance, scratch-resistant luxury fabrics.',
    fullContent: 'Can a home with multi-pet families remain absolutely gorgeous and clean? Absolutely. In our recent custom villa design in Patancheru, we pioneered pet-inclusive luxury. The secret lies in material technology. High-durability polyurethane-coated leatherette, tight weave flat fabrics, scratch-resistant quartz tabletops, and anti-slip satin-finish tile flooring are game-changers. This guide details how you can construct cozy built-in resting corners for your pets inside main media consoles and select gorgeous high-end textiles that shed fur easily and resist liquid stains.',
    date: 'April 22, 2026',
    author: 'Rohan Mehta (Technical Architect)',
    category: 'Pet-Friendly Design',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I get started with your interior design services?',
    answer: 'Getting started with The Koncept House is easy! Simply book an online consultation through our website or visit our Hyderabad studio. We begin with a detailed discovery meeting to understand your style, floor plan, functional requirements, and estimated budget. From there, we formulate structural zoning options and design directions.'
  },
  {
    id: 'faq-2',
    question: 'Do you offer complete turnkey interior solutions?',
    answer: 'Yes, we specialize in complete end-to-end turnkey solutions. This covers space planning, 2D layout drawings, 3D photorealistic renderings, material procurement, carpentry fabrication at our own modular factory, electrical, plumbing, false ceiling, civil works, painting, and professional on-site installation. You hand over the keys and walk into a beautifully finished home.'
  },
  {
    id: 'faq-3',
    question: 'How long does a typical interior project take?',
    answer: 'A standard modular kitchen or living room remodel takes about 30 to 40 days. Complete, bespoke 2BHK/3BHK turnkey home interiors usually require 60 to 75 working days from design sign-off to delivery, depending on the complexity of customized civil work, marble installations, and wood-veneer detailing.'
  },
  {
    id: 'faq-4',
    question: 'Do you work within specific budgets?',
    answer: 'Yes, we believe premium interior design should be achievable. We customize our material specs, hardware levels, and decorative features to align with your financial guidelines. We provide highly transparent, itemized quotes with absolutely zero hidden costs, so you know exactly where every rupee is allocated.'
  },
  {
    id: 'faq-5',
    question: 'Will I get 3D designs before execution?',
    answer: 'Absolutely. We provide high-resolution, photorealistic 3D interior renders of your rooms before any physical execution begins. This lets you visualize the lighting, textures, furniture placement, and colors exactly, giving you the power to request edits before fabrication.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Mrs. Keerthi R.',
    locality: 'Gachibowli',
    text: 'Working with The Koncept House was an absolute dream. They transformed our 4BHK apartment in Gachibowli into a tranquil, organic haven. The earthy finishes, textured lime-wash, and custom wood veneer wardrobes they delivered exceeded our wild expectations. Their modular kitchen is not just breathtaking but incredibly functional!',
    rating: 5,
    initials: 'KR'
  },
  {
    name: 'Mr. Rajeev Varma',
    locality: 'Madhapur',
    text: 'Their design-led innovation is outstanding! I wanted a high-end, transitional office and lounge room that could host corporate guests but feel welcoming. They blended timeless teak paneling with Italian furniture profiles seamlessly. Everything was manufactured in their factory and installed in record time.',
    rating: 5,
    initials: 'RV'
  },
  {
    name: 'Mrs. Sunita Rao',
    locality: 'Kondapur',
    text: 'I highly recommend The Koncept House for turnkey interiors. From initial 3D renders to final handover, their team displayed immense professionalism and 100% transparency on budgets. The custom compact storage in my kitchen has made daily organization a breeze. Simply the best designers in Hyderabad!',
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
