'use client';

import { useState } from 'react';

const serviceCards = [
  {
    badges: ['Clear to Close Update', 'Loaniversary Reminder', 'Referral Follow-Up'] as string[] | null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    ),
    title: 'Done-For-You CRM Setup',
    desc: 'We handle the heavy lifting — full onboarding, workflow configuration, and mortgage-specific automation so you can focus on closing loans, not managing tech.',
  },
  {
    badges: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 9l-5-5-4 4-3-3"/></svg>
    ),
    title: 'Mortgage-Specific Workflows',
    desc: 'Annual review sequences, referral pipelines, post-close follow-up, and lead routing systems built for how top LOs actually work — not generic templates.',
  },
  {
    badges: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    ),
    title: 'Pipeline Intelligence',
    desc: 'Know exactly where every lead stands with real-time data insights. No more guessing about your pipeline health or missing follow-up opportunities.',
  },
  {
    badges: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    ),
    title: 'Custom Integrations',
    desc: 'Seamlessly connect your LOS, dialer, and other tools without the hassle. We build the bridges so your systems actually talk to each other.',
  },
  {
    badges: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
    title: 'Ongoing CRM Support',
    desc: 'Get expert guidance to optimize your system as your business grows. Optional support retainer keeps your CRM running smoothly and profitably.',
  },
];

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="text-center mb-12">
      <div className="section-tag">SERVICES</div>
      <h2 className="heading-section">Mortgage Automation, <span className="highlight">Built for You</span></h2>
      <p className="section-sub" style={{ margin: '0 auto 32px' }}>Everything top-producing LOs need to streamline follow-up, capture referrals, and close more loans.</p>
      <div className="preview-option-label">{label}</div>
    </div>
  );
}

function OptionA() {
  return (
    <section className="section-pad preview-section">
      <div className="container">
        <SectionHeader label="OPTION A — Stack on mobile, grid on desktop" />
        <div className="services-grid-v2">
          {serviceCards.map((c, i) => (
            <div className="service-card-v2" key={i}>
              {c.badges ? (
                <div className="service-tag-row">
                  {c.badges.map((b, j) => <span className="service-badge" key={j}>{b}</span>)}
                </div>
              ) : (
                <div className="card-icon">{c.icon}</div>
              )}
              <div className="service-title">{c.title}</div>
              <p className="service-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OptionB() {
  return (
    <section className="section-pad preview-section bg-muted">
      <div className="container">
        <SectionHeader label="OPTION B — Native swipe with snap" />
      </div>
      <div className="services-snap-row">
        {serviceCards.map((c, i) => (
          <div className="service-snap-card" key={i}>
            {c.badges ? (
              <div className="service-tag-row">
                {c.badges.map((b, j) => <span className="service-badge" key={j}>{b}</span>)}
              </div>
            ) : (
              <div className="card-icon">{c.icon}</div>
            )}
            <div className="service-title">{c.title}</div>
            <p className="service-desc">{c.desc}</p>
          </div>
        ))}
      </div>
      <div className="services-snap-hint">← swipe to see all {serviceCards.length} →</div>
    </section>
  );
}

function OptionC() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad preview-section">
      <div className="container">
        <SectionHeader label="OPTION C — Accordion list" />
        <div className="services-accordion">
          {serviceCards.map((c, i) => {
            const isOpen = open === i;
            return (
              <button
                type="button"
                className={`acc-row${isOpen ? ' open' : ''}`}
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <div className="acc-head">
                  <div className="acc-icon">
                    {c.icon}
                  </div>
                  <div className="acc-title">{c.title}</div>
                  <div className="acc-chevron" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div className="acc-body">
                  {c.badges && (
                    <div className="service-tag-row" style={{ marginBottom: 8 }}>
                      {c.badges.map((b, j) => <span className="service-badge" key={j}>{b}</span>)}
                    </div>
                  )}
                  <p className="service-desc" style={{ margin: 0 }}>{c.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OptionE() {
  return (
    <section className="section-pad preview-section bg-muted">
      <div className="container">
        <SectionHeader label="OPTION E — Editorial numbered list" />
        <div className="services-editorial">
          {serviceCards.map((c, i) => (
            <div className="ed-row" key={i}>
              <div className="ed-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="ed-divider" />
              <div className="ed-body">
                <div className="ed-title">{c.title}</div>
                <p className="ed-desc">{c.desc}</p>
                {c.badges && (
                  <div className="service-tag-row" style={{ marginTop: 8 }}>
                    {c.badges.map((b, j) => <span className="service-badge" key={j}>{b}</span>)}
                  </div>
                )}
              </div>
              <div className="ed-icon">{c.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ROUND 2 ────────────────────────────────────────────────

// OPTION F — Kanban / Pipeline stages
function OptionF() {
  const stages = [
    {
      tag: '01 — SETUP',
      title: 'Get Operational',
      cards: [serviceCards[0], serviceCards[1]],
    },
    {
      tag: '02 — OPERATE',
      title: 'Run the Pipeline',
      cards: [serviceCards[2], serviceCards[3]],
    },
    {
      tag: '03 — SUPPORT',
      title: 'Scale with Us',
      cards: [serviceCards[4]],
    },
  ];
  return (
    <section className="section-pad preview-section">
      <div className="container">
        <SectionHeader label="OPTION F — Kanban / pipeline stages" />
        <div className="serv-kanban">
          {stages.map((s, i) => (
            <div className="serv-kanban-col" key={i}>
              <div className="serv-kanban-head">
                <div className="serv-kanban-tag">{s.tag}</div>
                <div className="serv-kanban-title">{s.title}</div>
              </div>
              <div className="serv-kanban-cards">
                {s.cards.map((c, j) => (
                  <div className="serv-kanban-card" key={j}>
                    {c.badges ? (
                      <div className="service-tag-row">
                        {c.badges.map((b, k) => <span className="service-badge" key={k}>{b}</span>)}
                      </div>
                    ) : (
                      <div className="card-icon">{c.icon}</div>
                    )}
                    <div className="service-title">{c.title}</div>
                    <p className="service-desc">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// OPTION G — Bento grid (asymmetric, featured tile)
function OptionG() {
  const [hero, ...rest] = serviceCards;
  return (
    <section className="section-pad preview-section bg-muted">
      <div className="container">
        <SectionHeader label="OPTION G — Bento grid (featured tile)" />
        <div className="serv-bento">
          <div className="serv-bento-hero">
            {hero.badges && (
              <div className="service-tag-row">
                {hero.badges.map((b, k) => <span className="service-badge" key={k}>{b}</span>)}
              </div>
            )}
            <div className="service-title">{hero.title}</div>
            <p className="service-desc">{hero.desc}</p>
          </div>
          {rest.map((c, i) => (
            <div className="serv-bento-tile" key={i}>
              <div className="card-icon">{c.icon}</div>
              <div className="service-title">{c.title}</div>
              <p className="service-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// OPTION H — Process timeline (vertical numbered steps with connector)
function OptionH() {
  return (
    <section className="section-pad preview-section">
      <div className="container">
        <SectionHeader label="OPTION H — Process timeline" />
        <div className="serv-timeline">
          {serviceCards.map((c, i) => (
            <div className="serv-tl-row" key={i}>
              <div className="serv-tl-rail">
                <div className="serv-tl-node">{String(i + 1).padStart(2, '0')}</div>
              </div>
              <div className="serv-tl-card">
                <div className="serv-tl-icon">{c.icon}</div>
                <div className="serv-tl-body">
                  <div className="service-title">{c.title}</div>
                  <p className="service-desc">{c.desc}</p>
                  {c.badges && (
                    <div className="service-tag-row" style={{ marginTop: 10 }}>
                      {c.badges.map((b, k) => <span className="service-badge" key={k}>{b}</span>)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// OPTION I — Tabbed pills + single panel
function OptionI() {
  const [active, setActive] = useState(0);
  const c = serviceCards[active];
  return (
    <section className="section-pad preview-section bg-muted">
      <div className="container">
        <SectionHeader label="OPTION I — Tabbed pills + panel" />
        <div className="serv-tabs">
          <div className="serv-tab-row">
            {serviceCards.map((sc, i) => (
              <button
                key={i}
                type="button"
                className={`serv-tab${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="serv-tab-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="serv-tab-label">{sc.title}</span>
              </button>
            ))}
          </div>
          <div className="serv-tab-panel">
            <div className="serv-tab-icon">
              {c.badges ? (
                <div className="service-tag-row" style={{ margin: 0 }}>
                  {c.badges.map((b, k) => <span className="service-badge" key={k}>{b}</span>)}
                </div>
              ) : c.icon}
            </div>
            <div className="serv-tab-body">
              <div className="service-title" style={{ fontSize: '1.125rem' }}>{c.title}</div>
              <p className="service-desc" style={{ fontSize: '0.95rem', marginTop: 8 }}>{c.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPreviewPage() {
  return (
    <main className="main-content">
      <div className="preview-banner">
        Services layout preview — pick a winner. Each option below uses the real site styling.
      </div>
      <div className="preview-round-tag">ROUND 1</div>
      <OptionA />
      <OptionB />
      <OptionC />
      <OptionE />
      <div className="preview-round-tag">ROUND 2</div>
      <OptionF />
      <OptionG />
      <OptionH />
      <OptionI />
    </main>
  );
}
