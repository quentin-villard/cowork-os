// Anti-slop voice demo — reframed as "Your writing stops sounding like ChatGPT".

function Voice() {
  const [side, setSide] = React.useState('yours');

  return (
    <section id="voice" style={{ padding: '110px 0 120px' }}>
      <div className="shell">
        <Reveal>
          <SectionHead
            n="06"
            label="Your voice"
            title="Your writing stops sounding like ChatGPT."
            lead="Drop in a few emails or posts you're proud of. From then on, Claude drafts in your register — short sentences, your phrasing, your sign-off."
            align="center"
          />
        </Reveal>

        <Reveal>
          <div style={{
            marginTop: 56,
            background: 'var(--bg-2)',
            border: '1px solid var(--rule)',
            borderRadius: 16,
            overflow: 'hidden',
            maxWidth: 980, margin: '56px auto 0',
          }}>
            <div style={{
              padding: '16px 22px',
              borderBottom: '1px solid var(--rule)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: 14, flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 260 }}>
                <Asterisk size={20} />
                <span style={{ fontSize: 13.5, color: 'var(--ink-2)' }}>
                  Prompt: <span style={{ color: 'var(--ink)' }}>{VOICE.prompt}</span>
                </span>
              </div>
              <div style={{
                display: 'flex',
                padding: 3,
                background: 'var(--bg)',
                border: '1px solid var(--rule-strong)',
                borderRadius: 999,
              }}>
                <Tog on={side==='generic'} onClick={() => setSide('generic')}>Without Cowork OS</Tog>
                <Tog on={side==='yours'}   onClick={() => setSide('yours')}>With Cowork OS</Tog>
              </div>
            </div>

            <div style={{ padding: '26px 30px 24px' }}>
              <UserBubble>{VOICE.prompt}</UserBubble>

              <div style={{ marginTop: 20 }}>
                <ClaudeReply accent={side === 'yours' ? 'sage' : 'orange'}>
                  {side === 'generic' ? (
                    <div style={{ opacity: 0.82 }}>
                      {VOICE.generic.map((l, i) => (
                        <p key={i} style={{ margin: '0 0 10px', color: 'var(--ink-3)' }}>{l}</p>
                      ))}
                    </div>
                  ) : (
                    <div>
                      {VOICE.yours.map((l, i) => (
                        <p key={i} style={{ margin: '0 0 10px' }}>{l}</p>
                      ))}
                    </div>
                  )}

                  {/* Verdict chip */}
                  <div style={{ marginTop: 14 }}>
                    {side === 'generic' ? (
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        padding: '4px 10px', borderRadius: 6,
                        background: 'rgba(214,168,91,0.12)', color: 'var(--straw)',
                        fontSize: 11.5, letterSpacing: '0.06em',
                      }}>
                        ● Smells like AI
                      </span>
                    ) : (
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        padding: '4px 10px', borderRadius: 6,
                        background: 'var(--sage-soft)', color: 'var(--sage)',
                        fontSize: 11.5, letterSpacing: '0.06em',
                      }}>
                        ● Sounds like Sarah
                      </span>
                    )}
                  </div>
                </ClaudeReply>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p style={{
            textAlign: 'center',
            color: 'var(--ink-3)',
            fontSize: 14,
            marginTop: 28,
            maxWidth: 560,
            marginLeft: 'auto', marginRight: 'auto',
          }}>
            No prompt engineering. You paste your writing, Claude learns the pattern, and every future draft follows it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Tog({ on, onClick, children }) {
  return (
    <button onClick={onClick}
      style={{
        padding: '6px 14px', fontFamily: 'Inter, sans-serif', fontSize: 12.5, fontWeight: 500,
        border: 'none', borderRadius: 999, cursor: 'pointer',
        background: on ? 'var(--orange)' : 'transparent',
        color: on ? '#fff' : 'var(--ink-3)',
        transition: 'all .2s ease',
      }}>{children}</button>
  );
}

Object.assign(window, { Voice });
