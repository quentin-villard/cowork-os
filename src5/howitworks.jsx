// HowItWorks v4.

function HowItWorks({ state }) {
  const cls = sectionClass('orange', state);
  return (
    <section id="how" className={cls + " sec-fade-top lp-section"} style={{ padding: '110px 0 110px', background: 'var(--bg-2)', position: 'relative' }}>
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <SectionHead
            n="06"
            label="How it works"
            title={<>Get your system running. Three steps, <em className="ital">15 minutes.</em></>}
            lead="A step-by-step guide walks you through everything. No guesswork, no tech skills."
            align="center"
            state={state}
          />
        </Reveal>

        <div className="lp-grid-3" style={{
          marginTop: 64,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18,
        }}>
          {HOW.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="lp-how-card" style={{
                padding: '28px 28px 30px',
                background: 'var(--bg)',
                border: '1px solid var(--rule)',
                borderRadius: 16,
                height: '100%',
                position: 'relative',
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 10,
                  background: 'var(--orange)', color: '#fff',
                  display: 'grid', placeItems: 'center',
                  fontFamily: 'Instrument Serif, serif', fontSize: 20,
                  marginBottom: 18,
                  boxShadow: '0 0 20px -4px rgba(204,120,92, calc(var(--glow-k) * 0.8))',
                }}>
                  {s.n}
                </div>
                <h3 className="serif" style={{
                  margin: '0 0 10px', fontSize: 24, letterSpacing: '-0.01em', fontWeight: 400,
                }}>
                  {s.title}
                </h3>
                <p style={{ margin: 0, color: 'var(--ink-3)', fontSize: 15, lineHeight: 1.55 }}>
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HowItWorks });
