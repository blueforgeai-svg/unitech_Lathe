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
