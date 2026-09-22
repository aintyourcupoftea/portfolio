# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** hiring managers and recruiters screening candidates for Google Cloud DevOps / SRE / platform-engineering roles. They arrive from a resume, LinkedIn or a search for the name and need to decide within a minute whether to start a conversation.
- **The site leads with Amit himself** (owner decision, 2026-09-22): the person is the protagonist of the first viewport; the work follows.
- **Secondary (confirmed):** engineering peers, including interviewers and future teammates, who read further to see how Amit thinks and what he actually built.
- Amit is based in Pune, India, and is open to remote and hybrid roles (stated in `contact.body`).

## Product Purpose

A single-page personal portfolio for Amit Gavali, GCP Cloud DevOps Engineer, at `https://amit-gavali.web.app`. It exists to turn a resume into a credible, scannable case for hiring him, and to give peers enough substance to judge the work.

Success is an inbound conversation: a message through the contact form (delivered via Web3Forms), a direct email, or a LinkedIn/GitHub follow-up. A resume download is a secondary success.

## Positioning

Hands-on GCP infrastructure experience inside a **regulated, high-availability securities clearing platform** (Deutsche Börse Group's C7-SCS, via Tata Consultancy Services), backed by the **Google Cloud Certified Professional Cloud DevOps Engineer** credential. The combination of production financial-market infrastructure, change-managed release into production, and a current Google Cloud professional certification is the claim a generic "cloud engineer" portfolio could not truthfully copy.

Career stage is early (B.E. 2024, DevOps since May 2025). The site does not pretend otherwise; it leads with concrete, quantified work rather than years.

## Operating Context

- Content is resume-derived and lives entirely in `src/content/profile.js`; components only lay it out. Editing workflow is documented in `README.md`.
- The resume PDF at `public/Amit_Gavali_Resume.pdf` is the companion document and must stay consistent with the page.
- Stack: React 18 + Vite + Tailwind 3, Framer Motion, lucide-react, react-hook-form. Deployed to Firebase Hosting on every push to `main` via GitHub Actions; PR previews are built too.
- Dev command: `npm run dev` on port 5173 (`.claude/launch.json`).
- Single dark colour scheme (owner decision, 2026-09-22, with the Mission Control redesign): the site is dark-only and declares `color-scheme: dark`; the earlier light/dark toggle was retired with the incumbent world.
- Two external runtime dependencies: Web3Forms (contact delivery, public access key committed in `profile.js`) and `https://memefetchingredditapi.onrender.com/` (live meme image; a free-tier Render service that can be slow or cold-start).

## Capabilities and Constraints

- Sections in order (Mission Control build, 2026-09-22): console rail (nav with live IST/CET clock), Hero (operator plate + systems wall board), Consoles (five disciplines; replaces the retired Metrics section), Mission log (experience), Flight records (work), Downlink (meme feed), Systems board (skills), Certification and education, CAPCOM (contact), footer. All content is static except the clock, the meme feed and the contact form.
- **Employer and client naming is binding.** TCS, Deutsche Börse Group and the C7-SCS securities clearing platform are named publicly by the owner's decision; future work must not strip, soften or reword them. `profile.js` keeps a documented escape hatch (blank `company` / `client`) for a future change of circumstances; that is the owner's call, not a design decision.
- **The r/ProgrammerHumor meme section is permanent.** It was removed and deliberately restored; it survives any redesign. It shows personality and is the one live, public side project (MemeFetchingRedditAPI). Its refresh control and failure state must remain functional.
- Contact form must keep working through Web3Forms; the honeypot / validation / sent / failed states are product behavior, not decoration.
- Client work (VPA right-sizing, trade reconciliation, DevOps automation APIs, the post-provisioning framework) is internal with **no public repository**. Future work must not add "view code" or "live demo" links to it.
- Public repositories that may be linked (verified 2026-09-22 on github.com/aintyourcupoftea): `SpaceWarden` (Go disk-space scanner; the public repo is a standalone CLI, the client-side Filestore governance service is not public), `BharatLeafLens` (Flutter, on-device TFLite/PyTorch plant identification; published in IJRPR Vol. 5 Issue 5, 2024), `PDF-Signer` and `pdf-signer-flask` (Python PDF signing API), `MemeFetchingRedditAPI`.
- **Peer depth comes from written substance, not links.** The confirmed secondary audience (engineering peers) wants to see how Amit thinks, but the client work cannot be linked or screenshotted. Any request to serve peers better must be met with more precise descriptions of the problem, mechanism and outcome in `profile.js`, never with repo links, mock screenshots or invented demos.
- Terminology to preserve: GCP / Google Cloud, GKE, Compute Engine, Filestore, Terraform Enterprise, Ansible, OpenShift, Vertical Pod Autoscaler (VPA), mutual TLS, ELK Stack, Cloud Monitoring, SDLC environments, change-managed release, hotfix promotion.
- Not present: analytics, blog, multi-page routing. Whether any is planned was not asked.
- Undecided: the certification date reading (see Evidence on Hand).

## Brand Commitments

- Name: **Amit Gavali**. Title: **GCP Cloud DevOps Engineer**. Site: `amit-gavali.web.app`.
- Voice (current, confirmed by content): direct, factual, quantified, no buzzword padding; a single line of humour is allowed in the meme section only.
- Assets: `public/avatar.jpg` (square photo, also the OG/Twitter image), `public/favicon.svg` ("AG" monogram), `public/Amit_Gavali_Resume.pdf`.
- Links: GitHub `aintyourcupoftea`, LinkedIn `aintyourcupoftea`, email `amitbabangavali@gmail.com`.

## Evidence on Hand

- **Figures (from the resume, real):** 150+ Compute Engine instances standardised via a post-provisioning framework; 3 TB of Filestore capacity reclaimed by SpaceWarden; 100% reconciliation accuracy of decrypted trade messages against PostgreSQL. **The owner rejects these as a headline proof device** (decided 2026-09-22): they may appear inside the narrative of the work, never as a big-number "metrics" slab. The argument is competence, not superlatives.
- **Resume PROJECTS section (real, currently absent from the site):** PDF Digital Signer API (Python/Flask REST service that merges and digitally signs PDFs); Bharat Leaf Lens (cross-platform mobile app, TensorFlow Lite and PyTorch on-device image recognition, published in IJRPR Vol. 5 Issue 5, 2024).
- **Additional resume highlights not yet on the site:** RHEL 9 / Fedora fleet hardening (TLS trust-chain, internal repository and dependency failures); Roll-on automation of associate onboarding/offboarding with scripted IAM provisioning and PR creation.
- **Certification:** Google Cloud Certified Professional Cloud DevOps Engineer, verifiable at `https://www.credly.com/badges/8ed5b25a-8643-4ee0-9a83-5a896b2306cf/`. `profile.js` records `date: 'Sep 2026'`; it was added on 2026-09-22 in the resume-based redesign and is read here as the **issue date** (inferred, not confirmed). If it is instead an expiry, the "current certification" claim in Positioning lapses and the owner must update `certification.date` and the resume.
- **Education:** B.E. Computer Engineering, PES's Modern College of Engineering, Pune, 2024, CGPA 8.47.
- **Award:** Certificate of Appreciation from Deutsche Börse Group. This is a stated fact in `experience[0].note`; no scan or image of the certificate is on hand, so it stays a one-line claim, not a showcased artifact.
- **Public code:** only `https://github.com/aintyourcupoftea/MemeFetchingRedditAPI` and the GitHub profile.
- **Absences future work must not fabricate:** no testimonials or recommendation quotes, no client logos cleared for use, no case-study write-ups, no screenshots of internal systems, no public repos for client work, no blog posts, no talks or press.

## Product Principles

1. **Competence over superlatives.** Every claim traces to the resume, the Credly badge, or a public repo, but the argument is the breadth and precision of what Amit operates and how he thinks, not outcome figures. The owner's words: "show that I am capable, competent, not that I did something no one else could." No metrics slab, no brag numbers as headlines.
2. **Scannable in sixty seconds, deep on demand.** A recruiter must get name, role, certification and employer from the first viewport; a peer must be able to read highlights, consoles and skills without leaving the page.
3. **The regulated-finance context is the differentiator.** Deutsche Börse / C7-SCS, change-managed production release and mTLS-secured workloads are what set this apart from generic cloud portfolios; keep them visible and named.
4. **One page, one owner, one file.** Content stays in `profile.js` and matches the PDF resume; the site must remain trivial for Amit to update when he changes jobs or renews a certification.
5. **Personality is earned, not sprinkled.** The meme section is the deliberate, bounded place for humour; everything else stays professional.

## Accessibility & Inclusion

No formal standard was set. Current implementation honours `prefers-reduced-motion` (Framer Motion `useReducedMotion` plus CSS; every entrance renders fully lit and static), semantic sections with ids for in-page navigation, labelled form fields with `role="alert"` errors, `aria-live` status lines, and `lang="en"`. Future work must not regress these. The site is dark-only by owner decision; `prefers-color-scheme: light` is not honoured. Audience is global English-speaking recruiters; no localisation is planned.
