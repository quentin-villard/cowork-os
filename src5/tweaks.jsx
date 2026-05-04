// Tweaks panel — trimmed to the 3 still-iterable knobs:
// Pains halo intensity, Pill style, Pill color.
// Removed (frozen in the design):
//   contrastScheme, glowIntensity, colorScheme, highlightWords, sectionMarkers,
//   heroStyle, headline, scLayout, toolCapsule, capsuleOrange, meetLead,
//   showScarcity.
// See HANDOFF.md.

function Tweaks({ state, setState, visible, onClose }) {
  if (!visible) return null;

  function update(partial) {
    setState(s => ({ ...s, ...partial }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: partial }, '*');
  }

  return (
    <div style={{
      position: 'fixed', bottom: 20, right: 20, width: 340, zIndex: 999,
      background: 'var(--bg-2)',
      border: '1px solid var(--rule-strong)',
      borderRadius: 14,
      boxShadow: '0 30px 80px -30px rgba(0,0,0,0.6), 0 0 0 1px rgba(204,120,92,0.15)',
      overflow: 'hidden',
      maxHeight: '85vh', overflowY: 'auto',
    }}>
      <div style={{
        padding: '12px 16px',
        borderBottom: '1px solid var(--rule)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'var(--bg-3)',
        position: 'sticky', top: 0, zIndex: 1,
      }}>
        <span style={{ fontSize: 11, letterSpacing: '0.1em', color: 'var(--ink-2)' }}>
          TWEAKS
        </span>
        <button onClick={onClose} style={{
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: 'var(--ink-3)', fontSize: 16, lineHeight: 1,
        }}>×</button>
      </div>

      <div style={{ padding: 18 }}>
        <Fld label="Pains halo intensity">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <input
              type="range"
              min={0} max={100} step={5}
              value={state.painsHalo ?? 50}
              onChange={e => update({ painsHalo: Number(e.target.value) })}
              style={{ flex: 1, accentColor: 'var(--orange)' }}
            />
            <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', width: 28, textAlign: 'right' }}>
              {state.painsHalo ?? 50}
            </span>
          </div>
        </Fld>

        <Fld label="Pill style">
          <Chips
            options={[
              { v: 'simple', l: 'Simple' },
              { v: 'lumen',  l: 'Avec CTA →' },
              { v: 'ghost',  l: 'Ghost' },
            ]}
            value={state.pillStyle}
            onChange={v => update({ pillStyle: v })}
          />
        </Fld>

        <Fld label="Pill color" last>
          <Chips
            options={[
              { v: 'orange',  l: 'Orange' },
              { v: 'sage',    l: 'Sage' },
              { v: 'straw',   l: 'Straw' },
              { v: 'sky',     l: 'Sky' },
              { v: 'neutral', l: 'Neutral' },
            ]}
            value={state.pillColor}
            onChange={v => update({ pillColor: v })}
          />
        </Fld>
      </div>
    </div>
  );
}

function Fld({ label, children, last }) {
  return (
    <div style={{
      marginBottom: last ? 0 : 16,
      paddingBottom: last ? 0 : 16,
      borderBottom: last ? 'none' : '1px dashed var(--rule)',
    }}>
      <div style={{ fontSize: 10.5, color: 'var(--ink-3)', letterSpacing: '0.1em', marginBottom: 8 }}>
        {label.toUpperCase()}
      </div>
      {children}
    </div>
  );
}

function Chips({ options, value, onChange }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {options.map(o => {
        const on = o.v === value;
        return (
          <button key={String(o.v)} onClick={() => onChange(o.v)}
            style={{
              padding: '6px 11px', fontSize: 11.5,
              borderRadius: 999, fontFamily: 'Inter, sans-serif',
              border: '1px solid ' + (on ? 'var(--orange)' : 'var(--rule-strong)'),
              background: on ? 'var(--orange)' : 'transparent',
              color: on ? '#fff' : 'var(--ink-2)',
              cursor: 'pointer',
            }}>{o.l}</button>
        );
      })}
    </div>
  );
}

Object.assign(window, { Tweaks });
