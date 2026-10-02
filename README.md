# Rehan Ali Portfolio

Responsive portfolio built with React, TypeScript, Vite, Tailwind CSS v3, and custom CSS. Components, sections, typed content data, and API calls are separated under `src/`.

## Run locally

```sh
npm install
npm run dev
```

Create a `.env` file from `.env.example` to connect project data to the NestJS API and configure EmailJS contact delivery:

- `VITE_API_URL=http://localhost:3000/api`
- `VITE_CONTACT_SERVICE_ID`
- `VITE_CONTACT_TEMPLATE_ID`
- `VITE_CONTACT_PUBLIC_KEY`

The contact form uses EmailJS in the browser and only shows success after EmailJS accepts the request. These values are public browser credentials; configure allowed origins and spam protection in EmailJS. Never put a private secret in a `VITE_` variable.

## Personalize

- `src/data/personal.ts`: verified public contact information.
- `src/data/`: project descriptions and verified `live` / `github` links, skills, and CV-derived experience.
- `src/App.tsx`: about copy, education details, and presentation.
- `public/documents/`: the supplied CV and cover letter PDFs, used by the Resume section's view and download actions.
- `index.html`: title, description, and Open Graph metadata.

Social and project links are omitted when empty. GitHub and project URLs remain hidden until verified URLs are provided.

## Build and deploy

```sh
npm run build
npm run preview
```

Deploy the `dist` output to any static host that supports Vite builds. Set `VITE_API_URL` and the three EmailJS values in the host's build settings. Build command: `npm run build`; output directory: `dist`.
