/* ═══════════════════════════════════════════════════════════════════════════
   SECTORS — the data file.

   This is the thing edited most often and by the least ceremonial process:
   add a sector by adding a row here. Nothing else in the page changes, and
   there is no build step, so what is committed is what is served.

   THIS FILE HOLDS WHAT SECTORS DECLARE, AND NOTHING THE INSTRUMENT INFERS.
   Bearing is not here — it is derived from a hash so that nobody hand-places
   a sector and the picture can never become a composition someone curates.
   Unresolved returns are not here either: they are what the instrument picks
   up, not what anyone announced.

   FIELDS
     state        "commissioned" | "provisioned"
     designation  e.g. "R-77". Also the hash input for bearing. Commissioned
                  sectors only.
     address      the sector's host. Commissioned sectors only.
     hue          the sector's OWN colour, deliberately outside the
                  instrument's cyan/silence palette. Commissioned only.
     ring         0–4, DECLARED. The ring is a place, not a measurement and
                  not a rank — a sector says which one it sits on and nothing
                  verifies it.
     aperture     "OPEN" | "FOCUSED" | "DRIFTING". Carried by the emission
                  cadence rather than by any text: an OPEN sector announces
                  itself often, a DRIFTING one rarely. Commissioned only.
     key          Provisioned sectors only — see below.

   A PROVISIONED SECTOR CARRIES `ring` AND `state` AND NOTHING ELSE THAT NAMES
   IT. The scan knows where something is being built and not what it will be
   called, which is both in-world and the honest state of things.

   `key` IS OPAQUE AND MUST NOT BE DERIVED FROM THE WITHHELD DESIGNATION.
   A provisioned mark still needs a stable bearing, and bearing is
   hash(input) — so if the input were the real designation, the bearing would
   be an oracle for it: hash your guesses, compare, and the withheld name
   falls out. Any arbitrary string will do; it is never displayed.

   A SEALED SECTOR IS NEVER IN THIS FILE. It emits nothing, so there is
   nothing to show; it is structurally absent rather than redacted. Anyone
   holding its corridor address types that address instead.
   ═══════════════════════════════════════════════════════════════════════════ */

window.VOIDLINE_SECTORS = [

  {
    state: "commissioned",
    designation: "R-77",
    address: "r77.voidline.gg",
    hue: "#ff9a3c",
    ring: 3,
    aperture: "OPEN"
  },

  { state: "provisioned", ring: 1, key: "prov-a" },
  { state: "provisioned", ring: 3, key: "prov-b" }

];
