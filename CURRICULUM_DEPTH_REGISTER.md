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

## Narcissism Research Batch 13 — 2026-11-13 (draft)
- Added **15 original research-focused sections across 12 existing chapters**, covering diagnostic models, developmental uncertainty, narcissistic admiration and rivalry, entitlement, differential diagnosis, empathy, attachment, coercive control, contempt, accountability, group power, cognitive inference, NPD treatment, and harm recovery.
- **2,039 words** of new substantive exposition excluding titles and case studies. Current total **69,500 / 250,000**; remaining **180,500**, independently recomputed using the same parsing, inclusion, and title-based exclusions as the repository's Node counter. Direct execution of the Node command and physical-device testing are still outstanding.
- Verified the new JSON data against the existing 36-chapter lesson array and passed syntax checks on both inline scripts before committing.
- Added the new array to `tools/count-textbook-words.mjs`. Do not count case studies or independent reference material toward the target.
- Sources supporting specific research context include Back et al. (2013), PMID 24128186 (narcissistic admiration and rivalry); Crego & Widiger's Noba *Personality Disorders* module; Mitra, Torrico & Fluyau's StatPearls NPD clinical reference (updated 2024); and Widiger & Smith (2025) on dimensional classification. Source-to-claim editorial audit and on-device testing are still pending.

## Textbook-guided Narcissism Batch 14 — 2026-11-13 (draft)
- Added **9 original extended textbook sections** across 9 existing chapters, addressing narcissism classification, dimensional trait theory, admiration and rivalry, coercion, contempt, accountability, social status, empathy, cognitive bias and psychological recovery.
- **1,848 qualifying expository words**, no case studies, homework or assessments. Interim subtotal **71,348 / 250,000**, before companion Batch 14B; see combined verified result below.
- Source guidance verified against OpenStax *Psychology 2e* (current online license has AI-ingestion prohibition and CC BY-NC-SA terms), Crego and Widiger's Noba personality-disorder overview, Back et al. 2013 on admiration/rivalry, and peer-reviewed relationship research. Original synthesized prose only; do not import textbook passages into generative tools or republish without permission.
- Both inline scripts passed syntax checks before commit. Physical iPhone, regression and independent reference-to-claim validation remain pending. No merge or deploy.

## Combined large textbook Batch 14 + 14B — 2026-11-13 (draft)
- Added **18 original expository reading sections across the established chapter structure**, totaling **3,877 new qualifying words** (Batch 14: 1,848; Batch 14B: 2,029). No new case studies, quizzes or assignments.
- Existing main navigation continues to have **eight approved categories**; 36 lesson/chapter records retained.
- Conservative total independently recomputed from all curriculum arrays using the repository counter's exact title-based classification: **73,377 / 250,000**, **176,623 remaining**. Standalone case/example prose excluded: **13,259 words**. Mixed-section narrative may require a finer editorial exclusion pass.
- Both inline JavaScript blocks passed V8 syntax checks after both expansions; no physical mobile/PWA test performed. Direct running of `node tools/count-textbook-words.mjs` remains outstanding, although equivalent counting logic was executed.
- Source-guided original writing references OpenStax *Psychology 2e*, Noba *Personality Disorders*, Back et al. (2013) on narcissistic admiration/rivalry and clinical review scholarship. No textbook passages were imported. Reference-to-claim verification is not yet exhaustive.
- Keep draft; do not merge or deploy pending independent content audit, runtime regression and on-device review.

## Batch 15 — extended narcissism theory and research (2026-11-13, draft)
- Added **24 original research-led expository sections** in eight chapters spanning the approved eight main categories: clinical/personality models, coercion, hostile conduct, accountability, social power, emotions/attachment, reasoning/defenses, and psychological harm/recovery.
- **3,825 new qualifying textbook words**, excluding all standalone case-study material. Full conservative prose total **77,202 / 250,000**; **172,798 words remaining**. Recomputed by parsing all live curriculum arrays using the repository's title-based case-exclusion rule. Standalone excluded case/example material: **13,259 words**. Mixed illustrative sentences may still need more precise editorial labeling.
- Both inline script blocks passed syntax checks, all 36 existing chapter titles were preserved, and the localStorage/progress and pageshow update hooks remain present. Direct Node invocation, in-browser runtime regression, and physical iPhone testing remain pending.
- Content is original synthesis informed by free university-level reading and scholarly research; copyrighted textbook chapters were not inserted. A thorough claim-by-claim source audit remains outstanding.
- This branch remains a draft. No merge or deployment, no external academic sign-off.

## Batch 16 — original textbook-guided narcissism expansion (2026-11-13, draft)
- Added **17 substantive reading sections across 12 existing chapters**, increasing depth in clinical classification, narcissistic development, admiration/rivalry, empathy, adult attachment, conflict, coercive influence, contempt, clinical change, leadership, cognition, and recovery.
- **3,498 new qualifying textbook words** (excluding headings and case stories). Conservative cumulative total **80,700 / 250,000**, with **169,300 remaining**. Recomputed by executing equivalent JavaScript counting logic on all curriculum arrays and the register's title-based case exclusion rule; the standalone `node tools/count-textbook-words.mjs` CLI is not yet separately executed.
- **13,259 standalone case/example words** excluded in the same calculation; mixed-section examples still require editorial separation before claiming publication-grade precision.
- Both inline scripts passed JavaScript syntax tests, all **36 existing chapter titles** retained, no new quizzes or activities. Storage/cache behavior was not modified; complete runtime and mobile persistence regression remain pending.
- Scholarly context: Back et al. 2013 on admiration/rivalry (PMID 24128186), Crego & Widiger's 2026 Noba personality disorders module, and Emmelkamp & Meyerbröker 2025 psychotherapy review (PMID 39239878). This is independently drafted synthesis, **not** textbook chapter copying. Scientific claim-to-source verification is not exhaustive, and no external academic sign-off has occurred.
- Preserve draft PR #15; no merge or deploy.

## Batch 17 — evidence-led narcissism specialization (2026-11-13, draft)
- Added **18 substantial, original textbook reading sections** in nine existing chapters spanning all eight approved main-category themes. Topics cover clinical diagnosis and base rates, developmental evidence, narcissistic traits and heterogeneity, manipulation and coercion, hostility and contempt, accountability, leadership and power, shame and empathy, confirmation bias, and treatment/recovery.
- **3,592 new qualifying expository words**, with no case studies or learning activities in the added material.
- Cumulative conservative counting result: **84,292 / 250,000** qualifying words; **165,708 remaining**. The separate category of standalone cases/examples contributes **13,259 excluded words**. Recomputed from the repository arrays and title-based exclusion logic; direct CLI invocation and finer-grained treatment of mixed narrative paragraphs remain outstanding.
- New JSON arrays map to existing chapter titles. Both inline JavaScript scripts pass syntax checks. All 36 chapter titles persist and no progress/cache logic was edited. Full runtime navigation, saving, mobile Safari and PWA acceptance are not verified.
- Source-derived claims still require exhaustive scholarly claim-to-citation review and independent sign-off. This is original prose based on research themes, not copied textbook chapters.
- Draft PR #15 remains unmerged and undeployed.

## Batches 18–20 — college-textbook-informed narcissism expansion (2026-11-13, draft)

- **Batch 18:** 18 new expository reading sections across nine existing chapters; **3,184 words**. Scope: personality assessment, theoretical traditions, grandiosity/vulnerability, autonomy and coercion, hostile communication, accountability, power, empathy, cognitive inference, and treatment/recovery.
- **Batch 19:** 18 new expository reading sections across nine chapters; **2,627 words**. Scope: longitudinal study design, clinical differential diagnosis, self-regulation, coercion and information control, relationship dynamics, status, emotional invalidation, research bias, PTSD/CPTSD distinctions and treatment outcomes.
- **Batch 20:** 18 new expository reading sections across nine chapters; **2,467 words**. Scope: categorical versus dimensional NPD models, diagnostic stigma, developmental change, interpersonal tactics versus mental disorder, workplace harm, moral disengagement, reputation, emotion regulation, metacognition and treatment/recovery boundaries.
- **Total for Batches 18–20: 54 original research-led sections, 8,278 qualifying words.** No textbook passages were copied; reference sources inform independently written synthesis.
- Full conservative count recomputed by parsing all curriculum arrays using the repository's title-based classification: **92,570 / 250,000 (37.0%)**, **157,430 remaining**. Standalone case/example prose excluded: **13,259 words**. This is a *textbook-word counting checkpoint*, not an academic certification. Narrative/example content inside mixed sections still needs granular audit. The standalone Node CLI has not yet been directly run; equivalent JS logic was executed.
- All **36 chapter records** and eight approved navigation category structure remain in place. The new data arrays map to valid existing chapter titles and both inline JavaScript scripts pass syntax checks. Existing progress-storage and cache-refresh hooks remain present; actual persistence, UI rendering, and PWA behavior remain unverified on physical devices.
- Free-reference policy remains conservative: link to OpenStax *Psychology 2e*, Noba personality-disorders material, NCBI/StatPearls, and primary research. Online reading availability does not grant permission to copy content or ingest restricted editions. Independently verify every scientific claim, citation, edition, publication date and license before publication.
- Future true-textbook-depth requirements: much longer coherent chapter treatments, explicit primary-study summaries with methods and results, systematic evidence tables, reference-to-paragraph mapping, treatment of contrary research, elimination of conceptual repetition, and detailed faculty-style editorial audit. Independent clinical/academic review remains outstanding.
- **No merge or deployment.** Draft PR #15 is the staging area.

## Retroactive university-textbook depth pass — 2026-11-13 (draft)

- User-directed standard now applies to **all 36 previously written chapters**, not just future batches. Created `TEXTBOOK_DEPTH_AUDIT_36_CHAPTERS.md` with chapter-by-chapter counted exposition, excluded case words, existing reference counts, editorial priorities, chapter floor gaps and explicit research/clinical/technical completion gates.
- Added `retroTextbookDepthBatch21`: **16 new research-led reading sections across eight of the shortest existing chapters**, **2,530 qualifying words**.
- Added `retroTextbookDepthBatch21B`: **28 distinct chapter-specific analytical reading sections, one for each remaining chapter**, **2,912 qualifying words**.
- Combined retroactive work: **44 new expository sections across all 36 chapters**, **5,442 new words**, with no new case studies, homework or assessments.
- Updated the existing chapter reader's extended-reading label to emphasize research, theory and critical interpretation; retained UI structure, chapter identifiers, saved progress and cache mechanisms without modifying their code.
- Current conservative checkpoint: **98,012 / 250,000 qualifying textbook words**, **151,988 remaining**, **13,259 standalone case/example words excluded**. Equivalent JavaScript counter logic recomputed these values; direct Node CLI run pending. The title-based heuristic may still count narrative sentences embedded in mixed sections.
- **Critical limitation:** this is an initial pass across all chapters, **not** completion of an integrated 7,000-word rewrite for each chapter. All 36 are still below the provisional 7,000-word planning floor and require substantive new scholarship, verified primary-study summaries, de-duplication, transitions and independent quality review. The goal is not mere inflation of word count.
- Both inline JavaScript blocks passed syntax checks after edits; no full browser/mobile regression or physical device test. No independent academic or clinical sign-off. Draft PR remains unmerged and undeployed.

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
