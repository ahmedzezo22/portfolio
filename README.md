# Ahmed AbdElaziz Mourad - Portfolio

Personal portfolio site built with Angular 19 (standalone components).

- Content lives in `src/app/data/portfolio.data.ts`
- Sections are in `src/app/sections/`
- Run locally: `npm install` then `npx ng serve`
- Production build: `npx ng build`

Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

Note: the photo and favicon are stored as base64 text in `assets-b64/` and decoded into `public/` by the deploy workflow. To run locally, decode them first:

    base64 -d assets-b64/ahmed-1.jpg.b64 > public/ahmed-1.jpg
    base64 -d assets-b64/favicon.ico.b64 > public/favicon.ico
