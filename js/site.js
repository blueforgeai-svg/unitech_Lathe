/**
 * Uni-Tech Machines — small site behaviours
 *  · Injects a hamburger toggle into <nav class="nav2"> on small screens
 *  · Toggles the .nav2-links open/closed
 *  · No-op on pages that don't have the editorial nav (e.g. review.html)
 */
(function(){
  function init(){
    const nav = document.querySelector('.nav2');
    if (!nav) return;
    const links = nav.querySelector('.nav2-links');
    if (!links) return;

    // Build hamburger button
    const btn = document.createElement('button');
    btn.className = 'nav-ham';
    btn.setAttribute('aria-label', 'Toggle menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span>';

    // Insert at the end of the inner wrap
    const inner = nav.querySelector('.wrap') || nav;
    inner.appendChild(btn);

    btn.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    });

    // Close menu when a link is tapped (in-page anchors etc.)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
