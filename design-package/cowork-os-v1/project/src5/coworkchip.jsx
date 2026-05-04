// Shared Cowork OS chip — visual anchor across the page.
// Three variants via `emphasis` prop: 'plain' | 'halo' | 'tagged'
// The chip itself looks like the real Cowork project chip.

function FolderIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size * 0.82} viewBox="0 0 20 16" fill="none" aria-hidden style={{ flexShrink: 0 }}>
      <path
        d="M1 3.5c0-.83.67-1.5 1.5-1.5H7l2 2h8.5c.83 0 1.5.67 1.5 1.5v8.5c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5V3.5z"
        stroke={color} strokeWidth="1.3" fill="none" strokeLinejoin="round"
      />
    </svg>
  );
}

// Larger, richer folder for the Meet-title inline illustration:
// a folder with a small Claude asterisk mark on its face.
// `glow` prop adds the orange halo used across Cowork OS visual moments.
function BrandedFolder({ size = 64, inline = false, glow = false, tilt = 0 }) {
  const w = size;
  const h = size * 0.84;
  // Scale glow with size so it stays tight on the nav logo
  const glowBig = Math.max(6, Math.round(size * 0.22));
  const glowSmall = Math.max(2, Math.round(size * 0.05));
  const glowFilter = glow
    ? `drop-shadow(0 0 ${glowBig}px rgba(204,120,92,0.38)) drop-shadow(0 0 ${glowSmall}px rgba(204,120,92,0.5))`
    : 'none';
  return (
    <span style={{
      display: inline ? 'inline-block' : 'block',
      margin: inline ? '0 0.18em' : 0,
      padding: glow ? '0.18em 0.12em' : 0,
      borderRadius: 10,
      verticalAlign: inline ? '-0.22em' : 'baseline',
      filter: glowFilter,
      transform: tilt ? `rotate(${tilt}deg)` : 'none',
      transformOrigin: 'center center',
    }}>
      <svg width={w} height={h} viewBox="0 0 80 68" fill="none" aria-hidden style={{ display: 'block' }}>
        {/* Back tab */}
        <path
          d="M4 12c0-2.2 1.8-4 4-4h22l6 6h36c2.2 0 4 1.8 4 4v4H4V12z"
          fill="var(--panel-2)" stroke="rgba(204,120,92,0.55)" strokeWidth="1.4" strokeLinejoin="round"
        />
        {/* Front face */}
        <rect x="4" y="16" width="72" height="46" rx="6"
          fill="var(--bg-3)" stroke="rgba(204,120,92,0.55)" strokeWidth="1.4"/>
        {/* Highlight edge */}
        <rect x="4" y="16" width="72" height="2" fill="var(--panel-2)"/>
        {/* Claude sparkle on the face */}
        <g transform="translate(40,41)">
          {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => {
            const a = (i * 30) * Math.PI / 180;
            const long = i % 3 === 0;
            const r1 = long ? 1.6 : 2;
            const r2 = long ? 11 : 8.5;
            return (
              <line key={i}
                x1={Math.cos(a) * r1} y1={Math.sin(a) * r1}
                x2={Math.cos(a) * r2} y2={Math.sin(a) * r2}
                stroke="var(--orange)" strokeWidth="1.9" strokeLinecap="round"/>
            );
          })}
        </g>
      </svg>
    </span>
  );
}

function CoworkChip({ emphasis = 'halo', size = 'md' }) {
  const padY = size === 'lg' ? 10 : size === 'sm' ? 5 : 8;
  const padX = size === 'lg' ? 16 : size === 'sm' ? 10 : 14;
  const font = size === 'lg' ? 15 : size === 'sm' ? 12.5 : 14;

  const halo = emphasis === 'halo' ? {
    boxShadow: '0 0 0 1px rgba(204,120,92,0.35), 0 0 24px -4px rgba(204,120,92,0.35)',
    borderColor: 'rgba(204,120,92,0.55)',
  } : {};

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      {emphasis === 'tagged' ? (
        <span className="mono" style={{
          fontSize: 10.5, color: 'var(--ink-4)',
          letterSpacing: '0.14em', textTransform: 'uppercase',
        }}>
          working in
        </span>
      ) : null}
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: `${padY}px ${padX}px`,
        background: 'var(--panel)',
        border: '1px solid var(--rule-strong)',
        borderRadius: 10,
        color: 'var(--ink)',
        fontSize: font,
        fontWeight: 500,
        letterSpacing: '-0.005em',
        ...halo,
      }}>
        <FolderIcon size={15} color="var(--ink-2)"/>
        <span>Cowork OS</span>
        <ChevDown size={11}/>
      </span>
    </div>
  );
}

// LogoIcon — version icon-first pour nav et footer.
// Tab orange plein, face sombre, contour épais 2.4px, sparkle 6 rayons blancs.
// Props : size (px, défaut 30), glow (bool)
function LogoIcon({ size = 30, glow = false }) {
  const w = size;
  const h = size * 0.84;
  const filter = glow
    ? 'drop-shadow(0 0 6px rgba(204,120,92,0.48)) drop-shadow(0 0 2px rgba(204,120,92,0.3))'
    : 'none';
  return (
    <span style={{ display: 'block', filter }}>
      <svg width={w} height={h} viewBox="0 0 80 68" fill="none" aria-hidden style={{ display: 'block' }}>
        {/* Tab orange plein */}
        <path
          d="M4 12c0-2.2 1.8-4 4-4h22l6 6h36c2.2 0 4 1.8 4 4v4H4V12z"
          fill="#CC785C" stroke="#CC785C" strokeWidth="1" strokeLinejoin="round"
        />
        {/* Face sombre + contour épais */}
        <rect x="4" y="16" width="72" height="46" rx="6"
          fill="#1A1713" stroke="rgba(204,120,92,0.85)" strokeWidth="2.4"
        />
        {/* Jonction subtile tab/face */}
        <rect x="4" y="22" width="72" height="1.5" fill="rgba(204,120,92,0.16)" />
        {/* Sparkle 6 rayons blancs */}
        <g transform="translate(40,41)">
          <line x1="0" y1="-1.4" x2="0" y2="-11.5" stroke="rgba(255,255,255,0.90)" strokeWidth="2.8" strokeLinecap="round"/>
          <line x1="1.22" y1="-0.7" x2="9.96" y2="-5.75" stroke="rgba(255,255,255,0.90)" strokeWidth="2.8" strokeLinecap="round"/>
          <line x1="1.22" y1="0.7" x2="9.96" y2="5.75" stroke="rgba(255,255,255,0.90)" strokeWidth="2.8" strokeLinecap="round"/>
          <line x1="0" y1="1.4" x2="0" y2="11.5" stroke="rgba(255,255,255,0.90)" strokeWidth="2.8" strokeLinecap="round"/>
          <line x1="-1.22" y1="0.7" x2="-9.96" y2="5.75" stroke="rgba(255,255,255,0.90)" strokeWidth="2.8" strokeLinecap="round"/>
          <line x1="-1.22" y1="-0.7" x2="-9.96" y2="-5.75" stroke="rgba(255,255,255,0.90)" strokeWidth="2.8" strokeLinecap="round"/>
        </g>
      </svg>
    </span>
  );
}

Object.assign(window, { FolderIcon, BrandedFolder, CoworkChip, LogoIcon });
