# Deployment Guide

This guide provides the standard configuration settings required to deploy this Vite + React application to popular hosting platforms such as Netlify, Vercel, Cloudflare Pages, or Firebase Hosting.

## Build Settings

When configuring your deployment project, use the following settings:

* **Base directory:** `/` (or leave empty/root)
* **Build command:** `npm run build`
* **Publish directory:** `dist`

## Platform-Specific Notes

### Netlify
Netlify typically auto-detects Vite projects. If it doesn't, plug in the settings above. If you ever add client-side routing (like React Router), create a `public/_redirects` file with the following content to prevent 404 errors on refresh:
```text
/*    /index.html   200
```

### Vercel
Vercel should automatically detect this as a Vite project and pre-fill the correct settings. If you add routing later, you can add a `vercel.json` in the root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### GitHub Pages
If deploying to GitHub Pages without a custom domain, you will need to update the `vite.config.ts` to include a `base` path property matching your repository name (e.g., `base: '/my-repo-name/'`).

## Environment Variables
If you introduce any secret keys (unlikely for a static portfolio, but possible if integrating third-party APIs), make sure to add them to your host's Environment Variables settings panel before triggering a build.
