// V1.1 — Same as V1 but each row is one line: "Your context — who you are..."
// Tree characters kept. Dividers kept but lighter. Moderate density.

function InsideV1_1({ state }) {
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

        <div style={{
          marginTop: 56,
          background: 'var(--bg)',
          border: '1px solid var(--rule-strong)',
          borderRadius: 18,
          overflow: 'hidden',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.4fr',
          }}>
            {/* Left: folder visual */}
            <div style={{
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

            {/* Right: tree of items, inline */}
            <div style={{
              padding: '36px 40px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div className="mono" style={{
                fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.14em', marginBottom: 18,
              }}>
                INCLUDED
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TreeRoot11 label="cowork-os/" />
                {[
                  { k: 'Your context',   v: 'who you are, your work, your clients' },
                  { k: 'Your voice',     v: 'writing rules and anti-AI patterns' },
                  { k: 'Your tools',     v: 'your stack, mapped and connected' },
                  { k: 'Your projects',  v: 'briefs, inputs, and outputs per project' },
                  { k: 'Your resources', v: 'templates, examples, and reusable assets' },
                ].map((it, i, arr) => (
                  <TreeRow11 key={i} k={it.k} v={it.v} last={i === arr.length - 1} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 16,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
        }}>
          {[
            { n: '02', t: 'The setup guide',   d: 'A step-by-step PDF with every prompt you need, including the onboarding sequence to personalize your system.' },
            { n: '03', t: 'The video tutorial', d: 'A complete walkthrough from install to your first working session. Follow along at your own pace.' },
            { n: '04', t: 'All future updates', d: 'Every update to the system, included. New components, new skills, and new automations as they ship.' },
          ].map((c, i) => (
            <div key={i} style={{
              padding: '26px 24px 28px',
              background: 'var(--bg)',
              border: '1px solid var(--rule)',
              borderRadius: 14,
            }}>
              <div className="mono" style={{
                fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.12em', marginBottom: 14,
              }}>
                {c.n} · INCLUDED
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
          ))}
        </div>
      </div>
    </section>
  );
}

function TreeRoot11({ label }) {
  return (
    <div className="mono" style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '4px 0 6px',
      fontSize: 13, color: 'var(--ink-2)',
    }}>
      <Folder size={14} color="var(--sage-ink)" />
      <span style={{ color: 'var(--sage-ink)' }}>{label}</span>
    </div>
  );
}

function TreeRow11({ k, v, last }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '24px 1fr',
      alignItems: 'baseline',
      padding: '10px 0',
      borderBottom: last ? 'none' : '1px dashed var(--rule)',
    }}>
      <span className="mono" style={{ color: 'var(--ink-4)', fontSize: 13, lineHeight: 1.4 }}>
        {last ? '└─' : '├─'}
      </span>
      <div style={{ lineHeight: 1.5 }}>
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

Object.assign(window, { InsideV1_1 });
