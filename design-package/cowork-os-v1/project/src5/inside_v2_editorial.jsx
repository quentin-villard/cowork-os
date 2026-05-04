// V2 — "Editorial": hero card with editorial 2-column type-driven layout.
// The 5 items appear with a vertical rule + numbered uppercase labels.
// Bottom row: 3 cards, each with a distinct micro-visual (pdf / video / shipping).

function InsideV2({ state }) {
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

        {/* HERO — editorial */}
        <div style={{
          marginTop: 56,
          padding: '48px 52px 50px',
          background: 'var(--bg)',
          border: '1px solid var(--rule-strong)',
          borderRadius: 18,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* corner ornament */}
          <div aria-hidden style={{
            position: 'absolute', top: -120, right: -120,
            width: 360, height: 360, borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(124,146,116,0.18), transparent 65%)',
            filter: 'blur(40px)', pointerEvents: 'none',
          }} />

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56,
            position: 'relative', zIndex: 1,
          }}>
            {/* Left column — title block */}
            <div>
              <div className="mono" style={{
                fontSize: 11, color: 'var(--sage-ink)', letterSpacing: '0.14em', marginBottom: 16,
              }}>
                01 · THE CORE
              </div>
              <h3 className="serif" style={{
                margin: '0 0 18px', fontSize: 56, lineHeight: 1.0,
                letterSpacing: '-0.025em', fontWeight: 400,
              }}>
                The <em className="ital">system.</em>
              </h3>
              <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.55 }}>
                A set of preconfigured files and folders that turns Claude into your personal AI assistant.
              </p>
              <div style={{ marginTop: 26, paddingTop: 22, borderTop: '1px solid var(--rule)' }}>
                <p className="mono" style={{
                  margin: 0, color: 'var(--ink-4)', fontSize: 12,
                  letterSpacing: '0.04em', lineHeight: 1.6,
                }}>
                  Five preconfigured layers, ready to host your work the moment you open it.
                </p>
              </div>
            </div>

            {/* Right column — list */}
            <div style={{
              display: 'flex', flexDirection: 'column',
              borderLeft: '1px solid var(--rule)',
              paddingLeft: 40,
            }}>
              {[
                { k: 'Your context',   v: 'who you are, your work, your clients' },
                { k: 'Your voice',     v: 'writing rules and anti-AI patterns' },
                { k: 'Your tools',     v: 'your stack, mapped and connected' },
                { k: 'Your projects',  v: 'briefs, inputs, and outputs per project' },
                { k: 'Your resources', v: 'templates, examples, and reusable assets' },
              ].map((it, i, arr) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '32px 1fr',
                  gap: 18, alignItems: 'baseline',
                  padding: '14px 0',
                  borderBottom: i === arr.length - 1 ? 'none' : '1px solid var(--rule)',
                }}>
                  <span className="mono" style={{
                    fontSize: 11, color: 'var(--sage-ink)', letterSpacing: '0.14em',
                  }}>
                    0{i + 1}
                  </span>
                  <div>
                    <div className="serif" style={{
                      fontSize: 22, lineHeight: 1.2, letterSpacing: '-0.01em',
                      color: 'var(--ink)', marginBottom: 4,
                    }}>
                      {it.k}
                    </div>
                    <div style={{
                      fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.5,
                      fontStyle: 'italic',
                    }}>
                      {it.v}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM — 3 cards with distinct micro-visuals */}
        <div style={{
          marginTop: 16,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
        }}>
          {/* PDF */}
          <SmallCard
            n="02"
            visual={<DocVisual />}
            t="The setup guide"
            d="A step-by-step PDF with every prompt you need, including the onboarding sequence to personalize your system."
          />
          {/* Video */}
          <SmallCard
            n="03"
            visual={<VideoVisual />}
            t="The video tutorial"
            d="A complete walkthrough from install to your first working session. Follow along at your own pace."
          />
          {/* Updates */}
          <SmallCard
            n="04"
            visual={<UpdatesVisual />}
            t="All future updates"
            d="Every update to the system, included. New components, new skills, and new automations as they ship."
          />
        </div>
      </div>
    </section>
  );
}

function SmallCard({ n, visual, t, d }) {
  return (
    <div style={{
      padding: '22px 22px 24px',
      background: 'var(--bg)',
      border: '1px solid var(--rule)',
      borderRadius: 14,
      display: 'flex', flexDirection: 'column', gap: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="mono" style={{
          fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.12em',
        }}>
          {n} · INCLUDED
        </div>
        {visual}
      </div>
      <div>
        <h4 className="serif" style={{
          margin: '0 0 8px', fontSize: 22, letterSpacing: '-0.01em', fontWeight: 400,
        }}>
          {t}
        </h4>
        <p style={{ margin: 0, fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.55 }}>
          {d}
        </p>
      </div>
    </div>
  );
}

/* ---- micro-visuals ---- */

function DocVisual() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="9" y="6" width="22" height="28" rx="2"
        fill="var(--bg-2)" stroke="var(--sage-ink)" strokeWidth="1.2"/>
      <rect x="13" y="11" width="14" height="1.2" fill="var(--sage-ink)" opacity="0.7"/>
      <rect x="13" y="15" width="11" height="1.2" fill="var(--ink-3)" opacity="0.5"/>
      <rect x="13" y="19" width="14" height="1.2" fill="var(--ink-3)" opacity="0.5"/>
      <rect x="13" y="23" width="9"  height="1.2" fill="var(--ink-3)" opacity="0.5"/>
      <rect x="13" y="27" width="12" height="1.2" fill="var(--ink-3)" opacity="0.5"/>
      <text x="20" y="40" textAnchor="middle"
        fontFamily="JetBrains Mono, monospace" fontSize="6"
        fill="var(--sage-ink)" letterSpacing="0.5">PDF</text>
    </svg>
  );
}

function VideoVisual() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="6" y="11" width="32" height="22" rx="3"
        fill="var(--bg-2)" stroke="var(--sage-ink)" strokeWidth="1.2"/>
      <circle cx="22" cy="22" r="6" fill="var(--sage-soft)" stroke="var(--sage-ink)" strokeWidth="1"/>
      <path d="M20 19l5 3-5 3v-6z" fill="var(--sage-ink)"/>
      {/* timeline */}
      <rect x="9" y="36" width="26" height="1" fill="var(--rule-strong)"/>
      <rect x="9" y="36" width="10" height="1" fill="var(--sage-ink)"/>
      <circle cx="19" cy="36.5" r="1.4" fill="var(--sage-ink)"/>
    </svg>
  );
}

function UpdatesVisual() {
  // Stack of versioned tags
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="7"  y="10" width="22" height="6" rx="1.5" fill="var(--bg-2)" stroke="var(--ink-4)" strokeWidth="1"/>
      <rect x="11" y="18" width="22" height="6" rx="1.5" fill="var(--bg-2)" stroke="var(--ink-4)" strokeWidth="1"/>
      <rect x="9"  y="26" width="22" height="6" rx="1.5"
        fill="var(--sage-soft)" stroke="var(--sage-ink)" strokeWidth="1.2"/>
      <text x="11" y="30.5"
        fontFamily="JetBrains Mono, monospace" fontSize="4.5"
        fill="var(--sage-ink)" letterSpacing="0.4">v.next</text>
      <path d="M33 12l3 -3 m0 0l3 3 m-3 -3v9" stroke="var(--sage-ink)" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  );
}

Object.assign(window, { InsideV2 });
