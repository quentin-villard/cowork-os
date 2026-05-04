// Pricing Section 10 — Explorations canvas
// Six variations exploring: RECOMMENDED badge treatment, hierarchy between cards,
// counter strip style, and Founding Members sub-block treatment.

const { Fragment: PFr } = React;

// ─────────────────────────────────────────────────────────────────────────
// SHARED PRIMITIVES (scoped to explorations)
// ─────────────────────────────────────────────────────────────────────────

function PxCheck({ size = 13, color = 'var(--sage-ink)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" style={{ flexShrink: 0, color }}>
      <path d="M2 7.5l2.8 2.8L12 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PxStar({ size = 13, color = 'var(--orange)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" style={{ flexShrink: 0, color }}>
      <path d="M7 1l1.7 4 4.3.4-3.3 2.9 1 4.2L7 10.3 3.3 12.5l1-4.2L1 5.4l4.3-.4z" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function PxPlus({ size = 13, color = 'var(--orange)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" style={{ flexShrink: 0, color }}>
      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function PxArrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 7h10m0 0L7.5 2.5M12 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PxBullet({ children, kind = 'check' }) {
  const icon = kind === 'star' ? <PxStar/> : kind === 'plus' ? <PxPlus/> : <PxCheck/>;
  const isAccent = kind !== 'check';
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: isAccent ? 'var(--orange-ink)' : 'var(--ink-2)', fontWeight: isAccent ? 500 : 400, padding: '3px 0' }}>
      <span style={{ marginTop: 4 }}>{icon}</span>
      <span>{children}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// COUNTER STRIP — three flavors
// ─────────────────────────────────────────────────────────────────────────

function CounterStripA({ claimed = 43, total = 50 }) {
  const pct = (claimed / total) * 100;
  const left = total - claimed;
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      gap: 22,
      padding: '14px 22px',
      background: 'var(--bg-3)',
      border: '1px solid var(--rule)',
      borderRadius: 14,
      maxWidth: 760,
      margin: '0 auto',
    }}>
      <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>
        <strong style={{ color: 'var(--ink)' }}>{claimed}</strong> of {total} founding spots claimed
      </span>
      <div style={{ height: 6, background: 'var(--bg)', borderRadius: 999, overflow: 'hidden', border: '1px solid var(--rule)' }}>
        <div style={{ width: pct + '%', height: '100%', background: 'var(--orange)', boxShadow: '0 0 12px rgba(204,120,92,0.7)' }}/>
      </div>
      <span className="mono" style={{ fontSize: 11.5, color: 'var(--orange-ink)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
        {left} left
      </span>
    </div>
  );
}

function CounterStripB({ claimed = 43, total = 50 }) {
  // Tick-mark style — 50 tiny dashes, 43 lit
  const ticks = Array.from({ length: total });
  const left = total - claimed;
  return (
    <div style={{
      padding: '16px 24px',
      background: 'var(--bg-3)',
      border: '1px solid var(--rule)',
      borderRadius: 14,
      maxWidth: 760,
      margin: '0 auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
        <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>
          <strong style={{ color: 'var(--ink)' }}>{claimed}</strong> of {total} founding spots claimed
        </span>
        <span className="mono" style={{ fontSize: 11.5, color: 'var(--orange-ink)' }}>{left} left</span>
      </div>
      <div style={{ display: 'flex', gap: 3 }}>
        {ticks.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 10,
            background: i < claimed ? 'var(--orange)' : 'var(--bg)',
            border: '1px solid ' + (i < claimed ? 'var(--orange)' : 'var(--rule)'),
            borderRadius: 2,
            boxShadow: i < claimed ? '0 0 6px rgba(204,120,92,0.6)' : 'none',
          }}/>
        ))}
      </div>
    </div>
  );
}

function CounterStripC({ claimed = 43, total = 50 }) {
  // Inline mono ribbon — minimal, pleine largeur
  const pct = (claimed / total) * 100;
  const left = total - claimed;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 16,
      padding: '12px 0',
      borderTop: '1px solid var(--rule)',
      borderBottom: '1px solid var(--rule)',
    }}>
      <span className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', whiteSpace: 'nowrap' }}>
        Founding · Live
      </span>
      <span style={{ fontSize: 13, color: 'var(--ink-2)', whiteSpace: 'nowrap' }}>
        <strong style={{ color: 'var(--ink)' }}>{claimed}</strong> / {total} claimed
      </span>
      <div style={{ flex: 1, height: 4, background: 'var(--bg-3)', borderRadius: 999, overflow: 'hidden' }}>
        <div style={{ width: pct + '%', height: '100%', background: 'var(--orange)', boxShadow: '0 0 8px rgba(204,120,92,0.7)' }}/>
      </div>
      <span className="mono" style={{ fontSize: 11, color: 'var(--orange-ink)', whiteSpace: 'nowrap' }}>
        {left} left
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// PRICE BLOCK — uniforme dans toutes les versions
// ─────────────────────────────────────────────────────────────────────────

function PriceBlock({ price, oldPrice, oldLabel = 'after the first 50' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, flexWrap: 'wrap' }}>
      <div className="serif" style={{ fontSize: 64, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ink)' }}>${price}</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.4 }}>
        <div><span style={{ textDecoration: 'line-through' }}>${oldPrice}</span> {oldLabel}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 2 }}>One-time payment. Lifetime access.</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// FOUNDING SUB-BLOCK — quatre traitements
// ─────────────────────────────────────────────────────────────────────────

function FoundingBlockSoft() {
  return (
    <div style={{
      padding: '14px 16px',
      background: 'var(--orange-soft)',
      border: '1px solid rgba(204,120,92,0.25)',
      borderRadius: 10,
    }}>
      <div className="mono" style={{ fontSize: 10.5, color: 'var(--orange-ink)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
        And as a Founding Member
      </div>
      <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0, lineHeight: 1.5 }}>
        Access to the Founding Members community. A private space with me and the other early adopters.
      </p>
    </div>
  );
}

function FoundingBlockDashed() {
  return (
    <div style={{
      paddingTop: 16,
      borderTop: '1px dashed rgba(204,120,92,0.4)',
    }}>
      <span className="mono" style={{
        display: 'inline-block',
        fontSize: 10.5, color: 'var(--orange-ink)', letterSpacing: '0.12em', textTransform: 'uppercase',
        padding: '3px 8px',
        background: 'var(--orange-soft)',
        borderRadius: 4,
        marginBottom: 10,
      }}>
        And as a Founding Member
      </span>
      <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0, lineHeight: 1.5 }}>
        Access to the Founding Members community. A private space with me and the other early adopters.
      </p>
    </div>
  );
}

function FoundingBlockNested() {
  return (
    <div style={{
      padding: '14px 16px',
      background: 'var(--bg)',
      border: '1px solid var(--rule)',
      borderLeft: '2px solid var(--orange)',
      borderRadius: 8,
    }}>
      <div className="mono" style={{ fontSize: 10.5, color: 'var(--orange-ink)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
        And as a Founding Member
      </div>
      <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0, lineHeight: 1.5 }}>
        Access to the Founding Members community. A private space with me and the other early adopters.
      </p>
    </div>
  );
}

function FoundingBlockChip() {
  return (
    <div style={{ position: 'relative', paddingTop: 22 }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent, rgba(204,120,92,0.35), transparent)',
      }}/>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: -32, marginBottom: 12 }}>
        <span className="mono" style={{
          fontSize: 10.5, color: 'var(--orange-ink)', letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '5px 12px',
          background: 'var(--bg-2)',
          border: '1px solid rgba(204,120,92,0.35)',
          borderRadius: 999,
        }}>
          ★ Founding Member bonus
        </span>
      </div>
      <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0, lineHeight: 1.5, textAlign: 'center', maxWidth: 360, marginInline: 'auto' }}>
        Access to the Founding Members community. A private space with me and the other early adopters.
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// CARD WRAPPER — controllable highlight intensity
// ─────────────────────────────────────────────────────────────────────────

function PriceCard({ children, highlighted, intensity = 'medium', badge, badgeStyle = 'corner', style = {} }) {
  // intensity: 'subtle' | 'medium' | 'strong' | 'inverse'
  let cardStyle = {
    position: 'relative',
    padding: '36px 32px 32px',
    borderRadius: 18,
    background: 'var(--bg-2)',
    border: '1px solid var(--rule)',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    ...style,
  };

  if (highlighted) {
    if (intensity === 'subtle') {
      cardStyle.border = '1px solid rgba(204,120,92,0.55)';
    } else if (intensity === 'medium') {
      cardStyle.border = '1px solid rgba(204,120,92,0.65)';
      cardStyle.boxShadow = '0 0 0 1px rgba(204,120,92,0.25), 0 24px 60px -30px rgba(204,120,92,0.6)';
    } else if (intensity === 'strong') {
      cardStyle.border = '1px solid rgba(204,120,92,0.7)';
      cardStyle.background = 'linear-gradient(180deg, rgba(204,120,92,0.06) 0%, var(--bg-2) 50%)';
      cardStyle.boxShadow = '0 0 0 1px rgba(204,120,92,0.3), 0 30px 80px -30px rgba(204,120,92,0.8)';
    } else if (intensity === 'inverse') {
      cardStyle.background = '#0A0805';
      cardStyle.border = '1px solid rgba(204,120,92,0.6)';
      cardStyle.boxShadow = '0 30px 80px -30px rgba(204,120,92,0.7)';
    }
  }

  return (
    <div style={cardStyle}>
      {badge && badgeStyle === 'corner' && (
        <div style={{
          position: 'absolute', top: 0, right: 0,
          background: 'var(--orange)',
          color: '#fff',
          padding: '6px 14px',
          fontSize: 10.5,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontWeight: 500,
          borderTopRightRadius: 18,
          borderBottomLeftRadius: 12,
        }}>{badge}</div>
      )}
      {badge && badgeStyle === 'ribbon' && (
        <div style={{
          position: 'absolute', top: -12, left: 32,
          background: 'var(--orange)',
          color: '#fff',
          padding: '5px 12px',
          fontSize: 10.5,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontWeight: 500,
          borderRadius: 6,
          boxShadow: '0 8px 18px -6px rgba(204,120,92,0.6)',
        }}>{badge}</div>
      )}
      {badge && badgeStyle === 'tab' && (
        <div style={{
          position: 'absolute', top: -28, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--orange)',
          color: '#fff',
          padding: '6px 18px',
          fontSize: 10.5,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontWeight: 500,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          whiteSpace: 'nowrap',
        }}>{badge}</div>
      )}
      {badge && badgeStyle === 'glowdot' && (
        <div style={{
          position: 'absolute', top: 18, right: 22,
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '4px 10px 4px 8px',
          background: 'rgba(204,120,92,0.12)',
          border: '1px solid rgba(204,120,92,0.4)',
          borderRadius: 999,
          fontSize: 10.5,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--orange-ink)',
          fontWeight: 500,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--orange)', boxShadow: '0 0 8px rgba(204,120,92,1)' }}/>
          {badge}
        </div>
      )}
      {badge && badgeStyle === 'sidetab' && (
        <div style={{
          position: 'absolute', top: 24, right: -1,
          background: 'var(--orange)',
          color: '#fff',
          padding: '4px 12px 4px 14px',
          fontSize: 10,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontWeight: 500,
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
          boxShadow: '0 6px 14px -4px rgba(204,120,92,0.5)',
        }}>{badge}</div>
      )}
      {badge && badgeStyle === 'frameglow' && (
        <PFr>
          <div style={{
            position: 'absolute', inset: -1,
            borderRadius: 18,
            padding: 1,
            background: 'linear-gradient(135deg, rgba(204,120,92,0.8), rgba(204,120,92,0.2), rgba(204,120,92,0.8))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
          }}/>
          <div style={{
            position: 'absolute', top: 16, right: 16,
            fontSize: 10.5,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--orange-ink)',
            fontWeight: 600,
          }}>★ {badge}</div>
        </PFr>
      )}
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// CARD CONTENT — generic
// ─────────────────────────────────────────────────────────────────────────

function CardContent({ name, tagline, price, oldPrice, includes, founding, cta, ctaPrimary, foundingStyle = 'soft', highlightCallBullet = 'star', isCard2 }) {
  const FoundingBlock = ({
    soft: FoundingBlockSoft,
    dashed: FoundingBlockDashed,
    nested: FoundingBlockNested,
    chip: FoundingBlockChip,
  })[foundingStyle];

  return (
    <PFr>
      <div>
        <div className="serif" style={{ fontSize: 28, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{name}</div>
        <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 4, fontStyle: 'italic' }}>{tagline}</div>
      </div>

      <PriceBlock price={price} oldPrice={oldPrice}/>

      <div>
        <div className="mono" style={{ fontSize: 10.5, color: 'var(--ink-4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
          What you get
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {includes.map((it, i) => (
            <PxBullet key={i} kind={it.special ? highlightCallBullet : 'check'}>
              {it.special ? <strong>{it.text}</strong> : it.text}
            </PxBullet>
          ))}
        </div>
      </div>

      <FoundingBlock/>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 'auto' }}>
        <a href="#" className={ctaPrimary ? 'btn btn-primary' : 'btn btn-ghost'} style={{
          width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: 14.5,
        }}>
          {cta} <PxArrow/>
        </a>
        <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--ink-4)' }}>Secured checkout.</div>
      </div>
    </PFr>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const PLAN_1 = {
  name: 'Cowork OS',
  tagline: 'The system, set up by you.',
  price: 67,
  oldPrice: 127,
  includes: [
    { text: 'The Cowork OS template' },
    { text: 'The setup guide' },
    { text: 'The video tutorial' },
    { text: 'All future updates' },
  ],
  cta: 'Get Cowork OS · $67',
};

const PLAN_2 = {
  name: 'Cowork OS + 1:1',
  tagline: 'The system, set up with me.',
  price: 267,
  oldPrice: 327,
  includes: [
    { text: 'The Cowork OS template' },
    { text: 'The setup guide' },
    { text: 'The video tutorial' },
    { text: 'All future updates' },
    { text: '1-hour setup call (book within 30 days)', special: true },
  ],
  cta: 'Get Cowork OS + 1:1 · $267',
};

// ─────────────────────────────────────────────────────────────────────────
// SECTION SHELL — wraps eyebrow + title + counter + cards + disclaimer
// ─────────────────────────────────────────────────────────────────────────

function PricingShell({ children, counter, counterPosition = 'top' }) {
  return (
    <section className="s-orange" style={{
      padding: '80px 56px 80px',
      background: 'var(--bg-2)',
      position: 'relative',
      width: 1280,
      borderRadius: 8,
      overflow: 'hidden',
    }}>
      <div className="glow glow-top" style={{ opacity: 0.6 }}/>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 36px' }}>
          <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span className="dot"/>
            <span className="mono" style={{ color: 'var(--ink-4)', fontSize: 11.5 }}>10</span>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: 11.5 }}>Pricing</span>
          </span>
          <h2 className="serif" style={{ fontSize: 56, lineHeight: 1.02, letterSpacing: '-0.02em', margin: '16px 0 14px', fontWeight: 400 }}>
            Choose how you <em className="ital">start.</em>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', margin: 0, maxWidth: 580, marginInline: 'auto' }}>
            Set it up yourself, or set it up together. The first 50 get founding pricing.
          </p>
        </div>

        {counterPosition === 'top' && counter && (
          <div style={{ marginBottom: 44 }}>{counter}</div>
        )}

        {children}

        <p style={{
          marginTop: 40, fontSize: 12, color: 'var(--ink-4)',
          textAlign: 'center', lineHeight: 1.5, maxWidth: 600, marginInline: 'auto',
        }}>
          Requires an active Claude Pro or Max subscription. Cowork OS runs on top of Claude.
          Not affiliated with Anthropic.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// VARIATION 01 — Brief literal: corner badge, soft founding block, star bullet
// ─────────────────────────────────────────────────────────────────────────

function PricingV01() {
  return (
    <PricingShell counter={<CounterStripA/>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 960, margin: '0 auto' }}>
        <PriceCard>
          <CardContent {...PLAN_1} foundingStyle="soft" ctaPrimary={false}/>
        </PriceCard>
        <PriceCard highlighted intensity="medium" badge="Recommended" badgeStyle="corner">
          <CardContent {...PLAN_2} foundingStyle="soft" highlightCallBullet="star" ctaPrimary={true} isCard2/>
        </PriceCard>
      </div>
    </PricingShell>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// VARIATION 02 — Tab badge top + tick counter + dashed founding
// ─────────────────────────────────────────────────────────────────────────

function PricingV02() {
  return (
    <PricingShell counter={<CounterStripB/>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, maxWidth: 960, margin: '24px auto 0' }}>
        <PriceCard>
          <CardContent {...PLAN_1} foundingStyle="dashed" ctaPrimary={false}/>
        </PriceCard>
        <PriceCard highlighted intensity="strong" badge="Recommended" badgeStyle="tab">
          <CardContent {...PLAN_2} foundingStyle="dashed" highlightCallBullet="plus" ctaPrimary={true} isCard2/>
        </PriceCard>
      </div>
    </PricingShell>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// VARIATION 03 — Asymetric : carte 2 plus large + glowdot badge + nested founding
// ─────────────────────────────────────────────────────────────────────────

function PricingV03() {
  return (
    <PricingShell counter={<CounterStripC/>}>
      <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 24, maxWidth: 1000, margin: '36px auto 0', alignItems: 'start' }}>
        <PriceCard>
          <CardContent {...PLAN_1} foundingStyle="nested" ctaPrimary={false}/>
        </PriceCard>
        <PriceCard highlighted intensity="strong" badge="Recommended" badgeStyle="glowdot">
          <CardContent {...PLAN_2} foundingStyle="nested" highlightCallBullet="star" ctaPrimary={true} isCard2/>
        </PriceCard>
      </div>
    </PricingShell>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// VARIATION 04 — Inverse / lit card (carte 2 fond noir profond) + ribbon badge
// ─────────────────────────────────────────────────────────────────────────

function PricingV04() {
  return (
    <PricingShell counter={<CounterStripA/>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, maxWidth: 960, margin: '32px auto 0' }}>
        <PriceCard>
          <CardContent {...PLAN_1} foundingStyle="chip" ctaPrimary={false}/>
        </PriceCard>
        <PriceCard highlighted intensity="inverse" badge="Recommended" badgeStyle="ribbon">
          <CardContent {...PLAN_2} foundingStyle="chip" highlightCallBullet="star" ctaPrimary={true} isCard2/>
        </PriceCard>
      </div>
    </PricingShell>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// VARIATION 05 — Side-tab badge + dashed founding + subtle hierarchy
// ─────────────────────────────────────────────────────────────────────────

function PricingV05() {
  return (
    <PricingShell counter={<CounterStripB/>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, maxWidth: 960, margin: '24px auto 0' }}>
        {/* Card 1 — flat right edge */}
        <div style={{
          padding: '32px 32px 28px',
          borderRadius: '18px 0 0 18px',
          background: 'var(--bg-2)',
          border: '1px solid var(--rule)',
          borderRight: 'none',
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          <CardContent {...PLAN_1} foundingStyle="dashed" ctaPrimary={false}/>
        </div>
        {/* Card 2 — highlighted, sticks slightly up */}
        <div style={{
          position: 'relative',
          padding: '36px 32px 32px',
          borderRadius: '18px',
          background: 'linear-gradient(180deg, rgba(204,120,92,0.05) 0%, var(--bg-2) 50%)',
          border: '1px solid rgba(204,120,92,0.6)',
          marginTop: -8, marginBottom: -8,
          boxShadow: '0 0 0 1px rgba(204,120,92,0.25), 0 24px 60px -30px rgba(204,120,92,0.6)',
          display: 'flex', flexDirection: 'column', gap: 20,
          zIndex: 2,
        }}>
          <div style={{
            position: 'absolute', top: 24, right: -1,
            background: 'var(--orange)', color: '#fff',
            padding: '4px 12px', fontSize: 10, letterSpacing: '0.14em',
            textTransform: 'uppercase', fontWeight: 500,
            borderTopLeftRadius: 4, borderBottomLeftRadius: 4,
          }}>Recommended</div>
          <CardContent {...PLAN_2} foundingStyle="dashed" highlightCallBullet="plus" ctaPrimary={true} isCard2/>
        </div>
      </div>
    </PricingShell>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// VARIATION 06 — Frame glow gradient + chip founding + strong hierarchy
// ─────────────────────────────────────────────────────────────────────────

function PricingV06() {
  return (
    <PricingShell counter={<CounterStripC/>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, maxWidth: 960, margin: '32px auto 0' }}>
        <PriceCard>
          <CardContent {...PLAN_1} foundingStyle="chip" ctaPrimary={false}/>
        </PriceCard>
        <PriceCard highlighted intensity="strong" badge="Recommended" badgeStyle="frameglow">
          <CardContent {...PLAN_2} foundingStyle="chip" highlightCallBullet="star" ctaPrimary={true} isCard2/>
        </PriceCard>
      </div>
    </PricingShell>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// V2 SERIES — REBALANCED
// Base = V1 (linear gauge + soft founding + glow-dot badge + "+" bullet)
// Founding block sits ABOVE the CTA, not between checkmarks and CTA.
// Goal: don't overshoot card 2 vs card 1.
// ═══════════════════════════════════════════════════════════════════════

function CardContentV2({
  name, tagline, price, oldPrice, includes, cta,
  ctaPrimary, ctaIcon = 'arrow',
  ctaVariant,
  foundingStyle = 'soft',
  callBulletKind = 'plus',
  tight = false,
}) {
  const FoundingBlock = ({
    soft: FoundingBlockSoft,
    dashed: FoundingBlockDashed,
    nested: FoundingBlockNested,
    chip: FoundingBlockChip,
  })[foundingStyle];

  return (
    <PFr>
      {/* Header */}
      <div>
        <div className="serif" style={{ fontSize: 28, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{name}</div>
        <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 4, fontStyle: 'italic' }}>{tagline}</div>
      </div>

      <PriceBlock price={price} oldPrice={oldPrice}/>

      {/* Includes */}
      <div>
        <div className="mono" style={{ fontSize: 10.5, color: 'var(--ink-4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
          What you get
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {includes.map((it, i) => (
            <PxBullet key={i} kind={it.special ? callBulletKind : 'check'}>
              {it.special ? <strong>{it.text}</strong> : it.text}
            </PxBullet>
          ))}
        </div>
      </div>

      {/* Spacer pushes the founding+CTA group to the bottom — aligned across both cards.
          When tight=true, no spacer — founding sits right under the includes list. */}
      {!tight && <div style={{ flex: 1, minHeight: 8 }}/>}

      {/* FOUNDING + CTA grouped at the bottom — tight spacing */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: tight ? 0 : 'auto' }}>
        <FoundingBlock/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: tight ? 'auto' : 0 }}>
          <CTAButton ctaPrimary={ctaPrimary} ctaIcon={ctaIcon} variant={ctaVariant}>{cta}</CTAButton>
          <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--ink-4)' }}>Secured checkout.</div>
        </div>
      </div>
    </PFr>
  );
}

// CTA button with several variants beyond primary/ghost.
// variants: 'primary' | 'ghost' | 'soft' (orange-soft fill) | 'outline-accent' | 'neutral-fill'
function CTAButton({ ctaPrimary, ctaIcon = 'arrow', variant, children }) {
  const v = variant || (ctaPrimary ? 'primary' : 'ghost');
  let style = {
    width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: 14.5,
    display: 'inline-flex', alignItems: 'center', gap: 8,
    borderRadius: 10, fontWeight: 500, border: '1px solid transparent',
    transition: 'transform .15s, background .2s, border-color .2s, box-shadow .2s',
    cursor: 'pointer', whiteSpace: 'nowrap', textDecoration: 'none',
  };
  let iconColor = '#fff';
  if (v === 'primary') {
    Object.assign(style, { background: 'var(--orange)', color: '#fff', boxShadow: '0 10px 30px -12px rgba(204,120,92,0.6)' });
  } else if (v === 'ghost') {
    Object.assign(style, { background: 'transparent', color: 'var(--ink)', borderColor: 'var(--rule-strong)' });
    iconColor = 'currentColor';
  } else if (v === 'soft') {
    Object.assign(style, { background: 'rgba(204,120,92,0.14)', color: 'var(--orange-ink)', borderColor: 'rgba(204,120,92,0.35)' });
    iconColor = 'currentColor';
  } else if (v === 'outline-accent') {
    Object.assign(style, { background: 'transparent', color: 'var(--orange-ink)', borderColor: 'rgba(204,120,92,0.55)' });
    iconColor = 'currentColor';
  } else if (v === 'neutral-fill') {
    Object.assign(style, { background: 'var(--panel-2)', color: 'var(--ink)', borderColor: 'var(--rule-strong)' });
    iconColor = 'currentColor';
  }
  return (
    <a href="#" style={style}>
      {children} {ctaIcon === 'plus' ? <PxPlus size={14} color={iconColor}/> : <PxArrow/>}
    </a>
  );
}

// Symmetric label badge — used on the dual-badge variations
function BadgeChip({ children, accent = false, position = 'tr' }) {
  const pos = position === 'tl'
    ? { top: 16, left: 22 }
    : position === 'tr'
    ? { top: 16, right: 18 }
    : { top: 16, right: 18 };
  return (
    <div style={{
      position: 'absolute', ...pos,
      display: 'inline-flex', alignItems: 'center', gap: 7,
      padding: '3px 9px 3px 7px',
      background: accent ? 'rgba(204,120,92,0.10)' : 'rgba(245,240,235,0.04)',
      border: '1px solid ' + (accent ? 'rgba(204,120,92,0.35)' : 'rgba(245,240,235,0.10)'),
      borderRadius: 999,
      fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: accent ? 'var(--orange-ink)' : 'var(--ink-3)', fontWeight: 500,
    }}>
      <span style={{
        width: 5, height: 5, borderRadius: '50%',
        background: accent ? 'var(--orange)' : 'var(--ink-4)',
        boxShadow: accent ? '0 0 6px rgba(204,120,92,0.9)' : 'none',
      }}/>
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// V7 — Two-tier ghost CTA · Carte 2 = même importance visuelle
// Both cards: ghost outlined CTA. Card 2 has subtle glow-dot badge only.
// ─────────────────────────────────────────────────────────────────────────

function PricingV07() {
  return (
    <PricingShell counter={<CounterStripA/>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 960, margin: '0 auto' }}>
        <div style={{
          position: 'relative', padding: '36px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)', border: '1px solid var(--rule)',
          display: 'flex', flexDirection: 'column', gap: 20, minHeight: 720,
        }}>
          <CardContentV2 {...PLAN_1} foundingStyle="soft" ctaPrimary={false}/>
        </div>
        <div style={{
          position: 'relative', padding: '36px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)', border: '1px solid rgba(204,120,92,0.45)',
          display: 'flex', flexDirection: 'column', gap: 20, minHeight: 720,
        }}>
          {/* Smaller, more discreet glow-dot badge */}
          <div style={{
            position: 'absolute', top: 16, right: 18,
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '3px 9px 3px 7px',
            background: 'rgba(204,120,92,0.10)',
            border: '1px solid rgba(204,120,92,0.35)',
            borderRadius: 999,
            fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--orange-ink)', fontWeight: 500,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--orange)', boxShadow: '0 0 6px rgba(204,120,92,0.9)' }}/>
            Recommended
          </div>
          <CardContentV2 {...PLAN_2} foundingStyle="soft" callBulletKind="plus" ctaPrimary={false} ctaIcon="arrow"/>
        </div>
      </div>
    </PricingShell>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// V8 — Both primary CTA · différenciation par l'icône
// CTA cohérents (orange solide), Card 2 a un "+" sur le CTA pour signaler 1:1
// Badge glow-dot très discret. Égalité parfaite hors badge.
// ─────────────────────────────────────────────────────────────────────────

function PricingV08() {
  return (
    <PricingShell counter={<CounterStripA/>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 960, margin: '0 auto' }}>
        <div style={{
          position: 'relative', padding: '36px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)', border: '1px solid var(--rule)',
          display: 'flex', flexDirection: 'column', gap: 20, minHeight: 720,
        }}>
          <CardContentV2 {...PLAN_1} foundingStyle="soft" ctaPrimary={true}/>
        </div>
        <div style={{
          position: 'relative', padding: '36px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)', border: '1px solid var(--rule)',
          display: 'flex', flexDirection: 'column', gap: 20, minHeight: 720,
        }}>
          {/* Tiny corner glow dot — almost decorative */}
          <div style={{
            position: 'absolute', top: 16, right: 18,
            display: 'inline-flex', alignItems: 'center', gap: 7,
            fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--orange-ink)', fontWeight: 500,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--orange)', boxShadow: '0 0 8px rgba(204,120,92,1)' }}/>
            With 1:1 setup
          </div>
          <CardContentV2 {...PLAN_2} foundingStyle="soft" callBulletKind="plus" ctaPrimary={true} ctaIcon="plus"/>
        </div>
      </div>
    </PricingShell>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// V9 — Symmetric labels · Les deux cartes ont un mini-label
// "MOST POPULAR" + "WITH 1:1" — équilibre par symétrie. CTA primary partout.
// ─────────────────────────────────────────────────────────────────────────

function PricingV09() {
  const SymLabel = ({ children, accent }) => (
    <div style={{
      position: 'absolute', top: 16, left: 22,
      display: 'inline-flex', alignItems: 'center', gap: 7,
      fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: accent ? 'var(--orange-ink)' : 'var(--ink-3)', fontWeight: 500,
    }}>
      <span style={{
        width: 5, height: 5, borderRadius: '50%',
        background: accent ? 'var(--orange)' : 'var(--ink-4)',
        boxShadow: accent ? '0 0 8px rgba(204,120,92,1)' : 'none',
      }}/>
      {children}
    </div>
  );
  return (
    <PricingShell counter={<CounterStripA/>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 960, margin: '0 auto' }}>
        <div style={{
          position: 'relative', padding: '46px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)', border: '1px solid var(--rule)',
          display: 'flex', flexDirection: 'column', gap: 20, minHeight: 720,
        }}>
          <SymLabel>Self-serve</SymLabel>
          <CardContentV2 {...PLAN_1} foundingStyle="soft" ctaPrimary={true}/>
        </div>
        <div style={{
          position: 'relative', padding: '46px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)', border: '1px solid var(--rule)',
          display: 'flex', flexDirection: 'column', gap: 20, minHeight: 720,
        }}>
          <SymLabel accent>With 1:1 setup</SymLabel>
          <CardContentV2 {...PLAN_2} foundingStyle="soft" callBulletKind="plus" ctaPrimary={true} ctaIcon="plus"/>
        </div>
      </div>
    </PricingShell>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// V10 — Card 1 = primary (entrée naturelle, le moins cher)
// Carte 2 a un badge discret "WITH 1:1" mais bouton ghost.
// Renverse la dominance — le défaut est le plan à $67.
// ─────────────────────────────────────────────────────────────────────────

function PricingV10() {
  return (
    <PricingShell counter={<CounterStripA/>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 960, margin: '0 auto' }}>
        <div style={{
          position: 'relative', padding: '36px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)',
          border: '1px solid rgba(204,120,92,0.45)',
          display: 'flex', flexDirection: 'column', gap: 20, minHeight: 720,
        }}>
          <div style={{
            position: 'absolute', top: 16, right: 18,
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '3px 9px 3px 7px',
            background: 'rgba(204,120,92,0.10)',
            border: '1px solid rgba(204,120,92,0.35)',
            borderRadius: 999,
            fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--orange-ink)', fontWeight: 500,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--orange)', boxShadow: '0 0 6px rgba(204,120,92,0.9)' }}/>
            Most popular
          </div>
          <CardContentV2 {...PLAN_1} foundingStyle="soft" ctaPrimary={true}/>
        </div>
        <div style={{
          position: 'relative', padding: '36px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)', border: '1px solid var(--rule)',
          display: 'flex', flexDirection: 'column', gap: 20, minHeight: 720,
        }}>
          <CardContentV2 {...PLAN_2} foundingStyle="soft" callBulletKind="plus" ctaPrimary={false}/>
        </div>
      </div>
    </PricingShell>
  );
}

Object.assign(window, {
  PricingV01, PricingV02, PricingV03, PricingV04, PricingV05, PricingV06,
  PricingV07, PricingV08, PricingV09, PricingV10,
});

// ═══════════════════════════════════════════════════════════════════════
// V3 SERIES — DUAL BADGES + NUANCED CTAs
// Both cards get a label badge. CTA on card 1 is no longer a flat ghost —
// it's a soft-tinted or accent-outline button so card 1 doesn't disappear.
// Spacing checkmarks ↔ founding callout reduced.
// ═══════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────
// V11 — MOST POPULAR / FASTEST SETUP · soft-tinted (carte 1) + primary (carte 2)
// ─────────────────────────────────────────────────────────────────────────

function PricingV11() {
  return (
    <PricingShell counter={<CounterStripA/>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 960, margin: '0 auto' }}>
        <div style={{
          position: 'relative', padding: '46px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)', border: '1px solid var(--rule)',
          display: 'flex', flexDirection: 'column', gap: 18, minHeight: 720,
        }}>
          <BadgeChip position="tl">Most popular</BadgeChip>
          <CardContentV2 {...PLAN_1} foundingStyle="soft" ctaVariant="soft"/>
        </div>
        <div style={{
          position: 'relative', padding: '46px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)', border: '1px solid rgba(204,120,92,0.45)',
          display: 'flex', flexDirection: 'column', gap: 18, minHeight: 720,
        }}>
          <BadgeChip position="tl" accent>Fastest setup</BadgeChip>
          <CardContentV2 {...PLAN_2} foundingStyle="soft" callBulletKind="plus" ctaVariant="primary" ctaIcon="plus"/>
        </div>
      </div>
    </PricingShell>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// V12 — BUILD IT YOURSELF / BUILD IT TOGETHER · neutral-fill (carte 1) + primary (carte 2)
// ─────────────────────────────────────────────────────────────────────────

function PricingV12() {
  return (
    <PricingShell counter={<CounterStripA/>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 960, margin: '0 auto' }}>
        <div style={{
          position: 'relative', padding: '46px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)', border: '1px solid var(--rule)',
          display: 'flex', flexDirection: 'column', gap: 18, minHeight: 720,
        }}>
          <BadgeChip position="tl">Build it yourself</BadgeChip>
          <CardContentV2 {...PLAN_1} foundingStyle="soft" ctaVariant="neutral-fill"/>
        </div>
        <div style={{
          position: 'relative', padding: '46px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)', border: '1px solid rgba(204,120,92,0.45)',
          display: 'flex', flexDirection: 'column', gap: 18, minHeight: 720,
        }}>
          <BadgeChip position="tl" accent>Build it together</BadgeChip>
          <CardContentV2 {...PLAN_2} foundingStyle="soft" callBulletKind="plus" ctaVariant="primary" ctaIcon="plus"/>
        </div>
      </div>
    </PricingShell>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// V13 — MOST POPULAR / MOST POWERFUL · outline-accent (carte 1) + primary (carte 2)
// ─────────────────────────────────────────────────────────────────────────

function PricingV13() {
  return (
    <PricingShell counter={<CounterStripA/>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 960, margin: '0 auto' }}>
        <div style={{
          position: 'relative', padding: '46px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)', border: '1px solid var(--rule)',
          display: 'flex', flexDirection: 'column', gap: 18, minHeight: 720,
        }}>
          <BadgeChip position="tl">Most popular</BadgeChip>
          <CardContentV2 {...PLAN_1} foundingStyle="soft" ctaVariant="outline-accent"/>
        </div>
        <div style={{
          position: 'relative', padding: '46px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)', border: '1px solid rgba(204,120,92,0.45)',
          display: 'flex', flexDirection: 'column', gap: 18, minHeight: 720,
        }}>
          <BadgeChip position="tl" accent>Most powerful</BadgeChip>
          <CardContentV2 {...PLAN_2} foundingStyle="soft" callBulletKind="plus" ctaVariant="primary" ctaIcon="plus"/>
        </div>
      </div>
    </PricingShell>
  );
}

Object.assign(window, { PricingV11, PricingV12, PricingV13 });

// ─────────────────────────────────────────────────────────────────────────
// V14 — V10 tightened · cartes de hauteur égale, boutons + callouts alignés
// L'espace supplémentaire est ajouté ENTRE les checkmarks et le founding callout
// uniquement sur la carte 1 (qui a 1 ligne de moins). La carte 2 (avec le
// 1-hour setup call) garde un spacing serré.
// ─────────────────────────────────────────────────────────────────────────

function PricingV14() {
  return (
    <PricingShell counter={<CounterStripA/>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 960, margin: '0 auto', alignItems: 'stretch' }}>
        {/* Card 1 — flex column, founding pushed down by margin-top:auto so cards align */}
        <div style={{
          position: 'relative', padding: '36px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)',
          border: '1px solid rgba(204,120,92,0.45)',
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          <div style={{
            position: 'absolute', top: 16, right: 18,
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '3px 9px 3px 7px',
            background: 'rgba(204,120,92,0.10)',
            border: '1px solid rgba(204,120,92,0.35)',
            borderRadius: 999,
            fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--orange-ink)', fontWeight: 500,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--orange)', boxShadow: '0 0 6px rgba(204,120,92,0.9)' }}/>
            Most popular
          </div>
          <CardContentV2 {...PLAN_1} foundingStyle="soft" ctaPrimary={true}/>
        </div>
        {/* Card 2 — tight (founding directly under checkmarks, no spacer) */}
        <div style={{
          position: 'relative', padding: '36px 32px 32px', borderRadius: 18,
          background: 'var(--bg-2)', border: '1px solid var(--rule)',
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          <CardContentV2 {...PLAN_2} foundingStyle="soft" callBulletKind="plus" ctaPrimary={false} tight/>
        </div>
      </div>
    </PricingShell>
  );
}

Object.assign(window, { PricingV14 });
