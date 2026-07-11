/* Uni-Tech — bright site UI behaviours: mobile nav toggle + active link */
(function(){
  function init(){
    var ham = document.querySelector('.nav-ham');
    var links = document.querySelector('.nav-links');
    if (ham && links){
      ham.addEventListener('click', function(){
        var open = links.classList.toggle('open');
        ham.classList.toggle('open', open);
        ham.setAttribute('aria-expanded', String(open));
      });
      links.querySelectorAll('a').forEach(function(a){
        a.addEventListener('click', function(){
          // keep dropdown parents from closing menu on hover-anchor; close on real links
          if (a.getAttribute('href') && a.getAttribute('href') !== '#'){
            links.classList.remove('open'); ham.classList.remove('open');
          }
        });
      });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* Click-to-play YouTube facades (avoids on-load embed config errors like 153) */
(function(){
  document.addEventListener('click', function(e){
    var btn = e.target.closest ? e.target.closest('.vs-facade[data-yt]') : null;
    if (!btn) return;
    var id = btn.getAttribute('data-yt');
    if (!id) return;
    var title = (btn.getAttribute('aria-label') || 'Video').replace(/^Play video:\s*/, '');
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + id +
      '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
    iframe.title = title;
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframe.allowFullscreen = true;
    btn.replaceWith(iframe);
  });
})();
