// Benefits v4 — per-section accent class, lit windows.

function Benefits({ state }) {
  return (
    <div id="benefits">
      {BENEFITS.map((b, i) => (
        <BenefitSection key={b.id} benefit={b} index={i} reversed={i % 2 === 1} state={state} />
      ))}
    </div>
  );
}

function BenefitSection({ benefit, index, reversed, state }) {
  const bg = index % 2 === 0 ? 'var(--bg)' : 'var(--bg-2)';
  const cls = sectionClass(benefit.accent, state);

  return (
    <section className={cls + " sec-fade-top lp-section"} style={{
      padding: '100px 0',
      background: bg,
      position: 'relative',
    }}>
      <div className="shell-wide" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-grid-2-bn" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.05fr',
          gap: 72,
          alignItems: 'center',
          direction: reversed ? 'rtl' : 'ltr',
        }}>
          <div style={{ direction: 'ltr' }}>
            <Reveal>
              <SectionMarker n={'0' + (index + 3)} label={benefit.label} state={state} />
              <h2 className="serif" style={{
                fontSize: 'clamp(40px, 4.8vw, 60px)',
                lineHeight: 1.02, letterSpacing: '-0.02em',
                margin: '18px 0 20px', fontWeight: 400, textWrap: 'balance',
              }}>
                {benefit.headline}
              </h2>
              <p style={{ fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0, maxWidth: 460, textWrap: 'pretty' }}>
                {benefit.sub}
              </p>
            </Reveal>
          </div>

          <div style={{ direction: 'ltr' }}>
            <Reveal delay={120}>
              <BenefitVisual benefit={benefit} reversed={reversed} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitVisual({ benefit, reversed }) {
  // When reversed, the visual is on the LEFT of the grid — halo goes top-LEFT
  const spot = reversed ? 'cw-window--spot-tl' : 'cw-window--spot-tr';

  // Memory card uses a dedicated layout (V1 Clean): tool-use badge +
  // file-read timeline + plain-text reply + Claude asterisk at the bottom.
  if (benefit.proofKind === 'memory') {
    return (
      <div className={"cw-window cw-window--lit lp-benefit-window " + spot} style={{ padding: '26px 28px' }}>
        <MemoryIllustration benefit={benefit} />
      </div>
    );
  }

  // Your Voice card reuses the same canonical layout: user prompt →
  // tool-use badge → timeline of Read/Create → ✓ Done → plain-text
  // reply (with file chips) → file card → Claude asterisk.
  if (benefit.proofKind === 'voice') {
    return (
      <div className={"cw-window cw-window--lit lp-benefit-window " + spot} style={{ padding: '26px 28px' }}>
        <VoiceIllustration benefit={benefit} />
      </div>
    );
  }

  // Your Tools card — same canonical layout, but the timeline shows
  // integration searches (Notion / Gmail / Drive) instead of file reads,
  // and the reply is plain text with no file card (mirrors Memory).
  if (benefit.proofKind === 'tools') {
    return (
      <div className={"cw-window cw-window--lit lp-benefit-window " + spot} style={{ padding: '26px 28px' }}>
        <ToolsIllustration benefit={benefit} />
      </div>
    );
  }

  return (
    <div className={"cw-window cw-window--lit lp-benefit-window " + spot} style={{
      padding: '26px 28px 20px',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 18, paddingBottom: 14, borderBottom: '1px solid var(--rule)',
        flexWrap: 'wrap', gap: 10,
      }}>
        <CoworkChip emphasis="halo" size="sm" />
        <span className="mono" style={{ fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.04em' }}>
          {benefit.label.toUpperCase()}
        </span>
      </div>

      <div style={{ marginBottom: 14 }}>
        <UserBubble>{benefit.demo.user}</UserBubble>
      </div>

      <ClaudeReply accent={benefit.accent} searched={benefit.demo.searched}>
        {benefit.proofKind === 'dailybrief' ? (
          <DailyBrief />
        ) : (
          benefit.demo.claude.map((line, i) => (
            <p key={i} style={{ margin: i < benefit.demo.claude.length - 1 ? '0 0 8px' : 0 }}>{line}</p>
          ))
        )}
      </ClaudeReply>

      {benefit.proofKind === 'deliverable' ? <DeliverableProof accent={benefit.accent} /> : null}
    </div>
  );
}

// ---------------------------------------------------------------
// Advanced Memory illustration — V1 Clean
// Brief: user bubble → "Read 3 files" tool badge → vertical timeline
// (MD icons, orange ✓ Done) → Claude reply as plain text (3 short
// paragraphs) → Claude asterisk at the bottom. No header, no avatar,
// no pill, no signature.
// ---------------------------------------------------------------
const MEMORY_FILES = [
  'about-me/memory.md',
  'about-me/activity-log.md',
  'projects/dupont-rebrand/brief.md',
];
const MEMORY_REPLY_LINES = [
  [
    "Yesterday you wrapped the Dupont rebrand narrative — the draft is in ",
    { chip: 'outputs/' },
    ".",
  ],
  ["Marie's reply from Studio XYZ is still open. And you haven't started Friday's proposal for Harlan."],
  ["Where do you want to pick up?"],
];

function MdDocIcon({ size = 18, color = 'var(--ink-3)' }) {
  return (
    <svg width={size} height={size * (22 / 18)} viewBox="0 0 18 22" fill="none" aria-hidden>
      <path d="M3 1.5h8L15 5.5v14A1.5 1.5 0 0 1 13.5 21h-10A1.5 1.5 0 0 1 2 19.5v-16A1.5 1.5 0 0 1 3.5 1.5z"
            stroke={color} strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
      <path d="M11 1.8v3.5h3.7" stroke={color} strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
      <text x="9" y="16" textAnchor="middle" fontFamily="JetBrains Mono, monospace"
            fontSize="5.6" fontWeight="600" fill={color} letterSpacing="0.3">MD</text>
    </svg>
  );
}

function MemoryCheckCircle({ size = 18, color = 'var(--orange)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="8.3" stroke={color} strokeWidth="1.3" fill="none"/>
      <path d="M6.3 10.4l2.5 2.5 5-5" stroke={color} strokeWidth="1.4"
            strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function MemoryIllustration({ benefit }) {
  return (
    <div>
      {/* User prompt */}
      <div style={{ marginBottom: 22, display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{
          display: 'inline-block',
          background: 'var(--userbubble-bg)',
          border: '1px solid var(--userbubble-border)',
          color: 'var(--userbubble-ink)',
          padding: '10px 14px',
          borderRadius: 14,
          fontSize: 14.5,
          maxWidth: '80%',
        }}>What are we working on today?</div>
      </div>

      {/* Tool-use badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        color: 'var(--ink-3)', fontSize: 14,
        marginBottom: 14,
      }}>
        <span>Read 3 files</span>
        <ChevDown size={12} />
      </div>

      {/* Timeline — connectors sit BETWEEN rows, not behind icons */}
      <div>
        {MEMORY_FILES.map((f, i) => (
          <div key={f}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '2px 0',
            }}>
              <MdDocIcon />
              <span style={{ color: 'var(--ink-3)', fontSize: 14.5 }}>
                Read <span style={{ color: 'var(--ink-2)' }}>{f}</span>
              </span>
            </div>
            {/* connector between this row and the next */}
            <div style={{
              marginLeft: 9, width: 1, height: 14,
              background: 'var(--rule-strong)',
            }} />
          </div>
        ))}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          padding: '2px 0',
        }}>
          <MemoryCheckCircle color="var(--orange)" />
          <span style={{ color: 'var(--ink)', fontSize: 14.5, fontWeight: 500 }}>Done</span>
        </div>
      </div>

      {/* Plain-text reply — no bubble, no avatar, no header */}
      <div style={{
        marginTop: 20,
        color: 'var(--ink)',
        fontSize: 15.5,
        lineHeight: 1.65,
        textWrap: 'pretty',
      }}>
        {MEMORY_REPLY_LINES.map((parts, i) => (
          <p key={i} style={{ margin: '0 0 10px' }}>
            {parts.map((part, j) => (
              typeof part === 'string'
                ? <React.Fragment key={j}>{part}</React.Fragment>
                : <span key={j} className="cw-codechip">{part.chip}</span>
            ))}
          </p>
        ))}
      </div>

      {/* Claude asterisk below the reply */}
      <div style={{ marginTop: 14 }}>
        <Asterisk size={22} color={accentColor(benefit.accent)} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// Your Voice illustration — variation A (tight file card).
// Structure mirrors MemoryIllustration exactly:
//   user bubble → tool badge → Read/Create timeline (✓ Done) →
//   plain-text reply with file chips → file card → Claude asterisk.
// Tokens come from the section's .s-sage scope on the <section>,
// so accent-rgb + accent chip tints follow automatically.
// ---------------------------------------------------------------

function VoiceFileIcon({ size = 30, color = 'var(--ink-4)' }) {
  // Dog-eared document, slightly tilted left (matches the reference screenshot).
  const w = size, h = size * (28 / 22);
  return (
    <div style={{
      width: w, height: h,
      display: 'grid', placeItems: 'center',
      transform: 'rotate(-4deg)',
      flexShrink: 0,
    }}>
      <svg width={w} height={h} viewBox="0 0 22 28" fill="none" aria-hidden>
        <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h8.5L19 7v18.5A1.5 1.5 0 0 1 17.5 27h-13A1.5 1.5 0 0 1 3 25.5V2.5z"
              stroke={color} strokeWidth="1.3" fill="none" strokeLinejoin="round" />
        <path d="M13 1v4.5A1.5 1.5 0 0 0 14.5 7H19"
              stroke={color} strokeWidth="1.3" fill="none" strokeLinejoin="round" />
        <path d="M7 13h8M7 16h8M7 19h5"
              stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function ShowInFolderButton() {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'stretch',
      background: 'var(--bg-3)',
      border: '1px solid var(--rule-strong)',
      borderRadius: 10,
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      <button style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: 'transparent', border: 'none',
        color: 'var(--ink)',
        fontFamily: 'inherit', fontSize: 12.5,
        padding: '7px 12px',
        cursor: 'pointer',
      }}>
        <svg width={14} height={11.5} viewBox="0 0 20 16" fill="none" aria-hidden>
          <path d="M1 3.5c0-.83.67-1.5 1.5-1.5H7l2 2h8.5c.83 0 1.5.67 1.5 1.5v8.5c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5V3.5z"
                stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
        </svg>
        Show in Folder
      </button>
      <div style={{ width: 1, background: 'var(--rule-strong)' }} />
      <button aria-label="More" style={{
        display: 'inline-grid', placeItems: 'center',
        background: 'transparent', border: 'none',
        color: 'var(--ink-2)',
        padding: '0 9px',
        cursor: 'pointer',
      }}>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.4"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

function VoiceIllustration({ benefit }) {
  const d = benefit.demo;
  const accentCol = accentColor(benefit.accent);

  return (
    <div>
      {/* User prompt */}
      <div style={{ marginBottom: 22, display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{
          display: 'inline-block',
          background: 'var(--userbubble-bg)',
          border: '1px solid var(--userbubble-border)',
          color: 'var(--userbubble-ink)',
          padding: '10px 14px',
          borderRadius: 14,
          fontSize: 14.5,
          maxWidth: '80%',
        }}>{d.user}</div>
      </div>

      {/* Tool-use badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        color: 'var(--ink-3)', fontSize: 14,
        marginBottom: 14,
      }}>
        <span>{d.badge}</span>
        <ChevDown size={12} />
      </div>

      {/* Timeline — same rhythm as MemoryIllustration */}
      <div>
        {d.files.map((f) => (
          <React.Fragment key={f.path}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '2px 0',
            }}>
              <MdDocIcon />
              <span style={{ color: 'var(--ink-3)', fontSize: 14.5 }}>
                {f.action} <span style={{ color: 'var(--ink-2)' }}>{f.path}</span>
              </span>
            </div>
            <div style={{
              marginLeft: 9, width: 1, height: 14,
              background: 'var(--rule-strong)',
            }} />
          </React.Fragment>
        ))}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          padding: '2px 0',
        }}>
          <MemoryCheckCircle color={accentCol} />
          <span style={{ color: 'var(--ink)', fontSize: 14.5, fontWeight: 500 }}>Done</span>
        </div>
      </div>

      {/* Plain-text reply with file chips */}
      <div style={{
        marginTop: 20,
        color: 'var(--ink)',
        fontSize: 15.5,
        lineHeight: 1.65,
        textWrap: 'pretty',
      }}>
        {d.reply.map((parts, i) => (
          <p key={i} style={{ margin: '0 0 10px' }}>
            {parts.map((part, j) => (
              typeof part === 'string'
                ? <React.Fragment key={j}>{part}</React.Fragment>
                : <span key={j} className="cw-codechip">{part.chip}</span>
            ))}
          </p>
        ))}
      </div>

      {/* File card — variation A (tight) */}
      <div style={{
        marginTop: 18,
        background: 'transparent',
        border: '1px solid var(--rule)',
        borderRadius: 14,
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}>
        <VoiceFileIcon size={30} color="var(--ink-4)" />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 15.5, color: 'var(--ink)',
            letterSpacing: '-0.005em',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{d.file.name}</div>
          <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 2 }}>
            {d.file.subtitle}
          </div>
        </div>
        <ShowInFolderButton />
      </div>

      {/* Claude asterisk below the file card */}
      <div style={{ marginTop: 16 }}>
        <Asterisk size={22} color={accentCol} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// Your Tools illustration — mirrors Memory/Voice canonical layout.
// Structure:
//   user bubble → tool badge ("Used 3 integrations") → timeline of
//   three integration searches (Notion / Gmail / Drive) → ✓ Done →
//   plain-text reply (no chips, no file card) → Claude asterisk.
// Icons are original abstract marks colored to suggest each
// integration without recreating proprietary brand glyphs.
// ---------------------------------------------------------------

function NotionIcon({ size = 22 }) {
  // Real Notion logomark.
  return (
    <img src="src5/assets/notion.png" alt="Notion" width={size} height={size}
         style={{ display: 'block', flexShrink: 0, objectFit: 'contain' }} />
  );
}

function GmailIcon({ size = 22 }) {
  // Real Gmail logomark.
  return (
    <img src="src5/assets/gmail.png" alt="Gmail" width={size} height={size}
         style={{ display: 'block', flexShrink: 0, objectFit: 'contain' }} />
  );
}

function DriveIcon({ size = 22 }) {
  // Real Google Drive logomark.
  return (
    <img src="src5/assets/drive.png" alt="Drive" width={size} height={size}
         style={{ display: 'block', flexShrink: 0, objectFit: 'contain' }} />
  );
}

const TOOL_ICON_MAP = {
  md:     MdDocIcon,
  notion: NotionIcon,
  gmail:  GmailIcon,
  drive:  DriveIcon,
};

function ToolsIllustration({ benefit }) {
  const d = benefit.demo;
  const accentCol = accentColor(benefit.accent);

  return (
    <div>
      {/* User prompt */}
      <div style={{ marginBottom: 22, display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{
          display: 'inline-block',
          background: 'var(--userbubble-bg)',
          border: '1px solid var(--userbubble-border)',
          color: 'var(--userbubble-ink)',
          padding: '10px 14px',
          borderRadius: 14,
          fontSize: 14.5,
          maxWidth: '80%',
        }}>{d.user}</div>
      </div>

      {/* Tool-use badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        color: 'var(--ink-3)', fontSize: 14,
        marginBottom: 14,
      }}>
        <span>{d.badge}</span>
        <ChevDown size={12} />
      </div>

      {/* Timeline — three integration searches, then ✓ Done */}
      <div>
        {d.integrations.map((row, i) => {
          const Icon = TOOL_ICON_MAP[row.tool];
          return (
            <React.Fragment key={i}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '2px 0',
              }}>
                {Icon ? <Icon size={18} /> : null}
                <span style={{ color: 'var(--ink-3)', fontSize: 14.5 }}>
                  {row.action || row.label}
                  {row.target ? <> <span style={{ color: 'var(--ink-2)' }}>{row.target}</span></> : null}
                  {row.query ? <span style={{ color: 'var(--ink-2)' }}> · {row.query}</span> : null}
                </span>
              </div>
              <div style={{
                marginLeft: 9, width: 1, height: 14,
                background: 'var(--rule-strong)',
              }} />
            </React.Fragment>
          );
        })}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          padding: '2px 0',
        }}>
          <MemoryCheckCircle color={accentCol} />
          <span style={{ color: 'var(--ink)', fontSize: 14.5, fontWeight: 500 }}>Done</span>
        </div>
      </div>

      {/* Plain-text reply — no chips, no file card */}
      <div style={{
        marginTop: 20,
        color: 'var(--ink)',
        fontSize: 15.5,
        lineHeight: 1.65,
        textWrap: 'pretty',
      }}>
        {d.reply.map((parts, i) => {
          if (!Array.isArray(parts) && parts && parts.bullet) {
            return (
              <div key={i} style={{
                display: 'flex', gap: 12, alignItems: 'baseline',
                margin: '0 0 6px', paddingLeft: 6,
              }}>
                <span style={{
                  color: 'var(--ink-3)', fontSize: 16, lineHeight: 1,
                  transform: 'translateY(2px)',
                }}>•</span>
                <span>
                  <strong style={{ fontWeight: 600, color: 'var(--ink)' }}>{parts.label}</strong>
                  <span style={{ color: 'var(--ink-3)' }}> — </span>
                  <span>{parts.text}</span>
                </span>
              </div>
            );
          }
          return (
            <p key={i} style={{ margin: '0 0 10px' }}>
              {parts.map((part, j) => (
                typeof part === 'string'
                  ? <React.Fragment key={j}>{part}</React.Fragment>
                  : <span key={j} className="cw-codechip">{part.chip}</span>
              ))}
            </p>
          );
        })}
      </div>

      {/* Claude asterisk below the reply */}
      <div style={{ marginTop: 14 }}>
        <Asterisk size={22} color={accentCol} />
      </div>
    </div>
  );
}

function DeliverableProof({ accent }) {
  const col = accentColor(accent);
  return (
    <div style={{
      marginTop: 18, paddingTop: 18, borderTop: '1px dashed var(--rule)',
    }}>
      <div className="mono" style={{
        fontSize: 10.5, color: 'var(--ink-4)', letterSpacing: '0.08em',
        textTransform: 'uppercase', marginBottom: 10,
      }}>
        Preview — newsletter.md · your voice
      </div>
      <div style={{
        background: 'var(--bg)', border: '1px solid var(--rule)',
        borderRadius: 10, padding: '14px 16px',
        display: 'flex', gap: 14, alignItems: 'center',
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10,
          background: 'linear-gradient(135deg, ' + col + ', var(--orange-ink))',
          flexShrink: 0,
          display: 'grid', placeItems: 'center',
          color: '#fff', fontFamily: 'Instrument Serif, serif', fontSize: 18,
        }}>S</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="serif" style={{ fontSize: 16, letterSpacing: '-0.01em', marginBottom: 3 }}>
            The funnel mistake I made twice.
          </div>
          <div style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>
            By Sarah · 3 min read · your voice, your template
          </div>
        </div>
        <button className="btn btn-ghost" style={{ padding: '7px 12px', fontSize: 12 }}>
          Open
        </button>
      </div>
    </div>
  );
}

function DailyBrief() {
  const rows = [
    { icon: "📧", label: "Gmail", tag: "3 need a reply",
      items: ["Dupont — quick question on the draft","Studio XYZ — partnership inquiry","Newsletter subscriber question"] },
    { icon: "📅", label: "Calendar", tag: "3 events today",
      items: ["10:00  Dupont team call","14:00  Deep work block","16:00  Partnership strategy"] },
    { icon: "📝", label: "Notion", tag: "5 tasks due",
      items: ["Finalize brand narrative","Review partner proposal","+3 more"] },
  ];
  return (
    <div>
      <p style={{ margin: '0 0 14px' }}>Here's your brief for today:</p>
      <div style={{ display: 'grid', gap: 10 }}>
        {rows.map((r, i) => (
          <div key={i} style={{
            background: 'var(--bg)', border: '1px solid var(--rule)',
            borderRadius: 10, padding: '12px 14px',
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: 6,
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--ink)' }}>
                <span style={{ fontSize: 14 }}>{r.icon}</span>
                <span className="mono" style={{ fontSize: 11, letterSpacing: '0.08em' }}>{r.label.toUpperCase()}</span>
              </span>
              <span className="mono" style={{ fontSize: 11, color: 'var(--straw)' }}>
                {r.tag}
              </span>
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.55 }}>
              {r.items.map((it, j) => (
                <div key={j}>· {it}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p style={{ margin: '14px 0 0', fontSize: 14 }}>
        Want me to prioritize these, or start with one?
      </p>
    </div>
  );
}

Object.assign(window, { Benefits });
