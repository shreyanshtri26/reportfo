import React from 'react';
import './FAQCard.css';

function FAQCard({ question, answer }) {
  return (
    <div className="faq-card">
      <h3>{question}</h3>
      <p>{answer}</p>
      <a href="#">Read more</a>
    </div>
  );
}

export default FAQCard;