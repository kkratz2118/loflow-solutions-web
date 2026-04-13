'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What types of processes can you automate?',
    answer: 'We specialize in automating repetitive workflows across operations, marketing, sales, and customer support using AI and custom logic.',
    highlight: 'Automates tasks, reducing overhead',
  },
  {
    question: 'Do I need technical knowledge to use your service?',
    answer: "Not at all. Our team handles the setup, integration, and optimization. You just focus on your goals — we'll automate the rest.",
    highlight: 'Fast setup & implemented on your behalf',
  },
  {
    question: 'Can you integrate with our existing tools?',
    answer: 'Yes! We support integrations with CRMs, project management tools, communication apps, and more — tailored to your stack.',
    highlight: 'Real-time Integrations & Follow-ups',
  },
  {
    question: 'How long does implementation take?',
    answer: 'Most clients see their first automation live within 1–2 weeks, depending on complexity and the number of workflows.',
    highlight: 'Built to grow and adapt with you',
  },
  {
    question: 'What kind of support do I get after setup?',
    answer: "You're never left on your own. We provide ongoing optimization, strategic guidance, and hands-on help so your systems keep performing as your business evolves.",
    highlight: 'Expert support + AI guidance',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-pad">
      <div className="container">
        <div className="text-center mb-12">
          <div className="section-tag">FAQ&apos;S</div>
          <h2 className="heading-section">Frequently <span className="highlight">Asked Questions</span></h2>
          <p className="section-sub" style={{ margin: '0 auto 32px' }}>Find quick answers to the most common support questions</p>
        </div>

        <div className="faq-list" style={{ maxWidth: '700px', margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{faq.question}</span>
                <svg className="faq-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
                <div className="faq-highlight">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {faq.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
