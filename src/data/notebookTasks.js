// Notebook tasks to complete in physical notebook after each day's lesson
// English: 500+ word essay covering the day's learning
// Maths: 5 Year-10 level problems covering the day's content
// Science: Written explanation/observation task

export const NOTEBOOK_TASKS = {
  english: [
    {
      day: 1,
      title: "Sentence Structure Essay",
      prompt: "Write an essay (minimum 500 words) explaining the three types of sentences: simple, compound, and complex. Include at least 3 examples of each type. Explain what FANBOYS stands for and give examples of how coordinating conjunctions join sentences. End with a paragraph showing how mixing sentence types makes writing more interesting — demonstrate this in your own writing style.",
      checklist: ["At least 500 words", "3 examples of simple sentences", "3 examples of compound sentences using FANBOYS", "3 examples of complex sentences with subordinating conjunctions", "Explanation of comma splice error", "Final paragraph demonstrating mixed sentence types"]
    },
    {
      day: 2,
      title: "Spelling Patterns & Rules Essay",
      prompt: "Write an essay (minimum 500 words) about English spelling patterns and rules. Cover the key rules you learned today: i before e, doubling consonants, dropping the silent e, changing y to i. For each rule, explain WHEN it applies and give at least 3 examples. Include a section about common exceptions to these rules and explain why English spelling can be tricky (its history of borrowing from other languages). End with your own strategy for remembering difficult spellings.",
      checklist: ["At least 500 words", "4 spelling rules explained with examples", "Exceptions mentioned for each rule", "Historical context of English spelling", "Personal spelling strategy described"]
    },
    {
      day: 3,
      title: "Punctuation Mastery Essay",
      prompt: "Write an essay (minimum 500 words) demonstrating your mastery of punctuation. Cover: commas (listing, joining, embedding), semicolons, colons, apostrophes (possession and contraction), and speech marks. For each punctuation mark, explain the rule AND demonstrate it correctly in a sentence. Include a section about common punctuation mistakes students make and how to avoid them. Write your final paragraph as a piece of descriptive writing that uses ALL the punctuation marks you've discussed.",
      checklist: ["At least 500 words", "Correct use of commas (3 types)", "Semicolons explained and demonstrated", "Colons explained and demonstrated", "Apostrophes for possession AND contraction", "Speech marks correctly used", "Final paragraph using all punctuation types"]
    },
    {
      day: 4,
      title: "PEEL Paragraph Writing",
      prompt: "Write an essay (minimum 500 words) structured entirely using PEEL paragraphs. Your topic is: 'Should schools allow students to use mobile phones during break time?' Write 3 full PEEL paragraphs — one arguing FOR, one arguing AGAINST, and one giving your balanced conclusion. Before your paragraphs, write a brief explanation of what P-E-E-L stands for and why this structure helps you score higher marks. Label each part (Point, Evidence, Explain, Link) in brackets so it's clear you understand the structure.",
      checklist: ["At least 500 words", "Explanation of PEEL structure", "3 complete PEEL paragraphs", "Each section labelled (P, E, E, L)", "One paragraph FOR the argument", "One paragraph AGAINST", "Balanced conclusion paragraph"]
    },
    {
      day: 5,
      title: "Reading Comprehension Analysis",
      prompt: "Write an essay (minimum 500 words) analysing the following short passage using the reading comprehension strategies you learned today:\n\n'The city never truly sleeps. Even at 3am, the amber glow of streetlights paints shadows on empty pavements, while somewhere a siren wails its urgent song. The homeless man on the bench pulls his newspaper blanket tighter, as if the headlines could shield him from the cold that creeps between the buildings like a thief.'\n\nIn your essay: identify the language techniques used (metaphor, simile, personification, imagery), explain what effect each has on the reader, discuss the writer's purpose, and give your personal response. Use PEE structure (Point, Evidence, Explain) for each technique you identify.",
      checklist: ["At least 500 words", "At least 4 language techniques identified", "Evidence quoted from the text", "Effect on reader explained for each", "Writer's purpose discussed", "PEE structure used", "Personal response included"]
    },
    {
      day: 6,
      title: "Analytical Writing & TEEL Essay",
      prompt: "Write an analytical essay (minimum 500 words) using TEEL structure about a book, film, or TV show you know well. Your essay question is: 'How does the creator use [a character/setting/conflict] to explore an important theme?' Write at least 3 TEEL paragraphs. Each paragraph should have: Topic sentence, Evidence (quote or specific detail), Explanation of how the evidence supports your point, and a Linking sentence that connects back to the question. Include an introduction and conclusion.",
      checklist: ["At least 500 words", "Clear introduction stating your argument", "At least 3 TEEL paragraphs", "Specific evidence/quotes used", "Analysis explains HOW evidence supports points", "Linking sentences connect to the question", "Conclusion summarises argument"]
    },
    {
      day: 7,
      title: "Full Practice Essay — Combining All Skills",
      prompt: "Write a complete essay (minimum 500 words) on this topic: 'Describe a place that is important to you and explain why it matters.'\n\nThis essay must demonstrate EVERYTHING you've learned this week:\n- Varied sentence types (simple, compound, complex)\n- Correct spelling throughout\n- Accurate punctuation (commas, semicolons, apostrophes)\n- PEEL/TEEL paragraph structure\n- Language techniques (metaphor, simile, personification)\n- Clear analytical explanation\n\nWrite with confidence and creativity. This is your chance to show how far you've come in 7 days!",
      checklist: ["At least 500 words", "Mix of sentence types used", "Correct spelling throughout", "Accurate and varied punctuation", "Clear paragraph structure (PEEL/TEEL)", "At least 3 language techniques used", "Engaging opening and satisfying conclusion", "Personal voice and creativity shown"]
    }
  ],
  maths: [
    {
      day: 1,
      title: "Surds & Indices — Notebook Problems",
      problems: [
        "Simplify fully: √180 + 2√45 − √20. Show all working.",
        "Rationalise the denominator: (3 + √2) ÷ √2. Express in the form a + b√2.",
        "Evaluate without a calculator: 64^(2/3) + 27^(-1/3). Show each step clearly.",
        "Simplify: (2√3)² × √12 ÷ √4. Give your answer in simplest surd form.",
        "Solve for x: 4^(x+1) = 8^(x-1). Express your answer as a fraction. (Hint: write both sides as powers of 2)"
      ]
    },
    {
      day: 2,
      title: "Expanding & Factorising — Notebook Problems",
      problems: [
        "Expand and simplify: (3x + 2)(2x − 5) − (x + 4)(x − 1). Show all working.",
        "Factorise completely: 6x² + 7x − 20. Use the method of splitting the middle term.",
        "Expand (2x − 3)³. Show each step of the expansion clearly.",
        "Factorise: 4x² − 25y². State the algebraic identity you used and why it works.",
        "The area of a rectangle is (6x² + 11x − 10) cm². Find expressions for the length and width by factorising. If x = 3, find the actual area and verify your answer."
      ]
    },
    {
      day: 3,
      title: "Quadratic Equations — Notebook Problems",
      problems: [
        "Solve by factorising: 2x² + 5x − 12 = 0. Verify both solutions by substitution.",
        "Solve using the quadratic formula: 3x² − 7x + 2 = 0. Give exact answers (surds if needed).",
        "Complete the square for: x² + 6x − 4 = 0. Hence find the minimum value of x² + 6x − 4 and state where it occurs.",
        "A ball is thrown upward. Its height h metres after t seconds is h = −5t² + 20t + 3. Find: (a) the maximum height, (b) when it hits the ground. Show full working.",
        "The sum of a number and its reciprocal is 2.5. Set up and solve a quadratic equation to find both possible values of the number."
      ]
    },
    {
      day: 4,
      title: "Simultaneous Equations — Notebook Problems",
      problems: [
        "Solve simultaneously by elimination: 3x + 4y = 18 and 5x − 2y = 4. Check your answer in both equations.",
        "Solve simultaneously by substitution: y = x² − 3x + 1 and y = 2x − 3. State how many solutions exist and explain why geometrically.",
        "At a café, 3 coffees and 2 teas cost $14.50, while 2 coffees and 5 teas cost $16.00. Find the cost of one coffee and one tea. Set up equations and solve.",
        "Solve: x + y = 7 and x² + y² = 25. (Hint: substitute y = 7 − x into the second equation.)",
        "Two consecutive odd numbers have a product of 195. Set up simultaneous equations (or a quadratic) and find both numbers. Show that your answer is correct."
      ]
    },
    {
      day: 5,
      title: "Trigonometry — Notebook Problems",
      problems: [
        "In triangle ABC, angle A = 90°, AB = 8cm, BC = 17cm. Find: (a) AC, (b) sin B, (c) angle B to 1 d.p. Show all working.",
        "From the top of a 45m tall building, the angle of depression to a car is 32°. How far is the car from the base of the building? Draw a diagram.",
        "Solve for x in the range 0° ≤ x ≤ 360°: 2sin(x) − 1 = 0. Give all solutions and explain why there are multiple answers.",
        "A ladder 6m long leans against a wall making an angle of 72° with the ground. (a) How high up the wall does it reach? (b) How far is the base from the wall? (c) If safety guidelines say the angle must be between 70° and 80°, what range of heights can the ladder safely reach?",
        "In triangle PQR, PQ = 9cm, QR = 12cm, and angle PQR = 55°. Find the area of the triangle using the formula Area = ½ab sin C. Then find the length PR using the cosine rule."
      ]
    },
    {
      day: 6,
      title: "Probability & Statistics — Notebook Problems",
      problems: [
        "A bag contains 4 red, 3 blue, and 5 green marbles. Two marbles are drawn WITHOUT replacement. Find P(both red). Draw a tree diagram showing all possibilities for the first two draws.",
        "The mean of 8 numbers is 12. When a 9th number is added, the mean becomes 13. What is the 9th number? Show your working.",
        "50 students' test scores: 10-20 (5 students), 20-30 (8), 30-40 (15), 40-50 (12), 50-60 (7), 60-70 (3). (a) Estimate the mean. (b) Find the modal class. (c) In which class does the median lie?",
        "Events A and B are such that P(A) = 0.4, P(B) = 0.5, P(A and B) = 0.15. (a) Find P(A or B). (b) Are A and B independent? Justify your answer. (c) Find P(A given B).",
        "A spinner has sections numbered 1-5. The probability of each number is: P(1)=0.1, P(2)=0.2, P(3)=0.3, P(4)=0.25, P(5)=0.15. (a) Verify these probabilities are valid. (b) Find P(odd number). (c) The spinner is spun twice. Find P(total > 7)."
      ]
    },
    {
      day: 7,
      title: "Financial Maths & Revision — Notebook Problems",
      problems: [
        "Emma invests $5000 at 4.5% per annum compound interest. (a) Write the formula. (b) Find the value after 3 years. (c) How many full years until the investment doubles? Show working.",
        "A car costs $32,000. It depreciates at 15% per year. (a) Find its value after 4 years. (b) After how many years is it first worth less than $10,000? (c) The owner wants to sell when it's worth $20,000 — when should they sell?",
        "A phone plan costs $45/month with $0.10 per text. An alternative plan costs $30/month with $0.25 per text. (a) Set up equations for cost C in terms of texts t. (b) For what number of texts are both plans equal? (c) Which plan is better if you send 150 texts/month?",
        "Simplify: (√50 + √18)² − (√32)². Give your answer as an integer. Show full working using surd rules from Day 1.",
        "A quadratic sequence starts: 3, 8, 15, 24, 35, ... (a) Find the nth term formula. (b) Is 120 a term in this sequence? Solve the equation and justify your answer. (c) Which term first exceeds 200?"
      ]
    }
  ],
  science: [
    {
      day: 1,
      title: "Disease Basics — Written Task",
      prompt: "Write a detailed explanation (minimum 300 words) answering: 'Compare and contrast the four types of pathogen (bacteria, viruses, fungi, protists). For each, give one named disease example and explain how it spreads.' Then draw and label a diagram in your notebook showing the chain of infection (pathogen → reservoir → portal of exit → mode of transmission → portal of entry → new host).",
      checklist: ["At least 300 words written", "All 4 pathogen types described", "Named disease for each", "Transmission method for each", "Chain of infection diagram drawn and labelled"]
    },
    {
      day: 2,
      title: "Immune System — Written Task",
      prompt: "Write a detailed explanation (minimum 300 words) describing the body's three lines of defence against pathogens. For each line, explain what it does and give specific examples. Then explain how vaccines work using the correct scientific terminology (antigen, antibody, lymphocyte, memory cell). Draw a labelled timeline diagram showing: first infection response vs second infection response (show why the second is faster).",
      checklist: ["At least 300 words", "Three lines of defence explained", "Specific examples for each line", "Vaccine mechanism explained with key terms", "Timeline diagram comparing first and second infection"]
    },
    {
      day: 3,
      title: "Disease Prevention — Written Task",
      prompt: "Write a detailed explanation (minimum 300 words) about how diseases are prevented at different levels. Cover: personal hygiene, antibiotics (what they treat and why resistance is dangerous), vaccination programmes, and public health measures. Explain WHY antibiotic resistance develops using ideas about natural selection and mutation. Create a poster-style page in your notebook showing '5 things everyone should know about antibiotic resistance'.",
      checklist: ["At least 300 words", "Personal hygiene measures listed", "Antibiotics — what they treat and don't treat", "Antibiotic resistance explained (natural selection)", "Vaccination programmes described", "Public health measures listed", "'5 things' poster page created"]
    },
    {
      day: 4,
      title: "Ecosystems & Interdependence — Written Task",
      prompt: "Write a detailed explanation (minimum 300 words) about ecosystem interdependence. Define and explain: habitat, population, community, ecosystem, biotic factors, abiotic factors. Then choose ONE food web (e.g., a pond or woodland) and explain what would happen if one organism was removed — trace the effects through at least 3 other organisms. Draw the food web in your notebook with arrows showing energy flow.",
      checklist: ["At least 300 words", "Key terms defined correctly", "Food web drawn with arrows", "Removal scenario traced through 3+ organisms", "Biotic and abiotic factors explained with examples"]
    },
    {
      day: 5,
      title: "Human Impact on Ecosystems — Written Task",
      prompt: "Write a detailed explanation (minimum 300 words) about three ways humans negatively impact the environment: deforestation, pollution (air/water), and global warming. For each, explain the CAUSE, the EFFECT on living organisms, and ONE solution. Use scientific terminology. In your notebook, create a cause-and-effect flowchart for global warming (from burning fossil fuels → increased CO₂ → greenhouse effect → consequences).",
      checklist: ["At least 300 words", "Three human impacts described", "Cause, effect, and solution for each", "Scientific terminology used correctly", "Global warming flowchart drawn", "At least 4 consequences of global warming listed"]
    },
    {
      day: 6,
      title: "Sustainability & Conservation — Written Task",
      prompt: "Write a detailed explanation (minimum 300 words) about sustainability and conservation. Explain what sustainability means in scientific terms. Describe three conservation methods (breeding programmes, habitat protection, reducing waste). Then write a 'letter to a Year 7 student' explaining why biodiversity matters and what they can do to help. Use accessible language but include correct science.",
      checklist: ["At least 300 words", "Sustainability defined scientifically", "Three conservation methods explained", "Biodiversity importance explained", "Letter to Year 7 student written", "Practical actions suggested"]
    },
    {
      day: 7,
      title: "Scientific Investigation Skills — Written Task",
      prompt: "Write a detailed explanation (minimum 300 words) of how to plan and carry out a scientific investigation. Cover: writing a hypothesis, identifying variables (independent, dependent, control), choosing equipment, collecting data, drawing conclusions. Then plan your OWN investigation in your notebook: 'Does the temperature of water affect how fast sugar dissolves?' Write a full method (step by step), identify all variables, predict a result, and describe what graph you would draw.",
      checklist: ["At least 300 words", "Hypothesis writing explained", "Variables explained (IV, DV, CV)", "Equipment selection discussed", "Your own investigation planned", "Step-by-step method written", "Variables identified", "Graph type chosen and justified"]
    }
  ]
}
