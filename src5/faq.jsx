// FAQ v4.

function FAQ({ state }) {
  const [open, setOpen] = React.useState(0);
  const cls = sectionClass('sky', state);
  return (
    <section id="faq" className={cls + " sec-fade-top lp-section"} style={{
      padding: '110px 0 110px',
      position: 'relative',
    }}>
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-grid-2-faq" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr',
          gap: 72, alignItems: 'start',
        }}>
          <RevealStrict>
            <div className="lp-no-sticky-mobile" style={{ position: 'sticky', top: 40 }}>
              <SectionMarker n="11" label="FAQ" state={state} />
              <h2 className="serif" style={{
                fontSize: 'clamp(38px, 4.8vw, 54px)',
                lineHeight: 1.02, letterSpacing: '-0.02em',
                margin: '16px 0 18px', fontWeight: 400,
              }}>
                Before <em className="ital">you buy.</em>
              </h2>
              <p style={{ color: 'var(--ink-3)', fontSize: 15, margin: 0, lineHeight: 1.55 }}>
                The things people ask me. Still stuck? <a href="mailto:hello@cowork-os.com?subject=Question before buying" className="link-u">Email me</a>.
              </p>
            </div>
          </RevealStrict>

          <RevealStrict delay={120}>
            <div>
              {FAQS.map((o, i) => (
                <FAQRow key={i} q={o.q} a={o.a} n={i+1}
                  open={open === i} onClick={() => setOpen(open === i ? -1 : i)}/>
              ))}
            </div>
          </RevealStrict>
        </div>
      </div>
    </section>
  );
}

function FAQRow({ q, a, open, onClick, n }) {
  return (
    <div style={{ borderTop: '1px solid var(--rule)' }}>
      <button onClick={onClick} className="lp-faq-button" style={{
        width: '100%', display: 'flex', alignItems: 'flex-start', gap: 18,
        padding: '22px 6px', background: 'transparent', border: 'none',
        textAlign: 'left', cursor: 'pointer', color: 'inherit', fontFamily: 'inherit',
      }}>
        <span className="mono" style={{
          fontSize: 11.5, color: 'var(--ink-4)', paddingTop: 8, minWidth: 20,
        }}>{String(n).padStart(2, '0')}</span>
        <span className="serif lp-faq-q" style={{
          flex: 1, fontSize: 22, letterSpacing: '-0.01em', lineHeight: 1.25, color: 'var(--ink)',
        }}>{q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: 999,
          display: 'grid', placeItems: 'center',
          border: '1px solid ' + (open ? 'var(--orange)' : 'var(--rule-strong)'),
          color: open ? '#fff' : 'var(--ink-2)',
          background: open ? 'var(--orange)' : 'transparent',
          flexShrink: 0,
          transition: 'all .2s ease',
          transform: open ? 'rotate(45deg)' : 'none',
          boxShadow: open ? '0 0 16px -2px rgba(204,120,92, calc(var(--glow-k) * 0.7))' : 'none',
        }}>
          <Plus size={12}/>
        </span>
      </button>
      <div className="lp-faq-answer" style={{
        maxHeight: open ? 600 : 0, overflow: 'hidden',
        transition: 'max-height .3s ease',
        padding: open ? '0 50px 22px' : '0 50px',
      }}>
        <p style={{
          margin: 0, fontSize: 15.5, color: 'var(--ink-2)', lineHeight: 1.6, maxWidth: 640,
        }}>{a}</p>
      </div>
    </div>
  );
}

Object.assign(window, { FAQ });
