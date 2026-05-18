# UniTech Machines Website - Cloudflare Pages Deployment

## Quick Deploy Options:

### Option 1: Direct Upload (Easiest)
1. Go to: https://pages.cloudflare.com
2. Sign in / Create free account
3. Click "Create a project"
4. Select "Direct Upload"
5. Drag & drop the entire `UnitechLathe` folder
6. Deploy!

Your site will be live at: `your-project.pages.dev`

### Option 2: GitHub Integration
1. Push this folder to a GitHub repo
2. Go to https://pages.cloudflare.com
3. Select "Import project from GitHub"
4. Connect your repo
5. Deploy automatically on every push

## Build Settings (if needed):
- **Build command:** (leave empty - pure static site)
- **Build output directory:** `/` (or `.`)
- **Environment variables:** (none needed)

## Custom Domain:
After first deploy, you can add your custom domain in Cloudflare Pages dashboard.

## Local Testing:
To test locally before deploying:
```bash
# Using Python
python -m http.server 8000

# Then open: http://localhost:8000
```

## Files Ready for Deployment:
```
UnitechLathe/
├── index.html          (Home page)
├── catalog.html        (Product catalog)
├── product.html        (Product detail page)
├── about.html          (Company info)
├── contact.html        (Contact page)
├── testimonials.html   (Customer reviews)
├── review.html         (Internal review tool)
├── css/                (Stylesheets)
├── js/                 (JavaScript files)
├── img/                (Images)
└── sitemap.xml         (SEO sitemap)
```