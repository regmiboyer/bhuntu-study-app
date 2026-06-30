export const MATHS_CURRICULUM = [
  // ============================================================
  // DAY 1: Surds & Indices
  // ============================================================
  {
    day: 1,
    title: "Surds & Indices",
    lesson: {
      content: `
        <h2>Surds & Indices</h2>
        <p>Surds are square roots (or other roots) that can't be simplified to a whole number. Mastering surds and index laws is essential for Year 10 algebra and beyond.</p>

        <h3>1. Simplifying Surds</h3>
        <p>Find the largest perfect square factor, then separate.</p>
        <pre>
  √50 = √(25 × 2) = √25 × √2 = 5√2
  √72 = √(36 × 2) = √36 × √2 = 6√2
  √200 = √(100 × 2) = 10√2
        </pre>

        <h4>Worked Example — Adding/Subtracting Surds</h4>
        <pre>
  Simplify: 3√12 + 2√27

  Step 1: Simplify each surd
    3√12 = 3√(4×3) = 3 × 2√3 = 6√3
    2√27 = 2√(9×3) = 2 × 3√3 = 6√3

  Step 2: Add like surds
    6√3 + 6√3 = 12√3
        </pre>

        <h4>Worked Example — Multiplying Surds</h4>
        <pre>
  √3 × √5 = √15
  2√3 × 4√7 = 8√21
  √6 × √6 = √36 = 6  (a surd times itself = the number under it)
        </pre>

        <h3>2. Rationalising the Denominator</h3>
        <p>We don't leave surds in the denominator — multiply top and bottom by the surd.</p>
        <pre>
  Rationalise: 5/√3

  = 5/√3 × √3/√3
  = 5√3/3

  Rationalise: 6/(2√5)
  = 6/(2√5) × √5/√5
  = 6√5/10
  = 3√5/5
        </pre>

        <h3>3. Fractional & Negative Indices</h3>
        <pre>
  ┌────────────────────────────────────────────────────┐
  │  Rule                │  Example                    │
  ├────────────────────────────────────────────────────┤
  │  a^(1/2) = √a        │  9^(1/2) = 3               │
  │  a^(1/3) = ∛a        │  8^(1/3) = 2               │
  │  a^(m/n) = (ⁿ√a)^m   │  8^(2/3) = (∛8)² = 4      │
  │  a^(-n) = 1/a^n      │  2^(-3) = 1/8              │
  │  a^(-m/n) = 1/a^(m/n)│  4^(-3/2) = 1/(4^(3/2))=1/8│
  └────────────────────────────────────────────────────┘
        </pre>

        <h4>Worked Example</h4>
        <pre>
  Evaluate: 27^(2/3)

  Step 1: ∛27 = 3
  Step 2: 3² = 9

  Answer: 9

  Evaluate: 16^(-3/4)
  Step 1: ⁴√16 = 2
  Step 2: 2³ = 8
  Step 3: Negative index → 1/8

  Answer: 1/8
        </pre>

        <h3>⚠️ Common Mistakes</h3>
        <ul>
          <li>√50 ≠ 25 — you can't just halve the number</li>
          <li>√9 + √16 ≠ √25 — you can't add under the root</li>
          <li>Forgetting to simplify surds before adding (2√8 + √2 = 4√2 + √2 = 5√2)</li>
          <li>a^(2/3) means cube root FIRST then square, not the other way</li>
        </ul>
      `,
      keyPoints: [
        "Simplify surds by finding the largest perfect square factor",
        "Only like surds (same number under √) can be added or subtracted",
        "√a × √b = √(ab), but √a + √b ≠ √(a+b)",
        "Rationalise: multiply top and bottom by the surd in the denominator",
        "a^(m/n) = (ⁿ√a)^m — root first, then power",
        "Negative index means reciprocal: a^(-n) = 1/aⁿ"
      ]
    },
    flashcards: [
      { front: "Simplify √72", back: "6√2 (since 72 = 36 × 2, √36 = 6)" },
      { front: "What is 8^(2/3)?", back: "4 (cube root of 8 = 2, then 2² = 4)" },
      { front: "Rationalise 1/√5", back: "√5/5 (multiply top and bottom by √5)" },
      { front: "What is 4^(-1/2)?", back: "1/2 (√4 = 2, negative → 1/2)" },
      { front: "Simplify √12 + √27", back: "2√3 + 3√3 = 5√3" },
      { front: "What is a^0?", back: "1 (anything to the power 0 = 1)" },
      { front: "√5 × √5 = ?", back: "5 (a surd times itself gives the number under the root)" },
      { front: "Simplify: 2√3 × 3√2", back: "6√6 (multiply coefficients: 2×3=6, multiply surds: √3×√2=√6)" }
    ],
    quiz: [
      {
        question: "Simplify √98",
        options: ["7√2", "2√49", "49√2", "14"],
        correct: 0,
        explanation: "98 = 49 × 2. √49 = 7. So √98 = 7√2."
      },
      {
        question: "Evaluate 16^(3/4)",
        options: ["8", "12", "64", "4"],
        correct: 0,
        explanation: "⁴√16 = 2. Then 2³ = 8."
      },
      {
        question: "Rationalise: 4/√2",
        options: ["2√2", "4√2", "4√2/2", "2"],
        correct: 0,
        explanation: "4/√2 × √2/√2 = 4√2/2 = 2√2."
      },
      {
        question: "Simplify: 3√8 − √2",
        options: ["5√2", "3√6", "2√8", "7√2"],
        correct: 0,
        explanation: "3√8 = 3×2√2 = 6√2. Then 6√2 − √2 = 5√2."
      },
      {
        question: "What is 25^(-1/2)?",
        options: ["1/5", "-5", "1/25", "-1/5"],
        correct: 0,
        explanation: "25^(1/2) = 5. Negative index: 1/5."
      },
      {
        question: "Simplify √2 × √8",
        options: ["4", "√10", "2√4", "√16"],
        correct: 0,
        explanation: "√2 × √8 = √16 = 4."
      }
    ],
    practiceProblems: [
      {
        question: "Simplify fully: √75 + 2√48 − √27",
        answer: "10√3",
        hint: "√75 = 5√3, 2√48 = 2×4√3 = 8√3, √27 = 3√3. Then 5√3 + 8√3 − 3√3."
      },
      {
        question: "Rationalise and simplify: (3+√2)/(√2)",
        answer: "(3√2 + 2)/2",
        hint: "Multiply top and bottom by √2: (3+√2)×√2 / (√2×√2) = (3√2+2)/2."
      },
      {
        question: "Evaluate without a calculator: (8/27)^(-2/3)",
        answer: "9/4",
        hint: "Negative power → flip the fraction: (27/8)^(2/3). Cube root of 27/8 = 3/2. Then (3/2)² = 9/4."
      }
    ]
  },

  // ============================================================
  // DAY 2: Quadratic Expressions
  // ============================================================
  {
    day: 2,
    title: "Quadratic Expressions",
    lesson: {
      content: `
        <h2>Quadratic Expressions</h2>
        <p>Quadratics are expressions with x² as the highest power. Expanding, factorising, and completing the square are the core skills for solving quadratic equations (tomorrow!).</p>

        <h3>1. Expanding Perfect Squares</h3>
        <pre>
  (a + b)² = a² + 2ab + b²
  (a − b)² = a² − 2ab + b²

  Example: (x + 5)²
  = x² + 2(x)(5) + 5²
  = x² + 10x + 25

  Example: (3x − 2)²
  = (3x)² − 2(3x)(2) + 2²
  = 9x² − 12x + 4
        </pre>

        <h3>2. Difference of Two Squares</h3>
        <pre>
  (a + b)(a − b) = a² − b²

  Example: (x + 7)(x − 7) = x² − 49
  Example: (2x + 3)(2x − 3) = 4x² − 9
        </pre>

        <h3>3. Factorising Quadratics (x² + bx + c)</h3>
        <p>Find two numbers that multiply to c and add to b.</p>
        <pre>
  Factorise: x² + 7x + 12

  Find two numbers: multiply to 12, add to 7
  → 3 and 4

  Answer: (x + 3)(x + 4)

  Factorise: x² − 5x + 6
  Multiply to +6, add to −5
  → −2 and −3

  Answer: (x − 2)(x − 3)
        </pre>

        <h4>Worked Example — with negatives</h4>
        <pre>
  Factorise: x² + 2x − 15

  Multiply to −15, add to +2
  → +5 and −3  (5 × −3 = −15, 5 + (−3) = 2)

  Answer: (x + 5)(x − 3)
        </pre>

        <h3>4. Factorising ax² + bx + c (a ≠ 1)</h3>
        <p>Use the splitting-the-middle-term method.</p>
        <pre>
  Factorise: 2x² + 7x + 3

  Step 1: Multiply a × c = 2 × 3 = 6
  Step 2: Find two numbers: multiply to 6, add to 7 → 6 and 1
  Step 3: Split the middle term:
    2x² + 6x + 1x + 3
  Step 4: Factorise in pairs:
    2x(x + 3) + 1(x + 3)
  Step 5: Factor out common bracket:
    (2x + 1)(x + 3)
        </pre>

        <h3>5. Completing the Square</h3>
        <pre>
  x² + bx + c → (x + b/2)² − (b/2)² + c

  Example: x² + 6x + 2
  Step 1: Half of 6 = 3
  Step 2: (x + 3)² = x² + 6x + 9
  Step 3: But we have +2, not +9, so subtract 7:
    (x + 3)² − 7

  Check: (x+3)² − 7 = x² + 6x + 9 − 7 = x² + 6x + 2 ✓
        </pre>

        <h3>⚠️ Common Mistakes</h3>
        <ul>
          <li>(x+3)² ≠ x² + 9 — don't forget the middle term (2×x×3 = 6x)</li>
          <li>When factorising, check signs carefully: multiply to c, ADD to b</li>
          <li>In completing the square, subtract (b/2)² — don't just add it</li>
          <li>Always expand your answer to check it matches the original</li>
        </ul>
      `,
      keyPoints: [
        "(a+b)² = a² + 2ab + b² — don't forget the middle term!",
        "(a+b)(a−b) = a² − b² (difference of two squares)",
        "To factorise x² + bx + c: find two numbers that multiply to c and add to b",
        "For ax² + bx + c: multiply a×c, split the middle term, factorise in pairs",
        "Completing the square: x² + bx → (x + b/2)² − (b/2)²",
        "Always check by expanding your factored answer"
      ]
    },
    flashcards: [
      { front: "Expand (x + 4)²", back: "x² + 8x + 16" },
      { front: "Factorise x² − 9", back: "(x + 3)(x − 3) — difference of two squares" },
      { front: "Factorise x² + 5x + 6", back: "(x + 2)(x + 3) — multiply to 6, add to 5" },
      { front: "What is (a−b)² expanded?", back: "a² − 2ab + b²" },
      { front: "Complete the square: x² + 8x", back: "(x + 4)² − 16" },
      { front: "Factorise x² − x − 12", back: "(x − 4)(x + 3) — multiply to −12, add to −1" },
      { front: "What is (2x+1)(2x−1)?", back: "4x² − 1 (difference of squares)" },
      { front: "How do you factorise 3x² + 10x + 3?", back: "a×c = 9, numbers: 9 and 1. Split: 3x²+9x+x+3 = 3x(x+3)+1(x+3) = (3x+1)(x+3)" }
    ],
    quiz: [
      {
        question: "Expand (x − 3)²",
        options: ["x² − 6x + 9", "x² − 9", "x² − 3x + 9", "x² + 6x + 9"],
        correct: 0,
        explanation: "(x−3)² = x² − 2(x)(3) + 3² = x² − 6x + 9."
      },
      {
        question: "Factorise: x² − 16",
        options: ["(x−4)(x+4)", "(x−8)(x+2)", "(x−4)²", "(x+16)(x−1)"],
        correct: 0,
        explanation: "Difference of squares: x² − 4² = (x−4)(x+4)."
      },
      {
        question: "Factorise: x² + x − 20",
        options: ["(x+5)(x−4)", "(x−5)(x+4)", "(x+10)(x−2)", "(x+20)(x−1)"],
        correct: 0,
        explanation: "Need: multiply to −20, add to +1. That's +5 and −4."
      },
      {
        question: "Complete the square: x² + 10x + 3",
        options: ["(x+5)² − 22", "(x+5)² + 3", "(x+10)² − 97", "(x+5)² − 28"],
        correct: 0,
        explanation: "(x+5)² = x² + 10x + 25. We need +3, not +25: (x+5)² − 22."
      },
      {
        question: "Factorise: 2x² + 5x − 3",
        options: ["(2x−1)(x+3)", "(2x+3)(x−1)", "(2x+1)(x−3)", "(x+3)(2x−1)"],
        correct: 0,
        explanation: "a×c = −6. Numbers: +6 and −1. Split: 2x²+6x−x−3 = 2x(x+3)−1(x+3) = (2x−1)(x+3)."
      },
      {
        question: "Expand and simplify: (2x+3)(2x−3)",
        options: ["4x² − 9", "4x² + 9", "4x² − 6x − 9", "2x² − 9"],
        correct: 0,
        explanation: "Difference of squares: (2x)² − 3² = 4x² − 9."
      }
    ],
    practiceProblems: [
      {
        question: "Factorise completely: 3x² − 12",
        answer: "3(x+2)(x−2)",
        hint: "Factor out 3 first: 3(x²−4). Then use difference of squares."
      },
      {
        question: "Complete the square for 2x² + 12x + 5, writing it as a(x+p)² + q.",
        answer: "2(x+3)² − 13",
        hint: "Factor out 2 from x terms: 2(x²+6x) + 5 = 2[(x+3)²−9] + 5 = 2(x+3)² − 18 + 5."
      },
      {
        question: "A rectangle has area x² + 8x + 15. If the width is (x+3), find the length.",
        answer: "x + 5",
        hint: "Factorise x² + 8x + 15 = (x+3)(x+5). Length = area ÷ width."
      }
    ]
  },

  // ============================================================
  // DAY 3: Solving Quadratic Equations
  // ============================================================
  {
    day: 3,
    title: "Solving Quadratic Equations",
    lesson: {
      content: `
        <h2>Solving Quadratic Equations</h2>
        <p>A quadratic equation has the form ax² + bx + c = 0. Unlike linear equations (one answer), quadratics can have 0, 1, or 2 solutions.</p>

        <h3>1. Solving by Factorising (Null Factor Law)</h3>
        <p>If A × B = 0, then A = 0 or B = 0.</p>
        <pre>
  Solve: x² + 5x + 6 = 0

  Step 1: Factorise → (x + 2)(x + 3) = 0
  Step 2: Set each factor to 0
    x + 2 = 0  →  x = −2
    x + 3 = 0  →  x = −3

  Solutions: x = −2 or x = −3
        </pre>

        <h4>Worked Example — must rearrange first</h4>
        <pre>
  Solve: x² = 3x + 10

  Step 1: Rearrange to = 0
    x² − 3x − 10 = 0

  Step 2: Factorise (multiply to −10, add to −3: −5 and +2)
    (x − 5)(x + 2) = 0

  Step 3: x = 5 or x = −2
        </pre>

        <h3>2. The Quadratic Formula</h3>
        <p>When factorising is hard or impossible, use the formula:</p>
        <pre>
        −b ± √(b² − 4ac)
  x = ─────────────────────
              2a

  For ax² + bx + c = 0
        </pre>

        <h4>Worked Example</h4>
        <pre>
  Solve: 2x² + 3x − 5 = 0

  a = 2, b = 3, c = −5

  x = (−3 ± √(9 − 4(2)(−5))) / (2×2)
  x = (−3 ± √(9 + 40)) / 4
  x = (−3 ± √49) / 4
  x = (−3 ± 7) / 4

  x = (−3 + 7)/4 = 4/4 = 1
  or
  x = (−3 − 7)/4 = −10/4 = −2.5

  Solutions: x = 1 or x = −2.5
        </pre>

        <h3>3. The Discriminant (Δ = b² − 4ac)</h3>
        <pre>
  The discriminant tells you HOW MANY solutions:

  Δ > 0  →  2 distinct real solutions
  Δ = 0  →  1 repeated solution (the parabola touches the x-axis)
  Δ < 0  →  0 real solutions (parabola doesn't cross x-axis)
        </pre>

        <h4>Worked Example</h4>
        <pre>
  How many solutions does 3x² + 2x + 5 = 0 have?

  Δ = b² − 4ac = (2)² − 4(3)(5) = 4 − 60 = −56

  Δ < 0 → No real solutions.
        </pre>

        <h3>4. Problem Solving with Quadratics</h3>
        <pre>
  A ball is kicked with height h = −5t² + 20t (metres, t in seconds).
  When does it hit the ground?

  Set h = 0: −5t² + 20t = 0
  Factor: −5t(t − 4) = 0
  t = 0 or t = 4

  t = 0 is the start, so it hits the ground at t = 4 seconds.
        </pre>

        <h3>⚠️ Common Mistakes</h3>
        <ul>
          <li>Forgetting to set = 0 before factorising</li>
          <li>Dividing by x instead of factorising (you lose the x = 0 solution!)</li>
          <li>Sign errors in the quadratic formula — be careful with −b</li>
          <li>Forgetting ± gives TWO solutions</li>
        </ul>
      `,
      keyPoints: [
        "Always rearrange to ax² + bx + c = 0 first",
        "Null Factor Law: if AB = 0, then A = 0 or B = 0",
        "Quadratic formula: x = (−b ± √(b²−4ac)) / 2a",
        "Discriminant Δ = b²−4ac tells you the number of solutions",
        "Never divide both sides by x — you'll lose a solution",
        "Check answers by substituting back into the original equation"
      ]
    },
    flashcards: [
      { front: "State the quadratic formula", back: "x = (−b ± √(b²−4ac)) / 2a" },
      { front: "What does Δ > 0 mean?", back: "Two distinct real solutions" },
      { front: "What does Δ = 0 mean?", back: "One repeated (double) solution" },
      { front: "Solve: x² − 9 = 0", back: "x = 3 or x = −3 (difference of squares)" },
      { front: "What is the null factor law?", back: "If A × B = 0, then A = 0 or B = 0" },
      { front: "Why can't you divide by x in x² − 5x = 0?", back: "You'd lose the x = 0 solution. Factor instead: x(x−5) = 0" },
      { front: "For 2x² − x − 6 = 0, what are a, b, c?", back: "a = 2, b = −1, c = −6" }
    ],
    quiz: [
      {
        question: "Solve: x² − 7x + 12 = 0",
        options: ["x = 3 or x = 4", "x = −3 or x = −4", "x = 6 or x = 2", "x = 12 or x = 1"],
        correct: 0,
        explanation: "Factors of 12 that add to 7: 3 and 4. (x−3)(x−4) = 0."
      },
      {
        question: "What is the discriminant of x² + 4x + 4 = 0?",
        options: ["0", "32", "−32", "8"],
        correct: 0,
        explanation: "Δ = 4² − 4(1)(4) = 16 − 16 = 0. One repeated solution."
      },
      {
        question: "Solve using the formula: x² + 2x − 8 = 0",
        options: ["x = 2 or x = −4", "x = −2 or x = 4", "x = 8 or x = −1", "x = 1 or x = −8"],
        correct: 0,
        explanation: "x = (−2 ± √(4+32))/2 = (−2 ± 6)/2. So x = 2 or x = −4."
      },
      {
        question: "How many real solutions does 2x² + x + 3 = 0 have?",
        options: ["0", "1", "2", "Cannot tell"],
        correct: 0,
        explanation: "Δ = 1 − 4(2)(3) = 1 − 24 = −23 < 0. No real solutions."
      },
      {
        question: "Solve: x² + 6x = 0",
        options: ["x = 0 or x = −6", "x = 6", "x = 0 or x = 6", "x = −6"],
        correct: 0,
        explanation: "Factor: x(x + 6) = 0. So x = 0 or x = −6."
      },
      {
        question: "A rectangle has length (x+4) and width (x−1), area = 24. What is x?",
        options: ["3", "4", "5", "6"],
        correct: 0,
        explanation: "(x+4)(x−1) = 24 → x²+3x−4 = 24 → x²+3x−28 = 0 → (x+7)(x−3) = 0. x = 3 (reject −7)."
      }
    ],
    practiceProblems: [
      {
        question: "Solve: 3x² − 11x − 4 = 0",
        answer: "x = 4 or x = −1/3",
        hint: "Use the formula: x = (11 ± √(121+48))/6 = (11 ± √169)/6 = (11 ± 13)/6."
      },
      {
        question: "For what values of k does kx² + 6x + 3 = 0 have exactly one solution?",
        answer: "k = 3",
        hint: "One solution means Δ = 0: 36 − 4(k)(3) = 0 → 36 = 12k → k = 3."
      },
      {
        question: "A ball's height is h = −4.9t² + 19.6t + 1.5 metres. Find when it reaches the ground (h=0), to 1 decimal place.",
        answer: "t ≈ 4.1 seconds",
        hint: "Use the formula with a=−4.9, b=19.6, c=1.5. Take the positive solution."
      }
    ]
  },

  // ============================================================
  // DAY 4: Simultaneous Equations
  // ============================================================
  {
    day: 4,
    title: "Simultaneous Equations",
    lesson: {
      content: `
        <h2>Simultaneous Equations</h2>
        <p>When you have two unknowns (x and y), you need two equations to find both. These are solved simultaneously — at the same time.</p>

        <h3>1. Elimination Method</h3>
        <p>Make the coefficients of one variable equal, then add/subtract to eliminate it.</p>
        <pre>
  Solve:  2x + 3y = 12  ... (1)
          4x − 3y = 6   ... (2)

  The y terms are +3y and −3y — they'll cancel if we ADD.

  (1) + (2):  6x = 18
              x = 3

  Substitute x = 3 into (1):
    2(3) + 3y = 12
    6 + 3y = 12
    3y = 6
    y = 2

  Solution: x = 3, y = 2
        </pre>

        <h4>Worked Example — must multiply first</h4>
        <pre>
  Solve:  3x + 2y = 16  ... (1)
          5x + 3y = 26  ... (2)

  To eliminate y: multiply (1) by 3 and (2) by 2
    9x + 6y = 48   ... (3)
    10x + 6y = 52  ... (4)

  (4) − (3):  x = 4

  Sub into (1): 3(4) + 2y = 16 → 2y = 4 → y = 2

  Solution: x = 4, y = 2
        </pre>

        <h3>2. Substitution Method</h3>
        <p>Best when one equation already has a variable isolated.</p>
        <pre>
  Solve:  y = 2x + 1    ... (1)
          3x + y = 11   ... (2)

  Substitute (1) into (2):
    3x + (2x + 1) = 11
    5x + 1 = 11
    5x = 10
    x = 2

  Then y = 2(2) + 1 = 5

  Solution: x = 2, y = 5
        </pre>

        <h3>3. Word Problems</h3>
        <pre>
  At a cricket match, adult tickets cost $25 and child tickets cost $15.
  120 tickets sold, total revenue $2,400.
  How many of each type were sold?

  Let a = adults, c = children.

  Equation 1 (total tickets):  a + c = 120
  Equation 2 (total money):    25a + 15c = 2400

  From (1): a = 120 − c
  Sub into (2): 25(120 − c) + 15c = 2400
    3000 − 25c + 15c = 2400
    −10c = −600
    c = 60

  Then a = 120 − 60 = 60

  Answer: 60 adult tickets and 60 child tickets.
        </pre>

        <h3>⚠️ Common Mistakes</h3>
        <ul>
          <li>Subtracting when you should add (or vice versa) — check the signs!</li>
          <li>Forgetting to multiply ALL terms when scaling an equation</li>
          <li>Finding x but forgetting to find y (you need both!)</li>
          <li>Not checking your answer in BOTH original equations</li>
        </ul>
      `,
      keyPoints: [
        "Elimination: make one variable's coefficients equal, then add or subtract",
        "Substitution: isolate one variable, plug into the other equation",
        "Choose elimination when both equations are in standard form (ax + by = c)",
        "Choose substitution when one variable is already isolated (y = ...)",
        "Always find BOTH variables and check in BOTH equations",
        "Word problems: define variables, write two equations, solve"
      ]
    },
    flashcards: [
      { front: "When do you ADD equations in elimination?", back: "When the target variable has opposite signs (e.g. +3y and −3y)" },
      { front: "When do you SUBTRACT equations in elimination?", back: "When the target variable has the same sign (e.g. +2y and +2y)" },
      { front: "When is substitution the better method?", back: "When one equation already has a variable isolated (e.g. y = 3x + 1)" },
      { front: "How do you check simultaneous equation answers?", back: "Substitute both values into BOTH original equations — they must both be true" },
      { front: "Solve by inspection: x + y = 10, x − y = 4", back: "Add: 2x = 14, x = 7. Then y = 3." },
      { front: "What's the first step for a word problem?", back: "Define your variables (let x = ..., let y = ...) then write two equations" }
    ],
    quiz: [
      {
        question: "Solve: x + y = 7, x − y = 3",
        options: ["x=5, y=2", "x=3, y=4", "x=7, y=0", "x=4, y=3"],
        correct: 0,
        explanation: "Add equations: 2x = 10, x = 5. Then y = 7 − 5 = 2."
      },
      {
        question: "Solve: 2x + y = 10, x + y = 7",
        options: ["x=3, y=4", "x=5, y=0", "x=4, y=3", "x=2, y=6"],
        correct: 0,
        explanation: "Subtract: (2x+y)−(x+y) = 10−7 → x = 3. Then y = 7−3 = 4."
      },
      {
        question: "Which method is best for: y = 4x − 1 and 2x + 3y = 25?",
        options: ["Substitution", "Elimination", "Graphing", "Trial and error"],
        correct: 0,
        explanation: "y is already isolated in the first equation — substitute directly."
      },
      {
        question: "Solve: 3x + 2y = 8, x = y + 1",
        options: ["x=2, y=1", "x=3, y=2", "x=1, y=0", "x=4, y=3"],
        correct: 0,
        explanation: "Sub x=y+1: 3(y+1)+2y = 8 → 3y+3+2y = 8 → 5y = 5 → y=1, x=2."
      },
      {
        question: "Two numbers add to 50 and differ by 14. What are they?",
        options: ["32 and 18", "34 and 16", "36 and 14", "30 and 20"],
        correct: 0,
        explanation: "x+y=50, x−y=14. Add: 2x=64, x=32. Then y=18."
      }
    ],
    practiceProblems: [
      {
        question: "Solve: 4x + 3y = 23 and 2x + 5y = 29",
        answer: "x = 2, y = 5",
        hint: "Multiply the second equation by 2: 4x+10y=58. Subtract the first: 7y=35, y=5."
      },
      {
        question: "Manchester United scored 3 goals total from headers (h) and shots (s). Headers are worth the same points. If 2h + 3s = 13 and h + 2s = 8, find h and s.",
        answer: "h = 2, s = 3",
        hint: "Multiply second by 2: 2h+4s=16. Subtract first: s=3. Then h=2."
      },
      {
        question: "Find where y = 2x + 1 and y = −x + 7 intersect.",
        answer: "(2, 5)",
        hint: "Set equal: 2x+1 = −x+7 → 3x = 6 → x = 2. Then y = 2(2)+1 = 5."
      }
    ]
  },

  // ============================================================
  // DAY 5: Trigonometry
  // ============================================================
  {
    day: 5,
    title: "Trigonometry",
    lesson: {
      content: `
        <h2>Trigonometry</h2>
        <p>Trigonometry connects angles and sides in right-angled triangles. It's used everywhere: architecture, navigation, sports analysis, engineering.</p>

        <h3>1. SOH CAH TOA</h3>
        <pre>
  sin(θ) = Opposite / Hypotenuse     (SOH)
  cos(θ) = Adjacent / Hypotenuse     (CAH)
  tan(θ) = Opposite / Adjacent       (TOA)

  Hypotenuse = longest side (opposite the right angle)
  Opposite = side opposite to the angle you're using
  Adjacent = side next to the angle (not the hypotenuse)
        </pre>

        <h3>2. Finding a Side</h3>
        <h4>Worked Example — finding the opposite</h4>
        <pre>
  In a right triangle, angle = 35°, hypotenuse = 10 cm.
  Find the opposite side.

  We have: angle, hypotenuse, want opposite → use SIN

  sin(35°) = opp / 10
  opp = 10 × sin(35°)
  opp = 10 × 0.5736
  opp ≈ 5.74 cm
        </pre>

        <h4>Worked Example — finding the adjacent</h4>
        <pre>
  Angle = 50°, opposite = 8 cm. Find adjacent.

  We have: opposite and angle, want adjacent → use TAN

  tan(50°) = 8 / adj
  adj = 8 / tan(50°)
  adj = 8 / 1.1918
  adj ≈ 6.71 cm
        </pre>

        <h3>3. Finding an Angle</h3>
        <pre>
  Use the inverse functions: sin⁻¹, cos⁻¹, tan⁻¹

  Example: opposite = 5, hypotenuse = 13. Find the angle.

  sin(θ) = 5/13
  θ = sin⁻¹(5/13)
  θ = sin⁻¹(0.3846)
  θ ≈ 22.6°
        </pre>

        <h4>Worked Example</h4>
        <pre>
  A ladder 6 m long leans against a wall. The foot is 2 m from the wall.
  Find the angle the ladder makes with the ground.

  Adjacent = 2, Hypotenuse = 6 → use COS

  cos(θ) = 2/6 = 1/3
  θ = cos⁻¹(1/3)
  θ ≈ 70.5°
        </pre>

        <h3>4. Angles of Elevation and Depression</h3>
        <pre>
  Angle of elevation: looking UP from horizontal
  Angle of depression: looking DOWN from horizontal

  Example: From the top of a 30 m building, the angle of
  depression to a car is 40°. How far is the car from the base?

  The angle of depression (40°) = the angle of elevation from
  the car (alternate angles).

  tan(40°) = 30 / distance
  distance = 30 / tan(40°)
  distance = 30 / 0.8391
  distance ≈ 35.7 m
        </pre>

        <h3>⚠️ Common Mistakes</h3>
        <ul>
          <li>Labelling sides wrong — O, A, H depend on WHICH angle you're using</li>
          <li>Calculator in radians mode instead of degrees</li>
          <li>Using sin when you should use cos (always identify what you HAVE and WANT)</li>
          <li>Confusing elevation and depression angles</li>
        </ul>
      `,
      keyPoints: [
        "SOH CAH TOA: Sin=O/H, Cos=A/H, Tan=O/A",
        "Label sides relative to your chosen angle (not the right angle)",
        "To find a side: rearrange the trig ratio and multiply/divide",
        "To find an angle: use inverse trig (sin⁻¹, cos⁻¹, tan⁻¹)",
        "Angle of elevation = looking up; angle of depression = looking down",
        "Check calculator is in DEGREES mode, not radians"
      ]
    },
    flashcards: [
      { front: "What does SOH stand for?", back: "Sin = Opposite / Hypotenuse" },
      { front: "What does CAH stand for?", back: "Cos = Adjacent / Hypotenuse" },
      { front: "What does TOA stand for?", back: "Tan = Opposite / Adjacent" },
      { front: "Which ratio if you have opp and hyp?", back: "Sin (SOH)" },
      { front: "Which ratio if you have adj and hyp?", back: "Cos (CAH)" },
      { front: "Which ratio if you have opp and adj?", back: "Tan (TOA)" },
      { front: "How do you find an angle from sides?", back: "Use inverse trig: θ = sin⁻¹(O/H) or cos⁻¹(A/H) or tan⁻¹(O/A)" },
      { front: "tan(45°) = ?", back: "1 (because opposite = adjacent in a 45° right triangle)" }
    ],
    quiz: [
      {
        question: "In a right triangle, angle 30°, hypotenuse 12. Find the opposite side.",
        options: ["6", "10.39", "6.93", "12"],
        correct: 0,
        explanation: "sin(30°) = opp/12. opp = 12 × sin(30°) = 12 × 0.5 = 6."
      },
      {
        question: "Adjacent = 8, hypotenuse = 10. Find the angle.",
        options: ["36.9°", "53.1°", "38.7°", "51.3°"],
        correct: 0,
        explanation: "cos(θ) = 8/10 = 0.8. θ = cos⁻¹(0.8) ≈ 36.9°."
      },
      {
        question: "Opposite = 7, adjacent = 7. What is the angle?",
        options: ["45°", "30°", "60°", "90°"],
        correct: 0,
        explanation: "tan(θ) = 7/7 = 1. θ = tan⁻¹(1) = 45°."
      },
      {
        question: "From a 50 m cliff, angle of depression to a boat is 25°. How far is the boat from the cliff base?",
        options: ["107.2 m", "23.3 m", "55.2 m", "46.6 m"],
        correct: 0,
        explanation: "tan(25°) = 50/d. d = 50/tan(25°) = 50/0.4663 ≈ 107.2 m."
      },
      {
        question: "Which trig ratio would you use if you know the adjacent side and want the hypotenuse?",
        options: ["cos", "sin", "tan", "Any will work"],
        correct: 0,
        explanation: "cos(θ) = adj/hyp, so hyp = adj/cos(θ)."
      },
      {
        question: "A ramp rises 3 m over a horizontal distance of 12 m. What angle does it make?",
        options: ["14.0°", "75.5°", "14.5°", "76.0°"],
        correct: 0,
        explanation: "tan(θ) = 3/12 = 0.25. θ = tan⁻¹(0.25) ≈ 14.0°."
      }
    ],
    practiceProblems: [
      {
        question: "A footballer takes a shot 20 m from goal. The crossbar is 2.44 m high. What is the maximum angle of elevation for the ball to go under the bar?",
        answer: "≈ 7.0°",
        hint: "tan(θ) = 2.44/20. θ = tan⁻¹(0.122) ≈ 7.0°."
      },
      {
        question: "From the top of a lighthouse 45 m high, the angles of depression to two boats in a line are 30° and 45°. Find the distance between the boats.",
        answer: "≈ 32.9 m",
        hint: "Boat 1: d₁ = 45/tan(45°) = 45 m. Boat 2: d₂ = 45/tan(30°) = 77.9 m. Distance = 77.9 − 45 = 32.9 m."
      },
      {
        question: "A plane climbs at 15° to horizontal. After flying 2 km along its flight path, what altitude has it gained?",
        answer: "≈ 518 m",
        hint: "sin(15°) = altitude/2000. Altitude = 2000 × sin(15°) = 2000 × 0.2588 ≈ 518 m."
      }
    ]
  },

  // ============================================================
  // DAY 6: Probability
  // ============================================================
  {
    day: 6,
    title: "Probability",
    lesson: {
      content: `
        <h2>Probability</h2>
        <p>Probability measures how likely an event is. Year 10 extends basic probability to conditional probability, tree diagrams, and dependent events — essential for statistics and data science.</p>

        <h3>1. Review of Basics</h3>
        <pre>
  P(event) = favourable outcomes / total outcomes
  P(event) is always between 0 and 1
  P(not A) = 1 − P(A)
        </pre>

        <h3>2. Independent Events (AND rule)</h3>
        <p>Events are independent if one doesn't affect the other.</p>
        <pre>
  P(A and B) = P(A) × P(B)   [if independent]

  Example: Roll a die and flip a coin.
  P(6 and heads) = 1/6 × 1/2 = 1/12
        </pre>

        <h3>3. Dependent Events & Conditional Probability</h3>
        <p>When the first event changes the probabilities for the second.</p>
        <pre>
  A bag has 5 red and 3 blue marbles.
  Two marbles drawn WITHOUT replacement.
  P(both red)?

  P(1st red) = 5/8
  P(2nd red | 1st was red) = 4/7  (one red removed)

  P(both red) = 5/8 × 4/7 = 20/56 = 5/14
        </pre>

        <h4>Worked Example — "at least one"</h4>
        <pre>
  P(at least one blue) = 1 − P(no blue)

  P(no blue) = P(both red) = 5/14

  P(at least one blue) = 1 − 5/14 = 9/14
        </pre>

        <h3>4. Tree Diagrams</h3>
        <pre>
  A team has a 60% chance of winning any game.
  They play 2 games.

            Game 1        Game 2        Outcome    Probability
              W(0.6) ──── W(0.6)        WW         0.36
             /       └─── L(0.4)        WL         0.24
  Start ────
             \\       ┌─── W(0.6)        LW         0.24
              L(0.4) ──── L(0.4)        LL         0.16
                                                    ────
                                         Total:     1.00

  P(win at least one) = 1 − P(LL) = 1 − 0.16 = 0.84
        </pre>

        <h3>5. Two-Way Tables</h3>
        <pre>
                    | Pass | Fail | Total
  Studied          |  45  |   5  |  50
  Didn't study     |  20  |  30  |  50
  Total            |  65  |  35  | 100

  P(pass) = 65/100 = 0.65
  P(pass | studied) = 45/50 = 0.90
  P(studied | passed) = 45/65 ≈ 0.69
        </pre>

        <h3>⚠️ Common Mistakes</h3>
        <ul>
          <li>Assuming events are independent when they're not (drawing without replacement = dependent)</li>
          <li>Adding probabilities when you should multiply (AND = multiply, OR = add)</li>
          <li>Forgetting to reduce the total in 'without replacement' problems</li>
          <li>Confusing P(A|B) with P(B|A) — they're different!</li>
        </ul>
      `,
      keyPoints: [
        "Independent: P(A and B) = P(A) × P(B)",
        "Dependent: P(A and B) = P(A) × P(B|A)",
        "P(at least one) = 1 − P(none)",
        "Without replacement: total decreases after each draw",
        "Tree diagrams: multiply along branches, add between branches",
        "Two-way tables: conditional probability uses the row/column total, not grand total"
      ]
    },
    flashcards: [
      { front: "P(A and B) for independent events?", back: "P(A) × P(B)" },
      { front: "P(at least one) shortcut?", back: "1 − P(none)" },
      { front: "What makes events dependent?", back: "When one outcome changes the probability of the next (e.g. drawing without replacement)" },
      { front: "In a tree diagram, how do you find P of a path?", back: "Multiply all probabilities along the branches of that path" },
      { front: "P(A|B) means?", back: "Probability of A GIVEN that B has occurred" },
      { front: "With replacement vs without?", back: "With: probabilities stay the same. Without: total decreases, probabilities change." },
      { front: "Roll two dice. P(both sixes)?", back: "1/6 × 1/6 = 1/36 (independent events)" }
    ],
    quiz: [
      {
        question: "A bag has 4 red, 6 blue marbles. Two drawn without replacement. P(both blue)?",
        options: ["1/3", "6/15", "9/25", "2/5"],
        correct: 0,
        explanation: "P = 6/10 × 5/9 = 30/90 = 1/3."
      },
      {
        question: "A coin is flipped 3 times. P(at least one head)?",
        options: ["7/8", "3/8", "1/2", "1/8"],
        correct: 0,
        explanation: "P(no heads) = (1/2)³ = 1/8. P(at least one) = 1 − 1/8 = 7/8."
      },
      {
        question: "Events A and B are independent. P(A)=0.3, P(B)=0.5. What is P(A and B)?",
        options: ["0.15", "0.80", "0.35", "0.20"],
        correct: 0,
        explanation: "Independent: P(A and B) = 0.3 × 0.5 = 0.15."
      },
      {
        question: "From the table: 30 of 50 athletes play football, 10 of those 30 also play cricket. P(cricket | football)?",
        options: ["1/3", "1/5", "10/50", "30/50"],
        correct: 0,
        explanation: "P(cricket|football) = 10/30 = 1/3. Use the football total as denominator."
      },
      {
        question: "Team wins each game with P=0.7 (independent). P(win both of next 2 games)?",
        options: ["0.49", "0.70", "1.40", "0.35"],
        correct: 0,
        explanation: "P(WW) = 0.7 × 0.7 = 0.49."
      },
      {
        question: "P(A) = 0.4, P(not A) = ?",
        options: ["0.6", "0.4", "1.4", "0.16"],
        correct: 0,
        explanation: "P(not A) = 1 − P(A) = 1 − 0.4 = 0.6."
      }
    ],
    practiceProblems: [
      {
        question: "A deck of 52 cards. Two cards drawn without replacement. P(both aces)?",
        answer: "1/221",
        hint: "P = 4/52 × 3/51 = 12/2652 = 1/221."
      },
      {
        question: "In a penalty shootout, a player scores 80% of penalties. If they take 3 penalties, what is P(scoring all 3)?",
        answer: "0.512",
        hint: "Independent events: 0.8 × 0.8 × 0.8 = 0.512."
      },
      {
        question: "A weather forecast says 30% chance of rain each day (independent). Over 3 days, what is P(rain on at least one day)?",
        answer: "0.657",
        hint: "P(no rain all 3) = 0.7³ = 0.343. P(at least one) = 1 − 0.343 = 0.657."
      }
    ]
  },

  // ============================================================
  // DAY 7: Growth & Decay (Financial Maths)
  // ============================================================
  {
    day: 7,
    title: "Growth & Decay",
    lesson: {
      content: `
        <h2>Growth & Decay</h2>
        <p>Compound interest, depreciation, and exponential models are how the real world works — from your savings account to population growth to how fast a new car loses value.</p>

        <h3>1. Compound Interest (Review & Extension)</h3>
        <pre>
  A = P(1 + r)ⁿ

  P = principal, r = rate per period, n = number of periods

  Example: Invest $5,000 at 6% p.a. compounded annually for 5 years.
  A = 5000(1.06)⁵ = 5000 × 1.3382 = $6,691.13

  Interest earned = $6,691.13 − $5,000 = $1,691.13
        </pre>

        <h4>Compounding More Often</h4>
        <pre>
  If interest compounds monthly at 6% p.a.:
    Monthly rate = 6% ÷ 12 = 0.5% = 0.005
    Periods = 5 × 12 = 60

  A = 5000(1.005)⁶⁰ = 5000 × 1.3489 = $6,744.25

  More compounding = slightly more money!
        </pre>

        <h3>2. Depreciation (Reducing Balance)</h3>
        <p>Assets lose value over time. Same formula but SUBTRACT the rate.</p>
        <pre>
  A = P(1 − r)ⁿ

  Example: A car worth $35,000 depreciates at 15% per year.
  Value after 3 years?

  A = 35000(1 − 0.15)³
  A = 35000(0.85)³
  A = 35000 × 0.6141
  A = $21,494.38

  It lost $35,000 − $21,494 = $13,506 in value!
        </pre>

        <h4>Worked Example — finding time</h4>
        <pre>
  A computer worth $2,000 depreciates at 25% per year.
  When is it worth less than $500?

  500 = 2000(0.75)ⁿ
  0.25 = (0.75)ⁿ

  Try values:
  n=1: 0.75
  n=2: 0.5625
  n=3: 0.4219
  n=4: 0.3164
  n=5: 0.2373 ✓ (first time below 0.25)

  After 5 years it's worth less than $500.
        </pre>

        <h3>3. Exponential Growth Models</h3>
        <pre>
  Population model: P = P₀(1 + r)ⁿ

  Example: A city of 200,000 grows at 3% per year.
  Population after 10 years?

  P = 200,000(1.03)¹⁰
  P = 200,000 × 1.3439
  P ≈ 268,783 people
        </pre>

        <h3>4. Comparing Growth vs Decay</h3>
        <pre>
  Growth:  A = P(1 + r)ⁿ   multiplier > 1 (value increases)
  Decay:   A = P(1 − r)ⁿ   multiplier < 1 (value decreases)

  Quick way: what's the multiplier?
    +5% growth → ×1.05 each period
    −20% decay → ×0.80 each period
    +0.5% monthly → ×1.005 each month
        </pre>

        <h3>⚠️ Common Mistakes</h3>
        <ul>
          <li>Using simple interest formula (Prt) instead of compound (P(1+r)ⁿ)</li>
          <li>Forgetting to convert % to decimal and annual to monthly when compounding monthly</li>
          <li>Using (1+r) for depreciation instead of (1−r)</li>
          <li>Not matching the rate period to the compounding period</li>
        </ul>
      `,
      keyPoints: [
        "Growth: A = P(1+r)ⁿ — multiplier is (1+r) > 1",
        "Decay: A = P(1−r)ⁿ — multiplier is (1−r) < 1",
        "Monthly compounding: divide annual rate by 12, multiply years by 12",
        "More frequent compounding gives slightly more growth",
        "To find time: use trial and improvement or logarithms",
        "Always check: does the multiplier make sense? Growth > 1, decay < 1"
      ]
    },
    flashcards: [
      { front: "Compound interest formula?", back: "A = P(1 + r)ⁿ" },
      { front: "Depreciation formula?", back: "A = P(1 − r)ⁿ" },
      { front: "6% p.a. compounded monthly — what's the monthly rate?", back: "0.5% or 0.005 (divide annual rate by 12)" },
      { front: "A car depreciates 20% p.a. What's the multiplier?", back: "0.80 (it retains 80% of its value each year)" },
      { front: "$10,000 at 5% for 3 years compound. Total?", back: "10000(1.05)³ = $11,576.25" },
      { front: "What does 'compounding' mean?", back: "Interest is calculated on the principal PLUS previously earned interest" },
      { front: "Growth of 8% → multiplier?", back: "1.08" },
      { front: "Decay of 12% → multiplier?", back: "0.88" }
    ],
    quiz: [
      {
        question: "$8,000 invested at 4% p.a. compound interest for 3 years. Final amount?",
        options: ["$9,000.00", "$8,998.91", "$8,960.00", "$9,600.00"],
        correct: 1,
        explanation: "A = 8000(1.04)³ = 8000 × 1.124864 = $8,998.91."
      },
      {
        question: "A phone worth $1,200 depreciates 30% per year. Value after 2 years?",
        options: ["$588", "$720", "$840", "$504"],
        correct: 0,
        explanation: "A = 1200(0.70)² = 1200 × 0.49 = $588."
      },
      {
        question: "What is the annual multiplier for 5% monthly growth?",
        options: ["(1.05)¹²", "1.05", "1.60", "1.005¹²"],
        correct: 0,
        explanation: "5% per month means ×1.05 each month. Over 12 months: (1.05)¹²."
      },
      {
        question: "A population of 50,000 grows at 2% p.a. How many after 5 years?",
        options: ["55,204", "55,000", "52,040", "60,000"],
        correct: 0,
        explanation: "P = 50000(1.02)⁵ = 50000 × 1.10408 = 55,204."
      },
      {
        question: "$2,000 at 3% p.a. compounded monthly for 1 year. Which calculation is correct?",
        options: ["2000(1.0025)¹²", "2000(1.03)¹²", "2000(1.03)¹", "2000(1.0025)³"],
        correct: 0,
        explanation: "Monthly rate = 3%÷12 = 0.25% = 0.0025. Periods = 12 months."
      },
      {
        question: "An asset depreciates from $5,000 to $3,200 in 2 years. What's the annual depreciation rate?",
        options: ["20%", "18%", "36%", "25%"],
        correct: 0,
        explanation: "5000(1−r)² = 3200 → (1−r)² = 0.64 → 1−r = 0.8 → r = 0.2 = 20%."
      }
    ],
    practiceProblems: [
      {
        question: "You invest $12,000 at 5.5% p.a. compounded quarterly. What is it worth after 4 years?",
        answer: "$14,935.87",
        hint: "Quarterly rate = 5.5%÷4 = 1.375% = 0.01375. Periods = 4×4 = 16. A = 12000(1.01375)¹⁶."
      },
      {
        question: "A footballer's transfer value of £50 million depreciates by 12% each year after age 30. What is their value at age 34?",
        answer: "≈ £29.99 million",
        hint: "4 years of depreciation: 50(0.88)⁴ = 50 × 0.5997 ≈ 29.99."
      },
      {
        question: "A country's GDP grows at 4% p.a. from $500 billion. How many years until it doubles? (Use trial and improvement)",
        answer: "18 years",
        hint: "Need (1.04)ⁿ ≥ 2. Try: (1.04)¹⁷ = 1.948, (1.04)¹⁸ = 2.026. Doubles after 18 years."
      }
    ]
  }
];
