import React from 'react';
import FAQCard from './FAQCard';
import './FAQSection.css';

function FAQSection() {
  const faqData = [
    {
      question: 'How FDs are taxed',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    // Add more FAQ data
  ];

  return (
    <section className="faq-section">
      <h2>Get Answer to all your questions</h2>
      <div className="faq-cards-container">
        {faqData.map((faq, index) => (
          <FAQCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

export default FAQSection;