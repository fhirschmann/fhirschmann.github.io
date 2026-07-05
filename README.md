# fhirschmann.github.io

Personal website of Fabian Hirschmann, built with [Astro](https://astro.build).

## Development

```sh
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static build to dist/
```

## Deployment

Pushing to `master` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site and deploys it to
GitHub Pages. The repository's Pages source must be set to
**GitHub Actions** (Settings → Pages → Build and deployment).
