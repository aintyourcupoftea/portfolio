---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: ["src/components/site"]
---

# Surface brief: the portfolio page (src/App.jsx and src/components/site/*)

Scope: the whole single-page site. Visitor mode: **Persuade** (success is an inbound message; no showable artifact leads, so the person and his competence must persuade).

Audience and job: hiring managers and recruiters for GCP DevOps / SRE roles deciding within a minute whether to write; engineering peers reading deeper. Action: contact form, email, LinkedIn, resume download. Proof: the resume facts, the Credly badge, public repos (SpaceWarden, BharatLeafLens, PDF-Signer, MemeFetchingRedditAPI). Constraints: Amit leads the first viewport; no metrics slab (figures may live inside narrative only); TCS / Deutsche Börse / C7-SCS named; no code links on client work; meme section stays; Web3Forms contact with sending/sent/failed; reduced-motion static fallback; facts never hidden by style.

Owner decisions this round (2026-09-22): slow, dark, widescreen cinematic; the Metrics section is removed; "metrics but not really metrics" means show capability and competence, not superlatives; the site is **dark-only** in this world (the light/dark toggle is retired with the incumbent world; `prefers-color-scheme` is honoured by there being one scheme, `color-scheme: dark`).

## Direction contract

THESIS: Mission Control. The operator in the foreground, the platform he keeps up on the wall behind him. A flight-operations room says competence without a single superlative: every system has a console, every console has a name, and the board reads GO. It refuses the category default (centered name over a glow, skills chips, project cards) and the incumbent's white resume page.

OWN-WORLD: Console grey-green ground in three depths (room, console panel, recessed display), never pure black. Ink is warm lamp white. One phosphor green is the live signal, used only where something is GO or live (status rows, the clock, the active marker); one backlit amber legend marks the single current item (ON CONSOLE). Type: engraved-legend condensed caps for headings and labels (Barlow Condensed), Barlow for prose, a wide technical mono (Martian Mono) for every readout, timestamp and callsign. Structure is panel joinery: 1px seams, recessed display wells with an inner top shadow, legend plates as small caps labels in the top-left corner of every panel. Motion is lamp-on: a brief overshoot flash then settle, and rows that light in sequence.

STORY: The visitor arrives in a dark room. A man is at the console; behind him the wall board polls the systems he runs and each answers GO. They understand: this person operates a regulated clearing platform on Google Cloud and is certified for it. They believe it because every console is named with real tools and real work, not adjectives or big numbers. They act by opening a channel: the CAPCOM contact form, email, LinkedIn, or the resume.

FIRST VIEWPORT: Full-height dark room. A thin console rail across the top: callsign AMIT GAVALI left, section legends center, a live mission clock right (IST and CET, ticking, mono). Below, a widescreen board: left 40% is the operator, his night portrait graded cool and vignetted, standing low in the frame with the name at display scale set over/beside him and the role line "GCP Cloud DevOps Engineer · Google Cloud Certified Professional Cloud DevOps Engineer" as a legend plate. Right 60% is the wall board: a recessed display listing seven systems (GKE, Compute Engine and Filestore; Terraform Enterprise and Ansible; Jenkins and GitHub Actions; Kubernetes and OpenShift; PostgreSQL 17 with mTLS; Prometheus, Grafana, ELK; IAM, PKI, Linux hardening) as rows that light GO one by one on load with a phosphor flicker, the last row "C7-SCS securities clearing platform · Deutsche Börse Group · via TCS" reading ON CONSOLE in amber. Primary action sits under the portrait: "Start the sequence" (scrolls to the consoles); secondary "Download resume".

FORM: Mission Control, candidate 1 on my ordered list (the IMPECCABLE'S PICK card; the roll assigned candidate 6, The Change Window). Seed key 90f50c3e. Code-led: no image generation in this session; the ambition lives in this contract and the signature interaction (the GO poll on load and the live clock), audited in behavior at finish.

Signature interaction and motion grammar: (1) the GO poll: wall-board rows light in sequence, 140ms apart, each with a lamp-on overshoot and a mono "GO" that types in; (2) the mission clock runs on real time; (3) every panel powers on when scrolled into view (opacity and a 1px brightness overshoot), sections staggered by column; (4) hover on any control is a legend-lamp brighten, never a lift. Under prefers-reduced-motion everything renders fully lit and static, the clock still ticks.

Section plan after the first viewport: CONSOLES (replaces Metrics: five disciplines as console panels with a callsign legend, one competence sentence and the tools, no numbers); MISSION LOG (experience, with the resume's two missing highlights added, numbers kept inside the lines); FLIGHT RECORDS (work, six items: the four client items plus PDF Digital Signer API and Bharat Leaf Lens, GitHub links only on the public repos); DOWNLINK (the r/ProgrammerHumor live feed as a wall monitor); SYSTEMS BOARD (skills); CERTIFICATION and EDUCATION panels; CAPCOM (contact form and direct channels); footer as the console rail's mirror.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
