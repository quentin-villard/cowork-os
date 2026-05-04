// Day v4 — per-scene accent drives glow and lit window.

function Day({ state }) {
  const [active, setActive] = React.useState(0);
  const scene = DAY[active];
  const cls = sectionClass(scene.color, state);

  return (
    <section id="day" className={cls} style={{
      padding: '110px 0 120px',
      background: 'var(--bg-2)',
      position: 'relative',
    }} className="sec-fade-top">
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <SectionHead
            n="06"
            label="See it in action"
            title={<>See Cowork OS <em className="ital">in action.</em></>}
            lead="Meet Sarah — she consults on brand and voice for small teams. Here's four moments from her week once Claude became a coworker who remembers."
            state={state}
          />
        </Reveal>

        <div style={{
          marginTop: 64,
          display: 'grid',
          gridTemplateColumns: '240px 1fr',
          gap: 48,
          alignItems: 'start',
        }}>
          <div>
            {DAY.map((d, i) => {
              const on = i === active;
              const col = accentColor(d.color);
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                    width: '100%',
                    padding: '16px 14px',
                    marginBottom: 4,
                    background: on ? 'var(--bg-3)' : 'transparent',
                    border: '1px solid',
                    borderColor: on ? 'var(--rule-strong)' : 'transparent',
                    borderRadius: 10,
                    cursor: 'pointer',
                    color: 'inherit',
                    fontFamily: 'inherit',
                    textAlign: 'left',
                    transition: 'background .2s ease',
                  }}>
                  <div style={{ paddingTop: 4 }}>
                    <div style={{
                      width: 10, height: 10, borderRadius: 50,
                      background: on ? col : 'var(--rule-strong)',
                      boxShadow: on ? `0 0 0 4px ${col}22` : 'none',
                      transition: 'box-shadow .2s ease',
                    }}/>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="mono" style={{
                      fontSize: 11, color: on ? col : 'var(--ink-4)',
                      letterSpacing: '0.04em', marginBottom: 4,
                    }}>{d.time}</div>
                    <div style={{
                      fontSize: 14, color: on ? 'var(--ink)' : 'var(--ink-3)',
                      lineHeight: 1.35,
                    }}>{d.title}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <Reveal key={active}>
            <div className={"cw-window cw-window--lit cw-window--spot-tr " + sectionClass(scene.color, state)} style={{
              padding: '26px 30px 22px',
              minHeight: 420,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22, flexWrap: 'wrap', gap: 10 }}>
                <CoworkChip emphasis="halo" size="sm" />
                <span className="mono" style={{ fontSize: 11.5, color: accentColor(scene.color), letterSpacing: '0.04em' }}>
                  {scene.time}
                </span>
              </div>

              <div style={{ marginBottom: 16 }}>
                <UserBubble>{scene.user}</UserBubble>
              </div>

              <ClaudeReply accent={scene.color} searched={active === 2 ? 'Searched 4 patterns' : null}>
                {scene.claude.map((line, i) => (
                  <p key={i} style={{ margin: i < scene.claude.length - 1 ? '0 0 10px' : 0 }}>{line}</p>
                ))}
              </ClaudeReply>

              <div style={{ marginTop: 22 }}>
                <ChatInput placeholder="Type a follow-up…" caret compact/>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Day });
