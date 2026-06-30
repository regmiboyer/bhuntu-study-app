// English Curriculum - Year 9 Developing to C Grade (Week 1 of 3)
export const ENGLISH_CURRICULUM = [
  {
    day: 1,
    title: "Sentence Structure Basics",
    lesson: {
      content: `
        <p>Every sentence you write is built from simple building blocks. Once you understand these blocks, you can build anything — from a text message to an essay that earns top marks. Let's break it down! 🧱</p>

        <h3>📌 The Three Key Parts of a Sentence</h3>
        <p><strong>1. Subject</strong> — WHO or WHAT the sentence is about.<br>
        <strong>2. Verb</strong> — The ACTION or STATE (what the subject does or is).<br>
        <strong>3. Object</strong> — WHO or WHAT receives the action.</p>

        <p><em>Example:</em><br>
        🐕 <strong>The dog</strong> (subject) <strong>chased</strong> (verb) <strong>the ball</strong> (object).<br>
        📱 <strong>She</strong> (subject) <strong>sent</strong> (verb) <strong>a message</strong> (object).</p>

        <h3>📌 Simple Sentences</h3>
        <p>A simple sentence has ONE independent clause — one subject-verb pair that makes complete sense on its own.</p>
        <p><em>Examples:</em><br>
        ✅ The rain fell heavily.<br>
        ✅ Marcus finished his homework.<br>
        ✅ The school library closes at four.</p>

        <h3>📌 Compound Sentences</h3>
        <p>A compound sentence joins TWO simple sentences using a <strong>coordinating conjunction</strong>. Remember them with the mnemonic:</p>
        <p>🌟 <strong>FANBOYS</strong> = <strong>F</strong>or, <strong>A</strong>nd, <strong>N</strong>or, <strong>B</strong>ut, <strong>O</strong>r, <strong>Y</strong>et, <strong>S</strong>o</p>
        <p><em>Examples:</em><br>
        ✅ The rain fell heavily, <strong>so</strong> we stayed inside.<br>
        ✅ Marcus finished his homework, <strong>and</strong> he went to play football.<br>
        ✅ I wanted pizza, <strong>but</strong> the shop was closed.</p>

        <p>⚠️ <strong>Common mistake:</strong> Using a comma WITHOUT a conjunction creates a <strong>comma splice</strong> (a mistake!).<br>
        ❌ The rain fell heavily, we stayed inside.<br>
        ✅ The rain fell heavily, so we stayed inside.</p>

        <h3>📌 Complex Sentences</h3>
        <p>A complex sentence has one MAIN clause and one or more SUBORDINATE clauses (which can't stand alone).</p>
        <p><em>Subordinating conjunctions:</em> because, although, when, if, while, since, after, before, unless</p>
        <p><em>Examples:</em><br>
        ✅ <strong>Although</strong> the rain fell heavily, we still went for a walk.<br>
        ✅ Marcus finished his homework <strong>because</strong> he wanted to play football.<br>
        ✅ <strong>When</strong> the bell rang, everyone rushed to the door.</p>

        <p>💡 <strong>Top tip:</strong> Using a mix of simple, compound, and complex sentences makes your writing more interesting and scores higher marks!</p>
      `,
      keyPoints: [
        "Every sentence needs a subject (who/what) and a verb (action/state)",
        "Simple sentence = one independent clause",
        "Compound sentence = two independent clauses joined by FANBOYS (For, And, Nor, But, Or, Yet, So)",
        "Complex sentence = main clause + subordinate clause (because, although, when, if, etc.)",
        "Varying sentence types improves your writing grade"
      ]
    },
    flashcards: [
      { front: "What is the SUBJECT of a sentence?", back: "The person or thing the sentence is about — who or what is doing the action. E.g., 'The dog' in 'The dog chased the ball.'" },
      { front: "What does FANBOYS stand for?", back: "For, And, Nor, But, Or, Yet, So — the coordinating conjunctions used to join simple sentences into compound sentences." },
      { front: "What is a compound sentence?", back: "Two independent clauses (simple sentences) joined by a comma and a FANBOYS conjunction. E.g., 'I was tired, but I kept studying.'" },
      { front: "What is a comma splice?", back: "A mistake where two sentences are joined with only a comma and no conjunction. E.g., 'I was tired, I kept studying.' (WRONG)" },
      { front: "What is a subordinate clause?", back: "A clause that cannot stand alone as a sentence. It starts with words like because, although, when, if, while. E.g., 'because he was late'" },
      { front: "What is a complex sentence?", back: "A sentence with one main clause and at least one subordinate clause. E.g., 'Although it rained, we went outside.'" },
      { front: "Name 5 subordinating conjunctions", back: "Because, although, when, if, while, since, after, before, unless (any 5 of these!)" },
      { front: "What is the OBJECT of a sentence?", back: "The person or thing that receives the action of the verb. E.g., 'the ball' in 'The dog chased the ball.'" }
    ],
    quiz: [
      {
        question: "In the sentence 'The teacher marked the essays', what is the verb?",
        options: ["The teacher", "marked", "the essays", "teacher marked"],
        correct: 1,
        explanation: "'Marked' is the verb because it's the action — what the teacher DID."
      },
      {
        question: "Which of these is a compound sentence?",
        options: [
          "The cat sat on the mat.",
          "Because it was raining, I took an umbrella.",
          "I wanted to go out, but it was raining.",
          "Running quickly down the street."
        ],
        correct: 2,
        explanation: "It joins two independent clauses ('I wanted to go out' + 'it was raining') with the conjunction 'but'."
      },
      {
        question: "What does FANBOYS help you remember?",
        options: [
          "Types of nouns",
          "Coordinating conjunctions",
          "Subordinating conjunctions",
          "Parts of a paragraph"
        ],
        correct: 1,
        explanation: "FANBOYS = For, And, Nor, But, Or, Yet, So — the 7 coordinating conjunctions."
      },
      {
        question: "Which sentence contains a comma splice (an error)?",
        options: [
          "I like pizza, and she likes pasta.",
          "I like pizza, she likes pasta.",
          "Although I like pizza, she prefers pasta.",
          "I like pizza. She likes pasta."
        ],
        correct: 1,
        explanation: "Two independent clauses joined by ONLY a comma (no conjunction) = comma splice. It needs 'and' or a full stop."
      },
      {
        question: "'Although the exam was hard, most students passed.' — What type of sentence is this?",
        options: ["Simple", "Compound", "Complex", "Fragment"],
        correct: 2,
        explanation: "It has a subordinate clause ('Although the exam was hard') + a main clause ('most students passed') = complex sentence."
      }
    ],
    writingExercise: {
      prompt: "Write a short paragraph (5-7 sentences) about your morning routine. Include at least ONE simple sentence, ONE compound sentence (using a FANBOYS word), and ONE complex sentence (using because, although, when, or if). Underline or label each type.",
      tips: [
        "Start with a simple sentence to introduce the topic",
        "Use 'but' or 'so' to create a compound sentence about a choice you make",
        "Use 'because' or 'when' to explain WHY you do something",
        "Read each sentence aloud — if it sounds incomplete, it might be a fragment"
      ],
      wordLimit: 120
    }
  },
  {
    day: 2,
    title: "Common Spelling Rules",
    lesson: {
      content: `
        <p>Spelling can feel random, but there ARE patterns that work most of the time. Learn these rules and you'll catch most of your spelling mistakes before they happen! 🎯</p>

        <h3>📌 Rule 1: I Before E (Except After C)</h3>
        <p><strong>i before e, except after c — when the sound is "ee"</strong></p>
        <p>✅ i before e: bel<strong>ie</strong>ve, ach<strong>ie</strong>ve, fr<strong>ie</strong>nd, p<strong>ie</strong>ce, f<strong>ie</strong>ld<br>
        ✅ except after c: rec<strong>ei</strong>ve, dec<strong>ei</strong>ve, conc<strong>ei</strong>ve, c<strong>ei</strong>ling<br>
        ⚠️ Exceptions to memorise: w<strong>ei</strong>rd, s<strong>ei</strong>ze, th<strong>ei</strong>r, h<strong>ei</strong>ght, for<strong>ei</strong>gn</p>
        <p>💡 <strong>Memory trick:</strong> "I before E except after C, or when sounding like A as in neighbour and weigh"</p>

        <h3>📌 Rule 2: Doubling Consonants</h3>
        <p>When adding a suffix that starts with a vowel (-ing, -ed, -er, -est) to a word that ends in a <strong>single vowel + single consonant</strong>:</p>
        <p><strong>Double the final consonant IF the word is one syllable OR the stress is on the last syllable.</strong></p>
        <p>✅ run → ru<strong>nn</strong>ing (one syllable, ends vowel+consonant)<br>
        ✅ begin → begi<strong>nn</strong>ing (stress on last syllable: be-GIN)<br>
        ✅ stop → sto<strong>pp</strong>ed<br>
        ❌ open → opening (stress on FIRST syllable: O-pen, so don't double)<br>
        ❌ visit → visiting (stress on FIRST syllable: VI-sit)</p>

        <h3>📌 Rule 3: Drop the Silent E</h3>
        <p>When adding a suffix that starts with a <strong>vowel</strong>, drop the silent e:</p>
        <p>✅ hope → hop<strong>ing</strong> (not hopeing)<br>
        ✅ make → mak<strong>ing</strong><br>
        ✅ excite → excit<strong>ing</strong><br>
        ⚠️ KEEP the e if the suffix starts with a consonant: hope → hope<strong>ful</strong>, excite → excite<strong>ment</strong></p>

        <h3>📌 Rule 4: Changing Y to I</h3>
        <p>When a word ends in <strong>consonant + y</strong>, change y to i before adding a suffix (unless the suffix starts with i):</p>
        <p>✅ happy → happ<strong>iness</strong>, happ<strong>ily</strong><br>
        ✅ carry → carr<strong>ied</strong>, carr<strong>ies</strong><br>
        ✅ BUT: carry → carry<strong>ing</strong> (suffix starts with i, keep the y)<br>
        ✅ If vowel + y: stay → stay<strong>ed</strong> (don't change)</p>

        <h3>📌 20 Commonly Misspelled Words for Year 9</h3>
        <p>Learn these — they come up constantly in essays! 📝</p>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td>1. definitely (NOT definately)</td><td>11. separate (NOT seperate)</td></tr>
          <tr><td>2. because (NOT becuase)</td><td>12. necessary (1 collar, 2 socks: 1c, 2s)</td></tr>
          <tr><td>3. beginning (double n)</td><td>13. conscience (science inside!)</td></tr>
          <tr><td>4. argument (drop the e from argue)</td><td>14. environment (iron in the middle)</td></tr>
          <tr><td>5. disappear (1 s, 2 p's)</td><td>15. government (govern + ment)</td></tr>
          <tr><td>6. embarrass (2 r's, 2 s's)</td><td>16. immediately (immediate + ly)</td></tr>
          <tr><td>7. occasionally (2 c's, 1 s)</td><td>17. independent (ends -ent NOT -ant)</td></tr>
          <tr><td>8. accommodation (2 c's, 2 m's)</td><td>18. possession (2 s's twice!)</td></tr>
          <tr><td>9. occurrence (2 c's, 2 r's)</td><td>19. recommend (1 c, 2 m's)</td></tr>
          <tr><td>10. tomorrow (1 m, 2 r's)</td><td>20. received (ei after c!)</td></tr>
        </table>

        <p>💡 <strong>Memory trick for "necessary":</strong> A shirt has 1 <strong>C</strong>ollar and 2 <strong>S</strong>ocks = 1 c, 2 s's</p>
        <p>💡 <strong>Memory trick for "because":</strong> <strong>B</strong>ig <strong>E</strong>lephants <strong>C</strong>an <strong>A</strong>lways <strong>U</strong>nderstand <strong>S</strong>mall <strong>E</strong>lephants</p>
      `,
      keyPoints: [
        "I before E except after C (when it sounds like 'ee') — memorise the exceptions: weird, seize, their, height, foreign",
        "Double the consonant when adding -ing/-ed to one-syllable words ending in vowel+consonant (run→running, stop→stopped)",
        "Drop the silent E before vowel suffixes (hope→hoping) but keep it before consonant suffixes (hope→hopeful)",
        "Change Y to I before suffixes (happy→happiness) UNLESS the suffix starts with I (carry→carrying)",
        "Learn the 20 commonly misspelled words — use memory tricks to lock them in"
      ]
    },
    flashcards: [
      { front: "How do you remember the spelling of 'necessary'?", back: "A shirt has 1 Collar and 2 Socks — so necessary has 1 'c' and 2 's's." },
      { front: "When do you double the final consonant before -ing?", back: "When the word ends in a single vowel + single consonant AND is one syllable or stressed on the last syllable. E.g., run→running, begin→beginning." },
      { front: "What happens to a silent 'e' when you add -ing?", back: "Drop it! hope→hoping, make→making, excite→exciting. But keep it before consonant suffixes: hopeful, excitement." },
      { front: "Spell the word that means 'without doubt' (def_n_tely)", back: "DEFINITELY — remember: it has the word FINITE in the middle. Definitely. NOT 'definately'." },
      { front: "What's the rule for 'ie' vs 'ei'?", back: "I before E except after C (when it sounds like 'ee'). believe, receive. Exceptions: weird, seize, their, height, foreign." },
      { front: "When do you change Y to I before a suffix?", back: "When the word ends in consonant + y: happy→happiness, carry→carried. BUT keep Y if suffix starts with i: carrying. Keep Y if vowel + y: stayed." },
      { front: "How do you spell 'accommodation'?", back: "ACCOMMODATION — 2 c's and 2 m's. Think: it has 2 Cots and 2 Mattresses." },
      { front: "Why is 'argument' spelled without an E?", back: "You drop the silent E from 'argue' when adding -ment because... wait, this is actually an exception! Usually you keep E before consonant suffixes, but 'argument' drops it. Just memorise this one!" }
    ],
    quiz: [
      {
        question: "Which spelling is correct?",
        options: ["recieve", "receive", "receeve", "receve"],
        correct: 1,
        explanation: "After C, it's EI (not IE). 'I before E except after C' — receive, ceiling, deceive."
      },
      {
        question: "What is the correct spelling when you add -ing to 'stop'?",
        options: ["stoping", "stopping", "stoppeing", "stoping"],
        correct: 1,
        explanation: "'Stop' ends in a single vowel (o) + single consonant (p), and it's one syllable, so double the P: stopping."
      },
      {
        question: "Which is spelled correctly?",
        options: ["seperate", "separete", "separate", "seperite"],
        correct: 2,
        explanation: "SEPARATE — think: there's A RAT in separate!"
      },
      {
        question: "What happens to the word 'happy' when you add '-ness'?",
        options: ["happyness", "happiness", "happeness", "happines"],
        correct: 1,
        explanation: "Consonant + Y rule: change Y to I before the suffix. happy → happiness."
      },
      {
        question: "Which word is spelled INCORRECTLY?",
        options: ["definitely", "beginning", "occassionally", "embarrass"],
        correct: 2,
        explanation: "'Occasionally' has 2 c's but only 1 s. 'Occassionally' with 2 s's is wrong."
      }
    ],
    writingExercise: {
      prompt: "Write 10 sentences, each using one of these commonly misspelled words correctly: definitely, separate, necessary, beginning, embarrass, accommodation, occasionally, environment, independent, immediately. Try to make the sentences connect into a short story or description.",
      tips: [
        "Say each word slowly in your head before writing it",
        "Use the memory tricks: necessary (1 collar, 2 socks), because (Big Elephants Can...)",
        "After writing, check each word against the spelling list",
        "If you get stuck, break the word into parts: environ-ment, im-mediate-ly"
      ],
      wordLimit: 150
    }
  },
  {
    day: 3,
    title: "Punctuation Mastery",
    lesson: {
      content: `
        <p>Punctuation is like road signs for your reader — it tells them when to pause, stop, or pay attention. Get it right and your writing flows beautifully. Let's master the four punctuation marks that make the biggest difference to your grade! 🚦</p>

        <h3>📌 Commas (,)</h3>
        <p>Commas create SHORT pauses. Use them:</p>
        <p><strong>1. In lists:</strong><br>
        ✅ I packed my books, pens, lunch, and water bottle.</p>
        <p><strong>2. After introductory words/phrases:</strong><br>
        ✅ However, the experiment failed.<br>
        ✅ After the lesson, we went to lunch.<br>
        ✅ Unfortunately, it rained all day.</p>
        <p><strong>3. Before FANBOYS in compound sentences:</strong><br>
        ✅ I studied hard, but the test was still difficult.</p>
        <p><strong>4. Around extra information (non-essential clauses):</strong><br>
        ✅ My brother, who is 16, plays rugby.<br>
        (If you remove "who is 16", the sentence still makes sense.)</p>

        <h3>📌 Semicolons (;)</h3>
        <p>A semicolon joins two RELATED sentences without a conjunction. Think of it as stronger than a comma but softer than a full stop.</p>
        <p>✅ The exam was difficult; most students found it challenging.<br>
        ✅ She loved reading; her brother preferred gaming.<br>
        ✅ It was raining heavily; however, we decided to walk.</p>
        <p>⚠️ <strong>Rule:</strong> Both sides of a semicolon MUST be complete sentences!</p>
        <p>❌ Although it was raining; we went outside. (Wrong! 'Although it was raining' isn't a complete sentence.)</p>

        <h3>📌 Apostrophes (')</h3>
        <p>Apostrophes do TWO jobs:</p>
        <p><strong>1. Show missing letters (contractions):</strong><br>
        ✅ do not → don't | I am → I'm | they are → they're | it is → it's</p>
        <p><strong>2. Show possession (ownership):</strong><br>
        ✅ The student's book (one student owns it)<br>
        ✅ The students' books (multiple students own them)<br>
        ✅ James's car (singular name ending in s — add 's)</p>
        <p>⚠️ <strong>NEVER use an apostrophe for plurals!</strong><br>
        ❌ I bought three apple's (WRONG)<br>
        ✅ I bought three apples (RIGHT)</p>
        <p>💡 <strong>The its/it's trap:</strong><br>
        ✅ <strong>it's</strong> = it IS ("It's raining")<br>
        ✅ <strong>its</strong> = belonging to it ("The dog wagged its tail")<br>
        Memory trick: Try replacing with "it is" — if it works, use it's. If not, use its.</p>

        <h3>📌 Quotation Marks (" ")</h3>
        <p>Use quotation marks for:</p>
        <p><strong>1. Direct speech:</strong><br>
        ✅ "I can't believe it," she said.<br>
        ✅ He asked, "Are you coming?"<br>
        ⚠️ Punctuation goes INSIDE the quotation marks!</p>
        <p><strong>2. Quoting from a text (in essays):</strong><br>
        ✅ Shakespeare uses the metaphor "all the world's a stage" to suggest that...<br>
        ✅ The writer describes the setting as "bleak and unforgiving."</p>
        <p><strong>3. Titles of short works or to show irony:</strong><br>
        ✅ The poem "Ozymandias" explores themes of power.<br>
        ✅ The "solution" only made things worse.</p>
      `,
      keyPoints: [
        "Commas: lists, after introductory phrases, before FANBOYS, around extra info",
        "Semicolons join two COMPLETE related sentences; both sides must stand alone",
        "Apostrophes: contractions (don't, it's) OR possession (student's book) — NEVER for plurals",
        "it's = it is | its = belonging to it — test by substituting 'it is'",
        "Quotation marks: direct speech, quoting texts, titles — punctuation goes INSIDE"
      ]
    },
    flashcards: [
      { front: "When do you use a semicolon?", back: "To join two COMPLETE, RELATED sentences without using a conjunction. Both sides must be able to stand alone. E.g., 'She loved reading; her brother preferred gaming.'" },
      { front: "What's the difference between its and it's?", back: "it's = it IS (contraction). its = belonging to it (possession). Test: replace with 'it is'. If it works → it's. If not → its." },
      { front: "Where does punctuation go with quotation marks?", back: "INSIDE the quotation marks. ✅ 'I agree,' she said. ✅ He asked, 'Are you coming?'" },
      { front: "How do you show possession for a plural noun?", back: "Put the apostrophe AFTER the s. The students' books (multiple students). But: children's toys (irregular plural — add 's)." },
      { front: "When do you use a comma before 'and'?", back: "Before FANBOYS conjunctions in compound sentences: 'I studied hard, and I passed.' In lists, the comma before 'and' (Oxford comma) is optional but helpful." },
      { front: "What is the apostrophe rule for names ending in S?", back: "Add 's just like any other name: James's car, Marcus's book. (Some style guides allow just James' — either is fine, be consistent.)" },
      { front: "When should you NEVER use an apostrophe?", back: "Never use an apostrophe to make a word plural! ❌ apple's, DVD's, 1990's. ✅ apples, DVDs, 1990s." },
      { front: "Name 4 situations where you use a comma.", back: "1. Lists (apples, bananas, grapes). 2. After introductory words (However, ...). 3. Before FANBOYS. 4. Around non-essential information (My sister, aged 12, plays netball)." }
    ],
    quiz: [
      {
        question: "Which sentence uses the semicolon correctly?",
        options: [
          "Although it was late; I kept studying.",
          "I was tired; so I went to bed.",
          "The test was hard; many students struggled.",
          "She likes; reading and gaming."
        ],
        correct: 2,
        explanation: "'The test was hard' and 'many students struggled' are both complete sentences that are related — perfect semicolon use!"
      },
      {
        question: "Which sentence uses the apostrophe correctly?",
        options: [
          "The dog's are barking.",
          "The dogs' are barking.",
          "The dog's bone was buried.",
          "The dogs bone was buried."
        ],
        correct: 2,
        explanation: "'The dog's bone' shows the bone belongs to the dog (possession). 'The dog's are barking' is wrong — that's a plural, not possession."
      },
      {
        question: "Choose the correct sentence:",
        options: [
          "Its going to rain today.",
          "The cat licked it's paws.",
          "It's important to study regularly.",
          "Its a beautiful day."
        ],
        correct: 2,
        explanation: "'It's important' = 'It IS important' — contraction, so it's correct. The others misuse its/it's."
      },
      {
        question: "Where should the comma go? 'After the match we went home.'",
        options: [
          "After, the match we went home.",
          "After the match, we went home.",
          "After the match we, went home.",
          "No comma needed."
        ],
        correct: 1,
        explanation: "'After the match' is an introductory phrase — put a comma after it before the main clause."
      },
      {
        question: "Which is punctuated correctly?",
        options: [
          "\"I'm ready\" she said.",
          "\"I'm ready,\" she said.",
          "\"I'm ready\", she said.",
          "I'm ready, \"she said.\""
        ],
        correct: 1,
        explanation: "The comma goes INSIDE the quotation marks, before 'she said': \"I'm ready,\" she said."
      }
    ],
    writingExercise: {
      prompt: "Rewrite the following passage, adding all missing punctuation (commas, semicolons, apostrophes, and quotation marks):\n\n'Its nearly time for the exam said Mr Jones. The students books were open on their desks however most of them werent reading. Sarah who was usually confident looked nervous. I havent revised enough she whispered to her friend. Dont worry replied Jake youve got this. The classroom was silent the only sound was the ticking clock.'",
      tips: [
        "Look for contractions that need apostrophes (its/it's, werent, havent, dont, youve)",
        "Find possession (students' books — the books belong to students)",
        "Add commas after introductory words and around extra information",
        "Use quotation marks around direct speech",
        "Check if any full stops should be semicolons (two related sentences)"
      ],
      wordLimit: 100
    }
  },
  {
    day: 4,
    title: "Paragraph Writing & PEEL Structure",
    lesson: {
      content: `
        <p>A well-structured paragraph is like a well-built house — every brick has a purpose. Today you'll learn the PEEL structure, which is your secret weapon for writing paragraphs that earn C grades and above! 🏗️</p>

        <h3>📌 What Makes a Good Paragraph?</h3>
        <p>Every paragraph should:</p>
        <ul>
          <li>Focus on ONE main idea</li>
          <li>Start with a clear topic sentence</li>
          <li>Include evidence or examples</li>
          <li>End by linking back to the question/main point</li>
        </ul>

        <h3>📌 The PEEL Structure</h3>
        <p>🅿️ <strong>P — Point</strong><br>
        State your main idea clearly in one sentence. This is your topic sentence.<br>
        <em>"One way Shakespeare presents Macbeth as ambitious is through his soliloquies."</em></p>

        <p>📖 <strong>E — Evidence</strong><br>
        Provide a quote, example, or fact that supports your point.<br>
        <em>"For example, Macbeth says 'I have no spur to prick the sides of my intent, but only vaulting ambition.'"</em></p>

        <p>🔍 <strong>E — Explain</strong><br>
        Explain HOW your evidence supports your point. This is where you analyse — don't just describe!<br>
        <em>"The word 'vaulting' suggests ambition that leaps beyond what is natural or safe, implying Macbeth knows his desires are dangerous yet cannot control them."</em></p>

        <p>🔗 <strong>L — Link</strong><br>
        Link back to your main argument or the question.<br>
        <em>"This reveals that Shakespeare presents ambition as a destructive force that overrides moral judgement."</em></p>

        <h3>📌 Full PEEL Example</h3>
        <div style="background:#f0f7ff; padding:12px; border-radius:8px; border-left:4px solid #3b82f6;">
          <p><strong>[P]</strong> The writer creates a tense atmosphere through their use of short sentences. <strong>[E]</strong> For example, in paragraph three, we read: "He stopped. Silence. Then footsteps." <strong>[E]</strong> The short, fragmented sentences mirror the character's racing heartbeat and create a sense of urgency, forcing the reader to pause at each full stop just as the character freezes in fear. <strong>[L]</strong> This technique effectively builds suspense, keeping the reader on edge throughout the passage.</p>
        </div>

        <h3>📌 Topic Sentences — How to Write Them</h3>
        <p>A topic sentence should:</p>
        <ul>
          <li>Directly answer or address the question</li>
          <li>State ONE clear idea</li>
          <li>NOT be a quote or evidence</li>
        </ul>
        <p>❌ "In the poem, it says 'the wind howled.'" (This is evidence, not a point!)<br>
        ✅ "The poet uses personification to make nature seem threatening."</p>

        <h3>📌 Linking Sentences — Useful Phrases</h3>
        <p>Start your link sentence with:<br>
        • This shows that...<br>
        • This suggests that...<br>
        • Therefore, the writer/poet/author...<br>
        • Overall, this reveals...<br>
        • This reinforces the idea that...</p>

        <p>💡 <strong>Pro tip:</strong> Your EXPLAIN section should be the LONGEST part of your paragraph — that's where the marks are! Teachers want to see YOUR thinking, not just quotes.</p>
      `,
      keyPoints: [
        "PEEL = Point, Evidence, Explain, Link",
        "Point (topic sentence): state ONE clear idea that addresses the question",
        "Evidence: provide a quote, example, or fact — always use quotation marks for quotes",
        "Explain: analyse HOW the evidence supports your point (this should be the longest section!)",
        "Link: connect back to the main argument or essay question"
      ]
    },
    flashcards: [
      { front: "What does PEEL stand for?", back: "Point, Evidence, Explain, Link — a structure for writing analytical paragraphs." },
      { front: "What is a topic sentence?", back: "The first sentence of a paragraph that states the ONE main idea. It should directly address the question and NOT be a quote." },
      { front: "Which part of PEEL should be the longest?", back: "EXPLAIN — this is where you analyse and show your thinking. It's where the marks are!" },
      { front: "What's the difference between Evidence and Explain?", back: "Evidence = the quote or fact you provide. Explain = your analysis of WHY/HOW that evidence supports your point." },
      { front: "What does the 'Link' sentence do?", back: "It connects your paragraph back to the main question or argument. Useful starters: 'This shows that...', 'Therefore...', 'This reinforces...'" },
      { front: "What makes a BAD topic sentence?", back: "Starting with a quote, being too vague ('This essay will talk about...'), or trying to cover multiple ideas at once." },
      { front: "How many main ideas should one paragraph have?", back: "ONE. Each paragraph focuses on a single point. If you have a new idea, start a new paragraph." }
    ],
    quiz: [
      {
        question: "In PEEL structure, which comes first?",
        options: ["Evidence", "Explain", "Point", "Link"],
        correct: 2,
        explanation: "Point comes first — you state your main idea/topic sentence before providing evidence."
      },
      {
        question: "Which of these is the best topic sentence for an essay about Romeo and Juliet?",
        options: [
          "In this essay I will discuss love.",
          "'O Romeo, Romeo, wherefore art thou Romeo?'",
          "Shakespeare presents love as a powerful force that overrides family loyalty.",
          "The play has lots of love in it."
        ],
        correct: 2,
        explanation: "It makes a clear, specific point that addresses the theme. The others are too vague, a quote, or informal."
      },
      {
        question: "What should the EXPLAIN section do?",
        options: [
          "Repeat the quote in your own words",
          "Introduce a new point",
          "Analyse HOW the evidence supports your argument",
          "Summarise the whole essay"
        ],
        correct: 2,
        explanation: "Explain analyses the evidence — it shows your thinking about WHY the evidence matters and HOW it proves your point."
      },
      {
        question: "Which word/phrase best starts a LINK sentence?",
        options: [
          "For example,",
          "This reveals that",
          "The quote says",
          "In addition,"
        ],
        correct: 1,
        explanation: "'This reveals that...' links your analysis back to the bigger argument. 'For example' introduces evidence, not a link."
      },
      {
        question: "Which paragraph structure error is most common?",
        options: [
          "Having too many link sentences",
          "Writing too much explanation",
          "Providing evidence but not explaining it",
          "Using too many paragraphs"
        ],
        correct: 2,
        explanation: "The most common mistake is 'PEL' — giving a quote and then moving straight to the link without explaining what the evidence means."
      }
    ],
    writingExercise: {
      prompt: "Write ONE PEEL paragraph answering this question: 'How does the writer create tension in this extract?'\n\nUse this extract: 'The corridor stretched ahead, endless and dark. Each footstep echoed. She reached for the door handle — cold, impossibly cold — and turned it slowly. Nothing. Silence pressed against her ears like cotton wool.'\n\nLabel each section [P], [E], [E], [L] in your paragraph.",
      tips: [
        "Start with a clear Point about ONE technique (short sentences? cold imagery? silence?)",
        "Quote directly from the extract for your Evidence",
        "In your Explain section, discuss the EFFECT on the reader — how does it make them feel?",
        "Your Link should connect to the overall idea of 'creating tension'",
        "Aim for your Explain section to be 2-3 sentences long"
      ],
      wordLimit: 120
    }
  },
  {
    day: 5,
    title: "Reading Comprehension Strategies",
    lesson: {
      content: `
        <p>Reading comprehension isn't about being a "natural reader" — it's about using the right STRATEGIES. Think of these as tools in a toolkit. The more you practise using them, the faster and more accurate you'll become! 🧰</p>

        <h3>📌 Strategy 1: Skimming (Get the Big Picture)</h3>
        <p><strong>What:</strong> Reading quickly to get the GENERAL idea — not every word.</p>
        <p><strong>When to use:</strong> Before reading in detail, to understand what the text is about.</p>
        <p><strong>How:</strong></p>
        <ul>
          <li>Read the title and any headings</li>
          <li>Read the first sentence of each paragraph</li>
          <li>Look at any images, captions, or bold words</li>
          <li>Read the last paragraph</li>
        </ul>
        <p>⏱️ Should take 30-60 seconds for a full-page text.</p>

        <h3>📌 Strategy 2: Scanning (Find Specific Info)</h3>
        <p><strong>What:</strong> Searching for a specific word, name, date, or detail.</p>
        <p><strong>When to use:</strong> When a question asks for a specific fact.</p>
        <p><strong>How:</strong></p>
        <ul>
          <li>Identify the KEY WORD in the question</li>
          <li>Run your eyes over the text looking ONLY for that word (or synonyms)</li>
          <li>Don't read everything — just hunt!</li>
        </ul>
        <p>🔍 Example: "What time did the train arrive?" → Scan for numbers, 'time', 'arrive', 'reach'.</p>

        <h3>📌 Strategy 3: Inference (Reading Between the Lines)</h3>
        <p><strong>What:</strong> Working out something the text IMPLIES but doesn't directly say.</p>
        <p><strong>When to use:</strong> Questions that say "suggest", "imply", "what can you infer?"</p>
        <p><strong>How — use the formula:</strong></p>
        <div style="background:#f0f7ff; padding:12px; border-radius:8px; border-left:4px solid #3b82f6;">
          <p><strong>EVIDENCE (what the text says) + MY KNOWLEDGE (what I know about the world) = INFERENCE (what the text implies)</strong></p>
        </div>
        <p><em>Example text:</em> "Sarah slammed the door and threw her bag on the floor."<br>
        📋 Evidence: slammed, threw<br>
        🧠 Knowledge: People slam things when angry/frustrated<br>
        💡 Inference: Sarah is angry or upset about something</p>

        <h3>📌 Strategy 4: Identifying the Main Idea</h3>
        <p><strong>What:</strong> Finding the CENTRAL message of a paragraph or whole text.</p>
        <p><strong>How:</strong></p>
        <ul>
          <li>Ask: "If I had to summarise this in ONE sentence, what would it be?"</li>
          <li>Look at what MOST of the paragraph talks about</li>
          <li>The main idea is usually in the topic sentence (first or second sentence)</li>
          <li>Check: do the other sentences SUPPORT this idea?</li>
        </ul>
        <p>⚠️ <strong>Common trap:</strong> Don't confuse a DETAIL with the MAIN IDEA. The main idea is the big umbrella; details are what sit under it.</p>

        <h3>📌 Strategy 5: Annotating as You Read</h3>
        <p>Active reading = better understanding. As you read:</p>
        <ul>
          <li>✏️ Underline key words or phrases</li>
          <li>❓ Put a ? next to anything confusing</li>
          <li>⭐ Star important points</li>
          <li>📝 Write 2-3 word summaries in the margin</li>
          <li>🔗 Draw arrows to connect related ideas</li>
        </ul>

        <h3>📌 Answering Comprehension Questions — The PEE Chain</h3>
        <p>For most reading questions, use:<br>
        <strong>P</strong>oint (answer the question directly)<br>
        <strong>E</strong>vidence (quote from the text)<br>
        <strong>E</strong>xplain (say what it means/how it answers the question)</p>
        <p><em>Question:</em> "How does the writer show the character is nervous?"<br>
        <em>Answer:</em> The writer shows the character is nervous [P] through the description "his hands trembled as he reached for the handle" [E]. The word "trembled" suggests physical anxiety that the character cannot control, showing their fear is overwhelming. [E]</p>
      `,
      keyPoints: [
        "Skim first (titles, first sentences, last paragraph) to get the big picture — 30-60 seconds",
        "Scan for specific information by hunting for key words from the question",
        "Inference = Evidence from text + Your knowledge = What the text implies",
        "Main idea = the ONE sentence summary; don't confuse details with the central point",
        "Answer comprehension questions using PEE: Point, Evidence, Explain"
      ]
    },
    flashcards: [
      { front: "What is SKIMMING?", back: "Reading quickly to get the general idea. Read: title, headings, first sentence of each paragraph, last paragraph. Takes 30-60 seconds." },
      { front: "What is SCANNING?", back: "Searching for specific information. Find the key word in the question, then hunt for that word (or synonyms) in the text without reading everything." },
      { front: "What is the inference formula?", back: "Evidence (what the text says) + Your Knowledge (what you know about the world) = Inference (what the text implies but doesn't directly state)." },
      { front: "How do you find the MAIN IDEA?", back: "Ask: 'What would I say in ONE sentence?' Look at the topic sentence (often first). Check: do other sentences support this idea? Don't confuse details with the main idea." },
      { front: "What does PEE stand for in comprehension answers?", back: "Point (answer the question), Evidence (quote from text), Explain (what it means/how it answers the question)." },
      { front: "What's the difference between skimming and scanning?", back: "Skimming = getting the OVERALL idea quickly. Scanning = hunting for ONE specific piece of information." },
      { front: "What annotation marks should you use while reading?", back: "Underline key words, ? for confusing parts, ⭐ for important points, short margin summaries, arrows to connect ideas." },
      { front: "When a question says 'What does this suggest?' — what strategy do you use?", back: "INFERENCE. Look at the evidence in the text + apply your knowledge to work out what's being implied (not directly stated)." }
    ],
    quiz: [
      {
        question: "You need to find what year a character was born. Which strategy should you use?",
        options: ["Skimming", "Scanning", "Inference", "Annotation"],
        correct: 1,
        explanation: "You're looking for a specific fact (a year/date), so scanning is the right strategy — hunt for numbers and the word 'born'."
      },
      {
        question: "'He loosened his tie and stared at the clock every few seconds.' What can you infer?",
        options: [
          "He is relaxed and comfortable",
          "He is anxious or impatient",
          "He is cold",
          "He is bored with his job"
        ],
        correct: 1,
        explanation: "Loosening tie = discomfort/stress. Staring at clock repeatedly = impatience or anxiety about time. Inference: he's anxious or impatient."
      },
      {
        question: "What should you do FIRST when given a comprehension text?",
        options: [
          "Answer the questions immediately",
          "Read every word carefully three times",
          "Skim the text for the general idea",
          "Highlight random sentences"
        ],
        correct: 2,
        explanation: "Skim first to understand the big picture — title, first sentences, last paragraph. Then read in detail for specific questions."
      },
      {
        question: "A paragraph discusses: types of clouds, rainfall amounts, wind speeds, and weather satellites. What is the MAIN IDEA?",
        options: [
          "Clouds are interesting",
          "Weather measurement and observation",
          "Wind speeds vary across regions",
          "Satellites are expensive"
        ],
        correct: 1,
        explanation: "All the details (clouds, rain, wind, satellites) relate to weather measurement/observation — that's the umbrella main idea."
      },
      {
        question: "In a comprehension answer, what should come immediately after your quote from the text?",
        options: [
          "Another quote",
          "Your next point",
          "An explanation of what the quote means",
          "The question repeated"
        ],
        correct: 2,
        explanation: "After Evidence (quote) comes Explain — you must say what the quote MEANS and how it answers the question. Never leave a quote unexplained!"
      }
    ],
    writingExercise: {
      prompt: "Read this paragraph and answer the question below using the PEE structure:\n\n'The old house groaned in the wind. Paint peeled from its walls like dead skin, and the windows — those that weren't shattered — stared blankly at the overgrown garden. No one had lived here for twenty years, yet the gate still swung open, as if waiting for someone to return.'\n\nQuestion: How does the writer make the house seem alive? Use evidence from the text to support your answer.",
      tips: [
        "Start with a clear Point that directly answers the question",
        "Quote specific words or phrases as Evidence (use quotation marks!)",
        "Explain the EFFECT of the technique — what does it make the reader think/feel?",
        "Look for personification (giving human qualities to non-human things)",
        "You could write 2-3 PEE chains to be thorough"
      ],
      wordLimit: 150
    }
  },
  {
    day: 6,
    title: "Analytical Writing & TEEL Paragraphs",
    lesson: {
      content: `
        <p>Now that you can write PEEL paragraphs and understand reading comprehension, it's time to level up to FULL analytical writing — the kind you need for essay questions. This is where C-grade students stand out from D-grade students! 📈</p>

        <h3>📌 TEEL Structure (The Essay-Level Upgrade)</h3>
        <p>TEEL is like PEEL's older sibling. It works for longer analytical responses:</p>
        <p>📋 <strong>T — Topic sentence</strong> (your argument/point)<br>
        📖 <strong>E — Evidence</strong> (quote or example)<br>
        🔍 <strong>E — Explain/Elaborate</strong> (analyse the evidence in depth)<br>
        🔗 <strong>L — Link</strong> (connect back to thesis/question AND transition to next point)</p>

        <h3>📌 Using Evidence Effectively</h3>
        <p><strong>DON'T just drop quotes in:</strong><br>
        ❌ "Shakespeare uses imagery. 'Is this a dagger which I see before me?' This shows imagery."</p>
        <p><strong>DO embed quotes smoothly:</strong><br>
        ✅ "Shakespeare reveals Macbeth's hallucination through the rhetorical question 'Is this a dagger which I see before me?', suggesting he can no longer distinguish reality from his guilty imagination."</p>

        <h3>📌 How to Embed Quotes</h3>
        <p>Make the quote flow naturally into YOUR sentence:</p>
        <ul>
          <li>The writer describes the setting as "bleak and oppressive"...</li>
          <li>This is emphasised when [character] states that "..."</li>
          <li>The metaphor "..." suggests that...</li>
          <li>Through the phrase "...", the poet implies...</li>
        </ul>

        <h3>📌 Analysis Power Words</h3>
        <p>Replace boring verbs with analytical ones:</p>
        <table style="width:100%; border-collapse:collapse;">
          <tr><td>❌ shows</td><td>✅ reveals, demonstrates, highlights, emphasises</td></tr>
          <tr><td>❌ says</td><td>✅ suggests, implies, conveys, indicates</td></tr>
          <tr><td>❌ uses</td><td>✅ employs, utilises, deploys, incorporates</td></tr>
          <tr><td>❌ is about</td><td>✅ explores, examines, addresses, confronts</td></tr>
          <tr><td>❌ makes the reader feel</td><td>✅ evokes, provokes, elicits, creates a sense of</td></tr>
        </table>

        <h3>📌 Linking to Your Thesis</h3>
        <p>Your thesis is the MAIN ARGUMENT of your whole essay. Every paragraph should connect back to it.</p>
        <p><em>Thesis example:</em> "Shakespeare presents ambition as ultimately destructive."</p>
        <p><em>Link sentences:</em><br>
        ✅ "This further reinforces the idea that ambition, when unchecked, leads to self-destruction."<br>
        ✅ "Therefore, Shakespeare demonstrates that ambition corrupts even the noblest of characters."</p>

        <h3>📌 Full TEEL Paragraph Example</h3>
        <div style="background:#f0f7ff; padding:12px; border-radius:8px; border-left:4px solid #3b82f6;">
          <p><strong>[T]</strong> The writer presents the natural world as a source of comfort and escape. <strong>[E]</strong> This is evident when the narrator describes the forest as "a cathedral of green, where every worry dissolved into birdsong." <strong>[E]</strong> The metaphor "cathedral" elevates nature to something sacred and peaceful, while "dissolved" suggests that the character's problems literally disappear in this space. The reference to "birdsong" appeals to the senses, immersing the reader in the same tranquillity the character feels. <strong>[L]</strong> This reinforces the writer's broader message that connection with nature offers healing that modern life cannot provide, a theme that recurs throughout the text.</p>
        </div>

        <h3>📌 Common Mistakes to Avoid</h3>
        <ul>
          <li>❌ Retelling the story instead of analysing</li>
          <li>❌ Saying "this quote shows" without explaining HOW</li>
          <li>❌ Using evidence that doesn't support your point</li>
          <li>❌ Forgetting to link back to the question</li>
          <li>❌ Writing "I think" in formal essays (write "This suggests" instead)</li>
        </ul>
      `,
      keyPoints: [
        "TEEL = Topic sentence, Evidence, Explain/Elaborate, Link — the essay-level paragraph structure",
        "Embed quotes smoothly into your sentences rather than dropping them in isolation",
        "Use analytical power words: suggests, reveals, emphasises, evokes (not just 'shows' and 'says')",
        "Every paragraph must link back to your thesis (main argument)",
        "Analyse, don't retell — explain HOW and WHY, not just WHAT happens"
      ]
    },
    flashcards: [
      { front: "What does TEEL stand for?", back: "Topic sentence, Evidence, Explain/Elaborate, Link. Used for essay-level analytical paragraphs." },
      { front: "What's the difference between PEEL and TEEL?", back: "They're very similar! TEEL uses 'Topic sentence' instead of 'Point' and emphasises linking to a thesis. TEEL is typically used for longer essay responses." },
      { front: "How do you embed a quote?", back: "Make it flow into your sentence naturally: 'The writer describes the setting as \"bleak and oppressive\", suggesting...' NOT just dropping it in alone." },
      { front: "Give 3 alternatives to the word 'shows'", back: "Reveals, demonstrates, highlights, emphasises, illustrates, conveys, indicates." },
      { front: "What is a thesis statement?", back: "The MAIN ARGUMENT of your whole essay, usually stated in your introduction. Every body paragraph should link back to it." },
      { front: "What's the biggest difference between D and C grade analysis?", back: "D grade = retelling what happens. C grade = explaining HOW techniques create meaning/effect. Always analyse, don't describe!" },
      { front: "Should you write 'I think' in a formal essay?", back: "No! Instead of 'I think this shows sadness', write 'This suggests sadness' or 'This conveys a sense of sadness.' Keep it formal and analytical." },
      { front: "What makes a good LINK sentence in TEEL?", back: "It connects your paragraph analysis back to the essay's main thesis AND can transition to the next point. E.g., 'This reinforces the idea that... Furthermore,...'" }
    ],
    quiz: [
      {
        question: "Which is the best way to introduce a quote?",
        options: [
          "'To be or not to be.' This is a quote from Hamlet.",
          "Shakespeare explores mortality through Hamlet's soliloquy: 'To be or not to be.'",
          "A quote is 'to be or not to be' and it's from Shakespeare.",
          "Shakespeare said 'to be or not to be' and it is good."
        ],
        correct: 1,
        explanation: "It smoothly embeds the quote, names the technique (soliloquy), and shows what it's about (mortality) — all in one sentence."
      },
      {
        question: "Which word is MOST analytical?",
        options: ["shows", "suggests", "is", "has"],
        correct: 1,
        explanation: "'Suggests' is analytical because it shows you're interpreting meaning, not just describing. 'Shows' is weak; 'is' and 'has' are too simple."
      },
      {
        question: "What's wrong with this analysis: 'The writer uses a metaphor. The metaphor is good. It makes the reader interested.'",
        options: [
          "It's too long",
          "It names the technique but doesn't explain its EFFECT in detail",
          "It uses too many quotes",
          "The sentences are too complex"
        ],
        correct: 1,
        explanation: "Saying something is 'good' or 'interesting' isn't analysis. You need to explain WHAT the metaphor means and HOW it creates a specific effect."
      },
      {
        question: "In a TEEL paragraph, what should the LINK sentence do?",
        options: [
          "Introduce a new quote",
          "Summarise the whole essay",
          "Connect back to the thesis and/or transition to the next paragraph",
          "Ask a question"
        ],
        correct: 2,
        explanation: "The Link reconnects your point to the essay's main argument (thesis) and can help transition smoothly to the next paragraph."
      },
      {
        question: "Which is analysis and which is retelling? 'Macbeth kills Duncan because he wants to be king.'",
        options: [
          "Analysis — it explains why",
          "Retelling — it just describes what happens",
          "Analysis — it uses evidence",
          "Retelling — it's too short"
        ],
        correct: 1,
        explanation: "This is retelling/narrating the plot. Analysis would be: 'Shakespeare presents Macbeth's ambition as overpowering his morality, suggesting that unchecked desire corrupts.'"
      }
    ],
    writingExercise: {
      prompt: "Write TWO TEEL paragraphs responding to this question: 'How does the writer use language to create a sense of danger?'\n\nUse this extract: 'The river surged forward like a living beast, swallowing everything in its path. Trees that had stood for a hundred years snapped like matchsticks. The water showed no mercy — it took homes, memories, lives. Those who survived spoke in whispers, as if the river might hear them and return.'\n\nLabel each section [T], [E], [E], [L].",
      tips: [
        "Paragraph 1 could focus on the personification/simile of the river",
        "Paragraph 2 could focus on the contrast between the river's power and human fragility",
        "Use analytical verbs: suggests, reveals, emphasises, conveys, evokes",
        "Embed your quotes — make them part of your sentence",
        "Your Link sentences should connect to the idea of 'creating danger'",
        "Make your Explain sections 2-3 sentences each"
      ],
      wordLimit: 250
    }
  },
  {
    day: 7,
    title: "Practice Essay — Combining All Skills",
    lesson: {
      content: `
        <p>This is it — everything you've learned this week comes together! Today you'll plan and write a full essay response. Remember: you already have ALL the skills you need. This is just about putting them together in order. You've got this! 💪</p>

        <h3>📌 Essay Structure Overview</h3>
        <p>A solid essay has THREE parts:</p>
        <p>📖 <strong>Introduction</strong> (1 paragraph)<br>
        → Introduce the topic and state your thesis (main argument)<br>
        → 3-4 sentences is enough</p>
        <p>📝 <strong>Body</strong> (2-3 TEEL paragraphs)<br>
        → Each paragraph = one point that supports your thesis<br>
        → Use evidence (quotes) and analysis</p>
        <p>🎯 <strong>Conclusion</strong> (1 paragraph)<br>
        → Summarise your main points<br>
        → Restate your thesis in different words<br>
        → 2-3 sentences</p>

        <h3>📌 How to Write an Introduction</h3>
        <p>Formula:<br>
        1. Context sentence (what text/topic is about)<br>
        2. Thesis statement (your main argument)<br>
        3. Brief preview of your points (optional but helpful)</p>
        <div style="background:#f0f7ff; padding:12px; border-radius:8px; border-left:4px solid #3b82f6;">
          <p><em>Example:</em> "In 'Lord of the Flies', William Golding explores the thin line between civilisation and savagery. <strong>[context]</strong> Through the characters' descent into violence, Golding suggests that without societal rules, humanity's darker instincts will always emerge. <strong>[thesis]</strong> This is demonstrated through the symbolism of the conch, the characterisation of Jack, and the destruction of the island paradise. <strong>[preview]</strong>"</p>
        </div>

        <h3>📌 How to Write a Conclusion</h3>
        <p>Formula:<br>
        1. Restate thesis in new words ("Overall...", "In conclusion...")<br>
        2. Summarise the key evidence/points briefly<br>
        3. End with a broader comment or lasting impression</p>
        <div style="background:#f0f7ff; padding:12px; border-radius:8px; border-left:4px solid #3b82f6;">
          <p><em>Example:</em> "In conclusion, Golding presents the boys' transformation as inevitable once the structures of civilisation are removed. Through powerful symbolism and characterisation, the novel serves as a warning: savagery is not something humans have left behind, but something we constantly hold at bay."</p>
        </div>

        <h3>📌 Planning Before Writing (5 Minutes)</h3>
        <p>ALWAYS plan before you write. A quick plan:</p>
        <ol>
          <li>Read the question twice. Underline key words.</li>
          <li>Write your thesis (main argument) in one sentence.</li>
          <li>List 2-3 points that support your thesis.</li>
          <li>For each point, note which quote/evidence you'll use.</li>
          <li>Number your points in the best order.</li>
        </ol>
        <p>💡 Spending 5 minutes planning saves 10 minutes of confused writing!</p>

        <h3>📌 Self-Assessment Checklist ✓</h3>
        <p>After writing your essay, check:</p>
        <table style="width:100%; border-collapse:collapse;">
          <tr><td>☐ Introduction has a clear thesis statement</td></tr>
          <tr><td>☐ Each body paragraph follows TEEL structure</td></tr>
          <tr><td>☐ I've used quotes/evidence in every paragraph</td></tr>
          <tr><td>☐ Quotes are embedded smoothly (not dropped in)</td></tr>
          <tr><td>☐ I've ANALYSED (not just described) my evidence</td></tr>
          <tr><td>☐ Each paragraph links back to my thesis</td></tr>
          <tr><td>☐ I've used a variety of sentence types (simple, compound, complex)</td></tr>
          <tr><td>☐ Spelling is checked (especially the 20 common words)</td></tr>
          <tr><td>☐ Punctuation is correct (commas, apostrophes, quotation marks)</td></tr>
          <tr><td>☐ Conclusion restates thesis in different words</td></tr>
          <tr><td>☐ I've used analytical language (suggests, reveals, emphasises)</td></tr>
          <tr><td>☐ No "I think" — kept it formal</td></tr>
        </table>

        <h3>📌 Week 1 Skills Summary</h3>
        <p>This week you've learned:<br>
        ✅ Day 1: Sentence variety (simple, compound, complex + FANBOYS)<br>
        ✅ Day 2: Spelling rules and 20 key words<br>
        ✅ Day 3: Punctuation (commas, semicolons, apostrophes, quotes)<br>
        ✅ Day 4: PEEL paragraph structure<br>
        ✅ Day 5: Reading strategies (skim, scan, infer, main idea, PEE)<br>
        ✅ Day 6: TEEL analytical writing and embedding quotes<br>
        ✅ Day 7: Full essay structure (today!)</p>
        <p>🌟 You are READY. Trust the structures, show your thinking, and you WILL move from D to C!</p>
      `,
      keyPoints: [
        "Essay = Introduction (thesis) + Body (2-3 TEEL paragraphs) + Conclusion (restate thesis)",
        "Introduction formula: context + thesis + optional preview of points",
        "Conclusion formula: restate thesis + summarise + broader comment",
        "ALWAYS plan for 5 minutes before writing — thesis, points, evidence",
        "Use the self-assessment checklist to catch mistakes before submitting"
      ]
    },
    flashcards: [
      { front: "What are the three parts of an essay?", back: "Introduction (thesis statement), Body (2-3 TEEL paragraphs with evidence and analysis), Conclusion (restate thesis differently, summarise, broader comment)." },
      { front: "What goes in an introduction?", back: "1. Context (what the text/topic is). 2. Thesis (your main argument). 3. Optional preview of your points. Keep it 3-4 sentences." },
      { front: "What goes in a conclusion?", back: "1. Restate thesis in different words. 2. Briefly summarise key points. 3. End with a broader comment or lasting thought. 2-3 sentences." },
      { front: "How long should you spend planning an essay?", back: "About 5 minutes. Write: thesis, 2-3 points, evidence for each, number them in order. Planning SAVES time overall." },
      { front: "What is a thesis statement?", back: "Your main argument for the whole essay, stated in ONE clear sentence. Every body paragraph should link back to it. E.g., 'Shakespeare presents ambition as ultimately destructive.'" },
      { front: "What should you NEVER do in a conclusion?", back: "Never introduce new points or new evidence in a conclusion. It's for summarising and wrapping up, not starting new arguments." },
      { front: "Name 3 things to check in self-assessment", back: "1. Does each paragraph have TEEL structure? 2. Are quotes embedded smoothly? 3. Have I analysed (not just described)? Also: spelling, punctuation, formal language." }
    ],
    quiz: [
      {
        question: "What should the FIRST sentence of your essay do?",
        options: [
          "State a quote",
          "Provide context about the text/topic",
          "Give your conclusion",
          "Ask a question"
        ],
        correct: 1,
        explanation: "Start with context — introduce the text, author, and topic before stating your thesis. This orientates the reader."
      },
      {
        question: "How many TEEL paragraphs should a typical exam essay have?",
        options: ["1", "2-3", "5-6", "As many as possible"],
        correct: 1,
        explanation: "2-3 well-developed TEEL paragraphs is ideal for timed essays. Quality over quantity — a well-analysed paragraph beats three shallow ones."
      },
      {
        question: "What should you NEVER introduce in a conclusion?",
        options: [
          "Your thesis",
          "New evidence or points",
          "Analytical language",
          "A summary"
        ],
        correct: 1,
        explanation: "The conclusion summarises and wraps up. New evidence belongs in body paragraphs. Introducing new ideas in the conclusion confuses the reader."
      },
      {
        question: "You have 40 minutes for an essay. How should you divide your time?",
        options: [
          "40 mins writing",
          "5 mins planning, 30 mins writing, 5 mins checking",
          "20 mins planning, 20 mins writing",
          "10 mins planning, 10 mins writing, 20 mins checking"
        ],
        correct: 1,
        explanation: "5 minutes planning (thesis + points + evidence), 30 minutes writing, 5 minutes proofreading. This balance gives you structure AND time to execute."
      },
      {
        question: "Which thesis statement is strongest?",
        options: [
          "This essay will discuss the poem.",
          "The poem is quite good and has some nice imagery.",
          "Through vivid natural imagery, the poet presents memory as both beautiful and painful.",
          "I think the poet is writing about memories."
        ],
        correct: 2,
        explanation: "It's specific (names the technique — natural imagery), makes a clear argument (memory is beautiful AND painful), and is formal. The others are vague, informal, or just announcements."
      }
    ],
    writingExercise: {
      prompt: "Write a complete essay (Introduction + 2 TEEL body paragraphs + Conclusion) responding to this question:\n\n'How does the writer use language to present the power of nature in this extract?'\n\nExtract: 'The storm arrived without warning. Lightning split the sky like a cracked mirror, and thunder rolled across the valley with the authority of a thousand drums. The trees bowed low — servants before an angry king. Rain hammered the earth until the ground could take no more, and rivers of mud cascaded down hillsides, erasing paths that had existed for generations. When morning came, the world was unrecognisable. Nature had rewritten the landscape overnight.'\n\nRemember: Plan first (5 mins), write with TEEL structure, embed quotes, analyse language techniques, use the self-assessment checklist at the end!",
      tips: [
        "Plan: identify 2 language techniques (simile? personification? metaphor? powerful verbs?)",
        "Thesis idea: 'The writer presents nature as an unstoppable, almost godlike force'",
        "Introduction: context + thesis + preview",
        "Body P1: could analyse the personification (trees bowing, nature 'rewriting')",
        "Body P2: could analyse the similes and violent imagery ('cracked mirror', 'hammered')",
        "Embed quotes: 'The simile \"like a cracked mirror\" suggests...'",
        "Conclusion: restate that nature is presented as powerful, summarise techniques",
        "Check: TEEL in each paragraph? Quotes embedded? Analytical verbs? Formal tone?"
      ],
      wordLimit: 400
    }
  }
];

// Add fill-in-the-blanks and complete-the-story activities to each day
(function() {
  const extras = [
    { // Day 1 - Sentence Structure
      fillBlanks: [
        { sentence: "The students ___ their homework before the bell rang.", answer: "finished", hint: "Past tense verb meaning 'completed'" },
        { sentence: "She wanted to go outside, ___ it was raining heavily.", answer: "but", hint: "FANBOYS conjunction showing contrast" },
        { sentence: "Although he studied hard, ___ failed the test.", answer: "he", hint: "Who is the subject of the second clause?" },
        { sentence: "The cat sat on the mat ___ the dog slept nearby.", answer: "while", hint: "Subordinating conjunction showing simultaneous actions" },
        { sentence: "___ the storm passed, we went outside to play.", answer: "After", hint: "Time-based subordinating conjunction" },
        { sentence: "Marcus loves basketball, ___ he plays every afternoon.", answer: "so", hint: "FANBOYS conjunction showing result" },
        { sentence: "The library was quiet ___ everyone was studying.", answer: "because", hint: "Subordinating conjunction giving a reason" },
        { sentence: "Neither the teacher ___ the students heard the alarm.", answer: "nor", hint: "Paired with 'neither' — FANBOYS" }
      ],
      completeStory: {
        starter: "The morning started like any other school day. Jake grabbed his bag and rushed out the door. But when he arrived at school, everything was different...",
        wordLimit: 200,
        guidingQuestions: [
          "What was different about the school? (Use a compound sentence with 'and' or 'but')",
          "How did Jake feel? (Use a complex sentence starting with 'Although' or 'Because')",
          "What did he do next? (Use at least one compound-complex sentence)",
          "How does the story end? (Use a short, powerful simple sentence for impact)"
        ]
      }
    },
    { // Day 2 - Spelling
      fillBlanks: [
        { sentence: "I ___ that the answer was wrong. (past tense of 'believe')", answer: "believed", hint: "i before e except after c" },
        { sentence: "The dog was ___ around the park. (run + ing)", answer: "running", hint: "Double the consonant before adding -ing" },
        { sentence: "They put ___ bags in the car. (belonging to them)", answer: "their", hint: "Possessive — not 'there' (place) or 'they're' (they are)" },
        { sentence: "The weather had a big ___ on the game. (result/influence)", answer: "effect", hint: "Noun = effect, Verb = affect" },
        { sentence: "She was ___ tired to continue. (also/excessively)", answer: "too", hint: "Too = also/excessive, to = direction, two = number" },
        { sentence: "It's ___ going to rain today. (certainly)", answer: "definitely", hint: "definite + ly (no 'a' in the middle!)" },
        { sentence: "The assignment is due on ___. (day after Tuesday)", answer: "Wednesday", hint: "Wed-nes-day — say it how it's spelled!" },
        { sentence: "We need to ___ our findings from the ___ data. (divide/individual)", answer: "separate", hint: "Sep-A-rate — there's an A in the middle, not an E" }
      ],
      completeStory: {
        starter: "Dear Diary, Today was completely embarrassing. I was giving my presentation in front of the whole class when I accidentally...",
        wordLimit: 150,
        guidingQuestions: [
          "What happened during the presentation? (Use at least 5 of this week's spelling words correctly)",
          "Include these words: embarrassed, occurred, beginning, separate, definitely",
          "How did your classmates react?",
          "What did you learn from this experience?"
        ]
      }
    },
    { // Day 3 - Punctuation
      fillBlanks: [
        { sentence: "The students who finished early___ were allowed to leave.", answer: ",", hint: "Commas around extra (non-essential) information — but trick: is 'who finished early' essential? If removing it changes meaning, no comma needed!" },
        { sentence: "Let___ eat Grandma!", answer: "'s", hint: "Contraction of 'let us' — and add a comma after 'eat' to save Grandma!" },
        { sentence: "The dog wagged ___ tail happily.", answer: "its", hint: "Possessive 'its' has NO apostrophe (like his, hers)" },
        { sentence: "I bought apples___ bananas___ and oranges at the store.", answer: ",", hint: "Commas separate items in a list" },
        { sentence: "She said___ I'll be there at three o'clock.___", answer: ", \"", hint: "Comma before opening quotation mark for dialogue" },
        { sentence: "However___ the match was cancelled due to rain.", answer: ",", hint: "Comma after introductory words like However, Therefore, Meanwhile" },
        { sentence: "The exam covered three topics___ grammar___ punctuation___ and spelling.", answer: ":", hint: "Colon introduces a list" },
        { sentence: "It was raining heavily___ therefore, the game was postponed.", answer: ";", hint: "Semicolon joins two related independent clauses" }
      ],
      completeStory: {
        starter: "Write a short scene between two characters meeting for the first time. One character is nervous, the other is confident.",
        wordLimit: 200,
        guidingQuestions: [
          "Include at least 6 lines of dialogue with correct punctuation",
          "Use a semicolon at least once",
          "Use an apostrophe for both contraction AND possession",
          "Include a list with correct comma usage"
        ]
      }
    },
    { // Day 4 - PEEL Paragraphs
      fillBlanks: [
        { sentence: "___: Social media has significantly impacted teenagers' mental health. (What part of PEEL is this?)", answer: "Point", hint: "The first sentence that states your argument clearly" },
        { sentence: "Furthermore, studies have shown that excessive screen time leads to ___. (complete with evidence)", answer: "increased anxiety", hint: "Give specific evidence that supports the Point" },
        { sentence: "This demonstrates that ___, which connects to the broader issue of teen wellbeing. (linking sentence)", answer: "technology can harm mental health", hint: "Link back to your main argument/question" },
        { sentence: "A strong topic sentence should be ___ and ___.", answer: "clear, arguable", hint: "It states a point that can be debated, not just a fact" },
        { sentence: "___, the evidence suggests that more needs to be done. (transition word showing addition)", answer: "Furthermore", hint: "Words that add: Furthermore, Additionally, Moreover" },
        { sentence: "In contrast to popular belief, ___ (transition showing opposition)", answer: "However", hint: "Words that oppose: However, On the other hand, Nevertheless" },
        { sentence: "The ___ sentence of a paragraph links back to the essay question.", answer: "concluding", hint: "The 'L' in PEEL = Link" },
        { sentence: "PEEL stands for Point, Evidence, ___, Link.", answer: "Explanation", hint: "The part where you explain what the evidence means" }
      ],
      completeStory: {
        starter: "Write three connected PEEL paragraphs arguing whether 'Technology does more harm than good for teenagers.'",
        wordLimit: 300,
        guidingQuestions: [
          "Paragraph 1: Point about social media's negative effects",
          "Paragraph 2: Counter-argument — technology helps with education",
          "Paragraph 3: Your final position — weigh both sides",
          "Use transition words between paragraphs (However, Furthermore, In conclusion)"
        ]
      }
    },
    { // Day 5 - Reading Comprehension
      fillBlanks: [
        { sentence: "'The city streets were empty, newspapers blowing like tumbleweeds.' The technique used here is ___.", answer: "simile", hint: "'like' or 'as' = simile" },
        { sentence: "'The wind howled through the broken windows.' This is an example of ___.", answer: "personification", hint: "Giving human qualities to non-human things" },
        { sentence: "The ___ of a text is the message or lesson the author wants to convey.", answer: "theme", hint: "The big idea — e.g., 'courage', 'friendship', 'good vs evil'" },
        { sentence: "When you work out meaning that isn't directly stated, you are making an ___.", answer: "inference", hint: "Reading between the lines" },
        { sentence: "'The politician's promise was as solid as a chocolate teapot.' The tone here is ___.", answer: "sarcastic", hint: "A chocolate teapot would melt — so the promise is useless" },
        { sentence: "An author who wants to change your opinion is writing to ___.", answer: "persuade", hint: "Purpose: persuade, inform, entertain, or instruct" },
        { sentence: "'Crash! Bang! The thunder roared.' This uses ___ to create sound effects.", answer: "onomatopoeia", hint: "Words that sound like what they describe" },
        { sentence: "Reading quickly to find a specific date or name is called ___.", answer: "scanning", hint: "Skimming = general idea, Scanning = specific detail" }
      ],
      completeStory: {
        starter: "Read this extract, then write an analytical response:\n\n'The old house stood at the end of the lane like a forgotten soldier, its windows dark and hollow. Ivy crawled up the walls, slowly consuming what time had already begun to destroy. No one had entered for twenty years, yet somehow, a light flickered in the attic window.'\n\nAnalyse how the writer creates atmosphere in this passage.",
        wordLimit: 200,
        guidingQuestions: [
          "Identify at least 2 language techniques (simile, personification, etc.)",
          "Explain what effect each technique has on the reader",
          "Use TEEL structure: Technique → Example (quote) → Effect → Link to atmosphere",
          "Use analytical verbs: suggests, implies, conveys, creates, evokes"
        ]
      }
    },
    { // Day 6 - Analytical & Persuasive Writing
      fillBlanks: [
        { sentence: "AFOREST stands for Alliteration, Facts, Opinions, Rhetorical questions, ___, Statistics, Three-rule.", answer: "Emotive language", hint: "Words that make the reader FEEL something (e.g., 'devastating', 'heartbreaking')" },
        { sentence: "'Don't you think every student deserves a fair chance?' This is a ___ question.", answer: "rhetorical", hint: "A question asked for effect, not expecting an answer" },
        { sentence: "'We must act now. We must act fast. We must act together.' This uses the rule of ___.", answer: "three", hint: "Repeating a structure three times for emphasis" },
        { sentence: "When embedding a quote, write: The author ___ that... (analytical verb)", answer: "suggests", hint: "Analytical verbs: suggests, implies, demonstrates, reveals, conveys" },
        { sentence: "'According to a 2024 study, 73% of teens report...' This technique uses ___.", answer: "statistics", hint: "Numbers and data to support an argument" },
        { sentence: "An essay should be written in ___ register, not informal.", answer: "formal", hint: "No slang, contractions, or 'I reckon' in academic writing" },
        { sentence: "The thesis statement belongs in the ___.", answer: "introduction", hint: "It tells the reader your main argument upfront" },
        { sentence: "'Bright blue butterflies' is an example of ___.", answer: "alliteration", hint: "Repeated sounds at the start of words" }
      ],
      completeStory: {
        starter: "Write a persuasive letter to your school principal arguing that the school day should start at 9:30am instead of 8:30am.",
        wordLimit: 250,
        guidingQuestions: [
          "Use at least 4 AFOREST techniques",
          "Include a rhetorical question in your opening",
          "Use a statistic (you can make one up for practice: 'Studies show that...')",
          "End with a powerful call to action using the rule of three"
        ]
      }
    },
    { // Day 7 - Essay Writing
      fillBlanks: [
        { sentence: "An essay introduction should contain a hook, ___, and thesis statement.", answer: "context", hint: "Background information that sets the scene" },
        { sentence: "A conclusion should ___ the thesis, summarise key points, and leave a final thought.", answer: "restate", hint: "Say your thesis again in different words" },
        { sentence: "The purpose of a 'hook' is to ___ the reader's attention.", answer: "grab", hint: "Start with something interesting: a question, quote, or surprising fact" },
        { sentence: "Each body paragraph should focus on ___ main idea.", answer: "one", hint: "One point per paragraph — don't overcrowd" },
        { sentence: "Before writing, spend 5 minutes creating a ___.", answer: "plan", hint: "Outline your introduction, body paragraphs, and conclusion" },
        { sentence: "When editing, check for: spelling, ___, punctuation, and structure.", answer: "grammar", hint: "SPAG = Spelling, Punctuation And Grammar" },
        { sentence: "'In conclusion, this essay has argued that...' is an example of a ___ phrase.", answer: "signpost", hint: "Words that guide the reader through your essay" },
        { sentence: "A strong essay has a clear ___ that runs through every paragraph.", answer: "argument", hint: "Your position/thesis that everything connects back to" }
      ],
      completeStory: {
        starter: "Write a complete 5-paragraph essay on the topic: 'Does social media do more good or harm for young people?'",
        wordLimit: 500,
        guidingQuestions: [
          "Introduction: Hook (rhetorical question or statistic) + context + clear thesis",
          "Body 1: First argument with TEEL (e.g., mental health impacts)",
          "Body 2: Counter-argument with TEEL (e.g., connection and learning benefits)",
          "Body 3: Your strongest point with TEEL (e.g., balance and responsibility)",
          "Conclusion: Restate thesis, summarise, powerful final sentence",
          "Self-check: Does every paragraph link back to the question? Are transitions smooth?"
        ]
      }
    }
  ];

  // Merge extras into existing curriculum
  ENGLISH_CURRICULUM.forEach(function(day, i) {
    if (extras[i]) {
      day.fillBlanks = extras[i].fillBlanks;
      day.completeStory = extras[i].completeStory;
    }
  });
})();

// Sentence Builder exercises — progressive sentence construction
(function() {
  const builders = [
    { // Day 1 - Sports theme
      topic: "The 1966 World Cup Final",
      steps: [
        { instruction: "Write a simple sentence (subject + verb + object)", example: "England won the World Cup.", userPrompt: "Write a simple sentence about a famous sports moment." },
        { instruction: "Add an adjective to describe a noun", example: "Determined England won the thrilling World Cup.", userPrompt: "Add an adjective to make your sentence more vivid." },
        { instruction: "Add an adverb to describe the verb", example: "Determined England dramatically won the thrilling World Cup.", userPrompt: "Add an adverb to show HOW the action happened." },
        { instruction: "Add a subordinate clause (because/although/when)", example: "Although they were losing at half-time, determined England dramatically won the thrilling World Cup.", userPrompt: "Add a clause starting with although, because, or when." },
        { instruction: "Add a prepositional phrase for time/place detail", example: "Although they were losing at half-time, determined England dramatically won the thrilling World Cup at Wembley Stadium in front of 96,000 fans.", userPrompt: "Add where or when it happened for extra detail." }
      ]
    },
    { // Day 2 - History theme
      topic: "The Fall of the Roman Empire",
      steps: [
        { instruction: "Write a simple sentence (subject + verb)", example: "Rome collapsed.", userPrompt: "Write a simple sentence about an ancient civilisation." },
        { instruction: "Add an adjective to the subject", example: "Mighty Rome collapsed.", userPrompt: "Add an adjective that describes the civilisation." },
        { instruction: "Add an adverb or adverbial phrase", example: "Mighty Rome gradually collapsed.", userPrompt: "Add a word or phrase showing HOW or WHEN it happened." },
        { instruction: "Add a reason clause (because/due to/as)", example: "Mighty Rome gradually collapsed because its armies were stretched too thin across Europe.", userPrompt: "Add a reason using because, due to, or as." },
        { instruction: "Add a consequence or contrast (which/leading to/however)", example: "Mighty Rome gradually collapsed because its armies were stretched too thin across Europe, leading to centuries of chaos across the continent.", userPrompt: "Add what happened as a result, or a contrasting idea." }
      ]
    },
    { // Day 3 - Finance theme
      topic: "The 2008 Financial Crisis",
      steps: [
        { instruction: "Write a simple sentence about money or business", example: "Banks failed.", userPrompt: "Write a simple sentence about banks or the economy." },
        { instruction: "Add adjectives to make it specific", example: "Major investment banks failed.", userPrompt: "Add one or two adjectives for precision." },
        { instruction: "Add an adverb showing manner or extent", example: "Major investment banks spectacularly failed.", userPrompt: "Add an adverb showing how dramatically it happened." },
        { instruction: "Add a time clause (when/after/before)", example: "After years of reckless lending, major investment banks spectacularly failed.", userPrompt: "Add a time clause to show when it happened." },
        { instruction: "Add impact using a semicolon or dash", example: "After years of reckless lending, major investment banks spectacularly failed — millions of ordinary families lost their homes and savings overnight.", userPrompt: "Add the impact using a semicolon or dash." }
      ]
    },
    { // Day 4 - Global Studies theme
      topic: "Climate Change and Island Nations",
      steps: [
        { instruction: "Write a simple sentence about a global issue", example: "Sea levels are rising.", userPrompt: "Write a simple sentence about a world problem." },
        { instruction: "Add an adverb or intensifier", example: "Sea levels are rising dangerously.", userPrompt: "Add a word to show the severity." },
        { instruction: "Add who is affected (with a relative clause)", example: "Sea levels are rising dangerously, which threatens Pacific island nations.", userPrompt: "Add who or what is affected using 'which' or 'that'." },
        { instruction: "Add a cause clause", example: "Because global temperatures continue to climb, sea levels are rising dangerously, which threatens Pacific island nations.", userPrompt: "Add a cause at the start using because or since." },
        { instruction: "Add a call to action or future prediction", example: "Because global temperatures continue to climb, sea levels are rising dangerously, which threatens Pacific island nations; unless governments act decisively, entire countries could disappear beneath the waves within decades.", userPrompt: "Add a prediction or solution using unless/if/without." }
      ]
    },
    { // Day 5 - Sports journalism theme
      topic: "A Match Report",
      steps: [
        { instruction: "Write a factual sentence about a game result", example: "Liverpool beat Manchester City.", userPrompt: "Write a simple result sentence about any sport." },
        { instruction: "Add score details and an adjective", example: "Liverpool beat Manchester City 3-2 in a breathtaking match.", userPrompt: "Add the score and a describing word for the match." },
        { instruction: "Add when and where", example: "Liverpool beat Manchester City 3-2 in a breathtaking match at Anfield on Saturday evening.", userPrompt: "Add the time and place." },
        { instruction: "Add a key moment using a participle phrase", example: "Scoring a last-minute winner, Liverpool beat Manchester City 3-2 in a breathtaking match at Anfield on Saturday evening.", userPrompt: "Start with an -ing phrase describing the key moment." },
        { instruction: "Add expert reaction or context", example: "Scoring a last-minute winner, Liverpool beat Manchester City 3-2 in a breathtaking match at Anfield on Saturday evening, a result that sends them top of the Premier League for the first time this season.", userPrompt: "Add context about what the result means, using 'a result that...' or a quote." }
      ]
    },
    { // Day 6 - History/analytical theme
      topic: "Was the Treaty of Versailles Fair?",
      steps: [
        { instruction: "Write a clear argument statement (your opinion)", example: "The Treaty of Versailles was unfair.", userPrompt: "Write your argument as one clear sentence." },
        { instruction: "Add a qualifier (arguably/some historians believe)", example: "Arguably, the Treaty of Versailles was deeply unfair.", userPrompt: "Add a word that shows this is a debatable position." },
        { instruction: "Add evidence introduced with a colon or dash", example: "Arguably, the Treaty of Versailles was deeply unfair: Germany was forced to accept full blame for the war and pay crippling reparations.", userPrompt: "Add evidence after a colon or dash." },
        { instruction: "Add a counter-argument using however/although", example: "Arguably, the Treaty of Versailles was deeply unfair: Germany was forced to accept full blame for the war and pay crippling reparations. However, Allied nations had suffered devastating losses and demanded justice.", userPrompt: "Add an opposing view using however or although." },
        { instruction: "Add a concluding evaluation", example: "Arguably, the Treaty of Versailles was deeply unfair: Germany was forced to accept full blame for the war and pay crippling reparations. However, Allied nations had suffered devastating losses and demanded justice. On balance, the treaty's harshness planted the seeds for future conflict rather than securing lasting peace.", userPrompt: "Add your final judgement using 'on balance' or 'ultimately'." }
      ]
    },
    { // Day 7 - Finance & Global Studies theme
      topic: "Should Billionaires Exist?",
      steps: [
        { instruction: "Write a provocative opening statement", example: "No one needs a billion dollars.", userPrompt: "Write a bold opening sentence about wealth inequality." },
        { instruction: "Add a statistic or fact for impact", example: "No one needs a billion dollars — yet 2,700 people worldwide hoard more wealth than the poorest 4 billion combined.", userPrompt: "Add a shocking fact using a dash or semicolon." },
        { instruction: "Add an opposing view (Some argue/Critics suggest)", example: "No one needs a billion dollars — yet 2,700 people worldwide hoard more wealth than the poorest 4 billion combined. Some argue that billionaires create jobs and drive innovation.", userPrompt: "Add what the other side thinks." },
        { instruction: "Add your rebuttal (Nevertheless/While this may be true)", example: "No one needs a billion dollars — yet 2,700 people worldwide hoard more wealth than the poorest 4 billion combined. Some argue that billionaires create jobs and drive innovation. Nevertheless, when workers cannot afford housing while their employers buy superyachts, something in the system has fundamentally broken.", userPrompt: "Counter their argument with your own evidence." },
        { instruction: "End with a rhetorical question or call to action", example: "No one needs a billion dollars — yet 2,700 people worldwide hoard more wealth than the poorest 4 billion combined. Some argue that billionaires create jobs and drive innovation. Nevertheless, when workers cannot afford housing while their employers buy superyachts, something in the system has fundamentally broken. Is this really the best we can do?", userPrompt: "Finish with a powerful question or statement." }
      ]
    }
  ];

  ENGLISH_CURRICULUM.forEach(function(day, i) {
    if (builders[i]) {
      day.sentenceBuilder = builders[i];
    }
  });
})();
