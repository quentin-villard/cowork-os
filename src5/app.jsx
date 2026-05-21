// App — drives the landing page. Most design knobs previously exposed as tweaks
// are now frozen; only painsHalo / pillStyle / pillColor remain. See tweaks.jsx
// and HANDOFF.md.

const { useEffect: uE, useState: uS } = React;

function App() {
  const [state, setState] = uS(() => ({
    // Tweakable (live in the Tweaks panel):
    painsHalo: 50,           // 0–100, drives --pains-halo-alpha
    pillStyle: 'lumen',      // 'simple' | 'lumen' | 'ghost'
    pillColor: 'sky',        // 'orange' | 'sage' | 'straw' | 'sky' | 'neutral'
    ...(window.__TWEAKS__ || {}),
  }));
  const [tweaksOpen, setTweaksOpen] = uS(false);
  const [scrolled, setScrolled] = uS(false);

  uE(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Apply frozen design settings once on mount: visible glow + highlight words.
  // (data-contrast="charcoal" is set directly in index.html.)
  uE(() => {
    document.documentElement.style.setProperty('--glow-k', '1');
    document.body.classList.add('hl-on');
  }, []);

  // Push pains halo intensity into CSS var (0–1 scale, max alpha ~0.85).
  uE(() => {
    const v = Math.max(0, Math.min(100, state.painsHalo ?? 50)) / 100;
    document.documentElement.style.setProperty('--pains-halo-alpha', String((v * 0.85).toFixed(3)));
  }, [state.painsHalo]);

  uE(() => {
    function onMsg(ev) {
      const d = ev.data || {};
      if (d.type === '__activate_edit_mode')   setTweaksOpen(true);
      if (d.type === '__deactivate_edit_mode') setTweaksOpen(false);
    }
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: scrolled ? 'rgba(10, 10, 11, 0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: '1px solid ' + (scrolled ? 'var(--rule)' : 'transparent'),
        transition: 'background .25s ease, border-color .25s ease, backdrop-filter .25s ease',
      }}>
        <div className="shell-wide">
          <Nav />
        </div>
      </div>
      <Hero state={state} />
      <TrustBar />
      <Pains state={state} />
      <Meet state={state} />
      <Benefits state={state} />
      <HowItWorks state={state} />
      <Inside state={state} />
      <ForWho state={state} />
      <Founder state={state} />
      <Pricing state={state} />
      <FAQ state={state} />
      <FinalCTA state={state} />
      <Footer />
      <Tweaks state={state} setState={setState} visible={tweaksOpen} onClose={() => setTweaksOpen(false)} />
    </div>
  );
}

// Resolve a section's accent class. Color scheme is now frozen to "arc"
// (per-section accent); no more mono mode.
function sectionClass(accent) {
  return 's-' + (accent || 'orange');
}
window.sectionClass = sectionClass;

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
