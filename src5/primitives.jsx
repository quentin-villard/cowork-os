// Shared UI primitives. Section markers use the "Classic" (Eyebrow) style
// — previously tweakable via state.sectionMarkers, now frozen.

const { useEffect: uEff, useRef: uRef, useState: uSt } = React;

function Eyebrow({ children, n }) {
  // Section numbers (`n`) intentionally not rendered — call sites still pass them
  // so they can be re-enabled by restoring the span below.
  return (
    <span className="eyebrow">
      <span className="dot" />
      <span style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: 11.5 }}>{children}</span>
    </span>);

}

// SectionMarker was a tweakable "bar + number" variant. The tweak is frozen
// to "Classic", so SectionMarker is now an alias for Eyebrow — preserved as
// an export so existing call sites (<SectionMarker n=".." label=".." />) keep
// rendering without edits.
function SectionMarker({ n, label }) {
  return <Eyebrow n={n}>{label}</Eyebrow>;
}

function Reveal({ children, delay = 0 }) {
  const ref = uRef(null);
  const [v, setV] = uSt(false);
  uEff(() => {
    const el = ref.current;if (!el) {setV(true);return;}
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    if (r.top < vh * 1.1) {setTimeout(() => setV(true), delay);return;}
    if (!('IntersectionObserver' in window)) {setV(true);return;}
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {if (e.isIntersecting) {setTimeout(() => setV(true), delay);io.unobserve(el);}});
    }, { threshold: 0, rootMargin: '0px 0px -5% 0px' });
    io.observe(el);
    const fb = setTimeout(() => setV(true), 1400);
    return () => {io.disconnect();clearTimeout(fb);};
  }, [delay]);
  return <div ref={ref} className={"reveal " + (v ? 'in' : '')}>{children}</div>;
}

function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 7h10m0 0L7.5 2.5M12 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);

}

function Asterisk({ size = 28, color = 'var(--orange)' }) {
  const pts = [];
  for (let i = 0; i < 12; i++) {
    const a = i * 30 * Math.PI / 180;
    const long = i % 3 === 0;
    const r1 = long ? 2.2 : 2.8;
    const r2 = long ? 13.5 : 10.5;
    pts.push(
      <line key={i}
      x1={16 + Math.cos(a) * r1}
      y1={16 + Math.sin(a) * r1}
      x2={16 + Math.cos(a) * r2}
      y2={16 + Math.sin(a) * r2}
      stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    );
  }
  return (
    <svg className="cw-asterisk" width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      {pts}
    </svg>);

}

function Folder({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M1.5 3.6c0-.6.4-1 1-1h3l1.3 1.3h4.7c.6 0 1 .4 1 1v5.6c0 .6-.4 1-1 1h-9c-.6 0-1-.4-1-1V3.6z" stroke={color} strokeWidth="1.2" />
    </svg>);

}

function Plus({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>);

}

function ChevDown({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);

}

function SendArrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M8 12.5V3.5M8 3.5L4 7.5M8 3.5L12 7.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);

}

function SectionHead({ n, label, title, lead, align = 'left' }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? 780 : 820, margin: align === 'center' ? '0 auto' : 0 }}>
      {n || label ? <Eyebrow n={n}>{label}</Eyebrow> : null}
      <h2 className="serif" style={{
        fontSize: 'clamp(40px, 5.3vw, 64px)',
        lineHeight: 1.02,
        letterSpacing: '-0.02em',
        margin: '18px 0 14px',
        fontWeight: 400,
        textWrap: 'balance'
      }}>{title}</h2>
      {lead ? <p style={{ fontSize: 'clamp(15px, 2.2vw, 18px)', color: 'var(--ink-2)', margin: align === 'center' ? '0 auto' : 0, maxWidth: 640, textWrap: 'pretty', width: '100%' }}>{lead}</p> : null}
    </div>);

}

Object.assign(window, { Eyebrow, SectionMarker, Reveal, Arrow, Asterisk, Folder, Plus, ChevDown, SendArrow, SectionHead });