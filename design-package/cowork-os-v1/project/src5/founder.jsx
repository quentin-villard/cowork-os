// Founder v4.

function Founder({ state }) {
  const cls = sectionClass('straw', state);
  return (
    <section id="founder" className={cls + " sec-fade-top"} style={{
      padding: '110px 0 110px',
      position: 'relative',
    }}>
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: 64,
          alignItems: 'start',
        }}>
          <Reveal>
            <div style={{ position: 'sticky', top: 40 }}>
              <SectionMarker n="09" label="About the creator" state={state} />
              <h2 className="serif" style={{
                fontSize: 'clamp(36px, 4.5vw, 52px)',
                lineHeight: 1.02, letterSpacing: '-0.02em',
                margin: '18px 0 28px', fontWeight: 400,
              }}>
                Hi, <em className="ital">I'm Quentin.</em>
              </h2>
              <div style={{
                width: 200, height: 240,
                borderRadius: 16,
                background: 'linear-gradient(135deg, var(--panel-2), var(--bg-3))',
                border: '1px solid var(--rule)',
                display: 'grid', placeItems: 'center',
                position: 'relative', overflow: 'hidden',
                boxShadow: '0 20px 60px -30px rgba(214,168,91, calc(var(--glow-k) * 0.4))',
              }}>
                <div className="serif" style={{
                  fontSize: 96, color: 'var(--orange)', letterSpacing: '-0.02em',
                }}>Q</div>
                <div style={{
                  position: 'absolute', bottom: 10, right: 12,
                  fontSize: 10, color: 'var(--ink-4)', letterSpacing: '0.1em',
                }}>
                  PORTRAIT PLACEHOLDER
                </div>
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
