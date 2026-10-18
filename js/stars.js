(function () {
  const canvas = document.getElementById('stars');
  const toggle = document.getElementById('starToggle');
  const label = document.getElementById('starToggleLabel');
  if (!canvas || !toggle) return;
  const context = canvas.getContext('2d');
  if (!context) { toggle.hidden = true; return; }
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const scene = canvas.parentElement;
  let seed = 42;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const stars = Array.from({ length: 82 }, (_, index) => ({
    x: random(),
    y: random(),
    radius: index % 19 === 0 ? 2.8 : 0.65 + (index % 4) * 0.24,
    color: ['83,119,181', '133,108,187', '48,139,164'][index % 3],
    alpha: index % 19 === 0 ? 0.3 : 0.13 + (index % 3) * 0.035,
    depth: 0.35 + (index % 4) * 0.22,
    phase: index * 1.7,
    cross: index % 19 === 0
  }));
  let enabled = true;
  let frame = null;
  let previous = null;
  let width = 0;
  let height = 0;
  let elapsedTime = 0;
  let targetX = 0;
  let targetY = 0;
  let offsetX = 0;
  let offsetY = 0;
  const trail = [];
  const trailLifetime = 1000;
  let trailSegment = 0;

  function drawTrail(now) {
    while (trail.length && now - trail[0].time >= trailLifetime) trail.shift();
    context.save();
    context.lineCap = 'round';
    context.lineWidth = 1.2;
    for (let index = 0; index < trail.length; index++) {
      const point = trail[index];
      const fade = Math.max(0, 1 - (now - point.time) / trailLifetime);
      const previousPoint = trail[index - 1];
      if (previousPoint && previousPoint.segment === point.segment && point.time - previousPoint.time < 180) {
        context.strokeStyle = `rgba(105,119,184,${0.22 * fade * fade})`;
        context.beginPath();
        context.moveTo(previousPoint.x, previousPoint.y);
        context.lineTo(point.x, point.y);
        context.stroke();
      }
      context.fillStyle = `rgba(110,109,186,${0.3 * fade * fade})`;
      context.beginPath();
      context.arc(point.x, point.y, 1 + fade * 0.5, 0, Math.PI * 2);
      context.fill();
    }
    context.restore();
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    if (!enabled) return;
    for (const star of stars) {
      const x = star.x * width + offsetX * star.depth;
      const y = star.y * height + offsetY * star.depth;
      const shimmer = star.cross && !motion.matches ? 0.85 + 0.15 * Math.sin(elapsedTime / 1700 + star.phase) : 1;
      context.fillStyle = `rgba(${star.color},${star.alpha * shimmer})`;
      if (star.cross) {
        context.strokeStyle = context.fillStyle;
        context.lineWidth = 0.8;
        context.beginPath();
        context.moveTo(x - star.radius, y);
        context.lineTo(x + star.radius, y);
        context.moveTo(x, y - star.radius);
        context.lineTo(x, y + star.radius);
        context.stroke();
      } else {
        context.beginPath();
        context.arc(x, y, star.radius, 0, Math.PI * 2);
        context.fill();
      }
    }
    drawTrail(performance.now());
  }
  function stop() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    previous = null;
  }
  function animate(timestamp) {
    const elapsed = previous === null ? 0 : Math.min(timestamp - previous, 40);
    previous = timestamp;
    elapsedTime += elapsed;
    const blend = 1 - Math.exp(-elapsed / 110);
    offsetX += (targetX - offsetX) * blend;
    offsetY += (targetY - offsetY) * blend;
    for (const star of stars) star.x = (star.x + elapsed * 0.0000007) % 1;
    draw();
    frame = requestAnimationFrame(animate);
  }
  function update() {
    stop();
    if (!enabled || motion.matches || !pointer.matches || document.hidden) {
      targetX = targetY = offsetX = offsetY = 0;
      trail.length = 0;
      trailSegment++;
    }
    draw();
    if (enabled && !motion.matches && !document.hidden) frame = requestAnimationFrame(animate);
  }
  scene.addEventListener('pointermove', event => {
    if (!enabled || motion.matches || !pointer.matches || event.pointerType === 'touch') return;
    const bounds = scene.getBoundingClientRect();
    targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
    targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;
    const point = { x: event.clientX - bounds.left, y: event.clientY - bounds.top, time: performance.now(), segment: trailSegment };
    const lastPoint = trail[trail.length - 1];
    if (lastPoint && lastPoint.segment === point.segment && (point.time - lastPoint.time < 12 || Math.hypot(point.x - lastPoint.x, point.y - lastPoint.y) < 3)) return;
    trail.push(point);
    if (trail.length > 80) trail.shift();
  });
  scene.addEventListener('pointerleave', () => { targetX = targetY = 0; trailSegment++; });
  function resize() {
    const size = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = size.width;
    height = size.height;
    trail.length = 0;
    trailSegment++;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw();
  }
  toggle.addEventListener('click', () => {
    enabled = !enabled;
    toggle.setAttribute('aria-pressed', String(enabled));
    toggle.setAttribute('aria-label', enabled ? 'Turn off background stars' : 'Turn on background stars');
    label.textContent = enabled ? 'Stars on' : 'Stars off';
    update();
  });
  motion.addEventListener('change', update);
  pointer.addEventListener('change', update);
  document.addEventListener('visibilitychange', update);
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();
  update();
})();
