/**
 * Image overrides — map product IDs to local image files (client photos).
 * Loaded AFTER machines-data.js. Sets:
 *    p.image    -> first (main) photo
 *    p.gallery  -> full list of photos (for the product-page gallery)
 *
 * To swap a photo: replace the file at the SAME path in /img/products/new/
 * keeping the same filename. To add/remove a gallery photo, edit the arrays below.
 * Products not listed here keep their original image.
 */
(function(){
  if (typeof MACHINES_DATA === 'undefined') return;

  // Map: product.id  ->  [main photo, ...gallery photos]
  const OVERRIDES = {
    "heavy-duty-gear-head-lathe": ["img/products/new/heavy-duty-gear-head-lathe.jpg","img/products/new/heavy-duty-gear-head-lathe-2.jpg"],
    "medium-duty-gear-head-lathe-machine": ["img/products/new/medium-duty-gear-head-lathe-machine.jpg","img/products/new/medium-duty-gear-head-lathe-machine-2.jpg"],
    "all-geared-high-speed-lathe-machine": ["img/products/new/all-geared-high-speed-lathe-machine.jpg","img/products/new/all-geared-high-speed-lathe-machine-2.jpg"],
    "high-speed-precision-lathe-machine": ["img/products/new/high-speed-precision-lathe-machine.jpg"],
    "agm-lathe-machine": ["img/products/new/agm-lathe-machine.jpg","img/products/new/agm-lathe-machine-2.jpg","img/products/new/agm-lathe-machine-3.jpg"],
    "agl-lathe-machine": ["img/products/new/agl-lathe-machine.jpg"],
    "uni-tech-geared-lathes": ["img/products/new/uni-tech-geared-lathes.jpg"],
    "iti-lathe-machine": ["img/products/new/iti-lathe-machine.jpg"],
    "lathe-machine-for-iti-and-engineering-colleges": ["img/products/new/lathe-machine-for-iti-and-engineering-colleges.jpg"],
    "light-duty-cone-pulley-lathe": ["img/products/new/light-duty-cone-pulley-lathe.jpg","img/products/new/light-duty-cone-pulley-lathe-2.jpg","img/products/new/light-duty-cone-pulley-lathe-3.jpg"],
    "uni-tech-cone-pulley-medium-duty-lathe": ["img/products/new/uni-tech-cone-pulley-medium-duty-lathe.jpg","img/products/new/uni-tech-cone-pulley-medium-duty-lathe-2.jpg","img/products/new/uni-tech-cone-pulley-medium-duty-lathe-3.jpg"],
    "cone-pulley-lathe": ["img/products/new/cone-pulley-lathe.jpg"],
    "heavy-duty-cone-pulley-lathe-machine": ["img/products/new/heavy-duty-cone-pulley-lathe-machine.jpg"],
    "7-feet-heavy-duty-lathe": ["img/products/new/7-feet-heavy-duty-lathe.jpg"],
    "7-feet-heavy-duty-lathe-machines-v2": ["img/products/new/7-feet-heavy-duty-lathe-machines-v2.jpg"],
    "9-feet-heavy-duty-lathe-machines": ["img/products/new/9-feet-heavy-duty-lathe-machines.jpg","img/products/new/9-feet-heavy-duty-lathe-machines-2.jpg"],
    "10-feet-heavy-duty-lathe-machines": ["img/products/new/10-feet-heavy-duty-lathe-machines.jpg","img/products/new/10-feet-heavy-duty-lathe-machines-2.jpg"],
    "heavy-duty-lathe-machines": ["img/products/new/heavy-duty-lathe-machines.jpg","img/products/new/heavy-duty-lathe-machines-2.jpg","img/products/new/heavy-duty-lathe-machines-3.jpg"],
    "heavy-duty-lathe-machines-800rpm": ["img/products/new/heavy-duty-lathe-machines-800rpm.jpg"],
    "industrial-heavy-duty-lathe-machine": ["img/products/new/industrial-heavy-duty-lathe-machine.jpg","img/products/new/industrial-heavy-duty-lathe-machine-2.jpg"],
    "extra-heavy-duty-cone-pulley-lathe-he-800mm": ["img/products/new/extra-heavy-duty-cone-pulley-lathe-he-800mm.jpg","img/products/new/extra-heavy-duty-cone-pulley-lathe-he-800mm-2.jpg"],
    "extra-heavy-duty-cone-pulley-lathe-12ft": ["img/products/new/extra-heavy-duty-cone-pulley-lathe-12ft.jpg","img/products/new/extra-heavy-duty-cone-pulley-lathe-12ft-2.jpg"],
    "16-feet-heavy-duty-plano-lathe": ["img/products/new/16-feet-heavy-duty-plano-lathe.jpg"],
    "over-size-lathe-machine": ["img/products/new/over-size-lathe-machine.jpg"],
    "ss-and-sc-center-lathe-machine": ["img/products/new/ss-and-sc-center-lathe-machine.jpg"],
    "sugar-mills-lathe-machine": ["img/products/new/sugar-mills-lathe-machine.jpg"],
    "bush-bearing-type-lathe-machine": ["img/products/new/bush-bearing-type-lathe-machine.jpg"],
    "light-duty-lathe-machine": ["img/products/new/light-duty-lathe-machine.jpg","img/products/new/light-duty-lathe-machine-2.jpg"],
    "medium-duty-lathe-machine": ["img/products/new/medium-duty-lathe-machine.jpg","img/products/new/medium-duty-lathe-machine-2.jpg","img/products/new/medium-duty-lathe-machine-3.jpg"],
    "semi-automatic-medium-duty-lathe": ["img/products/new/semi-automatic-medium-duty-lathe.jpg"],
    "automatic-light-duty-lathe": ["img/products/new/automatic-light-duty-lathe.jpg"],
    "center-lathe-machine": ["img/products/new/center-lathe-machine.jpg"],
    "precision-lathe-machine-750mm": ["img/products/new/precision-lathe-machine-750mm.jpg"],
    "heavy-duty-conventional-lathe-800mm": ["img/products/new/heavy-duty-conventional-lathe-800mm.jpg"],
    "pillar-drilling-machine-25mm": ["img/products/new/pillar-drilling-machine-25mm.jpg","img/products/new/pillar-drilling-machine-25mm-2.jpg"],
    "pillar-drill-machine-25mm": ["img/products/new/pillar-drill-machine-25mm.jpg"],
    "radial-drilling-machine-40mm": ["img/products/new/radial-drilling-machine-40mm.jpg","img/products/new/radial-drilling-machine-40mm-2.jpg"],
    "radial-drill-machine-25mm": ["img/products/new/radial-drill-machine-25mm.jpg","img/products/new/radial-drill-machine-25mm-2.jpg"],
    "bench-drilling-machine-13mm": ["img/products/new/bench-drilling-machine-13mm.jpg"],
    "heavy-drilling-machine-25mm": ["img/products/new/heavy-drilling-machine-25mm.jpg"],
    "slotting-machine-150mm": ["img/products/new/slotting-machine-150mm.jpg"],
    "slotting-machine-250mm": ["img/products/new/slotting-machine-250mm.jpg"],
    "heavy-duty-slotting-machine": ["img/products/new/heavy-duty-slotting-machine.jpg"],
    "rotary-slotting-machine": ["img/products/new/rotary-slotting-machine.jpg"],
    "ms-slotting-machine": ["img/products/new/ms-slotting-machine.jpg"],
    "semi-automatic-hydraulic-press-50ton": ["img/products/new/semi-automatic-hydraulic-press-50ton.jpg","img/products/new/semi-automatic-hydraulic-press-50ton-2.jpg"],
    "hand-operated-hydraulic-press-25ton": ["img/products/new/hand-operated-hydraulic-press-25ton.jpg"],
    "hydraulic-power-press-5ton": ["img/products/new/hydraulic-power-press-5ton.jpg"],
    "hydraulic-press-small-hand-operated-5ton": ["img/products/new/hydraulic-press-small-hand-operated-5ton.jpg"],
    "metal-cutting-bandsaw-machine-300mm": ["img/products/new/metal-cutting-bandsaw-machine-300mm.jpg"],
    "horizontal-band-saw-machine-200mm": ["img/products/new/horizontal-band-saw-machine-200mm.jpg"],
    "band-saw-machine-300mm": ["img/products/new/band-saw-machine-300mm.jpg"],
    "semi-automatic-shaping-machine": ["img/products/new/semi-automatic-shaping-machine.jpg"],
    "industrial-shaping-machines-24inch": ["img/products/new/industrial-shaping-machines-24inch.jpg"],
    "gear-shaping-machine": ["img/products/new/gear-shaping-machine.jpg"],
    // Products whose original photos were poor — reusing the closest matching new photo:
    "heavy-duty-geared-lathe-800mm": ["img/products/new/heavy-duty-gear-head-lathe.jpg"],
    "heavy-duty-conventional-lathe-700mm": ["img/products/new/heavy-duty-lathe-machines.jpg"],
    "medium-duty-conventional-lathe-400mm": ["img/products/new/medium-duty-lathe-machine.jpg"],
    "uni-tech-kharad-machine": ["img/products/new/iti-lathe-machine.jpg"]
    // NOTE: "turret-milling-machine-m1tr" and "cnc-machine" have no photo in the new set — send a milling & CNC photo to replace those.
  };

  for (const cat of Object.values(MACHINES_DATA)){
    if (!Array.isArray(cat)) continue;
    cat.forEach(p => {
      if (p && p.id && OVERRIDES[p.id]){
        const list = OVERRIDES[p.id];
        p.image = list[0];
        p.gallery = list.slice();
      }
    });
  }
})();
