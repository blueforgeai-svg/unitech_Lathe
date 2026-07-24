# Uni-Tech Machines

Static marketing website for Uni-Tech Machines, a lathe and metalworking machinery manufacturer based in Rajkot, Gujarat, India (founded 1986). The site presents the company's product catalog (78 models across lathe, drilling, slotting, hydraulic press, bandsaw, shaping, and milling machines), company background, customer reviews, and a blog/knowledge base on machine buying, specs, and maintenance.

## Pages

- `index.html` — Home page: hero, product highlights, company overview.
- `about.html` — Company story, timeline, certifications (ISO 9001:2008), and values.
- `catalog.html` — Full product catalog (78 machines across 7 categories), driven by `js/machines-data.js`.
- `product.html` — Individual product detail page (specs, images, brochure links).
- `blog.html` — Blog/knowledge base index, driven by `js/blog-data.js`.
- `blog-post.html` — Single blog article template.
- `testimonials.html` — Customer reviews page.
- `contact.html` — Contact form and business details.

## Structure

- `css/site.css` — Site-wide styles.
- `js/machines-data.js` — Product database (categories, specs, pricing, images) used by the catalog and product pages.
- `js/blog-data.js` — Blog article content used by the blog pages.
- `js/ui.js` — Shared UI behavior (nav, interactions).
- `js/image-overrides.js` — Image source overrides.
- `img/` — Logos, product photos, and about/company images.

## View locally

This is a static site with no build step. Serve the folder with any static file server, for example:

```
python -m http.server 8000
```

Then open `http://localhost:8000/` in a browser.
