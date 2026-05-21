// Pricing v5 — V14 two-card layout integrated into the landing page.
//
// Replaces the previous single-card pricing. Two plans:
//   • Cowork OS         (self-serve)            — primary CTA, "Most popular" badge
//   • Cowork OS + 1:1   (with 1-hour setup)     — ghost CTA
// Both cards are equal height; the founding callout sits at the bottom of each
// card aligned across the two cards (a flex spacer pushes it down on Card 1
// which has one fewer "What you get" line, while Card 2 stays tight).
//
// Lemon Squeezy checkout URLs are placeholders — replace LEMON_SQUEEZY_URL_*
// when the products are live.

const LEMON_SQUEEZY_URL_SELF_SERVE = '#'; // TODO: paste Cowork OS checkout URL
const LEMON_SQUEEZY_URL_WITH_SETUP = '#'; // TODO: paste Cowork OS + 1:1 checkout URL

const PRICING_PLANS = {
  selfServe: {
    name: 'Cowork OS',
    tagline: 'The system, set up by you.',
    price: 87,
    oldPrice: 147,
    includes: [
    { text: 'The Cowork OS template' },
    { text: 'The setup guide' },
    { text: 'The video tutorial' },
    { text: 'All future updates' }],

    cta: 'Get Cowork OS · $87',
    href: LEMON_SQUEEZY_URL_SELF_SERVE
  },
  withSetup: {
    name: 'Cowork OS + 1:1',
    tagline: 'The system, set up with me.',
    price: 287,
    oldPrice: 347,
    includes: [
    { text: 'The Cowork OS template' },
    { text: 'The setup guide' },
    { text: 'The video tutorial' },
    { text: 'All future updates' },
    { text: '1-hour setup call (book within 30 days)', special: true }],

    cta: 'Get Cowork OS + 1:1 · $287',
    href: LEMON_SQUEEZY_URL_WITH_SETUP
  }
};

// ─────────────────────────────────────────────────────────────────────────
// LOCAL ICON PRIMITIVES (scoped — names prefixed with Pp to avoid collisions)
// ─────────────────────────────────────────────────────────────────────────

function PpCheck({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" style={{ flexShrink: 0, color: 'var(--sage-ink)' }}>
      <path d="M2 7.5l2.8 2.8L12 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);

}

function PpPlus({ size = 13, color = 'var(--orange)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" style={{ flexShrink: 0, color }}>
      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>);

}

function PpArrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 7h10m0 0L7.5 2.5M12 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);

}

function PpBullet({ children, kind = 'check' }) {
  const icon = kind === 'plus' ? <PpPlus /> : <PpCheck />;
  const isAccent = kind !== 'check';
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: isAccent ? 'var(--orange-ink)' : 'var(--ink-2)', fontWeight: isAccent ? 500 : 400, padding: '3px 0' }}>
      <span style={{ marginTop: 4 }}>{icon}</span>
      <span>{children}</span>
    </div>);

}

// ─────────────────────────────────────────────────────────────────────────
// COUNTER STRIP — founding spots progress, shared above both cards
// ─────────────────────────────────────────────────────────────────────────

function PpCounterStrip({ claimed = 13, total = 50 }) {
  const pct = claimed / total * 100;
  const left = total - claimed;
  const ref = React.useRef(null);
  const [filled, setFilled] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setFilled(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setFilled(true); io.disconnect(); } });
    }, { threshold: 0, rootMargin: '0px 0px -20% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ maxWidth: 760, margin: '0 auto' }}>
      <style>{`
        @keyframes ppBarShimmer {
          0%   { background-position: 130% 0; }
          100% { background-position: -30% 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pp-progress-fill { transition: none !important; animation: none !important; }
        }
      `}</style>
      {/* Scarcity eyebrow — pulsing dot + "Limited founding launch" */}
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          padding: '4px 11px 4px 9px',
          background: 'rgba(204,120,92,0.10)',
          border: '1px solid rgba(204,120,92,0.35)',
          borderRadius: 999,
          fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--orange-ink)', fontWeight: 500,
          fontFamily: "'DM Mono', monospace"
        }}>
          <span className="pp-pulse-dot" style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--orange)',
            boxShadow: '0 0 6px rgba(204,120,92,0.9)'
          }} />
          Limited launch offer
        </span>
      </div>

      {/* Counter strip — tinted-medium container */}
      <div className="lp-counter-strip" style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center',
        gap: 22,
        padding: '14px 22px',
        background: 'rgba(204,120,92,0.10)',
        border: '1px solid rgba(204,120,92,0.40)',
        borderRadius: 14
      }}>
        <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>
          <strong style={{ color: 'var(--ink)' }}>{claimed}</strong> of {total} launch spots claimed
        </span>
        <div style={{ height: 6, background: 'var(--bg)', borderRadius: 999, overflow: 'hidden', border: '1px solid var(--rule)' }}>
          <div className="pp-progress-fill" style={{
            width: (filled ? pct : 0) + '%',
            height: '100%',
            backgroundImage: 'linear-gradient(90deg, var(--orange) 0%, var(--orange) 38%, rgba(255,209,184,1) 50%, var(--orange) 62%, var(--orange) 100%)',
            backgroundSize: '220% 100%',
            backgroundPosition: '130% 0',
            boxShadow: '0 0 12px rgba(204,120,92,0.7)',
            transition: 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
            animation: filled ? 'ppBarShimmer 2.4s linear infinite 1.7s' : 'none',
          }} />
        </div>
        <span className="mono" style={{ fontSize: 11.5, color: 'var(--orange-ink)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
          {left} left
        </span>
      </div>
    </div>);

}

// ─────────────────────────────────────────────────────────────────────────
// PRICE BLOCK — big number left, two info lines bottom-aligned to its baseline
// ─────────────────────────────────────────────────────────────────────────

function PpPriceBlock({ price, oldPrice, oldLabel = 'after the first 50' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, flexWrap: 'wrap' }}>
      <div className="serif lp-price-num" style={{ fontSize: 64, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ink)' }}>${price}</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.4 }}>
        <div><span style={{ textDecoration: 'line-through' }}>${oldPrice}</span> {oldLabel}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 2 }}>One-time payment. Lifetime access.</div>
      </div>
    </div>);

}

// ─────────────────────────────────────────────────────────────────────────
// FOUNDING CALLOUT — soft tinted block at bottom of each card
// ─────────────────────────────────────────────────────────────────────────

function PpFoundingBlock() {
  return (
    <div style={{
      padding: '14px 16px',
      background: 'rgba(204,120,92,0.055)',
      border: '1px solid rgba(204,120,92,0.16)',
      borderRadius: 10
    }}>
      <div className="mono" style={{ fontSize: 10.5, color: 'var(--orange-ink)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
        And as a Founding Member
      </div>
      <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0, lineHeight: 1.5 }}>
        Access to the Founding Members community. A private space with me and the other early adopters.
      </p>
    </div>);

}

// ─────────────────────────────────────────────────────────────────────────
// CARD CONTENT — header + price + includes + founding + CTA
// `tight` = no flex spacer; founding sits directly under includes (Card 2).
// ─────────────────────────────────────────────────────────────────────────

function PpCardContent({ name, tagline, price, oldPrice, includes, cta, href,
  ctaPrimary, ctaIcon = 'arrow', callBulletKind = 'plus',
  tight = false }) {
  return (
    <React.Fragment>
      {/* Header */}
      <div>
        <div className="serif" style={{ fontSize: 28, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{name}</div>
        <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 4, fontStyle: 'italic' }}>{tagline}</div>
      </div>

      <PpPriceBlock price={price} oldPrice={oldPrice} />

      {/* Includes */}
      <div>
        <div className="mono" style={{ fontSize: 10.5, color: 'var(--ink-4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
          What you get
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {includes.map((it, i) =>
          <PpBullet key={i} kind={it.special ? callBulletKind : 'check'}>
              {it.special ? <strong>{it.text}</strong> : it.text}
            </PpBullet>
          )}
        </div>
      </div>

      {/* Spacer to align founding+CTA to the bottom (only on the shorter card). */}
      {!tight && <div style={{ flex: 1, minHeight: 8 }} />}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: tight ? 0 : 'auto' }}>
        {/* Founding Members perk — disabled for launch. Re-enable when the offer comes back. */}
        {/* <PpFoundingBlock /> */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: tight ? 'auto' : 0 }}>
          <PpCTA primary={ctaPrimary} icon={ctaIcon} href={href}>{cta}</PpCTA>
          <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--ink-4)' }}>Secured checkout.</div>
        </div>
      </div>
    </React.Fragment>);

}

function PpCTA({ primary, icon = 'arrow', href = '#', children }) {
  // Reuse the global .btn / .btn-primary / .btn-ghost styles so we inherit the
  // shared hover treatment (translateY, box-shadow ring, background change).
  return (
    <a
      href={href}
      className={'btn ' + (primary ? 'btn-primary' : 'btn-ghost')}
      style={{
        width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: 14.5,
        textDecoration: 'none',
      }}
    >
      {children} {icon === 'plus' ? <PpPlus size={14} color={primary ? '#fff' : 'currentColor'} /> : <PpArrow />}
    </a>);

}

// ─────────────────────────────────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────────────────────────────────

function Pricing({ state }) {
  const cls = sectionClass('orange', state);

  return (
    <section id="pricing" className={cls + " sec-fade-top lp-section"} style={{
      padding: '110px 0 120px',
      background: 'var(--bg-2)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
        <RevealStrict>
          <SectionHead
            n="10"
            label="Pricing"
            title={<>Choose how you <em className="ital">start.</em></>}
            lead="Set it up yourself, or set it up together. The first 50 get launch pricing."
            align="center"
            state={state} />
          
        </RevealStrict>

        <RevealStrict delay={80}>
          <div style={{ marginTop: 44, marginBottom: 28 }}>
            <PpCounterStrip />
          </div>
        </RevealStrict>

        <RevealStrict delay={120}>
          <div className="lp-grid-2-pri" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            maxWidth: 880,
            margin: '0 auto',
            alignItems: 'stretch'
          }}>
            {/* Card 1 — Cowork OS · "Most popular" · primary CTA */}
            <div style={{ position: 'relative' }}>
              <PpCardHalo position="tl" />
              <div className="lp-pricing-card" style={{
                position: 'relative',
                padding: '36px 32px 32px',
                borderRadius: 18,
                background: 'var(--bg)',
                border: '1px solid rgba(204,120,92,0.45)',
                display: 'flex', flexDirection: 'column', gap: 20,
                height: '100%',
                zIndex: 1
              }}>
                <div className="lp-pricing-popular-badge" style={{
                  position: 'absolute', top: 16, right: 18,
                  display: 'inline-flex', alignItems: 'center',
                  padding: '3px 10px',
                  background: 'rgba(204,120,92,0.10)',
                  border: '1px solid rgba(204,120,92,0.35)',
                  borderRadius: 999,
                  fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--orange-ink)', fontWeight: 500
                }}>
                  Most popular
                </div>
                <PpCardContent {...PRICING_PLANS.selfServe} ctaPrimary={true} />
              </div>
            </div>

            {/* Card 2 — Cowork OS + 1:1 · ghost CTA · tight (no spacer) */}
            <div style={{ position: 'relative' }}>
              <PpCardHalo position="tr" />
              <div className="lp-pricing-card" style={{
                position: 'relative',
                padding: '36px 32px 32px',
                borderRadius: 18,
                background: 'var(--bg)',
                border: '1px solid var(--rule)',
                display: 'flex', flexDirection: 'column', gap: 20,
                height: '100%',
                zIndex: 1
              }}>
                <PpCardContent {...PRICING_PLANS.withSetup} ctaPrimary={false} callBulletKind="plus" tight />
              </div>
            </div>
          </div>
        </RevealStrict>

        <p style={{
          marginTop: 36, fontSize: 12, color: 'var(--ink-4)',
          textAlign: 'center', lineHeight: 1.5, maxWidth: 600, marginInline: 'auto'
        }}>Requires an active Claude Pro or Max subscription. Cowork OS runs on top of Claude Desktop App. Not affiliated with Anthropic.


        </p>
      </div>
    </section>);

}

// Per-card halo — matches the benefits-section illustration halos
// (.cw-window--lit ::before): 420×420 round, blur 36px, mix-blend screen,
// opacity tied to the global --glow-k var so it tracks every other halo
// on the page.
//   tl  → orange halo (Cowork OS, "Most popular", orange border)
//   tr  → neutral grey halo (matches the grey border of the secondary card)
function PpCardHalo({ position = 'tl' }) {
  // Slightly lower than corner-flush, slightly less far outside than before.
  const placement = position === 'tl' ?
  { top: -20, left: -90 } :
  { top: -20, right: -90 };

  const stops = position === 'tl' ?
  `rgba(204,120,92,0.7) 0%,
       rgba(204,120,92,0.3) 38%,
       transparent 68%` :
  `rgba(170,178,190,0.55) 0%,
       rgba(170,178,190,0.22) 38%,
       transparent 68%`;

  return (
    <div aria-hidden style={{
      position: 'absolute',
      width: 420, height: 420,
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 0,
      background: `radial-gradient(circle at center, ${stops})`,
      filter: 'blur(36px)',
      mixBlendMode: 'screen',
      // Match .cw-window--lit::before — tracks the global glow setting
      opacity: 'calc(var(--glow-k) * 1.1)',
      ...placement
    }} />);

}

Object.assign(window, { Pricing });