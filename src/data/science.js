export const SCIENCE_CURRICULUM = [
  {
    day: 1,
    title: "Disease Basics",
    lesson: {
      content: `<p><strong>Infectious diseases</strong> are caused by pathogens (germs) and can spread between people. <strong>Non-infectious diseases</strong> like diabetes or cancer cannot spread — they're caused by genetics, lifestyle, or environment.</p>
<p>There are four main types of pathogen: <strong>bacteria</strong> (single-celled organisms, e.g. salmonella), <strong>viruses</strong> (tiny particles that hijack your cells, e.g. flu), <strong>fungi</strong> (e.g. athlete's foot), and <strong>protists</strong> (e.g. malaria parasite). Think of pathogens as uninvited guests — each type breaks in differently.</p>
<p>Pathogens spread through air (droplets), water, direct contact, or vectors (animals like mosquitoes). Once inside, they reproduce rapidly and produce toxins that make you ill.</p>`,
      keyPoints: [
        "Infectious diseases spread between organisms; non-infectious cannot",
        "Four pathogen types: bacteria, viruses, fungi, protists",
        "Pathogens spread via air, water, contact, or vectors",
        "Pathogens cause harm by reproducing and releasing toxins"
      ]
    },
    flashcards: [
      { front: "What is a pathogen?", back: "A microorganism that causes disease (bacteria, virus, fungus, or protist)" },
      { front: "Name the 4 types of pathogen", back: "Bacteria, viruses, fungi, protists" },
      { front: "What is the difference between infectious and non-infectious disease?", back: "Infectious diseases can spread between organisms; non-infectious cannot" },
      { front: "What is a vector?", back: "An organism that carries and transmits a pathogen without getting the disease itself (e.g. mosquito)" },
      { front: "How do pathogens make you feel ill?", back: "They reproduce rapidly inside the body and release toxins that damage cells" }
    ],
    quiz: [
      { question: "Which of these is a viral disease?", options: ["Salmonella", "Influenza", "Athlete's foot", "Malaria"], correct: 1, explanation: "Influenza (flu) is caused by a virus. Salmonella is bacterial, athlete's foot is fungal, malaria is caused by a protist." },
      { question: "Which is a non-infectious disease?", options: ["COVID-19", "Cholera", "Type 2 diabetes", "Measles"], correct: 2, explanation: "Type 2 diabetes cannot spread between people — it's linked to lifestyle and genetics." },
      { question: "How does malaria spread?", options: ["Airborne droplets", "Contaminated water", "Mosquito vector", "Direct contact"], correct: 2, explanation: "Malaria is spread by mosquitoes (vectors) that carry the protist parasite Plasmodium." },
      { question: "Bacteria cause disease by:", options: ["Hijacking cells to reproduce", "Releasing toxins", "Forming spores only", "Changing your DNA"], correct: 1, explanation: "Bacteria reproduce rapidly and release toxins that damage tissues and make you ill." }
    ],
    experiment: {
      title: "Spread of Germs Simulation",
      description: "Demonstrate how quickly pathogens can spread through contact using glitter as a 'germ' substitute.",
      materials: ["Fine glitter", "Hand lotion", "Paper towels", "Soap and water"],
      steps: ["Apply a thin layer of lotion to your hands", "Sprinkle glitter onto your palms (this represents pathogens)", "Shake hands with a family member or touch various surfaces (door handles, phone)", "Observe where the glitter has spread", "Now wash hands thoroughly with soap — check if all glitter is removed"],
      observation: "The glitter spreads to everything you touch, showing how easily pathogens transfer through contact. Proper handwashing removes most but you may find traces remain in creases — showing why thorough washing matters."
    }
  },
  {
    day: 2,
    title: "Immune System",
    lesson: {
      content: `<p>Your body has three lines of defence. <strong>First:</strong> physical barriers like skin, mucus, and stomach acid stop pathogens entering. <strong>Second:</strong> if pathogens get in, white blood cells respond with a general attack (inflammation, fever).</p>
<p><strong>Third line:</strong> specific white blood cells called <strong>lymphocytes</strong> produce <strong>antibodies</strong> — proteins shaped to lock onto specific pathogens and destroy them. Think of antibodies as custom-made keys that only fit one lock (pathogen). Your body remembers these shapes for next time.</p>
<p><strong>Vaccines</strong> work by introducing dead or weakened pathogens. Your body makes antibodies without getting ill, and memory cells remain so you respond faster if the real pathogen arrives.</p>`,
      keyPoints: [
        "Three lines of defence: barriers → general response → specific antibodies",
        "Lymphocytes produce antibodies specific to each pathogen",
        "Memory cells allow faster response on re-infection",
        "Vaccines use dead/weakened pathogens to trigger immunity safely"
      ]
    },
    flashcards: [
      { front: "What are the body's physical barriers to infection?", back: "Skin, mucus in airways, stomach acid, tears (contain enzymes)" },
      { front: "What do antibodies do?", back: "Lock onto specific antigens on pathogens, marking them for destruction" },
      { front: "What are memory cells?", back: "White blood cells that remember a pathogen so the immune response is faster next time" },
      { front: "How do vaccines work?", back: "Introduce dead/weakened pathogens to trigger antibody production and memory cell formation without causing illness" },
      { front: "What is the difference between antigens and antibodies?", back: "Antigens are proteins on pathogen surfaces; antibodies are proteins made by your body to match and attack specific antigens" }
    ],
    quiz: [
      { question: "Which is NOT a physical barrier to infection?", options: ["Skin", "Stomach acid", "Antibodies", "Mucus"], correct: 2, explanation: "Antibodies are part of the specific immune response (3rd line), not a physical barrier." },
      { question: "What do vaccines contain?", options: ["Antibiotics", "Dead or weakened pathogens", "White blood cells", "Painkillers"], correct: 1, explanation: "Vaccines contain dead or weakened forms of a pathogen to stimulate immunity." },
      { question: "Why is a second infection by the same pathogen fought faster?", options: ["Skin becomes thicker", "Memory cells produce antibodies quickly", "You take medicine", "Pathogens get weaker"], correct: 1, explanation: "Memory cells from the first infection recognise the pathogen and produce antibodies much faster." },
      { question: "Lymphocytes are a type of:", options: ["Red blood cell", "Platelet", "White blood cell", "Plasma"], correct: 2, explanation: "Lymphocytes are white blood cells responsible for producing specific antibodies." }
    ],
    experiment: {
      title: "Yeast and Temperature (Modelling Immune Response)",
      description: "Observe how temperature affects yeast activity — modelling how fever helps fight infection by making conditions harder for pathogens.",
      materials: ["Dried yeast", "Sugar", "3 cups of warm, cold, and hot water", "Balloons", "3 small bottles"],
      steps: ["Add 1 tsp yeast and 1 tsp sugar to each bottle", "Add cold water (5°C) to bottle 1, warm water (37°C) to bottle 2, hot water (60°C) to bottle 3", "Stretch a balloon over each bottle opening", "Wait 20 minutes and observe which balloon inflates most"],
      observation: "The warm water balloon inflates most — yeast (like pathogens) thrives at body temperature. Very hot water kills it, showing why fever can help slow pathogen growth. The body raises temperature as a defence mechanism."
    }
  },
  {
    day: 3,
    title: "Disease Prevention",
    lesson: {
      content: `<p><strong>Hygiene</strong> is the simplest way to prevent disease spread: handwashing, clean water, and proper food preparation. Public health measures like sewage treatment and clean water supplies have saved more lives than almost any medicine.</p>
<p><strong>Antibiotics</strong> kill bacteria (not viruses!). Overusing them creates <strong>antibiotic-resistant</strong> bacteria (superbugs like MRSA). This happens because random mutations make some bacteria survive — these reproduce and pass on resistance. Always finish your course!</p>
<p><strong>Public health</strong> strategies include vaccination programmes, quarantine, health education, and screening. These work at population level to reduce disease spread and catch problems early.</p>`,
      keyPoints: [
        "Hygiene and sanitation prevent most disease transmission",
        "Antibiotics kill bacteria only — they don't work on viruses",
        "Overuse of antibiotics leads to resistant superbugs",
        "Public health: vaccination programmes, quarantine, screening"
      ]
    },
    flashcards: [
      { front: "Why don't antibiotics work on viruses?", back: "Viruses live inside your cells — antibiotics target bacterial cell structures that viruses don't have" },
      { front: "What is antibiotic resistance?", back: "When bacteria evolve to survive antibiotics through natural selection of resistant mutations" },
      { front: "Name 3 public health measures to prevent disease", back: "Vaccination programmes, clean water/sewage treatment, quarantine of infected people" },
      { front: "Why must you finish a course of antibiotics?", back: "Stopping early may leave partially-resistant bacteria alive, which can reproduce and become fully resistant" },
      { front: "What is MRSA?", back: "Methicillin-Resistant Staphylococcus Aureus — a 'superbug' resistant to many antibiotics" }
    ],
    quiz: [
      { question: "Antibiotics are effective against:", options: ["Viruses only", "Bacteria only", "All pathogens", "Fungi only"], correct: 1, explanation: "Antibiotics specifically target bacteria. Viruses need antivirals, fungi need antifungals." },
      { question: "Antibiotic resistance happens because:", options: ["People don't wash hands", "Resistant bacteria survive and reproduce (natural selection)", "Antibiotics expire", "Doctors prescribe wrong doses"], correct: 1, explanation: "Natural selection: bacteria with resistance mutations survive antibiotic treatment and pass genes to offspring." },
      { question: "Which prevents the MOST deaths globally?", options: ["Antibiotics", "Surgery", "Clean water and sanitation", "Painkillers"], correct: 2, explanation: "Clean water and sanitation prevent waterborne diseases that historically killed millions — the biggest public health achievement." },
      { question: "What is quarantine?", options: ["A type of vaccine", "Isolating infected/exposed people to prevent spread", "A cleaning chemical", "A type of antibiotic"], correct: 1, explanation: "Quarantine separates people who may have been exposed to a disease to prevent further transmission." }
    ],
    experiment: {
      title: "Handwashing Effectiveness with Bread",
      description: "Test how effective handwashing is at removing bacteria by touching bread with clean vs dirty hands.",
      materials: ["3 slices of white bread", "3 sealable plastic bags", "Marker pen", "Dirty hands, washed hands, sanitised hands"],
      steps: ["Label bags: 'unwashed', 'soap-washed', 'control (untouched)'", "Touch one slice with unwashed hands, seal in bag", "Wash hands thoroughly with soap, touch second slice, seal in bag", "Place third slice in bag without touching (use tongs)", "Leave all bags in a warm place for 5-7 days and observe mould growth"],
      observation: "The unwashed slice grows the most mould/bacteria colonies. The soap-washed slice grows less. The control grows least. This shows handwashing significantly reduces pathogen transfer."
    }
  },
  {
    day: 4,
    title: "Ecosystems",
    lesson: {
      content: `<p>An <strong>ecosystem</strong> is a community of living organisms interacting with their environment. Energy enters via <strong>producers</strong> (plants) that photosynthesise, then flows through <strong>consumers</strong>: herbivores eat plants, carnivores eat herbivores, and decomposers break down dead matter.</p>
<p>A <strong>food chain</strong> shows energy transfer: grass → rabbit → fox. A <strong>food web</strong> shows interconnected chains. At each level, about 90% of energy is lost as heat (respiration), which is why food chains rarely exceed 4-5 levels.</p>
<p><strong>Interdependence</strong> means organisms rely on each other. Remove one species and the whole web is affected — predator numbers drop, prey numbers explode, plants get overgrazed. Balance matters.</p>`,
      keyPoints: [
        "Energy flows: sun → producers → primary consumers → secondary consumers → decomposers",
        "~90% of energy is lost at each trophic level (as heat from respiration)",
        "Food webs show interconnected food chains in an ecosystem",
        "Removing one species causes knock-on effects throughout the web"
      ]
    },
    flashcards: [
      { front: "What is a producer?", back: "An organism that makes its own food via photosynthesis (plants, algae)" },
      { front: "Why are food chains usually only 4-5 levels long?", back: "About 90% of energy is lost as heat at each level, so there's not enough energy to support more levels" },
      { front: "What is interdependence?", back: "Organisms in an ecosystem relying on each other for food, shelter, pollination, etc." },
      { front: "What is the role of decomposers?", back: "Break down dead organisms and waste, returning nutrients to the soil for producers to reuse" },
      { front: "What is a trophic level?", back: "A feeding level in a food chain (e.g. producer = level 1, primary consumer = level 2)" }
    ],
    quiz: [
      { question: "In the chain: grass → grasshopper → frog → snake, the frog is a:", options: ["Producer", "Primary consumer", "Secondary consumer", "Decomposer"], correct: 2, explanation: "The frog eats the grasshopper (primary consumer), making the frog a secondary consumer — the third trophic level." },
      { question: "About how much energy transfers between trophic levels?", options: ["90%", "50%", "10%", "1%"], correct: 2, explanation: "Only about 10% of energy passes to the next level — the rest is lost as heat through respiration." },
      { question: "If foxes were removed from an ecosystem, rabbit numbers would likely:", options: ["Decrease", "Stay the same", "Increase then decrease", "Increase only"], correct: 2, explanation: "Rabbits increase without predators, then overgraze plants, then decrease due to food shortage — a boom-bust cycle." },
      { question: "Which organism starts almost every food chain?", options: ["Herbivore", "Carnivore", "Green plant", "Decomposer"], correct: 2, explanation: "Green plants (producers) capture sunlight energy through photosynthesis — they're the base of nearly all food chains." }
    ],
    experiment: {
      title: "Building a Mini Ecosystem (Bottle Garden)",
      description: "Create a sealed ecosystem to observe how energy and matter cycle in a closed system.",
      materials: ["Large clear plastic bottle", "Soil", "Small plants (moss or small fern)", "Water spray", "Tape/cling film"],
      steps: ["Cut bottle in half, add 3cm of damp soil to bottom half", "Plant small moss or fern in the soil", "Spray lightly with water", "Tape the top half back on to seal it completely", "Place in indirect sunlight and observe over 2 weeks"],
      observation: "Water cycles inside (condensation on walls, dripping back down). Plants photosynthesise using light, producing oxygen. Decomposers in soil recycle nutrients. This models how ecosystems recycle matter while energy enters from outside (sunlight)."
    }
  },
  {
    day: 5,
    title: "Human Impact on Environment",
    lesson: {
      content: `<p>Humans affect the environment through <strong>pollution</strong> (air, water, land), <strong>deforestation</strong>, and burning fossil fuels. Air pollution from vehicles and factories releases CO₂, sulfur dioxide (acid rain), and particulates that damage lungs.</p>
<p>The <strong>greenhouse effect</strong> is natural and keeps Earth warm. But extra CO₂ and methane from human activity trap more heat, causing <strong>global warming</strong>. Consequences: ice caps melt, sea levels rise, extreme weather increases, habitats are destroyed.</p>
<p><strong>Biodiversity loss</strong> happens through habitat destruction, pollution, and climate change. Less biodiversity means ecosystems are less resilient — like removing rivets from a plane, eventually it falls apart.</p>`,
      keyPoints: [
        "Burning fossil fuels releases CO₂ → enhanced greenhouse effect → global warming",
        "Greenhouse gases (CO₂, methane) trap heat that would otherwise escape to space",
        "Consequences: rising sea levels, extreme weather, habitat loss, species extinction",
        "Deforestation reduces CO₂ absorption and destroys habitats"
      ]
    },
    flashcards: [
      { front: "What is the greenhouse effect?", back: "Gases in the atmosphere trap heat from the sun, keeping Earth warm. Human activity enhances this, causing warming." },
      { front: "Name 3 greenhouse gases", back: "Carbon dioxide (CO₂), methane (CH₄), water vapour" },
      { front: "How does deforestation contribute to climate change?", back: "Fewer trees means less CO₂ absorbed by photosynthesis, plus burning trees releases stored carbon" },
      { front: "What is biodiversity?", back: "The variety of different species living in an ecosystem" },
      { front: "Name 3 consequences of global warming", back: "Rising sea levels, more extreme weather events, loss of habitats/species extinction" }
    ],
    quiz: [
      { question: "Which gas is the main contributor to the enhanced greenhouse effect?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"], correct: 2, explanation: "CO₂ from burning fossil fuels is the main driver of enhanced greenhouse effect and global warming." },
      { question: "The greenhouse effect is:", options: ["Entirely caused by humans", "A natural process enhanced by human activity", "Only harmful", "Caused by the ozone hole"], correct: 1, explanation: "The greenhouse effect is natural and necessary for life. Humans have enhanced it by adding extra greenhouse gases." },
      { question: "Deforestation affects climate because:", options: ["Trees produce CO₂", "Fewer trees means less CO₂ is absorbed from air", "Trees cause global warming", "It increases oxygen"], correct: 1, explanation: "Trees absorb CO₂ during photosynthesis. Removing them means more CO₂ stays in the atmosphere." },
      { question: "Which human activity does NOT directly increase CO₂?", options: ["Burning coal", "Driving cars", "Using wind turbines", "Deforestation"], correct: 2, explanation: "Wind turbines generate electricity without burning fuel, so they don't produce CO₂ during operation." }
    ],
    experiment: {
      title: "Greenhouse Effect in a Jar",
      description: "Model how greenhouse gases trap heat using two jars — one sealed (with CO₂-rich air) and one open.",
      materials: ["2 identical glass jars", "2 thermometers", "Cling film", "Baking soda + vinegar (to make CO₂)", "Desk lamp or sunlight"],
      steps: ["Place a thermometer in each jar", "In jar 1, add a spoonful of baking soda then a splash of vinegar (produces CO₂), quickly seal with cling film", "Leave jar 2 open as control", "Place both under a desk lamp or in direct sunlight", "Record temperature in each jar every 2 minutes for 20 minutes"],
      observation: "The sealed jar with extra CO₂ heats up faster and reaches a higher temperature. This models how greenhouse gases trap heat in Earth's atmosphere — more gas = more heat retained."
    }
  },
  {
    day: 6,
    title: "Sustainability",
    lesson: {
      content: `<p><strong>Sustainability</strong> means meeting our needs without compromising future generations' ability to meet theirs. Key idea: use resources no faster than they can be replaced.</p>
<p><strong>Renewable energy</strong> sources (solar, wind, hydroelectric, geothermal) don't run out and produce little/no CO₂. Fossil fuels (coal, oil, gas) are non-renewable — they took millions of years to form and release stored carbon when burned.</p>
<p>Your <strong>carbon footprint</strong> is the total CO₂ your activities produce. Reduce it by: using public transport, eating less meat (livestock produce methane), reducing energy use, recycling, and buying local. Conservation protects habitats and biodiversity for the future.</p>`,
      keyPoints: [
        "Sustainability: using resources at a rate they can be replenished",
        "Renewable energy (solar, wind, hydro) produces minimal greenhouse gases",
        "Carbon footprint = total greenhouse gas emissions from your activities",
        "Reduce impact: less meat, public transport, reduce-reuse-recycle, conserve energy"
      ]
    },
    flashcards: [
      { front: "What does 'sustainable' mean in science?", back: "Using resources at a rate that allows them to be replenished, so future generations aren't disadvantaged" },
      { front: "Name 4 renewable energy sources", back: "Solar, wind, hydroelectric, geothermal (also tidal, biomass)" },
      { front: "Why is eating less meat better for the environment?", back: "Livestock produce methane (greenhouse gas), require large land areas, and need crops grown to feed them (inefficient energy transfer)" },
      { front: "What is a carbon footprint?", back: "The total amount of greenhouse gases produced by a person's activities, usually measured in tonnes of CO₂ per year" },
      { front: "Why are fossil fuels non-renewable?", back: "They took millions of years to form from dead organisms — we use them far faster than they can be replaced" }
    ],
    quiz: [
      { question: "Which is a non-renewable energy source?", options: ["Solar", "Wind", "Natural gas", "Tidal"], correct: 2, explanation: "Natural gas is a fossil fuel — it takes millions of years to form and will eventually run out." },
      { question: "Which action reduces your carbon footprint MOST?", options: ["Turning off one light", "Walking instead of driving daily", "Using a paper straw", "Buying organic food"], correct: 1, explanation: "Transport is one of the biggest sources of personal CO₂ emissions. Daily walking instead of driving makes the largest reduction." },
      { question: "Why is wind energy considered sustainable?", options: ["It's cheap", "Wind will never run out and produces no CO₂ during generation", "Turbines are made of recycled materials", "It works at night"], correct: 1, explanation: "Wind is continuously renewed by the sun heating the atmosphere, and turbines produce no greenhouse gases during operation." },
      { question: "The '3 Rs' of sustainability in order of priority:", options: ["Recycle, Reduce, Reuse", "Reduce, Reuse, Recycle", "Reuse, Reduce, Recycle", "Recycle, Reuse, Reduce"], correct: 1, explanation: "Reduce first (use less), then Reuse (use again), then Recycle (make into something new). Reducing has the biggest impact." }
    ],
    experiment: {
      title: "Solar Energy Collector",
      description: "Compare how different colours absorb solar energy — demonstrating why solar panel design and colour matter.",
      materials: ["3 cups of water", "Black paper, white paper, aluminium foil", "3 thermometers", "Rubber bands", "Sunlight or desk lamp"],
      steps: ["Wrap each cup: one in black paper, one in white, one in foil", "Fill each with equal amounts of room-temperature water", "Place thermometer in each", "Put all three in direct sunlight for 30 minutes", "Record temperatures every 5 minutes"],
      observation: "Black absorbs most heat (highest temperature), white reflects most (lowest), foil reflects almost all. This explains why solar panels are dark-coloured and why wearing white keeps you cooler. Energy absorption depends on surface properties."
    }
  },
  {
    day: 7,
    title: "Scientific Investigation",
    lesson: {
      content: `<p>Good science follows a method: <strong>observe</strong> something → ask a <strong>question</strong> → form a <strong>hypothesis</strong> (testable prediction) → design a <strong>fair test</strong> → collect <strong>data</strong> → draw <strong>conclusions</strong>.</p>
<p>A <strong>fair test</strong> changes only ONE variable (independent variable) while measuring another (dependent variable) and keeping everything else constant (control variables). Without this, you can't know what caused your results.</p>
<p><strong>Reliability</strong> means getting consistent results (repeat experiments!). <strong>Validity</strong> means measuring what you intended to measure. Always consider: is my sample size big enough? Could anything else explain my results? Report honestly — even unexpected results are valuable.</p>`,
      keyPoints: [
        "Hypothesis: a testable prediction based on observations",
        "Fair test: change one variable (IV), measure one (DV), control all others",
        "Reliability = consistent results; validity = measuring what you intend",
        "Repeat experiments and use appropriate sample sizes for trustworthy conclusions"
      ]
    },
    flashcards: [
      { front: "What is a hypothesis?", back: "A testable prediction that explains an observation, often in 'if...then...' format" },
      { front: "What are the 3 types of variable?", back: "Independent (you change), Dependent (you measure), Control (you keep the same)" },
      { front: "What makes a test 'fair'?", back: "Only one variable is changed at a time while all others are kept constant" },
      { front: "What is the difference between reliability and validity?", back: "Reliability = consistent/repeatable results. Validity = the experiment actually tests what it claims to test" },
      { front: "Why do scientists repeat experiments?", back: "To check reliability — if results are consistent across repeats, they're more trustworthy and anomalies can be identified" }
    ],
    quiz: [
      { question: "In an experiment testing if light affects plant growth, the independent variable is:", options: ["Plant height", "Amount of water", "Amount of light", "Type of soil"], correct: 2, explanation: "The independent variable is what you deliberately change — here, the amount of light. Plant height is the dependent variable you measure." },
      { question: "A student gets results of 5, 5, 5, 12, 5. The 12 is likely:", options: ["The correct answer", "An anomaly (outlier)", "The dependent variable", "A control variable"], correct: 1, explanation: "12 is an anomaly — a result that doesn't fit the pattern. It should be investigated and possibly excluded from the mean." },
      { question: "Which makes an experiment more reliable?", options: ["Using expensive equipment", "Repeating it multiple times", "Having a longer hypothesis", "Using more variables"], correct: 1, explanation: "Repeating experiments shows whether results are consistent. More repeats = more confidence the results are reliable." },
      { question: "A conclusion should:", options: ["Always prove the hypothesis right", "State whether results support or disprove the hypothesis", "Ignore unexpected results", "Be written before the experiment"], correct: 1, explanation: "A conclusion states whether the evidence supports the hypothesis — it's perfectly valid to disprove your prediction." }
    ],
    experiment: {
      title: "Designing Your Own Fair Test",
      description: "Practice the scientific method by investigating which surface a toy car rolls furthest on.",
      materials: ["Toy car", "Ramp (book propped up)", "Ruler/tape measure", "Different surfaces: carpet, tile, wood, paper"],
      steps: ["Write a hypothesis: 'The car will roll furthest on ___ because ___'", "Set up ramp at consistent height (this is a control variable)", "Release car from same point each time (control variable)", "Measure distance rolled on each surface (dependent variable)", "Repeat 3 times per surface and calculate mean distance"],
      observation: "Smoother surfaces (tile, wood) allow the car to roll further due to less friction. Rough surfaces (carpet) create more friction and stop the car sooner. Your results should support or challenge your hypothesis — both outcomes are valid science!"
    }
  }
];
