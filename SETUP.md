# Theme Studio — Publishing Workflow

The Studio lets you tweak the site's look (colors, fonts, surface, logo,
heading weight, corner radius) live in your browser.

## How "Publish to live site" works

1. **Visit any page with `?customize`** (e.g. `https://unitechmachines.in/?customize`).
2. The Theme Studio gear icon appears bottom-right. Open it and tweak.
3. Click **Save** to keep the tweaks in your own browser (preview only —
   other visitors don't see them).
4. When you're happy, click **✨ Publish to live site**.
   - A modal opens with a settings summary and a **prompt for Claude**.
   - Click **⎘ Copy prompt** — the prompt + new CSS is on your clipboard.
5. **Paste the prompt into your chat with Claude.**
6. Claude overwrites `css/theme-published.css` for you and commits to GitHub.
   Cloudflare Pages auto-deploys in ~30–60 seconds.
7. Every visitor now sees the new theme.

## Why this approach?

No backend, no GitHub token in the browser, no password to manage, no
Cloudflare Function setup. You already have a Claude chat open — that's
the "publish API."

## Reverting a bad publish

Tell Claude:
> Revert `css/theme-published.css` to the previous commit.

Claude can read the file's git history and restore any earlier version.

## Files involved

- `css/theme-published.css` — the live theme. Loaded by `<link>` on every
  HTML page so visitors see it instantly with no flash. Starts empty, gets
  overwritten on every publish.
- `js/theme-customizer.js` — the Studio panel itself (preview, save, copy
  prompt).
