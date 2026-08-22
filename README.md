# The Allocation

A 35-minute decision lab for **AP Human Geography, AMSCO Topic 2.1 — Population Distribution**.

Students work in pairs as analysts at a food-security agency, splitting an emergency fund across
five countries. Evidence arrives in four rounds, and each round's new measure changes the answer:

| Round | Evidence | What it teaches |
|---|---|---|
| 1 | Arithmetic density + settlement pattern | Density is an average; it hides distribution |
| 2 | Arable land → **physiological density** | Egypt goes from 226 to 8,077. Only the denominator changed |
| 3 | Sudan data revision (displacement) | Distribution can be redrawn while density sits still |
| 4 | Agricultural density, yields, income — and a 40% fund cut | Low agricultural density ≠ mechanised |

## What density has to do with cereal aid

Density is **not** a measure of hunger — Japan is crushingly dense per acre of farmland and nobody
there is short of food. The lab says so in Briefing 01 and works the whole chain instead:

1. **Physiological density** — people per square mile of farmland.
2. **Farmland per person** — the same number inverted (640 ÷ density). Egypt: 0.08 acres a head.
3. **Yield** — farmland per person × yield = cereal grown per person. Physiological density is
   *literally the denominator* of a country's per-head food supply.
4. **The gap** — grown against a 150 kg/person/year ration line.
5. **Ability to pay** — a rich country buys the gap; a poor one cannot.

The payoff is Round 4: **Egypt and Yemen have nearly identical physiological densities
(8,077 and 6,909) and nearly identical farmland per person (0.08 and 0.09 acres) — and Egypt grows
208 kg of cereal per person while Yemen grows 37**, because Egyptian yields are among the world's
highest and Yemen's are 1.0 t/ha. Density found the pressure. It took yield and income to find the
hunger. Egypt is the largest wheat importer on earth, not a famine — a structural vulnerability,
and the lab no longer pretends otherwise.

**All three densities are computed by hand** on the Calculation Bench — arithmetic in Round 1
(a warm-up that teaches the interface while stakes are low), physiological in Round 2, agricultural
in Round 4. None of them is merely read off a table.

## Maps

- **Dot density maps** on real Natural Earth outlines, one dot = 500,000 people. Egypt's Nile
  ribbon, Niger's empty north, Bangladesh's saturation — the three AMSCO distribution patterns
  in real countries. Dot placement is a cartographic generalisation from city locations and
  settlement corridors, not census data, and the page says so.
- **Arable land figure** — each country's total area as a square with its arable share drawn to
  scale inside.
- **Density Comparison map series** — the same outlines shaded by whichever density you pick.
  Egypt is among the palest on arithmetic and the darkest on physiological.

## Outcomes

No score, no simulated casualties, no "correct" answer revealed. Instead a **receipt** after every
lock naming which density measure the allocation actually tracked (rank correlation against each),
**The Mirror** on the memo showing those four receipts in a row, and a sourced **Case Closed**
screen — including that the 2024 UN humanitarian appeal was funded at roughly 43%, making the
lab's 40% cut gentler than reality.

Pairs print a signed recommendation memo carrying both names, all four allocations, the density
figures they computed, and four written justifications — the gradeable artifact.

## Solo or paired

The sign-in screen offers **With a partner** (default) or **On my own**. Solo mode drops the second
name field, reworks the prompts that assume someone to argue with, and prints a single signature line.

## Orientation

No teacher preamble needed. Students get an in-fiction assignment screen after sign-in, four
skippable coachmarks on Round 1, and a worked example inside the Calculation Bench at the moment
it first appears. The `?` in the top bar reopens the assignment at any time. Budget ~3 minutes.

## Running it

Open `index.html` in any browser. No install, no build, no network required (web fonts degrade to
system fallbacks). Works on classroom Chromebooks at 1366×768.

Instructor notes — timing, answer key, data sources, and the deliberate trap in Round 4 — are
linked from the sign-in screen.

## Data

CIA World Factbook-era figures (2018–2022), chosen so Egypt (226 / 8,078) and Bangladesh
(2,914 / 4,938) reproduce the densities printed in the AMSCO Topic 2.1 table on p. 59.
Farmer counts are estimates derived from agricultural share of employment; verify the
Sudan, Yemen, and Niger figures against a current source before teaching.

`artifact/lab.html` is the same page with the document skeleton stripped, for hosted publishing.
