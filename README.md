# AURA Salon & Academy — React + Vite

Responsive React website for AURA Salon & Academy.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Free hosting on GitHub Pages

1. Create a **public** GitHub repository named `aura-salon-academy`.
2. Upload this project and push the `main` branch.
3. In GitHub: **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. The included `.github/workflows/deploy.yml` will build and publish the site automatically.
6. Your site will be available at:
   `https://YOUR-GITHUB-USERNAME.github.io/aura-salon-academy/`

If you choose a different repository name, change the `base` value in `vite.config.js` to `'/YOUR-REPOSITORY-NAME/'` before pushing.
