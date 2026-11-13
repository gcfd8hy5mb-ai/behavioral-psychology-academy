# Behavioral Intelligence Academy — Textbook Depth Register

Updated: 2026-11-13 (Batch 8, branch `curriculum/250k-textbook-depth-batch-8`)

## Curriculum contract
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
