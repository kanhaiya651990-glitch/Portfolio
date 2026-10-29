export interface ConservationInitiative {
  id: string;
  title: string;
  kicker: string;
  category: 'Reforestation' | 'Waterways' | 'Biodiversity' | 'Wildlife' | 'Youth Education';
  region: string;
  yearActive: string;
  status: 'Active Expansion' | 'Monitored Phase' | 'Seasonal Campaign' | 'Ongoing Drive';
  summary: string;
  fullNarrative: string;
  keyOutcomes: {
    metric: string;
    label: string;
    subtext: string;
  }[];
  ecologicalHighlights: string[];
  fieldMethods: string[];
  partnerCommunities: string[];
  youtubeVideoId?: string;
  youtubeTitle?: string;
  actionOpportunity: string;
  colorTheme: string;
}

export interface VideoFeature {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  focus: string;
  youtubeUrl: string;
  videoId: string;
  thumbnailSvgType: 'forest' | 'water' | 'wildlife' | 'seeds';
  description: string;
}

export interface PledgeItem {
  id: string;
  title: string;
  description: string;
  category: string;
  unit: string;
  carbonKgSavedPerUnit: number;
  treesEquivalent: number;
  waterLitresSaved: number;
  defaultValue: number;
  maxValue: number;
}

export const CONSERVATION_INITIATIVES: ConservationInitiative[] = [
  {
    id: 'himalayan-reforestation',
    title: 'Himalayan Ridge & Foothill Native Forest Regeneration',
    kicker: 'Terai-Arc & Sub-Himalayan Slopes',
    category: 'Reforestation',
    region: 'Sub-Himalayan Foothills & Catchments',
    yearActive: '2024 – Present',
    status: 'Active Expansion',
    summary: 'Mass planting of indigenous Banj Oak, Deodar, and Sal trees across erosion-prone foothill slopes to recharge drying mountain springs and stabilize fragile soils.',
    fullNarrative: 'Due to severe monsoonal runoff, unscientific hill cutting, and monoculture timber encroachment, fragile slope ecosystems have suffered catastrophic topsoil loss and disappearing perennial water springs (dhara/gadhera). This initiative organizes village Van Panchayats (forest councils) and youth volunteers to propagate climate-hardy native saplings grown in decentralized village nurseries. By focusing on multi-canopy indigenous species rather than invasive pines, the soil moisture retention capacity has surged by over 42% across restored watersheds.',
    keyOutcomes: [
      { metric: '148,500', label: 'Native Saplings Planted', subtext: '88% two-year survival rate' },
      { metric: '420 ha', label: 'Watershed Stabilized', subtext: 'Across 16 village catchments' },
      { metric: '38', label: 'Mountain Springs Recharged', subtext: 'Restored perennial flow' }
    ],
    ecologicalHighlights: [
      'Multi-tier planting: Canopy (Oak, Sal), Sub-canopy (Wild fig, Rhododendron), Groundcover (Vetiver, native clover)',
      'Constructive contour trenching along steep slopes to capture 90% of monsoon deluge',
      'Community stewardship pacts signed with 24 village councils preventing grazing until saplings mature'
    ],
    fieldMethods: [
      'Geotagged sapling tracking with quarterly survivability audits',
      'Micro-drip irrigation using harvested rainwater basins during dry pre-monsoon heatwaves',
      'Native microbial bio-inoculants mixed into compost to accelerate root establishment'
    ],
    partnerCommunities: [
      'Local Village Women Self-Help Groups (Mahila Mangal Dals)',
      'Youth volunteers affiliated with @nunabachha eco-clubs',
      'State Forest Department Extension Wings'
    ],
    actionOpportunity: 'Sponsor sapling protective bamboo tree-guards or volunteer for the upcoming monsoon planting brigade.',
    colorTheme: 'from-emerald-950 via-emerald-900 to-stone-900'
  },
  {
    id: 'river-wetland-restoration',
    title: 'Himalayan River Basin Plastic Interception & Wetland Revitalization',
    kicker: 'Riparian Buffer Restoration',
    category: 'Waterways',
    region: 'River Corridors & Oxbow Wetlands',
    yearActive: '2024 – Present',
    status: 'Ongoing Drive',
    summary: 'Community bio-barriers and regular riverbank drives trapping micro-plastics and reviving natural riparian reed buffers to protect endemic fish and bird nesting sites.',
    fullNarrative: 'Mountain river tributaries carry unprecedented volumes of single-use plastics from tourist corridors and urban dumping into lowland river basins. The team deploys locally fabricated floating bamboo debris traps at strategic choke points and leads weekly shoreline reclamation walks. Concurrently, riverbank erosion is remediated by reintroducing native reed beds (Phragmites and Typha) which naturally filter agricultural runoff and provide critical roosting grounds for migratory waterfowls.',
    keyOutcomes: [
      { metric: '34.6 t', label: 'Riverine Debris Intercepted', subtext: 'Sorted & sent to recycling facilities' },
      { metric: '18.4 km', label: 'Riparian Shoreline Reclaimed', subtext: 'Secured with natural reed barriers' },
      { metric: '14', label: 'Macroinvertebrate Bio-Stations', subtext: 'Active water-quality testing hubs' }
    ],
    ecologicalHighlights: [
      'Non-invasive floating booms made of bamboo and recycled mooring rope catching debris without harming fish',
      'Wetland bio-filtration zones absorbing nitrates and sediment before entering primary river arteries',
      'Return of key indicator species including Indian River Otter (Lutrogale perspicillata) sightings'
    ],
    fieldMethods: [
      'Bi-weekly community cleanup sweeps with comprehensive waste segregation',
      'Macro-invertebrate biotic indexing conducted with local biology students',
      'Zero-plastic awareness signage placed at river pilgrimage and trekking access heads'
    ],
    partnerCommunities: [
      'Riverside Fisherman Cooperatives',
      'Student River Rangers Corps',
      'Municipal Waste Management Teams'
    ],
    actionOpportunity: 'Join our weekend riverbank sorting patrol or adopt a 500-meter riparian stretch.',
    colorTheme: 'from-cyan-950 via-blue-900 to-stone-900'
  },
  {
    id: 'urban-miyawaki-groves',
    title: 'Community Miyawaki Micro-Forests in Peri-Urban & School Commons',
    kicker: 'Dense Botanical Refuges',
    category: 'Biodiversity',
    region: 'Township Borders & Educational Campuses',
    yearActive: '2024 – Present',
    status: 'Active Expansion',
    summary: 'Transforming degraded vacant lots, school perimeters, and railway verges into ultra-dense, self-sustaining native micro-forests that grow 10x faster.',
    fullNarrative: 'Rapid urban sprawl has fragmented habitats and created severe heat-island anomalies. Utilizing the Akira Miyawaki afforestation method, this effort prepares rich compost-amended soil beds and plants 30 to 40 complementary native species at 3 saplings per square meter. Within 24 months, these groves become dense, maintenance-free avian sanctuaries that drop ambient surface temperatures by up to 4°C and filter urban particulate emissions.',
    keyOutcomes: [
      { metric: '26', label: 'Micro-Forests Established', subtext: 'Across schools & civic spaces' },
      { metric: '320%', label: 'Pollinator Density Surge', subtext: 'Measured by biodiversity surveys' },
      { metric: '14,200', label: 'Square Meters Greened', subtext: 'Absorbing 28+ tonnes CO₂/yr' }
    ],
    ecologicalHighlights: [
      'Strict multi-layer stratification: shrubs, sub-trees, primary canopy trees, and emergent giant flora',
      'Exclusive usage of pre-colonized soil microbiology with indigenous leaf mulch',
      'Zero synthetic pesticides or artificial fertilizers throughout the lifecycle'
    ],
    fieldMethods: [
      'Excavation to 1-meter depth enriched with rice husk, coir peat, and decomposed farm manure',
      'Randomized natural spacing mimicking wild climax forest density',
      'Intensive weed-control and watering exclusively during the initial 18-month establishment window'
    ],
    partnerCommunities: [
      'Public & Rural Schools',
      'Urban Eco-Action Collectives',
      'Local Horticulture Experts'
    ],
    actionOpportunity: 'Nominate a degraded school or vacant public patch to be converted into an eco-grove.',
    colorTheme: 'from-teal-950 via-emerald-900 to-stone-900'
  },
  {
    id: 'wildlife-corridors-camera-traps',
    title: 'Community-Led Wildlife Corridors & Human-Wildlife Coexistence',
    kicker: 'Biodiversity Corridors',
    category: 'Wildlife',
    region: 'Forest Buffer Zones & Migration Paths',
    yearActive: '2023 – Present',
    status: 'Monitored Phase',
    summary: 'Equipping rural border villages with solar camera traps, early warning sensor buzzers, and native thorny hedgerows to eliminate crop-raiding conflict and deter poaching.',
    fullNarrative: 'As animals migrate between national parks and state forest ranges, they often traverse agricultural village fields, leading to accidental crop trampling, retaliatory attacks, and wire-snare traps. Kanhaiya and field volunteers train youth in border villages to manage solar-powered trail camera traps and install bee-fence deterrents (elephants avoid bees naturally). This dual strategy safeguards wildlife while protecting farmer livelihoods without harmful electric fences.',
    keyOutcomes: [
      { metric: '120 km', label: 'Active Migration Corridors', subtext: 'Continuously monitored' },
      { metric: '0', label: 'Fatal Conflict Incidents', subtext: 'In protected buffer zones (2025–26)' },
      { metric: '48', label: 'Solar Trail Cameras Deployed', subtext: 'Maintained by village youth monitors' }
    ],
    ecologicalHighlights: [
      'Living bee-fence and cactus bio-barriers keeping wildlife safely within designated corridors',
      'Real-time automated SMS alert system notifying villagers when nocturnal herd movements are logged',
      'Snare-sweeping patrols that deactivated over 90 illegal poaching traps'
    ],
    fieldMethods: [
      'Youth camera-trap technician training with digital wildlife cataloging',
      'Rapid community compensation assistance for verified crop damage within 48 hours',
      'Creation of solar-pumped waterholes deep inside core forest to deter animals from venturing out'
    ],
    partnerCommunities: [
      'Forest Fringe Farmer Collectives',
      'Youth Wildlife Scouts',
      'Veterinary Wildlife Rescue Volunteers'
    ],
    actionOpportunity: 'Sponsor a solar camera trap unit or volunteer for seasonal snare-sweeping hikes.',
    colorTheme: 'from-amber-950 via-stone-900 to-stone-950'
  },
  {
    id: 'nunabachha-digital-education',
    title: 'Youth Eco-Literacy & Digital Stewardship by @nunabachha',
    kicker: 'Digital Conservation Storytelling',
    category: 'Youth Education',
    region: 'Global & Regional Hindi-Speaking Communities',
    yearActive: '2024 – Present',
    status: 'Active Expansion',
    summary: 'Harnessing the engaging reach of @nunabachha video animations and nature reels to teach children and families about biodiversity, forest care, and water conservation.',
    fullNarrative: 'Formal environmental education often lacks emotional resonance for younger generations glued to digital screens. Through the @nunabachha platform (https://www.youtube.com/@nunabachha), we translate complex ecological challenges—such as plastic degradation cycles, pollinator decline, and tree carbon absorption—into delightful, memorable 3D animated tales, field shorts, and songs. By reaching children during formative years, we cultivate lifelong eco-stewards who prompt their families to recycle, plant trees, and appreciate wildlife.',
    keyOutcomes: [
      { metric: '250,000+', label: 'Young Minds Reached', subtext: 'Across YouTube & school screenings' },
      { metric: '65+', label: 'Eco-Education Episodes', subtext: 'Covering flora, fauna & clean water' },
      { metric: '14', label: 'School Eco-Clubs Formed', subtext: 'Adopting hands-on nature projects' }
    ],
    ecologicalHighlights: [
      'Accessible, multilingual visual narratives that demystify complex environmental sciences',
      'Actionable weekend nature homework: counting backyard birds, planting seed pots, zero-waste lunchboxes',
      'Direct bridges connecting online viewers to real-world grassroots conservation drives'
    ],
    fieldMethods: [
      'Collaborative production between conservation biologists, local animators, and teachers',
      'Free downloadable classroom discussion kits paired with YouTube episodes',
      'Interactive student Q&A sessions and field nature scavenger hunts'
    ],
    partnerCommunities: [
      '@nunabachha Creative Studio & Community',
      'Rural & Semi-Urban Primary School Networks',
      'Children Eco-Advocacy Ambassadors'
    ],
    actionOpportunity: 'Subscribe to @nunabachha on YouTube, share episodes with local schools, or request a screening pack.',
    colorTheme: 'from-emerald-950 via-teal-900 to-stone-900'
  },
  {
    id: 'indigenous-seed-banking',
    title: 'Indigenous Wild Seed Banking & Pre-Monsoon Seedball Dispersion',
    kicker: 'Native Seed Sovereignty',
    category: 'Biodiversity',
    region: 'Arid Foothills & Ravines',
    yearActive: '2024 – Present',
    status: 'Seasonal Campaign',
    summary: 'Preserving endangered wild herbs and hardy tree species in community seed banks, rolling clay seedballs, and dispersing them across barren ravines before monsoons.',
    fullNarrative: 'Monoculture farming and commercial timber have marginalized hardy wild grasses, medicinal herbs, and indigenous fruit trees that once prevented soil degradation. This initiative establishes community seed libraries managed by rural elders who identify and collect wild seeds. During the dry season, schools and community volunteers roll millions of clay-compost seedballs (beej-gole) containing chili powder (to repel rodents) and biochar. Dispersed right before monsoon rains, they achieve rapid germination in inaccessible terrains.',
    keyOutcomes: [
      { metric: '500,000+', label: 'Seedballs Rolled & Deployed', subtext: 'Across rocky arid hills' },
      { metric: '82', label: 'Indigenous Species Preserved', subtext: 'Stored in 4 climate-safe banks' },
      { metric: '3,800', label: 'Students & Elders Involved', subtext: 'Bridging generational wisdom' }
    ],
    ecologicalHighlights: [
      'Self-contained germination capsules: Clay shields from desiccation while biochar nourishes early roots',
      'Zero tillage or machinery needed—perfect for precipitous rocky ravines and degraded roadside slopes',
      'Revival of wild medicinal shrubs like Giloy, Brahmi, Haritaki, and native drought-hardy grasses'
    ],
    fieldMethods: [
      'Ethnobotanical foraging treks guided by tribal elders and village botanists',
      'Standardized seed viability and moisture-content testing in terracotta clay vessels',
      'Pre-monsoon community drone and volunteer foot-scouting dispersal routes'
    ],
    partnerCommunities: [
      'Elder Council of Seed Guardians',
      'Rural Youth Volunteers',
      'Regional Agricultural Universities'
    ],
    actionOpportunity: 'Attend a seedball rolling workshop or donate organic seeds from your native territory.',
    colorTheme: 'from-stone-900 via-amber-950 to-emerald-950'
  }
];

export const NUNABACHHA_VIDEOS: VideoFeature[] = [
  {
    id: 'vid-1',
    title: 'The Great River Mystery: Where Does Plastic Go?',
    subtitle: 'Nuna Bachha Eco-Adventures · Episode 12',
    duration: '4:15',
    focus: 'Plastic Pollution & Marine Life',
    youtubeUrl: 'https://www.youtube.com/@nunabachha',
    videoId: 'nunabachha-river-plastic',
    thumbnailSvgType: 'water',
    description: 'Follow our animated young friends as they trace a discarded bottle from a mountain stream down to the ocean, discovering how community cleanups save baby turtles and otters.'
  },
  {
    id: 'vid-2',
    title: 'Secret Life of the Ancient Oak: Who Lives in the Canopy?',
    subtitle: 'Nuna Bachha Eco-Adventures · Episode 15',
    duration: '5:40',
    focus: 'Native Forest Ecosystems',
    youtubeUrl: 'https://www.youtube.com/@nunabachha',
    videoId: 'nunabachha-forest-canopy',
    thumbnailSvgType: 'forest',
    description: 'An enchanting journey through the multi-layered canopy of an indigenous Himalayan oak tree, meeting woodpeckers, honeybees, tree frogs, and subterranean fungal networks.'
  },
  {
    id: 'vid-3',
    title: 'How to Make Your Own Seedball: A Guide for Kids',
    subtitle: 'Green Hands Activity Series · DIY Tutorial',
    duration: '3:50',
    focus: 'Hands-on Community Greening',
    youtubeUrl: 'https://www.youtube.com/@nunabachha',
    videoId: 'nunabachha-seedball-guide',
    thumbnailSvgType: 'seeds',
    description: 'A fun, colorful step-by-step cartoon guide teaching children how to mix soil, compost, and seeds to green up barren hillsides and backyards before monsoon rains.'
  },
  {
    id: 'vid-4',
    title: 'The Gentle Giants: How Elephants Build the Jungle',
    subtitle: 'Wildlife Wonder Series · Episode 08',
    duration: '6:10',
    focus: 'Wildlife Migration & Corridors',
    youtubeUrl: 'https://www.youtube.com/@nunabachha',
    videoId: 'nunabachha-wildlife-elephants',
    thumbnailSvgType: 'wildlife',
    description: 'Understanding why elephants walk long migration corridors, how they create waterholes for smaller animals, and why human-wildlife peaceful coexistence is essential.'
  }
];

export const PLEDGE_OPTIONS: PledgeItem[] = [
  {
    id: 'plant-trees',
    title: 'Plant & Nurture Native Saplings',
    description: 'Pledge to plant and care for indigenous trees in your local community or support our nursery.',
    category: 'Reforestation',
    unit: 'Saplings',
    carbonKgSavedPerUnit: 22,
    treesEquivalent: 1,
    waterLitresSaved: 80,
    defaultValue: 5,
    maxValue: 100
  },
  {
    id: 'river-cleanup',
    title: 'Join Riverbank or Park Cleanups',
    description: 'Commit hours to collecting and segregating litter along local water bodies or trails.',
    category: 'Waterways',
    unit: 'Hours',
    carbonKgSavedPerUnit: 14,
    treesEquivalent: 0.6,
    waterLitresSaved: 250,
    defaultValue: 4,
    maxValue: 40
  },
  {
    id: 'plastic-free',
    title: 'Eliminate Single-Use Plastics',
    description: 'Switch to cloth bags, steel bottles, and zero disposable packaging for personal use.',
    category: 'Zero Waste',
    unit: 'Months',
    carbonKgSavedPerUnit: 18,
    treesEquivalent: 0.8,
    waterLitresSaved: 120,
    defaultValue: 3,
    maxValue: 12
  },
  {
    id: 'youth-screenings',
    title: 'Share @nunabachha Videos with Kids',
    description: 'Show nature cartoons and discuss environmental care with children at school or home.',
    category: 'Education',
    unit: 'Kids Reached',
    carbonKgSavedPerUnit: 10,
    treesEquivalent: 0.4,
    waterLitresSaved: 50,
    defaultValue: 10,
    maxValue: 100
  },
  {
    id: 'seedballs-deployed',
    title: 'Make & Disperse Seedballs',
    description: 'Roll native seedballs with clay and compost to toss on vacant edges and dry slopes.',
    category: 'Biodiversity',
    unit: 'Seedballs',
    carbonKgSavedPerUnit: 5,
    treesEquivalent: 0.2,
    waterLitresSaved: 30,
    defaultValue: 20,
    maxValue: 200
  }
];

export const GET_INVOLVED_WAYS = [
  {
    id: 'volunteer',
    title: 'Ground Field Volunteering',
    kicker: 'Hands-on Action',
    summary: 'Join weekend sapling planting brigades, river debris sorting, and seedball workshops across regional hubs.',
    timeCommitment: '2–4 hours / session',
    suitableFor: 'Individuals, students, families, corporate groups',
    ctaLabel: 'Sign Up as Field Volunteer'
  },
  {
    id: 'school-partner',
    title: 'Bring @nunabachha to Your School',
    kicker: 'Eco-Literacy Outreach',
    summary: 'Host a curated nature screening, student workshop, and receive free downloadable cartoon activity workbooks.',
    timeCommitment: '1-hour classroom assembly or eco-club session',
    suitableFor: 'Educators, headmasters, parent associations',
    ctaLabel: 'Request School Pack'
  },
  {
    id: 'sponsor',
    title: 'Sponsor Conservation Supplies',
    kicker: 'Direct Material Support',
    summary: 'Directly fund bamboo sapling tree guards ($3/tree), community cleanup safety kits ($18), or camera trap sensors ($75).',
    timeCommitment: 'One-time or monthly sponsorship',
    suitableFor: 'Eco-conscious benefactors and philanthropic partners',
    ctaLabel: 'View Sponsorship Tiers'
  },
  {
    id: 'report-area',
    title: 'Report Degraded Habitats',
    kicker: 'Citizen Ecology',
    summary: 'Map and photograph degraded watersheds, barren public verges, or plastic choke-points needing community restoration.',
    timeCommitment: '15 minutes per submission',
    suitableFor: 'Local hikers, residents, rural observers',
    ctaLabel: 'Submit Habitat Report'
  }
];

export const SPONSORSHIP_TIERS = [
  {
    name: 'Seedling Guardian',
    amount: '₹500 / $6',
    impact: 'Protects 5 native saplings with organic compost and bamboo tree guards for 2 seasons',
    items: ['5 indigenous saplings', 'Bamboo protective guards', 'Quarterly growth photo update']
  },
  {
    name: 'River Cleanup Gear',
    amount: '₹1,500 / $18',
    impact: 'Equips 4 community volunteers with puncture-proof gloves, wading gear, and debris sacks',
    items: ['4 pairs heavy-duty gloves', 'Recycled collection sacks', 'Safety first-aid kit contribution']
  },
  {
    name: 'School Nature Club Kit',
    amount: '₹3,500 / $42',
    impact: 'Supplies 1 school with 50 @nunabachha activity booklets, magnifying glasses, and 30 seed kits',
    items: ['Printed color activity workbooks', 'Magnifiers & soil testing vials', 'Seedball clay package']
  },
  {
    name: 'Wildlife Camera Steward',
    amount: '₹7,500 / $90',
    impact: 'Funds 1 solar-powered trail camera trap monitoring migration corridors for 1 full year',
    items: ['Solar trail camera unit', 'Youth technician field stipend', 'Monthly wildlife sighting logs']
  }
];

export const FAQS = [
  {
    q: 'What is the connection between this initiative and the @nunabachha YouTube channel?',
    a: 'The initiative was created by Kanhaiya to unite physical, grassroots field conservation (planting trees, river cleanups, wildlife protection) with high-impact digital youth outreach. The @nunabachha YouTube channel creates accessible, joyful cartoons and educational shorts in Hindi and regional dialects so that children and families understand why conservation matters before taking action in their own backyards.'
  },
  {
    q: 'How can I get directly in touch with Kanhaiya?',
    a: 'You can write directly to Kanhaiya at Kanhaiya65190000@gmail.com. We also have a quick-contact form built into this website that lets you compose a pre-formatted email regarding volunteering, school screenings, partnerships, or donations.'
  },
  {
    q: 'Are the tree-planting drives using native species?',
    a: 'Yes, strictly 100% native. We never plant commercial timber monocultures like eucalyptus or pine, which deplete groundwater. Instead, we plant diverse local species such as Banj Oak (Quercus leucotrichophora), Sal (Shorea robusta), Deodar, Rhododendron, and native wild figs that replenish natural aquifers and support local bird and pollinator populations.'
  },
  {
    q: 'Can our school or organization host a free @nunabachha screening?',
    a: 'Absolutely. All educational screening kits and discussion guides are provided completely free of charge to schools, non-profits, and community centers. Simply contact us through the form or email Kanhaiya65190000@gmail.com with your school name and approximate student count.'
  },
  {
    q: 'How are community volunteers organized?',
    a: 'Volunteer drives are scheduled primarily on weekends and before the monsoon season. We notify volunteers via email newsletter and group messages. Safety gloves, tools, and snacks are provided on-site.'
  }
];
