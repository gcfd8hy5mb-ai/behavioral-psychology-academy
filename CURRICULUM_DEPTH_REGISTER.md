# Behavioral Intelligence Academy — Textbook Depth Register

Updated: 2026-11-13 (Batch 9 draft, branch `curriculum/250k-textbook-depth-batch-9`)

## Curriculum contract
- **Specialization:** narcissism, pathological narcissistic traits and NPD, their evidence-based psychological correlates, important alternative explanations, relationship dynamics and harms; all other subjects support this central focus rather than forming a general psychology curriculum.
- **Target: 250,000 words of substantive textbook prose** across the existing 36 chapters under the **eight approved main categories**.
- **Do not count case studies** toward the target. Keep cases available separately for illustration, but do not count separate case-study material, worked examples, fictional narratives, scenarios, or applied-example sections.
- Also exclude questions, quizzes, homework, assignments, bibliographies, citation labels, navigation text, and chapter/section headings.
- Preserve the approved UI, navigation, student progress keys, and iPhone Home Screen update behavior.
- New depth must add conceptual distinctions, explanatory mechanisms, research interpretation, competing models, limits of inference, and responsible ethical application. Never pad with repetition to increase the total.

## Batch 8 conservative baseline
| Metric | Words |
|---|---:|
| Original chapter introductions and qualifying expository sections | 43,132 |
| Qualifying expanded reading blocks | 12,683 |
| Qualifying editorial additions | 5,594 |
| **Total counted textbook prose** | **61,409** |
| **Remaining to 250,000** | **188,591** |
| Standalone case/example prose excluded by title-based classification | 13,259 |

Batch 8 added **7,451** non-case expository words to 12 existing chapters (42 new extended-reading sections). Previous raw reading counts included case and example content, so they should not be compared directly to this stricter metric.

This is a **conservative automated estimate**, not a certified publication word count. It excludes whole sections with titles containing case/example/scenario/fictional/worked/applied/comparative terms; some explanatory paragraphs with embedded examples remain counted. For publication-grade precision, a later editorial pass should explicitly mark case fragments within mixed sections and separate the prose into editorially tagged content fields.

## Reproduce the count
Run `node tools/count-textbook-words.mjs` from the repository root.


## Batch 9 — Chapters 13–24 (draft, not deployed)
- Added **24 substantive reading-only research sections** across all 12 existing chapters 13–24 (two sections per chapter).
- **2,831 additional expository words** in this batch, excluding headings and case-study prose; no new case studies, questions, homework, or assessments.
- **Provisional cumulative total: 64,240 textbook words**, assuming the Batch 8 baseline of 61,409 remains unchanged and all new headings are classified as expository by the counter. **Provisional remaining: 185,760**.
- Added Batch 9 array to `tools/count-textbook-words.mjs`. Run the actual Node counter in CI or a local checkout before treating this estimate as verified.
- Existing 36 chapter titles and the eight approved category structure remain unchanged. Insertion appends reading blocks to the existing per-title deep-dive renderer, without changing existing progress storage or cache handlers.
- Research copy includes qualifiers on diagnostic interpretation, correlation vs causation, measurement differences, and trauma-treatment limits. Independent reference-by-reference review and physical iPhone/Home Screen testing are **not yet verified**.

## Narcissism specialization expansion — 2026-11-13 (draft)
- Added **16 topic-specific expository sections** distributed across eight existing chapter/category endpoints, covering narcissism research and theory, NPD distinctions, grandiose/vulnerable traits, empathy, shame, exploitation, rivalry, self-serving attributions, group/status dynamics, and psychology of harm and recovery.
- Added **2,349 further expository words** (new sections contain no separate case studies); provisional cumulative count **66,589** (61,409 Batch 8 baseline + 2,831 Batch 9 + 2,349 specialization). Provisional target remaining: **183,411**. This arithmetic is **not** a substitute for executing the word-count script against the current branch.
- All eight main categories retained. No newly added exercises, tests, or case stories. The 80-subject roadmap was refocused around evidence-based narcissism specialization, with cross-category mechanisms carefully distinguished from NPD-specific evidence.
- Next verification: execute counter and syntax checks, audit existing citations, ensure no duplication, verify iPhone Home Screen behavior and unchanged progress storage. No production merge/deploy or independent scientific sign-off.

## Open-textbook-informed original synthesis — 2026-11-13 (draft)
- Added eight new reading-only, entirely original explanatory sections across seven existing chapters on narcissistic traits, developmental hypotheses, grandiosity/vulnerability, attachment, empathy, defensive self-image, coercion and treatment research.
- **872 new expository words** excluding headings and cases. **Provisional accumulated total 67,461 / 250,000; provisional remaining 182,539**. Not a verified full counter run.
- Added `FREE_TEXTBOOK_SOURCE_REGISTER.md` with OpenStax, Noba, StatPearls and Portland State external reading links and reuse cautions. Do not copy source text: the current OpenStax online preface describes noncommercial/share-alike terms and an AI-ingestion restriction, while some PDF versions contain different license statements. Resolve the exact rights before any source adaptation.
- Extended `tools/count-textbook-words.mjs` to include `openTextbookSynthesisBatch12`.
- Pending: full counter execution, source-to-claim review, physical-device and progress-preservation acceptance, and academic expert review.

## Completion gates
1. Expand short and under-researched chapter sections with substantive material; do not add learning activities.
2. Independently verify bibliographic links, source claims, population/sample descriptions, effect-size interpretations, and dates.
3. Audit all eight category mappings and every chapter's coverage, avoiding repeated passages.
4. Verify browser rendering and navigation, mobile Safari/Home Screen cache updates, and existing student progress preservation.
5. Report **academically complete** only after an editorial/source audit; do not assert an independent clinical/academic professional sign-off absent one.

## Current status
- All 36 preexisting chapters retained; Batch 8 expands chapters 1–12.
- Main source syntax checks passed after editing.
- No independent academic sign-off; physical device acceptance remains outstanding.
