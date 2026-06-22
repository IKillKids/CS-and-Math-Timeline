# Complete Math Roadmap
Canadian Curriculum + ML/CS Math — Aligned to Your Coding Timeline

## Big Picture Alignment

| Period | Coding Phase | Math Priority |
|---|---|---|
| Summer before Gr. 11 | Phases 0–1 (DSA, Fundamentals) | MCR3U (Functions) + Linear Algebra start |
| Gr. 11 school year | Phases 0–2 (DSA, Backend) | MCR3U in school + Stats/Probability evenings |
| Summer before Gr. 12 | Phases 2–4 (Backend, DevOps, System Design) | MHF4U (Advanced Functions) + finish Linear Algebra + Calculus entry |
| Gr. 12 school year | Phases 5–6 (System Design, Classical ML) | MHF4U + MCV4U in school + ML math consolidation evenings |
| Summer after Gr. 12 | Phases 7–8 (Deep Learning, Applied AI) | Full ML math: Calculus, Probability, Information Theory, CS Math |

**Rule:** Never let math block coding. Learn math just-in-time as your coding phases demand it. School carries the curriculum — use your own time for the CS-specific slices school won't teach.

## How-to-Learn Shorthand

| Label | What it means |
|---|---|
| Do-first | Attempt cold before reading or watching. Struggle is the point. |
| Watch → code same day | Watch 3B1B/StatQuest, then implement the concept in Python before the day ends. |
| Read → implement | Read one section, close it, implement the core idea from scratch. Never read two sections back-to-back without coding. |
| Timed reps | Do it under real time pressure with no hints open. Review only after a genuine attempt. |
| Simulate, don't just calculate | Every stats/probability concept gets verified with a Python simulation the same day. `numpy.random` is your proof-checker. |
| Spaced re-solve | Re-derive or re-implement the same concept cold ~1 week later without notes. |

---

## ☀️ Summer Before Grade 11
~70 days · 1 hr/day math + your coding hours

Coding focus: finishing CS50P, starting C++, building the DSA habit. Math focus: MCR3U front-loaded so school feels like review, plus linear algebra now (no calculus needed).

### Block 1 — MCR3U: Functions (Days 1–30)
1 hr/day. Finish before school starts so Gr. 11 math is revision, not new learning.

| Days | Topic | Resource | Why It Matters for CS |
|---|---|---|---|
| 1–3 | Functions, domain/range, notation | Khan Academy — Functions | Function composition mirrors programming functions |
| 4–6 | Transformations (shift, reflect, stretch) | Khan Academy — Transformations | Activation function intuition later |
| 7–8 | Inverse functions | Khan Academy — Inverse Functions | Critical for bijections in crypto/hashing |
| 9–11 | Quadratics: vertex form, completing the square | Khan Academy — Quadratics | Optimization intuition |
| 12–13 | Quadratic formula, discriminant | Khan Academy — Quadratics | |
| 14–15 | Polynomial behaviour, factor/remainder theorem | Khan Academy — Polynomials | |
| 16–17 | Rational functions, asymptotes | Khan Academy — Rational Functions | |
| 18–21 | Exponential functions — growth/decay, transformations | Khan Academy — Exponential Functions | Direct prerequisite for learning rate schedules, sigmoid |
| 22–23 | Solving exponential equations | Khan Academy — Exponential Equations | |
| 24–26 | Trig — unit circle, radians, CAST rule | Khan Academy — Trigonometry | Fourier transforms later; positional encoding in transformers |
| 27–28 | Graphing sin/cos/tan, transformations | Khan Academy — Trig Graphs | |
| 29–30 | Sine law, cosine law | Khan Academy — Trigonometry | |

### Block 2 — Sequences & Series (Days 31–40)

| Days | Topic | Resource | Why It Matters for CS |
|---|---|---|---|
| 31–33 | Arithmetic sequences & series | Khan Academy — Sequences | Algorithm complexity intuition |
| 34–36 | Geometric sequences & series | Khan Academy — Geometric Sequences | Infinite series, gradient descent convergence |
| 37–38 | Infinite geometric series | Khan Academy — Series | Neural net weight decay intuition |
| 39–40 | Pascal's triangle, intro to combinatorics | Khan Academy — Combinatorics | Probability foundation |

### Block 3 — Linear Algebra Start (Days 41–65)
This is Phase 5 of your coding roadmap pulled forward. No calculus needed.

| Days | Topic | Resource | How to Learn |
|---|---|---|---|
| 41–43 | Vectors — addition, scalar mult., dot product | 3Blue1Brown "Essence of Linear Algebra" Ep. 1–2 | Watch → implement in NumPy same day |
| 44–46 | Linear transformations, matrix multiplication | 3B1B Ep. 3–4 | Watch → build matrix multiply by hand, verify with `np.dot` |
| 47–49 | Determinants | 3B1B Ep. 5–7 | Watch → implement |
| 50–52 | Systems of equations, Gaussian elimination | Khan Academy Linear Algebra | Read → solve a 3×3 system in pure Python |
| 53–55 | Matrix inverse, rank, null space | 3B1B + Khan Academy | Watch/read → implement |
| 56–58 | Eigenvectors & eigenvalues | 3B1B Ep. 14 | Watch → find eigenvalues of a 2×2 by hand, verify with `np.linalg.eig` |
| 59–61 | PCA intuition (eigenvectors applied) | StatQuest "PCA" video | Watch → PCA on a toy 2D dataset in NumPy |
| 62–64 | Matrix norms, orthogonality, projections | Khan Academy | Read → implement |
| 65 | Review & consolidation | — | Build a mini linear algebra library in Python from scratch |

### Block 4 — Review & Buffer (Days 66–70)
Catch-up days. Re-solve anything shaky. No new material.

---

## 📚 Grade 11 School Year
~10 months · ~30–45 min/day on math outside school

School handles MCR3U. Evening time goes to probability & statistics — the other half of Phase 5 that school won't cover adequately.

### School — MCR3U (JensenMath)
Follow your teacher's pace. Use [jensenmath.ca](https://jensenmath.ca) for video support on every unit — it covers the course exactly.

| Unit | Topic | Resource | What's Covered |
|---|---|---|---|
| Unit 1 | Functions | jensenmath.ca → Grade 11 → Unit 1 | Domain & range, function notation, max/min quadratics, radicals, solving quadratics |
| Unit 2 | Rational Expressions | jensenmath.ca → Grade 11 → Unit 2 | Exponent laws, rational exponents, multiply/divide/add/subtract, solving quadratics |
| Unit 3 | Transformations | jensenmath.ca → Grade 11 → Unit 3 | Intro to transformations, transform x², root x, 1/x, inverse functions |
| Unit 4 | Exponential Functions | jensenmath.ca → Grade 11 → Unit 4 | Exponential growth/decay, interest, graphing, transformations |
| Unit 5 | Trig Geometry | jensenmath.ca → Grade 11 → Unit 5 | Special angles, ratios >90°, solving trig equations, reciprocal ratios, ambiguous case of sine, trig identities |
| Unit 6 | Trig Functions | jensenmath.ca → Grade 11 → Unit 6 | Graphing sine and cosine, transformations, trig applications |
| Unit 7 | Discrete Functions | jensenmath.ca → Grade 11 → Unit 7 | Sequences, series, recursive functions, Pascal's triangle |
| Exam | Full Course Review | jensenmath.ca → Grade 11 → Full Course Review | Use the full review section before your exam |

You already front-loaded all of this in the summer. School is consolidation and exam accuracy, not new learning.

### Evenings — Probability & Statistics
~3 sessions/week, 30–45 min. Roughly October → March.

By the time you hit Phase 6 (Classical ML) in coding, you'll already understand why cross-entropy is the loss function and what MLE is actually doing.

| Week | Topic | Resource | How to Learn |
|---|---|---|---|
| 1–2 | Counting: permutations, combinations | Khan Academy Stats | Timed reps on exercises |
| 3–4 | Basic probability: sample spaces, events, complement rule | StatQuest + Khan Academy | Watch → simulate in Python (flip coins, roll dice) |
| 5–6 | Conditional probability, independence | StatQuest | Watch → verify with Python simulations |
| 7–8 | Bayes' theorem | StatQuest "Bayes' theorem" | Watch → write a Naive Bayes classifier from scratch |
| 9–10 | Discrete distributions: Bernoulli, Binomial, Poisson | StatQuest | Watch → simulate each distribution in NumPy |
| 11–12 | Continuous distributions: Uniform, Normal (Gaussian) | StatQuest | Watch → sample, plot histograms, compute z-scores |
| 13–14 | Expectation, variance, standard deviation | Khan Academy | Read → implement by hand on small datasets |
| 15–16 | Central Limit Theorem | StatQuest | Watch → simulate: show CLT empirically in Python |
| 17–18 | Covariance, correlation | StatQuest | Watch → correlation matrix in NumPy |
| 19–20 | Maximum Likelihood Estimation (MLE) | StatQuest | Watch → MLE for a Gaussian by hand |
| 21–22 | Hypothesis testing, p-values (conceptual) | StatQuest | Watch → implement a t-test manually |
| 23–24 | Information theory basics: entropy, cross-entropy, KL divergence | Colah's blog | Read → compute cross-entropy loss manually |

---

## ☀️ Summer Before Grade 12
~70 days · 1 hr/day

Coding focus: wrapping up Backend (Phase 2), DevOps (Phase 4), System Design (Phase 3). Math focus: MHF4U preview + calculus entry point.

### Block 1 — MHF4U: Advanced Functions Preview (Days 1–25)
Front-load so Gr. 12 school math is easy.

| Days | Topic | Resource |
|---|---|---|
| 1–3 | Polynomial functions — graphs, end behaviour, multiplicity of roots | Khan Academy — Polynomials |
| 4–6 | Dividing polynomials, factor theorem review | Khan Academy — Polynomials |
| 7–9 | Rational functions — intercepts, asymptotes (vertical, horizontal, oblique) | Khan Academy — Rational Functions |
| 10–12 | Logarithms — definition, laws, change of base | Khan Academy — Logarithms |
| 13–15 | Solving log equations, graphing log functions | Khan Academy — Logarithms |
| 16–18 | Exponential & log relationship (inverses) | Khan Academy |
| 19–21 | Trig identities — Pythagorean, sum/difference formulas | Khan Academy — Trig Identities |
| 22–24 | Solving trig equations, general solutions | Khan Academy — Trig Equations |
| 25 | Review | — |

### Block 2 — Calculus Entry Point (Days 26–55)
MCV4U preview. The chain rule IS backpropagation — go slow, master it.

| Days | Topic | Resource | Why It Matters for CS |
|---|---|---|---|
| 26–28 | Limits — intuition, limit laws | Khan Academy — Limits | Foundation for derivatives |
| 29–32 | Derivatives from first principles | Khan Academy — Derivatives | Understanding what a gradient is |
| 33–35 | Differentiation rules: power, product, quotient | Khan Academy — Differentiation Rules | |
| 36–39 | **Chain rule** | Khan Academy — Chain Rule | **This IS backpropagation. Go slow. Master it.** |
| 40–42 | Derivatives of exponentials & logs (eˣ, ln x) | Khan Academy | Softmax, log-loss derivatives |
| 43–45 | Derivatives of trig functions | Khan Academy | |
| 46–48 | Partial derivatives — intro | Khan Academy — Multivariable | Direct prerequisite for gradient descent in ML |
| 49–51 | Gradients & gradient vectors | Khan Academy — Multivariable | The math behind every optimizer (SGD, Adam) |
| 52–54 | Optimization — critical points, 2nd derivative test | Khan Academy — Optimization | Loss minimization intuition |
| 55 | Review | — | |

### Block 3 — Linear Algebra Completion + Multivariable (Days 56–70)

| Days | Topic | Resource | Why It Matters for CS |
|---|---|---|---|
| 56–58 | Jacobian matrix intuition | MML Book Ch. 5 | Backprop through layers |
| 59–61 | Gradient descent implemented in NumPy | — | Linear regression with gradient descent from scratch — no sklearn |
| 62–64 | SVD intuition (Singular Value Decomposition) | StatQuest "SVD" | Used in recommendation systems, compression |
| 65–67 | Vector calculus: gradient, divergence (light) | MML Book | Needed for understanding loss landscape |
| 68–70 | Backpropagation from scratch — derive it mathematically | Karpathy "Micrograd" | Implement a 2-layer net backward pass in pure NumPy |

---

## 📚 Grade 12 School Year
~10 months

School handles MHF4U (Advanced Functions) and MCV4U (Calculus & Vectors). Evening time goes to solidifying ML math and beginning deeper CS math.

### School — MHF4U Advanced Functions (JensenMath)
You've already previewed this entire course. School is consolidation and exam accuracy.

| Unit | Topic | Resource | What's Covered |
|---|---|---|---|
| Unit 1 | Polynomial Functions | jensenmath.ca → Grade 12 → MHF4U → Unit 1 | Graphs, end behaviour, multiplicity — fully previewed |
| Unit 2 | Rational Functions | jensenmath.ca → Grade 12 → MHF4U → Unit 2 | All asymptote types — fully previewed |
| Unit 3 | Exponential & Logarithmic Functions | jensenmath.ca → Grade 12 → MHF4U → Unit 3 | Fully previewed — focus on exam accuracy |
| Unit 4 | Trigonometric Functions & Identities | jensenmath.ca → Grade 12 → MHF4U → Unit 4 | Identities, equations, general solutions — fully previewed |
| Unit 5 | Rates of Change | jensenmath.ca → Grade 12 → MHF4U → Unit 5 | Bridge to MCV4U — limits and intro derivative concepts |
| Exam | Full Course Review | jensenmath.ca → Grade 12 → MHF4U → Full Course Review | |

### School — MCV4U Calculus & Vectors (JensenMath)
You've previewed derivatives and the chain rule. School fills in the full picture.

| Unit | Topic | Resource | What's Covered |
|---|---|---|---|
| Unit 1 | Derivative Rules | jensenmath.ca → Grade 12 → MCV4U → Unit 1 | Power, product, quotient, chain rule, applications — previewed, now precision-drill for exams |
| Unit 2 | Curve Sketching | jensenmath.ca → Grade 12 → MCV4U → Unit 2 | Increasing/decreasing, concavity, 1st & 2nd derivative tests, optimization |
| Unit 3 | Derivative of Trig & Exponentials | jensenmath.ca → Grade 12 → MCV4U → Unit 3 | Implicit differentiation, applications — eˣ and ln x derivatives connect to ML loss functions |
| Unit 4 | Geometric Vectors | jensenmath.ca → Grade 12 → MCV4U → Unit 4 | Vector addition, scalar multiplication, force/velocity/tension — physical intuition for ML vectors |
| Unit 5 | Algebraic Vectors | jensenmath.ca → Grade 12 → MCV4U → Unit 5 | Dot product, cross product, vectors in 3-space — connects directly to your linear algebra work |
| Unit 6 | Lines & Planes | jensenmath.ca → Grade 12 → MCV4U → Unit 6 | Vector and scalar equations, intersecting lines and planes in 3-space |
| Exam | Full Course Review | jensenmath.ca → Grade 12 → MCV4U → Full Course Review | |

### Evenings — ML Math Consolidation
~3 sessions/week, 30–45 min. Mathematics for Machine Learning (free at [mml-book.github.io](https://mml-book.github.io)) is your capstone text. Read it now that school has given you the calculus foundation.

| Period | Topic | Resource |
|---|---|---|
| Sept–Oct | Multivariate calculus — chain rule in matrix form, Jacobians | MML Book Ch. 5 |
| Nov–Dec | Optimization theory — convexity, saddle points, Adam/momentum math | MML Book Ch. 7 |
| Jan–Feb | Linear algebra deep dive — SVD, matrix factorization, spectral methods | MML Book Ch. 2–4 |
| Mar–Apr | Probability theory formal — measure theory lite, conjugate priors, distributions in depth | MML Book Ch. 6 |
| May–Jun | Information theory — entropy, mutual information, KL divergence applications | Elements of Information Theory Ch. 1–2 |

---

## ☀️ Summer After Grade 12
~70 days — aligns with Phases 7–8: Deep Learning + Applied AI

This is where the math pays off: implementing backprop, attention mechanisms, and loss functions for real.

### Block 1 — Deep Learning Math (Days 1–30)

| Days | Topic | Resource | Coding Tie-in |
|---|---|---|---|
| 1–5 | Backprop derivation — scalar → vector → matrix form | Karpathy "Micrograd" + MML Ch. 5 | Phase 7: implement in pure NumPy |
| 6–10 | Loss functions derived — MSE, cross-entropy, KL divergence | MML Book | Why these functions, not others |
| 11–15 | Activation functions — sigmoid, tanh, ReLU, derivatives | MML Book + d2l.ai | Vanishing gradient problem — understand it mathematically |
| 16–20 | Attention mechanism math — scaled dot-product, softmax derivation | 3B1B "Attention" + d2l.ai | Phase 7: implement attention from scratch in PyTorch |
| 21–25 | Convolutional math — cross-correlation, filter math | d2l.ai CNN chapter | CNN intuition |
| 26–30 | Regularization math — L1/L2 as priors (Bayesian view), dropout | MML Book Ch. 8 | Why regularization works, not just how |

### Block 2 — Advanced CS Math (Days 31–55)

| Days | Topic | Resource | Why It Matters |
|---|---|---|---|
| 31–35 | Combinatorics & counting — generating functions, recurrences | Competitive Programmer's Handbook | DSA: DP state counting, CCC problems |
| 36–40 | Graph theory — trees, cycles, planarity, graph representations | USACO Guide Gold + CP Handbook | DSA: Phase 0 Gold topics |
| 41–45 | Discrete math — logic, sets, relations, proofs | CP Handbook | CS fundamentals, algorithm correctness |
| 46–50 | Number theory — modular arithmetic, Fermat's little theorem, RSA | CP Handbook — number theory chapters | Cryptography in backend/security |
| 51–55 | Big-O formal — asymptotic notation proofs, recurrence relations (Master theorem) | CP Handbook + CLRS reference | Analyzing your own algorithms rigorously |

### Block 3 — Bayesian & Statistical Learning Theory (Days 56–70)

| Days | Topic | Resource | Coding Tie-in |
|---|---|---|---|
| 56–59 | Bayesian ML — Bayesian linear regression, MAP estimation | MML Book Ch. 9 | Probabilistic models in Phase 8 |
| 60–63 | Statistical learning theory — bias-variance tradeoff formally, VC dimension (intro) | MML Book + ESL reference | Understanding why your models generalize |
| 64–67 | Embedding math — vector spaces, cosine similarity derivation, why dot product works | MML Book + Phase 4 embedding work | Grounding your RAG and embedding work in math |
| 68–70 | Review + fill gaps from Phase 7–8 coding work | — | Identify what actual coding exposed as weak — patch those |

---

## Complete Curriculum Checklist

### Ontario School Curriculum (all covered)
- [ ] MPM1D/2D (Gr. 9–10) — assumed done
- [ ] MCR3U (Gr. 11 Functions) — Summer before Gr. 11 + school year
- [ ] MHF4U (Gr. 12 Advanced Functions) — Summer before Gr. 12 + school year
- [ ] MCV4U (Gr. 12 Calculus & Vectors) — Summer before Gr. 12 + school year
- [ ] MDM4U (Data Management — optional) — covered by stats self-study, better than the course

### ML/CS Math (all covered)
- [ ] Linear Algebra — Summer Gr. 11, finished Gr. 12 evenings
- [ ] Probability & Statistics — Gr. 11 evenings
- [ ] Calculus (derivatives, chain rule, partial derivatives) — Summer Gr. 12
- [ ] Multivariable Calculus / Gradient Descent math — Summer Gr. 12
- [ ] Information Theory — Gr. 12 evenings
- [ ] Backprop math — Summer after Gr. 12
- [ ] Attention math — Summer after Gr. 12
- [ ] Discrete Math / Combinatorics — Summer after Gr. 12
- [ ] Graph Theory — Summer after Gr. 12
- [ ] Number Theory — Summer after Gr. 12

---

## Golden Rules

**1. School carries the curriculum.** Never spend self-study time re-doing what school covers adequately. Use your hours for the CS math school skips.

**2. Linear algebra before calculus.** You can start linear algebra now — no calculus needed. It pays off in Phase 6 before you even touch derivatives.

**3. Simulate, don't just calculate.** Every stats and probability concept should be verified with a Python simulation the same day. `numpy.random` is your proof-checker.

**4. The chain rule is backprop.** Spend more time here than anything else in calculus. Master it symbolically, then implement it in code.

**5. MML book is your capstone math text.** Mathematics for Machine Learning (free at [mml-book.github.io](https://mml-book.github.io)) ties all of this together. Read it in Gr. 12 once school has given you the calculus foundation.
