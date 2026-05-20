// Inside — V1.1 "File system — inline" integrated into Landing Page v7.
// Hero card with branded folder + inline tree, then 3 supporting cards.
// Note: dashed horizontal dividers between tree rows have been removed
// per design call. Vertical tree connectors (├─ / └─) remain.

function Inside({ state }) {
  const cls = sectionClass('sage', state);
  return (
    <section id="inside" className={cls + " sec-fade-top lp-section"} style={{
      padding: '110px 0 110px',
      position: 'relative',
    }}>
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>

        <Reveal>
          <SectionHead
            n="07"
            label="What's included"
            title={<>Everything you get with <em className="ital">Cowork OS.</em></>}
            lead="A complete folder structure, a setup guide, a video walkthrough, and every future update. You download it, you own it."
            align="center"
            state={state}
          />
        </Reveal>

        <Reveal>
          <div style={{
            marginTop: 56,
            background: 'var(--bg)',
            border: '1px solid var(--rule-strong)',
            borderRadius: 18,
            overflow: 'hidden',
          }}>
            <div className="lp-grid-2-in-main" style={{
              display: 'grid',
              gridTemplateColumns: '0.9fr 1.4fr',
            }}>
              {/* Left: branded folder visual */}
              <div className="lp-inside-left" style={{
                padding: '40px 36px',
                borderRight: '1px solid var(--rule)',
                background: 'linear-gradient(180deg, var(--bg-2), var(--bg))',
                display: 'flex', flexDirection: 'column', gap: 22,
                position: 'relative', overflow: 'hidden',
              }}>
                <div aria-hidden style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: 'radial-gradient(ellipse 90% 70% at 30% 30%, rgba(124,146,116,0.18), transparent 65%)',
                }} />
                <div className="mono" style={{
                  position: 'relative',
                  fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.14em',
                }}>
                  01 · CORE
                </div>
                <div style={{ position: 'relative' }}>
                  <BrandedFolder size={120} glow tilt={-3} />
                </div>
                <div style={{ position: 'relative' }}>
                  <h3 className="serif" style={{
                    margin: '0 0 10px', fontSize: 38, lineHeight: 1.05,
                    letterSpacing: '-0.02em', fontWeight: 400,
                  }}>
                    The system
                  </h3>
                  <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 15.5, lineHeight: 1.55, maxWidth: 320 }}>
                    A set of preconfigured files and folders that turns Claude into your personal AI assistant.
                  </p>
                </div>
              </div>

              {/* Right: inline tree of items */}
              <div className="lp-inside-right" style={{
                padding: '36px 40px',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
              }}>
                <div className="mono" style={{
                  fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.14em', marginBottom: 18,
                }}>
                  FILES & FOLDERS
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <InsideTreeRoot label="cowork-os/" />
                  {[
                    { k: 'Your context',   v: 'who you are, your work, your clients' },
                    { k: 'Your voice',     v: 'writing rules and anti-AI patterns' },
                    { k: 'Your tools',     v: 'your stack, mapped and connected' },
                    { k: 'Your projects',  v: 'briefs, inputs, and outputs per project' },
                    { k: 'Your resources', v: 'templates, examples, and reusable assets' },
                  ].map((it, i, arr) => (
                    <InsideTreeRow key={i} k={it.k} v={it.v} last={i === arr.length - 1} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lp-grid-3-cards" style={{
          marginTop: 16,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
        }}>
          {[
            { n: '02', tag: 'GUIDE',   t: 'The setup guide',    d: 'A step-by-step document with every prompt you need, including the onboarding sequence to personalize your system.' },
            { n: '03', tag: 'VIDEO',   t: 'Video tutorials', d: 'A complete walkthrough from install to your first working session. Follow along at your own pace.' },
            { n: '04', tag: 'UPDATES', t: 'All future updates', d: 'Every update to the system, included. New components, new skills, and new automations as they ship.' },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{
                padding: '26px 24px 28px',
                background: 'var(--bg-2)',
                border: '1px solid var(--rule)',
                borderRadius: 14,
                height: '100%',
              }}>
                <div className="mono" style={{
                  fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.12em', marginBottom: 14,
                }}>
                  {c.n} · {c.tag}
                </div>
                <h4 className="serif" style={{
                  margin: '0 0 8px', fontSize: 22, letterSpacing: '-0.01em', fontWeight: 400,
                }}>
                  {c.t}
                </h4>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.55 }}>
                  {c.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsideTreeRoot({ label }) {
  return (
    <div className="mono" style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '3px 0 4px',
      fontSize: 13, color: 'var(--ink-2)',
    }}>
      <Folder size={14} color="var(--sage-ink)" />
      <span style={{ color: 'var(--sage-ink)' }}>{label}</span>
    </div>
  );
}

// Inline row. Vertical tree connector kept (├─ / └─). Dashed horizontal
// divider intentionally removed — rows breathe on their own padding.
function InsideTreeRow({ k, v, last }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '24px 1fr',
      alignItems: 'baseline',
      padding: '8px 0',
    }}>
      <span className="mono" style={{ color: 'var(--ink-4)', fontSize: 13, lineHeight: 1.4 }}>
        {last ? '└─' : '├─'}
      </span>
      <div style={{ lineHeight: 1.45 }}>
        <span style={{ fontSize: 15.5, color: 'var(--ink)', letterSpacing: '-0.005em', fontWeight: 500 }}>
          {k}
        </span>
        <span style={{ color: 'var(--ink-4)', margin: '0 8px' }}>—</span>
        <span style={{ fontSize: 14, color: 'var(--ink-3)' }}>
          {v}
        </span>
      </div>
    </div>
  );
}

Object.assign(window, { Inside });
