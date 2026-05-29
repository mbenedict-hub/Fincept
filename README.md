# Fincept Website

This repository contains a polished static website for **fincept.doozy247.net** with:

- Home page
- Customer-facing dashboard with realistic financial sample data
- Company analysis page
- FAQ page
- Privacy Policy page
- Terms & Conditions page
- Admin dashboard for content management in static demo mode
- GitHub Pages deployment workflow
- Custom domain `CNAME` file for `fincept.doozy247.net`
- `robots.txt`, `sitemap.xml`, and `404.html`

## Competitive advantage added

The strongest differentiator added to the site is **Conviction Journal™**.

Instead of stopping at charts, screeners, or company data, the product now records:

- why a position was opened
- the catalysts expected to drive upside
- the assumptions embedded in valuation
- the trigger that would invalidate the thesis

This creates a more memorable and sticky workflow than many finance research websites that focus primarily on discovery and monitoring.

## Deployment

The repository includes `.github/workflows/deploy-pages.yml` for automatic GitHub Pages deployment on pushes to `main`.

### Custom domain

The repository is prepared for:

- `fincept.doozy247.net`

### Important launch note

GitHub Pages must be enabled for the repository, and DNS must point the domain to GitHub Pages before the custom domain will resolve publicly.

If the repository remains private on a GitHub plan that does not support Pages for private repos, publishing will be blocked until either:

1. the repository is made public, or
2. the plan supports GitHub Pages for private repositories.
