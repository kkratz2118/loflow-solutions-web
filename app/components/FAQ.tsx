'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What types of processes can you automate?',
    answer: 'We specialize in automating repetitive workflows across operations, marketing, sales, and customer support using AI and custom logic.',
  },
  {
    question: 'Do I need technical knowledge to use your service?',
    answer: "Not at all. Our team handles the setup, integration, and optimization. You just focus on your goals — we'll automate the rest.",
  },
  {
    question: 'Can you integrate with our existing tools?',
    answer: 'Yes! We support integrations with CRMs, project management tools, communication apps, and more — tailored to your stack.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'Most clients see their first automation live within 1–2 weeks, depending on complexity and the number of workflows.',
  },
  {
    question: 'Is your AI secure and compliant?',
    answer: 'Absolutely. We use enterprise-grade security practices and ensure compliance with major data privacy standards like GDPR.',
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

        <div className="faq-layout">
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  <span>{faq.question}</span>
                  <svg className="faq-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact-card">
            <h3>Still Have Questions?</h3>
            <p>Feel free to get in touch with us today!</p>
            <a href="mailto:hello@loflowsolutions.com" className="btn-secondary">Ask A Question</a>
          </div>
        </div>
      </div>
    </section>
  );
}
