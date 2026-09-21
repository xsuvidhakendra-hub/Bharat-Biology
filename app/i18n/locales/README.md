# Language scaffold

**Populated now**: `en` (English), `hi` (Hindi) — see `../index.ts`.

**Structurally ready, not yet populated** (per `BIO-20260921-0900`, `ts`'s decision — a
priority for the next phase, not an afterthought): Assamese (`as`), Bengali (`bn`), Gujarati
(`gu`), Kannada (`kn`), Kashmiri (`ks`), Konkani (`kok`), Malayalam (`ml`), Marathi (`mr`),
Nepali (`ne`), Odia (`or`), Punjabi (`pa`), Sanskrit (`sa`), Tamil (`ta`), Telugu (`te`), Urdu
(`ur`).

## Adding a language is a data-file addition, not a structural change

1. Create `<code>/ui.json` and `<code>/anatomy.json` in this directory, matching the shape of
   `en/ui.json` and `en/anatomy.json` exactly (same keys).
2. Add the language to `SUPPORTED_LANGUAGES` and the `resources` map in `../index.ts`.
3. For Urdu (`ur`), also set `dir: 'rtl'` — the app already reads `dir` from
   `SUPPORTED_LANGUAGES` and applies it to the document, so no other RTL work is needed.

## Rollout order and sourcing rules — see `Rules.md` §5, `Phases.md`'s i18n rollout order

Do not populate `anatomy.json`'s `explanations` or any per-concept anatomical term from raw
machine translation alone. Per `Rules.md` §5:

- Hindi is checked against CSTT's published Hindi Glossary of Anatomy/Medical Science
  (cstt.education.gov.in/glossary-hindi-medical-science) where it covers a term. The `hi`
  content shipped in this scaffold is a first pass (common system names and well-known
  organs only, not the 3,432 individual BodyParts3D concept names) — it has **not yet** been
  cross-checked against CSTT and needs native-speaker medical review before being treated as
  final. Flagged explicitly in `hi/anatomy.json`'s `_note` field and in this project's build
  report.
- Tier-1 languages (Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi,
  Urdu, Odia) may use AI4Bharat IndicTrans2 as a first-draft translator, but every
  medical/anatomical term needs native-speaker review before shipping.
- Sanskrit, Kashmiri, Konkani (Tier-3): do not ship MT-only medical terminology. These need a
  partner-sourced glossary before launch in that language.

## `ui.json` vs `anatomy.json`

`ui.json` is interface chrome (buttons, labels, captions) — ordinary language, safe to
translate directly. `anatomy.json` is anatomical/medical content and follows the sourcing
rules above.
