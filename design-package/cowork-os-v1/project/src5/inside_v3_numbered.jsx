// V3 — "Numbered editorial": hero card with the 5 items shown as a
// 5-row table-of-spec (mono index + serif label + lead), with a big
// serif "01" anchor on the left. Bottom row mirrors the 06 How-it-works
// rhythm: round number badges (sage), serif title, body.

function InsideV3({ state }) {
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

        {/* HERO — large numbered card */}
        <div style={{
          marginTop: 56,
          background: 'var(--bg-2)',
          border: '1px solid var(--rule-strong)',
          borderRadius: 18,
          padding: '46px 50px 46px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div aria-hidden style={{
            position: 'absolute', top: -200, left: -120,
            width: 520, height: 520, borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(124,146,116,0.20), transparent 60%)',
            filter: 'blur(60px)', pointerEvents: 'none',
          }} />

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 56,
            position: 'relative', zIndex: 1, alignItems: 'start',
          }}>
            {/* Left — anchor */}
            <div style={{ position: 'sticky', top: 40 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'var(--sage)', color: '#fff',
                  display: 'grid', placeItems: 'center',
                  fontFamily: 'Instrument Serif, serif', fontSize: 24,
                  boxShadow: '0 0 22px -4px rgba(124,146,116, calc(var(--glow-k) * 0.7))',
                }}>
                  01
                </div>
                <div className="mono" style={{
                  fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.14em',
                }}>
                  THE CORE
                </div>
              </div>
              <h3 className="serif" style={{
                margin: '0 0 16px', fontSize: 44, lineHeight: 1.02,
                letterSpacing: '-0.025em', fontWeight: 400,
              }}>
                The system
              </h3>
              <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.55, maxWidth: 360 }}>
                A set of preconfigured files and folders that turns Claude into your personal AI assistant. This includes:
              </p>
            </div>

            {/* Right — spec table */}
            <div>
              {[
                { k: 'Your context',   v: 'who you are, your work, your clients' },
                { k: 'Your voice',     v: 'writing rules and anti-AI patterns' },
                { k: 'Your tools',     v: 'your stack, mapped and connected' },
                { k: 'Your projects',  v: 'briefs, inputs, and outputs per project' },
                { k: 'Your resources', v: 'templates, examples, and reusable assets' },
              ].map((it, i, arr) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '64px 1fr',
                  gap: 18, alignItems: 'baseline',
                  padding: '18px 0',
                  borderTop: '1px solid var(--rule)',
                  borderBottom: i === arr.length - 1 ? '1px solid var(--rule)' : 'none',
                }}>
                  <span className="serif" style={{
                    fontSize: 26, color: 'var(--sage-ink)', letterSpacing: '-0.01em',
                    lineHeight: 1, fontWeight: 400,
                  }}>
                    0{i + 1}
                  </span>
                  <div>
                    <div className="serif" style={{
                      fontSize: 24, lineHeight: 1.15, letterSpacing: '-0.01em',
                      color: 'var(--ink)', marginBottom: 4, fontWeight: 400,
                    }}>
                      {it.k}
                    </div>
                    <div style={{
                      fontSize: 14.5, color: 'var(--ink-3)', lineHeight: 1.5,
                    }}>
                      {it.v}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW — mirrors HowItWorks rhythm with sage badges */}
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
              padding: '28px 28px 30px',
              background: 'var(--bg-2)',
              border: '1px solid var(--rule)',
              borderRadius: 16,
              position: 'relative',
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: 'var(--sage)', color: '#fff',
                display: 'grid', placeItems: 'center',
                fontFamily: 'Instrument Serif, serif', fontSize: 18,
                marginBottom: 18,
                boxShadow: '0 0 20px -4px rgba(124,146,116, calc(var(--glow-k) * 0.7))',
              }}>
                {c.n}
              </div>
              <h4 className="serif" style={{
                margin: '0 0 10px', fontSize: 24, letterSpacing: '-0.01em', fontWeight: 400,
              }}>
                {c.t}
              </h4>
              <p style={{ margin: 0, color: 'var(--ink-3)', fontSize: 15, lineHeight: 1.55 }}>
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { InsideV3 });
