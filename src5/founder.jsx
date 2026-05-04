// Founder v4.

function Founder({ state }) {
  const cls = sectionClass('straw', state);
  return (
    <section id="founder" className={cls + " sec-fade-top lp-section"} style={{
      padding: '110px 0 110px',
      position: 'relative',
    }}>
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-grid-2-fnd" style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: 64,
          alignItems: 'start',
        }}>
          <Reveal>
            <div className="lp-no-sticky-mobile" style={{ position: 'sticky', top: 40 }}>
              <SectionMarker n="09" label="About the creator" state={state} />
              <h2 className="serif" style={{
                fontSize: 'clamp(36px, 4.5vw, 52px)',
                lineHeight: 1.02, letterSpacing: '-0.02em',
                margin: '18px 0 28px', fontWeight: 400,
              }}>
                Hi, <em className="ital">I'm Quentin.</em>
              </h2>
              <div className="lp-founder-portrait" style={{
                width: 200, height: 240,
                borderRadius: 16,
                border: '1px solid var(--rule)',
                position: 'relative', overflow: 'hidden',
                boxShadow: '0 20px 60px -30px rgba(214,168,91, calc(var(--glow-k) * 0.4))',
              }}>
                <img src="src5/assets/quentin.webp" alt="Quentin Villard"
                     style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ maxWidth: 620 }}>
              {FOUNDER_PARAGRAPHS.map((p, i) => (
                <p key={i} style={{
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  color: 'var(--ink-2)',
                  margin: '0 0 1.1em',
                  textWrap: 'pretty',
                }}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Founder });
