/**
 * Uni-Tech Machines — Blog / Knowledge Base
 * Data-driven article store. Rendered by blog.html (index) and blog-post.html (article).
 *
 * SCALING: one entry per article. Aim for 3–5 articles per product across these angles:
 *   buying-guide · specifications · maintenance · applications · comparison
 * Keep body copy original and product-specific (avoid duplicated boilerplate) so
 * search engines treat each page as unique, useful content.
 *
 * Body block types: p | h2 | h3 | ul | ol | quote | note | specs | cta
 */

const BLOG_TOPICS = [
  { id: 'buying-guide',   label: 'Buying Guide' },
  { id: 'specifications', label: 'Specifications' },
  { id: 'maintenance',    label: 'Maintenance' },
  { id: 'applications',   label: 'Applications' },
  { id: 'comparison',     label: 'Comparison' },
  { id: 'troubleshooting', label: 'Troubleshooting' }
];

const BLOG_DATA = [

  /* ========================= HEAVY DUTY GEAR HEAD LATHE (UT/HG-9) ========================= */
  {
    slug: 'heavy-duty-gear-head-lathe-buying-guide',
    productId: 'heavy-duty-gear-head-lathe',
    productName: 'Heavy Duty Gear Head Lathe Machine',
    productCode: 'UT/HG-9',
    price: '₹ 3,75,500',
    image: 'img/products/new/heavy-duty-gear-head-lathe.jpg',
    topic: 'buying-guide',
    title: 'Heavy Duty Gear Head Lathe: Complete Buying Guide for 2026',
    metaTitle: 'Heavy Duty Gear Head Lathe Buying Guide (2026) | Uni-Tech Machines',
    metaDescription: 'How to choose a heavy duty all-geared lathe — swing, bed length, spindle bore, motor and gearbox explained. Factory-direct pricing from Uni-Tech Machines, Rajkot.',
    keywords: 'heavy duty lathe buying guide, all geared lathe, gear head lathe machine, lathe swing over bed, spindle bore, Rajkot lathe manufacturer',
    date: '2026-02-18',
    updated: '2026-02-18',
    readMins: 8,
    excerpt: 'Swing, bed length, spindle bore, gearbox and motor — the five numbers that decide whether an all-geared lathe fits your job. A practical checklist before you request a quote.',
    body: [
      { type: 'p', text: 'A heavy duty gear head lathe is a long-term capital purchase — most machines run for 15 to 20 years in an Indian workshop. Choosing the wrong swing or bed length is expensive to correct later, so it pays to match the machine to your actual and future jobs before you buy. This guide walks through the five specifications that matter most, using the Uni-Tech UT/HG-9 all-geared lathe as a reference point.' },
      { type: 'h2', text: '1. Swing over bed — your maximum diameter' },
      { type: 'p', text: 'Swing over bed is the largest diameter you can rotate above the bedways. The UT/HG-9 offers a 455 mm swing, which comfortably covers shafts, flanges, pulleys and rolls up to that diameter. Always leave headroom: pick a swing 15–20% larger than your biggest current job so you are not working at the limit of the machine.' },
      { type: 'h2', text: '2. Bed length and distance between centres' },
      { type: 'p', text: 'Bed length sets the longest workpiece you can turn between centres. The UT/HG-9 ships on a 2740 mm bed. If you turn long shafts, propeller columns or rolls, step up the bed length rather than the swing — the two are chosen independently.' },
      { type: 'h2', text: '3. Spindle bore — for bar and pipe work' },
      { type: 'p', text: 'The spindle bore is the hole through the headstock spindle. An 80 mm bore on the UT/HG-9 lets you feed bar stock and pipe straight through the chuck, which is essential for repetitive turning and pipe threading. If your work is bar-fed, treat bore as a hard requirement, not a nice-to-have.' },
      { type: 'h2', text: '4. Gearbox: all-geared vs cone pulley' },
      { type: 'p', text: 'An all-geared headstock like the UT/HG-9 gives you fixed, repeatable spindle speeds (12 steps from 30 to 1060 RPM here) and holds torque at low RPM for heavy cuts. Cone-pulley machines are cheaper but rely on belt changes and slip under heavy load. For production turning and hard materials, all-geared is the right call.' },
      { type: 'h2', text: '5. Motor power and drive' },
      { type: 'p', text: 'The UT/HG-9 runs a 3 HP three-phase motor on flame-hardened bedways with taper roller spindle bearings. Motor sizing should match the depth of cut and material — under-powering a heavy lathe leads to stalling and poor surface finish. Confirm your workshop has a stable three-phase 440 V supply.' },
      { type: 'note', text: 'Rule of thumb: pick swing and bore for your part geometry, bed length for part length, and gearbox and motor for how hard and how often you cut.' },
      { type: 'h2', text: 'Before you request a quote' },
      { type: 'ul', items: [
        'List your three largest and three most common workpieces (diameter × length).',
        'Note whether you feed bar/pipe through the spindle.',
        'Confirm the power supply and floor space available.',
        'Ask about standard vs optional accessories (steady rest, taper attachment, coolant).'
      ] },
      { type: 'cta', text: 'The UT/HG-9 is manufactured factory-direct in Rajkot with an ISO 9001:2008 quality system. Send us your part list and we will confirm the right configuration.' }
    ],
    faq: [
      { q: 'What is the swing over bed of the Uni-Tech heavy duty gear head lathe?', a: 'The UT/HG-9 has a 455 mm swing over bed and a 2740 mm bed length, with an 80 mm spindle bore.' },
      { q: 'Is an all-geared lathe better than a cone pulley lathe?', a: 'For production and heavy cutting, yes — an all-geared headstock delivers fixed, repeatable speeds and holds torque at low RPM without belt slip.' },
      { q: 'What motor does the heavy duty gear head lathe use?', a: 'It runs a 3 HP three-phase motor at 440 V, with 12 spindle speeds from 30 to 1060 RPM.' }
    ],
    related: ['heavy-duty-gear-head-lathe-specifications', 'all-geared-vs-cone-pulley-lathe', 'heavy-duty-gear-head-lathe-maintenance']
  },

  {
    slug: 'heavy-duty-gear-head-lathe-specifications',
    productId: 'heavy-duty-gear-head-lathe',
    productName: 'Heavy Duty Gear Head Lathe Machine',
    productCode: 'UT/HG-9',
    price: '₹ 3,75,500',
    image: 'img/products/new/heavy-duty-gear-head-lathe.jpg',
    topic: 'specifications',
    title: 'How to Read a Heavy Duty Gear Head Lathe Datasheet',
    metaTitle: 'Heavy Duty Gear Head Lathe Specifications Explained | Uni-Tech',
    metaDescription: 'Spindle speeds, threads, feeds, taper and tailstock travel — every line of the UT/HG-9 all-geared lathe datasheet explained in plain language.',
    keywords: 'lathe specifications explained, spindle speed range, lead screw, morse taper, feeds and threads, gear head lathe datasheet',
    date: '2026-02-20',
    updated: '2026-02-20',
    readMins: 7,
    excerpt: 'Spindle noses, morse tapers, TPI, feed rates — a lathe datasheet is dense. Here is what each figure on the UT/HG-9 spec sheet actually tells you.',
    body: [
      { type: 'p', text: 'A lathe datasheet packs a lot into a small table. Knowing what each line means lets you compare machines fairly and confirm a lathe suits your work. Here we decode the full specification of the Uni-Tech UT/HG-9 heavy duty gear head lathe.' },
      { type: 'h2', text: 'Headstock and spindle' },
      { type: 'p', text: 'The UT/HG-9 uses an A2-6 spindle nose with an MT-6 spindle taper and an MT-4 adapter. Spindle mounting is on taper roller bearings for rigidity under heavy cuts. Twelve spindle speeds run 30, 43, 55, 85, 115, 160, 210, 285, 400, 545, 785 and 1060 RPM — low steps for heavy roughing, high steps for finishing small diameters.' },
      { type: 'h2', text: 'Threads and feeds' },
      { type: 'p', text: 'The machine cuts 17 metric threads from 0.5 to 15 mm pitch and 40 inch threads from 2 to 60 TPI, driven by a 38 mm / 4 TPI lead screw. Longitudinal feeds run 0.066 to 2 mm/rev and cross feeds 0.0165 to 0.5 mm/rev — a wide range that covers both aggressive stock removal and fine finishing.' },
      { type: 'h2', text: 'Tailstock' },
      { type: 'p', text: 'Tailstock spindle diameter is 60.3 mm with an MT-4 taper and 180 mm travel — enough for drilling and centre support on long work.' },
      { type: 'h2', text: 'Reading it against your job' },
      { type: 'ul', items: [
        'Match the lowest spindle speed to your largest, hardest cut.',
        'Check the thread range covers the pitches you actually cut.',
        'Confirm the tailstock taper matches your drill chucks and centres.',
        'Verify swing and bed length against your part envelope.'
      ] },
      { type: 'note', text: 'Standard accessories on the UT/HG-9 include flame-hardened bedways, a double-shaft Norton gearbox, chuck plate, face plate, steady rest, follow rest and a full change-gear set for metric and inch.' },
      { type: 'cta', text: 'Want the full PDF datasheet or a spec walkthrough for your application? Our Rajkot factory team can help you interpret every line.' }
    ],
    faq: [
      { q: 'How many spindle speeds does the UT/HG-9 have?', a: 'Twelve, ranging from 30 to 1060 RPM, through an all-geared Norton gearbox.' },
      { q: 'What threads can this lathe cut?', a: '17 metric threads from 0.5 to 15 mm pitch and 40 inch threads from 2 to 60 TPI.' },
      { q: 'What is the tailstock taper?', a: 'MT-4, with a 60.3 mm spindle diameter and 180 mm of travel.' }
    ],
    related: ['heavy-duty-gear-head-lathe-buying-guide', 'heavy-duty-gear-head-lathe-maintenance', 'all-geared-vs-cone-pulley-lathe']
  },

  {
    slug: 'heavy-duty-gear-head-lathe-maintenance',
    productId: 'heavy-duty-gear-head-lathe',
    productName: 'Heavy Duty Gear Head Lathe Machine',
    productCode: 'UT/HG-9',
    price: '₹ 3,75,500',
    image: 'img/products/new/heavy-duty-gear-head-lathe.jpg',
    topic: 'maintenance',
    title: 'Maintenance Checklist for an All-Geared Heavy Duty Lathe',
    metaTitle: 'All-Geared Lathe Maintenance Checklist (Daily to Yearly) | Uni-Tech',
    metaDescription: 'Keep your heavy duty gear head lathe accurate for 15+ years. Daily, weekly, monthly and annual maintenance tasks for bedways, headstock, gearbox and lead screw.',
    keywords: 'lathe maintenance checklist, gearbox oil change, bedway lubrication, lathe accuracy, machine maintenance India',
    date: '2026-02-24',
    updated: '2026-02-24',
    readMins: 6,
    excerpt: 'A well-maintained lathe holds accuracy for two decades. A neglected one loses it in two years. The daily-to-yearly routine that protects your investment.',
    body: [
      { type: 'p', text: 'Heavy duty lathes are built to last, but they only hold their accuracy with routine care. The flame-hardened bedways, taper roller spindle bearings and geared headstock on the UT/HG-9 will outlast most workshops — provided lubrication and alignment are kept up. Use this schedule as a baseline.' },
      { type: 'h2', text: 'Daily' },
      { type: 'ul', items: [
        'Wipe down bedways and remove swarf before and after each shift.',
        'Check the headstock oil level through the sight glass.',
        'Apply way oil to the carriage and cross-slide guides.',
        'Listen for unusual gearbox or spindle noise at start-up.'
      ] },
      { type: 'h2', text: 'Weekly' },
      { type: 'ul', items: [
        'Clean and lightly oil the lead screw and feed rod.',
        'Check tailstock clamping and lubricate the quill.',
        'Inspect the chuck for jaw wear and secure mounting.'
      ] },
      { type: 'h2', text: 'Monthly' },
      { type: 'ul', items: [
        'Check backlash on cross-slide and compound and adjust gibs if needed.',
        'Inspect V-belts (where fitted) for tension and wear.',
        'Verify coolant condition and clean the tank and pump.'
      ] },
      { type: 'h2', text: 'Annually' },
      { type: 'ul', items: [
        'Drain and refill the headstock and apron gearbox oil.',
        'Check bed level with a precision spirit level and re-shim if required.',
        'Test turning accuracy on a test bar and record the result.',
        'Inspect spindle bearing preload.'
      ] },
      { type: 'note', text: 'Keep a simple logbook at the machine. A dated record of oil changes and accuracy checks is the single best predictor of a long service life.' },
      { type: 'cta', text: 'Need genuine spares, gearbox oil specs or a service visit for your Uni-Tech lathe? Contact the Rajkot factory directly.' }
    ],
    faq: [
      { q: 'How often should I change the headstock gearbox oil?', a: 'At least once a year under normal single-shift use, or every six months for heavy two-shift operation.' },
      { q: 'How do I check if my lathe is still accurate?', a: 'Turn a test bar between centres and measure the diameter at both ends; a taper indicates bed wear or misalignment that needs re-levelling.' }
    ],
    related: ['heavy-duty-gear-head-lathe-buying-guide', 'heavy-duty-gear-head-lathe-specifications', 'heavy-duty-gear-head-lathe-applications']
  },

  {
    slug: 'heavy-duty-gear-head-lathe-applications',
    productId: 'heavy-duty-gear-head-lathe',
    productName: 'Heavy Duty Gear Head Lathe Machine',
    productCode: 'UT/HG-9',
    price: '₹ 3,75,500',
    image: 'img/products/new/heavy-duty-gear-head-lathe.jpg',
    topic: 'applications',
    title: 'Where a Heavy Duty Gear Head Lathe Earns Its Keep: 7 Applications',
    metaTitle: '7 Applications of a Heavy Duty Gear Head Lathe | Uni-Tech Machines',
    metaDescription: 'Shafts, rolls, flanges, pipe threading and more — seven jobs where an all-geared heavy duty lathe outperforms lighter machines. Real workshop use cases.',
    keywords: 'heavy duty lathe applications, shaft turning, roll turning, pipe threading, flange machining, industrial lathe uses',
    date: '2026-02-27',
    updated: '2026-02-27',
    readMins: 6,
    excerpt: 'From rolling-mill rolls to pump shafts and pipe threading — the jobs where an all-geared heavy duty lathe pays for itself against a lighter machine.',
    body: [
      { type: 'p', text: 'The value of a heavy duty gear head lathe shows up on jobs that stall or chatter a lighter machine. With 455 mm of swing, an 80 mm bore and a rigid all-geared headstock, the UT/HG-9 handles a broad range of industrial turning. Here are seven applications where it excels.' },
      { type: 'h2', text: '1. Shaft turning' },
      { type: 'p', text: 'Pump shafts, motor shafts and transmission shafts turned between centres with steady-rest support — the long bed and low-speed torque give a clean finish on tough alloy steel.' },
      { type: 'h2', text: '2. Rolls for rolling and sugar mills' },
      { type: 'p', text: 'Heavy rolls demand low-RPM torque and a rigid bed. The geared headstock holds speed under deep cuts where a belt-driven machine would slip.' },
      { type: 'h2', text: '3. Flange and disc facing' },
      { type: 'p', text: 'The face plate and cross-slide travel let you face large flanges flat and true for pipeline and pressure-vessel work.' },
      { type: 'h2', text: '4. Pipe and bar threading' },
      { type: 'p', text: 'The 80 mm spindle bore feeds pipe and bar through the chuck for through-threading — with metric and inch threads cut directly by the Norton gearbox.' },
      { type: 'h2', text: '5. Pulley and gear-blank turning' },
      { type: 'p', text: 'Repeatable geared speeds make batch turning of pulleys and gear blanks consistent piece to piece.' },
      { type: 'h2', text: '6. Taper turning' },
      { type: 'p', text: 'With the optional taper turning attachment, the machine produces accurate long tapers for shafts and spindles.' },
      { type: 'h2', text: '7. General jobbing and repair' },
      { type: 'p', text: 'For a jobbing shop, one rigid all-geared lathe covers the widest range of incoming repair work without setup compromises.' },
      { type: 'cta', text: 'Tell us the parts you machine and we will confirm whether the UT/HG-9 or a larger model in our 57-lathe range is the better fit.' }
    ],
    faq: [
      { q: 'Can this lathe thread pipe?', a: 'Yes — the 80 mm spindle bore feeds pipe through the chuck and the Norton gearbox cuts both metric (0.5–15 mm) and inch (2–60 TPI) threads.' },
      { q: 'Is it suitable for rolling-mill rolls?', a: 'Yes, within its 455 mm swing and 2740 mm bed. For larger rolls, our plano-type and extra-heavy-duty lathes extend the range.' }
    ],
    related: ['heavy-duty-gear-head-lathe-buying-guide', '16-feet-plano-lathe-applications', 'all-geared-vs-cone-pulley-lathe']
  },

  {
    slug: 'all-geared-vs-cone-pulley-lathe',
    productId: 'heavy-duty-gear-head-lathe',
    productName: 'Heavy Duty Gear Head Lathe Machine',
    productCode: 'UT/HG-9',
    price: '₹ 3,75,500',
    image: 'img/products/new/heavy-duty-gear-head-lathe.jpg',
    topic: 'comparison',
    title: 'All-Geared vs Cone-Pulley Lathe: Which Should You Buy?',
    metaTitle: 'All-Geared vs Cone-Pulley Lathe — Which to Buy | Uni-Tech Machines',
    metaDescription: 'All-geared or cone-pulley lathe? Compare speed control, torque, cost and maintenance to pick the right heavy duty lathe for your workshop.',
    keywords: 'all geared vs cone pulley lathe, lathe comparison, geared head lathe, cone pulley lathe, which lathe to buy',
    date: '2026-03-02',
    updated: '2026-03-02',
    readMins: 5,
    excerpt: 'Cone-pulley lathes cost less up front; all-geared lathes cost less per part. The honest trade-off between the two headstock types.',
    body: [
      { type: 'p', text: 'The single biggest decision when buying a heavy duty lathe is the headstock type: all-geared or cone-pulley. Both have a place. Here is a straight comparison to help you choose.' },
      { type: 'h2', text: 'Speed control' },
      { type: 'p', text: 'An all-geared headstock selects fixed speeds by lever — fast, repeatable, and no downtime. A cone-pulley machine changes speed by moving a belt across stepped pulleys, which is slower and less precise but mechanically simple.' },
      { type: 'h2', text: 'Torque and heavy cutting' },
      { type: 'p', text: 'Gears transmit full torque at low RPM, so all-geared lathes hold speed on deep cuts and hard materials. Belt drives can slip under heavy load, which limits depth of cut.' },
      { type: 'h2', text: 'Cost and maintenance' },
      { type: 'p', text: 'Cone-pulley lathes have a lower purchase price and fewer internal parts, so they are cheaper to buy and simple to service. All-geared lathes cost more up front but reduce cycle time and belt-change downtime in production.' },
      { type: 'h2', text: 'Which to choose' },
      { type: 'ul', items: [
        'Choose all-geared (like the UT/HG-9) for production turning, hard materials and frequent speed changes.',
        'Choose cone-pulley for light jobbing, training shops and tight budgets where speed changes are rare.'
      ] },
      { type: 'note', text: 'Uni-Tech manufactures both types in Rajkot, so we can recommend without bias toward one design.' },
      { type: 'cta', text: 'Not sure which headstock suits your work? Send us your typical jobs and we will advise honestly.' }
    ],
    faq: [
      { q: 'Is an all-geared lathe worth the extra cost?', a: 'For production and heavy cutting, yes — faster speed changes and no belt slip pay back quickly. For light, occasional work a cone-pulley lathe is more economical.' },
      { q: 'Does Uni-Tech make both types?', a: 'Yes, both all-geared and cone-pulley heavy duty lathes are manufactured factory-direct in Rajkot.' }
    ],
    related: ['heavy-duty-gear-head-lathe-buying-guide', 'all-geared-high-speed-lathe-buying-guide', 'heavy-duty-gear-head-lathe-specifications']
  },

  /* ========================= 16 FT PLANO TYPE LATHE (UT/PL-16) ========================= */
  {
    slug: '16-feet-plano-lathe-buying-guide',
    productId: '16-feet-heavy-duty-plano-lathe',
    productName: '16 Feet Heavy Duty Plano Type Lathe Machine',
    productCode: 'UT/PL-16',
    price: '₹ 4,62,000',
    image: 'img/products/new/16-feet-heavy-duty-plano-lathe.jpg',
    topic: 'buying-guide',
    title: '16-Foot Plano Type Lathe: When You Need One and How to Spec It',
    metaTitle: '16 Feet Plano Type Lathe Buying Guide | Uni-Tech Machines',
    metaDescription: 'Long-bed plano type lathe for shafts, rolls and columns. Bed length, swing in gap, spindle bore and motor explained. Factory-direct from Rajkot.',
    keywords: 'plano type lathe, 16 feet lathe, long bed lathe, roll turning lathe, heavy duty plano lathe, swing in gap',
    date: '2026-03-05',
    updated: '2026-03-05',
    readMins: 7,
    excerpt: 'When your work is too long for a standard lathe, a plano-type machine is the answer. How to size a 20-foot-bed lathe for shafts, rolls and mill columns.',
    body: [
      { type: 'p', text: 'A plano type lathe exists for one reason: length. When shafts, rolls or columns exceed what a standard heavy duty lathe can hold between centres, the plano-type long bed takes over. The Uni-Tech UT/PL-16 runs a 20-foot bed with a 4600 mm distance between centres — this guide explains how to spec it.' },
      { type: 'h2', text: 'Bed length and distance between centres' },
      { type: 'p', text: 'The headline number is the 20-foot bed and 4600 mm between centres, which handles long paper-mill rolls, rolling-mill shafts and sugar-mill components in a single setup. Always measure your longest job plus chuck and tailstock allowance before choosing bed length.' },
      { type: 'h2', text: 'Swing and swing in gap' },
      { type: 'p', text: 'The UT/PL-16 swings 455 mm over the bed, 285 mm over the cross slide, and up to 775 mm in the gap — the gap bed lets you face large-diameter flanges and wheels that would not clear a straight bed.' },
      { type: 'h2', text: 'Spindle bore and power' },
      { type: 'p', text: 'A 125 mm spindle bore accepts large bar and pipe, and a 7.5 HP motor drives spindle speeds from 25 to 500 RPM — the low-speed band is where heavy roll and shaft turning happens.' },
      { type: 'h2', text: 'Floor space and foundation' },
      { type: 'p', text: 'A 20-foot machine needs a planned foundation and clear working length at both ends. Confirm floor space, crane or hoist access for loading heavy work, and a level, grouted base before installation.' },
      { type: 'note', text: 'Typical industries: paper mills, steel rolling mills, oil industry, sugar mills and tool rooms — anywhere long, heavy components are turned.' },
      { type: 'cta', text: 'Share your longest and heaviest workpiece and we will confirm bed length, centre height and motor sizing for your UT/PL-16.' }
    ],
    faq: [
      { q: 'How long a workpiece can the 16-foot plano lathe turn?', a: 'It offers a 20-foot bed with 4600 mm distance between centres, plus a 775 mm swing in the gap for large-diameter facing.' },
      { q: 'What motor does the plano type lathe use?', a: 'A 7.5 HP motor driving spindle speeds from 25 to 500 RPM, suited to heavy low-speed roll and shaft turning.' }
    ],
    related: ['16-feet-plano-lathe-applications', '16-feet-plano-lathe-specifications', 'heavy-duty-gear-head-lathe-buying-guide']
  },

  {
    slug: '16-feet-plano-lathe-applications',
    productId: '16-feet-heavy-duty-plano-lathe',
    productName: '16 Feet Heavy Duty Plano Type Lathe Machine',
    productCode: 'UT/PL-16',
    price: '₹ 4,62,000',
    image: 'img/products/new/16-feet-heavy-duty-plano-lathe.jpg',
    topic: 'applications',
    title: 'Plano Type Lathe Applications: Paper, Steel, Sugar and Oil',
    metaTitle: 'Plano Type Lathe Applications by Industry | Uni-Tech Machines',
    metaDescription: 'How paper mills, steel rolling mills, sugar mills and the oil industry use a 16-foot plano type lathe for rolls, shafts and columns.',
    keywords: 'plano lathe applications, paper mill roll turning, rolling mill shaft, sugar mill roller, oil industry lathe',
    date: '2026-03-08',
    updated: '2026-03-08',
    readMins: 5,
    excerpt: 'Long, heavy, cylindrical — the components a plano type lathe was built for, and the four industries that depend on it every day.',
    body: [
      { type: 'p', text: 'The UT/PL-16 plano type lathe is specified by the industries that run long, heavy, cylindrical components. Its 20-foot bed and 7.5 HP drive make it the workhorse for maintenance and manufacturing across four sectors.' },
      { type: 'h2', text: 'Paper mills' },
      { type: 'p', text: 'Dryer rolls, press rolls and reel spools are long and must run true. The plano lathe turns and re-grinds these in a single setup, reducing vibration and paper-web defects.' },
      { type: 'h2', text: 'Steel rolling mills' },
      { type: 'p', text: 'Work rolls and back-up rolls need periodic re-turning to restore profile. Low-speed torque and a rigid 20-foot bed make this practical in-house.' },
      { type: 'h2', text: 'Sugar mills' },
      { type: 'p', text: 'Mill rollers and shafts are heavy and long; the plano lathe handles roller re-grooving and shaft turning during the maintenance season.' },
      { type: 'h2', text: 'Oil industry' },
      { type: 'p', text: 'Long pump shafts, sucker rods and pipe components are turned and threaded using the 125 mm spindle bore and gap-bed swing.' },
      { type: 'cta', text: 'Running a mill maintenance shop? Ask us how the UT/PL-16 fits your roll and shaft schedule.' }
    ],
    faq: [
      { q: 'Which industries use plano type lathes?', a: 'Primarily paper mills, steel rolling mills, sugar mills, the oil industry and tool rooms — anywhere long, heavy cylindrical parts are turned.' },
      { q: 'Can it re-turn rolling-mill rolls?', a: 'Yes — the rigid 20-foot bed and low-speed torque are designed for roll re-turning and profile restoration.' }
    ],
    related: ['16-feet-plano-lathe-buying-guide', '16-feet-plano-lathe-specifications', 'heavy-duty-gear-head-lathe-applications']
  },

  {
    slug: '16-feet-plano-lathe-specifications',
    productId: '16-feet-heavy-duty-plano-lathe',
    productName: '16 Feet Heavy Duty Plano Type Lathe Machine',
    productCode: 'UT/PL-16',
    price: '₹ 4,62,000',
    image: 'img/products/new/16-feet-heavy-duty-plano-lathe.jpg',
    topic: 'specifications',
    title: 'Plano Type Lathe Specifications: Reading the UT/PL-16 Datasheet',
    metaTitle: '16 Feet Plano Type Lathe Specifications | Uni-Tech Machines',
    metaDescription: 'Full specification of the UT/PL-16 plano type lathe — swing, gap, bore, cross-slide travel and motor — explained for buyers and maintenance teams.',
    keywords: 'plano lathe specifications, swing over cross slide, gap bed lathe, cross slide travel, spindle bore 125mm',
    date: '2026-03-11',
    updated: '2026-03-11',
    readMins: 5,
    excerpt: 'The numbers that define a 20-foot plano lathe — and what each one means for the parts you can hold, turn and face.',
    body: [
      { type: 'p', text: 'The UT/PL-16 plano type lathe is a long-bed, gap-bed machine built for heavy, lengthy work. Here is what its key specifications tell you.' },
      { type: 'h2', text: 'Capacity' },
      { type: 'p', text: 'Swing over bed is 455 mm, swing over cross slide 285 mm, and swing in gap up to 775 mm. Height of centre is 450 mm, giving generous clearance for large-diameter facing in the gap.' },
      { type: 'h2', text: 'Length and carriage' },
      { type: 'p', text: 'The 20-foot bed carries 4600 mm between centres. Carriage size is 450 × 500 mm with 400 mm of cross-slide travel and 150 mm of top-slide travel — enough reach for deep facing cuts.' },
      { type: 'h2', text: 'Drive and speeds' },
      { type: 'p', text: 'A 7.5 HP motor delivers spindle speeds from 25 to 500 RPM through a belt-driven heavy duty headstock, with a 125 mm spindle bore for large bar and pipe. Tailstock spindle taper is MT-4.' },
      { type: 'specs', rows: [
        ['Swing over bed', '455 mm'],
        ['Swing in gap', '775 mm'],
        ['Distance between centres', '4600 mm'],
        ['Spindle bore', '125 mm'],
        ['Cross-slide travel', '400 mm'],
        ['Motor power', '7.5 HP'],
        ['Spindle speed range', '25–500 RPM']
      ] },
      { type: 'cta', text: 'Need the complete datasheet with foundation drawing? Request it from our Rajkot factory team.' }
    ],
    faq: [
      { q: 'What is the spindle bore of the UT/PL-16?', a: '125 mm, which accepts large bar and pipe through the headstock.' },
      { q: 'What is the maximum swing in the gap?', a: 'Up to 775 mm, allowing large-diameter flanges and wheels to be faced.' }
    ],
    related: ['16-feet-plano-lathe-buying-guide', '16-feet-plano-lathe-applications', 'heavy-duty-gear-head-lathe-specifications']
  },

  /* ========================= ALL GEARED HIGH SPEED LATHE (UT/AG-12) ========================= */
  {
    slug: 'all-geared-high-speed-lathe-buying-guide',
    productId: 'all-geared-high-speed-lathe-machine',
    productName: 'All Geared High Speed Lathe Machine',
    productCode: 'UT/AG-12',
    price: '₹ 3,50,000',
    image: 'img/products/new/all-geared-high-speed-lathe-machine.jpg',
    topic: 'buying-guide',
    title: 'All Geared High Speed Lathe: Buyer\u2019s Guide for Precision Shops',
    metaTitle: 'All Geared High Speed Lathe Buying Guide | Uni-Tech Machines',
    metaDescription: 'High-speed all-geared lathe with 580 mm swing and 104 mm bore. What to check on speed range, bed and bore before buying. Factory-direct from Rajkot.',
    keywords: 'all geared high speed lathe, high speed lathe machine, 580mm swing lathe, precision lathe India, geared lathe buying guide',
    date: '2026-03-14',
    updated: '2026-03-14',
    readMins: 6,
    excerpt: 'A larger swing, a bigger bore and a wide geared speed band — why the UT/AG-12 suits shops that turn both large and fine work on one machine.',
    body: [
      { type: 'p', text: 'The All Geared High Speed Lathe sits above the standard gear head machine in swing and bore, aimed at shops that need both capacity and a fast finishing speed. The Uni-Tech UT/AG-12 offers a 580 mm swing, a 104 mm bore and speeds to 1060 RPM — here is how to decide if it fits.' },
      { type: 'h2', text: 'Bigger swing, bigger bore' },
      { type: 'p', text: 'With a 580 mm swing over a 375 mm-wide flat-and-V bed, and a 104 mm spindle bore, the UT/AG-12 handles larger diameters and bigger bar stock than a standard 455 mm machine — useful for larger flanges, pulleys and pipe work.' },
      { type: 'h2', text: 'Speed range' },
      { type: 'p', text: 'An all-geared headstock provides fixed speeds from 30 to 1060 RPM. The higher end supports faster finishing on smaller diameters, while the geared low end keeps torque for roughing — a genuine general-purpose spread.' },
      { type: 'h2', text: 'Bed and construction' },
      { type: 'p', text: 'The 2740 mm flat-and-V bed provides rigidity and accurate carriage tracking. As with all Uni-Tech lathes, it is built for long working life and consistent performance in Indian workshop conditions.' },
      { type: 'h2', text: 'Is it right for you?' },
      { type: 'ul', items: [
        'Choose it if you turn a mix of large and small diameters on one machine.',
        'Choose it if you feed larger bar/pipe (up to 104 mm bore).',
        'Step up to a plano-type if your work exceeds this bed length.'
      ] },
      { type: 'cta', text: 'Compare the UT/AG-12 against our standard gear head lathe with our team — we will match the machine to your part mix.' }
    ],
    faq: [
      { q: 'What is the swing and bore of the UT/AG-12?', a: 'A 580 mm swing over bed and a 104 mm spindle bore, on a 2740 mm flat-and-V bed.' },
      { q: 'How fast does the spindle run?', a: 'The all-geared headstock provides fixed speeds from 30 to 1060 RPM.' }
    ],
    related: ['all-geared-high-speed-lathe-specifications', 'all-geared-high-speed-lathe-maintenance', 'all-geared-vs-cone-pulley-lathe']
  },

  {
    slug: 'all-geared-high-speed-lathe-specifications',
    productId: 'all-geared-high-speed-lathe-machine',
    productName: 'All Geared High Speed Lathe Machine',
    productCode: 'UT/AG-12',
    price: '₹ 3,50,000',
    image: 'img/products/new/all-geared-high-speed-lathe-machine.jpg',
    topic: 'specifications',
    title: 'All Geared High Speed Lathe: Specifications at a Glance',
    metaTitle: 'All Geared High Speed Lathe Specifications | Uni-Tech Machines',
    metaDescription: 'UT/AG-12 specifications — 580 mm swing, 104 mm bore, flat-and-V bed, all-geared headstock. What each figure means for your shop.',
    keywords: 'all geared high speed lathe specifications, 104mm spindle bore, flat and v bed, geared headstock lathe specs',
    date: '2026-03-17',
    updated: '2026-03-17',
    readMins: 4,
    excerpt: 'The key figures on the UT/AG-12 datasheet, and what they mean for capacity, speed and rigidity.',
    body: [
      { type: 'p', text: 'The All Geared High Speed Lathe (UT/AG-12) is a larger-capacity general-purpose machine. Its specification is easy to read once you know what each figure controls.' },
      { type: 'h2', text: 'Capacity and bed' },
      { type: 'p', text: 'A 580 mm swing over bed on a 375 mm (15") wide flat-and-V bed, 2740 mm long, gives both diameter capacity and carriage rigidity. The flat-and-V bed combines guided accuracy with load-carrying strength.' },
      { type: 'h2', text: 'Spindle and drive' },
      { type: 'p', text: 'A 104 mm spindle bore feeds large bar and pipe. The all-geared headstock runs 30 to 1060 RPM on a three-phase supply, driven by a 1440 RPM motor.' },
      { type: 'specs', rows: [
        ['Swing over bed', '580 mm'],
        ['Bed width', '375 mm (15")'],
        ['Bed length', '2740 mm'],
        ['Spindle bore', '104 mm'],
        ['Spindle speed', '30–1060 RPM'],
        ['Gearbox', 'All Geared'],
        ['Bed type', 'Flat and V'],
        ['Origin', 'Made in India']
      ] },
      { type: 'cta', text: 'Ask for the full datasheet and accessory list for the UT/AG-12.' }
    ],
    faq: [
      { q: 'What type of bed does the UT/AG-12 have?', a: 'A flat-and-V bed, 375 mm (15") wide and 2740 mm long, for rigidity and accurate carriage tracking.' },
      { q: 'What is the spindle bore?', a: '104 mm, suitable for feeding large bar and pipe through the headstock.' }
    ],
    related: ['all-geared-high-speed-lathe-buying-guide', 'all-geared-high-speed-lathe-maintenance', 'heavy-duty-gear-head-lathe-specifications']
  },

  {
    slug: 'all-geared-high-speed-lathe-maintenance',
    productId: 'all-geared-high-speed-lathe-machine',
    productName: 'All Geared High Speed Lathe Machine',
    productCode: 'UT/AG-12',
    price: '₹ 3,50,000',
    image: 'img/products/new/all-geared-high-speed-lathe-machine.jpg',
    topic: 'maintenance',
    title: 'Keeping a High-Speed Geared Lathe Accurate and Quiet',
    metaTitle: 'All Geared High Speed Lathe Maintenance Tips | Uni-Tech Machines',
    metaDescription: 'Higher spindle speeds demand tighter maintenance. Bearing care, gearbox oil, belt and coolant tips to keep your UT/AG-12 accurate and quiet.',
    keywords: 'high speed lathe maintenance, spindle bearing care, geared lathe oil, lathe vibration, lathe accuracy India',
    date: '2026-03-20',
    updated: '2026-03-20',
    readMins: 5,
    excerpt: 'Run a lathe faster and small problems get louder. The maintenance habits that keep a high-speed geared headstock smooth and precise.',
    body: [
      { type: 'p', text: 'A high-speed lathe rewards good maintenance and punishes neglect faster than a slow one — vibration and heat both rise with RPM. Keeping the UT/AG-12 accurate comes down to a few disciplined habits.' },
      { type: 'h2', text: 'Spindle bearings and heat' },
      { type: 'p', text: 'Check the headstock for excess heat after high-speed runs. Correct oil level and clean oil are what keep the spindle bearings cool and quiet — top up through the sight glass and change oil on schedule.' },
      { type: 'h2', text: 'Gearbox oil' },
      { type: 'p', text: 'Because the geared headstock runs a wide speed band, use the specified grade of oil and change it annually (or six-monthly under two-shift use) to protect the gears at high RPM.' },
      { type: 'h2', text: 'Balance and vibration' },
      { type: 'p', text: 'At high speed, an unbalanced chuck or workpiece shows up as chatter and poor finish. Balance large workpieces, keep chuck jaws clean, and never exceed the rated speed for a given diameter.' },
      { type: 'h2', text: 'Bedways and coolant' },
      { type: 'ul', items: [
        'Keep bedways clean and oiled to preserve carriage accuracy.',
        'Maintain coolant condition — high-speed cutting generates more heat.',
        'Check belt tension and alignment where fitted.'
      ] },
      { type: 'cta', text: 'For genuine spares and oil specifications for your UT/AG-12, contact the Rajkot factory.' }
    ],
    faq: [
      { q: 'Why is my high-speed lathe getting hot at the headstock?', a: 'Usually low or degraded gearbox oil, or bearing preload issues — check oil level and grade first, and schedule a bearing inspection if heat persists.' },
      { q: 'How do I reduce chatter at high speed?', a: 'Balance the workpiece and chuck, keep jaws clean, and stay within the rated speed for the diameter being turned.' }
    ],
    related: ['all-geared-high-speed-lathe-buying-guide', 'all-geared-high-speed-lathe-specifications', 'heavy-duty-gear-head-lathe-maintenance']
  },

  /* ============================ TROUBLESHOOTING ============================ */
  {
    slug: 'lathe-chatter-causes-and-fixes',
    productId: 'heavy-duty-gear-head-lathe',
    productName: 'Heavy Duty Gear Head Lathe Machine',
    productCode: 'UT/HG-9',
    price: '₹ 3,75,500',
    image: 'img/products/new/heavy-duty-gear-head-lathe.jpg',
    topic: 'troubleshooting',
    title: 'Lathe Chatter: 8 Causes and How to Fix Each One',
    metaTitle: 'How to Stop Lathe Chatter — 8 Causes & Fixes | Uni-Tech Machines',
    metaDescription: 'Chatter marks on your turned parts? Here are the 8 most common causes of lathe chatter — tool overhang, speed, workholding, worn gibs — and exactly how to fix each.',
    keywords: 'lathe chatter, how to stop lathe chatter, chatter marks turning, lathe vibration fix, tool overhang, lathe surface finish problem',
    date: '2026-03-24',
    updated: '2026-03-24',
    readMins: 7,
    excerpt: 'Chatter marks ruin a finish and shorten tool life. Work through these 8 causes in order — most chatter is gone by cause number three.',
    body: [
      { type: 'p', text: 'Chatter is the repeating wave pattern left on a turned surface, caused by vibration between the tool and the workpiece. It wastes material, wrecks surface finish and chips carbide inserts. The good news: chatter almost always traces back to one of eight causes. Work through them in this order and most problems clear early.' },
      { type: 'h2', text: '1. Too much tool overhang' },
      { type: 'p', text: 'The single most common cause. Every extra millimetre the tool sticks out of the holder multiplies deflection. Fix: clamp the tool with the minimum overhang needed to clear the work — as a rule, no more than 1.5× the tool shank height for HSS, less for boring bars.' },
      { type: 'h2', text: '2. Wrong spindle speed' },
      { type: 'p', text: 'Every setup has speeds that resonate. Fix: change the RPM in steps up or down. Even a small change often moves you out of the resonant band. On a geared lathe like the UT/HG-9, use the lever-selected speeds to test quickly.' },
      { type: 'h2', text: '3. Insufficient depth of cut or feed' },
      { type: 'p', text: 'Counter-intuitively, cuts that are too light cause chatter because the tool rubs instead of cutting. Fix: increase depth of cut and feed so the tool bites cleanly.' },
      { type: 'h2', text: '4. Poor workholding' },
      { type: 'p', text: 'A long part gripped only in the chuck will flex and ring. Fix: support the free end with the tailstock centre, or use a steady rest or follow rest for long, slender work.' },
      { type: 'h2', text: '5. Worn or loose gibs' },
      { type: 'p', text: 'Slop in the cross-slide or compound lets the tool move under load. Fix: adjust the gib screws until the slide moves smoothly with no play. Do this as part of monthly maintenance.' },
      { type: 'h2', text: '6. Dull or wrong-geometry tooling' },
      { type: 'p', text: 'A worn edge or too-large nose radius forces cutting pressure up. Fix: sharpen or index to a fresh edge, and use a smaller nose radius for finishing passes.' },
      { type: 'h2', text: '7. Spindle bearing play' },
      { type: 'p', text: 'Worn or loose spindle bearings show up as chatter that no tooling change fixes. Fix: check bearing preload and condition — on a well-maintained taper-roller spindle this is rare, but it is the culprit when everything else is ruled out.' },
      { type: 'h2', text: '8. Machine not level or poorly grounded' },
      { type: 'p', text: 'A lathe that is not level or is sitting on a springy floor transmits vibration into the cut. Fix: re-level the bed with a precision spirit level and ensure the machine is grouted or firmly bolted to a solid foundation.' },
      { type: 'note', text: 'Quick field routine: reduce tool overhang, then change speed, then add tailstock support. That sequence clears the large majority of chatter complaints in minutes.' },
      { type: 'cta', text: 'Persistent chatter after all eight checks can point to spindle or bed wear. Our Rajkot service team can inspect your Uni-Tech lathe and advise on spares.' }
    ],
    faq: [
      { q: 'What is the most common cause of lathe chatter?', a: 'Excessive tool overhang. Reduce the tool\u2019s stick-out from the holder first — it resolves the majority of chatter problems.' },
      { q: 'Why does my lathe chatter only on light cuts?', a: 'A cut that is too shallow makes the tool rub instead of cut, which induces vibration. Increase depth of cut and feed so the edge bites cleanly.' },
      { q: 'Can worn spindle bearings cause chatter?', a: 'Yes. If tooling, speed and workholding are all correct and chatter persists, check spindle bearing preload and condition.' }
    ],
    related: ['lathe-poor-surface-finish-fix', 'lathe-not-cutting-threads-correctly', 'heavy-duty-gear-head-lathe-maintenance']
  },

  {
    slug: 'lathe-poor-surface-finish-fix',
    productId: 'all-geared-high-speed-lathe-machine',
    productName: 'All Geared High Speed Lathe Machine',
    productCode: 'UT/AG-12',
    price: '₹ 3,50,000',
    image: 'img/products/new/all-geared-high-speed-lathe-machine.jpg',
    topic: 'troubleshooting',
    title: 'Poor Surface Finish on a Lathe? A Step-by-Step Fix',
    metaTitle: 'Lathe Poor Surface Finish — Causes & Step-by-Step Fix | Uni-Tech',
    metaDescription: 'Rough, torn or ringed surface finish on turned parts? Diagnose it fast: speed, feed, tool nose radius, coolant and edge condition — with the fix for each symptom.',
    keywords: 'lathe surface finish problem, rough finish turning, torn surface finish, feed rate finish, nose radius, cutting speed finish',
    date: '2026-03-27',
    updated: '2026-03-27',
    readMins: 6,
    excerpt: 'A rough finish is the machine telling you something. Match the look of the surface to the cause and dial it out in a few passes.',
    body: [
      { type: 'p', text: 'Surface finish is the clearest feedback a lathe gives. The appearance of the defect usually points straight to the cause. Here is how to read the surface and correct it, using a high-speed geared lathe like the UT/AG-12 as reference.' },
      { type: 'h2', text: 'Symptom: regular wavy pattern' },
      { type: 'p', text: 'This is chatter. Reduce tool overhang, change spindle speed, and add tailstock or steady-rest support. See our dedicated chatter guide for the full sequence.' },
      { type: 'h2', text: 'Symptom: torn, ragged surface' },
      { type: 'p', text: 'The cutting speed is too low or the edge is dull, so material tears rather than shears. Fix: increase spindle RPM and index to a fresh, sharp edge. On soft, gummy materials, a keener edge and coolant help most.' },
      { type: 'h2', text: 'Symptom: coarse, threaded-looking finish' },
      { type: 'p', text: 'The feed rate is too high for the tool nose radius, leaving visible feed lines. Fix: reduce the feed for the finishing pass, or fit a tool with a larger nose radius.' },
      { type: 'h2', text: 'Symptom: bright but rough patches' },
      { type: 'p', text: 'Built-up edge — material welding to the tool tip, common on mild steel and aluminium. Fix: raise cutting speed, use coolant, and switch to a sharper, polished-edge tool.' },
      { type: 'h2', text: 'The finishing-pass recipe' },
      { type: 'ol', items: [
        'Use a sharp edge and a suitable nose radius.',
        'Set a higher speed and a light, steady feed.',
        'Take a small, consistent depth of cut (0.2–0.5 mm).',
        'Apply coolant to the cut.',
        'Support long work with the tailstock or a steady rest.'
      ] },
      { type: 'note', text: 'Change one variable at a time. Jumping speed, feed and depth together makes it impossible to know what actually fixed the finish.' },
      { type: 'cta', text: 'Want advice on tooling and speeds for your material on a Uni-Tech lathe? Talk to our factory team.' }
    ],
    faq: [
      { q: 'Why is my turned surface torn and ragged?', a: 'Usually cutting speed is too low or the tool edge is dull. Increase RPM and use a fresh, sharp edge; add coolant on gummy materials.' },
      { q: 'How do I remove feed lines from a finish?', a: 'Reduce the feed rate on the finishing pass or use a tool with a larger nose radius so consecutive passes overlap more smoothly.' },
      { q: 'What causes shiny rough patches on mild steel?', a: 'Built-up edge, where material welds to the tool tip. Raise cutting speed, use coolant and switch to a sharper, polished edge.' }
    ],
    related: ['lathe-chatter-causes-and-fixes', 'lathe-not-cutting-threads-correctly', 'all-geared-high-speed-lathe-maintenance']
  },

  {
    slug: 'lathe-not-cutting-threads-correctly',
    productId: 'heavy-duty-gear-head-lathe',
    productName: 'Heavy Duty Gear Head Lathe Machine',
    productCode: 'UT/HG-9',
    price: '₹ 3,75,500',
    image: 'img/products/new/heavy-duty-gear-head-lathe.jpg',
    topic: 'troubleshooting',
    title: 'Lathe Not Cutting Threads Correctly? Diagnose It Here',
    metaTitle: 'Lathe Threading Problems — Wrong Pitch, Drunken Threads | Uni-Tech',
    metaDescription: 'Wrong thread pitch, drunken threads, torn crests or a stripped start? Diagnose common single-point threading faults on a geared lathe and fix the gearbox, half-nut and tool setup.',
    keywords: 'lathe threading problems, wrong thread pitch, drunken thread, single point threading, half nut, change gears, thread not matching',
    date: '2026-03-30',
    updated: '2026-03-30',
    readMins: 7,
    excerpt: 'Threading faults are almost always setup, not the machine. Match your symptom to the cause and get clean threads on the next pass.',
    body: [
      { type: 'p', text: 'Single-point threading exposes any error in setup immediately. On a geared lathe like the UT/HG-9, the Norton gearbox does the hard work — so most threading faults come down to gearbox selection, the half-nut, or the tool. Here is how to diagnose each symptom.' },
      { type: 'h2', text: 'Symptom: pitch is wrong' },
      { type: 'p', text: 'The thread does not match the gauge or mating part. Cause: the gearbox lever or change-gear setup is on the wrong position. Fix: re-check the thread chart on the machine and set the levers or change gears exactly as shown for your target pitch or TPI.' },
      { type: 'h2', text: 'Symptom: drunken (wavy) thread' },
      { type: 'p', text: 'The thread wanders instead of running true. Cause: worn half-nuts, a loose lead screw, or backlash in the drive. Fix: inspect the half-nut engagement and lead-screw end float; a worn half-nut needs replacement.' },
      { type: 'h2', text: 'Symptom: thread does not pick up on the second pass' },
      { type: 'p', text: 'Each pass cuts a fresh, offset groove. Cause: the half-nut is being engaged at a different point each time. Fix: use the thread-chasing dial and always engage the half-nut on the same numbered line for that pitch.' },
      { type: 'h2', text: 'Symptom: torn or rough thread crests' },
      { type: 'p', text: 'Cause: dull tool, wrong tool angle, or too-fast infeed. Fix: grind or index a sharp 60° (metric/UN) tool, set it on centre height and square to the work with a thread gauge, and take lighter final passes.' },
      { type: 'h2', text: 'Symptom: thread tapered along its length' },
      { type: 'p', text: 'Cause: the tailstock is offset, or the work is only chuck-held and flexing. Fix: align the tailstock to zero offset and support long work between centres.' },
      { type: 'note', text: 'Before cutting to depth, take a light scratch pass and check the pitch with a thread gauge. It costs one pass and saves scrapping the part.' },
      { type: 'cta', text: 'The UT/HG-9 cuts 17 metric and 40 inch threads directly through its Norton gearbox. Need the thread chart or change-gear set for your machine? Contact us.' }
    ],
    faq: [
      { q: 'Why is my lathe cutting the wrong thread pitch?', a: 'The gearbox levers or change gears are set to the wrong position. Re-check the thread chart on the machine and match the lever settings exactly to your target pitch or TPI.' },
      { q: 'What causes a drunken thread?', a: 'Worn half-nuts, a loose lead screw, or drive backlash let the tool wander. Inspect half-nut engagement and lead-screw end float; replace worn half-nuts.' },
      { q: 'Why won\u2019t my thread pick up on the next pass?', a: 'The half-nut is being engaged at a different point each pass. Use the thread-chasing dial and always engage on the same numbered line for that pitch.' }
    ],
    related: ['lathe-chatter-causes-and-fixes', 'lathe-poor-surface-finish-fix', 'heavy-duty-gear-head-lathe-specifications']
  }

];

if (typeof window !== 'undefined') { window.BLOG_DATA = BLOG_DATA; window.BLOG_TOPICS = BLOG_TOPICS; }
