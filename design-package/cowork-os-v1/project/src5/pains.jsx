// Pains v5 — user-bubble stream + framed Truth card.
// Narrative: 4 messages the user keeps sending → "here we go again" composer
// → framed "The truth" card resolves with "You need a real system."

function UserBubble({ children }) {
  return (
    <div style={{
      display: 'inline-block',
      background: 'var(--userbubble-bg)',
      border: '1px solid var(--userbubble-border)',
      color: 'var(--userbubble-ink)',
      padding: '14px 18px',
      borderRadius: '16px 16px 4px 16px',
      fontSize: 15.5,
      lineHeight: 1.45,
      maxWidth: '100%',
      fontFamily: 'Inter, sans-serif',
      position: 'relative',
    }}>
      {children}
    </div>
  );
}

function PainComposer() {
  return (
    <div style={{
      marginTop: 24,
      background: 'var(--panel-2)',
      border: '1px solid var(--rule-strong)',
      borderRadius: 14,
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      color: 'var(--ink-4)',
      fontSize: 15,
    }}>
      <span>
        And here we go again
        <span style={{
          display: 'inline-block',
          width: 2,
          height: 18,
          background: 'var(--ink-3)',
          marginLeft: 2,
          verticalAlign: 'middle',
          animation: 'painsBlink 1s steps(2) infinite',
        }} />
      </span>
      <span style={{
        width: 34, height: 34,
        background: 'var(--panel)',
        border: '1px solid var(--rule)',
        borderRadius: 9,
        display: 'grid', placeItems: 'center',
        color: 'var(--ink-4)', flex: '0 0 34px',
      }}>
        <SendArrow size={14} />
      </span>
    </div>
  );
}

function PainsTruthCard() {
  return (
    <div style={{
      marginTop: 72,
      padding: '48px 52px',
      border: '1px solid var(--rule-strong)',
      borderRadius: 20,
      background: 'linear-gradient(180deg, rgba(var(--accent-rgb), 0.05), transparent 60%)',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      maxWidth: 860,
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <div style={{
        content: '""',
        position: 'absolute',
        left: '50%', top: -1,
        transform: 'translateX(-50%)',
        width: 56, height: 2,
        background: 'var(--accent)',
        boxShadow: '0 0 12px rgba(var(--accent-rgb), 1)',
      }} />
      <div className="mono" style={{
        fontSize: 11,
        color: 'var(--accent)',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        marginBottom: 16,
      }}>
        The truth
      </div>
      <h3 className="serif" style={{
        fontWeight: 400,
        fontSize: 'clamp(40px, 4.8vw, 56px)',
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        margin: 0,
        textWrap: 'balance',
        color: 'var(--ink)',
      }}>
        You don't need better prompts.<br />
        You need a <em className="ital">real system.</em>
      </h3>
    </div>
  );
}

function Pains({ state }) {
  const cls = sectionClass('straw', state);
  return (
    <section id="pains" className={cls + " sec-fade-top"} style={{
      padding: '100px 0 100px',
      background: 'var(--bg-2)',
      position: 'relative',
    }}>
      <style>{`@keyframes painsBlink { 50% { opacity: 0; } }`}</style>
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <SectionHead
            n="01"
            label="The problem"
            title={PAINS_TITLE.main}
            lead={PAINS_TITLE.lead}
            state={state}
          />
        </Reveal>

        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
          <div aria-hidden="true" style={{
            position: 'absolute',
            inset: '-80px -100px -60px -100px',
            background: 'radial-gradient(ellipse 55% 55% at 62% 50%, rgba(80, 80, 85, calc(var(--pains-halo-alpha, 0.3) * 0.9)) 0%, rgba(80, 80, 85, calc(var(--pains-halo-alpha, 0.3) * 0.35)) 40%, transparent 72%)',
            filter: 'blur(24px)',
            pointerEvents: 'none',
            zIndex: 0,
            mixBlendMode: 'multiply',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="mono" style={{
              marginTop: 44,
              marginBottom: 20,
              fontSize: 10,
              color: 'var(--ink-4)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              justifyContent: 'center',
            }}>
              <span style={{ flex: '0 1 100px', height: 1, background: 'var(--rule)' }} />
              <span>— Messages you keep sending —</span>
              <span style={{ flex: '0 1 100px', height: 1, background: 'var(--rule)' }} />
            </div>
          </Reveal>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: 14,
          }}>
            {PAINS.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <UserBubble>{p}</UserBubble>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={360}>
            <PainComposer />
          </Reveal>
          </div>
        </div>

        <Reveal>
          <PainsTruthCard />
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Pains });
