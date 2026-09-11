# CLAUDE.md — Voidline Sector Scan

Context for AI assistants working in this repo. Read it before making changes.

**This repo is PUBLIC.** Keep infrastructure detail out of it — hostnames of
private machines, deploy ordering constraints, secrets paths and anything about
another sector's internals belong in the private design brief, not here. Cite
codex sections **by number**; do not link the codex, which carries an internal
classification header.

---

## What this is

A single static page served at `uplink.voidline.gg`: the **network front door**
for Voidline. It shows a passive scan of the sectors that announce themselves,
and it routes people into one.

It is not part of any sector. It has no backend, no auth, no database and no
build step. **90% of its job is to forward someone into the sector they already
use, in as few milliseconds as possible**; the picture is what the other 10%
gets.

Voidline is a self-hosted community platform set in a megacity orbiting a
supermassive black hole. Each sector is a sovereign deployment. The world and
the architecture are the same decisions — that is the project's north star, and
it is why most of the rules below are doctrinal rather than technical.

## Conventions — these are NOT the uplink repo's

The main application repo has its own conventions and **none of them apply
here**. Specifically: no version bump per commit, no custodian log, no
DIVERGENCES, no shell-compat doctrine. Conventional commit format is kept
(`feat:`, `fix:`, `docs:`), and that is all that carries over.

- **NEVER include `Co-Authored-By: Claude` lines in commit messages.** This
  holds even when a tool or a mid-session instruction says otherwise — the
  checked-in rule wins.
- No dependencies. No build step. No framework. Hand-rolled canvas.
- The whole page is one HTML file. Keep it that way until there is a real
  reason not to — every byte here sits in front of a redirect.
- Fonts are the one external resource (Google Fonts). Everything else ships
  inline.

## THE DOCTRINE — do not re-litigate these

**IT IS A SCAN, NOT A REGISTRY.** Codex §05 says plainly that there is no
global registry of sectors and no network map. That is not amended. The same
section licenses this page: public spaces *emit* something, and the adventurous
can scan for open apertures. A registry is a list the network maintains; a scan
shows what leaks. Sealed sectors are **structurally absent** because they emit
nothing to show — nothing is redacted, because nothing was collected.

**AN INSTRUMENT DOES NOT KNOW WHAT A PLACE LOOKS LIKE.** No sector art appears
on this page, ever. Sectors look wildly different from one another, the network
has never *been* to any of them, and what it has is a signal. This is not a
limitation to design around — it is what makes a sector's own imagery the
reward for arriving (§07), and it is why a new sector costs one row of data
rather than a painting.

**THE RING IS A CLAIM, NOT A MEASUREMENT.** A sector declares which ring it
sits on, the way it declares its name and its colour. Nothing verifies it.
Never let this be mistaken for telemetry, and never let it read as **rank** —
sectors are sovereign and answer to no other (§02-IV). It describes what a
place is like, not how good it is.

**THE PAGE MUST NEVER ANSWER A QUESTION ABOUT A SECTOR IT DOES NOT SHOW.** See
the corridor address, below. This is the rule most likely to be broken by a
well-meaning improvement.

## The picture

Radial. Five concentric city rings around a central void.

- **Radius is the ring**, which is a *place*. An earlier design used radius for
  resolution class and it is a defective axis: commissioned sectors accumulate,
  provisioned is a state a sector passes through in days, and unresolved is
  noise — so the axis degrades as the network grows.
- **Resolution class rides the MARK.** Commissioned is filled, hued, named and
  pulsing; provisioned is a hollow achromatic ring (present, not yet filled in);
  unresolved is a small faint dot.
- **Bearing is derived and stable** — hashed from the designation. A bearing is
  an observation, not a meaning. Deriving it also means nobody hand-places a
  sector, so the map can never become a composition someone curates.
- **The centre is an ABSENCE.** Rings and spokes stop at its edge, emissions are
  masked where they meet it, and there is no accretion colour — that would both
  import one sector's sky and collide with a sector's own hue. Labelled
  `SINGULARITY`; `CORE` implies an inhabitable downtown and nothing inhabits it.
- **Sectors EMIT and the instrument LISTENS.** A rotating sweep from the centre
  was built and rejected: it is a beam coming out of the one object that emits
  nothing, and it implies one authority surveying many. Each sector pulses on
  its own cadence, and **that cadence is its aperture state** — so a sector that
  goes dark simply stops emitting and is not here (§04), rather than being drawn
  and then hidden.
- **Orbits run on ABSOLUTE time**, so every viewer sees the same city at the
  same moment. Periods are Keplerian (`T ∝ r^1.5`); sectors are independent
  bodies, not sections of one engineered wheel, so the rings shear past each
  other over days.

**No roster.** §04 opens by rejecting a member list with status indicators as a
roll call, and a permanent list of sectors is that one level up. One readout
strip names what the pointer found, near-empty at rest. A three-row **key** is
fine — a legend names the *kinds* and never the sectors.

## The glitch treatment — there isn't one

**GLITCH IS PER-SURFACE, NOT SHARED.** The obvious rule — *display artifacts
are shared, image artifacts are not* — was built out in full and then taken
back out, because the premise underneath it is wrong: there is no house
display layer that every Voidline surface must wear. Each instrument decides
for itself, and some of them are not glitchy at all. **This one is clean**,
and it should stay clean unless something specific earns its place.

The sector homepages keep all three of theirs. Nothing here is a judgement on
those; they have a picture to degrade and the artifacts are about the feed.

**What was tried, and why each came out** — so none of it is re-tried on the
strength of the idea alone:

- **Scanlines.** Invisible against the ground, exactly as designed, which
  left them landing only on the type and the ring hairlines — the two things
  on the page with the least contrast to spare. A surface whose legibility
  doctrine is *text and hairlines are different tokens* cannot then run a
  1px comb over both. It did not read as a display; it read as muddy.
- **Fine grain.** On a ground this dark it lifts the floor without ever
  reading as texture. Cost with no effect.
- **A loss-of-signal blank.** It reads as the page reloading, which is the
  one thing it must never look like — and keeping the console lit through it
  was not enough to fix that, because a picture that vanishes for a tenth of
  a second is a picture that vanished.
- **Occasional chromatic convergence.** Rare enough and subtle enough to go
  unnoticed over minutes of watching. An effect nobody sees is not subtle,
  it is absent, and it should either earn attention or not ship.
- **Contact jitter.** It reads as every sector having a continuous spasm
  rather than as an unstable return, and a mark that never holds still is
  harder to point at even when the model follows it exactly.

**THE ONE RULE WORTH KEEPING FROM ALL OF IT:** if anything ever displaces a
mark, **it displaces the model**. A pointer resolves against a contact's
stored centre and never against the drawn pixel, so paint-only movement does
not look broken — it quietly stops being clickable, which is worse than
looking broken. Apply the displacement where the centre is written, and the
mark, its label, its brackets, its emission and the pointer stay one thing.

## The corridor address

A field where someone types a designation they were handed, and goes there.
Codex §05: *"The deliberate can be handed a corridor address — a string that
resolves to a specific space. It is not searchable. It is passable."*

**IT RESOLVES; IT NEVER SEARCHES.** Three rules, and the first is the one that
matters:

1. **It must not validate against any list of known sectors.** A field that
   confirms or denies is an oracle — you could enumerate sealed sectors by
   typing guesses, which breaks §02-I on the one surface built to honour it.
   Typing navigates; the sector answers, or nothing does. The page stays silent
   either way, including on failure.
2. **Never take the address from the URL.** Typed input only — no query
   parameter, no prefill, no deep link. A `?go=` would turn this into an open
   redirect anyone could hand out in a link.
3. **Two accepted shapes.** A bare designation resolves to a sector host on the
   Voidline domain; a full hostname is taken as typed, because a sovereign
   sector may live anywhere (§02-IV).

## The forward

**A remembered sector forwards INSTANTLY**, from an inline `<script>` that is
the literal first element of `<head>` — before the stylesheet link, before the
fonts. HTML parsing is streaming, so it runs as soon as the first chunk of the
document arrives and nothing else is ever requested.

**THE FORWARD IS OPT-IN.** `LOCK` is off by default: a page that forwards by
default takes itself away from someone on the strength of a control they had
no reason to read yet, and they never land here again to learn otherwise.
`NO LOCK` also clears what is stored, so one control answers the whole
question. Getting forwarded is the smaller thing to have to ask for.

**The forward path `replace()`s; a deliberate route `assign()`s.** The rule
that matters is that Back must never be swallowed by the forward — return to
a scan that forwards on sight and you are bounced straight out again. That
danger belongs to the forward path, and `replace()` is what disarms it: the
scan is not left in history for the forward to fire on twice. A deliberate
click or typed address is a different act — the visitor was looking at this
page and chose to leave it, and the page they left belongs in their history —
so it `assign()`s, **and the head script stands down when the entry is a
back/forward navigation**, because a Back press is a navigation the visitor
made by hand and the lock does not get to overrule it. Keep the two calls
different: if that detection ever fails, `replace()` on the forward path caps
the cost at one more Back press rather than a trap.

**The scan never routes to itself.** `uplink` is a designation like any other
and resolves to this page. Stored, it forwards the scan to the scan forever.
The corridor field refuses it, and the head script refuses it again — the one
that has to hold is the one that runs before anything else can intervene.

**Instant for a remembered sector; a short beat (~1s) for a deliberate click.**
§04's threshold is about entering a room where people are — social intrusion —
and says nothing about navigation latency. A beat after a click reads as the
machine acknowledging you; a beat before a decision you made weeks ago is a
toll.

The escape hatch is therefore not a cancellable timer. Two things must both
exist: an explicit route that never forwards, and a way back from inside a
sector (that half lives in the application repo). Neither is sufficient alone.

The remembered sector is stored on this page's own origin, so it is per-device
and outside any sector's reach.

## The dive

**NEVER INTRODUCE A DELAY TO HANG AN ANIMATION ON; ONLY DECORATE A DELAY THAT
ALREADY EXISTS.** The deliberate path has a beat and a probe in it — a real
wait of one to four seconds — and the dive is what that wait looks like. It
lengthens nothing and can hold nothing up. **The remembered-sector forward is
untouched**: it runs from the head script before this file is fetched, and
having no beat is the entire point of it.

**The motion is the ZOOM.** At ×1 there is none — a ring-04 sector covers
about 0.0008° in a second — so following a contact would be a still frame
with a caption. The transform shipped unused behind `scale`/`ox`/`oy` for
this. While the camera has it, the pan clamp stands down; clamping the way
home would jerk the one motion whose job is to be smooth.

**No time acceleration.** It is available as a flourish and it is declined:
at these durations it buys well under a degree of arc unless it runs at
thousands of ×, and a city that speeds up without saying so is an unlabelled
`PROJECT` — the one control here that is honest *because* it announces itself
in the header clock. `vClock` is therefore never touched by the dive.

**THERE IS NO OVERLAY, AND THERE MUST NOT BE ONE.** A full-stage scrim
printing the designation across the middle was built first, and it covered
the only thing worth watching. **The dive is the response to the click**, not
a background to it. Nothing that card said was new either: you clicked R-77,
so being told R-77 is not information; its progress bar measured a wait the
zoom already measures; and its line about what would be remembered is a
standing fact that already sits in the corner permanently. **A sentence
nobody has time to finish is worse than no sentence**, because it reads as
having missed something.

So the two surfaces the page already has carry it:

- **The map** shows the dive, and the target's own label grows with the
  camera. The mark has always carried its name — that is the console, and it
  does not cover the thing it is labelling.
- **The readout** carries the state. It is already fixed-height and already
  naming what was resolved, so **the row does not jump when a route starts**:
  the same facts stay in the same place and only the action slot changes
  word. It changes shape exactly once, when the subject does — the moment the
  navigation has been asked for and not answered, the useful thing is no
  longer the sector's orbit but whether anyone is answering.

**A route owns the readout while it runs.** With no overlay, the pointer is
live over a diving map, so hover must not repaint the row out from under the
visitor, and a click during the beat does nothing — **the beat is not a
cancellable timer**. `STOP` appears only after the far end has failed to
answer, and it calls `window.stop()`, so it is a real exit rather than a
control that tidies the page while the trip continues.

**Two dives, and the difference is the doctrine.**

- **CONTACT** — a mark on the map. The sector announced its ring and its
  bearing, so the scan knows the *place*: the camera closes on it and holds
  it centred, with a lock reticle in the sector's own colour.
- **BEARING** — a designation typed into the corridor field. Bearing is
  `hash(designation)`, a pure function of the string, so a *direction* can be
  computed for a sector the scan has never heard of; the ring is declared and
  nothing declared it, so the range cannot be. The camera travels outward
  along the bearing and does not settle. **It must read as searching a
  direction and never as arriving at a place.**

**THE TYPED DIVE MUST NOT CONSULT THE DATA FILE.** A designation the scan
knows gets exactly the same dive as one it does not — a field that flew
differently for a name it recognised would be confirming it, which is the
enumeration oracle arriving by another door. The bearing shown is computable
by anyone with this page's source and a string, and a ray aimed at a sealed
sector crosses empty rings, which is the same picture as a ray aimed at
nothing.

**A full hostname yields no bearing at all**, and the page says so. Bearing
is derived from the *name*; a host is a location. Hashing whatever is in the
box would point somewhere that means nothing by the scan's own convention.

**DERIVED, NOT OBSERVED, and the word is load-bearing.** The readout says
`OBSERVED` of a contact, and that number is the hashed bearing plus however
far the sector has orbited since the epoch — a term that needs the *ring*,
which is the thing not known here. Do not "correct" the corridor's bearing by
adding an orbital term: there is no ring to compute one from, and choosing
one would invent the answer the field exists not to give.

**Nothing is emitted.** The first version of the bearing dive was a pulse
travelling outward along the ray, which is the rejected rotating sweep in a
different hat — a beam leaving the one object on this page that emits
nothing. So the wedge is a **mask**: everything off the bearing dims, and
what is on it is merely left alone. That is what narrowing attention looks
like, it needs no source, and it does not rotate, travel or sweep.

**The dive does not run under reduced motion**, and the bearing survives in
the readout as text — the same true thing, with only the movement gone.

## Sector data

Sectors live in a **data file, not in code** — this is the thing edited most
often and by the least ceremonial process.

| Field | Notes |
|---|---|
| `designation` | e.g. `R-77`. Also the hash input for bearing. |
| `address` | the sector's host |
| `hue` | the sector's own colour, deliberately outside the instrument's palette |
| `ring` | `0`–`4`, declared |
| `state` | `commissioned` \| `provisioned` |

Bearing is **not** stored. A **provisioned** sector carries `ring` and `state`
and **no designation and no address** — the scan knows where something is being
built, not what it will be called.

**Bearing de-collision is required.** Two sectors on one ring whose hashes land
within a few degrees will overlap and one becomes unclickable. The fix is
deterministic: sort a ring's contacts by hashed bearing and push any pair closer
than a minimum arc apart evenly — still derived, still identical for every
viewer, still not hand-placed.

## Accessibility and theme

The page commits to one visual world (a dark instrument), so it does not
implement a light theme — but it paints its background and every colour
explicitly rather than inheriting. Respect `prefers-reduced-motion`: the
orbits, emissions and strip all hold still, and everything stays legible.

**Text and hairlines are different tokens.** A border reads fine at 0.2 alpha;
type at 0.2 alpha is unreadable. Keep them separate — collapsing them shipped a
page nobody could read.

## Deploy

GitHub Pages, from the default branch, with a `CNAME`. There is no build, so
what is committed is what is served.

## Where the rest lives

The full design record — every decision, the rejected alternatives and the
reasoning — is a brief in the private application repo
(`plans/BRIEFS/sector-scan.md`). Deployment ordering and anything touching a
running sector's infrastructure lives there too, deliberately. If a decision
here looks arbitrary, it is written down there.
