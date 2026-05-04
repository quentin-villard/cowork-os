// Claude-Cowork-style chat UI building blocks.

function accentColor(a) {
  if (a === 'sage')   return 'var(--sage)';
  if (a === 'straw')  return 'var(--straw)';
  if (a === 'sky')    return 'var(--sky)';
  return 'var(--orange)';
}
function accentSoft(a) {
  if (a === 'sage')   return 'var(--sage-soft)';
  if (a === 'straw')  return 'var(--straw-soft)';
  if (a === 'sky')    return 'var(--sky-soft)';
  return 'var(--orange-soft)';
}

function UserBubble({ children }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div className="cw-userbubble">{children}</div>
    </div>
  );
}

function ClaudeReply({ children, accent = 'orange', searched }) {
  const col = accentColor(accent);
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{ flexShrink: 0, paddingTop: 2 }}>
        <Asterisk size={22} color={col} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        {searched ? (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 12.5, color: 'var(--ink-3)',
            marginBottom: 10,
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="5" cy="5" r="3.3" stroke="currentColor" strokeWidth="1.1"/><path d="M7.5 7.5L10 10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>
            {searched} <ChevDown size={10} />
          </div>
        ) : null}
        <div style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function ChatInput({ placeholder = "What's on my plate today?", caret = false, compact = false }) {
  return (
    <div className="cw-input" style={{ padding: compact ? '10px 12px' : '14px 16px' }}>
      <span className="input-text" style={{ display: 'flex', alignItems: 'center' }}>
        {placeholder}
        {caret ? <span style={{
          display: 'inline-block', width: '0.55ch', height: '1.1em',
          background: 'var(--ink)', marginLeft: 2, animation: 'blink 1s step-end infinite',
          verticalAlign: 'middle'
        }}/> : null}
      </span>
      <button className="cw-sendbtn"><SendArrow /></button>
    </div>
  );
}

function ChatToolbar({ projectName = 'Cowork OS by Q', mode = 'Ask', model = 'Opus 4.7' }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px 0 0',
      gap: 14, flexWrap: 'wrap',
    }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <span className="cw-pill"><Folder /> {projectName} <ChevDown /></span>
        <span className="cw-pill">{mode} <ChevDown /></span>
      </div>
      <span style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>{model} <ChevDown size={10}/></span>
    </div>
  );
}

// A "project header" strip — the orange chip with folder + asterisk Claude above
function ProjectHeader({ name, subtitle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
      <Asterisk size={28} />
      <div>
        <div style={{ fontSize: 17, fontWeight: 500, color: 'var(--ink)' }}>{name}</div>
        {subtitle ? <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 2 }}>{subtitle}</div> : null}
      </div>
    </div>
  );
}

// Accent-aware keystroke style style
const keyStyles = `
  @keyframes blink { 50% { opacity: 0; } }
`;
if (!document.getElementById('cw-key-styles')) {
  const s = document.createElement('style');
  s.id = 'cw-key-styles';
  s.innerHTML = keyStyles;
  document.head.appendChild(s);
}

Object.assign(window, { UserBubble, ClaudeReply, ChatInput, ChatToolbar, ProjectHeader, accentColor, accentSoft });
