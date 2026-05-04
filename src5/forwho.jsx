// ForWho v4 — sage section, two blocks.

function ForWho({ state }) {
  const cls = sectionClass('sage', state);
  return (
    <section id="forwho" className={cls + " sec-fade-top lp-section"} style={{ padding: '110px 0 110px', background: 'var(--bg-2)', position: 'relative' }}>
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <SectionHead
            n="08"
            label="Fit check"
            title={<>Is Cowork OS <em className="ital">for you?</em></>}
            lead="A short honest list. Save us both the time."
            align="center"
            state={state}
          />
        </Reveal>

        <div style={{
          marginTop: 56,
          display: 'grid',
          gap: 16,
          maxWidth: 860, margin: '56px auto 0',
        }}>
          <Reveal>
            <FitBlock
              accent="sage"
              heading="For you if"
              items={FOR_YOU}
              mark="check"
            />
          </Reveal>
          <Reveal>
            <FitBlock
              accent="straw"
              heading="Not for you if"
              items={NOT_FOR_YOU}
              mark="cross"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FitBlock({ heading, items, mark, accent }) {
  const col = accentColor(accent);
  return (
    <div style={{
      padding: '30px 34px',
      background: 'var(--bg-2)',
      border: '1px solid var(--rule)',
      borderRadius: 16,
      position: 'relative',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        marginBottom: 18,
      }}>
        <span style={{
          padding: '4px 10px',
          borderRadius: 6,
          background: mark === 'check' ? 'var(--sage-soft)' : 'var(--straw-soft)',
          color: col,
          fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500,
        }}>{heading}</span>
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{
            display: 'flex', gap: 14, alignItems: 'flex-start',
            padding: '10px 0',
            borderTop: i === 0 ? 'none' : '1px dashed var(--rule)',
          }}>
            <Mark mark={mark} color={col} />
            <span style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.5 }}>
              {it}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Mark({ mark, color }) {
  if (mark === 'check') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ flexShrink: 0, marginTop: 4 }}>
        <circle cx="9" cy="9" r="8" fill="none" stroke={color} strokeWidth="1.3"/>
        <path d="M5 9.5l2.8 2.8L13 7" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" style={{ flexShrink: 0, marginTop: 4 }}>
      <circle cx="9" cy="9" r="8" fill="none" stroke={color} strokeWidth="1.3"/>
      <path d="M6 6l6 6M12 6l-6 6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

Object.assign(window, { ForWho });
