// Trust bar — flat, no container. Text directly on background.
// Order: Built by · Notion and AI builder · templates + rating

const TRUST_ORDERED = [
  "Built by Quentin Villard",
  "Notion and AI builder",
  "41,000+ templates rated 4.9★",
];

function TrustBar() {
  return (
    <section id="trust" style={{ padding: '0 0 56px' }}>
      <div className="shell">
        <Reveal>
          <div className="lp-trustbar" style={{
            display: 'flex', alignItems: 'center', gap: 16,
            justifyContent: 'center', flexWrap: 'wrap',
          }}>
            {/* Avatar */}
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              flexShrink: 0,
              overflow: 'hidden',
              border: '1px solid var(--rule-strong)',
            }}>
              <img src="src5/assets/quentin.webp" alt="Quentin Villard"
                   style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
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
