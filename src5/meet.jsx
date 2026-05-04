// Meet — "Opening the folder" intro to The System.
// Keeps the existing SectionMarker (02 · The system) and replaces the
// old title block with: folder-ajar + light leak → "Cowork OS" → body
// subline → 3-dot pillar teaser (Memory / Voice / Tools — matches the
// accents of the 3 BenefitSection colors that follow).

function Meet({ state }) {
  const cls = sectionClass('orange', state);

  const pillars = [
    { label: 'Memory', rgb: '204,120,92' },  // orange
    { label: 'Voice',  rgb: '124,146,116' }, // sage
    { label: 'Tools',  rgb: '214,168,91' },  // straw
  ];

  return (
    <section id="meet" className={cls + " lp-section"} style={{
      padding: '120px 0 110px',
      position: 'relative',
      overflow: 'hidden',
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
        <Reveal>
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
            <div className="lp-meet-pill" style={{
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
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
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
                    <span className="lp-meet-sep" style={{ width: 14, height: 1, background: 'var(--rule-strong)' }}/>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Meet });
