---
name: Amit Gavali Portfolio
description: A dark flight-operations room where the operator stands in front of the wall board that polls his systems and every one answers GO.
colors:
  room: "#0E1211"
  console: "#161C1A"
  well: "#090C0B"
  seam: "#2C3632"
  seam-strong: "#42504A"
  lamp: "#ECE9DE"
  lamp-soft: "#BEC4BC"
  lamp-dim: "#848E88"
  go: "#5CE096"
  go-ink: "#090C0B"
  legend: "#E9B44C"
  fault: "#EF6A5C"
typography:
  display:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(3.75rem, 5.4vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.04em"
  title:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.03em"
  legend:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0.04em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  body-small:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  control:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.06em"
  label:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.08em"
  readout:
    fontFamily: "Martian Mono Variable, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
  readout-small:
    fontFamily: "Martian Mono Variable, ui-monospace, monospace"
    fontSize: "10.5px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0.02em"
rounded:
  control: "3px"
  panel: "6px"
  lamp: "999px"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "32px"
  3xl: "40px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.go}"
    textColor: "{colors.go-ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-outline:
    backgroundColor: "{colors.console}"
    textColor: "{colors.lamp}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-icon:
    backgroundColor: "{colors.room}"
    textColor: "{colors.lamp-dim}"
    rounded: "{rounded.control}"
    padding: "0"
    size: "44px"
  text-link:
    textColor: "{colors.lamp-soft}"
    typography: "{typography.label}"
    padding: "0"
    height: "44px"
  input:
    backgroundColor: "{colors.well}"
    textColor: "{colors.lamp}"
    typography: "{typography.body-small}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "48px"
  panel:
    backgroundColor: "{colors.console}"
    textColor: "{colors.lamp}"
    rounded: "{rounded.panel}"
    padding: "20px 32px"
  well:
    backgroundColor: "{colors.well}"
    textColor: "{colors.lamp-soft}"
    rounded: "{rounded.panel}"
    padding: "12px 20px"
  wallboard-row:
    backgroundColor: "{colors.well}"
    textColor: "{colors.lamp-soft}"
    typography: "{typography.readout}"
    padding: "15px 20px"
  wallboard-row-current:
    backgroundColor: "{colors.well}"
    textColor: "{colors.lamp}"
    typography: "{typography.readout}"
    padding: "15px 20px"
  mission-clock:
    backgroundColor: "{colors.well}"
    textColor: "{colors.go}"
    typography: "{typography.readout}"
    rounded: "{rounded.control}"
    padding: "6px 12px"
  record-row:
    backgroundColor: "{colors.console}"
    textColor: "{colors.lamp}"
    padding: "28px 32px"
  lamp:
    backgroundColor: "{colors.go}"
    rounded: "{rounded.lamp}"
    size: "7px"
  lamp-amber:
    backgroundColor: "{colors.legend}"
    rounded: "{rounded.lamp}"
    size: "7px"
---

# Design System: Amit Gavali Portfolio

## Overview

**Creative North Star: "Mission Control"**

The site is a dark flight-operations room. The operator stands in the foreground; the platform he keeps up is the wall board behind him, and each system he runs answers GO in turn. A control room says competence without a superlative: every discipline has a console, every console has a callsign, every row has a readout. The world refuses the category defaults it replaced (a centred name over a glow, skill chips, project cards, a big-number metrics slab) and the retired white resume page.

The ground is grey-green in three depths, never pure black: the room farthest back, console panel faces on it, recessed display wells sunk into those. Ink is warm lamp white in three steps. Light is scarce and meaningful: one phosphor green is the live signal and appears only where something is actually running or GO; one backlit amber marks the single current item, ON CONSOLE; one fault red is for errors and lost signal. Density is high but ruled: sections are panels, panels hold ruled rows, rows end in a right-hand mono readout column.

Structure is panel joinery rather than cards. Every surface meets its neighbour at a 1px seam; panel faces carry a hairline of light on their top edge and a dark edge beneath; wells carry an inset top shadow so a screen reads as set into the console. Motion is lamp-on: the wall board rows light in sequence on load, a legend catches twice before it holds, and the two panels that earn an entrance power on with a brightness overshoot. Everything else is lit on arrival.

**Key Characteristics:**
- Dark-only: one scheme, `color-scheme: dark`, no light theme and no toggle.
- Three-depth grey-green ground (room, console, well) with 1px seams; no cards, no floating surfaces.
- Phosphor green appears only on live states; amber appears only on the one current marker.
- Three typefaces with strict jobs: Barlow Condensed tracked caps for display and controls, Barlow for prose, Martian Mono for every readout.
- One authored motion moment (the GO poll) plus two PowerOn entrances; hover brightens, never lifts.
- The person leads the first viewport; the work follows as ruled records, never as a metrics slab.

## Colors

A console-grey palette with a green cast, lit by lamp-white ink and pierced by exactly one phosphor, one amber and one fault red. Tokens are stored as RGB channel triplets on `:root` (`--room`, `--console`, and so on) so Tailwind can apply alpha; the hex values in the frontmatter are their conversions.

### Primary
- **Phosphor Green** (`go`): the live signal. Used on the GO legend and its lamp on wall-board rows once they light, the ticking mission-clock digits, the SIGNAL LOCKED and CHANNEL OPEN readouts, the STAFFED lamps on the consoles, the `.phosphor` text bloom, text-link and contact-channel hover, the focus ring, the caret, and text selection. It is also the fill of the one primary button per view. Its ink is **Go Ink** (`go-ink`), the same value as the well, so the button reads as a lit key with dark engraving.

### Secondary
- **Backlit Amber** (`legend`): the single current marker. It appears as ON CONSOLE on the hero plate and the last wall-board row, on the active period in the mission log, and as the transitional ACQUIRING / SENDING states of the downlink and the contact channel. Carried by `.legend-amber` text and `.lamp-amber`.

### Tertiary
- **Fault Red** (`fault`): form validation errors, NO SIGNAL on the downlink and FAULT on the contact channel. Nothing else.

### Neutral
- **Room** (`room`): the page ground, the sticky rail (at 90% with backdrop blur), the icon-button face and the scrollbar track.
- **Console** (`console`): the face of every section panel, the outline button and the hero lede plate.
- **Well** (`well`): recessed displays: the wall board, the mission clock, the operator plate, the downlink monitor and every text field.
- **Seam** (`seam`): all panel borders, dividers between rows and between grid cells, the rail's bottom rule.
- **Seam Strong** (`seam-strong`): the heavier stroke on controls: outline buttons, text fields, the scrollbar thumb.
- **Lamp White** (`lamp`): primary ink: headings, the display name, row titles, body copy in the mission log, control text, the callsign in the rail.
- **Lamp Soft** (`lamp-soft`): secondary ink: descriptive prose, nav links, labels, the SYSTEMS POLL readout, a lit wall-board system name that is not current.
- **Lamp Dim** (`lamp-dim`): tertiary ink: readouts at rest, tool lists and tags, domains, notes, placeholders, the highlight bullet squares, unlit poll legends.

### Named Rules
**The Live-Only Phosphor Rule.** Phosphor green means something is running right now. It lights a GO row, a ticking clock, a LOCKED signal, an OPEN channel, a STAFFED lamp, a focused field, or the one primary action; it never colours a heading, an icon at rest, a decorative rule or a static label (a text link and its arrow may turn phosphor together on hover).

**The One Amber Rule.** Amber is the current marker. Exactly one thing on the board is ON CONSOLE, and amber appears there, on the active mission-log period and on transitional states (ACQUIRING, SENDING) that are about to resolve to phosphor. It is never a second accent.

**The Dark-Only Rule.** There is one scheme. The ground is grey-green (never pure black) and `color-scheme: dark` is declared; no `prefers-color-scheme: light` branch exists and none should be added.

## Typography

**Display Font:** Barlow Condensed (with Barlow, system-ui), weights 500 and 600 only
**Body Font:** Barlow (with system-ui), weights 400 and 500 only
**Label/Mono Font:** Martian Mono Variable (with ui-monospace)

**Character:** Engraved console legends. Everything set in Barlow Condensed is uppercase and tracked, from the display name to the smallest form label, so headings, controls and labels read as one family of plates. Barlow carries the prose plainly. Martian Mono is the instrument: wide, tabular (`font-feature-settings: 'ss01', 'tnum'` on the body), and used for every value the room reports. All four faces are self-hosted via Fontsource; no system display face is used.

### Hierarchy
- **Display** (600, `clamp(3.75rem, 5.4vw, 5.5rem)` at lg; `clamp(3.5rem, 13vw, 5.25rem)` below, line-height 0.9, tracking 0.01em, uppercase): the operator's name, set over the portrait at the bottom of the plate. Used once.
- **Headline** (600, 32px desktop / 26px mobile, line-height 1, tracking 0.04em, uppercase): panel headings in the legend strip (CONSOLES, MISSION LOG, FLIGHT RECORDS, CAPCOM). The CAPCOM hook runs larger (44px / 34px, line-height 0.95) and the downlink and credential titles sit between (30px / 26px, line-height 0.95).
- **Title** (600, 24px desktop / 22px mobile, line-height 1, tracking 0.03em, uppercase): row titles inside a panel: a console discipline, a flight record, a mission-log role (26px / 24px). Systems-board group names are the small step (19px, tracking 0.04em).
- **Legend** (500, 24px desktop / 22px mobile, line-height 1.25, tracking 0.04em, uppercase): the role line under the display name. Wall-board system names use the same weight at 19px / 17px with tracking 0.01em.
- **Body** (400, 17px desktop / 16px mobile, line-height 1.625): the mission-log summary and the hero lede and contact body, at 58 to 68ch measure.
- **Body Small** (400, 16px desktop / 15px mobile, line-height 1.625): console briefs, record descriptions, skill lists, highlights (15px, line-height 1.5), at 62 to 70ch. Notes and captions step to 14px or 13px in Lamp Dim.
- **Control** (600, 17px, tracking 0.06em, uppercase): button text. The rail callsign is the same weight at 17px with 0.08em tracking.
- **Label** (500, 15px, tracking 0.08em, uppercase): nav links, form labels, text links (0.06em), footer links (14px); the open mobile menu uses 18px.
- **Readout** (Martian Mono, 12px desktop / 11px mobile, tracking 0.02em, `white-space: nowrap`): every value in the legend strip and the right-hand column: counts, periods, positions, the clock, GO and ON CONSOLE (11px, 500, tracking 0.08em), SIGNAL and CHANNEL states, form errors, the contact channel labels. Uppercase by content, not by CSS.
- **Readout Small** (Martian Mono, 10.5px, tracking 0.02em, line-height 1.625): tool lists under a console brief, tags under a record, the domain column on the wall board, the location beside the callsign.

### Named Rules
**The Readouts Are Never Sentences Rule.** Martian Mono carries values: a count, a timestamp, a callsign, a period, a state word, a comma-separated tool list. If it has a verb, it is prose and is set in Barlow. The one mono line that approaches a sentence (the certification name on the hero plate) is a credential title, not copy.

**The Engraved Caps Rule.** Barlow Condensed is never set in sentence case. Every use is uppercase with tracking between 0.01em (display) and 0.08em (labels), tightening as the size grows.

## Layout

A single 1360px measure (`max-w-site`) centred with 16px gutters on mobile and 32px from md (768px). Every section is a `Panel`: a full-width console face inside that measure, stacked with 24px between panels on mobile and 32px from md (`pt-6 md:pt-8`); the first panel after the hero sits 56px / 96px down. The footer follows a 56px / 96px gap.

The hero is a 12-column grid at lg (1024px): the operator plate takes 5 columns and the wall board plus lede plate take 7, with 40px column gap (48px at xl) and a minimum height of `100vh - 64px`. Below lg the plate stacks over the board at a 520px / 600px minimum height.

Inside a panel the legend strip is a flex row (heading left, readout right, baseline aligned, 20px / 32px horizontal padding, 16px / 20px vertical). Rows are ruled by 1px seam dividers, padded 20px / 32px horizontally and 24px to 36px vertically, and are grids: a fixed left column (260px at md, 300px or 320px at lg) for the title, a fluid middle for prose, and at lg only a right-hand readout column (200px or 260px) that is right-aligned and stacked. Two-column splits (Systems board, Credentials) happen at md with a seam between the cells; the CAPCOM split (5 / 6 of 11 columns, seam between) and the Downlink split (5 / 7 of 12) happen at lg. Wall-board rows are two-column below lg (system with the domain beneath it, then the legend) and three-column at lg (168px domain, system, legend).

The console rail is sticky at the top, 56px tall on mobile and 64px from md, with the callsign and location left, five section links from lg, and the mission clock right from sm (640px). Below lg the links collapse behind a 44px icon button into a stacked menu that also carries the clock below sm. In-page anchors land 80px below the top so the rail never covers a heading.

## Elevation & Depth

Depth is tonal and inset: the three ground tones do the work, and shadows exist only as joinery. A panel face carries a 1px hairline of light along its top edge, a 1px dark edge beneath and a wide, low-opacity drop that only reads at the bottom; a well carries an inset top shadow so its contents sit below the console surface. Nothing floats or lifts: hover changes brightness or border colour, never elevation, and pressing a control nudges it down by 1px.

The only glows are light sources: the 7px indicator lamp's bloom and the text bloom on phosphor and amber legends. They signal a lit state, never decorate a surface.

### Shadow Vocabulary
- **Panel face** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.045), 0 1px 0 rgb(0 0 0 / 0.55), 0 18px 40px -28px rgb(0 0 0 / 0.9)`): every `.panel`: section panels, the hero lede plate.
- **Recessed well** (`box-shadow: inset 0 1px 0 rgb(0 0 0 / 0.6), inset 0 10px 24px -12px rgb(0 0 0 / 0.9), 0 1px 0 rgb(44 54 50 / 0.6)`): every `.well`: the wall board, operator plate, clock, downlink monitor, text fields.
- **Lamp bloom** (`box-shadow: 0 0 6px 1px rgb(92 224 150 / 0.55)`, amber variant `rgb(233 180 76 / 0.5)`): the 7px indicator lamp only.
- **Phosphor bloom** (`text-shadow: 0 0 12px rgb(92 224 150 / 0.45)`, amber variant `rgb(233 180 76 / 0.4)`): live text legends only.

### Named Rules
**The Panel Joinery Rule.** Surfaces are joined, not stacked. A panel sits on the room with a seam and a top hairline; a well sits inside a panel with an inset shadow. There are no cards, no floating containers and no hover lift anywhere.

**The One Authored Motion Rule.** The page has one composed moment: the GO poll, where wall-board rows lamp on 150ms apart starting 700ms after load (a 520ms opacity and brightness overshoot on `cubic-bezier(0.16, 1, 0.3, 1)`) and each legend flickers on (420ms, stepped). The hero blocks fade up 14px over 0.8s on the same ease, staggered 0.05s to 0.4s. Only two blocks power on when scrolled into view (the consoles list and the downlink monitor: 0.7s, brightness 0.5 to 1.6 to 1, once, at 30% visibility). Control transitions are 200ms brightness, background or border changes. Under `prefers-reduced-motion` every entrance renders fully lit and static and the clock still ticks.

## Shapes

Rectilinear and slightly eased. Controls (buttons, fields, the clock, the icon button) use a 3px radius; panels, wells and the operator plate use 6px; the scrollbar thumb also uses 6px. A 4px `md` step exists in the config but no shipped surface uses it. Every border is 1px: Seam for surfaces and dividers, Seam Strong for controls. The indicator lamp is a fully round 7px dot with bloom; the highlight bullet is a 6px square with a 1px radius in Lamp Dim. There is no clipping, no diagonal, no pill except the lamp.

## Components

The controls feel like console keys and lamps: flat faces, engraved caps, a brightness change when touched.

### Buttons
- **Shape:** eased rectangle (3px), 48px tall, 20px horizontal padding, 10px gap between icon and text, Control type (Barlow Condensed 600, 17px, 0.06em, uppercase).
- **Primary:** Phosphor Green face with Go Ink text. One per view: START THE SEQUENCE under the hero, ANOTHER ONE on the downlink, SEND MESSAGE on CAPCOM. Hover brightens to 110%; disabled drops to 60% opacity and stops brightening.
- **Outline:** Console face, 1px Seam Strong border, Lamp White text. Hover raises the border to Lamp Dim and brightness to 125%. DOWNLOAD RESUME.
- **Icon button:** 44px square, 3px radius, 1px Seam border, Lamp Dim glyph (Lucide, 18px, 1.75 stroke) that turns Lamp White on hover. The mobile menu toggle.
- **Active / Focus:** every control nudges down 1px on press; focus is a 2px Phosphor outline offset 3px.
- **Text link:** Label type in Lamp Soft with a 14px arrow-up-right glyph, 44px minimum hit height, turns Phosphor on hover. Used for outbound links (Source on GitHub, View credential, Standalone Go scanner on GitHub).

### Panel (Cards / Containers)
- **Corner Style:** 6px.
- **Background:** Console, with the panel-face shadow.
- **Border:** 1px Seam all round; a 1px Seam rule under the legend strip and between rows.
- **Legend strip:** heading left in Headline type, a mono readout right in Lamp Dim (a count or state: `5 POSITIONS · ALL STAFFED`, `6 RECORDS`, `SIGNAL LOCKED`, `CHANNEL OPEN`), baseline aligned, wrapping on narrow screens.
- **Internal Padding:** 20px horizontal on mobile, 32px from md; rows 24px to 36px vertical.
- **Well variant:** a recessed display inside a panel or the hero: Well background, 1px Seam border, 6px radius, the well shadow, and its own smaller legend strip (16px / 20px horizontal, 10px to 12px vertical) with Lamp Soft readout left and Lamp Dim readout right.

### Inputs / Fields
- **Style:** a well: Well background, 1px Seam Strong border, 3px radius, 48px tall (textarea 5 rows, 12px vertical padding, vertically resizable), 14px horizontal padding, Barlow 15px (16px on mobile so iOS does not zoom) in Lamp White, placeholder in Lamp Dim.
- **Label:** Label type in Lamp Soft above the field, 8px gap.
- **Focus:** border turns Phosphor; caret and accent colour are Phosphor.
- **Error:** a mono 11px line in Fault Red beneath the field with `role="alert"`; `aria-invalid` on the field. A status line under the submit button reports sent or failed in Barlow 14px.

### Navigation
- **Style:** the console rail: sticky, Room at 90% with backdrop blur, 1px Seam bottom rule, 56px / 64px tall. Callsign in Barlow Condensed 600 17px 0.08em Lamp White with the location beside it in mono 10.5px Lamp Dim.
- **Links:** Label type in Lamp Soft, 28px apart, turning Lamp White on hover; visible from lg. No active-state marker.
- **Mobile:** below lg the links fold into a Room-coloured menu of 18px labels with 12px vertical padding, opened by the icon button; the clock moves into the menu below sm.
- **Footer:** the rail's mirror: callsign and role left, three footer links and a second mission clock right, above a 1px Seam top rule.

### Mission Clock (signature)
A well the size of a readout: 3px radius, 1px Seam border, 6px by 12px padding, mono 11px. Two zones (IST, CET) with the zone label in Lamp Dim and the digits in Phosphor with bloom, tabular so they do not jitter; ticks every second, including under reduced motion.

### Wall Board Row (signature)
A ruled row inside the SYSTEMS POLL well: domain in mono 10.5px Lamp Dim (168px column at lg, folded under the system name below), the system in Barlow Condensed 500 19px, and a right-hand legend in mono 11px 500 0.08em. Unlit the row sits at 25% opacity with `····` in Lamp Dim; lit it plays lamp-on, and the legend shows a 7px lamp and GO in Phosphor with the flicker-on legend. The one current row uses Lamp White for the system and the amber lamp with ON CONSOLE in Backlit Amber.

### Record Row (signature)
The ruled row every list panel uses (Consoles, Mission log, Flight records): 1px Seam dividers, title in Title type left, prose in Lamp Soft with a mono tool list or tag list in Lamp Dim beneath, and a right-hand column of readouts at lg (context in Lamp Soft, then a state such as `STAFFED` with a lamp, `CLIENT WORK · NO PUBLIC CODE`, or a text link). Client work never carries a link.

### Indicator Lamp (signature)
A 7px round dot with a 6px bloom, Phosphor by default and Backlit Amber for the current marker, always inline with the legend it belongs to (`STAFFED`, `GO`, `ON CONSOLE`) and always `aria-hidden`.

## Do's and Don'ts

### Do:
- **Do** keep the three ground tones in order: Room behind, Console panels on it, Well recesses inside them, every join a 1px Seam.
- **Do** put a mono readout at the right of every legend strip and at the right of every list row at lg; it holds a value (count, period, state, callsign), never a sentence.
- **Do** reserve Phosphor Green for live states and the one primary button per view, and Backlit Amber for the single current marker or a transitional state about to resolve.
- **Do** set every Barlow Condensed string uppercase and tracked, tighter as it gets larger (0.01em display, 0.04em headings, 0.08em labels).
- **Do** make hover a brightness or colour change (110% / 125% brightness, border to Lamp Dim, text to Phosphor) and press a 1px downward nudge.
- **Do** render every entrance fully lit and static under `prefers-reduced-motion`, and keep the clock ticking.

### Don't:
- **Don't** add a light theme, a theme toggle or a `prefers-color-scheme: light` branch; the room is dark-only and declares `color-scheme: dark`.
- **Don't** use cards, floating containers or hover lifts, and don't add drop shadows beyond the panel-face and well-recess vocabulary; depth is joinery, not stacking.
- **Don't** colour a heading, an icon at rest, a rule or a static label in Phosphor Green, and don't introduce a second accent beyond amber and fault red.
- **Don't** set prose in Martian Mono or set Barlow Condensed in sentence case.
- **Don't** add a metrics slab, big-number counters or superlative headlines; figures live inside the lines of a record.
- **Don't** author new entrance choreography or scroll-triggered motion beyond PowerOn on a display that earns it; the GO poll is the page's one composed moment.
- **Don't** use pure black or a stock Tailwind radius (8px and up); the ground is grey-green and the only radii are 3px and 6px.
