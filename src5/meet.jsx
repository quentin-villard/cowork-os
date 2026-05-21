// Meet — "Opening the folder" intro to The System.
// Keeps the existing SectionMarker (02 · The system) and replaces the
// old title block with: folder-ajar + light leak → "Cowork OS" → body
// subline → 3-dot pillar teaser (Memory / Voice / Tools — matches the
// accents of the 3 BenefitSection colors that follow).

function Meet({ state }) {
  const cls = sectionClass('orange', state);
  const sectionRef = React.useRef(null);
  const pillRef = React.useRef(null);
  const [pillsVisible, setPillsVisible] = React.useState(false);

  const pillars = [
    { label: 'Memory', rgb: '204,120,92' },  // orange
    { label: 'Voice',  rgb: '124,146,116' }, // sage
    { label: 'Tools',  rgb: '214,168,91' },  // straw
  ];

  // Scroll-driven glow intensity (--glow-k from 0.3 → 1.0). Once the section
  // is centered in the viewport we stay at full intensity — the sections
  // below reveal what's inside the now-lit folder.
  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { el.style.setProperty('--glow-k', '1'); return; }
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      // 0 when the section's top is at the bottom of the viewport
      // 1 when the section's center reaches the middle of the viewport (or past it)
      const center = r.top + r.height / 2;
      const progress = 1 - Math.min(1, Math.max(0, center / vh));
      const k = 0.15 + 0.85 * progress;
      el.style.setProperty('--glow-k', k.toFixed(3));
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Pillar entrance — staggered fade-up once the pill bar reaches the viewport.
  React.useEffect(() => {
    const el = pillRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setPillsVisible(true); io.disconnect(); } });
    }, { threshold: 0, rootMargin: '0px 0px -32% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="meet" className={cls + " lp-section"} style={{
      padding: '120px 0 110px',
      position: 'relative',
      overflow: 'hidden',
      '--glow-k': 0.15,
    }}>
      {/* Folder-leak glow — two stacked radials, sized to scale with viewport */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0,
      }}>
        <div style={{
          position: 'absolute',
          width: 'min(1100px, 90vw)', height: 'min(380px, 36vw)',
          left: '50%', top: '62%', transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse at center, rgba(204,120,92,calc(0.45 * var(--glow-k, 1))) 0%, rgba(204,120,92,calc(0.18 * var(--glow-k, 1))) 40%, transparent 72%)',
          filter: 'blur(60px)', mixBlendMode: 'screen', borderRadius: '50%',
        }}/>
        <div style={{
          position: 'absolute',
          width: 'min(520px, 60vw)', height: 'min(200px, 22vw)',
          left: '50%', top: '42%', transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse at center, rgba(229,160,136,calc(0.55 * var(--glow-k, 1))) 0%, transparent 70%)',
          filter: 'blur(40px)', mixBlendMode: 'screen', borderRadius: '50%',
        }}/>
      </div>

      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
        <RevealStrict>
          <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <div style={{ marginBottom: 28 }}>
              <SectionMarker n="02" label="The system" state={state} />
            </div>

            <div className="lp-meet-folder" style={{ marginBottom: 28, display: 'flex', justifyContent: 'center' }}>
              <BrandedFolder size={140} glow ajar tilt={-4} />
            </div>

            <h2 className="serif" style={{
              fontSize: 'clamp(44px, 5.4vw, 76px)',
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              margin: '0 0 22px',
              fontWeight: 400,
              color: 'var(--ink)',
            }}>
              Cowork OS
            </h2>

            <p style={{
              fontSize: 18,
              color: 'var(--ink-2)',
              lineHeight: 1.6,
              margin: '0 auto 36px',
              maxWidth: 580,
              textWrap: 'balance',
            }}>
              The system that makes Claude actually work for you.
            </p>

            {/* 3-pillar bridge to the Benefit sections that follow */}
            <div ref={pillRef} className="lp-meet-pill" style={{
              display: 'inline-flex', alignItems: 'center', gap: 28,
              padding: '14px 24px',
              borderRadius: 999,
              border: '1px solid var(--rule)',
              background: 'rgba(18,15,11,0.6)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              {pillars.map((p, i) => (
                <React.Fragment key={p.label}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 9,
                    opacity: pillsVisible ? 1 : 0,
                    transform: pillsVisible ? 'none' : 'translateY(6px)',
                    transition: `opacity .55s ease-out ${i * 130}ms, transform .55s ease-out ${i * 130}ms`,
                  }}>
                    <span style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: `rgb(${p.rgb})`,
                      boxShadow: `0 0 10px rgba(${p.rgb}, 0.7)`,
                    }}/>
                    <span className="mono" style={{
                      fontSize: 12, letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: 'var(--ink-2)',
                    }}>
                      {p.label}
                    </span>
                  </span>
                  {i < pillars.length - 1 ? (
                    <span className="lp-meet-sep" style={{
                      width: 14, height: 1, background: 'var(--rule-strong)',
                      opacity: pillsVisible ? 1 : 0,
                      transition: `opacity .55s ease-out ${i * 130 + 65}ms`,
                    }}/>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        </RevealStrict>
      </div>
    </section>
  );
}

Object.assign(window, { Meet });
