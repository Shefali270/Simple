
(() => {
// Home hero labs. build.py joins src/labs/*.js (in name order) into /assets/labs.js, wrapped in one function scope.
// Each experiment registers itself with SIM({...}); 9-boot.js mounts one per page load. $, $$ and `still` come from site.js.
const INK = "#0d1650", BLUE = "#2f5bea", GOLD = "#ffb400", AMBER = "#f5a400", ROSE = "#e5405f", CYAN = "#1ec8e8", TEAL = "#0b9ab6";
const GREEN = "#14a06b", VIOLET = "#7b5cff", FAINT = "#98a1c4", GRID = "rgba(47,91,234,.07)", SOFT = "#eef2ff";
const FONT = "Inter, system-ui, sans-serif", SERIF = "Georgia, serif";
const TAU = Math.PI * 2, D2R = Math.PI / 180;
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const lerp = (a, b, t) => a + (b - a) * t;
const num = (v, d = 1) => {
  if (!isFinite(v)) return "∞";
  const s = v.toFixed(d);
  return (+s === 0 ? (0).toFixed(d) : s).replace("-", "−");
};
const grp = (v) => Math.round(v).toLocaleString("en-IN"); // 12,34,567
const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const sci = (v, d = 1) => { // 4.5 × 10⁶
  if (!v) return "0";
  const e = Math.floor(Math.log10(Math.abs(v))), m = v / 10 ** e;
  return e >= -2 && e <= 3 ? num(v, Math.max(0, d + 1 - e)) : `${num(m, d)} × 10${String(e).replace(/\d/g, (c) => SUP[c]).replace("-", "⁻")}`;
};
const frac = (a, b) => `<span class="frac"><span>${a}</span><span>${b}</span></span>`;
const spectrum = (nm) => { // rough RGB of a wavelength; UV and IR get stand-in colours
  if (nm < 380) return [123, 92, 255];
  if (nm > 750) return [176, 48, 58];
  let r = 0, g = 0, b = 0;
  if (nm < 440) { r = (440 - nm) / 60; b = 1; } else if (nm < 490) { g = (nm - 440) / 50; b = 1; } else if (nm < 510) { g = 1; b = (510 - nm) / 20; }
  else if (nm < 580) { r = (nm - 510) / 70; g = 1; } else if (nm < 645) { r = 1; g = (645 - nm) / 65; } else r = 1;
  const f = nm < 420 ? 0.4 + (0.6 * (nm - 380)) / 40 : nm > 700 ? 0.4 + (0.6 * (750 - nm)) / 50 : 1;
  return [r, g, b].map((c) => Math.round(255 * clamp(c * f, 0, 1) ** 0.8));
};
const rgba = ([r, g, b], a = 1) => `rgba(${r},${g},${b},${a})`;
const SIMS = [];
const SIM = (s) => SIMS.push(s);
// Real images for the biology labs, loaded once and shared between visits to a lab.
const IMAGES = {};
const image = (name) => { if (!IMAGES[name]) { const im = new Image(); im.decoding = "async"; im.src = `/assets/img/bio/${name}`; IMAGES[name] = im; } return IMAGES[name]; };
const loaded = (im) => im.complete && im.naturalWidth > 0;
// A point and heading at distance s along an open polyline.
const alongOpen = (pts, s) => {
  for (let i = 1; i < pts.length; i++) {
    const [ax, ay] = pts[i - 1], [bx, by] = pts[i], l = Math.hypot(bx - ax, by - ay);
    if (s <= l || i === pts.length - 1) { const t = clamp(s / (l || 1), 0, 1); return [ax + (bx - ax) * t, ay + (by - ay) * t, Math.atan2(by - ay, bx - ax)]; }
    s -= l;
  }
  return [...pts[0], 0];
};
const pathLength = (pts) => pts.reduce((sum, p, i) => (i ? sum + Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]) : 0), 0);

// One lab: HiDPI canvas, pause while off screen, a single rAF loop, drawing helpers, drag handling,
// and slider outputs / readouts kept in step with the sim (the DOM is only touched when text changes).
const labKit = (lab, S) => {
  const cv = $("canvas", lab), ctx = cv.getContext("2d"), toast = $(".lab-toast", lab), act = $("[data-act]", lab);
  const inputs = $$("input", lab), outs = $$("output", lab), reads = $$("dd", lab);
  const k = { lab, ctx, act, inputs, outs, reads, W: 0, H: 0, now: 0, t: 0, visible: false, touched: false, playing: !still, onSize() {}, onTouch() {} };
  k.v = (i) => +inputs[i].value;
  k.set = (i, v) => (inputs[i].value = v);
  k.f = (px, w = 700) => `${w} ${k.W < 420 ? Math.max(9, px - 1.5) : px}px ${FONT}`;
  k.m = (px) => `italic 600 ${k.W < 420 ? px - 1.5 : px}px ${SERIF}`; // maths lettering
  k.fill = () => {}; // slider fills are kept up to date by the loop
  k.label = (text, icon) => { $("span", act).textContent = text; if (icon) $(".arrow .ms", act).textContent = icon; };
  let toastTimer;
  k.say = (msg, win = false) => {
    toast.textContent = msg; toast.classList.toggle("win", win); toast.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
  };
  k.touch = () => { if (!k.touched) { k.touched = true; k.onTouch(); } };
  let sweepOn = true; // the automatic slider glide, until the visitor takes that slider over
  k.pause = () => { k.playing = false; sweepOn = false; if (S.act === "play") k.label("Play", "play_arrow"); };
  // A demo that repeats until the visitor touches the lab (or it is swapped out).
  k.demo = (ms, fn) => {
    if (still) return;
    const id = setInterval(() => { if (!cv.isConnected || k.touched) clearInterval(id); else if (k.visible) fn(); }, ms);
  };

  k.pos = (e) => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  k.text = (str, x, y, font, color, align = "left") => { ctx.font = font; ctx.fillStyle = color; ctx.textAlign = align; ctx.fillText(str, x, y); };
  k.line = (x1, y1, x2, y2, color, width = 2, dash = []) => {
    ctx.strokeStyle = color; ctx.lineWidth = width; ctx.setLineDash(dash);
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); ctx.setLineDash([]);
  };
  k.path = (pts, color, width = 2, dash = []) => {
    if (pts.length < 2) return;
    ctx.strokeStyle = color; ctx.lineWidth = width; ctx.setLineDash(dash); ctx.beginPath();
    pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.stroke(); ctx.setLineDash([]);
  };
  k.poly = (pts, fill, stroke, width = 2) => {
    ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath();
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = width; ctx.stroke(); }
  };
  k.rect = (x, y, w, h, fill, stroke, r = 6, width = 2) => {
    ctx.beginPath(); ctx.roundRect(x, y, w, h, Math.max(0, Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2)));
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = width; ctx.stroke(); }
  };
  k.ring = (x, y, r, color, width = 2, dash = []) => {
    ctx.strokeStyle = color; ctx.lineWidth = width; ctx.setLineDash(dash);
    ctx.beginPath(); ctx.arc(x, y, Math.max(0, r), 0, TAU); ctx.stroke(); ctx.setLineDash([]);
  };
  k.arc = (x, y, r, a0, a1, color, width = 2, ccw = false) => { ctx.strokeStyle = color; ctx.lineWidth = width; ctx.beginPath(); ctx.arc(x, y, r, a0, a1, ccw); ctx.stroke(); };
  k.arrow = (x1, y1, x2, y2, color, width = 2.5) => {
    if (Math.hypot(x2 - x1, y2 - y1) < 1) return;
    const a = Math.atan2(y2 - y1, x2 - x1), h = 7 + width;
    k.line(x1, y1, x2, y2, color, width);
    ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(x2 + Math.cos(a) * 3, y2 + Math.sin(a) * 3);
    ctx.lineTo(x2 - Math.cos(a - 0.5) * h, y2 - Math.sin(a - 0.5) * h); ctx.lineTo(x2 - Math.cos(a + 0.5) * h, y2 - Math.sin(a + 0.5) * h); ctx.fill();
  };
  k.dot = (x, y, r, fill, stroke, width = 3) => {
    ctx.beginPath(); ctx.arc(x, y, Math.max(0, r), 0, TAU); ctx.fillStyle = fill; ctx.fill();
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = width; ctx.stroke(); }
  };
  k.knob = (x, y, now = k.now) => { // the gold drag handle; pulses until the visitor touches the lab
    if (!k.touched && !still) { const p = (now / 1400) % 1; k.dot(x, y, 9 + p * 18, `rgba(255,180,0,${0.5 * (1 - p)})`); }
    k.dot(x, y, 9, GOLD, "#fff");
  };
  // Light or current flowing along a path: a faint line with moving dashes.
  k.beam = (pts, color, width = 2.5) => {
    ctx.strokeStyle = color; ctx.lineWidth = width; ctx.beginPath();
    pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.globalAlpha = 0.35; ctx.stroke(); ctx.globalAlpha = 1;
    ctx.setLineDash([5, 11]); ctx.lineDashOffset = still ? 0 : -k.now / 28; ctx.stroke();
    ctx.setLineDash([]); ctx.lineDashOffset = 0;
  };
  k.spring = (x1, y1, x2, y2, coils, amp, color = INK) => {
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1, ux = dx / L, uy = dy / L, n = coils * 2, pts = [[x1, y1], [x1 + ux * 6, y1 + uy * 6]];
    for (let i = 1; i < n; i++) { const s = 6 + ((L - 12) * i) / n, side = i % 2 ? amp : -amp; pts.push([x1 + ux * s - uy * side, y1 + uy * s + ux * side]); }
    pts.push([x2 - ux * 6, y2 - uy * 6], [x2, y2]);
    k.path(pts, color, 2);
  };
  k.span = (x1, x2, y, label, color = INK) => { // a measuring bracket with a label above it
    k.line(x1, y, x2, y, color, 1.5); k.line(x1, y - 4, x1, y + 4, color, 1.5); k.line(x2, y - 4, x2, y + 4, color, 1.5);
    if (label) k.text(label, (x1 + x2) / 2, y - 10, k.f(11), color, "center");
  };
  k.credit = (text) => k.text(text, 8, k.H - 8, k.f(9.5, 600), FAINT);
  // Chevrons marching along a path, showing which way something flows.
  k.chevrons = (pts, color, gap, size, offset) => {
    const L = pathLength(pts);
    ctx.fillStyle = color;
    for (let s = ((offset % gap) + gap) % gap; s < L; s += gap) {
      const [x, y, a] = alongOpen(pts, s);
      ctx.beginPath(); ctx.moveTo(x + Math.cos(a) * size, y + Math.sin(a) * size);
      ctx.lineTo(x + Math.cos(a + 2.4) * size, y + Math.sin(a + 2.4) * size); ctx.lineTo(x - Math.cos(a) * size * 0.25, y - Math.sin(a) * size * 0.25);
      ctx.lineTo(x + Math.cos(a - 2.4) * size, y + Math.sin(a - 2.4) * size); ctx.closePath(); ctx.fill();
    }
  };
  k.grid = (step, color = GRID) => {
    for (let x = step; x < k.W; x += step) k.line(x, 0, x, k.H, color, 1);
    for (let y = step; y < k.H; y += step) k.line(0, y, k.W, y, color, 1);
  };
  // Bar chart for energies and the like: items are [label, share 0..1, colour].
  k.bars = (items, x, y, w, h) => {
    const bw = w / items.length;
    items.forEach(([label, v, c], i) => {
      const bx = x + i * bw + bw * 0.18, bh = clamp(v, 0, 1) * h;
      k.rect(bx, y, bw * 0.64, h, SOFT, null, 5);
      if (bh > 0.5) k.rect(bx, y + h - bh, bw * 0.64, bh, c, null, 5);
      k.text(label, bx + bw * 0.32, y + h + 12, k.f(10, 700), INK, "center");
    });
  };
  // Distance along a closed polyline: [x, y] at arc length s.
  k.along = (pts, s) => {
    const segs = pts.map((p, i) => [p, pts[(i + 1) % pts.length]]), lens = segs.map(([a, b]) => Math.hypot(b[0] - a[0], b[1] - a[1])), total = lens.reduce((a, b) => a + b, 0);
    s = ((s % total) + total) % total;
    for (let i = 0; i < segs.length; i++) {
      if (s <= lens[i]) { const [a, b] = segs[i], t = s / (lens[i] || 1); return [lerp(a[0], b[0], t), lerp(a[1], b[1], t)]; }
      s -= lens[i];
    }
    return pts[0];
  };
  k.perimeter = (pts) => pts.reduce((sum, p, i) => { const q = pts[(i + 1) % pts.length]; return sum + Math.hypot(q[0] - p[0], q[1] - p[1]); }, 0);
  // A mouse can grab anywhere; touch only near the handle, so a swipe across the canvas still scrolls the page.
  k.drag = (near, move, end) => {
    let on = false;
    const stop = () => { if (on) { on = false; cv.style.cursor = "grab"; end?.(); } };
    cv.addEventListener("touchstart", (e) => near(k.pos(e.touches[0])) && e.preventDefault(), { passive: false });
    cv.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse" && !near(k.pos(e))) return;
      on = true; k.touch(); cv.setPointerCapture(e.pointerId); cv.style.cursor = "grabbing"; move(k.pos(e));
    });
      cv.addEventListener("pointermove", (e) => {
        if (on) move(k.pos(e));
      });

      cv.addEventListener("pointerup", stop);
      cv.addEventListener("pointercancel", stop);
      cv.addEventListener("lostpointercapture", stop);
      cv.style.cursor = "grab";
    };
    (() => {
// Home hero labs. build.py joins src/labs/*.js (in name order) into /assets/labs.js,
// wrapped in one function scope.
// Each experiment registers itself with SIM({...}); 9-boot.js mounts one per page load.
// $, $$ and `still` come from site.js.

const SIMS = [];
const SIM = (s) => SIMS.push(s);

// Real images for the biology labs, loaded once and shared between visits to a lab.
const IMAGES = {};
const image = (name) => {
  if (!IMAGES[name]) {
    const im = new Image();
    im.decoding = "async";
    im.src = `/assets/img/bio/${name}`;
    IMAGES[name] = im;
  }
  return IMAGES[name];
};

const loaded = (im) => im.complete && im.naturalWidth > 0;
      held = clamp(Math.atan2(x - px, y - py), -MAX, MAX);
      k.set(1, Math.max(5, Math.round(Math.abs(held) / D2R)));
      k.set(0, clamp(Math.hypot(x - px, y - py) / scale, 0.3, 2.5));
      restart(held);
    }, () => { held = null; });

    k.inputs[0].addEventListener("input", () => {
      restart(k.v(1) * D2R);
    });
    k.inputs[1].addEventListener("input", () => {
      restart(k.v(1) * D2R);
    });

    k.act.addEventListener("click", hop);

    const draw = (now, dt) => {
      clock += dt;
      if (held === null) {
        const steps = Math.max(1, Math.ceil(dt / 0.01));
        for (let i = 0; i < steps; i++) {
          [th, om] = rk4([th, om], dt / steps);
        }
      }

      const [bx, by] = bob();
      k.line(px, py, bx, by, INK, 2);
      k.dot(px, py, 5, GOLD);
      k.dot(bx, by, 12, BLUE, INK, 2);

      k.reads[0].textContent = `${num(period(k.v(1) * D2R), 2)} s`;
      k.reads[1].textContent = `${num(Math.abs(om) * k.v(0), 2)} m/s`;
      k.reads[2].textContent = `${num(g(), 2)} m/s²`;
    };

    label();
    return { draw };
  },
});