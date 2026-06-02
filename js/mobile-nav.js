/**
 * Mobile nav toggle — injects a hamburger button into <nav class="nav2"> or <nav class="nav">
 * and toggles `.open` on the link list when tapped.
 */
(function(){
  function init(){
    const nav = document.querySelector('nav.nav2, nav.nav');
    if (!nav) return;
    const links = nav.querySelector('.nav2-links, .nav-links');
    if (!links) return;

    // Build hamburger
    const btn = document.createElement('button');
    btn.className = 'nav-ham';
    btn.setAttribute('aria-label', 'Toggle menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span>';

    // Find a place — append into the .wrap (rightmost)
    const wrap = nav.querySelector('.wrap') || nav;
    wrap.appendChild(btn);

    btn.addEventListener('click', () => {
      const opened = links.classList.toggle('open');
      btn.classList.toggle('open', opened);
      btn.setAttribute('aria-expanded', opened);
    });

    // Close menu when a link is clicked
    links.addEventListener('click', e => {
      if (e.target.tagName === 'A'){
        links.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
