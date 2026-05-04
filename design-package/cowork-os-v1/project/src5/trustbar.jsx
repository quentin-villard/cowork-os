// Trust bar — flat, no container. Text directly on background.
// Order: Built by · Notion and AI builder · templates + rating

const TRUST_ORDERED = [
  "Built by Quentin Villard",
  "Notion and AI builder",
  "40,000+ templates rated 4.9★",
];

function TrustBar() {
  return (
    <section id="trust" style={{ padding: '0 0 56px' }}>
      <div className="shell">
        <Reveal>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 16,
            justifyContent: 'center', flexWrap: 'wrap',
          }}>
            {/* Avatar */}
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--orange), var(--orange-ink))',
              display: 'grid', placeItems: 'center',
              color: '#fff', fontFamily: 'Instrument Serif, serif', fontSize: 16,
              flexShrink: 0,
              overflow: 'hidden',
            }}>Q</div>
            {TRUST_ORDERED.map((t, i) => (
              <React.Fragment key={i}>
                <span style={{ fontSize: 13.5, color: 'var(--ink-4)', letterSpacing: '0.01em' }}>{t}</span>
                {i < TRUST_ORDERED.length - 1 && (
                  <span style={{ width: 3, height: 3, background: 'var(--ink-4)', borderRadius: '50%', opacity: 0.5, flexShrink: 0 }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { TrustBar });
