// FinalCTA v4 — big orange breathing glow closer.

function FinalCTA({ state }) {
  const cls = sectionClass('orange', state);
  return (
    <section className={cls} style={{
      padding: '120px 0 130px',
      textAlign: 'center', position: 'relative',
    }}>
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <Asterisk size={42} />
          <h2 className="serif" style={{
            fontSize: 'clamp(46px, 6vw, 82px)',
            letterSpacing: '-0.025em', lineHeight: 1,
            margin: '24px auto 28px', fontWeight: 400, maxWidth: 900,
            textWrap: 'balance',
          }}>
            Turn Claude into your <em className="ital">personal coworker.</em>
          </h2>
          <p style={{
            fontSize: 18, color: 'var(--ink-2)',
            margin: '0 auto 34px', maxWidth: 560,
            lineHeight: 1.8,
          }}>
            One-time payment.{'  '}Set up in 15 minutes.{'  '}Claude, finally yours.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#pricing" className="btn btn-primary" style={{ padding: '16px 24px', fontSize: 15 }}>
              Get your Cowork OS now <Arrow />
            </a>
          </div>
          <div style={{ fontSize: 12.5, color: 'var(--ink-4)', marginTop: 20 }}>
            One-time payment. Secured checkout.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      padding: '40px 0 32px',
      borderTop: '1px solid var(--rule)',
      background: 'var(--bg-2)',
    }}>
      <div className="shell" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        gap: 32, flexWrap: 'wrap',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <LogoIcon size={24} />
            <span className="serif" style={{ fontSize: 18 }}>Cowork OS</span>
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-4)' }}>
            cowork-os.com · a coworker for Claude
          </div>
        </div>
        <div style={{ display: 'flex', gap: 32, fontSize: 13.5, color: 'var(--ink-3)', flexWrap: 'wrap' }}>
          <a className="link-u" href="#benefits">What it does</a>
          <a className="link-u" href="#pricing">Pricing</a>
          <a className="link-u" href="#faq">FAQ</a>
          <a className="link-u" href="mailto:quentin@cowork-os.com">Contact</a>
          <a className="link-u" href="#">Terms</a>
          <a className="link-u" href="#">Privacy</a>
        </div>
      </div>
      <div className="shell" style={{
        marginTop: 28, paddingTop: 18, borderTop: '1px dashed var(--rule)',
        fontSize: 11.5, color: 'var(--ink-4)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
      }}>
        <span>© 2026 Cowork OS — independent project</span>
        <span>Not affiliated with Anthropic. Claude is a trademark of Anthropic.</span>
      </div>
    </footer>
  );
}

Object.assign(window, { FinalCTA, Footer });
