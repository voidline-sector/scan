# Voidline Sector Scan

The network front door for [Voidline](https://voidline.gg) — a passive scan of
the sectors that announce themselves, and the page that routes you into one.

Served at **uplink.voidline.gg**.

---

## What it does

Voidline is a self-hosted community platform. Each **sector** is a sovereign
deployment with its own address, its own inhabitants and its own character.
This page is not part of any of them.

It draws what it can detect — sectors on their orbital rings around the
singularity at the centre of the megacity — and lets you tune into one. If you
have been here before it forwards you straight to the sector you use, which is
most of what it does in practice.

Sectors that have not announced themselves are not shown. There is no directory
here and no list to enumerate: a sealed sector emits nothing, so there is
nothing to hide. If you were handed an address to one, there is a field for it.

## Running it locally

No build step, no dependencies. Serve the directory over HTTP — a `file://`
origin will not do, because the page stores your last sector:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Structure

Everything is one HTML file, deliberately. The picture is hand-rolled canvas —
no framework, no charting library, nothing between the page and the paint. The
only external resource is the webfont.

Sectors are declared in a data file rather than in code, so adding one is an
edit rather than a change.

## Contributing

`CLAUDE.md` carries the design rules and, more usefully, the reasoning behind
them — including several things that were built, rejected and are recorded so
they are not tried again. Read it before changing how the scan behaves.

## Licence

Not yet declared.
