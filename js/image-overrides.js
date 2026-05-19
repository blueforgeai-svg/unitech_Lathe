/**
 * Image overrides — map product IDs to local image files
 * Loaded AFTER machines-data.js. Patches MACHINES_DATA[*].image to local paths.
 * Falls back to original indiamart URLs for any product not in the map.
 *
 * Add more entries here as you copy more files into /img/products/.
 */
(function(){
  if (typeof MACHINES_DATA === 'undefined') return;

  // Relative path prefix from /pages/ HTML files
  const P = 'img/products/';

  // Map: product.id  →  local image filename (in img/products/)
  const OVERRIDES = {
    // Heavy-duty / gear-head
    'heavy-duty-gear-head-lathe':            'heavy-duty-gear-head-lathe-machine.jpg',
    'medium-duty-gear-head-lathe-machine':   'medium-duty-gear-head-lathe-machine.jpg',
    'all-geared-high-speed-lathe-machine':   'all-geared-high-speed-lathe-machine.jpg',

    // Plano-type / extra-heavy
    '16-feet-heavy-duty-plano-lathe':              'heavy-duty-plano-type-lathe-machine.jpg',
    'extra-heavy-duty-cone-pulley-lathe-he-800mm': 'extra-heavy-duty-cone-pulley-lathe-machine.jpg',
    'extra-heavy-duty-cone-pulley-lathe-12ft':     'extra-heavy-duty-cone-pulley-lathe-machine.jpg',
    'heavy-duty-cone-pulley-lathe-machine':        'heavy-duty-cone-pulley-lathe-machine.jpg',

    // Series — geared / cone pulley
    'uni-tech-geared-lathes':                     'uni-tech-geared-lathes.jpg',
    'uni-tech-cone-pulley-medium-duty-lathe':     'uni-tech-cone-pulley-medium-duty-lathe-machine.jpg',
    'light-duty-cone-pulley-lathe':               'light-duty-cone-pulley-lathe-machine.jpg',

    // Light / medium / precision
    'light-duty-lathe-machine':              'light-duty-lathe-machine.jpg',
    'medium-duty-lathe-machine':             'medium-duty-lathe-machine.jpg',
    'automatic-light-duty-lathe':            'automatic-light-duty-lathe-machine.jpg',
    'semi-automatic-medium-duty-lathe':      'semi-automatic-medium-duty-lathe-machine.jpg',
    'precision-lathe-machine-750mm':         'precision-lathe-machine.jpg',
    'high-speed-precision-lathe-machine':    'high-speed-precision-lathe-machine.jpg',

    // Heavy-duty by foot
    '7-feet-heavy-duty-lathe':               '7-feet-heavy-duty-lathe-machines.jpg',

    // Bush bearing / over-size / centers / ITI
    'bush-bearing-type-lathe-machine':       'bush-bearing-type-lathe-machine.jpg',
    'over-size-lathe-machine':               'over-size-lathe-machine.jpg',
    'center-lathe-machine':                  'center-lathe-machine.jpg',
    'ss-and-sc-center-lathe-machine':        'ss-and-sc-center-lathe-machine.jpg',
    'uni-tech-kharad-machine':               'uni-tech-kharad-machine.jpg',
    'iti-lathe-machine':                     'iti-lathe-machine.jpg',
    'agm-lathe-machine':                     'agm-lathe-machine.jpg',
    'agl-lathe-machine':                     'agl-lathe-machine.jpg'
  };

  // Patch image URLs across every category array
  for (const [k, v] of Object.entries(MACHINES_DATA)){
    if (!Array.isArray(v)) continue;
    v.forEach(p => {
      if (p && p.id && OVERRIDES[p.id]){
        p.image = P + OVERRIDES[p.id];
      }
    });
  }
})();
