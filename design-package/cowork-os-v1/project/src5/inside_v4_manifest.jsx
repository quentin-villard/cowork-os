// V4 — "Receipt": vertical proof-of-purchase styled list. Hero card is a
// long mono "manifest" with the system as the headline item, and a simple
// horizontal row of three remaining items framed as line-items.

function InsideV4({ state }) {
  const cls = "s-sage";
  return (
    <section className={cls + " sec-fade-top"} style={{ padding: '90px 0 100px', position: 'relative' }}>
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead
          n="07"
          label="What's included"
          title={<>Everything you get on <em className="ital">day one.</em></>}
          lead="Nothing drip-fed. You pay, you download, it's all there."
          align="center"
          state={state}
        />

        {/* HERO — manifest */}
        <div style={{
          marginTop: 56,
          background: 'var(--bg)',
          border: '1px solid var(--rule-strong)',
          borderRadius: 18,
          padding: '40px 44px 44px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div aria-hidden style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 60% 50% at 80% 0%, rgba(124,146,116,0.16), transparent 70%)',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              paddingBottom: 18, borderBottom: '1px dashed var(--rule-strong)', marginBottom: 22,
            }}>
              <div className="mono" style={{
                fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.14em',
              }}>
                MANIFEST · 01
              </div>
              <BrandedFolder size={44} glow tilt={-6} />
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: '1.1fr 1.4fr', gap: 56, alignItems: 'start',
            }}>
              <div>
                <h3 className="serif" style={{
                  margin: '0 0 14px', fontSize: 50, lineHeight: 1.0,
                  letterSpacing: '-0.025em', fontWeight: 400,
                }}>
                  The <em className="ital">system.</em>
                </h3>
                <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6 }}>
                  A set of preconfigured files and folders that turns Claude into your personal AI assistant.
                </p>
              </div>

              <div>
                <div className="mono" style={{
                  fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.14em', marginBottom: 14,
                }}>
                  THIS INCLUDES
                </div>
                {[
                  { k: 'Your context',   v: 'who you are, your work, your clients' },
                  { k: 'Your voice',     v: 'writing rules and anti-AI patterns' },
                  { k: 'Your tools',     v: 'your stack, mapped and connected' },
                  { k: 'Your projects',  v: 'briefs, inputs, and outputs per project' },
                  { k: 'Your resources', v: 'templates, examples, and reusable assets' },
                ].map((it, i, arr) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '14px 1fr', gap: 14,
                    padding: '11px 0', alignItems: 'baseline',
                    borderBottom: i === arr.length - 1 ? 'none' : '1px solid var(--rule)',
                  }}>
                    <Folder size={12} color="var(--sage-ink)" />
                    <div>
                      <div style={{
                        fontSize: 15.5, color: 'var(--ink)', fontWeight: 500, letterSpacing: '-0.005em',
                        marginBottom: 2,
                      }}>
                        {it.k}
                      </div>
                      <div style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.5 }}>
                        {it.v}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW — line-item style */}
        <div style={{
          marginTop: 16,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
        }}>
          {[
            { n: '02', t: 'The setup guide',    d: 'A step-by-step PDF with every prompt you need, including the onboarding sequence to personalize your system.' },
            { n: '03', t: 'The video tutorial', d: 'A complete walkthrough from install to your first working session. Follow along at your own pace.' },
            { n: '04', t: 'All future updates', d: 'Every update to the system, included. New components, new skills, and new automations as they ship.' },
          ].map((c, i) => (
            <div key={i} style={{
              padding: '24px 24px 26px',
              background: 'var(--bg)',
              border: '1px solid var(--rule)',
              borderRadius: 14,
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div className="mono" style={{
                  fontSize: 11, color: 'var(--sage-ink)', letterSpacing: '0.14em',
                }}>
                  {c.n}
                </div>
                <div className="mono" style={{
                  fontSize: 10.5, color: 'var(--ink-4)', letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}>
                  Included
                </div>
              </div>
              <h4 className="serif" style={{
                margin: 0, fontSize: 22, letterSpacing: '-0.01em', fontWeight: 400,
              }}>
                {c.t}
              </h4>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.55 }}>
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { InsideV4 });
