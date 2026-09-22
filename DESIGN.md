---
name: Amit Gavali Portfolio
description: A dark hall with one projector in it, where everything you read is what is lit.
colors:
  hall: "#17130E"
  hall-deep: "#0F0C09"
  plate: "#EFE7D6"
  ink: "#1B1712"
  ink-soft: "#4A3F32"
  ink-faint: "#5C4F3E"
  lit: "#E8DBC5"
  lit-soft: "#9C8D78"
  lit-faint: "#8F8169"
  lamp: "#FFD49C"
  glow: "#FFEFD6"
  signal: "#E4563E"
  signal-ink: "#A8301C"
typography:
  display:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 10.5vw, 7rem)"
    fontWeight: 800
    lineHeight: 0.84
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 74, 'wght' 800"
  head:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "0.005em"
    fontVariation: "'wdth' 80, 'wght' 700"
  title:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 680
    lineHeight: 1.08
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 92, 'wght' 680"
  control:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 680
    lineHeight: 1
    letterSpacing: "0.055em"
    fontVariation: "'wdth' 88, 'wght' 680"
  lead:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 420
    lineHeight: 1.45
    letterSpacing: "normal"
    fontVariation: "'wdth' 100, 'wght' 420"
  body:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
    fontVariation: "'wdth' 100, 'wght' 400"
  slate:
    fontFamily: "Sometype Mono, ui-monospace, monospace"
    fontSize: "10.5px"
    fontWeight: 500
    lineHeight: 1.7
    letterSpacing: "0.09em"
    fontFeature: "'tnum'"
rounded:
  none: "0"
  DEFAULT: "0"
  mark: "999px"
spacing:
  gutter: "20px"
  gutter-md: "32px"
  gate-x: "24px"
  gate-x-md: "40px"
  gate-y: "36px"
  gate-y-md: "56px"
  scene-bottom: "64px"
  scene-bottom-md: "96px"
  control-h: "48px"
  touch-min: "44px"
components:
  key:
    backgroundColor: "{colors.lamp}"
    textColor: "{colors.hall-deep}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "{spacing.control-h}"
  key-hover:
    backgroundColor: "{colors.glow}"
    textColor: "{colors.hall-deep}"
  key-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "{spacing.control-h}"
  slot:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "{spacing.control-h}"
    width: "100%"
  plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.gate-y} {spacing.gate-x}"
  plate-dim:
    backgroundColor: "{colors.hall-deep}"
    textColor: "{colors.lit}"
    rounded: "{rounded.none}"
    padding: "{spacing.gate-y} {spacing.gate-x}"
  scene-strip:
    backgroundColor: "{colors.hall-deep}"
    textColor: "{colors.lit-faint}"
    typography: "{typography.slate}"
    rounded: "{rounded.none}"
    padding: "0 16px"
  scene-strip-active:
    textColor: "{colors.lamp}"
  live-mark:
    backgroundColor: "{colors.signal}"
    rounded: "{rounded.mark}"
    size: "6px"
---

# Design System: Amit Gavali Portfolio

## Overview

**Creative North Star: "The Throw"**

A dark hall with one projector in it. Everything you read is what the lamp is currently lighting; everything else is warm charcoal and dust. There is exactly one light source on the page, and it governs every colour: the plate is lit by it, the hall falls away from it, the primary control is filled with it, the browser's own scrollbar is drawn in it. Rank is not carried by a border or a card — it is carried by how much light lands on a thing and how far from the lamp it sits.

The system runs on two grounds and one rule that binds them. The HALL (#17130E, deepening to #0F0C09) is the unlit room and carries light ink. The PLATE (#EFE7D6) is the lit gate and carries dark ink. Body copy belongs on a plate. The testable discriminator for this world is that prose is **dark ink on a lit ground**, never light text on a dark ground behind a radial gradient — if a paragraph is pale text floating on charcoal, the world has been broken.

The light is computed rather than painted. Each scene declares where the lamp stands (`data-lamp="x y throw"`); the controller moves `--lx`/`--ly`/`--throw` on the document element, and because those three are registered with `@property` they interpolate instead of jumping. Every lit surface then recomputes `--fx`/`--fy` from the lamp's real viewport position relative to its own box on a rAF-throttled scroll handler, so its hot centre and its falloff are the lamp's and not a decorative vignette. That travel is the page's one authored moment. Nothing else animates on arrival: content is lit when it appears, and no copy waits for motion to become readable.

**Key Characteristics:**
- Two grounds, one rule: light ink in the hall, dark ink on the plate.
- One light source (#FFD49C / #FFEFD6) governing every colour; no second decorative hue exists.
- One signal hue at two renditions, used only for what is live and what has failed.
- Enclosure never: no panels, cards, wells or seams. Hairline rules separate rows; they do not bound regions.
- Square corners everywhere (0 radius); the 6px live mark is the only round form on the page.
- One type family at three widths, plus one mono reserved for slate data.
- Computed falloff, capped at 0.16 alpha so the darkest corner of a plate still clears contrast.

## Colors

One warm tungsten palette derived entirely from a single lamp, plus one leader red that appears only where something is live or wrong.

### Primary
- **Tungsten Lamp** (#FFD49C): the page's only light source. Fills the primary control, tints the beam and the plate halation, paints the active scene mark in the strip, and draws the scrollbar thumb (34% over hall-deep).
- **Lamp Glow** (#FFEFD6): the hot centre of the throw. The plate's inner highlight (screen blend), the 16px edge bloom, the flare on scene change, and the primary control's hover state.

### Secondary
- **Leader Red** (#E4563E): the signal on the hall — the live marker beside the active scene and the "on the platform now" readout.
- **Leader Red, Inked** (#A8301C): the same signal rendered for a lit plate — form errors, focused field rules, focus outlines inside a plate, caret and accent colour, link hover in ink.

### Neutral
- **Hall** (#17130E): the unlit room. The page ground and the top rail's fade-out scrim. Warm charcoal, never pure black, never emissive.
- **Hall Deep** (#0F0C09): the darkest reach of the room. The scene strip's opaque ground, the scrollbar track, the quiet dim gate, and the corner falloff the beam paints into the hall.
- **Plate** (#EFE7D6): the lit gate. Every surface that carries prose.
- **Plate Ink** (#1B1712): dark warm ink on a plate — headlines, titles, field text.
- **Ink Soft** (#4A3F32) / **Ink Faint** (#5C4F3E): supporting prose and slate labels on a plate. Ink Faint is the contrast floor of this world.
- **Lit** (#E8DBC5) / **Lit Soft** (#9C8D78) / **Lit Faint** (#8F8169): the three weights of light ink for the hall — rail readouts, footer, inactive scene labels.

### Named Rules
**The One Lamp Rule.** Every colour on the page is the hall, the plate, their inks, or the lamp. No second decorative hue is ever introduced. A new accent is not a palette extension, it is a second light source, and this room has one.

**The Two Grounds Rule.** Light ink in the hall, dark ink on the plate, and never the reverse. Prose lives on a plate. A paragraph set in `--lit` over `--hall` is a defect, not a variant.

**The Signal Scarcity Rule.** `--signal` / `--signal-ink` mean exactly two things: this is live right now, or this failed. They are never used for emphasis, for decoration, or for a call to action.

**The Falloff Cap Rule.** The plate's multiply falloff tops out at `rgb(var(--hall) / 0.16)`. That ceiling is a contrast constraint, not a taste choice: at 0.16, Ink Faint (#5C4F3E) still clears 4.5:1 against the darkest corner of a plate. Do not raise it to deepen the mood.

## Typography

**Display / Body Font:** Archivo Variable (self-hosted via `@fontsource-variable/archivo/wdth.css` — the width-axis build, with `system-ui, sans-serif` fallback)
**Label/Mono Font:** Sometype Mono (weights 400 and 500, with `ui-monospace, monospace` fallback)

**Character:** One grotesk, worked across its width axis. The more light a thing has, the narrower and heavier it is set — a compressed 800 for the name in the gate, a 400 at full width for prose. Hierarchy is width before it is size. Sometype Mono is the slate: small, tracked, uppercase, tabular, and never a sentence.

### Hierarchy
- **Display** (wdth 74 / wght 800, `clamp(3.4rem, 10.5vw, 7rem)`, line-height 0.84, uppercase): the name in the gate. One per page.
- **Head** (wdth 80 / wght 700, 24–54px by scene, line-height 0.9, uppercase): scene titles, set as ink in the light.
- **Title** (wdth 92 / wght 680, 15–19px, line-height 1.08): the ranked line inside a row — a role, a record name, a rail readout's value.
- **Lead** (wdth 100 / wght 420, 15–17px, line-height 1.45): the opening paragraph of a scene, one step lighter than it is large.
- **Body** (wdth 100 / wght 400, 13.5–17px, line-height 1.6): running prose, held to 46–76ch.
- **Control** (wdth 88 / wght 680, 14–15px, tracking 0.055em, uppercase): buttons and the wordmark.
- **Slate** (Sometype Mono 500, 9–11px, tracking 0.09em, uppercase, tabular): data only — a count, a time, a period, a state, a tool list, a scene label.

### Named Rules
**The Width-Is-Hierarchy Rule.** Rank is set on the width axis first: 74 / 80 / 92 / 88 / 100. Do not introduce a second family, a display serif or a new weight to signal importance — narrow it.

**The Slate Rule.** The mono face is for slate data and nothing else. It never carries a sentence and it is never worn as a "technical" costume. If it reads as prose, it is set wrong.

**The No-Kicker Rule.** A scene title carries its own weight. There is no eyebrow, kicker or label above a heading anywhere in this system; the slate line sits beneath or beside the title, never above it as a decorative tag.

## Layout

The page is a vertical run of scenes in one hall, each scene a full-width stretch of dark with one lit gate in it. The content frame is `max-w-site` (1440px) with 20px gutters rising to 32px from md; scenes close with 64px of hall, 96px from md.

The gate re-frames per scene rather than sitting in a fixed centred column: plates take different widths and offsets — `lg:w-[93%]` (Operate), `lg:ml-auto lg:w-[95%]` (Experience), `lg:mx-auto lg:w-[90%]` (Meme), `lg:w-[84%]` (Skills), full width (Hero, Work, Contact) — so the composition registers to the lamp's throw axis, not to a neutral container. Every gate carries a hair of keystone (`perspective(2600px) rotateY(-0.5deg)`), the way a projected rectangle never lands perfectly square on a wall.

Inside a gate, padding is 24px/36px rising to 40px/56px from md. Rows within a scene are separated by hairline top or bottom rules at 16% of the ground's ink, never by a box. Measure is held explicitly per block (30–46ch for lede copy, 52–76ch for body). Controls are 48px tall; every interactive target clears a 44px minimum.

The top rail is sticky, 64px tall, and fades out through a gradient scrim over the hall rather than sitting on a solid bar. The scene strip is fixed to the bottom edge at every width and scales by font size (9px → 10.5px from sm) instead of wrapping or collapsing to a menu.

### Named Rules
**The Re-Framing Gate Rule.** The lit plate changes width, offset and throw per scene. A new scene inherits the gate vocabulary, not a previous scene's exact geometry — but it must sit on the lamp's side of the frame, matching its `data-lamp` position.

**The Unbroken Strip Rule.** The scene strip never wraps, never collapses into a hamburger, and never drops labels. It scales.

## Elevation & Depth

This system has no elevation in the material sense: nothing is lifted, stacked or floated above anything else. Depth is depth of field. A surface reads as near because it is lit and sharp; it recedes because the throw does not reach it. There is exactly one z-relationship that matters — inside the beam or outside it.

Box-shadow is used, but never to imply a raised card. It is used as **halation**: the light spill a genuinely luminous surface throws onto the dark around it. A plate carries three layers of it so it reads as a light source rather than a pale rectangle.

### Shadow Vocabulary
- **Plate halation** (`0 0 16px 0 rgb(var(--glow) / 0.3), 0 0 90px -8px rgb(var(--lamp) / 0.2), 0 24px 190px -24px rgb(var(--lamp) / 0.16)`): every lit gate. Edge bloom, near spill, far spill.
- **Dim halation** (`0 0 60px -10px rgb(var(--lamp) / 0.09)`): the quiet gate that catches only the edge of the throw.
- **Key glow** (`0 0 28px -4px rgb(var(--lamp) / 0.55)`): the primary control on hover. Hover is more light falling on a thing, never a lift.
- **Live bloom** (`0 0 8px 1px rgb(var(--signal) / 0.6)`): the 6px live marker in the hall only. On a plate the marker is flat.
- **Ring** (`inset 0 0 0 1px rgb(var(--ink) / 0.28)`): the quiet control's hairline. An inset ring on a control, not a container border.

### Named Rules
**The Enclosure-Never Rule.** No panels, cards, wells, seams or dividers-as-containers, anywhere. Hairline rules separate rows; they never close a shape around a region. A background fill that is neither the hall nor a lit plate is a card in disguise.

**The No-Recess Rule.** Nothing is inset. There are no wells and no inner shadows in this world except the quiet control's 1px ring. A field that regains a fill or an inset shadow has become a well and is wrong.

**The Hover-Is-Light Rule.** Interactive feedback is a change in how much light falls on a thing — a glow, a brightened fill, an ink shift. Never a translateY lift, never a new border appearing on hover.

## Shapes

Rectangles, hard-cornered. `borderRadius.DEFAULT` is set to `0` in the Tailwind config so every utility-rounded surface is square by default: plates, controls, fields, images, the strip. The one round form on the page is the 6px live marker (999px), plus the browser scrollbar thumb; a circle in this system means "live", so it is not available as decoration.

Lines are hairlines at 16% ink (`.rule-hall` at `rgb(var(--lit) / 0.16)`, `.rule-plate` at `rgb(var(--ink) / 0.16)`), applied on one edge at a time. A rule that appears on all four edges of something is a border, and borders are not part of this vocabulary.

The gate's keystone — a 0.5° Y rotation at 2600px perspective — is the only non-orthogonal geometry, and it is applied to lit plates only.

## Components

### Buttons
The key is the one thing in a scene that is filled with the lamp itself.
- **Shape:** square (0 radius), 48px tall, 24px horizontal padding, control type (uppercase, 0.055em).
- **Primary (`.key`):** lamp fill (#FFD49C) with hall-deep ink. One per scene.
- **Hover / Focus:** fill brightens to glow (#FFEFD6) with a 28px lamp glow, 220ms ease; active nudges 1px down. Focus is the 2px lamp outline at 3px offset, resolving to Leader Red Inked inside a plate.
- **Disabled:** lamp at 42%, no glow.
- **Quiet (`.key-quiet`):** transparent with a 1px inset ink ring at 28%; hover deepens the ring to 55% and washes 6% ink behind it.

### Inputs / Fields
A field is the lit ground itself, ruled underneath. The light tells you where to write.
- **Style:** transparent ground, ink text, a single 1px bottom rule at 30% ink. 48px tall, 14px horizontal padding, square.
- **Focus:** the bottom rule turns Leader Red Inked; caret and accent-color are the same red.
- **Error:** the message is set in Leader Red Inked beneath the field with `role="alert"`; the field itself is marked `aria-invalid`, not recoloured into a box.

### Navigation
- **Top rail:** sticky, 64px, no bar — a gradient scrim from hall to transparent. Wordmark in control type, location and a live dual-zone IST/CET clock in slate. The clock ticks under reduced motion too: it is information, not decoration.
- **Scene strip:** fixed to the bottom edge, opaque hall-deep with a hairline top rule, slate labels, 44px minimum targets. The active scene is lamp-coloured and carries the live mark; inactive scenes are lit-faint and hover to lit. Opaque by design — a translucent scrim over a lit plate would dim the ground its dark ink depends on.

### The Gate (signature)
The page's only light source and its only container-shaped thing, which is why it is not a container: it is a lit surface, not a box around content.
- **Lit (`.plate`):** plate fill, ink text, three-layer halation, a screen-blended hot centre and a multiply-blended falloff, both positioned from the lamp's real coordinates. Keystoned 0.5°.
- **Dim (`.plate-dim`):** hall-deep fill, lit text, a single weak spill, no falloff layer — the quiet passage that catches only the edge of the throw.
- **Behaviour:** `data-plate` opts a surface into per-frame falloff computation; `data-lamp="x y throw"` on the enclosing scene sets where the lamp stands for it.

### Motion
The lamp's travel is the page's one authored moment: 1100ms on position and 1400ms on throw, `cubic-bezier(0.22, 1, 0.36, 1)`. Around it sit three ambient effects — `drift` (dust in the beam, 62s linear, masked to the throw), `weave` (sub-pixel gate unsteadiness, 5.5s in 3 steps), and `flare` (a 900ms glow pulse at each scene change). There are no entrance animations and nothing fades in on scroll.

Under `prefers-reduced-motion: reduce`: the dust and weave stop (dust drops to 22% opacity), the flare is removed entirely, lamp travel is instant rather than animated (the lamp still repositions per scene, it just jumps) and the page renders fully lit and static, smooth scrolling is off — and the clock still ticks.

## Do's and Don'ts

### Do:
- **Do** set prose as dark ink on a lit plate. If a new surface needs a paragraph, it needs a gate.
- **Do** give every new scene a `data-lamp="x y throw"` and every lit surface a `data-plate`, so the falloff is computed from the real lamp instead of faked with a static gradient.
- **Do** carry rank on the width axis (74 / 80 / 92 / 88 / 100) before reaching for size.
- **Do** separate rows with a one-edge hairline at 16% ink (`.rule-hall` in the dark, `.rule-plate` on a plate).
- **Do** keep corners square (0 radius); reserve the 999px round form for the 6px live mark.
- **Do** make hover a change in light — a glow, a brighter fill, an ink shift at 220ms ease.
- **Do** keep the falloff multiply capped at 0.16 alpha; that value is what keeps Ink Faint legible in a plate's darkest corner.
- **Do** keep browser surfaces inside the palette: selection in lamp at 85%, caret and accent in Leader Red Inked, scrollbar thumb in lamp at 34% over hall-deep.
- **Do** keep the scene strip opaque and full-width at every breakpoint; scale it by font size rather than wrapping or collapsing it.
- **Do** ship content lit on arrival — reduced motion removes the flare and the drift, and the page must remain complete without them.

### Don't:
- **Don't** enclose anything. No panels, cards, wells, seams or dividers-as-containers; a fill that is neither hall nor plate is a card in disguise.
- **Don't** set light text on a dark ground behind a radial gradient and call it a plate. That is the exact failure this world is defined against.
- **Don't** introduce a second hue. Every colour must be the hall, the plate, their inks, or the lamp.
- **Don't** spend the signal red on anything but "live right now" or "this failed".
- **Don't** give `.slot` a fill, a full border or an inset shadow; it is a ruled line on the lit ground, not a well.
- **Don't** lift on hover or interaction. No translateY elevation, no shadow that implies a raised card; the only box-shadows in this system are halation, the key glow, the live bloom and the quiet control's ring.
- **Don't** put a kicker, eyebrow or label above a heading. Slate sits beneath or beside a title, never above it.
- **Don't** add a second type family or a display serif; and don't set prose in the mono face.
- **Don't** raise the plate falloff past 0.16 alpha or darken `--ink-faint` further — both trade legibility for mood.
- **Don't** add entrance animations or scroll-triggered reveals. The lamp travels; content does not.
- **Don't** lay a translucent scrim over a lit plate — it dims the ground the dark ink depends on.
