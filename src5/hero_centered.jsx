// Hero — centered, supercharged headline, lumen pill (color via state).
// Values previously exposed as tweaks (heroStyle, scLayout, toolCapsule, capsuleOrange,
// headline variant) are now frozen to the selected design. Only pillStyle and pillColor
// remain tweakable.

// Build the supercharged headline — now frozen to:
//   - layout: '2lines-nosuper'  → "Turn [Claude Cowork capsule]" / "into your personal AI assistant"
//   - capsule: true             → logo + label sit in a bordered capsule
//   - orange text in capsule: false (white)
function buildSuperchargedHeadline() {
  const logo = (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      verticalAlign: '-0.12em', position: 'relative',
      width: '0.85em', height: '0.85em',
      margin: '0 0.08em 0 0',
    }}>
      <span style={{
        position: 'absolute', inset: '-28%', borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(204,120,92,0.38) 0%, rgba(204,120,92,0.12) 45%, transparent 72%)',
        filter: 'blur(2px)',
        pointerEvents: 'none',
      }} />
      <svg viewBox="-18 -18 36 36" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'visible' }} aria-hidden="true">
        {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => {
          const a = (i * 30) * Math.PI / 180;
          const long = i % 3 === 0;
          const r1 = long ? 1.6 : 2;
          const r2 = long ? 15 : 11;
          return (
            <line key={i}
              x1={Math.cos(a) * r1} y1={Math.sin(a) * r1}
              x2={Math.cos(a) * r2} y2={Math.sin(a) * r2}
              stroke="var(--orange)" strokeWidth="2.6" strokeLinecap="round"/>
          );
        })}
      </svg>
    </span>
  );

  const toolGroup = (
    <span className="lp-hero-toolcapsule" style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.14em',
      padding: '0.08em 0.32em 0.12em',
      margin: '0 0.06em',
      borderRadius: 12,
      border: '1px solid rgba(204,120,92,0.45)',
      background: 'linear-gradient(180deg, rgba(204,120,92,0.10) 0%, rgba(204,120,92,0.04) 100%)',
      boxShadow: '0 0 0 1px rgba(204,120,92,0.08), 0 8px 24px -10px rgba(204,120,92,0.35), inset 0 0 24px rgba(204,120,92,0.06)',
      verticalAlign: '-0.05em',
    }}>
      {logo}<span>Claude Cowork</span>
    </span>
  );

  return {
    maxWidth: 1200,
    fontSize: 'clamp(44px, 6vw, 84px)',
    main: (
      <span style={{ display: 'block' }}>
        <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
          <span style={{ marginRight: '0.4em' }}>Turn</span>{toolGroup}
        </span>
        <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
          into your <em className="ital serif">personal <span className="lp-hero-line3">AI assistant</span></em>
        </span>
      </span>
    ),
    kicker: "Cowork OS gives Claude Cowork a structured system for your projects, voice, rules, and tools, so it stops starting from zero and starts producing work that actually feels like yours.",
  };
}

const SUPERCHARGED = buildSuperchargedHeadline();

function Nav() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 0',
    }}>
      <a
        href="/"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        aria-label="Back to top"
        style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, whiteSpace: 'nowrap', color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
      >
        <LogoIcon size={30} glow />
        <span className="serif" style={{ fontSize: 22, whiteSpace: 'nowrap' }}>Cowork OS</span>
      </a>
      <div className="lp-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 22, fontSize: 14, color: 'var(--ink-2)' }}>
        <a href="#benefits" className="link-u">What it does</a>
        <a href="#how" className="link-u">How it works</a>
        <a href="#pricing" className="link-u">Pricing</a>
        <a href="#faq" className="link-u">FAQ</a>
        <a href="#pricing" className="btn btn-primary" style={{ padding: '9px 14px', fontSize: 13.5 }}>
          Get access <Arrow />
        </a>
      </div>
    </div>
  );
}

function Hero({ state }) {
  const h = SUPERCHARGED;
  const cls = sectionClass('orange', state);

  const pillColors = {
    orange: { bg: 'var(--orange-soft)', color: 'var(--orange-ink)', border: 'rgba(204,120,92,0.3)', dot: 'var(--orange)', dotGlow: 'rgba(204,120,92,0.22)' },
    sage:   { bg: 'var(--sage-soft)',   color: 'var(--sage-ink)',   border: 'rgba(124,146,116,0.3)', dot: 'var(--sage)',   dotGlow: 'rgba(124,146,116,0.22)' },
    straw:  { bg: 'var(--straw-soft)',  color: 'var(--straw-ink)',  border: 'rgba(214,168,91,0.3)',  dot: 'var(--straw)',  dotGlow: 'rgba(214,168,91,0.22)' },
    sky:    { bg: 'var(--sky-soft)',    color: 'var(--sky-ink)',    border: 'rgba(122,154,181,0.3)', dot: 'var(--sky)',    dotGlow: 'rgba(122,154,181,0.22)' },
    neutral:{ bg: 'var(--panel)',       color: 'var(--ink-3)',      border: 'var(--rule-strong)',    dot: 'var(--ink-4)',  dotGlow: 'rgba(255,255,255,0.08)' },
  };
  const c = pillColors[state.pillColor] || pillColors.sky;

  const pillStyles = {
    simple: (
      <span className="cw-pill" style={{ background: c.bg, color: c.color, borderColor: c.border, fontSize: 13, letterSpacing: '0.01em' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.dot, boxShadow: `0 0 0 4px ${c.dotGlow}`, display: 'inline-block', flexShrink: 0 }} />
        Operating System for Claude Cowork
      </span>
    ),
    lumen: (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: '7px 14px',
        borderRadius: 999,
        border: '1px solid var(--rule-strong)',
        background: 'var(--bg-2)',
        fontSize: 13,
        color: 'var(--ink-2)',
      }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: c.dot, boxShadow: `0 0 0 3px ${c.dotGlow}`, display: 'inline-block', flexShrink: 0 }} />
        <span>Operating System for Claude Cowork</span>
      </span>
    ),
    ghost: (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontSize: 12.5, color: 'var(--ink-3)', letterSpacing: '0.06em',
        textTransform: 'uppercase',
      }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: c.dot, display: 'inline-block' }} />
        Operating System for Claude Cowork
      </span>
    ),
  };
  const Pill = () => pillStyles[state.pillStyle] || pillStyles.simple;

  return (
    <section id="hero" className={cls + " lp-hero"} style={{ paddingTop: 28, paddingBottom: 0, position: 'relative' }}>
      <div className="glow glow-breathe" style={{ opacity: 0.35 }} />

      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── CENTERED TEXT BLOCK ── */}
        <div className="lp-hero-text-block" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', paddingTop: 72, paddingBottom: 64,
        }}>
          <div style={{ marginBottom: 32 }}><Pill /></div>
          <h1 className="serif lp-hero-h1" style={{
            fontSize: h.fontSize,
            lineHeight: 1.0, letterSpacing: '-0.03em',
            margin: '0 auto', fontWeight: 400,
            textWrap: 'balance', maxWidth: h.maxWidth,
          }}>
            {h.main}
          </h1>
          <p className="lp-hero-kicker" style={{
            fontSize: 19, lineHeight: 1.6, color: 'var(--ink-2)',
            margin: '28px auto 40px', maxWidth: 560, textWrap: 'pretty',
          }}>{h.kicker}</p>
          <div className="lp-hero-buttons" style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#pricing" className="btn btn-primary" style={{ padding: '14px 22px', fontSize: 15 }}>
              Get Access to Cowork OS <Arrow />
            </a>
            <a href="#benefits" className="btn btn-ghost" style={{ padding: '14px 22px', fontSize: 15 }}>
              See what it does
            </a>
          </div>
        </div>

        {/* ── VIDEO DEMO ── */}
        <div className="lp-hero-video" style={{
          position: 'relative',
          width: '100%',
          maxWidth: 900,
          margin: '0 auto',
          marginBottom: 80,
        }}>
          {/* Outer glow ring */}
          <div style={{
            position: 'absolute',
            inset: -1,
            borderRadius: 20,
            background: 'linear-gradient(135deg, rgba(204,120,92,0.35) 0%, rgba(204,120,92,0.08) 50%, rgba(122,154,181,0.15) 100%)',
            zIndex: 0,
          }} />

          {/* Video container */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            borderRadius: 18,
            overflow: 'hidden',
            background: 'var(--bg-2)',
            border: '1px solid var(--rule-strong)',
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
            aspectRatio: '16/9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {/* Tella embed — responsive 16:9, no autoplay */}
            <iframe
              src="https://www.tella.tv/video/vid_cmpfa22dr00g40bjc2id50wxf/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0&o=0"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 0,
              }}
              allow="autoplay; fullscreen"
              title="Cowork OS demo"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

Object.assign(window, { Hero, Nav });
