// Pricing v4 — orange accent glow + lit card.

function Pricing({ state }) {
  const claimed = 43, total = 100;
  const pct = (claimed / total) * 100;
  const cls = sectionClass('orange', state);

  return (
    <section id="pricing" className={cls + " sec-fade-top"} style={{ padding: '110px 0 120px', background: 'var(--bg-2)', position: 'relative' }}>
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <SectionHead
            n="10"
            label="Pricing"
            title={<>Become a <em className="ital">Founding Member.</em></>}
            lead="One hundred founding spots at $47. Once they're gone, the price goes to $97. No fake timer, no resets."
            align="center"
            state={state}
          />
        </Reveal>

        <Reveal>
          <div style={{ maxWidth: 720, margin: '64px auto 0' }}>
            <div className="cw-window cw-window--lit cw-window--spot-tc" style={{
              padding: '40px 44px 36px',
              borderRadius: 20,
            }}>
              <div style={{
                position: 'absolute', top: 0, right: 0,
                background: 'var(--orange)',
                color: '#fff',
                padding: '7px 14px',
                fontSize: 11,
                letterSpacing: '0.08em',
                borderBottomLeftRadius: 12,
                fontWeight: 500,
                boxShadow: '0 6px 18px -4px rgba(204,120,92, calc(var(--glow-k) * 0.7))',
              }}>
                FOUNDING · LIVE
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
                <div className="serif" style={{ fontSize: 80, lineHeight: 1, letterSpacing: '-0.03em' }}>$47</div>
                <div style={{ color: 'var(--ink-3)', fontSize: 16 }}>
                  today, for Founding Members
                  <div className="mono" style={{ marginTop: 4, fontSize: 12, color: 'var(--ink-4)' }}>
                    <span style={{ textDecoration: 'line-through' }}>$97</span> later
                  </div>
                </div>
              </div>

              <p style={{
                fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.55,
                margin: '22px 0 28px', maxWidth: 540,
              }}>
                One-time payment. Lifetime access. Everything on day one — no drip.
              </p>

              {/* Founding spots counter — frozen ON (was tweakable via state.showScarcity). */}
              <div style={{
                marginBottom: 26,
                padding: '14px 18px',
                background: 'var(--bg)',
                border: '1px solid var(--rule)',
                borderRadius: 12,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>
                    <strong style={{ color: 'var(--ink)' }}>{claimed}</strong> of {total} founding spots claimed
                  </span>
                  <span className="mono" style={{ fontSize: 11.5, color: 'var(--orange-ink)' }}>
                    you'd be #{claimed + 1}
                  </span>
                </div>
                <div style={{
                  height: 6, background: 'var(--bg-3)', borderRadius: 999, overflow: 'hidden',
                  border: '1px solid var(--rule)',
                }}>
                  <div style={{
                    width: pct + '%', height: '100%',
                    background: 'var(--orange)',
                    boxShadow: '0 0 12px rgba(204,120,92, calc(var(--glow-k) * 0.8))',
                    transition: 'width 1s ease',
                  }}/>
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <div className="mono" style={{
                  fontSize: 10.5, color: 'var(--ink-4)', letterSpacing: '0.12em',
                  textTransform: 'uppercase', marginBottom: 12,
                }}>
                  What you get
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  <Perk>The Cowork OS template</Perk>
                  <Perk>Installation guide</Perk>
                  <Perk>Video tutorial</Perk>
                  <Perk>Bonus: Voice-to-text setup</Perk>
                  <Perk>Bonus: Daily brief automation</Perk>
                </div>
              </div>

              <div style={{
                padding: '16px 18px',
                background: 'var(--orange-soft)',
                border: '1px solid rgba(204,120,92,0.25)',
                borderRadius: 10,
                marginBottom: 24,
              }}>
                <div className="mono" style={{
                  fontSize: 10.5, color: 'var(--orange-ink)', letterSpacing: '0.12em',
                  textTransform: 'uppercase', marginBottom: 10,
                }}>
                  And as a Founding Member
                </div>
                <Perk accent="orange">Free access to all future updates</Perk>
                <div style={{ height: 6 }}/>
                <Perk accent="orange">A direct feedback channel with me for 3 months</Perk>
              </div>

              <a href="#" className="btn btn-primary" style={{
                width: '100%', justifyContent: 'center', padding: '16px 24px', fontSize: 15.5,
              }}>
                Get Founding Member access · $47 <Arrow />
              </a>

              <div style={{
                marginTop: 18, textAlign: 'center',
                fontSize: 12.5, color: 'var(--ink-4)',
              }}>
                One-time payment. Secured checkout.
              </div>
            </div>

            <p style={{
              marginTop: 22, fontSize: 12.5, color: 'var(--ink-4)',
              textAlign: 'center', lineHeight: 1.5, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto',
            }}>
              Requires an active Claude Pro or Max subscription. Cowork OS runs on top of Claude — it is not a standalone product. Not affiliated with Anthropic.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Perk({ children, accent = 'sage' }) {
  const col = accent === 'orange' ? 'var(--orange-ink)' : 'var(--sage)';
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 14, color: 'var(--ink-2)' }}>
      <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 4, color: col }}>
        <path d="M2 7.5l2.8 2.8L12 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>{children}</span>
    </div>
  );
}

Object.assign(window, { Pricing });
