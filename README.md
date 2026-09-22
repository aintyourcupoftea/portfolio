# amit-gavali.web.app

Personal portfolio. React + Vite + Tailwind, deployed to Firebase Hosting on every push to `main`.

## Editing content

Everything on the page (name, roles, projects, skills, links) lives in
[`src/content/profile.js`](src/content/profile.js). Edit that file; the components only lay it out.

- **Changed jobs?** Update the first entry in `experience`. To hide the employer but keep the work, blank out `company` and `client`.
- **New resume?** Replace `public/Amit_Gavali_Resume.pdf`.
- **New photo?** Replace `public/avatar.jpg` (square, 1000px or larger; used for link previews) and regenerate `public/operator.jpg`, the cropped night-graded portrait the hero uses (its ImageMagick recipe is embedded in the JPEG comment: `magick identify -format '%c' public/operator.jpg`).

## Running locally

```bash
npm install
npm run dev
```

`npm run build` produces `dist/`, which is what Firebase serves.
