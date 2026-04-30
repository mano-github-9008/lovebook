/* ============================================================
   particles.js — Heart-shaped particle system
   ============================================================
   Configuration parameters:
     PARTICLE_COUNT  — number of hearts (default 110)
     PARTICLE_SPEED  — base drift speed multiplier
     MAX_SIZE        — maximum heart half-size in px
   ============================================================ */

(function () {
  'use strict';

  /* ── Config ─────────────────────────────────── */
  const PARTICLE_COUNT = 110;
  const PARTICLE_SPEED = 0.16;
  const MAX_SIZE = 7;     /* px — heart half-size */

  /* Heart colours — lavender & pink palette */
  const COLOURS = [
    'rgba(229, 100, 160, 0.82)',  /* hot pink          */
    'rgba(181, 123, 238, 0.72)',  /* lavender          */
    'rgba(244, 167, 192, 0.78)',  /* soft blush pink   */
    'rgba(212, 168, 240, 0.65)',  /* light lavender    */
    'rgba(255, 200, 220, 0.70)',  /* pale rose         */
    'rgba(200, 140, 255, 0.60)',  /* violet-lavender   */
  ];

  /* ── Canvas ────────────────────────────────── */
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomBetween(a, b) {
    return a + Math.random() * (b - a);
  }

  /* ── Draw a heart centred at (0,0) with half-size s ── */
  function drawHeart(s) {
    ctx.beginPath();
    /* Top-left curve */
    ctx.moveTo(0, -s * 0.2);
    ctx.bezierCurveTo(-s * 0.1, -s, -s, -s * 0.8, -s, -s * 0.2);
    /* Bottom-left to tip */
    ctx.bezierCurveTo(-s, s * 0.3, -s * 0.4, s * 0.7, 0, s);
    /* Bottom-right from tip */
    ctx.bezierCurveTo(s * 0.4, s * 0.7, s, s * 0.3, s, -s * 0.2);
    /* Top-right curve */
    ctx.bezierCurveTo(s, -s * 0.8, s * 0.1, -s, 0, -s * 0.2);
    ctx.closePath();
  }

  /* ── Particle factory ────────────────────────── */
  function createParticle(forceBottom) {
    const speed = randomBetween(0.03, PARTICLE_SPEED);
    const angle = randomBetween(0, Math.PI * 2);
    return {
      x: randomBetween(0, W),
      y: forceBottom ? randomBetween(H * 0.85, H) : randomBetween(0, H),
      size: randomBetween(1.5, MAX_SIZE),
      colour: COLOURS[Math.floor(Math.random() * COLOURS.length)],
      vx: Math.cos(angle) * speed * 0.6,
      vy: -(speed + randomBetween(0.03, 0.11)),   /* upward drift */
      rotation: randomBetween(0, Math.PI * 2),
      rotSpeed: randomBetween(-0.015, 0.015),
      alpha: randomBetween(0.3, 1),
      dalpha: randomBetween(0.002, 0.006) * (Math.random() < 0.5 ? 1 : -1),
      twinkle: Math.random() < 0.45,
    };
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle(false));
    }
  }

  /* ── Animation loop ─────────────────────────── */
  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach((p, i) => {
      /* Move */
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotSpeed;

      /* Twinkle */
      if (p.twinkle) {
        p.alpha += p.dalpha;
        if (p.alpha > 1 || p.alpha < 0.15) p.dalpha *= -1;
      }

      /* Horizontal wrap */
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;

      /* Recycle when drifted off top */
      if (p.y < -20) {
        particles[i] = createParticle(true);
        return;
      }
      if (p.y > H + 20) p.y = -10;

      /* Draw */
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
      ctx.shadowColor = p.colour;
      ctx.shadowBlur = p.size > 4 ? 8 : 4;
      ctx.fillStyle = p.colour;
      drawHeart(p.size);
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(draw);
  }

  /* ── Boot ───────────────────────────────────── */
  window.addEventListener('resize', () => { resize(); initParticles(); });
  resize();
  initParticles();
  draw();
}());
