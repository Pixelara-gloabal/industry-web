export type ProductSpecification = {
  label: string;
  value: string;
};

export type ProductDownload = {
  title: string;
  type: string;
  size: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  categoryId: string;
  tagline: string;
  description: string;
  image?: string;
  features: string[];
  specifications: ProductSpecification[];
  applications: string[];
  downloads: ProductDownload[];
  diagramType:
    | "smsr"
    | "reducer"
    | "gearbox"
    | "conveyor-gear"
    | "pump"
    | "pulley"
    | "mag-belt"
    | "tensioner"
    | "pillow-block"
    | "plummer-block"
    | "mag-drum"
    | "suspension-magnet";
};

export const productCategories = [
  {
    id: "gearboxes-drives",
    title: "Gearboxes & Drives",
    description:
      "Heavy-duty power transmission units engineered for high torque density, continuous operation, and extreme industrial environments.",
    image: "/images/industrial/smsr-gearbox.jpg",
    count: 5,
  },
  {
    id: "conveyor-components",
    title: "Conveyor Components",
    description:
      "Precision-machined pulleys, tensioners, and specialized belt systems designed for seamless material handling.",
    image: "/images/industrial/conveyor-drive.jpg",
    count: 3,
  },
  {
    id: "bearings-mechanical-components",
    title: "Bearings & Mechanical Components",
    description:
      "Cast iron and cast steel housing blocks engineered for heavy radial loads and severe contamination protection.",
    image: "/images/industrial/smsr-gearbox.jpg",
    count: 2,
  },
  {
    id: "magnetic-separation",
    title: "Magnetic Separation",
    description:
      "High-intensity permanent and electromagnetic separators for tramp iron removal and mineral concentration.",
    image: "/images/industrial/magnetic-separator.jpg",
    count: 2,
  },
];

export const products: Product[] = [
  {
    slug: "smsr-gearbox",
    name: "SMSR Gearbox",
    category: "Gearboxes & Drives",
    categoryId: "gearboxes-drives",
    tagline: "Shaft-Mounted Speed Reducer engineered for heavy-duty torque application",
    image: "/images/industrial/smsr-gearbox.jpg",
    description:
      "The Pixelara Shaft-Mounted Speed Reducer (SMSR) features precision helical gearing, high load capacity alloy steel shafts, and robust cast iron housing. Mounts directly onto the driven shaft to eliminate foundation requirements and coupling alignment issues.",
    features: [
      "Precision hardened alloy steel helical gears for up to 98% mechanical efficiency",
      "Direct shaft mounting with hub bushing system for fast installation",
      "Integrated backstop anti-runback option for inclined belt conveyors",
      "Heavy-duty double-lip oil seals with dust exclusion guards",
      "Taper roller bearings on high-load output sleeves",
    ],
    specifications: [
      { label: "Ratios Available", value: "5:1, 13:1, 20:1, 25:1" },
      { label: "Torque Range", value: "450 Nm to 18,500 Nm" },
      { label: "Power Output", value: "0.75 kW to 160 kW" },
      { label: "Housing Material", value: "High-tensile GG25 Cast Iron" },
      { label: "Mounting Position", value: "Universal (Horizontal / Inclined)" },
      { label: "Certifications", value: "ISO 9001:2015, CE, ATEX Zone 22" },
    ],
    applications: [
      "Belt Conveyor Systems",
      "Quarry Aggregate Screen Drives",
      "Asphalt Mixing Plants",
      "Grain Bucket Elevators",
    ],
    downloads: [
      { title: "SMSR Technical Engineering Spec Sheet (PDF)", type: "PDF", size: "2.4 MB" },
      { title: "2D/3D CAD STEP Model Package", type: "ZIP/STEP", size: "8.1 MB" },
      { title: "Installation & Maintenance Manual", type: "PDF", size: "1.8 MB" },
    ],
    diagramType: "smsr",
  },
  {
    slug: "shaft-mounted-speed-reducer",
    name: "Shaft Mounted Speed Reducer",
    category: "Gearboxes & Drives",
    categoryId: "gearboxes-drives",
    tagline: "Compact power transmission for harsh mining & cement operations",
    image: "/images/industrial/smsr-gearbox.jpg",
    description:
      "Engineered for high shock-load tolerance, Pixelara Shaft Mounted Speed Reducers provide uninterrupted speed reduction for continuous production lines. Equipped with ground helical gear profiles for ultra-quiet operation and low thermal rise.",
    features: [
      "Carburized and ground case-hardened alloy gearing",
      "Compact footprint requiring zero floor space or baseplates",
      "Flexible motor mount platform with V-belt tensioning adjustment",
      "Synthetic lubricant pre-fill option for extreme temperature spans",
    ],
    specifications: [
      { label: "Ratios Available", value: "5:1 to 30:1" },
      { label: "Torque Range", value: "600 Nm to 22,000 Nm" },
      { label: "Input Speed", value: "1440 RPM nominal" },
      { label: "Bore Diameters", value: "30 mm to 125 mm" },
      { label: "Operating Temp", value: "-25°C to +85°C" },
    ],
    applications: [
      "Cement Kiln Feeders",
      "Coal Processing Conveyors",
      "Waste Recycling Shredders",
    ],
    downloads: [
      { title: "Speed Reducer Dimensional Catalog", type: "PDF", size: "3.1 MB" },
      { title: "CAD Drawing (DXF/DWG)", type: "CAD", size: "4.5 MB" },
    ],
    diagramType: "reducer",
  },
  {
    slug: "shaft-mounted-gearbox",
    name: "Shaft Mounted Gearbox",
    category: "Gearboxes & Drives",
    categoryId: "gearboxes-drives",
    tagline: "Modular right-angle & parallel drive units for bulk handling",
    image: "/images/industrial/smsr-gearbox.jpg",
    description:
      "Versatile shaft-mounted drive units built for easy torque arm attachment and vibration isolation. Features oil-bath splash lubrication and external sight glass indicators for minimal maintenance.",
    features: [
      "Modular torque arm with rubber shock damping bush",
      "Option for integrated mechanical backstop clutch",
      "High strength shaft sleeve with taper locking collar",
      "Dual oil sight level glasses for vertical or horizontal mounting",
    ],
    specifications: [
      { label: "Ratio Range", value: "10:1 to 25:1" },
      { label: "Torque Rating", value: "up to 14,000 Nm" },
      { label: "Efficiency", value: "> 96%" },
      { label: "Housing Type", value: "Monoblock Rigid Cast Frame" },
    ],
    applications: [
      "Fertilizer Bagging Plants",
      "Sand Washing Plants",
      "Port Ship Unloaders",
    ],
    downloads: [
      { title: "Shaft Gearbox Selection Guide", type: "PDF", size: "1.9 MB" },
    ],
    diagramType: "gearbox",
  },
  {
    slug: "conveyor-gearbox",
    name: "Conveyor Gearbox",
    category: "Gearboxes & Drives",
    categoryId: "gearboxes-drives",
    tagline: "High-torque bevel-helical gearbox for long-distance belt conveyors",
    image: "/images/industrial/conveyor-drive.jpg",
    description:
      "Designed specifically to meet the high inertia starting loads and continuous duty cycles of overland mining belt conveyors. Reinforced housing absorbs severe axial thrust and heavy belt tension stresses.",
    features: [
      "Reinforced heavy-wall cast steel housing for zero deflection",
      "Forced oil circulation cooling pump option for continuous severe duty",
      "Built-in temperature & vibration sensor probe ports",
      "Solid shaft or hollow output shaft with shrink disc connection",
    ],
    specifications: [
      { label: "Power Rating", value: "15 kW to 450 kW" },
      { label: "Output Torque", value: "up to 65,000 Nm" },
      { label: "Gear Types", value: "Spiral Bevel + Helical" },
      { label: "Cooling Method", value: "Air-fan / Heat Exchanger Optional" },
    ],
    applications: [
      "Overland Mining Belt Conveyors",
      "Crusher Feed Belts",
      "Barge Loading Systems",
    ],
    downloads: [
      { title: "Heavy Conveyor Drive Specification Sheet", type: "PDF", size: "4.2 MB" },
    ],
    diagramType: "conveyor-gear",
  },
  {
    slug: "gear-oil-pump",
    name: "Gear Oil Pump",
    category: "Gearboxes & Drives",
    categoryId: "gearboxes-drives",
    tagline: "Positive displacement gear pump for industrial lube & hydraulic transfer",
    image: "/images/industrial/smsr-gearbox.jpg",
    description:
      "High-precision external gear pumps designed for continuous lubrication, oil filtration, and hydraulic fluid circulation in heavy machinery and gearbox lube systems.",
    features: [
      "Micro-finished hardened steel spur gears for pulseless delivery",
      "Self-priming positive displacement design up to 10 bar pressure",
      "High temperature Viton mechanical seals",
      "Bypass pressure relief valve integrated into pump casing",
    ],
    specifications: [
      { label: "Flow Rate", value: "10 LPM to 250 LPM" },
      { label: "Operating Pressure", value: "up to 12 Bar" },
      { label: "Viscosity Range", value: "10 cSt to 5,000 cSt" },
      { label: "Fluid Temp", value: "up to 180°C" },
    ],
    applications: [
      "Gearbox Forced Lubrication Systems",
      "Hydraulic Power Packs",
      "Fuel Oil & Lube Transfer",
    ],
    downloads: [
      { title: "Gear Pump Flow Rates & Curves Manual", type: "PDF", size: "1.5 MB" },
    ],
    diagramType: "pump",
  },
  {
    slug: "taper-lock-pulley",
    name: "Taper Lock Pulley",
    category: "Conveyor Components",
    categoryId: "conveyor-components",
    tagline: "Dynamically balanced V-belt and drive pulleys with split taper bushings",
    image: "/images/industrial/conveyor-drive.jpg",
    description:
      "Precision machined grey cast iron V-belt pulleys with taper-lock bushing system for quick shaft keyway fitting and removal without shaft distortion.",
    features: [
      "Machined according to ISO 4183 standard V-belt groove profile",
      "Dynamically balanced up to 30 m/s rim speed (Grade G6.3)",
      "Phosphated surface finish for corrosion resistance",
      "Standardized taper bush sizes (1008 to 5050)",
    ],
    specifications: [
      { label: "Diameter Range", value: "63 mm to 1250 mm" },
      { label: "Groove Options", value: "SPZ, SPA, SPB, SPC (1 to 10 Grooves)" },
      { label: "Material", value: "GG25 High Grade Cast Iron" },
      { label: "Balancing", value: "Dynamic Balancing ISO 1940" },
    ],
    applications: [
      "Motor Drive Power Transmissions",
      "Conveyor Head & Tail Drives",
      "Fan & Blower Systems",
    ],
    downloads: [
      { title: "Taper Lock Bushing & Pulley Dimension Chart", type: "PDF", size: "2.8 MB" },
    ],
    diagramType: "pulley",
  },
  {
    slug: "magnetic-conveyor-belt",
    name: "Magnetic Conveyor Belt",
    category: "Conveyor Components",
    categoryId: "conveyor-components",
    tagline: "Heavy-duty rubber & steel cord belts with integrated magnetic tracking",
    image: "/images/industrial/magnetic-separator.jpg",
    description:
      "Specialized conveyor belts built with oil-resistant rubber covers, high tensile steel cord cords, and magnetic slide bed compatibility for ferrous material elevation.",
    features: [
      "Cut and gouge resistant top cover rubber (DIN-X grade)",
      "Low friction anti-static bottom fabric cover",
      "Heat resistant options up to 200°C for foundry sinter lines",
      "Vulcanized hot-splice jointing for maximum tensile holding",
    ],
    specifications: [
      { label: "Belt Widths", value: "500 mm to 2200 mm" },
      { label: "Tensile Rating", value: "EP200 to EP2500" },
      { label: "Cover Grade", value: "DIN 22102 X, Y, Z / MOR" },
      { label: "Ply Construction", value: "2 Ply to 6 Ply Synthetic Fabric" },
    ],
    applications: [
      "Scrap Metal Recycling Belts",
      "Mining Ore Inclined Conveyors",
      "Foundry Sand Handling",
    ],
    downloads: [
      { title: "Conveyor Belt Specification & Splicing Data Sheet", type: "PDF", size: "3.5 MB" },
    ],
    diagramType: "mag-belt",
  },
  {
    slug: "belt-conveyor-tensioner",
    name: "Belt Conveyor Tensioner",
    category: "Conveyor Components",
    categoryId: "conveyor-components",
    tagline: "Hydraulic and screw-takeup tensioning systems for conveyor belts",
    image: "/images/industrial/conveyor-drive.jpg",
    description:
      "Automatic and screw-operated belt tensioners that maintain optimum belt tension, prevent pulley slip, and minimize carcass stress under variable payload conditions.",
    features: [
      "Heavy steel channel frame with acme threaded lead screws",
      "Automated hydraulic accumulator tension sensing option",
      "Dust-proof protected thread sleeves",
      "Bi-directional stroke travel up to 1200 mm",
    ],
    specifications: [
      { label: "Takeup Stroke", value: "300 mm to 1500 mm" },
      { label: "Max Force Load", value: "up to 120 kN" },
      { label: "Frame Material", value: "Structural Carbon Steel / Hot Dip Galv" },
    ],
    applications: [
      "Bulk Material Handling Conveyors",
      "Quarry Aggregate Feed Belts",
      "Port Grain Loading Facilities",
    ],
    downloads: [
      { title: "Takeup Tensioner Dimensional Engineering Data", type: "PDF", size: "1.7 MB" },
    ],
    diagramType: "tensioner",
  },
  {
    slug: "pillow-block-bearings",
    name: "Pillow Block Bearings",
    category: "Bearings & Mechanical Components",
    categoryId: "bearings-mechanical-components",
    tagline: "Self-aligning mounted bearing units with cast iron housing",
    image: "/images/industrial/smsr-gearbox.jpg",
    description:
      "Heavy-duty mounted bearing units featuring chrome steel insert bearings, self-aligning spherical outer rings, and triple-lip flingers for extreme dirt protection.",
    features: [
      "Self-aligning capability up to ±2° shaft misalignment",
      "High grade chrome steel (GCR15) insert bearing",
      "Grease nipple lube port with re-lubrication groove",
      "Eccentric locking collar or set-screw shaft attachment",
    ],
    specifications: [
      { label: "Shaft Diameter", value: "12 mm to 140 mm (UCP Series)" },
      { label: "Housing Material", value: "HT200 Grey Cast Iron / Ductile Iron" },
      { label: "Dynamic Load Rating", value: "up to 180 kN" },
      { label: "Sealing Type", value: "Triple Lip R-Seal + Steel Flinger" },
    ],
    applications: [
      "Conveyor Roller Shaft Support",
      "Industrial Fans & Blowers",
      "Agricultural Machinery",
    ],
    downloads: [
      { title: "Pillow Block Mounted Bearing Unit Catalog", type: "PDF", size: "3.8 MB" },
    ],
    diagramType: "pillow-block",
  },
  {
    slug: "plummer-blocks",
    name: "Plummer Blocks",
    category: "Bearings & Mechanical Components",
    categoryId: "bearings-mechanical-components",
    tagline: "Split plummer block housings (SNL / SBD) for heavy radial load applications",
    image: "/images/industrial/smsr-gearbox.jpg",
    description:
      "Heavy industrial split bearing housings for spherical roller bearings on adapter sleeves. Designed for severe shock loads, thermal expansion shaft movement, and oil or grease lube systems.",
    features: [
      "Split housing cap design for easy bearing inspection and replacement",
      "Labyrinth or taconite heavy-duty dust seals",
      "Reinforced base for heavy bolt torque tightness",
      "Oil lubrication oil-level sight glass option",
    ],
    specifications: [
      { label: "Series Available", value: "SNL 500, SNL 600, SBD Heavy Duty" },
      { label: "Shaft Sizes", value: "20 mm to 400 mm" },
      { label: "Material Options", value: "Cast Iron / Cast Steel / Spheroidal Graphite" },
    ],
    applications: [
      "Mining Pulley Shaft Mounts",
      "Steel Mill Roller Tables",
      "Paper Mill Drying Drums",
    ],
    downloads: [
      { title: "Plummer Block Engineering & Seal Selection Guide", type: "PDF", size: "4.0 MB" },
    ],
    diagramType: "plummer-block",
  },
  {
    slug: "magnetic-drum-pulley",
    name: "Magnetic Drum Pulley",
    category: "Magnetic Separation",
    categoryId: "magnetic-separation",
    tagline: "Permanent magnetic head pulleys for automatic tramp iron separation",
    image: "/images/industrial/magnetic-separator.jpg",
    description:
      "Replaces standard conveyor head pulleys to automatically capture and discharge tramp iron particles, protecting downstream crushers, shredders, and gearboxes.",
    features: [
      "High intensity Neodymium (NdFeB) or Strontium Ferrite magnet circuit",
      "Continuous 360° deep magnetic reach field",
      "Non-magnetic stainless steel (AISI 304) outer shell",
      "Machined shaft with heavy keyways and taper lock hubs",
    ],
    specifications: [
      { label: "Drum Diameters", value: "200 mm to 1200 mm" },
      { label: "Belt Width Fit", value: "400 mm to 2000 mm" },
      { label: "Gauss Strength", value: "1,500 Gauss to 8,500 Gauss" },
      { label: "Magnet Type", value: "Rare-Earth Neodymium N45 / Ferrite" },
    ],
    applications: [
      "Coal Processing Tramp Iron Removal",
      "Slag & Metal Recycling Facilities",
      "Quarry Crusher Protection",
    ],
    downloads: [
      { title: "Magnetic Drum Pulley Selection & Gauss Calculator", type: "PDF", size: "2.6 MB" },
    ],
    diagramType: "mag-drum",
  },
  {
    slug: "suspension-magnet",
    name: "Suspension Magnet",
    category: "Magnetic Separation",
    categoryId: "magnetic-separation",
    tagline: "Overband self-cleaning and manual suspension magnets for heavy conveyors",
    image: "/images/industrial/magnetic-separator.jpg",
    description:
      "Cross-belt overband magnetic separators positioned above conveyor belts to extract heavy tramp metal, steel rods, and iron contaminants from moving material beds.",
    features: [
      "Deep magnetic field penetration up to 550 mm burden depth",
      "Self-cleaning continuous rubber belt overband with armor cleats",
      "Class H insulated copper coils for electromagnet versions",
      "Heavy eye-bolts for easy overhead crane suspension",
    ],
    specifications: [
      { label: "Suspension Height", value: "150 mm to 550 mm" },
      { label: "Conveyor Width Fit", value: "650 mm to 2400 mm" },
      { label: "Magnet Circuit", value: "Permanent Rare Earth / Oil-cooled Electromagnet" },
      { label: "Duty Cycle", value: "100% Continuous S1 Duty" },
    ],
    applications: [
      "Power Plant Coal Conveyors",
      "Municipal Solid Waste Recycling",
      "Biomass & Woodchip Operations",
    ],
    downloads: [
      { title: "Overband Suspension Magnet Engineering Sheet", type: "PDF", size: "3.3 MB" },
    ],
    diagramType: "suspension-magnet",
  },
];

export const industriesData = [
  {
    id: "mining",
    name: "Mining & Minerals",
    tagline: "Rugged power transmission for severe impact, dust, and continuous tonnage",
    image: "/images/industrial/mining-conveyor.jpg",
    description:
      "Mining operations demand zero unscheduled downtime under extreme shock loads, abrasive dust, and 24/7 continuous duty. Pixelara SMSR gearboxes and magnetic drum pulleys protect equipment and deliver maximum throughput.",
    keyChallenges: [
      "High shock loads during ore crushing and dumping",
      "Abrasive dust causing seal failure and bearing contamination",
      "High incline belt conveyor backstop requirements",
    ],
    recommendedProducts: ["smsr-gearbox", "conveyor-gearbox", "magnetic-drum-pulley", "plummer-blocks"],
    stat: "99.9% Operational Reliability in Mining Field Operations",
  },
  {
    id: "cement",
    name: "Cement & Lime",
    tagline: "High-temperature and dust-tight drives for clinker & kiln systems",
    image: "/images/industrial/conveyor-drive.jpg",
    description:
      "Elevated process temperatures and caustic particulate demand specialized drive cooling, Viton double-lip seals, and heavy cast iron housings engineered by Pixelara.",
    keyChallenges: [
      "Ambient operating temperatures exceeding +70°C near kilns",
      "Fine cement dust penetrating standard seals",
      "High starting torque under loaded elevator conditions",
    ],
    recommendedProducts: ["shaft-mounted-speed-reducer", "gear-oil-pump", "pillow-block-bearings"],
    stat: "Tested for up to +180°C Continuous Thermal Rating",
  },
  {
    id: "steel",
    name: "Steel & Metallurgy",
    tagline: "Heavy-duty shock resistant plummer blocks & gear drives for rolling mills",
    image: "/images/industrial/hero-plant.jpg",
    description:
      "From melt shops to hot strip mills, Pixelara heavy-duty cast steel plummer blocks and gear drives absorb severe reversing shock loads and thermal expansion.",
    keyChallenges: [
      "Extreme dynamic loads and reversing shock impacts",
      "Cooling water spray and scale contamination",
      "Need for rapid split-housing bearing maintenance",
    ],
    recommendedProducts: ["plummer-blocks", "conveyor-gearbox", "taper-lock-pulley"],
    stat: "High Dynamic Radial Rating up to 450 kN",
  },
  {
    id: "power",
    name: "Power Generation",
    tagline: "Reliable coal & biomass conveyor drives for uninterrupted energy output",
    image: "/images/industrial/mining-conveyor.jpg",
    description:
      "Coal-fired and biomass power stations depend on continuous fuel feed. Pixelara suspension magnets clean fuel streams while SMSR gearboxes power feed conveyors with zero slip.",
    keyChallenges: [
      "Tramp metal in coal damaging mill pulverizers",
      "Continuous fuel conveyor uptime requirements",
      "ATEX explosion protection compliance in coal dust areas",
    ],
    recommendedProducts: ["suspension-magnet", "smsr-gearbox", "magnetic-conveyor-belt"],
    stat: "ATEX Zone 22 Dust Ignition Proof Certified",
  },
  {
    id: "recycling",
    name: "Recycling & Waste",
    tagline: "Automatic tramp metal recovery & shredder drive protection",
    image: "/images/industrial/magnetic-separator.jpg",
    description:
      "Sorting lines and waste shredders face unpredictable materials. Pixelara high-gauss magnetic separators extract scrap metal efficiently while shock-absorbing reducers drive shredders safely.",
    keyChallenges: [
      "Mixed material streams containing unpredictable iron tramp",
      "Frequent jam conditions requiring high break-away torque",
      "Continuous wear on conveyor belts and drive pulleys",
    ],
    recommendedProducts: ["suspension-magnet", "magnetic-drum-pulley", "shaft-mounted-speed-reducer"],
    stat: "Extracts up to 99.4% of Ferrous Tramp Metal",
  },
  {
    id: "aggregate",
    name: "Aggregate & Quarrying",
    tagline: "Direct shaft-mounted reducers for portable crushing and screening plants",
    image: "/images/industrial/conveyor-drive.jpg",
    description:
      "Mobile screeners and quarry crushers require light, compact drive units that handle stone impact and road transport without alignment loss. Pixelara SMSR units fit directly onto driven shafts.",
    keyChallenges: [
      "Frequent plant relocation and re-rigging",
      "Vibration from vibrating screen decks",
      "Limited mounting space on mobile chassis",
    ],
    recommendedProducts: ["smsr-gearbox", "taper-lock-pulley", "belt-conveyor-tensioner"],
    stat: "Reduces Installation & Alignment Time by 65%",
  },
  {
    id: "material-handling",
    name: "Bulk Material Handling",
    tagline: "Complete conveyor drive packages for ports, grain terminals & warehouses",
    image: "/images/industrial/conveyor-drive.jpg",
    description:
      "From grain elevators to port ship loading booms, Pixelara provides high-efficiency gearboxes, pulleys, and belt tensioners engineered for high speed and payload capacities.",
    keyChallenges: [
      "Long belt conveyor spans requiring precise tensioning",
      "High grain dust environments requiring sealed drives",
      "Variable loading rates requiring high service factor gearboxes",
    ],
    recommendedProducts: ["conveyor-gearbox", "belt-conveyor-tensioner", "taper-lock-pulley"],
    stat: "Over 15,000 Bulk Handling Units Deployed Worldwide",
  },
];
